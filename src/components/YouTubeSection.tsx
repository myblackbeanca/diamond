export default function YouTubeSection() {
  const videos = [
    'https://www.youtube.com/embed/lpikrAjMeXg',
    'https://www.youtube.com/embed/sUkN893ws6c',
    'https://www.youtube.com/embed/K9JMLbcr1A8',
    'https://www.youtube.com/embed/uCMywqbcm1s'
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Latest Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((url, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9 bg-purple-900/20 rounded-xl overflow-hidden">
              <iframe
                src={url}
                title={`Kevin Diamond video ${index + 1}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}