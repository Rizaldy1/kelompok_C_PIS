import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING FILM</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={jokerImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">JOKER</Card.Title>
                  <Card.Text className="text-left">
                  Joker adalah film thriller psikologis neo-noir Amerika tahun 2019 yang disutradarai oleh Todd Phillips , yang juga ikut menulis skenario bersama Scott Silver . Film yang berdasarkankarakter DC Comics ini dibintangi oleh Joaquin Phoenix sebagai Joker 
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
              <Image
                src={lightyearImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">LIGHT YEAR</Card.Title>
                  <Card.Text className="text-left">
                  Lightyear adalah film petualangan aksi fiksi ilmiah animasi Amerika tahun 2022yang diproduksi oleh Walt Disney Pictures dan Pixar Animation Studios , dan didistribusikan oleh Walt Disney Studios Motion Pictures . Film ini merupakan spin-off dari serial film Toy Story , tetapi tidak berlatar dunia fiksi yang sama dengan mereka
                  </Card.Text>
                  <Card.Text className="text-left">
                    Update terakhir 4 jam yang lalu
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={morbiusImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">MORBIUS</Card.Title>
                  <Card.Text className="text-left">
                  Morbius adalah film pahlawan super Amerika tahun 2022 berdasarkankarakter Marvel Comics dengan nama yang sama , diproduksi oleh Columbia Pictures bekerja sama dengan Marvel , Arad Productions, dan Matt Tolmach Productions, dan didistribusikan oleh Sony Pictures Releasing .
                  </Card.Text>
                  <Card.Text className="text-left">
                    Update terakhir 8 jam yang lalu
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

export default Trending
