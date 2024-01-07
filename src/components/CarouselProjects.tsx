import { Carousel } from "flowbite-react"
import type { Resources } from "../models/Resources"

interface Props {
    images: [Resources]
}

export default function CarouselProjects({images}:Props){
    return(
        <div className="h-[448px] sm:h-[512px] xl:h-[640px] rounded-2xl">
            <Carousel slideInterval={5000}>
                {images.map((image)=>(
                    <img loading="lazy" src={image.src} alt={image.alt} key={`image-${image.src}`} className="object-contain w-full rounded-2xl shadow-2xl shadow-white/10"/>
                ))}
            </Carousel>
        </div>
    )
}