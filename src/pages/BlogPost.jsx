import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { blogs } from '../data';
import TableOfContents from '../components/TableOfContents';

const blogContent = import.meta.glob('../content/blogs/*.md', { query: '?raw', import: 'default' });

const BlogPost = () => {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === id);
    const [content, setContent] = useState('');

    useEffect(() => {
        const loadContent = async () => {
            const path = `../content/blogs/${id}.md`;
            if (blogContent[path]) {
                const text = await blogContent[path]();
                setContent(text);
            }
        };
        loadContent();
    }, [id]);

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
                <Link to="/" className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen pt-24 pb-20 relative">
            <TableOfContents content={content} />

            {/* Hero Image */}
            <div className="relative h-[40vh] w-full mb-12 overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.topic}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="max-w-4xl mx-auto">
                        <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-colors">
                            <ArrowLeft size={20} /> Back to Articles
                        </Link>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                        >
                            {blog.topic}
                        </motion.h1>
                        <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Tag size={16} />
                                <span>{blog.category}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>5 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-6">
                <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-300 prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-strong:text-white prose-code:text-cyan-300 prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800">
                    <ReactMarkdown
                        components={{
                            h2: ({ node, ...props }) => {
                                const id = props.children[0]?.toString().toLowerCase().replace(/[^\w]+/g, '-');
                                return <h2 id={id} {...props} />;
                            },
                            h3: ({ node, ...props }) => {
                                const id = props.children[0]?.toString().toLowerCase().replace(/[^\w]+/g, '-');
                                return <h3 id={id} {...props} />;
                            }
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-slate-800">
                    <h3 className="text-white font-bold mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                        {blog.tech.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-900 text-slate-300 rounded-full text-sm border border-slate-800">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
