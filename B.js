import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { BoxButton } from "./BoxButton";
import { StyleRound } from "./StyleRound";

export const Frame = ({
    property1,
    className,
    icoCheckSelected = "ico-check-selected-primary-lg-2.svg",
    img = "ico-check-selected-primary-lg-3.svg",
}) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`border border-solid border-gray-200 w-[1280px] flex flex-col items-end gap-[16px] p-[24px] overflow-hidden rounded-[12px] bg-graywhite overflow-y-scroll relative ${className}`}
        >
            <div className="w-full flex self-stretch items-center flex-[0_0_auto] justify-between relative">
                <div className="inline-flex items-center gap-[8px] flex-[0_0_auto] relative">
                    <div className="font-title-sm w-[80px] tracking-[var(--title-sm-letter-spacing)] [font-style:var(--title-sm-font-style)] text-[length:var(--title-sm-font-size)] text-gray-900 font-[number:var(--title-sm-font-weight)] leading-[var(--title-sm-line-height)] relative">
                        HUB점
                    </div>
                    <div className="inline-flex items-center gap-[8px] flex-[0_0_auto] relative">
                        <div className="font-title-sm w-fit tracking-[var(--title-sm-letter-spacing)] [font-style:var(--title-sm-font-style)] text-[length:var(--title-sm-font-size)] text-gray-900 font-[number:var(--title-sm-font-weight)] leading-[var(--title-sm-line-height)] whitespace-nowrap relative">
                            1순위
                        </div>
                        <div className="border border-solid border-stateinfo inline-flex items-center gap-[4px] flex-[0_0_auto] px-[8px] py-[6px] rounded-[100px] justify-center bg-[#edf4ff] relative">
                            <img
                                className="w-[20px] h-[20px] relative"
                                alt="Ico check selected"
                                src={state.property1 === "default" ? "ico-check-selected-primary-lg.svg" : icoCheckSelected}
                            />
                            <div className="font-title-sm w-fit mt-[-1.00px] tracking-[var(--title-sm-letter-spacing)] text-[length:var(--title-sm-font-size)] [font-style:var(--title-sm-font-style)] text-stateinfo font-[number:var(--title-sm-font-weight)] leading-[var(--title-sm-line-height)] whitespace-nowrap relative">
                                mns 동천 hub
                            </div>
                        </div>
                        <div className="font-title-sm w-fit tracking-[var(--title-sm-letter-spacing)] [font-style:var(--title-sm-font-style)] text-[length:var(--title-sm-font-size)] text-gray-900 font-[number:var(--title-sm-font-weight)] leading-[var(--title-sm-line-height)] whitespace-nowrap relative">
                            2순위
                        </div>
                        <div className="border border-solid border-stateinfo inline-flex items-center gap-[4px] flex-[0_0_auto] px-[8px] py-[6px] rounded-[100px] justify-center bg-[#edf4ff] relative">
                            <img
                                className="w-[20px] h-[20px] relative"
                                alt="Ico check selected"
                                src={state.property1 === "default" ? "image.svg" : img}
                            />
                            <div className="font-title-sm w-fit mt-[-1.00px] tracking-[var(--title-sm-letter-spacing)] text-[length:var(--title-sm-font-size)] [font-style:var(--title-sm-font-style)] text-stateinfo font-[number:var(--title-sm-font-weight)] leading-[var(--title-sm-line-height)] whitespace-nowrap relative">
                                xxx hub
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="inline-flex items-center gap-[4px] flex-[0_0_auto] relative"
                    onClick={() => {
                        dispatch("click");
                    }}
                >
                    <StyleRound className="!relative !w-[24px] !h-[24px]" color="#9A9A9A" />
                    <div className="font-title-md w-fit mt-[-1.00px] tracking-[var(--title-md-letter-spacing)] text-[length:var(--title-md-font-size)] [font-style:var(--title-md-font-style)] relative text-gray-500 font-[number:var(--title-md-font-weight)] whitespace-nowrap leading-[var(--title-md-line-height)]">
                        {state.property1 === "variant-2" && <>상세필터 닫기</>}

                        {state.property1 === "default" && <>상세필터 열기</>}
                    </div>
                </div>
            </div>
            {state.property1 === "variant-2" && (
                <div className="flex gap-[16px] self-stretch w-full items-center relative flex-[0_0_auto]">
                    <div className="flex h-[48px] items-center gap-[12px] px-[12px] py-[10px] relative flex-1 grow bg-graywhite rounded-[8px] border border-solid border-gray-200">
                        <div className="relative w-fit font-title-sm font-[number:var(--title-sm-font-weight)] text-gray-500 text-[length:var(--title-sm-font-size)] tracking-[var(--title-sm-letter-spacing)] leading-[var(--title-sm-line-height)] whitespace-nowrap [font-style:var(--title-sm-font-style)]">
                            상품명
                        </div>
                    </div>
                    <div className="flex h-[48px] items-center gap-[12px] px-[12px] py-[10px] relative flex-1 grow bg-graywhite rounded-[8px] border border-solid border-gray-200">
                        <div className="text-[length:var(--title-sm-font-size)] leading-[var(--title-sm-line-height)] relative w-fit font-title-sm font-[number:var(--title-sm-font-weight)] text-gray-500 tracking-[var(--title-sm-letter-spacing)] whitespace-nowrap [font-style:var(--title-sm-font-style)]">
                            단말기 색상
                        </div>
                    </div>
                    <div className="flex h-[48px] items-center gap-[12px] px-[12px] py-[10px] relative flex-1 grow bg-graywhite rounded-[8px] border border-solid border-gray-200">
                        <div className="relative w-fit font-title-sm font-[number:var(--title-sm-font-weight)] text-gray-500 text-[length:var(--title-sm-font-size)] tracking-[var(--title-sm-letter-spacing)] leading-[var(--title-sm-line-height)] whitespace-nowrap [font-style:var(--title-sm-font-style)]">
                            색상모델명
                        </div>
                    </div>
                    <div className="inline-flex gap-[8px] items-center relative flex-[0_0_auto]">
                        <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
                            <BoxButton BTN="line-lg" className="!flex-[0_0_auto]" state="active" text="초기화" />
                        </div>
                        <div className="inline-flex items-center gap-[24px] relative flex-[0_0_auto]">
                            <BoxButton BTN="solid-lg" className="!flex !w-[156px]" state="active" text="적용하기" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

function reducer(state, action) {
    if (state.property1 === "default") {
        switch (action) {
            case "click":
                return {
                    property1: "variant-2",
                };
        }
    }

    if (state.property1 === "variant-2") {
        switch (action) {
            case "click":
                return {
                    property1: "default",
                };
        }
    }

    return state;
}

Frame.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
    icoCheckSelected: PropTypes.string,
    img: PropTypes.string,
};
