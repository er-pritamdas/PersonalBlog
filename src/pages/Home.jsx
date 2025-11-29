import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';
import { blogs } from '../data';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Pagination Logic
    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
    const paginatedBlogs = filteredBlogs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 relative">
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Insights</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        Exploring the frontiers of DevOps, Network Automation, and AI.
                    </motion.p>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setCurrentPage(1);
                                }}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="w-full bg-slate-900 border border-slate-800 rounded-full pl-10 pr-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
                        />
                    </div>
                </div>

                {/* Grid */}
                {paginatedBlogs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedBlogs.map((blog, index) => (
                            <div key={blog.id} className="relative group h-full">
                                <div className={`relative h-full rounded-2xl overflow-hidden border transition-all duration-300 ${blog.featured
                                    ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                                    : 'border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10'
                                    }`}>
                                    {/* Featured Gradient Background */}
                                    {blog.featured && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-900/20 opacity-100" />
                                    )}

                                    {/* Featured Tag */}
                                    {blog.featured && (
                                        <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg tracking-wider">
                                            <Sparkles size={10} />
                                            FEATURED
                                        </div>
                                    )}

                                    <div className="relative z-10 h-full">
                                        <BlogCard blog={blog} index={index} isFeatured={blog.featured} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-slate-500">
                        No articles found matching your criteria.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
