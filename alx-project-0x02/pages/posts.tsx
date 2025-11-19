import Header from '@/components/layout/Header';
import { PostProps } from '@/interfaces';
import PostCard from '@/components/common/PostCard';
import React, { useEffect, useState } from 'react';

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getStaticProps = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await response.json();

                const formatted = data.slice(0, 10).map((item: any) => ({
                    title: item.title,
                    content: item.body,
                    userId: item.userId
                }));

                setPosts(formatted);

            } catch(error) {
                console.error("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        };
        
        getStaticProps();

    }, []);

    return (
        <div>
            <header className='p-4 mt-4'>
                <Header />
            </header>
            
            <main>
                <h2 className='text-3xl font-bold mb-6'>Posts</h2>

                <div className='p-6'>
                    { loading ? (
                        <p>Loading...</p>
                    ) : (
                        posts.map((post, index) => (
                            <PostCard
                                key={index}
                                title={post.title}
                                content={post.content}
                                userId={post.userId}
                            />
                        ))
                    )}
                </div>
            </main>
        </div>
    )
}

export default Posts;