import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z8z74fa",
        "template_ub7f7du",
        form.current,{
        publicKey:
        "rrDNE6Uop4_MUi-GS"
        })
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <StyledContactForm>
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me with any questions or opportunities!</p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default ContactForm;
;

// Styles
const StyledContactForm = styled.div`
    width: 80%;
    display: flex;
    height: 100vh;
    justify-self: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-right :2%
    margin-left: 2%;
    margin-bottom: 2%;
    align-self: center;
    font-family: "Open Sans";
    background-size: cover;
    padding: 2rem;
    border-radius: 15px;
    border: 1px solid rgba(43, 43, 43, 0.568);
    backdrop-filter: blur(10px);
    color: #ffffff;

    h1 {
      font-size: 2rem;
      margin: 0;
    }

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 40%;
    min-width: 300px;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      height: 40px;
      cursor: pointer;
      width: 60%;
      align-self: center;
      background: rgb(50, 113, 168);
      color: white;
      border: none;
    }
  }
`;
