import { useEffect } from "react";
import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import logoImg from '../assets/static/logo.png';

import { FaBehance, FaCodepen, FaFacebook, FaInstagram, FaTimes, FaBars } from "react-icons/fa";

export default function NavbarSection() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const navbarAnim = gsap.from('.navbarSection', {
            yPercent: -100,
            paused: true,
            duration: 0.2
        }).progress(1);
        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
                self.direction === -1 ? navbarAnim.play() : navbarAnim.reverse()
            }
        });
    }, []);

    useEffect(() => {
        const open = document.querySelector('.container');
        const closeToggle = document.querySelector('.close-toggle');
        var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
        open.addEventListener('click', () => {
            if (tl.reversed()) {
                tl.play();
            } else {
                tl.to('nav', { right: 0 })
                    .to('nav', { height: '100vh' }, '-=.1')
                    .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.5')
                    .to('.close-toggle', { opacity: 1, pointerEvents: 'all' }, "-=.5")
            }
        });
        closeToggle.addEventListener('click', () => {
            tl.reverse();
        });
    }, []);

    return (
        <div>
            <Container className="navbarSection">
                <Navbar.Brand href="#home">
                    <img
                        alt="Logo"
                        src={logoImg}
                        className="d-inline-block align-top"
                    />{' '}
                    <p>CheckSpeech AI</p>
                </Navbar.Brand>
                <div class="nav-toggle">
                    <FaBars />
                </div>
            </Container>
            <nav>
                <div class="close-toggle">
                    <div></div>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="scrollable-area"></div>
        </div>
    );
}
