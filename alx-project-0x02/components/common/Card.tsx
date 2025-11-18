import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div className="rounded shadow-lg p-4 w-[30em] bg-gray-300">
            <h4 className="mb-4 text-2xl font-bold">{title}</h4>
            <p className="font-light">{content}</p>
        </div>
    )
}

export default Card;