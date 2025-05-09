import Image from "next/image"

type Datos = {
  size?: number,
  red?: boolean
}

export default function Logo({ size, red }: Datos) {


  return (
    <Image src={red ? "/newcyberr.png" : "/newcyber.png"} alt="Logotipo" width={size ? (size * 2) : 400} height={size ? size : 123} priority />

  )
}
