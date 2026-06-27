import { useEffect, useState } from "react";
import { sampleResumePics } from "../data/sampleResumePics";
import { useNavigate } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ImageWithLoader from "../components/others/ShimmerFolder/ImageWithLoader";

const SampleResumePics = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const navigate = useNavigate();

  const handleTouchStart = (e) => {
  setTouchStartX(e.touches[0].clientX);
};

const handleTouchMove = (e) => {
  setTouchEndX(e.touches[0].clientX);
};

const handleTouchEnd = () => {
  const diff = touchStartX - touchEndX;

  // swipe left → next
  if (diff > 50) {
    nextImage();
  }

  // swipe right → prev
  if (diff < -50) {
    prevImage();
  }
};



  const openGallery = (gallery) => {
    setSelectedGallery(gallery);
    setCurrentIndex(0);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    if (!selectedGallery) return;
    setCurrentIndex((prev) =>
      prev === selectedGallery.url.length - 1 ? prev : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedGallery) return;

      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedGallery]);

  useEffect(() => {
    document.body.style.overflow = selectedGallery ? "hidden" : "auto";
  }, [selectedGallery]);

  const downloadImage = (imageUrl, fileName) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 rounded border cursor-pointer bg-white px-3 py-1 text-sm text-slate-700 hover:bg-slate-100"
        >
          ← Back
        </button>

        <h1 className="text-2xl font-semibold">Resume Samples</h1>

        <p className="text-sm text-slate-500">
          Click view to open resume preview
        </p>

        {/* GRID */}
        <div
          className="mt-6 grid grid-cols-1 gap-6 
        sm:grid-cols-2 lg:grid-cols-4 py-10"
        >
          {sampleResumePics.map((gallery) => (
            <div
              key={gallery.id}
              className="group overflow-hidden
              rounded-xlbg-white shadow-lg border
              border-slate-200 transition-all duration-300
              hover:-translate-y-1 hover:shadow-2xl 
              hover:border-indigo-300"
            >
              {/* IMAGE */}
              <div
                className="w-full aspect-[1241/1754] 
                bg-slate-100 overflow-hidden relative"
              >
                <ImageWithLoader
                src={gallery.url[0]}
                alt={gallery.title}
                variant="shimmer"
                size="3xl"
                className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="border-t p-3">
                <h3 className="truncate text-sm font-semibold">
                  {gallery.title}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {gallery.url.length} pages
                </p>

                {/* VIEW BUTTON */}
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => openGallery(gallery)}
                    className="flex-1 rounded-md bg-black py-2 
    text-xs text-white hover:bg-black/85 cursor-pointer"
                  >
                    View Resume
                  </button>

                  <button
                    onClick={() =>
                      downloadImage(
                        gallery.url[0],
                        `${gallery.title.replace(/\s+/g, "-")}.jpg`,
                      )
                    }
                    className="rounded-md border border-slate-300 
    bg-white px-3 py-2 text-xs 
    hover:bg-slate-100 cursor-pointer"
                  >
                    Downlaod
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedGallery && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95">
          {/* BACKDROP (click outside to close) */}
          <div className="absolute inset-0" onClick={closeGallery} />

          {/* TOP BAR */}
          <div className="relative z-10 flex items-center justify-between px-3 sm:px-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                downloadImage(
                  selectedGallery.url[currentIndex],
                  `${selectedGallery.title}-Page-${currentIndex + 1}.jpg`,
                );
              }}
              className="rounded-md cursor-pointer
              bg-white px-3 py-1 text-xs sm:text-sm 
              font-medium text-black shadow 
              hover:bg-slate-200"
            >
              Download
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                closeGallery();
              }}
              className="text-3xl cursor-pointer text-white"
            >
              ×
            </button>
          </div>

          {/* ZOOM AREA */}
          <div className="relative z-10 flex flex-1 items-center justify-center px-2 overflow-hidden"
          onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
          >
            <TransformWrapper
              initialScale={1}
              minScale={1}
              maxScale={4}
              wheel={{ step: 0.2 }}
              doubleClick={{ mode: "zoomIn" }}
              centerOnInit
              limitToBounds={true}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  {/* FLOATING ZOOM CONTROLS (mobile safe) */}

                  <TransformComponent>
                    <img
                      src={selectedGallery.url[currentIndex]}
                      alt={selectedGallery.title}
                      draggable={false}
                      className="
                  max-h-[72vh]
                  max-w-[95vw]
                  object-contain
                  select-none
                  mx-auto
                "
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>

          {/* BOTTOM NAV (safe mobile layout) */}
          <div className="relative z-10 flex items-center justify-between px-4 py-4 text-white">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              disabled={currentIndex === 0}
              className="rounded border px-3 py-1 text-sm 
              cursor-pointer
              disabled:opacity-30"
            >
              ← Prev
            </button>

            <span className="text-xs sm:text-sm">
              {currentIndex + 1} / {selectedGallery.url.length}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              disabled={currentIndex === selectedGallery.url.length - 1}
              className="rounded border 
              cursor-pointer
              px-3 py-1 text-sm disabled:opacity-30"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SampleResumePics;
