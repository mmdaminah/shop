import { Carousel } from 'react-bootstrap'
//mobile:https://static.giga.de/wp-content/uploads/2021/02/samsung-galaxy-s21-und-plus-ultra-google-pixel-4a-4xl-xiaomi-redmi-note-9t-android-smartphones-q_giga-P1488189.jpg
const MyCarousel = () => {
    return (
        <div className="d-flex w-100 mt-2">
            <Carousel className="w-100 rounded">
                <Carousel.Item>
                    <img
                        style={{ borderRadius: "10px" }}
                        className="d-block w-100"
                        src= "https://cdn.mos.cms.futurecdn.net/nrgKnzWePRJkQNXzo66bXM.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Newst Tablets</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ borderRadius: "10px" }}
                        className="d-block w-100 h-100"
                        src="https://static.giga.de/wp-content/uploads/2021/02/samsung-galaxy-s21-und-plus-ultra-google-pixel-4a-4xl-xiaomi-redmi-note-9t-android-smartphones-q_giga-P1488189.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ borderRadius: "10px" }}
                        className="d-block w-100"
                        src="https://cdn.mos.cms.futurecdn.net/dkEx6momy9WazkfwuPRLJW.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default MyCarousel;