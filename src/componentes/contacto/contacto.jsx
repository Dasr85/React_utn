import React, { useState } from "react";
import "./contacto.css";
import contacto from "../../assets/img/contacto.jpg";


function ContactForm() {
  const [formValues, setFormValues] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulario enviado:', formValues);
      setSuccessMessage('Mensaje enviado con éxito');
      setFormValues({ nombre: '',apellido: '', email: '',telefono: '', mensaje: '' });
    }
  };

  const validateForm = (values) => {
    let errors = {};

    if (!values.nombre.trim()) {
      errors.nombre = 'El nombre es requerido';
    }

    if (!values.apellido.trim()) {
      errors.apellido = 'El apellido es requerido';
    }
    if (!values.email.trim()) {
      errors.email = 'El email es requerido';
    } else if (!isValidEmail(values.email)) {
      errors.email = 'Ingresa un email válido';
    }

    if (!values.telefono.trim()) {
      errors.telefono = 'El telefono es requerido';
    } else if (!isValidPhone(values.telefono)) {
      errors.telefono = 'Ingresa un telefono válido';
    }

    if (!values.mensaje.trim()) {
      errors.mensaje = 'El mensaje es requerido';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
    const isValidPhone = (telefono) => {
    const telefonoRegex = /^\d{7,14}$/;
    return telefonoRegex.test(telefono);
  };

  return (
    <>
    <div className="portada-imagen">
      <img src={contacto} alt="" />
    </div>
    <section>
      <div className="container">
        <form className="formulario" onSubmit={handleSubmit}>
        <h1>CONTACTANOS</h1>
          <div>
            <div className="form__texto">
              <label className="form__txt" htmlFor="nombre">Nombre:</label>
              <input className="form__input"
                type="text"
                id="nombre"
                name="nombre"
                value={formValues.nombre}
                onChange={handleChange}
              />
              {errors.nombre && <span className="error">{errors.nombre}</span>}
            </div>

            <div className="form__texto">
              <label className="form__txt" htmlFor="apellido">Apellido:</label>
              <input className="form__input"
                type="text"
                id="apellido"
                name="apellido"
                value={formValues.apellido}
                onChange={handleChange}
              />
              {errors.apellido && <span className="error">{errors.apellido}</span>}
            </div>
            <div className="form__texto">
              <label className="form__txt" htmlFor="email">Email:</label>
              <input className="form__input"
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
  
          <div className="form__texto">
              <label className="form__txt" htmlFor="telefono">Teléfono:</label>
              <input className="form__input"
                type="text"
                id="telefono"
                name="telefono"
                value={formValues.telefono}
                onChange={handleChange}
              />
              {errors.telefono && <span className="error">{errors.telefono}</span>}
            </div>

          <div className="form__texto">
            <label className="form__txt" htmlFor="mensaje">Mensaje:</label>
            <textarea className="form__input text_area"
              id="mensaje"
              name="mensaje"
              value={formValues.mensaje}
              onChange={handleChange}
            />
            {errors.mensaje && <span className="error">{errors.mensaje}</span>}
          </div>
  
          <button className="form__boton" type="submit">Enviar</button>
        </form>
        {successMessage && (
          <p className="success-message">{successMessage}</p>
        )}
      </div>
    </section>
    </>
  );
        }

export default ContactForm;
