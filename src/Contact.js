import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 5rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 4rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: teal;
              
              color: white;
              transform: scale(0.95);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Contact Page</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.
    6476895925102!2d78.0493350348877!3d30.332537499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
    1!3m3!1m2!1s0x390929c57d1d467b%3A0x1ffa6cb422a81800
    !2sCrossroads%20Mall!5e0!3m2!1sen!2sin!4v1671003384015!5m2!1sen!2sin" 
    width="100%" 
    height="320" 
    style={{border:0}}
    allowFullScreen="" 
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mkneddjo" method="POST" className="contact-inputs">
          <input 
          type="text" 
          placeholder="username" 
          name="username" 
          required
          autoComplete="off"/>

          <input 
          type="email" 
          name="Email" 
          placeholder="Enter Your Email" 
          autoComplete="off"
          required/>

          <textarea 
          name="Message" 
          cols="30"
          row="10"
          required
          placeholder="Enter Your Message"
          autoComplete="off" />

          <input 
          type="submit"
          value="Send"
          />
          </form>
      </div>
    </div>
  
  </Wrapper>
};

export default Contact;
