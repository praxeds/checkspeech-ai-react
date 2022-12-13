import { useEffect } from "react";
import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import logoImg from '../assets/static/logo.png';

import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";

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
        const openToggle = document.querySelector('.nav-toggle');
        const closeToggle = document.querySelector('.close-toggle');
        var tl = gsap.timeline({ defaults: { duration: 0.7, ease: 'expo.inOut' } });
        openToggle.addEventListener('click', () => {
            if (tl.reversed()) {
                tl.play();
            } else {
                tl.to('nav', { right: 0 })
                    .to('nav', { height: '100vh' }, '-=.1')
                    .to('nav ul.links li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.5')
                    .to('nav ul.icons', { opacity: 1, pointerEvents: 'all' }, "-=.5")
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
                <Navbar.Brand href="#">
                    <img
                        alt="Logo"
                        src={logoImg}
                        className="d-inline-block align-top"
                    />{' '}
                    <p>CheckSpeech AI</p>
                </Navbar.Brand>
                <div class="nav-toggle">
                    <HiOutlineBars3 />
                </div>
            </Container>
            <nav>
                <div class="close-toggle">
                    <IoCloseOutline />
                </div>
                <ul className="links">
                    <li><a href="#">Soluções</a></li>
                    <li><a href="#">Clientes</a></li>
                    <li><a href="#">Preços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
                <ul className="icons">
                    <li><a href="https://linkedin.com/" target="_blank"><GrLinkedinOption /></a></li>
                    <li><a href="https://facebook.com/" target="_blank"><GrFacebookOption /></a></li>
                    <li><a href="https://instagram.com/" target="_blank"><BsInstagram /></a></li>
                </ul>
            </nav>
            <div className="scrollable-area"></div>
        </div>
    );
}
