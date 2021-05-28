import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={120} height={77} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Users List</a></Link>
        </nav>
     );
}
 
export default Navbar;