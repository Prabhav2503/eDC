// ScrollStack.jsx
import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full h-80 my-6 md:my-8 p-6 md:p-12 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d'
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.06,
  itemStackDistance = 30,
  stackPosition = '10%',
  scaleEndPosition = '5%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const lenisRef = useRef(null);
  const animationFrameRef = useRef(null);
  const tickingRef = useRef(false);
  const stackCompletedRef = useRef(false);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller ? scroller.scrollTop : 0,
        containerHeight: scroller ? scroller.clientHeight : 0,
        scrollContainer: scroller
      };
    }
  }, [useWindowScroll]);

  // compute element top relative to the scroll container (window or scroller)
  const getElementOffset = useCallback(
    (element) => {
      if (!element) return 0;
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        const scroller = scrollerRef.current;
        if (!scroller) return element.offsetTop;
        const elemRect = element.getBoundingClientRect();
        const scrollerRect = scroller.getBoundingClientRect();
        // distance from top of scroller content
        return elemRect.top - scrollerRect.top + scroller.scrollTop;
      }
    },
    [useWindowScroll]
  );

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const updateCardTransforms = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards?.length) return;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end');

    const endElementTop = endElement ? getElementOffset(endElement) : Number.MAX_SAFE_INTEGER;

    cards.forEach((card, i) => {
      if (!card) return;

      const cardTop = getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cards.length; j++) {
          const jCardTop = getElementOffset(cards[j]);
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) topCardIndex = j;
        }
        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100
      };

      const last = lastTransformsRef.current.get(i);
      const hasChanged =
        !last ||
        Math.abs(last.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(last.scale - newTransform.scale) > 0.001 ||
        Math.abs(last.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(last.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

        card.style.transform = transform;
        card.style.filter = filter;
        lastTransformsRef.current.set(i, newTransform);
      }

      // stack completion detection for last card
      if (i === cards.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    baseScale,
    blurAmount,
    calculateProgress,
    getElementOffset,
    getScrollData,
    itemScale,
    itemStackDistance,
    onStackComplete,
    parsePercentage,
    rotationAmount,
    scaleEndPosition,
    stackPosition,
    useWindowScroll
  ]);

  // handle scroll for window or scroller
  const bindScroll = useCallback(() => {
    // cleanup previous
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    if (useWindowScroll) {
      // Lenis for window scroll
      const lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075
      });
      lenis.on('scroll', () => {
        if (!tickingRef.current) {
          tickingRef.current = true;
          requestAnimationFrame(() => {
            updateCardTransforms();
            tickingRef.current = false;
          });
        }
      });
      const raf = (time) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);
      lenisRef.current = lenis;
    } else {
      // Native scroller - plain scroll listener + rAF throttle
      const scroller = scrollerRef.current;
      if (!scroller) return;
      const onScroll = () => {
        if (!tickingRef.current) {
          tickingRef.current = true;
          requestAnimationFrame(() => {
            updateCardTransforms();
            tickingRef.current = false;
          });
        }
      };
      scroller.addEventListener('scroll', onScroll, { passive: true });

      // Keep reference for cleanup
      animationFrameRef.current = { cleanupScrollListener: () => scroller.removeEventListener('scroll', onScroll) };
    }
  }, [updateCardTransforms, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // find cards (in scroller inner)
    const cards = Array.from(
      useWindowScroll ? document.querySelectorAll('.scroll-stack-card') : scroller.querySelectorAll('.scroll-stack-card')
    );
    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
    });

    // bind scroll (Lenis or native)
    bindScroll();

    // initial update
    updateCardTransforms();

    // on resize update transforms
    const onResize = () => updateCardTransforms();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);

      // cleanup lenis or native listener
      if (useWindowScroll) {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
        if (lenisRef.current) {
          lenisRef.current.destroy();
          lenisRef.current = null;
        }
      } else {
        if (animationFrameRef.current?.cleanupScrollListener) {
          animationFrameRef.current.cleanupScrollListener();
          animationFrameRef.current = null;
        }
      }
      cardsRef.current = [];
      lastTransformsRef.current.clear();
      stackCompletedRef.current = false;
      tickingRef.current = false;
    };
  }, [
    bindScroll,
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    updateCardTransforms
  ]);

  const containerStyles = useWindowScroll
    ? {
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)'
      }
    : {
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        willChange: 'scroll-position'
      };

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim();

  return (
    <div className={containerClassName} ref={scrollerRef} style={containerStyles}>
      <div className="scroll-stack-inner pt-[10vh] md:pt-[15vh] px-4 md:px-20 pb-[30rem] min-h-[80vh]">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
