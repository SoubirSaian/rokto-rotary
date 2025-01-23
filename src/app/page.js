import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[200px]">
        <Link href="/health" className="mx-3 my-4 px-3 py-3 bg-[#dab95c] rounded">Health</Link>
        <Link href="/eligiblity" className="mx-3 my-4 px-3 py-3 bg-[#dab95c] rounded">eligiblity</Link>
        <Link href="/photo" className="mx-3 my-4 px-3 py-3 bg-[#dab95c] rounded">Photo</Link>
        <Link href="/profile" className="mx-3 my-4 px-3 py-3 bg-[#dab95c] rounded">Profile</Link>
        <Link href="/register" className="mx-3 my-4 px-3 py-3 bg-[#dab95c] rounded">register</Link>
        <Link href="/signup" className="mx-3 my-4 px-3 py-3 bg-[#dab95c] rounded">signup</Link>
        <Link href="/terms" className="mx-3 my-4 px-3 py-3 bg-[#dab95c] rounded">terms</Link>
        <Link href="/signup/verify" className="mx-3 my-4 px-3 py-3 bg-[#dab95c] rounded">verify</Link>
        <Link href="/signup/forget" className="mx-3 my-4 px-3 py-3 bg-[#dab95c] rounded">forget</Link>
        
    </div>
  );
}
