import { Navbar } from "@/components/layout/navbar"
import FooterSection from "@/components/layout/section/footer-section"
//import { Divide } from "lucide-react"

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        <Navbar />
        {children}
        <FooterSection/>
    </div>
  )
}