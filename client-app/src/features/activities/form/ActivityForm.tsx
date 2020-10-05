import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
}

export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialFormState,
}) => {
  const initializeFrom = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: "",
        title: "",
        category: "",
        description: "",
        date: "",
        city: "",
        venue: "",
      };
    }
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  const [activity, setActivity] = useState<IActivity>(initializeFrom);

  return (
    <Segment clearing>
      <Form>
        <Form.Input
          onChange={handleInputChange}
          placeholder="Title"
          value={activity.title}
          name="title"
        ></Form.Input>
        <Form.TextArea
          onChange={handleInputChange}
          rows={2}
          placeholder="Description"
          value={activity.description}
          name="description"
        ></Form.TextArea>
        <Form.Input
          onChange={handleInputChange}
          placeholder="Category"
          value={activity.category}
          name="category"
        ></Form.Input>
        <Form.Input
          onChange={handleInputChange}
          type="date"
          placeholder="Date"
          value={activity.date}
          name="date"
        ></Form.Input>
        <Form.Input
          onChange={handleInputChange}
          placeholder="City"
          value={activity.city}
          name="city"
        ></Form.Input>
        <Form.Input
          onChange={handleInputChange}
          placeholder="Venue"
          value={activity.venue}
          name="venue"
        ></Form.Input>
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          floated="right"
          onClick={() => setEditMode(false)}
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};
