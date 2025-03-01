import Image from "next/image";
import React from "react";
import Car from "../../public/GettyImages.jpg";
import carPhoto from "../../public/carPhoto.jpg";

const PhotosPage = () => {
  return (
    <>
      <div className="border border-1 p-5 flex justify-center items-center flex flex-col w-[50%]">
        <Image src="/audi.png" alt="audi" width={200} height={200} />

        <h1 className="p-5">
          برای تصاویری که از قبل لود شده اند این پراپرتی کار می کند
        </h1>
        <Image
          src={Car}
          alt="audi"
          width={400}
          height={400}
          placeholder="blur"
        />

        <h1 className="p-5">
          برای تصاویری که از قبل لود شده اند می توان عرض و طول تعریف نکرد
        </h1>
        <Image src={Car} alt="audi" />
      </div>

      <div className="border border-1 my-2 p-5  w-[100%] h-[500] relative">
        <Image
          src={carPhoto}
          alt="exhibit"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (min-width: 1200px) 50vw, 13vw"
          fill
          style={{
            objectFit: "contain"
          }}
        />
      </div>
    </>
  );
};

export default PhotosPage;
