import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  image?: ImageWidget[];
}

const DEFAULT_IMAGE = ["", ""];

export default function TwoBanners({
  image = DEFAULT_IMAGE,
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm">
      <div class={`flex gap-12 md:gap-20 text-left items-center z-10`}>
        {image.map((img)=>{
          return  <div class="w-full md:w-1/2 border border-secondary rounded-lg overflow-hidden text-center">
            <Image
              width={400}
              height={400}
              class="object-fit z-10"
              sizes="(max-width: 400px) 100vw, 30vw"
              src={img}
              alt={img}
              decoding="async"
              loading="lazy"
              style={"margin: auto"}
            />
          </div>
        })}
      </div>
    </div>
  );
}
