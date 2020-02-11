import React from "react";
import "./style.css";

function Form(props) {
  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              onChange={e => props.onChange(e, "form")}
              className="input"
              type="text"
              placeholder="Text input"
              name="name"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              onChange={e => props.onChange(e, "form")}
              className="input"
              name="email"
              type="email"
              placeholder="Email input"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              onChange={e => props.onChange(e, "form")}
              className="textarea"
              placeholder="Textarea"
              name="message"
            ></textarea>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button" onClick={props.onClick} >Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
