const Subscribe = () => (
  <header>
    <div className="subscribe-content">
      <h1 className="subscribe-head">Subscribe</h1>
      <p className="subscribe-para">
        Sign up with email address to receive new updates
      </p>
      <input
        type="text"
        className="input-section"
        value="First Name"
        id="name"
        required
      />
      <input
        type="text"
        className="input-section"
        value="Last Name"
        id="name"
        required
      />
      <input
        type="email"
        className="input-section"
        value="Email"
        id="email"
        required
      />
      <button type="submit" className="btn" value="subscribe">
        Subscribe
      </button>
    </div>
  </header>
);
export default Subscribe;
