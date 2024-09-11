import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2 className="form-title">¿Necesitas mas Informacion?</h2>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id="email" placeholder="Tu Correo" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="subject" placeholder="Asunto" />
          </div>
          <div className="form-group">
            <textarea className="form-control" id="message" rows="5" placeholder="Tu Mensaje"></textarea>
          </div>
          <button type="submit" className="btn btn-submit">Enviar Mensaje</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Informacion de contacto</h2>
        <p><strong>Empresa:</strong> Mantillo</p>
        <p><strong>Direccion:</strong> Segovia, España</p>
        <p><strong>Telefono:</strong> +34 123 456 789</p>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.580024128196!2d-4.118383484595656!3d40.94808087930564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd416751cb4c64e5%3A0x403dcd106105ec0!2sSegovia%2C%20Spain!5e0!3m2!1sen!2sus!4v1616697732169!5m2!1sen!2sus"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Segovia"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
