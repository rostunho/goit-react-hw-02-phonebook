function Contact({ name, number }) {
  return (
    <div>
      <p>
        {name}
        <span>: {number}</span>
      </p>
    </div>
  );
}

export default Contact;
