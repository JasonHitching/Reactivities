import React, { Component } from "react";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";
import { IActivity } from "../models/activity";

interface IState {
  activities: IActivity[]
}

class App extends Component<{}, IState> {
  state: IState = {
    activities: [],
  };

  // When component mounts use axios to retrieve data from the project API
  componentDidMount() {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      this.setState({
        // values array within state property = API response data
        activities: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Header as="h2">
          <Icon name="plug" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.activities.map((activity: any) => (
            <List.Item key={activity.id}>{activity.title}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
