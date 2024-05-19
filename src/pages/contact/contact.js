import "./contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  return (
    <div class="row justify-content-md-center">
      <div className="contact shadow-lg p-3 mb-5 rounded">
        <form className="form" action="">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            className="form-control"
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            className="form-control"
            name="message"
            placeholder="Message"
          ></textarea>

          <button type="submit" className="btn btn-primary btn-lg">
            Send
          </button>
        </form>
        <img
          src="https://i.imgur.com/WR4CW2U.png"
          className="image"
          alt="side pic"
        />
      </div>
    </div>
  );
}

export default Contact;
