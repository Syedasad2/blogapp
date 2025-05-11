import React, { useState } from "react";
import styles from "./../styles/contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, desc);
    const data = { phone, name, email, desc };
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success", data);
        alert("Thanks for reaching Us");
        setPhone("");
        setEmail("");
        setDesc("");
        setName("");
      })
      .catch((error) => {
        console.log(error, "Erros");
      });
  };
  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            className={styles.input}
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            aria-describedby="nameHelp"
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className={styles.input}
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            className={styles.input}
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="desc">Description</label>
          <textarea
            className={styles.input}
            placeholder="Description"
            id="desc"
            name="desc"
            rows="4"
            value={desc}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
