import React from "react";

// Editable tour data
const tourDates = [

  {
    date: "2025-07-05",
    location: "The Front Yard @ Fredericton, NB",
    infoURL: "https://tickets.com/la-show",
  },
  {
    date: "2025-08-02",
    location: "The Cap @ Fredericton, NB",
    infoURL: "https://tickets.com/la-show",
  },
  {
    date: "2024-07-03",
    location: "Fredericton, NB",
    infoURL: "https://tickets.com/ny-show",
  },
  {
    date: "2023-11-22",
    location: "Fredericton, NB",
    infoURL: "https://tickets.com/chicago-show",
  },
  {
    date: "2024-09-10",
    location: "Fredericton, NB",
    infoURL: "https://tickets.com/austin-show",
  },
];

function TourSection() {
  const today = new Date();

  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold">SHOWS</h2>
      <ul className="space-y-3">
        {tourDates.map((show, index) => {
          const showDate = new Date(show.date);
          const isPast = showDate < today;

          return (
            <li
              key={index}
              className={`flex justify-between items-center border-b py-2 ${
                isPast ? "text-gray-400 line-through" : ""
              }`}
            >
              <span>
                {showDate.toLocaleDateString(undefined, {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}{" "}
                – {show.location}
              </span>

              {isPast ? (
                <span className="text-sm italic text-gray-400">Event Passed</span>
              ) : (
                <a
                  href={show.infoURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-blue-600 text-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition-all"
                >
                  Buy Tickets
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TourSection;
