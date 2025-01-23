import Image from "next/image"

export default function Logo() {
  return (
    <Image src="/logo.svg" alt="Logotipo" width={400} height={123} priority />
    
  )
}
