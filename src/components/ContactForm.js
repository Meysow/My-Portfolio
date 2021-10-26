import React from "react";
import { useForm } from "react-hook-form";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import ErrorIcon from "@mui/icons-material/Error";
import emailjs, { init } from "emailjs-com";
init("user_oCMYcuU0i7GfeTzoxOmea");

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    let name = data.name;
    let email = data.email;
    let message = data.message;
    let formMess = document.querySelector(".formMessage");

    formMess.innerHTML = "Sending Message...";
    formMess.style.opacity = "1";

    emailjs
      .send(
        //cservice ID
        "service_y1doa9f",
        // template ID
        "template_ljbq8md",
        {
          name,
          email,
          message,
        }
      )
      .then(
        () => {
          formMess.innerHTML =
            "Message Sent ! I'll get in touch as soon as possible !";

          setTimeout(() => {
            formMess.style.opacity = "0";
          }, 6180);
        },
        (err) => {
          console.log(err);
          formMess.style.color = "#dd4040";
          formMess.innerHTML = "An error has occured, please try again...";
        }
      );
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Contact Me</h1>
      <div className="formMessage"></div>
      <div className="form-content">
        <div className="inputBox">
          <label htmlFor="name">Name*</label>
          <div className="inputWrapper">
            <input
              type="text"
              id="name"
              name="name"
              className="verifyInput is-invalid"
              placeholder="Enter your Name..."
              {...register("name", { required: "You must enter a Name" })}
            />
            <i className="fieldIcon">
              <AccountCircleIcon />
            </i>
            {errors.name && (
              <>
                <i className="iconValidation">
                  <ErrorIcon />
                </i>
                <span className="error">{errors.name.message}</span>
              </>
            )}
          </div>
        </div>
        <div className="email-content inputBox">
          <label htmlFor="email">E-mail*</label>
          <div className="inputWrapper">
            <input
              type="mail"
              id="email"
              name="email"
              className="verifyInput"
              placeholder="Enter your E-mail..."
              {...register("email", {
                required: "You must enter an e-mail",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <i className="fieldIcon">
              <EmailIcon />
            </i>
            {errors.email && (
              <>
                <i className="iconValidation">
                  <ErrorIcon />
                </i>
                <span className="error">{errors.email.message}</span>
              </>
            )}
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="message">Message*</label>
          <div className="inputWrapper">
            <textarea
              id="message"
              name="message"
              className="verifyInput"
              placeholder="Your Message..."
              {...register("message", { required: "You must enter a Message" })}
            />
            <i className="fieldIcon">
              <MessageIcon />
            </i>
            {errors.message && (
              <>
                <i className="iconValidation">
                  <ErrorIcon />
                </i>
                <span className="error">{errors.message.message}</span>
              </>
            )}
          </div>
        </div>
      </div>
      <button className="formButton" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
