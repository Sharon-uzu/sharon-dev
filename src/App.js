import { useEffect, useRef, useState } from "react";
import {
  Globe, Smartphone, Layout, Github, Linkedin, Twitter, Instagram,
  MessageCircle, Mail, MapPin, Clock, ArrowRight, ExternalLink,
  User, Code2, Menu, X,
  Facebook
} from "lucide-react";
import me from './images/one.jpeg'
import two from './images/two.png'
import three from './images/three.png'
import four from './images/four.png'
import five from './images/five.png'
import six from './images/six.png'
import seven from './images/seven.png'



const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #0d0d0d;
    --paper: #f5f0e8;
    --cream: #ede8dc;
    --accent: #c8502a;
    --accent2: #2a6cc8;
    --muted: #8a8078;
    --nav-h: 64px;
  }

  html { scroll-behavior: smooth; }
  body { background: var(--paper); }

  .portfolio {
    font-family: 'DM Sans', sans-serif;
    background: var(--paper);
    color: var(--ink);
    overflow-x: hidden;
  }

  /* ══════════════════════════════
     NAV
  ══════════════════════════════ */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 200;
    height: var(--nav-h);
    display: flex; justify-content: space-between; align-items: center;
    padding: 0 4rem;
    background: rgba(245,240,232,0.94);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid rgba(13,13,13,0.08);
  }
  .nav-logo {
    font-family: 'Playfair Display', serif; font-size: 1.35rem;
    font-weight: 900; letter-spacing: -0.5px; color: var(--ink);
    text-decoration: none; flex-shrink: 0;
  }
  .nav-logo span { color: var(--accent); }

  /* Desktop links */
  .nav-links {
    display: flex; gap: 2.2rem; list-style: none; align-items: center;
  }
  .nav-links a {
    text-decoration: none; color: var(--muted); font-size: 0.82rem;
    font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--accent); }
  .nav-icon-link {
    color: var(--muted); display: flex; align-items: center;
    transition: color 0.2s, transform 0.2s;
  }
  .nav-icon-link:hover { color: var(--accent); transform: translateY(-2px); }

  /* Hamburger button */
  .nav-burger {
    display: none; background: none; border: none; cursor: pointer;
    color: var(--ink); padding: 4px; line-height: 0;
    transition: color 0.2s;
  }
  .nav-burger:hover { color: var(--accent); }

  /* Mobile drawer */
  .nav-drawer {
    display: none;
    position: fixed; top: var(--nav-h); left: 0; right: 0; bottom: 0;
    background: var(--paper); z-index: 190;
    flex-direction: column; align-items: center; justify-content: center;
    gap: 2.5rem; padding: 2rem;
    opacity: 0; pointer-events: none;
    transition: opacity 0.3s ease;
  }
  .nav-drawer.open { opacity: 1; pointer-events: all; }
  .nav-drawer a {
    font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700;
    color: var(--ink); text-decoration: none; letter-spacing: -0.5px;
    transition: color 0.2s;
  }
  .nav-drawer a:hover { color: var(--accent); }
  .nav-drawer-socials {
    display: flex; gap: 1.2rem; margin-top: 1rem;
  }
  .nav-drawer-socials a {
    font-size: 1rem; color: var(--muted);
    display: flex; align-items: center;
  }

  /* ══════════════════════════════
     HERO
  ══════════════════════════════ */
  .hero {
    min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr;
    padding-top: var(--nav-h); overflow: hidden; position: relative;
  }
  .hero::after {
    content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
    height: 100px; background: var(--paper);
    clip-path: ellipse(60% 100% at 50% 100%); z-index: 2; pointer-events: none;
  }

  .hero-left {
    display: flex; flex-direction: column; justify-content: center;
    padding: 5rem 3rem 5rem 6rem; position: relative; z-index: 1;
  }
  .hero-tag {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: var(--cream); border: 1px solid rgba(13,13,13,0.12);
    border-radius: 2rem; padding: 0.35rem 1rem; font-size: 0.72rem;
    font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--muted); margin-bottom: 1.8rem; width: fit-content;
    animation: fadeUp 0.7s ease both;
  }
  .hero-tag-dot { width: 6px; height: 6px; background: var(--accent); border-radius: 50%; flex-shrink: 0; }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.6rem, 4.5vw, 5rem);
    font-weight: 900; line-height: 1.05; letter-spacing: -2px;
    animation: fadeUp 0.7s 0.1s ease both; margin-bottom: 0.5rem;
  }
  .hero-title em { font-style: italic; color: var(--accent); }

  .hero-sub {
    font-size: clamp(0.9rem, 1.5vw, 1rem); color: var(--muted); font-weight: 300;
    line-height: 1.75; max-width: 400px;
    margin: 1.4rem 0 2.2rem; animation: fadeUp 0.7s 0.2s ease both;
  }
  .hero-cta {
    display: flex; gap: 0.9rem; flex-wrap: wrap;
    animation: fadeUp 0.7s 0.3s ease both; margin-bottom: 2.2rem;
  }
  .hero-socials { display: flex; gap: 0.6rem; animation: fadeUp 0.7s 0.4s ease both; flex-wrap: wrap; }
  .hero-social-btn {
    width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
    background: var(--cream); border: 1.5px solid rgba(13,13,13,0.12);
    color: var(--muted); text-decoration: none;
    transition: background 0.2s, color 0.2s, transform 0.2s, border-color 0.2s;
  }
  .hero-social-btn:hover { background: var(--ink); color: var(--paper); border-color: var(--ink); transform: translateY(-3px); }

  .btn-primary {
    background: var(--ink); color: var(--paper); border: none;
    padding: 0.85rem 2rem; font-family: 'DM Sans', sans-serif;
    font-size: 0.875rem; font-weight: 500; cursor: pointer;
    letter-spacing: 0.05em; transition: background 0.2s, transform 0.2s;
    display: inline-flex; align-items: center; gap: 0.5rem; white-space: nowrap;
  }
  .btn-primary:hover { background: var(--accent); transform: translateY(-2px); }
  .btn-outline {
    background: transparent; color: var(--ink); border: 1.5px solid var(--ink);
    padding: 0.85rem 2rem; font-family: 'DM Sans', sans-serif;
    font-size: 0.875rem; font-weight: 500; cursor: pointer;
    letter-spacing: 0.05em; transition: border-color 0.2s, color 0.2s, transform 0.2s;
    white-space: nowrap;
  }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }

  /* Hero right — photo panel */
  .hero-right {
    position: relative; display: flex; align-items: flex-end;
    justify-content: center; background: var(--cream); overflow: hidden;
    animation: fadeIn 0.9s 0.1s ease both;
  }
  .hero-right::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(160deg, transparent 55%, rgba(200,80,42,0.07) 100%);
  }
  .hero-photo-container {
    position: relative; z-index: 1; width: 72%; max-width: 380px;
    aspect-ratio: 3/4; overflow: hidden;
    box-shadow: -14px 14px 0 var(--accent); margin-bottom: 4rem;
  }
  .hero-photo { width: 100%; height: 100%; object-fit: cover; display: block; }
  .photo-placeholder {
    width: 100%; height: 100%;
    background: linear-gradient(160deg, #d4cfc5 0%, #bab4a8 100%);
    display: flex; flex-direction: column; align-items: center;
    justify-content: center; gap: 1rem; color: #888;
    font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase;
    text-align: center; padding: 1rem;
  }

  .hero-floater {
    position: absolute; background: var(--paper);
    border: 1px solid rgba(13,13,13,0.1); padding: 0.75rem 1.1rem;
    font-size: 0.72rem; font-weight: 500; letter-spacing: 0.05em;
    box-shadow: 4px 4px 0 rgba(13,13,13,0.07); z-index: 3;
  }
  .floater-1 { top: 22%; left: 6%; }
  .floater-2 { bottom: 22%; right: 6%; }
  .floater-num {
    display: block; font-size: 1.25rem; font-weight: 700;
    color: var(--accent); margin-bottom: 2px; font-family: 'Playfair Display', serif;
  }

  /* ══════════════════════════════
     SHARED SECTION STYLES
  ══════════════════════════════ */
  .section { padding: 6rem 6rem; }
  .section-header { display: flex; align-items: baseline; gap: 1.2rem; margin-bottom: 3.5rem; flex-wrap: wrap; }
  .section-num {
    font-family: 'Playfair Display', serif; font-size: 1rem; font-style: italic;
    color: var(--accent); letter-spacing: 0.05em; flex-shrink: 0;
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 3.5vw, 3rem);
    font-weight: 900; letter-spacing: -1px; line-height: 1.1;
  }

  /* ══════════════════════════════
     SKILLS
  ══════════════════════════════ */
  .skills-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1.5px; background: rgba(13,13,13,0.1);
    border: 1.5px solid rgba(13,13,13,0.1);
  }
  .skill-card { background: var(--paper); padding: 2.4rem 2rem; transition: background 0.3s; cursor: default; }
  .skill-card:hover { background: var(--ink); }
  .skill-card:hover .skill-icon   { color: var(--accent); }
  .skill-card:hover .skill-name   { color: var(--paper); }
  .skill-card:hover .skill-desc   { color: rgba(245,240,232,0.5); }
  .skill-card:hover .skill-tags span { background: rgba(255,255,255,0.08); color: rgba(245,240,232,0.65); }
  .skill-icon   { margin-bottom: 1.3rem; transition: color 0.3s; color: var(--accent); }
  .skill-name   { font-family: 'Playfair Display', serif; font-size: 1.25rem; font-weight: 700; margin-bottom: 0.65rem; transition: color 0.3s; }
  .skill-desc   { font-size: 0.875rem; color: var(--muted); line-height: 1.65; margin-bottom: 1.2rem; transition: color 0.3s; }
  .skill-tags   { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .skill-tags span {
    font-size: 0.68rem; background: var(--cream); color: var(--muted);
    padding: 0.25rem 0.6rem; letter-spacing: 0.06em; text-transform: uppercase;
    transition: background 0.3s, color 0.3s;
  }

  /* ══════════════════════════════
     PROJECTS
  ══════════════════════════════ */
  .projects-bg { background: var(--cream); }
  .projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.6rem; }

  .project-card {
    background: var(--paper); border: 1.5px solid rgba(13,13,13,0.07);
    overflow: hidden; transition: transform 0.35s, box-shadow 0.35s;
    display: flex; flex-direction: column;
  }
  .project-card:hover { transform: translateY(-7px); box-shadow: 0 24px 60px rgba(13,13,13,0.13); }
  .project-card.featured { grid-column: span 2; flex-direction: row; }

  .project-img-wrap { position: relative; overflow: hidden; flex-shrink: 0; }
  .project-card:not(.featured) .project-img-wrap { aspect-ratio: 16/7; }
  .project-card.featured .project-img-wrap { width: 50%; min-height: 300px; }

  .project-img-wrap img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    transition: transform 0.5s ease;
  }
  .project-card:hover .project-img-wrap img { transform: scale(1.06); }

  .project-img-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, transparent 40%, rgba(13,13,13,0.4) 100%);
    opacity: 0; transition: opacity 0.35s;
  }
  .project-card:hover .project-img-overlay { opacity: 1; }

  .project-type-badge {
    position: absolute; top: 0.9rem; left: 0.9rem;
    background: var(--paper); padding: 0.28rem 0.7rem;
    font-size: 0.66rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--accent); display: flex; align-items: center; gap: 0.35rem;
    box-shadow: 2px 2px 0 rgba(13,13,13,0.08);
  }

  .project-body { padding: 1.6rem 1.8rem; display: flex; flex-direction: column; flex: 1; }
  .project-name { font-family: 'Playfair Display', serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 0.55rem; }
  .project-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.65; margin-bottom: 1.1rem; flex: 1; }
  .project-stack { display: flex; gap: 0.45rem; flex-wrap: wrap; margin-bottom: 1.1rem; }
  .project-stack span { font-size: 0.68rem; padding: 0.2rem 0.55rem; background: var(--cream); color: var(--muted); letter-spacing: 0.05em; text-transform: uppercase; }
  .project-link {
    display: inline-flex; align-items: center; gap: 0.4rem;
    font-size: 0.82rem; font-weight: 500; color: #c8502a;
    text-decoration: none; transition: gap 0.2s; align-self: flex-start;
  }
  .project-link:hover { gap: 0.65rem; }

  /* ══════════════════════════════
     CONTACT
  ══════════════════════════════ */
  .contact-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }

  .contact-info h3 { font-family: 'Playfair Display', serif; font-size: 1.7rem; font-weight: 700; margin-bottom: 0.9rem; line-height: 1.2; }
  .contact-info p  { font-size: 0.9rem; color: var(--muted); line-height: 1.7; margin-bottom: 2.2rem; }

  .contact-detail { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.1rem; font-size: 0.875rem; }
  .contact-detail-icon {
    width: 44px; height: 44px; flex-shrink: 0; background: var(--cream);
    border: 1px solid rgba(13,13,13,0.1); display: flex; align-items: center;
    justify-content: center; color: var(--accent); transition: background 0.2s, color 0.2s;
  }
  .contact-detail:hover .contact-detail-icon { background: var(--accent); color: var(--paper); }
  .contact-detail-text small { display: block; font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); margin-bottom: 2px; }

  /* Socials grid */
  .socials-label { font-family: 'Playfair Display', serif; font-size: 1.35rem; font-weight: 700; margin-bottom: 1.3rem; }
  .socials-grid  { display: grid; grid-template-columns: 1fr 1fr; gap: 0.9rem; }

  .social-card {
    display: flex; align-items: center; gap: 0.9rem; padding: 1.1rem 1.2rem;
    background: var(--cream); text-decoration: none; color: var(--ink);
    transition: transform 0.25s, color 0.25s; position: relative; overflow: hidden;
  }
  .social-card::before {
    content: ''; position: absolute; inset: 0;
    background: var(--sc, #333); opacity: 0; transition: opacity 0.25s; z-index: 0;
  }
  .social-card:hover::before { opacity: 1; }
  .social-card:hover { transform: translateY(-4px); color: white; }
  .social-card:hover .social-icon-wrap  { background: rgba(255,255,255,0.15); }
  .social-card:hover .social-handle     { color: rgba(255,255,255,0.65); }
  .social-card:hover .social-arrow      { opacity: 1; }

  .social-icon-wrap {
    width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
    background: rgba(13,13,13,0.06); border-radius: 50%;
    flex-shrink: 0; position: relative; z-index: 1; transition: background 0.25s;
  }
  .social-icon   { transition: color 0.25s; }
  .social-info   { flex: 1; position: relative; z-index: 1; min-width: 0; }
  .social-name   { font-size: 0.85rem; font-weight: 500; display: block; margin-bottom: 1px; }
  .social-handle { font-size: 0.72rem; color: var(--muted); transition: color 0.25s; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .social-arrow  { position: relative; z-index: 1; opacity: 0.2; transition: opacity 0.25s; flex-shrink: 0; }

  /* ══════════════════════════════
     FOOTER
  ══════════════════════════════ */
  .footer {
    background: var(--ink); color: rgba(245,240,232,0.45);
    padding: 1.8rem 6rem;
    display: flex; justify-content: space-between; align-items: center;
    font-size: 0.78rem; letter-spacing: 0.05em; gap: 1rem; flex-wrap: wrap;
  }
  .footer-logo { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 900; color: var(--paper); }
  .footer-logo span { color: var(--accent); }
  .footer-socials { display: flex; gap: 1.1rem; }
  .footer-social-link { color: rgba(245,240,232,0.35); text-decoration: none; display: flex; transition: color 0.2s, transform 0.2s; }
  .footer-social-link:hover { color: var(--accent); transform: translateY(-2px); }

  /* ══════════════════════════════
     ANIMATIONS
  ══════════════════════════════ */
  @keyframes fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .reveal { opacity: 0; transform: translateY(26px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  /* ══════════════════════════════
     RESPONSIVE — Large tablet (≤1100px)
  ══════════════════════════════ */
  @media (max-width: 1100px) {
    .nav  { padding: 0 2.5rem; }
    .hero-left { padding: 4rem 2.5rem 4rem 3.5rem; }
    .section  { padding: 5.5rem 3.5rem; }
    .footer   { padding: 1.8rem 3.5rem; }
    .contact-inner { gap: 3rem; }
  }

  /* ══════════════════════════════
     RESPONSIVE — Tablet (≤900px)
  ══════════════════════════════ */
  @media (max-width: 900px) {
    /* Nav: show burger, hide desktop links */
    .nav { padding: 0 1.8rem; }
    .nav-links { display: none; }
    .nav-burger { display: flex; }
    .nav-drawer { display: flex; }

    /* Hero: stack vertically */
    .hero { grid-template-columns: 1fr; min-height: auto; }
    .hero-left {
      padding: calc(var(--nav-h) + 3rem) 2rem 3rem;
      align-items: center; text-align: center;
    }
    .hero-sub   { max-width: 100%; }
    .hero-cta   { justify-content: center; }
    .hero-socials { justify-content: center; }
    .hero::after { display: none; }

    /* Hero right: landscape photo strip */
    .hero-right { min-height: 50vw; max-height: 420px; }
    .hero-photo-container {
      width: 55%; max-width: 280px;
      margin-bottom: 2.5rem;
      box-shadow: -10px 10px 0 var(--accent);
    }
    .floater-1 { top: 12%; left: 3%; }
    .floater-2 { bottom: 12%; right: 3%; }

    /* Skills: 1 column */
    .skills-grid { grid-template-columns: 1fr; }

    /* Projects: 1 column, featured normal */
    .projects-grid { grid-template-columns: 1fr; }
    .project-card.featured { flex-direction: column; grid-column: span 1; }
    .project-card.featured .project-img-wrap { width: 100%; min-height: 220px; }

    /* Contact: stack */
    .contact-inner { grid-template-columns: 1fr; gap: 2.5rem; }

    /* Sections */
    .section { padding: 4.5rem 2rem; }
    .footer  { padding: 1.6rem 2rem; justify-content: center; text-align: center; flex-direction: column; gap: 0.8rem; }
  }

  /* ══════════════════════════════
     RESPONSIVE — Small tablet (≤640px)
  ══════════════════════════════ */
  @media (max-width: 640px) {
    .hero-right { min-height: 55vw; }
    .hero-photo-container { width: 50%; max-width: 220px; margin-bottom: 2rem; }
    .hero-floater { padding: 0.6rem 0.9rem; font-size: 0.68rem; }
    .floater-num  { font-size: 1.05rem; }

    .socials-grid { grid-template-columns: 1fr; }

    .section { padding: 4rem 1.5rem; }
    .section-header { margin-bottom: 2.5rem; }

    .skill-card { padding: 1.8rem 1.5rem; }
    .project-body { padding: 1.3rem 1.4rem; }

    .btn-primary, .btn-outline { padding: 0.8rem 1.6rem; font-size: 0.83rem; }
  }

  /* ══════════════════════════════
     RESPONSIVE — Mobile (≤480px)
  ══════════════════════════════ */
  @media (max-width: 480px) {
    :root { --nav-h: 58px; }

    .nav-logo { font-size: 1.15rem; }

    .hero-left { padding: calc(var(--nav-h) + 2rem) 1.2rem 2.5rem; }
    .hero-title { font-size: clamp(2.1rem, 9vw, 2.8rem); letter-spacing: -1px; }
    .hero-sub   { font-size: 0.9rem; }
    .hero-cta   { flex-direction: column; align-items: stretch; }
    .hero-cta button { justify-content: center; }
    .hero-right { min-height: 60vw; }
    .hero-photo-container { width: 58%; max-width: 200px; box-shadow: -8px 8px 0 var(--accent); }
    .floater-1 { top: 8%; left: 2%; }
    .floater-2 { bottom: 8%; right: 2%; }

    .section { padding: 3.5rem 1.2rem; }
    .section-title { letter-spacing: -0.5px; }

    .skill-card { padding: 1.6rem 1.2rem; }
    .project-body { padding: 1.1rem 1.2rem; }
    .project-name { font-size: 1.15rem; }

    .contact-info h3  { font-size: 1.4rem; }
    .socials-label    { font-size: 1.2rem; }
    .social-card      { padding: 0.9rem 1rem; }

    .footer { padding: 1.4rem 1.2rem; font-size: 0.72rem; }
    .footer-logo { font-size: 1rem; }

    .nav-drawer a { font-size: 1.6rem; }
  }

  /* ══════════════════════════════
     RESPONSIVE — Tiny (≤360px)
  ══════════════════════════════ */
  @media (max-width: 360px) {
    .hero-title { font-size: 2rem; }
    .hero-social-btn { width: 36px; height: 36px; }
    .section { padding: 3rem 1rem; }
    .project-name { font-size: 1.05rem; }
  }
`;

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const skills = [
  {
    Icon: Globe,
    name: "WordPress Development",
    desc: "Custom themes, plugins, and full-site editing with WooCommerce and advanced CPTs. High-performance, SEO-ready WordPress sites built from scratch.",
    tags: ["Custom Themes", "WooCommerce", "Elementor", "ACF", "PHP"],
  },
  {
    Icon: Code2,
    name: "Web Development",
    desc: "Modern, responsive websites and web apps built with React, clean HTML/CSS, and efficient backend integrations — for speed, usability, and beauty.",
    tags: ["React", "JavaScript", "HTML / CSS", "Node.js", "MySQL"],
  },
  {
    Icon: Smartphone,
    name: "Mobile App Development",
    desc: "Cross-platform mobile apps using React Native. Smooth, native-feeling experiences for iOS and Android from a single, clean codebase.",
    tags: ["React Native", "Expo", "Firebase", "iOS", "Android"],
  },
];

const projects = [
  {
    featured: true,
    type: "WordPress & WooCommerce", TypeIcon: Globe,
    name: "Dispora Website",
    desc: "A full-featured online store with custom WooCommerce theme, advanced product filtering, and a seamless checkout experience integrated with payment gateways and inventory management.",
    stack: ["WordPress", "WooCommerce", "PHP", "Elementor"],
    img: two,
    alt: "E-commerce store",
    link:'https://adpl-site.netlify.app/'
  },
  {
    type: "Mobile App", TypeIcon: Smartphone,
    name: "Maisomwellness Beauty",
    desc: "A cross-platform habit tracker with streaks, push notifications, and detailed analytics dashboards.",
    stack: ["React Native", "Expo", "Firebase"],
    img:three,
    alt: "Mobile habit tracking app",
    link:'https://maisomwellness.netlify.app/'
  },
  {
    type: "Web Development", TypeIcon: Layout,
    name: "Foodweb Scan Order",
    desc: "A city business directory with powerful search, map integration, and user review system.",
    stack: ["React", "Node.js", "MongoDB"],
    img: four,
    alt: "Web app on laptop",
    link:'https://food-web-app25.netlify.app/'
  },
  {
    type: "WordPress", TypeIcon: Globe,
    name: "Harvoxx School",
    desc: "A high-traffic news and magazine site with custom WordPress theme, ad slots, and subscription system.",
    stack: ["WordPress", "ACF", "PHP", "Mailchimp"],
    img: five,
    alt: "News magazine website",
    link:'https://harvoxx-school.netlify.app/'
  },
  {
    type: "Mobile App", TypeIcon: Smartphone,
    name: "The Keyboard",
    desc: "A food delivery app with real-time order tracking, push alerts, and a full restaurant management dashboard.",
    stack: ["React Native", "Firebase", "Google Maps API"],
    img: six,
    alt: "Food delivery app",
    link:'https://keyboard23.netlify.app/'
  },
  {
    type: "Mobile App", TypeIcon: Smartphone,
    name: "Python Cave",
    desc: "A food delivery app with real-time order tracking, push alerts, and a full restaurant management dashboard.",
    stack: ["React Native", "Firebase", "Google Maps API"],
    img: seven,
    alt: "Food delivery app",
    link:'https://pythonscave.com/'
  },
];

const socials = [
  { name: "GitHub",       handle: "@Sharon-uzu",       href: "https://github.com/Sharon-uzu",        Icon: Github,        color: "#24292e" },
  { name: "LinkedIn",     handle: "@sharonuzu",          href: "https://www.linkedin.com/in/sharonuzu",  Icon: Linkedin,      color: "#0077b5" },
  { name: "Facebook",     handle: "@victory.sharon",        href: "https://www.facebook.com/profile.php?id=100082117092461",      Icon: Facebook, color: "#1da1f2" },
  { name: "Instagram",    handle: "@sharon_uzu",        href: "https://www.instagram.com/sharon_uzu/",    Icon: Instagram,     color: "#e1306c" },
  { name: "WhatsApp",     handle: "Chat with me",       href: "https://wa.me/07075508678",            Icon: MessageCircle, color: "#25d366" },
  { name: "Email",        handle: "victorysharon0@gmail.com", href: "mailto:victorysharon0@gmail.com",           Icon: Mail,          color: "#c8502a" },
];

const navItems = ["Skills", "Projects", "Contact"];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const revealRefs = useRef([]);

  // Scroll-reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.07 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const r = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="portfolio">

        {/* ── NAV ── */}
        <nav className="nav">
          <a className="nav-logo" href="#home">Sharon<span>.</span>Portfolio</a>

          {/* Desktop */}
          <ul className="nav-links">
            {navItems.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}>{l}</a>
              </li>
            ))}
            <li>
              <a href="https://github.com/Sharon-uzu" target="_blank" rel="noreferrer" className="nav-icon-link" aria-label="GitHub">
                <Github size={18} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sharonuzu" target="_blank" rel="noreferrer" className="nav-icon-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button className="nav-burger" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>

        {/* Mobile Drawer */}
        <div className={`nav-drawer${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
          {navItems.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => scrollTo(l.toLowerCase())}>
              {l}
            </a>
          ))}
          <div className="nav-drawer-socials">
            {socials.map(({ name, href, Icon }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} onClick={() => setMenuOpen(false)}>
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* ── HERO ── */}
        <section className="hero" id="home">
          <div className="hero-left">
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              Available for projects
            </div>
            <h1 className="hero-title">
              Building <em>digital</em><br />experiences<br />that matter.
            </h1>
            <p className="hero-sub">
              WordPress developer, web designer &amp; mobile app creator. I turn ideas into fast, beautiful, functional products.
            </p>
            <div className="hero-cta">
              <button className="btn-primary" onClick={() => scrollTo("contact")}>
                Get in Touch <ArrowRight size={16} />
              </button>
              <button className="btn-outline" onClick={() => scrollTo("projects")}>
                View Work
              </button>
            </div>
            {/* <div className="hero-socials">
              {socials.map(({ name, href, Icon }) => (
                <a key={name} href={href} target="_blank" rel="noreferrer" className="hero-social-btn" aria-label={name} title={name}>
                  <Icon size={16} />
                </a>
              ))}
            </div> */}
          </div>

          <div className="hero-right">
            <div className="hero-floater floater-1">
              <span className="floater-num">15+</span>Projects Done
            </div>

            <div className="hero-photo-container">
              
                <img src={me} alt="Your Name" className="hero-photo" />
             
              <div className="photo-placeholder">
                <User size={52} strokeWidth={1} style={{ opacity: 0.28 }} />
                <span>Your Photo Here</span>
                <span style={{ fontSize: "0.62rem", lineHeight: 1.5, maxWidth: 130 }}>
                  Replace with an &lt;img&gt; tag
                </span>
              </div>
            </div>

            <div className="hero-floater floater-2">
              <span className="floater-num">5★</span>Client Rating
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="section" id="skills">
          <div className="section-header" ref={r}>
            <span className="section-num">01 —</span>
            <h2 className="section-title">What I Do</h2>
          </div>
          <div className="skills-grid" ref={r}>
            {skills.map((s) => (
              <div className="skill-card" key={s.name}>
                <div className="skill-icon"><s.Icon size={34} strokeWidth={1.5} /></div>
                <div className="skill-name">{s.name}</div>
                <div className="skill-desc">{s.desc}</div>
                <div className="skill-tags">
                  {s.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="section projects-bg" id="projects">
          <div className="section-header" ref={r}>
            <span className="section-num">02 —</span>
            <h2 className="section-title">Selected Work</h2>
          </div>
          <div className="projects-grid" ref={r}>
            {projects.map((p) => (
              <div className={`project-card${p.featured ? " " : ""}`} key={p.name}>
                <div className="project-img-wrap">
                  <img src={p.img} alt={p.alt} loading="lazy" />
                  <div className="project-img-overlay" />
                  
                </div>
                <div className="project-body">
                  <div className="project-name">{p.name}</div>
                  {/* <div className="project-desc">{p.desc}</div> */}
                  <div className="project-stack">
                    {/* {p.stack.map((s) => <span key={s}>{s}</span>)} */}
                  </div>
                  <a href={p.link} className="project-link">
                    View Details <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section" id="contact">
          <div className="section-header" ref={r}>
            <span className="section-num">03 —</span>
            <h2 className="section-title">Let's Work Together</h2>
          </div>
          <div className="contact-inner">
            <div ref={r}>
              <div className="contact-info">
                <h3>Have a project in mind?</h3>
                <p>
                  Whether you need a WordPress site, a modern web app, or a mobile application. I'm here to bring your vision to life. Reach out on any platform below.
                </p>
                {[
                  { Icon: Mail,   label: "Email",         val: "victorysharon0@gmail.com", href: "mailto:victorysharon0@gmail.com" },
                  { Icon: MapPin, label: "Location",      val: "Nigeria", href: null },
                  { Icon: Clock,  label: "Response Time", val: "Within 24 hours",    href: null },
                ].map((d) => (
                  <div className="contact-detail" key={d.label}>
                    <div className="contact-detail-icon"><d.Icon size={17} /></div>
                    <div className="contact-detail-text">
                      <small>{d.label}</small>
                      {d.href
                        ? <a href={d.href} style={{ color: "inherit", textDecoration: "none" }}>{d.val}</a>
                        : d.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={r}>
              <div className="socials-label">Find me on</div>
              <div className="socials-grid">
                {socials.map(({ name, handle, href, Icon, color }) => (
                  <a key={name} href={href} target="_blank" rel="noreferrer"
                     className="social-card" style={{ "--sc": color }}>
                    <div className="social-icon-wrap">
                      <Icon size={19} className="social-icon" style={{ color }} />
                    </div>
                    <div className="social-info">
                      <span className="social-name">{name}</span>
                      <span className="social-handle">{handle}</span>
                    </div>
                    <ArrowRight size={14} className="social-arrow" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <div className="footer-logo">Sharon<span>.</span>Portfolio</div>
          {/* <div>© {new Date().getFullYear()} — Built with care &amp; code</div> */}
          <div className="footer-socials">
            {socials.map(({ name, href, Icon }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer"
                 className="footer-social-link" aria-label={name}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}