import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange, className = '' }) => {
    if (totalPages <= 1) return null;

    return (
        <div className={`flex flex-col gap-4 ${className}`}>
            <div className="flex flex-col items-center bg-slate-900/50 backdrop-blur-md p-2 rounded-full border border-slate-800 shadow-xl">
                <button
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    <ChevronLeft size={20} />
                </button>

                <div className="flex flex-col gap-3 py-10 items-center">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`rounded-full transition-all duration-300 ${currentPage === page
                                ? 'bg-cyan-400 h-8 w-1.5 shadow-[0_0_10px_rgba(34,211,238,0.5)]'
                                : 'bg-slate-700 hover:bg-slate-500 h-1.5 w-1.5'
                                }`}
                            aria-label={`Go to page ${page}`}
                        />
                    ))}
                </div>

                <button
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
            <div className="text-center text-sm text-slate-400 font-mono">
                {currentPage} / {totalPages}
            </div>
        </div>
    );
};

export default Pagination;
