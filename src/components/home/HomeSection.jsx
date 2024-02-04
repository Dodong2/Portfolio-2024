import React from 'react';
import style from'./home.module.css'
class HomeSection extends React.Component {
  render() {
    return (
      <section id="home" className={style.home}>
        <div className=''>
        <p>Home</p>
        </div>
      </section>
    );
  }
}

export default HomeSection;