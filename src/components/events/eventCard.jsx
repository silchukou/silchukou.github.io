import "./eventCard.css";

export function EventCard(props) {
  const { event } = props;
  const date = new Date(event.date);

  return (
    <div className="pt-4 pb-4 text-center">
      <div className="bg-card-wrap rounded-2xl">
        <img className="bg-card-image" src={event.background} alt="" />
        <a href={event.link} target="_blank" rel="noreferrer">
          <div
            className={
              "flex lg:flex-row flex-col items-start lg:items-center justify-evenly w-full h-full lg:p-8 p-4 backdrop-blur-sm"
            }
          >
            <div className="flex flex-row items-end">
              <div className="lg:text-4xl text-3xl font-light tracking-wider">
                {date.getDate()}
              </div>
              <div className="text-xl font-light tracking-wider">
                {date.toLocaleString("default", { month: "short" })}
              </div>
            </div>
            <div className="lg:text-3xl text-xl font-light tracking-wider">
              {event.location}
            </div>
            <div className="lg:text-3xl text-xl font-light tracking-wider">
              {event.state}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
