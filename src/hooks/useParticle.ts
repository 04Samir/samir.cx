import { useEffect, useState } from 'react';

import { InteractivityDetect, MoveDirection, OutMode } from '@tsparticles/engine';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export const useParticles = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesOptions = {
        detectRetina: true,
        fullScreen: {
            enable: false,
            zIndex: -1,
        },
        interactivity: {
            detectsOn: InteractivityDetect.window,
            events: {
                onClick: {
                    enable: false,
                },
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
            },
            modes: {
                repulse: {
                    distance: 50,
                    duration: 0.5,
                },
            },
        },
        particles: {
            color: {
                value: '#FFFFFF',
            },
            move: {
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200,
                },
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.bounce,
                },
                random: true,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    area: 800,
                    enable: true,
                },
                value: 200,
            },
            opacity: {
                animation: {
                    enable: true,
                    speed: 1,
                    sync: false,
                },
                value: { min: 0.4, max: 0.8 },
            },
            shape: {
                type: 'star',
            },
            size: {
                animation: {
                    enable: true,
                    minimumValue: 1,
                    speed: 2,
                    sync: false,
                },
                value: { min: 1, max: 2 },
            },
        },
    };

    return { init, particlesOptions };
};
