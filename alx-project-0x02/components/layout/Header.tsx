import Link from "next/link";

const Header: React.FC = () => {
    return (
        <nav className="flex gap-4 justify-between items-center p-4 bg-gray-200 shadow-md rounded-full mb-8">
            <div className="px-4">
                <Link href='/' className="text-3xl font-bold text-blue-600">Blog</Link>
            </div>

            <div className="flex gap-4 items-center font-semibold text-blue-600">
                <Link href="/home">Home</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/about">About</Link>
            </div>
        </nav>
    )
}

export default Header;