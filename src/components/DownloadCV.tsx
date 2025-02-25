import { FiDownload } from 'react-icons/fi';

import { INFO } from '@/data/constants';

export const DownloadCV = () => {
    return (
        <a
            href={INFO.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-blue-light relative flex h-12 w-[176px] items-center justify-center overflow-hidden rounded-lg border-2 font-bold"
        >
            <span className="bg-blue-light absolute inset-0 scale-0 rounded-lg transition-transform duration-300 group-hover:scale-110" />
            <span className="group-hover:text-navy-dark relative z-10 flex items-center gap-2 transition-colors duration-300">
                <FiDownload className="h-5 w-5" />
                Download CV
            </span>
        </a>
    );
};
