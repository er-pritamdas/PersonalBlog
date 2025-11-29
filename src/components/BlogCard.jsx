import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogCard = ({ blog, index, isFeatured }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative rounded-2xl overflow-hidden flex flex-col h-full ${!isFeatured ? 'bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all' : ''}`}
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.topic}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-cyan-400 text-xs font-bold rounded-full border border-cyan-500/30">
                        {blog.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                    <Calendar size={14} />
                    <span>{blog.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {blog.topic}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-1">
                    {blog.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                            {tech}
                        </span>
                    ))}
                </div>

                <Link
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-2 text-cyan-400 font-medium text-sm group-hover:gap-3 transition-all mt-auto"
                >
                    Read Article <ArrowRight size={16} />
                </Link>
            </div>
        </motion.div>
    );
};

export default BlogCard;
