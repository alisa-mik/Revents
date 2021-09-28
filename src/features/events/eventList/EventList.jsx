import { EventListItem } from "./EventListItem";

export function EventList({ events, selectEvent, deleteEvent }) {
    return (
        <>
            {events.map(event => (
                <EventListItem event={event} key={event.id} selectEvent={selectEvent} deleteEvent={deleteEvent} />

            ))}

        </>
    )
}