import Image from "next/image";
import logo from "../../public/logo.svg";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-transparent to-rose-50 text-hero-text py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src={logo} alt="DocSniz Logo" width={25} height={25} className="mr-2" />
            <h1 className="text-2xl font-bold">DocSniz</h1>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-hero-hover">Home</a>
            <a href="#" className="hover:text-hero-hover">About</a>
            <a href="#" className="hover:text-hero-hover">Contact</a>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">&copy; 2025 DocSniz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;