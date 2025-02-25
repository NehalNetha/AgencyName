import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center md:mr-auto">
          <Image
            src="/logo.svg"
            alt="Bald Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="ml-2 text-xl font-bold text-white">Bald</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center overflow-x-auto bg-white/5 backdrop-blur-xl rounded-full px-4 md:px-6 py-2 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          <Link href="/" className="text-white/90 hover:text-white transition-colors px-4">
            Home
          </Link>
          <Link href="/products" className="text-white/90 hover:text-white transition-colors px-4">
            Products
          </Link>
          <Link href="/resources" className="text-white/90 hover:text-white transition-colors px-4">
            Resources
          </Link>
          <Link href="/about" className="text-white/90 hover:text-white transition-colors px-4">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav