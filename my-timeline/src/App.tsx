const Timeline = () => {
  const events = [
    {
      period: "Peuter & Kleutertijd (1-5)",
      year: "2008-2013",
      highlights: [
        {
          type: "memory",
          description:
            "Herinneringen van de binnenkant van de peuterspeelzaal (Ukkenburg)",
        },
        {
          type: "highlight",
          description: "Met de slee naar de Ukkenburg in de winter",
        },
      ],
    },
    {
      period: "Basisschool (6-12)",
      year: "2014-2020",
      highlights: [
        {
          type: "highlight",
          description: "Elke donderdag met Robert treinreizen door Nederland",
        },
        {
          type: "lowlight",
          description: "Moeilijke tijd op Pallas Athene school",
        },
        {
          type: "transition",
          description: "Overstap naar de vrijeschool in groep 4",
        },
      ],
    },
    {
      period: "Vroege Adolescentie (12-15)",
      year: "2020-2023",
      highlights: [
        {
          type: "highlight",
          description:
            "Vakanties met vader naar Denemarken, Zweden, Noorwegen, etc.",
        },
        {
          type: "friendship",
          description: "Vriendschap met Orry",
        },
        {
          type: "lowlight",
          description: "Moeilijke periode met pesten en onzekerheid",
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Mijn Levensverhaal
      </h1>
      <div className="relative">
        {events.map((event, index) => (
          <div key={index} className="mb-12 relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 w-1 h-full bg-blue-200" />

            {/* Time period marker */}
            <div className="flex items-start">
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold z-10 relative">
                  {index + 1}
                </div>
              </div>

              <div className="ml-8 bg-white p-6 rounded-lg shadow-lg w-full">
                <h2 className="text-xl font-bold mb-2">{event.period}</h2>
                <p className="text-gray-600 mb-4">{event.year}</p>

                <div className="space-y-3">
                  {event.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className={`p-3 rounded-lg ${
                        highlight.type === "highlight"
                          ? "bg-green-100"
                          : highlight.type === "lowlight"
                          ? "bg-red-100"
                          : highlight.type === "memory"
                          ? "bg-yellow-100"
                          : highlight.type === "friendship"
                          ? "bg-purple-100"
                          : "bg-blue-100"
                      }`}
                    >
                      <p className="text-sm">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
