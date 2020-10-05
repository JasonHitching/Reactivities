import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, List } from "semantic-ui-react";
import { IActivity } from "../models/activity";
import { NavBar } from "../../features/NavBar";
const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  useEffect(() => {
    //Axios get request to return a list of activities from the API
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Container className="act-list">
        <List>
          {activities.map((activity) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </Container>
    </>
  );
};

export default App;
