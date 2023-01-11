import cuid from "cuid";
import { Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { CreateEvent, updateEvent } from "../eventActions";

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          CreateEvent({
            ...values,
            id: cuid(),
            hostedBy: "Bob",
            attendees: [],
            hostedPhotoURL: "/assets/user.png",
          })
        );
    history.push("/events");
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit the event" : "Cretae new event"} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <input
                type="text"
                placeholder="Event Title"
                name="title"
                value={values.title}
                onChange={(e) => handleChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                placeholder="Category"
                name="category"
                value={values.category}
                onChange={(e) => handleChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={(e) => handleChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={(e) => handleChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                placeholder="Venue"
                name="venue"
                value={values.venue}
                onChange={(e) => handleChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <input
                type="date"
                placeholder="Date"
                name="date"
                value={values.date}
                onChange={(e) => handleChange(e)}
              />
            </Form.Field>
            <Button type="submit" floated="right" positive content="Submit" />
            <Button
              as={Link}
              to="/events"
              type="submit"
              floated="right"
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
}
