import Link from "next/link"

export default function Drawer() {
  return (
    <div>
      <div className="shadow-lg rounded-lg py-2 px-4 space-y-3 z-10 pr-6 m-6 text-sm">
        <p><Link href="https://twitter.com/tryaretav"><a target="_blank" rel="noopener noreferrer">Website</a></Link></p>
        <p><Link href="https://discord.gg/uYGFMbSEkb"><a target="_blank" rel="noopener noreferrer">GitHub</a></Link></p>
        <div className="border" />
        <p><Link href="/changelog"><a target="_blank" rel="noopener noreferrer">What&apos;s new?</a></Link></p>
        <p><Link href="/privacy"><a target="_blank" rel="noopener noreferrer">Export to PDF</a></Link></p>
        <p className="pt-2 text-gray-400">hey there :)</p>
      </div>
    </div>
  )
}
