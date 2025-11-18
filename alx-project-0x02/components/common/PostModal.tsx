import React, { useState } from "react";
import { type CardProps } from "@/interfaces";

type PostModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (post: CardProps) => void;
};

export default function PostModal({ isOpen, onClose, onCreate }: PostModalProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault;

        if (!title.trim()) {
            alert("Title is required");
            return;
        }

        onCreate({
            title: title.trim(),
            content: content.trim(),
        });

        setTitle("");
        setContent("");
        onClose();
    }

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Create Post</h2>
                    <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
                        x
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-3">
                        <span className="text-sm font-medium">Title</span>
                        <input 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border rounded-md px-3 py-2"
                            placeholder="Enter title"
                        />
                    </label>

                    <label className="block mb-4">
                        <span className="text-sm font-medium">Content</span>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full border rounded-md px-3 py-2 min-h-[120px]"
                            placeholder="Enter content"
                        />
                    </label>

                    <div className="flex justify-end gap-2">
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Submit
                        </button>

                        <button
                            type="button"
                            onClick={onClose}
                            className="border px-4 py-2 rounded-md"
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};
