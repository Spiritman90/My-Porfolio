import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const initialState = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };
  const [formData, setformData] = useState(initialState);
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_a5itx6q",
        "template_yj6s68o",
        formRef.current,
        "ldB_UGXXHqAdbs4JE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setformData(initialState);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(formRef);
  };

  useEffect(() => {
    let timeout;
    if (done) {
      timeout = setTimeout(() => {
        setDone(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [done]);
  return (
    <div className='c' id='contact'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Let's work together!</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <img src={Phone} alt='' className='c-icon' />
              +234 8069304835
            </div>
            <div className='c-info-item'>
              <img className='c-icon' src={Email} alt='' />
              phemmyadey@gmail.com
            </div>

            <div className='c-info-item'>
              <img className='c-icon' src={Address} alt='' />
              13 Taiwo Street, Mafoluku Oshodi Lagos
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333", color: "white" }}
              type='text'
              placeholder='Name'
              name='user_name'
              value={formData.name}
              onChange={(e) =>
                setformData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: "white",
              }}
              type='text'
              placeholder='Subject'
              name='user_subject'
              value={formData.subject}
              onChange={(e) =>
                setformData((prev) => ({ ...prev, subject: e.target.value }))
              }
            />
            <input
              style={{ backgroundColor: darkMode && "#333", color: "white" }}
              type='email'
              placeholder='Email'
              name='user_email'
              value={formData.email}
              onChange={(e) =>
                setformData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333", color: "white" }}
              rows='5'
              placeholder='Message'
              name='message'
              value={formData.message}
              onChange={(e) =>
                setformData((prev) => ({ ...prev, message: e.target.value }))
              }
            />
            <button>SHOOT </button>
            {done && renderAlert()}
          </form>
        </div>
      </div>
    </div>
  );
};
const renderAlert = () => (
  <div className='alert'>
    <p>Your message submitted successfully!</p>
  </div>
);

export default Contact;
