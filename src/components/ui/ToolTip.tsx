import { ReactNode } from 'react';

interface Props {
    label: string;
    children: ReactNode;
}

export function ToolTip({ label, children }: Props) {
    return (
        <div className="group relative inline-block">
            {children}
            <div className="pointer-events-none absolute top-full left-1/2 z-10 flex translate-x-[-50%] translate-y-2 scale-95 flex-col items-center opacity-0 transition-all duration-300 group-hover:translate-y-3 group-hover:scale-100 group-hover:opacity-100">
                <div className="border-b-navy-dark h-0 w-0 border-r-6 border-b-6 border-l-6 border-r-transparent border-l-transparent" />
                <span className="bg-navy-dark mt-2 rounded px-3 py-1 text-xs whitespace-nowrap text-white shadow-md">
                    {label}
                </span>
            </div>
        </div>
    );
}
