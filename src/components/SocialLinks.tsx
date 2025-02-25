import { INFO } from '@/data/constants';

export const SocialLinks = () => {
    return (
        <>
            {INFO.socialLinks.map((link) => {
                const IconBefore = link.icons[0];
                const IconAfter = link.icons[1];
                return (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="group relative flex items-center justify-center overflow-hidden rounded-lg p-3 text-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <span className="absolute inset-0 origin-center scale-0 rounded-lg bg-[var(--colour-blue-lighter)]/20 transition-transform duration-300 group-hover:scale-100" />
                        <div className="relative h-6 w-6">
                            <IconBefore className="absolute h-6 w-6 transform transition-all duration-300 group-hover:scale-0 group-hover:opacity-0" />
                            <IconAfter className="group-hover:text-blue-light absolute h-6 w-6 scale-0 transform opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />
                        </div>
                    </a>
                );
            })}
        </>
    );
};
