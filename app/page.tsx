"use client"

import { useState } from "react"
import ToolCard from "@/components/tool-card"
import { tools } from "@/lib/data"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = [
    "All",
    "Text Generation",
    "Image Generation",
    "Audio",
    "Video",
    "Data Analysis",
    "Code Generation",
    "Productivity",
  ]

  const categoryColors = {
    All: "bg-gray-600 hover:bg-gray-700",
    "Text Generation": "bg-blue-500 hover:bg-blue-600",
    "Image Generation": "bg-purple-500 hover:bg-purple-600",
    Audio: "bg-green-500 hover:bg-green-600",
    Video: "bg-red-500 hover:bg-red-600",
    "Data Analysis": "bg-orange-500 hover:bg-orange-600",
    "Code Generation": "bg-indigo-500 hover:bg-indigo-600",
    Productivity: "bg-teal-500 hover:bg-teal-600",
  }

  const filteredTools =
    selectedCategory === "All" ? tools : tools.filter((tool) => tool.categories.includes(selectedCategory))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Tools Dictionary
          </h1>
          <p className="text-center text-gray-600 mt-2">Discover the best AI tools for every task</p>
        </header>

        <div className="mb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 shadow-md ${
                  selectedCategory === category
                    ? `${categoryColors[category]} text-white shadow-lg`
                    : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-500 text-lg">No tools found in this category.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Found {filteredTools.length} tool{filteredTools.length !== 1 ? "s" : ""}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>
      </div>
    </div>
  )
}
