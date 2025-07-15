import { ExternalLink, Sparkles } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Tool } from "@/lib/types"

interface ToolCardProps {
  tool: Tool
}

const categoryColors = {
  "Text Generation": "bg-blue-100 text-blue-800 border-blue-200",
  "Image Generation": "bg-purple-100 text-purple-800 border-purple-200",
  Audio: "bg-green-100 text-green-800 border-green-200",
  Video: "bg-red-100 text-red-800 border-red-200",
  "Data Analysis": "bg-orange-100 text-orange-800 border-orange-200",
  "Code Generation": "bg-indigo-100 text-indigo-800 border-indigo-200",
  Productivity: "bg-teal-100 text-teal-800 border-teal-200",
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="h-full flex flex-col border border-gray-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-white">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            {tool.name}
            {tool.popular && <Sparkles className="h-4 w-4 text-yellow-500" />}
          </CardTitle>
          {tool.free && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Free
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow pb-3">
        <div className="flex flex-wrap gap-2">
          {tool.categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className={`text-xs font-medium ${categoryColors[category] || "bg-gray-100 text-gray-800"}`}
            >
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-3">
        <Button asChild variant="outline" className="w-full h-9 text-sm hover:bg-blue-50 hover:border-blue-300">
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            Visit Tool <ExternalLink className="h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
