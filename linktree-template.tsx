import Image from "next/image"
import { Facebook, Globe, Instagram, MessageCircle, TwitterIcon as TikTok } from "lucide-react"

export default function LinkTree() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-center mb-6">
          <Image
            src="/placeholder.svg?height=100&width=100"
            alt="Your Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        <div className="space-y-4">
          <LinkButton href="https://yourwebsite.com" icon={<Globe className="w-5 h-5" />}>
            Website
          </LinkButton>
          <LinkButton href="https://wa.me/yourphonenumber" icon={<MessageCircle className="w-5 h-5" />}>
            WhatsApp
          </LinkButton>
          <LinkButton href="https://facebook.com/yourpage" icon={<Facebook className="w-5 h-5" />}>
            Facebook
          </LinkButton>
          <LinkButton href="https://instagram.com/yourusername" icon={<Instagram className="w-5 h-5" />}>
            Instagram
          </LinkButton>
          <LinkButton href="https://tiktok.com/@yourusername" icon={<TikTok className="w-5 h-5" />}>
            TikTok
          </LinkButton>
        </div>
      </div>
    </div>
  )
}

function LinkButton({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between px-4 py-3 bg-[#80689c] text-white rounded-lg hover:bg-opacity-90 transition-colors"
    >
      <span className="font-medium">{children}</span>
      {icon}
    </a>
  )
}

