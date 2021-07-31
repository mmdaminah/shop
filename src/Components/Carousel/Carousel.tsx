import { Carousel } from 'react-bootstrap'
const MyCarousel = () => {
    return (
        <div className="d-flex w-100">
            <Carousel className="w-100">
                <Carousel.Item>
                    <img
                        style={{ borderRadius: "10px" }}
                        className="d-block w-100"
                        src= "https://www.solidbackgrounds.com/images/2560x1440/2560x1440-blue-green-solid-color-background.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ borderRadius: "10px" }}
                        className="d-block w-100"
                        src="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-blue-green-solid-color-background.jpg"
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nC1J8-RoPiNAFErYbgPIRyhI10aPhvQVXtn-afeB6toGz5oPM9OSYEpIihW0SA_U4bE&usqp=CAU"
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