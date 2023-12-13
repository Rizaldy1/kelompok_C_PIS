import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">FILM SUPERHERO</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={antmanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ANT MAN</Card.Title>
                  <Card.Text className="text-left">
                  film pahlawan super Amerika tahun 2015 berdasarkankarakter Marvel Comics dengan nama yang sama : Scott Lang dan Hank Pym . Diproduksi oleh Marvel Studios dan didistribusikan oleh Walt Disney Studios Motion Pictures , ini adalah film ke-12 di Marvel Cinematic Universe (MCU).
                  </Card.Text>
                  <Card.Text className="text-left">
                    Update terakhir 5 jam yang lalu
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={avengerImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">AVENGER</Card.Title>
                  <Card.Text className="text-left">
                  Avengers adalah tim pahlawan super fiksi dan protagonis dari waralaba media Marvel Cinematic Universe (MCU) , berdasarkan tim Marvel Comics dengan nama yang sama yang dibuat oleh Stan Lee dan Jack Kirby pada tahun 1963. 
                  </Card.Text>
                  <Card.Text className="text-left">
                    Update terakhir 3 jam yang lalu
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={supermanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SUPERMAN HERO</Card.Title>
                  <Card.Text className="text-left">
                  Superman adalah pahlawan super yang muncul dalam buku komik Amerika terbitan DC Comics . Karakter tersebut diciptakan oleh penulis Jerry Siegel dan artis Joe Shuster , dan memulai debutnya di buku komik Action Comics #1 ( sampul bertanggal Juni 1938 dan diterbitkan 18 April 1938). [1] Superman telah diadaptasi ke sejumlah media lain, termasuk serial radio, novel, film, acara televisi, teater, dan video game.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Update terakhir 6 jam yang lalu
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SuperHero
