import Image from 'next/image'
import React from 'react'

const tiendas = [
  { nombre: "Amazon", url: "https://www.amazon.com/-/es/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068231/Amazon_ghcicm.webp" },
  { nombre: "Shein", url: "https://us.shein.com/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068228/Shein_iirptu.jpg" },
  { nombre: "eBay", url: "https://www.ebay.com/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068235/eBay_lwrdru.png" },
  { nombre: "Walmart", url: "https://www.walmart.com/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068230/walmart_pdef5n.png" },
  { nombre: "Temu", url: "https://www.temu.com/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068231/Temu_s562pb.png" },
  { nombre: "Etsy", url: "https://www.etsy.com/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068236/etsy_f10qq2.png" },
  { nombre: "Wish", url: "https://www.wish.com/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068231/wish_jw9wrc.png" },
  { nombre: "Nike", url: "https://www.nike.com", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068240/nike_c4guky.png" },
  { nombre: "Sephora", url: "https://www.sephora.com/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068228/sephora_qrwoyp.webp" },
  { nombre: "Target", url: "https://www.target.com/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068229/target_yvoywl.png" },
  { nombre: "Macy's", url: "https://www.macys.com/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068238/macys_ebcwcy.jpg" },
  { nombre: "Victoria's Secret", url: "https://www.victoriassecret.com/us/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068230/Victoria-Secret_f7uu1i.png" },
  { nombre: "Coach", url: "https://www.coach.com/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068234/coach_abqexv.jpg" },
  { nombre: "Carter's", url: "https://www.carters.com/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068233/carters_cjyzz4.png" },
  { nombre: "Bath & Body Works", url: "https://www.bathandbodyworks.com", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068234/BathBodyWorks_pdqtjr.jpg" },
  { nombre: "6pm", url: "https://www.6pm.com/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068231/6pm_rwhyna.png" },
  { nombre: "Romwe", url: "https://us.romwe.com/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068228/romwe_idqrix.jpg" },
  { nombre: "American Eagle", url: "https://www.ae.com/us/en", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068232/americanEagle_jqdkhd.jpg" },
  { nombre: "Bershka", url: "https://www.bershka.com/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068233/bershka_rgumyg.png" },
  { nombre: "Pull&Bear", url: "https://www.pullandbear.com/us/", src: "https://res.cloudinary.com/dga0uaurm/image/upload/v1747068242/pullAndBeer_nfn6tc.jpg" }
];


export default function Tiendas() {
    return (
        <section className="w-full flex items-center justify-center py-12 md:py-16 lg:py-20 border-y bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                            Compra en las mejores tiendas online
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-lg">
                            Te conectamos con las tiendas más populares del mundo para que encuentres los mejores productos al
                            mejor precio.
                        </p>
                    </div>
                </div>

                <div className="relative mt-10 overflow-hidden">
                    <div className="flex lg:animate-marqueeDesktop animate-marqueeMobile items-center justify-center gap-8 py-4">
                        <div className="flex min-w-max flex-nowrap gap-8">
                            {tiendas.map((t) => (

                                <a href={t.url} key={t.nombre} className="group relative flex flex-col items-center justify-center space-y-2 cursor-pointer">
                                    <div className="overflow-hidden rounded-lg border bg-background p-4 shadow-sm transition-all duration-200 hover:shadow-md">
                                        <Image
                                            src={t.src}
                                            width={160}
                                            height={80}
                                            alt={`Logo de ${t.nombre}`}
                                        className="h-16 w-40 object-contain"
                                        />
                                    </div>
                                    <span className="text-sm font-medium">{t.nombre}</span>
                                </a>

                            ))}

                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent"></div>
                </div>


            </div>
        </section>
    )
}
