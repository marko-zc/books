import React from "react";
import Form from "./components/Form";
import Result from "./components/Result";



class App extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      error: null,
      data: null,
      value: null
    }
  }

  handleChange = (event) =>
  {
    const value = event.target.value;
    this.setState({ value });
  }

  handleSubmit = (event) =>
  {
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + this.state.value + "&maxResults=40")
      .then(response => response.json())
      .then(
        (data) => {
          this.setState({
            data,
            error: data.error
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      ) 
  }

  render()
  {
    const { error, data } = this.state;

    if(error){
      return <div>Error: {error.message}</div>
    } else {
      return (
      <div>
          <Form onSubmit={this.handleSubmit} onChange={this.handleChange} />
          <Result data={data} />
      </div>
      );
    }
  }
}

export default App;
