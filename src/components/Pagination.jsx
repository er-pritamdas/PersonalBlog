import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
            <div className="flex flex-col items-center gap-2 bg-slate-900/50 backdrop-blur-md p-2 rounded-full border border-slate-800 shadow-xl">
                <button
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    <ChevronLeft size={20} />
                </button>

                <div className="flex flex-col gap-1 py-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`w-2 h-2 rounded-full transition-all ${currentPage === page
                                ? 'bg-cyan-400 h-4'
                                : 'bg-slate-600 hover:bg-slate-500'
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
            <div className="text-center text-xs text-slate-500 font-mono">
                {currentPage} / {totalPages}
            </div>
        </div>
    );
};

export default Pagination;
