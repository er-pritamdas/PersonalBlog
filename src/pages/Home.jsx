import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';
import { blogs } from '../data';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedMonth, setSelectedMonth] = useState('All');
    const [selectedYear, setSelectedYear] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const categories = ['All', 'Featured', ...new Set(blogs.map(blog => blog.category))];

    // Extract unique Months and Years
    const months = ['All', ...new Set(blogs.map(blog => blog.date.split(' ')[0]))];
    const years = ['All', ...new Set(blogs.map(blog => blog.date.split(' ')[1]))];

    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.description.toLowerCase().includes(searchTerm.toLowerCase());

        let matchesCategory = true;
        if (selectedCategory === 'Featured') {
            matchesCategory = blog.featured;
        } else if (selectedCategory !== 'All') {
            matchesCategory = blog.category === selectedCategory;
        }

        const [blogMonth, blogYear] = blog.date.split(' ');
        const matchesMonth = selectedMonth === 'All' || blogMonth === selectedMonth;
        const matchesYear = selectedYear === 'All' || blogYear === selectedYear;

        return matchesSearch && matchesCategory && matchesMonth && matchesYear;
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

                {/* Filters & Search - Sticky */}
                <div className="sticky top-20 z-30 py-4 bg-slate-950/80 backdrop-blur-xl mb-12 -mx-6 px-6 md:mx-0 md:px-0 md:shadow-lg">
                    <div className="flex flex-row items-center gap-4 overflow-x-auto scrollbar-thin pb-2">
                        {/* Search */}
                        <div className="relative flex-1 min-w-[200px]">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
                            />
                        </div>

                        {/* Categories Dropdown */}
                        <select
                            value={selectedCategory}
                            onChange={(e) => {
                                setSelectedCategory(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-slate-300 focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>

                        {/* Month Dropdown */}
                        <select
                            value={selectedMonth}
                            onChange={(e) => {
                                setSelectedMonth(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-slate-300 focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
                        >
                            <option value="All">Month</option>
                            {months.filter(m => m !== 'All').map(month => (
                                <option key={month} value={month}>{month}</option>
                            ))}
                        </select>

                        {/* Year Dropdown */}
                        <select
                            value={selectedYear}
                            onChange={(e) => {
                                setSelectedYear(e.target.value);
                                setCurrentPage(1);
                            }}
                            className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-slate-300 focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer"
                        >
                            <option value="All">Year</option>
                            {years.filter(y => y !== 'All').map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Content Layout with Sidebar */}
                <div className="flex gap-8 relative items-start">
                    {/* Main Grid */}
                    <div className="flex-1">
                        {paginatedBlogs.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {paginatedBlogs.map((blog, index) => (
                                    <div key={blog.id} className="relative group h-full">
                                        <div className={`relative h-full rounded-2xl overflow-hidden border transition-all duration-300 ${blog.featured
                                            ? 'border-transparent shadow-lg shadow-purple-500/20'
                                            : 'border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10'
                                            }`}>
                                            {/* Featured Gradient Background */}
                                            {blog.featured && (
                                                <>
                                                    <div className="absolute inset-0 bg-slate-950 z-0" />
                                                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-purple-900/40 z-0" />
                                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 z-0" />
                                                    {/* Border Gradient */}
                                                    <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-slate-800 via-slate-800 to-purple-500/50 -z-10" />
                                                </>
                                            )}

                                            {/* Featured Tag */}
                                            {blog.featured && (
                                                <div className="absolute top-4 left-4 z-20 bg-slate-900/80 backdrop-blur-md border border-slate-700 text-cyan-400 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg tracking-wider">
                                                    <Sparkles size={10} className="text-yellow-400 fill-yellow-400" />
                                                    Featured
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

                    {/* Sticky Pagination Sidebar */}
                    <div className="hidden xl:block sticky top-96 h-fit">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
