import Link from "next/link";

export const MainButton = () => {
    return (
        <div
            className="absolute top-[36.281rem] left-[44.5rem] flex flex-row flex-wrap items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] gap-[0.662rem] z-[2] text-center text-[0.938rem] text-darkgray font-inter">
            <Link href={'/arround-fitness'}>
                <div className="group hover:text-white">
                    <button
                        className="rounded-2xl hover:bg-main shadow-[2px_2px_3px_rgba(0,_0,_0,_0.05)] rounded-3xs flex flex-col items-end justify-start pt-[0.875rem] px-[1.5rem] pb-[0.812rem] gap-[0.587rem] cursor-pointer border-[1px] border-solid border-darkgray"
                    >
                        <div
                            className="w-[9.875rem] h-[4.944rem] relative shadow-[2px_2px_3px_rgba(0,_0,_0,_0.05)] rounded-3xs box-border hidden border-[1px] border-solid border-darkgray"/>
                        <div className="flex flex-row items-start justify-end py-[0rem] pr-[2.543rem] pl-[2.562rem]">
                            <svg width="27" height="25" viewBox="0 0 27 25" fill="#ffffff"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.341 2.11979C15.9002 2.11979 18.3546 3.10146 20.1643 4.84883C21.9739 6.5962 22.9906 8.96614 22.9906 11.4373C22.9906 14.6197 21.1936 17.2245 19.3002 19.0932C18.354 20.0165 17.3218 20.8538 16.2166 21.5944L15.7598 21.8946L15.5454 22.0323L15.1412 22.2808L14.7809 22.493L14.3349 22.7436C14.032 22.91 13.6895 22.9976 13.341 22.9976C12.9925 22.9976 12.65 22.91 12.3471 22.7436L11.9011 22.493L11.3435 22.1617L11.1377 22.0323L10.6981 21.7497C9.5058 20.9705 8.39512 20.0807 7.38184 19.0932C5.48837 17.2235 3.69141 14.6197 3.69141 11.4373C3.69141 8.96614 4.70806 6.5962 6.51771 4.84883C8.32736 3.10146 10.7818 2.11979 13.341 2.11979ZM13.341 8.33146C12.9186 8.33146 12.5003 8.4118 12.1101 8.56788C11.7198 8.72396 11.3652 8.95274 11.0666 9.24114C10.7679 9.52954 10.531 9.87193 10.3693 10.2487C10.2077 10.6256 10.1245 11.0294 10.1245 11.4373C10.1245 11.8452 10.2077 12.249 10.3693 12.6258C10.531 13.0027 10.7679 13.345 11.0666 13.6335C11.3652 13.9219 11.7198 14.1506 12.1101 14.3067C12.5003 14.4628 12.9186 14.5431 13.341 14.5431C14.1941 14.5431 15.0122 14.2159 15.6154 13.6335C16.2186 13.051 16.5575 12.261 16.5575 11.4373C16.5575 10.6136 16.2186 9.8236 15.6154 9.24114C15.0122 8.65868 14.1941 8.33146 13.341 8.33146Z"
                                    className="fill-custom-gray group-hover:fill-custom-hover"/>
                            </svg>
                        </div>
                        <div
                            className="w-[6.7rem] h-[0.906rem] relative tracking-[-0.05em] leading-[1.125rem] font-medium inline-block shrink-0 z-[1]">
                            운동시설 찾기
                        </div>
                    </button>
                </div>
            </Link>
            <div className="group hover:text-white">
                <Link href={'/search'}>
                    <button
                        className="rounded-2xl hover:bg-main cursor-pointer pt-[0.875rem] pb-[0.812rem] pr-[2rem] pl-[2.012rem] bg-[transparent] shadow-[2px_2px_3px_rgba(0,_0,_0,_0.05)] rounded-3xs flex flex-col items-end justify-start gap-[0.525rem] border-[1px] border-solid border-darkgray"
                    >
                        <div
                            className="w-[9.838rem] h-[4.944rem] relative shadow-[2px_2px_3px_rgba(0,_0,_0,_0.05)] rounded-3xs box-border hidden border-[1px] border-solid border-darkgray"/>
                        <div className="flex flex-row items-start justify-end py-[0rem] pr-[2.012rem] pl-[2.062rem]">
                            <svg width="27" height="25" viewBox="0 0 27 25" fill="#ffffff"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.4255 2.22332L23.0401 3.68721L24.5561 13.9365L14.7007 23.4527C14.6011 23.549 14.4829 23.6253 14.3527 23.6774C14.2225 23.7295 14.083 23.7564 13.9421 23.7564C13.8012 23.7564 13.6617 23.7295 13.5315 23.6774C13.4014 23.6253 13.2831 23.549 13.1836 23.4527L2.569 13.2035C2.36832 13.0094 2.25562 12.7463 2.25562 12.4721C2.25562 12.1978 2.36832 11.9347 2.569 11.7406L12.4255 2.22332ZM15.4587 11.0087C15.6579 11.2009 15.8943 11.3534 16.1545 11.4574C16.4147 11.5614 16.6935 11.6149 16.9751 11.6149C17.2568 11.6149 17.5356 11.5612 17.7957 11.4571C18.0559 11.353 18.2923 11.2005 18.4914 11.0082C18.6905 10.8159 18.8484 10.5876 18.9561 10.3363C19.0638 10.0851 19.1192 9.81584 19.1192 9.54392C19.1191 9.27201 19.0636 9.00276 18.9558 8.75156C18.848 8.50036 18.69 8.27213 18.4908 8.07989C18.0886 7.69164 17.5431 7.47358 16.9744 7.47368C16.4057 7.47378 15.8603 7.69202 15.4582 8.08041C15.0561 8.46879 14.8303 8.9955 14.8304 9.54466C14.8305 10.0938 15.0565 10.6204 15.4587 11.0087Z"
                                    className="fill-custom-gray group-hover:fill-custom-hover"/>
                            </svg>

                        </div>
                        <div
                            className="w-[5.694rem] relative text-[0.938rem] tracking-[-0.05em] leading-[1.125rem] font-medium font-inter text-darkgray text-center inline-block z-[1]">
                            최저가 검색
                        </div>
                    </button>
                </Link>
            </div>
            <div className="group hover:text-white">
                <Link href={"/community"}>
                    <button
                        className="rounded-2xl hover:bg-main cursor-pointer pt-[0.875rem] pb-[0.812rem] pr-[2.625rem] pl-[2.743rem] shadow-[2px_2px_3px_rgba(0,_0,_0,_0.05)] rounded-3xs flex flex-col items-end justify-start gap-[0.587rem] border-[1px] border-solid">
                        <div
                            className="w-[9.875rem] h-[4.944rem] relative shadow-[2px_2px_3px_rgba(0,_0,_0,_0.05)] rounded-3xs box-border hidden border-[1px] border-solid"/>
                        <div
                            className="flex flex-row items-start justify-end py-[0rem] pr-[1.343rem] pl-[1.375rem]">
                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_33_12)">
                                    <path
                                        d="M5.8567 13.1628V7.64128H3.71235C3.14363 7.64128 2.5982 7.85942 2.19606 8.24773C1.79392 8.63603 1.56799 9.16269 1.56799 9.71183V22.1352C1.56906 22.2633 1.60707 22.3887 1.67777 22.4972C1.74847 22.6057 1.84906 22.693 1.96827 22.7494C2.08312 22.7999 2.20975 22.82 2.3353 22.8079C2.46084 22.7958 2.58082 22.7518 2.68306 22.6804L6.3642 20.0646H15.9709C16.2418 20.0723 16.5115 20.0263 16.7632 19.9293C17.0149 19.8323 17.2434 19.6865 17.4343 19.5008C17.6253 19.3151 17.7748 19.0935 17.8734 18.8497C17.9721 18.606 18.0179 18.3453 18.008 18.0838V17.3039H10.1454C9.00797 17.3039 7.91712 16.8676 7.11283 16.091C6.30855 15.3144 5.8567 14.2611 5.8567 13.1628Z"
                                        className="fill-custom-gray group-hover:fill-custom-hover"
                                    />
                                    <path
                                        d="M22.2968 2.80998H10.1455C9.57673 2.80998 9.03131 3.02813 8.62917 3.41643C8.22702 3.80474 8.0011 4.33139 8.0011 4.88054V13.1628C8.0011 13.7119 8.22702 14.2386 8.62917 14.6269C9.03131 15.0152 9.57673 15.2333 10.1455 15.2333H19.8308L23.2475 17.7939C23.349 17.8664 23.4687 17.9116 23.5942 17.925C23.7198 17.9383 23.8468 17.9193 23.9622 17.8698C24.0839 17.8139 24.1867 17.7259 24.2587 17.616C24.3308 17.5061 24.3693 17.3787 24.3697 17.2487V4.88054C24.37 4.34314 24.1539 3.82668 23.7671 3.4403C23.3803 3.05392 22.853 2.82789 22.2968 2.80998Z"
                                        className="fill-custom-gray group-hover:fill-custom-hover"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_33_12">
                                        <rect width="25.7322" height="24.8467" fill="red"
                                              transform="translate(0.138428 0.0492392)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div
                            className="w-[4.356rem] h-[0.906rem] relative text-[0.938rem] tracking-[-0.05em] leading-[1.125rem] font-medium font-inter text-center inline-block shrink-0 z-[1]">
                            커뮤니티
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    )
}
