import React from 'react';
import style from './cont.module.css'

class ContactSection extends React.Component {
  render() {
    return (
      <section id="contact" className={style.cont}>
        <div className=''>
        <p>Contact</p>
        </div>
      </section>
    );
  }
}

export default ContactSection;