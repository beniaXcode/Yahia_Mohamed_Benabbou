import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import {FiTwitter} from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';
function Contact() {
    const form = useRef();

    const SendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(
          "service_3xjuv11",
          "template_t06tj1j",
          form.current,
          "6RTTeks5J-iCo1kXd"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        ).then( () => { 
  document.getElementById("contact-form").reset();
})
    };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me </h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>y.m.benabbou@gmail.com</h5>
            <a href="mailto:y.m.benabbou@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <FiTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@yahiamohamedbe1</h5>
            <a href="https://twitter.com/yahiamohamedbe1" traget="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+212 650252742</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+212650252742"
              target="_blank"  rel="noreferrer" 
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={SendEmail} id="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name "
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact