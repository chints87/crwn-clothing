import React from 'react';
import './homepage.scss'

const HomePage = () => {
    return (
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h2 className="title">HATS</h2>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h2 className="title">SNEAKERS</h2>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h2 className="title">SWEATERS</h2>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h2 className="title">MEN</h2>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h2 className="title">WOMEN</h2>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HomePage;
