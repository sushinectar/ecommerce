"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false) // Estado para controlar o modal
  const router = useRouter() // Para navegação entre as páginas

  // Função para abrir e fechar o modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  // Função para navegar para a página desejada
  const handleNavigation = page => {
    router.push(page) // Navega para a página correspondente
    setIsModalOpen(false) // Fecha o modal após a navegação
  }

  return (
    <div className="flex-1 justify-center text-center items-center">
      <nav className="fixed z-10 w-full h-24 flex justify-around text-center items-center bg-transparent text-slate-950">
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
              {/* Novo item: Account */}
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
              className="mt-4 p-2 w-full bg-lime-300 text-gray-700 rounded-md font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="absolute z-10 top-56 inset-x-12">
        <h1 className="inset-x-12 text-3xl text-slate-900">Nossos produtos.</h1>
        <button
          onClick={() => handleNavigation("/shop")}
          className="inset-x- top-2 h-12 w-28 m-6 bg-lime-500 rounded-md font-bold"
        >
          Shop
        </button>
      </div>

      <div className="">
        <div className="w-full h-screen relative">
          <Image src="/banner-mobile.png" alt="Banner" layout="fill" objectFit="cover" />
        </div>
      </div>

      <main className="flex-1 justify-center text-center items-center">
        <h1 className="text-slate-950">Hello World!</h1>
      </main>
    </div>
  )
}
