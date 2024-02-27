import { ArrowDown, CoinIcon } from "@/components/SvgIcon";
import MainLayout from "@/layouts/mainLayout";

export default function Buy() {
  return (
    <MainLayout>
      <main className="flex justify-center min-h-screen w-full bg-black px-[200px] pt-[154px] max-sm:px-[12px]">
        <div className="flex flex-col h-fit items-center gap-[32px] p-[32px] bg-glass-modal bg-opacity-96 bg-[#1A1D21] rounded-[16px] max-sm:p-[24px]">
          <div className="flex flex-col items-center justify-center gap-[16px]">
            <CoinIcon className="w-[88px] h-[88px]" />
            <p className="text-[24px] font-semibold text-white">Buy $JAEGER</p>
            <div className="flex items-center justify-center bg-transparent">
              <div className="bg-transparent outline-none text-[70px] font-bold text-[#FFB547]">$100</div>
            </div>
            <p className="text-[14px] font-medium text-[#686B6E]">
              Get: 60.824,778 $JAEGER
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[14px] font-medium text-white">Pay with</p>
            <div className="flex items-center justify-between rounded-[12px] px-[16px] py-[10px] bg-black border-[1px] border-[#363A3D]">
              <input
                type="text"
                className="flex bg-transparent outline-none text-white text-[16px] font-medium"
                placeholder="0,3789212323"
              />
              <div className="flex items-center gap-[4px]">
                <p className="text-[14px] font-normal text-[#686B6E]">SOL</p>
                <ArrowDown />
              </div>
            </div>
            <p className="text-[14px] font-medium text-[#686B6E]">
              Balance: 2.7782398 SOL
            </p>
          </div>
          <div className="flex w-full items-center rounded-[10px] px-[16px] py-[8px] justify-center bg-[#FFB547] text-[14px] font-semibold text-black cursor-pointer">
            {" "}
            Buy $JAEGER
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
