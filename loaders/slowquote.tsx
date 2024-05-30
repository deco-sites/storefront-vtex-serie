import { LoaderGenericTypes } from "../components/ui/Types.ts";

export interface Prop {
  timeToWait?: number;
}

export default async function apiquotables(
  _prop: Prop,
  _req: Request,
  _ctx: unknown,
): Promise<LoaderGenericTypes> {
  const time = _prop.timeToWait;
  // This call will hang for 5 seconds
  await fetch(`https://rich-puma-16-d8ebp0p2c7ba.deno.dev/noop?N=${time}`);
  return {
    data: [
      `The only thing we have to fear is fear itself. ${time} Times :)`,
    ],
  };
}
