import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Carousel, Container, Row } from 'react-bootstrap'
import background1 from './asset/bg-carousel.jpg'
import NavbarComponent from './components/NavbarComponent'
import EventCardsComponent from './components/EventCardsComponent'
import axios from 'axios'
function App() {
  const [angka, setAngka] = useState(3)
  const [index, setIndex] = useState(0);
  const [dataCardDapetDariBackend, setDataCardDapetDariBackend] = useState([])

  const pengurangan = () => setAngka(angka - 1)
  const penambahan = () => setAngka(angka + 1)
  const penambahanDua = (angka2) => setAngka(angka + angka2)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  //data
  const iniObject = { namaKegiatan: 'maulid', deskripsi: 'ini kegiatan maulid' }
  const array = ['mobil', 'motor']
  //objectDalamArray
  const dataCards = [
    { namaKegiatan: 'maulid Dummy', deskripsi: 'ini kegiatan maulid Dummy' },
    { namaKegiatan: 'konser Dummy' , deskripsi: 'ini kegiatan konser Dummy' },
    { namaKegiatan: 'festival Dummy', deskripsi: 'ini kegiatan festival Dummy' },
    { namaKegiatan: 'maulid Dummy', deskripsi: 'ini kegiatan maulid Dummy' },
  ]
  const dataCarousels = [
    { namaKegiatan: background1, deskripsi: 'ini kegiatan maulid' },
    { namaKegiatan: background1, deskripsi: 'ini kegiatan konser' },
    { namaKegiatan: background1, deskripsi: 'ini kegiatan festival' },
    { namaKegiatan: background1, deskripsi: 'ini kegiatan maulid' },
  ]


  const getDataCards = async () => {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/hlmifzi/sharing-react/dataCards');
      console.log("getDataCards -> response", response)
      setDataCardDapetDariBackend(response.data)
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    getDataCards()
  }, [])


  return (
    <>
      <NavbarComponent />

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 height-carousel"
            src={background1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 height-carousel"
            src="data:image/jpeg;base64,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"
            alt="Second slide"

          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 height-carousel"
            src="https://rutlandpreschool.ca/wp-content/uploads/2018/07/1034807_preschool-wallpaper.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
          <h2>Kegiatan</h2>
        </div>
        <Row>
          {
            dataCardDapetDariBackend.map((v, i) => {
              return (
                <EventCardsComponent
                  background={background1}
                  namaKegiatan={v.namaKegiatan}
                  deskripsi={v.deskripsi}
                />
              )
            })
          }
        </Row>
      </Container>


      <div className="warna-merah"> ini tulisan merah</div>
      <div id="warna-ijo"> ini tulisan hijau</div>

      <div className="warna-merah">
        <button onClick={pengurangan}> -</button>
        hasil {angka}
        <button onClick={penambahan}> + </button>
        <button onClick={() => penambahanDua(2)}> +2 </button>
      </div>
    </>
  );
}

export default App;
