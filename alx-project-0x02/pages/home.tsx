import React, { useState } from "react";
import { CardProps } from "@/interfaces";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<CardProps[]>([]);

    const handleCreate = (posts: CardProps) => {
        setPosts((prev) => [posts, ...prev]);
    }

    return (
        <main className="min-h-screen p-8">
            <Header />
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Home Page</h1>
                <button 
                    className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
                    onClick={() => setIsModalOpen(true)}
                >
                    New Post
                </button>
            </div>

            <Card
                title="Card Title"
                content="Card Content goes here in long text..."
            />

            <div className="space-y-4 mt-6">
                { posts.length === 0 ?
                    (<p className="text-gray-500">No posts yet!</p>):
                    (
                        posts.map((post, index) => (
                            <div className="border rounded-lg p-4 bg-white" key={index}>
                                <h2 className="text-lg font-semibold">{post.title}</h2>
                                <p className="mt-2 text-gray-700">{post.content}</p>
                            </div>
                        ))
                    )
                }
            </div>

            <PostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleCreate}
            />
        </main>
    )
}

export default Home;