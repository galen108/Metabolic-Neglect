"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Pill, TrendingUp, DollarSign, AlertTriangle, Heart, Users, Scale } from 'lucide-react';

// Main App Component
export default function MetabolicNeglect() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [currentSection, setCurrentSection] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const scrolled = window.scrollY;
            const height = containerRef.current.scrollHeight - window.innerHeight;
            const progress = Math.min(scrolled / height, 1);
            setScrollProgress(progress);

            // Determine current section based on scroll
            const section = Math.floor(progress * 7);
            setCurrentSection(section);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="metabolic-neglect-app">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200;300;400;600;700;800;900&family=IBM+Plex+Mono:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --blood-red: #8B0000;
          --deep-red: #B22222;
          --warning-orange: #FF6B35;
          --clinical-blue: #4A90E2;
          --profit-green: #2ECC71;
          --toxic-purple: #9B59B6;
          --pharma-teal: #16A085;
          --dark-bg: #0a0a0a;
          --dark-surface: #1a1a1a;
          --darker-surface: #121212;
          --light-text: #e8e8e8;
          --dim-text: #999;
          --glow-red: rgba(178, 34, 34, 0.4);
          --glow-orange: rgba(255, 107, 53, 0.3);
        }

        body {
          background: var(--dark-bg);
          color: var(--light-text);
          font-family: 'Crimson Pro', serif;
          overflow-x: hidden;
          line-height: 1.7;
        }

        .metabolic-neglect-app {
          position: relative;
          min-height: 100vh;
        }

        /* Progress indicator */
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 1000;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--blood-red), var(--warning-orange), var(--profit-green));
          transition: width 0.1s ease-out;
        }

        /* Hero Section */
        .hero-section {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: radial-gradient(ellipse at center, #1a0a0a 0%, var(--dark-bg) 70%);
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          opacity: 0.15;
          background-image: 
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 0, 0, 0.03) 2px, rgba(139, 0, 0, 0.03) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(139, 0, 0, 0.03) 2px, rgba(139, 0, 0, 0.03) 4px);
        }

        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: 900;
          text-align: center;
          letter-spacing: -0.03em;
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
          animation: fadeInUp 1.2s ease-out;
        }

        .hero-title .metabolic {
          display: block;
          color: var(--blood-red);
          text-shadow: 0 0 40px var(--glow-red);
        }

        .hero-title .neglect {
          display: block;
          color: var(--light-text);
          font-weight: 300;
          font-style: italic;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 2rem);
          font-weight: 300;
          text-align: center;
          max-width: 900px;
          padding: 0 2rem;
          opacity: 0.85;
          animation: fadeInUp 1.4s ease-out 0.3s both;
          font-style: italic;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
          opacity: 0.6;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 10px); }
        }

        /* Timeline Section */
        .timeline-section {
          min-height: 100vh;
          padding: 8rem 2rem;
          position: relative;
          background: linear-gradient(to bottom, var(--dark-bg), var(--darker-surface));
        }

        .timeline-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 4rem;
          text-align: center;
          letter-spacing: -0.02em;
        }

        .timeline {
          position: relative;
          padding: 2rem 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, 
            var(--clinical-blue), 
            var(--toxic-purple),
            var(--warning-orange),
            var(--blood-red)
          );
          transform: translateX(-50%);
        }

        .timeline-event {
          position: relative;
          margin-bottom: 4rem;
          opacity: 0;
          animation: slideIn 0.8s ease-out forwards;
        }

        .timeline-event:nth-child(odd) {
          padding-right: 52%;
          animation-delay: 0.1s;
        }

        .timeline-event:nth-child(even) {
          padding-left: 52%;
          animation-delay: 0.2s;
        }

        .timeline-card {
          background: var(--dark-surface);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 2rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .timeline-card:hover {
          transform: translateY(-5px);
          border-color: var(--blood-red);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5),
                      0 0 30px var(--glow-red);
        }

        .timeline-dot {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--blood-red);
          border: 4px solid var(--dark-bg);
          top: 2rem;
          box-shadow: 0 0 20px var(--glow-red);
        }

        .timeline-event:nth-child(odd) .timeline-dot {
          right: -60%;
        }

        .timeline-event:nth-child(even) .timeline-dot {
          left: -8%;
        }

        .timeline-year {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.9rem;
          color: var(--warning-orange);
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .timeline-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--light-text);
        }

        .timeline-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--dim-text);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Medication Cascade Section */
        .medication-section {
          min-height: 100vh;
          padding: 8rem 2rem;
          background: radial-gradient(ellipse at center, #1a0505 0%, var(--dark-bg) 70%);
          position: relative;
          overflow: hidden;
        }

        .pills-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 4rem;
        }

        .pill-card {
          background: var(--dark-surface);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: pillFloat 0.8s ease-out forwards;
          opacity: 0;
        }

        .pill-card:nth-child(1) { animation-delay: 0.1s; }
        .pill-card:nth-child(2) { animation-delay: 0.2s; }
        .pill-card:nth-child(3) { animation-delay: 0.3s; }
        .pill-card:nth-child(4) { animation-delay: 0.4s; }
        .pill-card:nth-child(5) { animation-delay: 0.5s; }
        .pill-card:nth-child(6) { animation-delay: 0.6s; }

        @keyframes pillFloat {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--blood-red);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .pill-card:hover::before {
          opacity: 1;
        }

        .pill-card:hover {
          transform: translateY(-8px);
          border-color: var(--blood-red);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6),
                      0 0 40px var(--glow-red);
        }

        .pill-icon {
          width: 48px;
          height: 48px;
          margin-bottom: 1rem;
          color: var(--blood-red);
        }

        .pill-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .pill-type {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.85rem;
          color: var(--warning-orange);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .pill-effects {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--dim-text);
        }

        /* System Failure Section */
        .system-section {
          min-height: 100vh;
          padding: 8rem 2rem;
          background: var(--darker-surface);
          position: relative;
        }

        .system-grid {
          max-width: 1400px;
          margin: 4rem auto 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        .system-card {
          background: var(--dark-surface);
          border: 2px solid transparent;
          border-radius: 20px;
          padding: 3rem;
          position: relative;
          transition: all 0.4s ease;
          animation: systemReveal 0.8s ease-out forwards;
          opacity: 0;
        }

        .system-card:nth-child(1) { animation-delay: 0.1s; border-color: rgba(74, 144, 226, 0.3); }
        .system-card:nth-child(2) { animation-delay: 0.3s; border-color: rgba(46, 204, 113, 0.3); }
        .system-card:nth-child(3) { animation-delay: 0.5s; border-color: rgba(139, 0, 0, 0.3); }

        @keyframes systemReveal {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .system-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.7);
        }

        .system-card:nth-child(1):hover { border-color: var(--clinical-blue); box-shadow: 0 30px 60px rgba(74, 144, 226, 0.3); }
        .system-card:nth-child(2):hover { border-color: var(--profit-green); box-shadow: 0 30px 60px rgba(46, 204, 113, 0.3); }
        .system-card:nth-child(3):hover { border-color: var(--blood-red); box-shadow: 0 30px 60px var(--glow-red); }

        .system-icon {
          width: 64px;
          height: 64px;
          margin-bottom: 1.5rem;
        }

        .system-card:nth-child(1) .system-icon { color: var(--clinical-blue); }
        .system-card:nth-child(2) .system-icon { color: var(--profit-green); }
        .system-card:nth-child(3) .system-icon { color: var(--blood-red); }

        .system-heading {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .system-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: var(--dim-text);
        }

        /* Purine Pathway Section */
        .purine-section {
          min-height: 100vh;
          padding: 8rem 2rem;
          background: linear-gradient(135deg, var(--dark-bg) 0%, #0a0a14 100%);
          position: relative;
        }

        .purine-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .purine-diagram {
          margin: 4rem 0;
          padding: 4rem;
          background: var(--dark-surface);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .purine-diagram::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(139, 0, 0, 0.1), transparent 50%),
                      radial-gradient(circle at 70% 50%, rgba(155, 89, 182, 0.1), transparent 50%);
          pointer-events: none;
        }

        .pathway-flow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
          position: relative;
        }

        .pathway-node {
          flex: 1;
          min-width: 200px;
          background: var(--darker-surface);
          border: 2px solid var(--blood-red);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          animation: nodeAppear 0.6s ease-out forwards;
          opacity: 0;
        }

        .pathway-node:nth-child(1) { animation-delay: 0.2s; }
        .pathway-node:nth-child(2) { animation-delay: 0.4s; }
        .pathway-node:nth-child(3) { animation-delay: 0.6s; }
        .pathway-node:nth-child(4) { animation-delay: 0.8s; }

        @keyframes nodeAppear {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .pathway-node:hover {
          transform: scale(1.05);
          border-color: var(--warning-orange);
          box-shadow: 0 10px 30px var(--glow-orange);
        }

        .pathway-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--warning-orange);
          margin-bottom: 0.5rem;
        }

        .pathway-description {
          font-size: 0.95rem;
          color: var(--dim-text);
          line-height: 1.5;
        }

        .purine-explanation {
          margin-top: 4rem;
          font-size: 1.2rem;
          line-height: 1.9;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .highlight {
          color: var(--warning-orange);
          font-weight: 600;
        }

        /* Economics Section */
        .economics-section {
          min-height: 100vh;
          padding: 8rem 2rem;
          background: radial-gradient(ellipse at center, #0a140a 0%, var(--dark-bg) 70%);
        }

        .economics-grid {
          max-width: 1400px;
          margin: 4rem auto 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .economics-column {
          position: relative;
        }

        .column-title {
          font-family: 'Syne', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 2rem;
          text-align: center;
          padding: 1.5rem;
          border-radius: 12px;
          animation: economicsSlide 0.8s ease-out forwards;
          opacity: 0;
        }

        .column-title.current {
          background: rgba(139, 0, 0, 0.2);
          border: 2px solid var(--blood-red);
          color: var(--blood-red);
          animation-delay: 0.2s;
        }

        .column-title.better {
          background: rgba(46, 204, 113, 0.2);
          border: 2px solid var(--profit-green);
          color: var(--profit-green);
          animation-delay: 0.4s;
        }

        @keyframes economicsSlide {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .economics-list {
          list-style: none;
        }

        .economics-item {
          background: var(--dark-surface);
          border-left: 4px solid transparent;
          padding: 2rem;
          margin-bottom: 1.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          animation: economicsItem 0.6s ease-out forwards;
          opacity: 0;
        }

        .current .economics-item {
          border-left-color: var(--blood-red);
        }

        .better .economics-item {
          border-left-color: var(--profit-green);
        }

        .economics-item:nth-child(1) { animation-delay: 0.3s; }
        .economics-item:nth-child(2) { animation-delay: 0.4s; }
        .economics-item:nth-child(3) { animation-delay: 0.5s; }
        .economics-item:nth-child(4) { animation-delay: 0.6s; }

        @keyframes economicsItem {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .economics-item:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .current .economics-item:hover {
          border-left-color: var(--warning-orange);
          box-shadow: 0 10px 30px var(--glow-red);
        }

        .better .economics-item:hover {
          border-left-color: #27ae60;
          box-shadow: 0 10px 30px rgba(46, 204, 113, 0.3);
        }

        /* Call to Action Section */
        .cta-section {
          min-height: 100vh;
          padding: 8rem 2rem;
          background: linear-gradient(to bottom, var(--dark-bg), var(--darker-surface));
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .cta-content {
          max-width: 1000px;
        }

        .cta-quote {
          font-family: 'Crimson Pro', serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 300;
          font-style: italic;
          line-height: 1.5;
          margin-bottom: 3rem;
          color: var(--light-text);
          animation: fadeInUp 1s ease-out;
        }

        .cta-emphasis {
          display: block;
          font-weight: 700;
          color: var(--blood-red);
          margin-top: 2rem;
          font-size: clamp(2.5rem, 5vw, 4rem);
          text-shadow: 0 0 40px var(--glow-red);
        }

        .cta-body {
          font-size: 1.3rem;
          line-height: 1.9;
          margin-bottom: 4rem;
          color: var(--dim-text);
          animation: fadeInUp 1.2s ease-out 0.2s both;
        }

        .cta-buttons {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 1.4s ease-out 0.4s both;
        }

        .cta-button {
          padding: 1.5rem 3rem;
          font-family: 'Syne', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .cta-button.primary {
          background: linear-gradient(135deg, var(--blood-red), var(--warning-orange));
          color: white;
        }

        .cta-button.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px var(--glow-red);
        }

        .cta-button.secondary {
          background: transparent;
          border: 2px solid var(--light-text);
          color: var(--light-text);
        }

        .cta-button.secondary:hover {
          background: var(--light-text);
          color: var(--dark-bg);
          transform: translateY(-3px);
        }

        /* Footer */
        .footer {
          padding: 4rem 2rem;
          background: var(--darker-surface);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .footer-text {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.9rem;
          color: var(--dim-text);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .timeline::before {
            left: 30px;
          }

          .timeline-event:nth-child(odd),
          .timeline-event:nth-child(even) {
            padding-left: 80px;
            padding-right: 0;
          }

          .timeline-event:nth-child(odd) .timeline-dot,
          .timeline-event:nth-child(even) .timeline-dot {
            left: 21px;
            right: auto;
          }

          .economics-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 3rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .cta-quote {
            font-size: 1.5rem;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .cta-button {
            width: 100%;
          }
        }

        /* Subtle animations for interactivity */
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

            {/* Progress Bar */}
            <div className="progress-bar">
                <div className="progress-fill" style={{width: `${scrollProgress * 100}%`}}/>
            </div>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg"/>
                <h1 className="hero-title">
                    <span className="metabolic">METABOLIC</span>
                    <span className="neglect">Neglect</span>
                </h1>
                <p className="hero-subtitle">
                    How Profit-Driven Medicine Failed a Generation's Health
                </p>
                <div className="scroll-indicator">
                    <AlertTriangle size={32} className="pulse"/>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="timeline-section">
                <h2 className="section-title">A Life Trajectory</h2>
                <div className="timeline-container">
                    <div className="timeline">
                        <div className="timeline-event">
                            <div className="timeline-card">
                                <div className="timeline-year">Early 1980s</div>
                                <h3 className="timeline-title">Birth & Early Conditions</h3>
                                <p className="timeline-description">
                                    Born in rural America with multiple congenital conditions. Environmental exposure
                                    risks
                                    and Western diet set the stage for decades of struggle ahead.
                                </p>
                            </div>
                            <div className="timeline-dot"/>
                        </div>

                        <div className="timeline-event">
                            <div className="timeline-card">
                                <div className="timeline-year">Adolescence</div>
                                <h3 className="timeline-title">Neuropsychiatric Symptoms Emerge</h3>
                                <p className="timeline-description">
                                    Significant neuropsychiatric symptoms develop. At age 14, diagnosed with autism
                                    spectrum disorder and Bipolar I with mixed states.
                                </p>
                            </div>
                            <div className="timeline-dot"/>
                        </div>

                        <div className="timeline-event">
                            <div className="timeline-card">
                                <div className="timeline-year">1990s-2000s</div>
                                <h3 className="timeline-title">The Pharmaceutical Cascade Begins</h3>
                                <p className="timeline-description">
                                    Heavy psychiatric pharmacology: mood stabilizers (lithium, valproate),
                                    antipsychotics
                                    (risperidone, olanzapine), sedating antidepressants, beta blockers. The medications
                                    are
                                    powerful—but come with real, cumulative costs.
                                </p>
                            </div>
                            <div className="timeline-dot"/>
                        </div>

                        <div className="timeline-event">
                            <div className="timeline-card">
                                <div className="timeline-year">Over Time</div>
                                <h3 className="timeline-title">Organ & Metabolic Damage Accumulates</h3>
                                <p className="timeline-description">
                                    Hypothyroidism. Hypercalcemia. Hypertension. Severe kidney infection. Recurring
                                    kidney
                                    stones. Liver steatosis and fibrosis (MASH). Each treated as isolated—never as
                                    systemic failure.
                                </p>
                            </div>
                            <div className="timeline-dot"/>
                        </div>

                        <div className="timeline-event">
                            <div className="timeline-card">
                                <div className="timeline-year">Years Later</div>
                                <h3 className="timeline-title">Hyperuricemia & Gout</h3>
                                <p className="timeline-description">
                                    Symptom patterns traceable back nearly a decade, finally named: hyperuricemia and
                                    gout.
                                    The solution? Two of the oldest, cheapest drugs: colchicine and allopurinol.
                                </p>
                            </div>
                            <div className="timeline-dot"/>
                        </div>

                        <div className="timeline-event">
                            <div className="timeline-card">
                                <div className="timeline-year">Present Day</div>
                                <h3 className="timeline-title">The Moment of Clarity</h3>
                                <p className="timeline-description">
                                    After decades of expensive, patent-protected drugs and predictable organ damage,
                                    stabilization finally comes from ancient, pennies-per-dose medications. This was not
                                    unfortunate. This was systemic.
                                </p>
                            </div>
                            <div className="timeline-dot"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Medication Cascade */}
            <section className="medication-section">
                <h2 className="section-title">The Medication Cascade</h2>
                <div className="pills-container">
                    <div className="pill-card">
                        <Pill className="pill-icon"/>
                        <h3 className="pill-name">Lithium / Valproate</h3>
                        <div className="pill-type">Mood Stabilizers</div>
                        <p className="pill-effects">
                            Powerful psychiatric medications with known risks: thyroid dysfunction, metabolic
                            disruption,
                            kidney stress, tremors, weight gain.
                        </p>
                    </div>

                    <div className="pill-card">
                        <Pill className="pill-icon"/>
                        <h3 className="pill-name">Risperidone / Olanzapine</h3>
                        <div className="pill-type">Antipsychotics</div>
                        <p className="pill-effects">
                            Second-generation antipsychotics. Side effects include metabolic syndrome, weight gain,
                            diabetes risk, hyperlipidemia, hormonal disruption.
                        </p>
                    </div>

                    <div className="pill-card">
                        <Pill className="pill-icon"/>
                        <h3 className="pill-name">Antidepressants</h3>
                        <div className="pill-type">SSRIs / Others</div>
                        <p className="pill-effects">
                            Sedating antidepressants added to the regimen. Can contribute to emotional blunting,
                            weight changes, and further metabolic strain.
                        </p>
                    </div>

                    <div className="pill-card">
                        <Pill className="pill-icon"/>
                        <h3 className="pill-name">Beta Blockers</h3>
                        <div className="pill-type">Cardiovascular</div>
                        <p className="pill-effects">
                            Prescribed to manage emerging hypertension and anxiety symptoms—treating downstream
                            effects rather than root causes.
                        </p>
                    </div>

                    <div className="pill-card">
                        <Pill className="pill-icon"/>
                        <h3 className="pill-name">Levothyroxine</h3>
                        <div className="pill-type">Thyroid Hormone</div>
                        <p className="pill-effects">
                            Needed to counter hypothyroidism induced by years of mood stabilizers. Treating the
                            side effects of other treatments.
                        </p>
                    </div>

                    <div className="pill-card">
                        <Pill className="pill-icon"/>
                        <h3 className="pill-name">Colchicine / Allopurinol</h3>
                        <div className="pill-type">Ancient Medicines</div>
                        <p className="pill-effects">
                            Finally: two of the oldest, cheapest drugs in existence. Colchicine (ancient Greek)
                            and allopurinol (1960s). Stabilization at pennies per dose—after decades of profit.
                        </p>
                    </div>
                </div>
            </section>

            {/* System Failure Section */}
            <section className="system-section">
                <h2 className="section-title">The System Design</h2>
                <div className="system-grid">
                    <div className="system-card">
                        <TrendingUp className="system-icon"/>
                        <h3 className="system-heading">Symptom Suppression Over Prevention</h3>
                        <p className="system-text">
                            The medical economy incentivizes treating symptoms as they emerge rather than preventing
                            disease upstream. Each new symptom becomes a new prescription, a new specialist visit,
                            a new revenue stream. Prevention doesn't generate profit—management does.
                        </p>
                    </div>

                    <div className="system-card">
                        <DollarSign className="system-icon"/>
                        <h3 className="system-heading">Profitable Medication Lifecycles</h3>
                        <p className="system-text">
                            Pharmaceutical companies don't maximize human health—they maximize shareholder value.
                            Research follows ROI curves, not suffering curves. Patent-protected drugs generate profit.
                            Off-patent interventions languish, no matter how effective.
                        </p>
                    </div>

                    <div className="system-card">
                        <AlertTriangle className="system-icon"/>
                        <h3 className="system-heading">Chronic Disease as Business Model</h3>
                        <p className="system-text">
                            Health insurers don't earn revenue by eliminating illness—they earn it by managing billable
                            care.
                            Chronic disease becomes not a failure but a feature: stable, predictable, infinitely
                            renewable.
                            This is why Medicare for All faces such resistance—it challenges the very architecture of a
                            medical economy that relies on chronic disease dependence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Purine Pathway Section */}
            <section className="purine-section">
                <h2 className="section-title">The Neglected Biology</h2>
                <div className="purine-content">
                    <div className="purine-diagram">
                        <div className="pathway-flow">
                            <div className="pathway-node">
                                <div className="pathway-label">ATP Breakdown</div>
                                <p className="pathway-description">
                                    Energy metabolism produces purines
                                </p>
                            </div>
                            <div className="pathway-node">
                                <div className="pathway-label">Adenosine Signaling</div>
                                <p className="pathway-description">
                                    Cell signaling & inflammation
                                </p>
                            </div>
                            <div className="pathway-node">
                                <div className="pathway-label">Xanthine Oxidase</div>
                                <p className="pathway-description">
                                    Oxidative stress & vascular injury
                                </p>
                            </div>
                            <div className="pathway-node">
                                <div className="pathway-label">Uric Acid</div>
                                <p className="pathway-description">
                                    Kidney damage & systemic inflammation
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="purine-explanation">
                        <p>
                            For <span className="highlight">decades</span>, researchers have understood that purine
                            metabolism plays a profound role in human physiology. <span className="highlight">Xanthine
              oxidase</span>—the enzyme targeted by allopurinol—contributes to oxidative stress, vascular
                            injury, kidney damage, and systemic inflammation.
                        </p>
                        <p style={{marginTop: '2rem'}}>
                            Evidence linking uric acid and xanthine oxidase activity to cardiovascular disease, kidney
                            disease, metabolic dysfunction, and inflammatory processes has existed for years. Yet
                            clinically,
                            allopurinol remains "the gout drug you give middle-aged men when things get bad enough."
                        </p>
                        <p style={{marginTop: '2rem'}}>
                            Why? Because the pathway doesn't lend itself to <span className="highlight">blockbuster drug
              economics</span>. Cheap molecules, off-patent therapies, preventative framing—these are
                            structurally disadvantaged in a marketplace that rewards lifelong dependence on high-margin
                            pharmaceuticals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Economics Comparison */}
            <section className="economics-section">
                <h2 className="section-title">Two Economic Models</h2>
                <div className="economics-grid">
                    <div className="economics-column current">
                        <h3 className="column-title current">Current System: Profit First</h3>
                        <ul className="economics-list">
                            <li className="economics-item">
                                <strong>Chronic disease management generates stable revenue</strong><br/>
                                Patients require lifelong medications, regular appointments, specialist referrals
                            </li>
                            <li className="economics-item">
                                <strong>Patent-protected drugs maximize profit margins</strong><br/>
                                Research focuses on patentable molecules, not foundational biology
                            </li>
                            <li className="economics-item">
                                <strong>Prevention is economically disadvantaged</strong><br/>
                                Preventing disease eliminates future revenue streams
                            </li>
                            <li className="economics-item">
                                <strong>Upstream interventions lack profit incentive</strong><br/>
                                Cheap, off-patent, multi-system approaches don't attract investment
                            </li>
                        </ul>
                    </div>

                    <div className="economics-column better">
                        <h3 className="column-title better">Better System: Health First</h3>
                        <ul className="economics-list">
                            <li className="economics-item">
                                <strong>Prevention reduces long-term costs</strong><br/>
                                Healthier populations require less intensive interventions
                            </li>
                            <li className="economics-item">
                                <strong>Foundational biology gets research priority</strong><br/>
                                Investment in metabolic health, inflammation, purinergic pathways
                            </li>
                            <li className="economics-item">
                                <strong>Environmental & dietary interventions supported</strong><br/>
                                Address root causes before pharmacological dependency
                            </li>
                            <li className="economics-item">
                                <strong>Universal care aligns incentives with outcomes</strong><br/>
                                A philosophical reconfiguration: system benefits when population health improves,
                                not when illness persists
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <div className="cta-content">
                    <blockquote className="cta-quote">
                        "If we want medicine worthy of human dignity, we must realign incentives so that curing
                        disease, preventing metabolic collapse, and supporting foundational biological health are
                        not economic liabilities but central priorities."
                        <span className="cta-emphasis">We Can Do Better</span>
                    </blockquote>

                    <p className="cta-body">
                        My trajectory is not inevitable. It was constructed by a system that treats human beings as
                        revenue streams, chronic illness as a stable business model, and broad-impact foundational
                        biology as an afterthought unless it can be packaged profitably. What is constructed can be
                        rebuilt.
                    </p>

                    <div className="cta-buttons">
                        <button className="cta-button primary"
                                onClick={() => alert('Share this story to raise awareness about systemic healthcare reform')}>
                            Share This Story
                        </button>
                        <button className="cta-button secondary"
                                onClick={() => alert('Learn more about Medicare for All and healthcare reform movements')}>
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p className="footer-text">
                    "That is not 'care.' That is management. And we can do better."
                    <br/><br/>
                    This is one person's story—but it reflects a systemic pattern affecting millions.
                    Healthcare reform is not just policy. It's about human dignity.
                </p>
            </footer>
        </div>
    );
}
