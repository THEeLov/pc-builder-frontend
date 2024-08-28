import { Carousel, ConfigProvider } from "antd"
import { Link } from "react-router-dom"
import CustomButton from "../../../components/CustomButton/CustomButton"
import Slider1 from "../../../images/slider1.png"
import Slider2 from "../../../images/slider2.png"
import Slider3 from "../../../images/slider3.png"
import Slider4 from "../../../images/slider4.png"
import "./productCarousel.css"

const ProductCarousel = () => {
    const images = [Slider1, Slider2, Slider3, Slider4]

    return (
        <div className="product-carousel">
            <div className="product-carousel__content">
                <div className="text-container">
                    <h1>Products</h1>
                    <div className="all-products">
                        <p>All current products available</p>
                        <Link to="/components">
                            <CustomButton label="View all" btype="secondary" />
                        </Link>
                    </div>
                </div>
                <div className="carousel">
                    <div className="carousel-container">
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: "red",
                                },
                            }}
                        >
                            <Carousel autoplay={true} autoplaySpeed={2000} dots={true}>
                                {images.map((image, index) => (
                                    <div className="image-container" key={index}>
                                        <img
                                            className="image-container__image"
                                            src={image}
                                            alt={`Slide ${index + 1}`}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </ConfigProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCarousel
