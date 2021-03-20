import React from "react";
import "./style.css";

function NoMatch() {
  return (
    <div class="message-box">
      <h1>404</h1>
      <p>Page not found</p>
      <div class="buttons-con">
        <div class="action-link-wrap">
          <a href="/" class="link-button">
            Go to Home Page
          </a>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;
