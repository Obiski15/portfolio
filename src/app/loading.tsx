import Image from "next/image";

function Loading() {
  return (
    <div className="min-h-screen m-auto w-full py-10 relative flex-1">
      <Image
        src="/spin.svg"
        alt="spinner"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        width={24}
        height={24}
      />
    </div>
  );
}

export default Loading;
