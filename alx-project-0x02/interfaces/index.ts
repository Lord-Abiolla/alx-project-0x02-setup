import React from "react";

export interface CardProps {
    title: string;
    content: string
}

export interface ButtonProps {
    children: React.ReactNode;
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-full";
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    className?: string;
}

export interface PostProps {
    title: string;
    content: string;
    userId: number;
}
