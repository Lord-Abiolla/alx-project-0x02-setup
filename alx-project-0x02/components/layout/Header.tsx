import Link from "next/link";

const Header: React.FC = () => {
    return (
        <nav>
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
        </nav>
    )
}

export default Header;