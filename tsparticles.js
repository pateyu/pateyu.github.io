tsParticles.load({
    background: {
        color: FFFFFF,
    },

    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
                parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10,
                },
            },
            onClick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            push: {
                quantity: 4,
            }
        }
    },
    particles: {
        links: {
            enable: true,
            opacity: 0.6,  // Slightly increased for more visibility
            width: 1.5,    // Increased thickness of lines
            distance: 120,
        },
        number: {
            density: {
                enable: true,
                area: 800,  // Increased the area for fewer particles
            },
            value: 100,  // Reduced particle count
        },
        move: {
            enable: true,
            speed: 2,
            rotate: {
                enable: true,
                speed: 1,
            }
        },
        opacity: {
            value: 0.5,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            anim: {
                enable: true,
                speed: 3,
                size_min: 0.1,
                sync: true
            }
        },
        shape: {
            type: ["circle", "triangle", "star"],
        },
        color: {
            value: "#000000", // Changed to white
        },
        twinkle: {
            lines: {
                enable: true,
                frequency: 0.05,
                opacity: 0.5
            },
            particles: {
                enable: true,
                frequency: 0.05,
                opacity: 0.5
            }
        }
    },
    retina_detect: true,
});

