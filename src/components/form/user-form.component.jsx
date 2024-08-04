// import { Component } from "react";
import './user-form.styles.css';

const UserForm = () => {
    // console.log(props);
    return (
        <div className="form-container">
          <h2>Get In Touch: </h2>
        <form action="" method="POST" className="form-horizontal" role="form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" className="form-control" />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" className="form-control" />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your message" className="form-control"></textarea>
          </div>
          <input type="hidden" name="_subject" value="New email from Contact Me Form!" className="form-control" />
          <input type="hidden" name="_next" value="thanks.html" />
          <div className="button-group">
          {/* <button style="font-size:24px">Button <i className="fa fa-envelope"></i></button> */}
            <input type="submit" value="Send" className="btn btn-primary btn-xl fa fa-envelope" />
          </div>
        </form>
      </div>
    );
};

export  {UserForm};