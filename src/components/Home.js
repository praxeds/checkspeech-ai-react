import React from 'react';
import { useEffect } from 'react';
import $ from 'jquery';
import gsap from 'gsap';

import Container from 'react-bootstrap/Container';

import headImg from '../assets/static/home-section-head.png';

export default function HomeSection() {
    useEffect(() => {
        const container = document.querySelector(".title-mask");
        document.body.addEventListener("mousemove", e => {
            const y = e.clientY - 35;
            gsap.to(container, {
                y: y
            });
            gsap.to(".menu-mask", {
                y: -y
            });
        });
    }, []);
    return (
        <Container fluid className="HomeSection">
            <img src={headImg} alt="head" />

            <div className='title-container'>
                <ul class="title">
                    <li>CheckSpeech AI | Conversão e Interpretação de Falas Inteligente</li>
                </ul>
                <div class="title-mask">
                    <ul class="menu-mask">
                        <li>CheckSpeech AI | Conversão e Interpretação de Falas Inteligente</li>
                    </ul>
                </div>
            </div>
        </Container>
    );
}
