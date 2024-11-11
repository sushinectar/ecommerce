"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false) // Estado para controlar a cor do nav
  const router = useRouter()

  // Função para abrir e fechar o modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  // Função para navegar para a página desejada
  const handleNavigation = page => {
    router.push(page)
    setIsModalOpen(false)
  }

  // Detecta o scroll e altera a cor do nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex-1 justify-center text-center items-center">
      {/* Nav com cor sólida e transição */}
      <nav
        className={`fixed z-10 w-full h-24 flex justify-around text-center items-center transition-all duration-500 ${
          isScrolled ? "bg-[#FFECD8]" : "bg-transparent"
        } text-slate-950`}
      >
        <div className="flex gap-5">
          {/* Botão Menu */}
          <button onClick={toggleModal}>
            <Image src="/menu.png" alt="menu" width={35} height={35} />
          </button>
        </div>
        <h1 className="text-2xl">Naturalis</h1>
        <div className="flex items-center">
          <a>
            <Image src="/cart.png" alt="cart" width={35} height={35} />
          </a>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-8 rounded-md w-80">
            <ul>
              <li>
                <button
                  onClick={() => handleNavigation("/shop")}
                  className="block p-2 text-lg text-gray-700 rounded-md w-full"
                >
                  Shop
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/about")}
                  className="block p-2 text-lg text-gray-700 rounded-md w-full"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("/account")}
                  className="block p-2 text-lg text-gray-700 rounded-md w-full"
                >
                  Account
                </button>
              </li>
            </ul>
            <button
              onClick={toggleModal} // Fechar o modal
              className="mt-4 p-2 w-full bg-lime-600 rounded-md font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="absolute z-10 bottom-8 right-8">
        <h1 className="inset-x-12 text-3xl text-slate-900">Start thriving.</h1>
        <button
          onClick={() => handleNavigation("/shop")}
          className="inset-x- top-2 h-12 w-28 m-6 bg-lime-600 rounded-md font-bold"
        >
          Shop
        </button>
      </div>

      <div className="relative w-screen h-screen overflow-hidden">
        <Image
          src="/banner-container.jpg"
          alt="Banner Sign-Up"
          layout="fill"
          objectFit="cover"
          objectPosition="55% center"
        />
      </div>

      {/* Principal content */}
      <main className="flex-1 justify-center text-center items-center">
        <h1 className="text-2xl text-slate-950">Best sellers</h1>
      </main>

      <div className="flex-col justify-center align-center items-center">
        <Image src="/banner-sign.jpg" alt="Banner Sign-Up" width="2" height="2" objectFit="cover" />
        <h1 className="text-2xl text-slate-950">Be closer to us</h1>
        <p className="text-slate-950">Get exclusive access to various special offers and discounts.</p>

        <button className="w-28 h-12 bg-lime-600 rounded-md font-bold ">Sign Up</button>
      </div>

      <footer></footer>
    </div>
  )
}
