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
        <div class="w-full md:w-1/2 border border-secondary rounded-lg overflow-hidden">
          <Image
            width={640}
            height={640}
            class="object-fit z-10"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image[0]}
            alt={image[0]}
            decoding="async"
            loading="lazy"
          />
        </div>
        <div class="w-full md:w-1/2 border border-secondary rounded-lg overflow-hidden">
          <Image
            width={640}
            height={640}
            class="object-fit z-10"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image[1]}
            alt={image[1]}
            decoding="async"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
