import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GhostIcon, ZapIcon, ShieldIcon, UsersIcon, ExternalLinkIcon } from "lucide-react"

export default function GhostriderCoin() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Banner Section */}
      <div className="relative h-[50vh] min-h-[300px] w-full overflow-hidden">
      <Image
          src="/grarrival.png"
          alt="GhostriderCoin Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center top"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <Image src="/ghostriderlogo.png" alt="GhostriderCoin Logo" width={150} height={150} className="mx-auto mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">GhostriderCoin</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">A community-driven cryptocurrency for a new era</p>
            <Button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg py-6 px-10 rounded-full transition-transform hover:scale-105"
              asChild
            >
              <Link href="https://discord.gg/qFpnquQgfK" target="_blank" rel="noopener noreferrer">
                Join Our Community
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* About Section */}
            <Card className="bg-gray-800 border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-orange-400">About GhostriderCoin</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-100">
                <p className="mb-4">
                  GhostriderCoin is a community-run and managed cryptocurrency that reminds us of a simpler time in crypto. This project was public from the first block, when it was announced on Bitcointalk.
                </p>
                <ul className="space-y-2">
                  {["Fair launch", "No premine", "No insider mine", "Relatively low total supply and rewards", "No dev fee, forever"].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <GhostIcon className="mr-2 text-orange-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Why Choose Section */}
            <Card className="bg-gray-800 border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-orange-400">Why Choose GhostriderCoin?</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: ZapIcon, title: "Fast Transactions", description: "Quick processing with low fees" },
                    { icon: ShieldIcon, title: "Secure Network", description: "Powered by blockchain technology" },
                    { icon: UsersIcon, title: "Community Driven", description: "Join passionate enthusiasts" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <item.icon className="mx-auto text-orange-500 mb-2" size={24} />
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Coin Stats Section */}
            <Card className="bg-gray-800 border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-orange-400">Coin Stats</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Basic Info</h3>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Algorithm:</strong> Ghostrider</li>
                      <li><strong>Ticker:</strong> GRR</li>
                      <li><strong>Block time:</strong> 90 seconds</li>
                      <li><strong>Total supply:</strong> 25 million GRR</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Smartnodes</h3>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Collateral:</strong> 20,000 GRR</li>
                      <li><strong>Total limit:</strong> 1,250 smartnodes</li>
                    </ul>
                  </div>
                  <div className="col-span-2">
                    <h3 className="font-semibold mb-2">Rewards</h3>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Block rewards:</strong> 21 GRR</li>
                      <li><strong>Reward split:</strong> 80% miner / 20% smartnode</li>
                      <li><strong>Reduction:</strong> 5% every 50,000 blocks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Links Section */}
            <Card className="bg-gray-800 border-2 border-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-orange-400">Important Links</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Wallet", url: "https://github.com/GhostridercoinOrg/ghostridercoin/releases" },
                    { title: "Explorer", url: "https://explorer.ghostridercoin.org/" },
                    { title: "Mining Pool", url: "https://pool.ghostridercoin.org/" },
                    { title: "Discord", url: "https://discord.gg/qFpnquQgfK" }
                  ].map((link, index) => (
                    <Button key={index} variant="outline" className="w-full bg-gray-700 text-orange-400 border-orange-500 hover:bg-orange-500 hover:text-white transition-colors" asChild>
                      <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        {link.title}
                        <ExternalLinkIcon className="ml-2" size={16} />
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-400">
          <p>&copy; 2023 GhostriderCoin. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}