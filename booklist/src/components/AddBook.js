import React, {Component} from "react";
import axios from 'axios';



export default class AddBook extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            title: "",
            author: "",
            description: ""
        };
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;
        this.setState({
          [name]: value
        });
      }

    onSubmit(e) {
        e.preventDefault();
        const appointment = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description
        }
        console.log(appointment)
        axios.post("http://localhost:5000/", appointment).then((res) => { 
            console.log(res)
            window.location = "/";
        });
    }

    render() {
        return(
            <div class="CreateBook">
                <div class="container">
                    <div class="row">
                    <div class="col-md-8 m-auto">
                        <br /><a class="btn btn-info float-left" href="/">Show BooK List</a>
                    </div>
                    <div class="col-md-8 m-auto">
                        <h1 class="display-4 text-center">Add Book</h1>
                        <p class="lead text-center">Create new book</p>
                        <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <input
                            type="text"
                            placeholder="Title of the Book"
                            name="title"
                            class="form-control"
                            spellcheck="false"
                            data-ms-editor="true"
                            id="title" 
                            value={this.state.title} 
                            onChange={this.handleInputChange} 
                            />
                        </div>
                        <div class="form-group">
                            <input
                            type="text"
                            placeholder="Author"
                            name="author"
                            class="form-control"
                            spellcheck="false"
                            data-ms-editor="true"
                            id="author" 
                            value={this.state.author} 
                            onChange={this.handleInputChange} 
                            />
                        </div>
                        <div class="form-group">
                            <input
                            type="text"
                            placeholder="Describe this book"
                            name="description"
                            class="form-control"
                            spellcheck="false"
                            data-ms-editor="true"
                            id="description" 
                            value={this.state.description} 
                            onChange={this.handleInputChange} 
                            />
                        </div>
                        <input type="submit" class="btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                    </div>
                </div>
                </div>
        );
    }
}