import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import products from '../products.json';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Carrers = () => {
  return <div>
    <h1>Careers</h1>
  </div>
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NRM</title>
        <meta name="description" content="New Remarkable Masterpieces (NRM) is turning Creativity into unique handmade crafts" />
        <meta name="keywords" content="NRM" />
        <link rel="icon" href="https://i.imgur.com/NiDhfLg.png" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />

      </Head>
      <nav style={{ backgroundColor: "#021A34", borderBottomRightRadius: "0.5rem", borderBottomLeftRadius: "0.5rem", borderTopLeftRadius: "0rem", borderTopRightRadius: "0rem", margin: "0rem" }} className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://i.imgur.com/KQcdA96.png" alt="Bootstrap" width="50" style={{ borderRadius: "0.5rem" }} height="50" />
          </a>
          <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="https://custom.newremarkablemasterpieces.art">Custom Orders</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2 text-white" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light text-white" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="justify-content-center d-flex text-center">
        <img src="https://i.imgur.com/OFS0qbm.png" className="text-center align-self-center" style={{ width: "85%", height: "85%", borderBottomLeftRadius: "0.5rem", borderBottomRightRadius: "0.5rem", borderTopLeftRadius: "0rem", borderTopRightRadius: "0rem", }} alt="" />
      </div>
      <nav className={styles.nav}>
      </nav>
      <br></br>

      <div className="justify-content-center text-center align-items-center align-content-center">
        <h2>All Products</h2>
        <form>
          <input className='form-control' type="text" placeholder='Search Products' />
          <button type="submit" className="btn btn-outline-light text-white">Search</button>
        </form>
      </div>

      <main className={styles.main}>
        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button className="btn btn-light text-left snipcart-add-item"
                  data-item-id={product.id}
                  data-item-image={product.image}
                  data-item-name={product.title}
                  data-item-price={product.price}
                >
                  Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
        <div hidden id="snipcart" data-api-key="MTAwZWMzNTUtNmM4MC00NjcwLTgyNjctNjRlNmVjYTI3YWIzNjM4MDQ1NjU0NzU3NDIyMDY0" />
        <a href="/">
          <img height={30} width={30} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" />
        </a>
        <a href="/">
          <img height={50} width={50} src="https://i.imgur.com/NiDhfLg.png" />
        </a>
        <a href="/">
          <img height={30} width={30} src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-png-full-colour-glyph.png" />
        </a>
      </footer>
    </div>
  )
}
