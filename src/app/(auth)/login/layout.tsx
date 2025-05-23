import { Navbar } from "@/components/layout/navbar"
//import { Divide } from "lucide-react"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}