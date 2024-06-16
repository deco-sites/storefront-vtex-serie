import { Section } from "deco/mod.ts";


export interface Props {
  sectiona: Section[];
}

export default function SectionLoader({sectiona
}: Props) {
    const sectionRender = sectiona[0] ?? false;
  return (
      <div>
        {sectionRender &&
            <sectionRender.Component />
        }
      </div>
  );
}
