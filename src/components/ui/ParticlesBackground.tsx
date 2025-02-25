import { memo } from 'react';

import Particles from '@tsparticles/react';

import { useParticles } from '@/hooks';

export const ParticlesBackground = memo(() => {
    const { init, particlesOptions } = useParticles();
    if (!init) return null;

    return (
        <div className="pointer-events-none fixed inset-0">
            <Particles
                id="tsparticles-left"
                options={particlesOptions}
                className="absolute top-0 bottom-0 left-0 w-1/4 sm:w-1/5"
            />
            <Particles
                id="tsparticles-right"
                options={particlesOptions}
                className="absolute top-0 right-0 bottom-0 w-1/4 sm:w-1/5"
            />
        </div>
    );
});
