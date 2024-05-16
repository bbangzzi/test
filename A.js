import * as React from "react";

type HubBadgeProps = {
  rank: number;
  hubName: string;
  imgSrc: string;
};

const HubBadge: React.FC<HubBadgeProps> = ({ rank, hubName, imgSrc }) => {
  return (
    <>
      <p className="my-auto">{rank}순위</p>
      <div className="flex gap-1 justify-center px-2 py-1.5 text-blue-600 bg-indigo-50 border border-blue-600 border-solid rounded-[100px]">
        <img loading="lazy" src={imgSrc} alt={`Hub image for ${hubName}`} className="shrink-0 w-5 aspect-square" />
        <p>{hubName}</p>
      </div>
    </>
  );
};

type FilterSectionProps = {};

const FilterSection: React.FC<FilterSectionProps> = () => {
  return (
    <form className="flex gap-4 mt-4 text-sm leading-5 max-md:flex-wrap max-md:max-w-full">
      <label htmlFor="productName" className="sr-only">
        상품명
      </label>
      <input
        id="productName"
        type="text"
        placeholder="상품명"
        className="flex-1 justify-center items-start px-3 py-2.5 whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-200 text-neutral-400 max-md:pr-5"
        aria-label="상품명"
      />
      <label htmlFor="color" className="sr-only">
        단말기 색상
      </label>
      <input
        id="color"
        type="text"
        placeholder="단말기 색상"
        className="flex-1 justify-center items-start px-3 py-2.5 bg-white rounded-lg border border-solid border-neutral-200 text-neutral-400 max-md:pr-5"
        aria-label="단말기 색상"
      />
      <label htmlFor="colorModel" className="sr-only">
        색상모델명
      </label>
      <input
        id="colorModel"
        type="text"
        placeholder="색상모델명"
        className="flex-1 justify-center items-start px-3 py-2.5 whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-200 text-neutral-400 max-md:pr-5"
        aria-label="색상모델명"
      />
      <div className="flex gap-2 text-base font-bold leading-10 whitespace-nowrap">
        <button type="button" className="flex flex-col justify-center text-neutral-800">
          <div className="justify-center px-4 bg-white rounded-lg border border-solid border-zinc-400">초기화</div>
        </button>
        <button type="submit" className="flex flex-col justify-center text-white">
          <div className="justify-center px-4 rounded-lg bg-neutral-800 max-md:px-5">적용하기</div>
        </button>
      </div>
    </form>
  );
};

const MyComponent: React.FC = () => {
  return (
    <section className="flex flex-col p-6 mt-4 bg-white rounded-xl border border-solid border-neutral-200 max-md:px-5 max-md:max-w-full">
      <header className="flex gap-2 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-2 text-sm leading-5 text-neutral-800">
          <p className="my-auto">HUB점</p>
          <div className="flex gap-2">
            <HubBadge rank={1} hubName="mns 동천 hub" imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1c5941805f26531b95d003b593d6258ab2dc716ae80bb3d57e11b16bec7463ef?apiKey=d933d003c63749c78fdf6240e5dbeae0&" />
            <HubBadge rank={2} hubName="xxx hub" imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1c5941805f26531b95d003b593d6258ab2dc716ae80bb3d57e11b16bec7463ef?apiKey=d933d003c63749c78fdf6240e5dbeae0&" />
          </div>
        </div>
        <div className="flex gap-1 my-auto text-base leading-6 text-neutral-400">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca6c0673ff7852f486aa5a8c8b5ccb878af7473ef4e00a21bc2bf838450e51bc?apiKey=d933d003c63749c78fdf6240e5dbeae0&" alt="상세필터 닫기" className="shrink-0 w-6 aspect-square" />
          <p>상세필터 닫기</p>
        </div>
      </header>
      <FilterSection />
    </section>
  );
}

export default MyComponent;