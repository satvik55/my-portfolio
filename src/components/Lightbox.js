import React, { useState, useEffect, useCallback } from 'react';

/**
 * Lightbox with optional image navigation.
 * Props:
 *   images  – array of image URLs
 *   index   – which image to start on (default 0)
 *   alt     – alt text
 *   onClose – close callback
 */
export default function Lightbox({ images, index = 0, alt, onClose }) {
  const [current, setCurrent] = useState(index);
  const multi = images.length > 1;

  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowLeft')   prev();
      if (e.key === 'ArrowRight')  next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  return (
    <div className="lb-overlay" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Close">&times;</button>

      <div className="lb-content" onClick={e => e.stopPropagation()}>

        {multi && (
          <button className="lb-nav lb-nav--prev" onClick={prev} aria-label="Previous image">
            &#8249;
          </button>
        )}

        <img
          src={images[current]}
          alt={alt || ''}
          className="lb-img"
          key={current}
        />

        {multi && (
          <button className="lb-nav lb-nav--next" onClick={next} aria-label="Next image">
            &#8250;
          </button>
        )}

        {multi && (
          <div className="lb-footer">
            <div className="lb-dots">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`lb-dot${i === current ? ' lb-dot--on' : ''}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
            <span className="lb-counter">{current + 1} / {images.length}</span>
          </div>
        )}
      </div>
    </div>
  );
}
