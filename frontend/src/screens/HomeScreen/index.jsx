import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import Hero from '../../components/Hero';
import LatestWork from '../../components/LatestWork';
import Testimonials from '../../components/Testimonials';

function HomeScreen() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            scroller.scrollTo(location.hash.substring(1), {
                smooth: true,
                duration: 100,
                offset: -70, 
            });
        }
    }, [location]);

    return (
        <>
            
            
            <section id="about">
                <Hero />
            </section>
            <section id="work">
                <LatestWork />
            </section>
            <section id="testimonials">
                <Testimonials />
            </section>
        </>
    );
}

export default HomeScreen;
