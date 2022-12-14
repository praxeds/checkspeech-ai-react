import React from 'react';
import { useEffect } from 'react';
import $ from 'jquery';
import gsap from 'gsap';

import Container from 'react-bootstrap/Container';

import headImg from '../assets/static/home-section-head.png';

export default function HomeSection() {
    useEffect(() => {
        const container = $(".title-container");
        document.body.addEventListener("mousemove", e => {
            const y = e.clientY - 100;
            gsap.to(container, {
                y: y
            });
            gsap.to(".title-mask", {
                y: -y
            });
        });
    }, []);
    return (
        <Container fluid className="HomeSection">
            <img src={headImg} alt="head" />
                <div className="title">
                    <h1>CheckSpeech AI</h1>
                </div>
            <div className="title-container">
                <div className="title-mask">
                        <h1>CheckSpeech AI</h1>
                </div>
            </div>
        </Container>
    );
}
