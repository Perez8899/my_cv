import { useState } from 'react';

export default function ProjectGallery({ images, title }) {
  const [index, setIndex] = useState(0);

  if (!images?.length) return null;

  const goPrev = () => {
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const goNext = () => {
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  const showControls = images.length > 1;

  return (
    <figure className="timeline__gallery">
      <div className="timeline__gallery-viewport">
        <img
          src={images[index]}
          alt={`Captura ${index + 1} de ${title}`}
          loading="lazy"
        />
        {showControls && (
          <>
            <button
              type="button"
              className="timeline__gallery-btn timeline__gallery-btn--prev"
              onClick={goPrev}
              aria-label="Imagen anterior"
            >
              &lt;
            </button>
            <button
              type="button"
              className="timeline__gallery-btn timeline__gallery-btn--next"
              onClick={goNext}
              aria-label="Imagen siguiente"
            >
              &gt;
            </button>
          </>
        )}
      </div>
      {showControls && (
        <figcaption className="timeline__gallery-counter">
          {index + 1} / {images.length}
        </figcaption>
      )}
    </figure>
  );
}
