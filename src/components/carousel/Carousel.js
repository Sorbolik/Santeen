import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {

    return (
        <Carousel autoPlay infiniteLoop showThumbs={false}
            showStatus={false} showIndicators={false}
            showArrows={false}
            interval={5000}
            transitionTime={500}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            useKeyboardArrows={true}
            centerMode={false}
            centerSlidePercentage={80}
            dynamicHeight={true}
            width="100%"
            height="100%"
            className="carousel"
            style={{ height: '100%' }}
            
        >
            
                <div key={1}>
                    <img src="https://random.imagecdn.app/500/150" alt={`${1}`} />
                </div>
                <div key={2}>
                    <img src="https://random.imagecdn.app/500/200" alt={`${2}`} />
                </div>
        </Carousel>
    );
};

export default CarouselComponent;