import React, { useState } from "react";
import "./contacto.css";
import contacto from "../../assets/img/contacto.jpg"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear previous errors when user starts typing
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    let formValid = true;

    // Nombre validation
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,20}$/;
    if (!nameRegex.test(formData.name)) {
      setErrors({
        ...errors,
        name: "Por favor ingrese su nombre, este campo solo admite letras",
      });
      formValid = false;
    }
    // Apellido validation
    const lnameRegex = /^[A-Za-z]{1,20}$/;
    if (!lnameRegex.test(formData.lname)) {
      setErrors({
        ...errors,
        lname: "Por favor ingrese su apellido, este campo solo admite letras",
      });
      formValid = false;
    }
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors({
        ...errors,
        email: "Por favor ingrese un email valido",
      });
      formValid = false;
    }
    // Telefono validation
    const phoneRegex = /^\d{7,14}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrors({
        ...errors,
        phone: "Por favor ingrese un numero de telefono valido",
      });
      formValid = false;
    }
    // Message validation
    if (formData.message.trim() === "") {
      setErrors({
        ...errors,
        message: "Por favor ingrese un mensaje",
      });
      formValid = false;
    }

    // If form is valid, you can proceed with submitting the data
    if (formValid) {
      // Perform your submit logic here
      console.log("Form submitted:", formData);
    }
  };

  return (
    <>
      <div className="portada-imagen">
        <img src={contacto} alt="" />
      </div>
      <form className="formulario" onSubmit={handleSubmit}>
        <h1>Contactanos</h1>
        <div className="formulario__estilo">
          <div className="form__texto">
            <label className="form__txt " htmlFor="name">Nombre:</label>
            <input className="form__input"
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
            />
            <div className="error">{errors.name}</div>
          </div>
          <div className="form__texto">
            <label className="form__txt" htmlFor="lname">Apellido:</label>
            <input className="form__input"
              type="text"
              id="lname"
              name="lname"
              placeholder="Apellido"
              value={formData.lname}
              onChange={handleChange}
            />
            <div className="error">{errors.lname}</div>
          </div>
          <div className="form__texto">
            <label className="form__txt" htmlFor="email">Email:</label>
            <input className="form__input"
              type="email"
              id="email"
              name="email"
              placeholder="Correo"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="error">{errors.email}</div>
          </div>
          <div className="form__texto">
            <label className="form__txt" htmlFor="phone">Telefono:</label>
            <input className="form__input"
              type="text"
              id="phone"
              name="phone"
              placeholder="Número de teléfono"
              value={formData.phone}
              onChange={handleChange}
            />
            <div className="error">{errors.phone}</div>
          </div>
          <div className="form__texto">
            <label className="form__txt" htmlFor="message">Mensaje:</label>
            <textarea className="form__input"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <div className="error">{errors.message}</div>
          </div>

          <button className="form__boton" type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
