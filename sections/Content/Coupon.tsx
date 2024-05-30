export interface Props {
  coupon?: string;
  couponDescription?: string;
}

export default function CouponTaskOne({
  coupon = "Cupom",
  couponDescription = "Benefícios do cupom",
}: Props) {
  return (
    <div class="">
      <p>
        <span class="text-[28px] text-green-400 font-thin pr-5">Cupom:</span>
        {" "}
        <span class="text-[20px] text-orange-500 font-bold">{coupon}</span>
      </p>
      <p>
        <span class="text-[28px] text-green-400 font-thin pr-5">
          Benefícios:
        </span>{" "}
        <span class="text-zinc-400 text-[16px] md:text-[18px] leading-[1]">
          {couponDescription}
        </span>
      </p>
    </div>
  );
}
