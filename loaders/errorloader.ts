import { LoaderGenericTypes } from "../components/ui/Types.ts";

export default function apiquotables(
  _req: Request,
  _ctx: unknown,
): Promise<LoaderGenericTypes> {
  throw new Error("Ops... -- erro proposital");
}
