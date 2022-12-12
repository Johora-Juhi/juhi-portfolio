import React from 'react';
import AnimatedText from 'react-animated-text-content';


const Blog = () => {
    return (
        <div className='py-44 text-7xl font-bold text-center uppercase'>
            <AnimatedText
            type="words" // animate words or chars
            animation={{
                x: '200px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
            }}
            animationType="float"
            interval={0.06}
            duration={1.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
        >
           Coming Soon
        </AnimatedText>
        </div>

    );
};

export default Blog;