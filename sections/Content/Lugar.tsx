import type { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  lugar: string;
  temperatura: Temperature | null;
}

export default function Lugar({
  lugar,
  temperatura,
}: Props) {
  return (
    <div>
      <ul>
        <li>Lugar: {lugar}</li>
        <li>Temperatura: {temperatura?.celsius}</li>
      </ul>
    </div>
  );
}
