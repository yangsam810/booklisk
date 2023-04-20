import React, { Component, useState } from "react";

function BookCard(props) {

    return(
        <div class="card-container">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="200"
          />
          <div class="desc">
            <h2><a href="/show-book/123id">{props.book.title}</a></h2>
            <h3>{props.book.author}</h3>
            <p>{props.book.description}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" onClick={() => { props.completeAppointment(props.book._id)}}  aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </p>
            
          </div>
        </div>
    );
}
export default BookCard;