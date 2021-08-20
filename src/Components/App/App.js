import React from "react";
import {Component} from "react";
import DataFetcher from "../../Utilities/DataFetcher";
import './App.css';
import ReactPlayer from "react-player";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      apodInfo: []
    }
  }

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mt-4">
                    <blockquote className="blockquote">
                        <p className="h1">{this.state.apodInfo.title}</p>
                        <footer className="blockquote-footer mt-1"><strong>NASA Astronomy Picture of the Day<br/><cite title="Date">{this.state.apodInfo.date}</cite></strong></footer>
                    </blockquote>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center mt-3">
                    {this.state.apodInfo.media_type === "video" ? (
                        <ReactPlayer id="player"
                            url={this.state.apodInfo.url}
                        />
                    ) : (
                        <img src={this.state.apodInfo.hdurl}
                             alt="APOD"/>
                    )}
                    <p className="mt-3 lead"><strong>{this.state.apodInfo.explanation}</strong></p>
                </div>
            </div>
        </div>
    );
  }

  componentDidMount() {
      this.fetchData();
  }

  fetchData = () => {
    DataFetcher.fetchApodInfo()
        .then((data) => {
          this.setState({
            apodInfo: data.data
          });
        });
  }

}

export default App;
