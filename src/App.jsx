import React, { useState } from "react";
import { FaBars, FaChevronRight } from "react-icons/fa6";
import { Link, BrowserRouter as Router } from "react-router-dom";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  // categories dummy data
  const categories = [
    {
      name: "Electronics",
      subCategories: ["Laptop", "Mobile Phones", "Televisions", "Cameras"],
    },
    {
      name: "Fashion",
      subCategories: ["Men's Wear", "Women's Wear", "Accessories", "Shoes"],
    },
    {
      name: "Home Appliances",
      subCategories: ["Refrigerators", "Microwaves", "Washing machines"],
    },
    {
      name: "Books",
      subCategories: [],
    },
  ]

  return (
    <>
      <Router>
        <main className="w-full min-h-screen bg-neutral-200 flex items-center flex-col text-neutral-600 px-28 py-12">
          {/* Navbar */}

          {/* Categories section */}
          <div className="w-fit bg-neutral-50 relative px-4 py-2 rounded-xl border border-neutral-300 shadow-md">

            {/* Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center py-2 bg-transparent text-neutral-600 text-sm font-semibold uppercase"
            >
              <FaBars className="mr-2" /> Shop by Categories
            </button>

            {/* Dropdown */}
            {isOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-neutral-50 border border-neutral-200 shadow-lg rounded-lg z-10">

                {categories.map((category, index) => (
                  <div key={index} className="group relative px-4 py-2 hover:bg-neutral-200">

                    {/* Main Category */}
                    <div className="w-full flex items-center justify-between cursor-pointer">
                      <span className="text-sm text-neutral-700 font-medium">
                        {category.name}
                      </span>
                      {category.subCategories.length > 0 && (
                        <span className="text-sm text-neutral-600">
                          <FaChevronRight className="w-2.5 h-2.5 text-neutral-500" />
                        </span>
                      )}
                    </div>


                    {/* Sub Categories (make a visible on hover) */}
                    {category.subCategories.length > 0 && (
                      <div className="absolute top-0 left-full w-48 hidden group-hover:block bg-neutral-50 border border-neutral-200 shadow-lg rounded-lg">
                        {category.subCategories.map((subCategory, subIndex) => (
                          <Link key={subIndex} to="/" className="block px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-200">
                            {subCategory}
                          </Link>
                        ))}

                      </div>
                    )}

                  </div>
                ))}

              </div>
            )}

          </div>

          {/* Footer */}

        </main>
      </Router>
    </>
  )
}

export default App
