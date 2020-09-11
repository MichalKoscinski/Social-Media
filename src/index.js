import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {PostDetailComponent} from './posts'
import {PostsComponent} from './posts'
import * as serviceWorker from './serviceWorker';

const postsEl = document.getElementById("social-media")
if (postsEl) {
    ReactDOM.render(<PostsComponent />, postsEl);
}

const postDetailElements = document.querySelectorAll(".social-media-detail")

postDetailElements.forEach(container=> {
    ReactDOM.render(
        React.createElement(PostDetailComponent, container.dataset), 
        container);
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
