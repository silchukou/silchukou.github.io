"client";
import "./events.css";
import { EventCard } from "./eventCard";
import { useContext, useEffect, useState } from "react";
import {
  getUpcomingEvents,
  getUpcomingEventsCount,
} from "../../services/sanity";
import { Spin } from "antd";
import { ImSpinner2 } from "react-icons/im";
import { LocaleContext } from "../../contexts/locale";

export function Events() {
  const { _t } = useContext(LocaleContext);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    getUpcomingEvents(events.length, events.length + 4).then((data) => {
      setLoading(false);
      setEvents((prev) => [...prev, ...data]);
    });
    getUpcomingEventsCount().then((data) => {
      setTotalCount(data);
    });
  }, []);

  const loadMore = () => {
    setLoading(true);
    getUpcomingEvents(events.length, events.length + 4).then((data) => {
      setLoading(false);
      setEvents((prev) => [...prev, ...data]);
    });
  };

  return (
    <>
      <div className="bg-wrap pb-4">
        <img
          className="bg-image -z-50"
          src="events_bg.png"
          alt="Event Page Background"
        />
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
        {events.length < totalCount && (
          <div className="flex justify-center items-center">
            <button className="button" onClick={loadMore}>
              {(loading && (
                <Spin
                  indicator={<ImSpinner2 className="animate-spin text-white" />}
                />
              )) ||
                _t("events:load_more")}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
