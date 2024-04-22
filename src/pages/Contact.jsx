import * as React from "react";

function ContactUs() {
    return (
        <div
            className="flex flex-col justify-start items-start p-7 rounded-xl bg-white"
            style={{
                boxShadow:
                    "0px 24px 80px 0 rgba(17,17,26,0.1), 0px 16px 56px 0 rgba(17,17,26,0.1), 0px 8px 24px 0 rgba(17,17,26,0.1)"
            }}
        >
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-14">
                <div className="flex-grow-0 flex-shrink-0 w-[416px] h-[619px] relative overflow-hidden rounded-xl bg-[#eeedfc]">
                    <svg
                        width={185}
                        height={155}
                        viewBox="0 0 185 155"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-[230px] top-[463px]"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <circle cx="134.5" cy="134.5" r="134.5" fill="#948DEB" />
                    </svg>
                    <svg
                        width={138}
                        height={138}
                        viewBox="0 0 138 138"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute left-[202px] top-[437px]"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <circle cx={69} cy={69} r={69} fill="#B6B1F1" fill-opacity="0.5" />
                    </svg>
                    <div className="flex flex-col justify-start items-start absolute left-6 top-10 gap-14">
                        <p className="flex-grow-0 flex-shrink-0 text-[32px] text-left text-[#001140]">
                            Contact Us
                        </p>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-10">
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-6">
                                <p className="flex-grow-0 flex-shrink-0 w-[368px] text-base text-left text-[#001140]">
                                    We value your inquiries, feedback, and concerns. Reach out to us
                                    via the contact form, and one of our knowledgeable
                                    representatives will respond to you via email as quickly as
                                    possible.{" "}
                                </p>
                                <p className="flex-grow-0 flex-shrink-0 w-[344px] text-base text-left text-[#001140]">
                                    You can also reach out to us via the following mediums and on
                                    social media.
                                </p>
                                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                                            preserveAspectRatio="xMidYMid meet"
                                        >
                                            <path
                                                d="M18.3084 15.275C18.3084 15.575 18.2417 15.8833 18.1 16.1833C17.9584 16.4833 17.775 16.7667 17.5334 17.0333C17.125 17.4833 16.675 17.8083 16.1667 18.0167C15.6667 18.225 15.125 18.3333 14.5417 18.3333C13.6917 18.3333 12.7834 18.1333 11.825 17.725C10.8667 17.3167 9.90835 16.7667 8.95835 16.075C8.00002 15.375 7.09169 14.6 6.22502 13.7417C5.36669 12.875 4.59169 11.9667 3.90002 11.0167C3.21669 10.0667 2.66669 9.11667 2.26669 8.175C1.86669 7.225 1.66669 6.31667 1.66669 5.45C1.66669 4.88333 1.76669 4.34167 1.96669 3.84167C2.16669 3.33333 2.48335 2.86667 2.92502 2.45C3.45835 1.925 4.04169 1.66667 4.65835 1.66667C4.89169 1.66667 5.12502 1.71667 5.33335 1.81667C5.55002 1.91667 5.74169 2.06667 5.89169 2.28333L7.82502 5.00833C7.97502 5.21667 8.08335 5.40833 8.15835 5.59167C8.23335 5.76667 8.27502 5.94167 8.27502 6.1C8.27502 6.3 8.21669 6.5 8.10002 6.69167C7.99169 6.88333 7.83335 7.08333 7.63335 7.28333L7.00002 7.94167C6.90835 8.03333 6.86669 8.14167 6.86669 8.275C6.86669 8.34167 6.87502 8.4 6.89169 8.46667C6.91669 8.53333 6.94169 8.58333 6.95835 8.63333C7.10835 8.90833 7.36669 9.26667 7.73335 9.7C8.10835 10.1333 8.50835 10.575 8.94169 11.0167C9.39169 11.4583 9.82502 11.8667 10.2667 12.2417C10.7 12.6083 11.0584 12.8583 11.3417 13.0083C11.3834 13.025 11.4334 13.05 11.4917 13.075C11.5584 13.1 11.625 13.1083 11.7 13.1083C11.8417 13.1083 11.95 13.0583 12.0417 12.9667L12.675 12.3417C12.8834 12.1333 13.0834 11.975 13.275 11.875C13.4667 11.7583 13.6584 11.7 13.8667 11.7C14.025 11.7 14.1917 11.7333 14.375 11.8083C14.5584 11.8833 14.75 11.9917 14.9584 12.1333L17.7167 14.0917C17.9334 14.2417 18.0834 14.4167 18.175 14.625C18.2584 14.8333 18.3084 15.0417 18.3084 15.275Z"
                                                stroke="#2F4858"
                                                stroke-width="1.5"
                                                stroke-miterlimit={10}
                                            />
                                            <path
                                                d="M16.6667 3.33333H12.6667M16.6667 3.33333V7.33333V3.33333Z"
                                                stroke="#2F4858"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#2f4858]">
                                            +1234567890
                                        </p>
                                    </div>
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                                            preserveAspectRatio="xMidYMid meet"
                                        >
                                            <path
                                                d="M14.1667 17.0833H5.83335C3.33335 17.0833 1.66669 15.8333 1.66669 12.9167V7.08333C1.66669 4.16666 3.33335 2.91666 5.83335 2.91666H14.1667C16.6667 2.91666 18.3334 4.16666 18.3334 7.08333V12.9167C18.3334 15.8333 16.6667 17.0833 14.1667 17.0833Z"
                                                stroke="#2F4858"
                                                stroke-width="1.5"
                                                stroke-miterlimit={10}
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M14.1666 7.5L11.5583 9.58333C10.7 10.2667 9.29164 10.2667 8.43331 9.58333L5.83331 7.5"
                                                stroke="#2F4858"
                                                stroke-width="1.5"
                                                stroke-miterlimit={10}
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#2f4858]">
                                            info@faremit.com
                                        </p>
                                    </div>
                                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                                            preserveAspectRatio="xMidYMid meet"
                                        >
                                            <path
                                                d="M3.01669 7.075C4.65836 -0.141667 15.35 -0.133334 16.9834 7.08333C17.9417 11.3167 15.3084 14.9 13 17.1167C11.325 18.7333 8.67502 18.7333 6.99169 17.1167C4.69169 14.9 2.05836 11.3083 3.01669 7.075Z"
                                                stroke="#2F4858"
                                                stroke-width="1.5"
                                            />
                                            <path
                                                d="M9.9999 11.1917C11.4358 11.1917 12.5999 10.0276 12.5999 8.5917C12.5999 7.15576 11.4358 5.9917 9.9999 5.9917C8.56396 5.9917 7.3999 7.15576 7.3999 8.5917C7.3999 10.0276 8.56396 11.1917 9.9999 11.1917Z"
                                                stroke="#2F4858"
                                                stroke-width="1.5"
                                            />
                                        </svg>
                                        <p className="flex-grow w-[332px] text-base text-left text-[#2f4858]">
                                            128 City Road, London, United Kingdom
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow-0 flex-shrink-0 w-[106.12px] h-5">
                                <div className="flex justify-start items-center w-[106.12px] absolute left-0 top-[352px] overflow-hidden gap-5">
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            d="M18.0284 3.3592C17.3492 3.68003 16.1934 4.2817 15.6125 4.3967C15.59 4.40253 15.5717 4.41003 15.55 4.41587C14.8725 3.74753 13.9442 3.33337 12.9167 3.33337C10.8459 3.33337 9.16671 5.01253 9.16671 7.08337C9.16671 7.19253 9.15755 7.39337 9.16671 7.50003C6.48505 7.50003 4.52671 6.10087 3.06088 4.30253C2.86505 4.06087 2.65671 4.1867 2.61338 4.35837C2.51588 4.7467 2.48255 5.39587 2.48255 5.8592C2.48255 7.0267 3.39505 8.17337 4.81588 8.8842C4.55421 8.9517 4.26588 9.00003 3.96588 9.00003C3.61255 9.00003 3.20588 8.90753 2.85005 8.72087C2.71838 8.6517 2.43421 8.67087 2.51838 9.00753C2.85588 10.3567 4.39588 11.3042 5.77171 11.58C5.45921 11.7642 4.79255 11.7267 4.48588 11.7267C4.37255 11.7267 3.97838 11.7 3.72338 11.6684C3.49088 11.64 3.13338 11.7 3.43255 12.1534C4.07505 13.1259 5.52838 13.7367 6.77921 13.76C5.62755 14.6634 3.74421 14.9934 1.94005 14.9934C1.57505 14.985 1.59338 15.4009 1.88755 15.555C3.21838 16.2534 5.39838 16.6667 6.95588 16.6667C13.1475 16.6667 16.6667 11.9475 16.6667 7.4992C16.6667 7.42753 16.665 7.27753 16.6625 7.1267C16.6625 7.1117 16.6667 7.09753 16.6667 7.08253C16.6667 7.06003 16.66 7.03837 16.66 7.01587C16.6575 6.90253 16.655 6.7967 16.6525 6.7417C17.1434 6.38753 17.895 5.77253 18.275 5.3017C18.4042 5.1417 18.3 4.94753 18.1242 5.00837C17.6717 5.16587 16.8892 5.47087 16.3992 5.5292C17.38 4.88003 17.865 4.31503 18.2817 3.68753C18.4242 3.47337 18.2459 3.25587 18.0284 3.3592Z"
                                            fill="#001140"
                                        />
                                    </svg>
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <path
                                            d="M3.33334 7.22222H6.11112V16.6667H3.33334V7.22222ZM4.7139 6.11111H4.69834C3.86945 6.11111 3.33334 5.49333 3.33334 4.72166C3.33334 3.93333 3.88612 3.33333 4.73001 3.33333C5.57501 3.33333 6.09557 3.93333 6.11112 4.72166C6.11112 5.49277 5.57501 6.11111 4.7139 6.11111ZM16.6667 16.6667H13.8889V11.6117C13.8889 10.3905 13.2083 9.55722 12.1156 9.55722C11.2817 9.55722 10.8306 10.1194 10.6117 10.6628C10.5317 10.8572 10.5556 11.395 10.5556 11.6667V16.6667H7.77779V7.22222H10.5556V8.67555C10.9561 8.05555 11.5833 7.22222 13.1878 7.22222C15.1756 7.22222 16.6661 8.47222 16.6661 11.2633L16.6667 16.6667Z"
                                            fill="#001140"
                                        />
                                    </svg>
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M14.6042 7.5H11.6667V5.83333C11.6667 4.97333 11.7367 4.43166 12.9692 4.43166H14.5258V1.78166C13.7683 1.70333 13.0067 1.665 12.2442 1.66666C9.98334 1.66666 8.33334 3.0475 8.33334 5.5825V7.5H5.83334V10.8333L8.33334 10.8325V18.3333H11.6667V10.8308L14.2217 10.83L14.6042 7.5Z"
                                            fill="#001140"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 gap-10">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[672px] gap-6">
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[324px] relative gap-1">
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                                <p className="flex-grow w-[324px] text-sm font-semibold text-left text-[#63606a]">
                                    First name
                                </p>
                            </div>
                            <div className="self-stretch flex-grow-0 flex-shrink-0 h-12 relative overflow-hidden rounded-md bg-white border border-[#d6dae1]">
                                <div className="flex justify-start items-center w-[300px] absolute left-3 top-[11px] gap-4">
                                    <p className="flex-grow w-[300px] text-sm text-left text-[#aea9ba]">
                                        Enter your email address
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[324px] relative gap-1">
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                                <p className="flex-grow w-[324px] text-sm font-semibold text-left text-[#63606a]">
                                    Last name
                                </p>
                            </div>
                            <div className="self-stretch flex-grow-0 flex-shrink-0 h-12 relative overflow-hidden rounded-md bg-white border border-[#d6dae1]">
                                <div className="flex justify-start items-center w-[300px] absolute left-3 top-[11px] gap-4">
                                    <p className="flex-grow w-[300px] text-sm text-left text-[#aea9ba]">
                                        Enter your email address
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
                            <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                                <p className="flex-grow w-[672px] text-sm font-semibold text-left text-[#63606a]">
                                    Email Address
                                </p>
                            </div>
                            <div className="self-stretch flex-grow-0 flex-shrink-0 h-12 relative overflow-hidden rounded-md bg-white border border-[#d6dae1]">
                                <div className="flex justify-start items-center w-[648px] absolute left-3 top-[11px] gap-4">
                                    <p className="flex-grow w-[648px] text-sm text-left text-[#aea9ba]">
                                        Enter your email address
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[672px] relative gap-4">
                            <p className="flex-grow-0 flex-shrink-0 w-[109px] h-[20.37px] text-sm font-semibold text-left text-[#001140]">
                                Select Subject?
                            </p>
                            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
                                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                                    <div className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative overflow-hidden rounded-xl bg-white border border-[#dcdae1]" />
                                    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#001140]">
                                        General Inquiry
                                    </p>
                                </div>
                                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                                    <svg
                                        width={18}
                                        height={19}
                                        viewBox="0 0 18 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <rect
                                            x="0.5"
                                            y="0.685188"
                                            width={17}
                                            height={17}
                                            rx="8.5"
                                            fill="#554ADF"
                                        />
                                        <rect
                                            x="0.5"
                                            y="0.685188"
                                            width={17}
                                            height={17}
                                            rx="8.5"
                                            stroke="#554ADF"
                                        />
                                        <path
                                            d="M12.3333 6.68519L7.75 11.2685L5.66667 9.18519"
                                            stroke="white"
                                            stroke-width="1.66667"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#001140]">
                                        General Inquiry
                                    </p>
                                </div>
                                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                                    <div className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative overflow-hidden rounded-xl bg-white border border-[#dcdae1]" />
                                    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#001140]">
                                        General Inquiry
                                    </p>
                                </div>
                                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2">
                                    <div className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative overflow-hidden rounded-xl bg-white border border-[#dcdae1]" />
                                    <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#001140]">
                                        General Inquiry
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[672px] gap-1">
                            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-1">
                                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
                                    <p className="flex-grow w-[672px] text-sm font-semibold text-left text-[#63606a]">
                                        Subject
                                    </p>
                                </div>
                                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[672px] relative gap-1">
                                    <div className="self-stretch flex-grow-0 flex-shrink-0 h-[135px] relative overflow-hidden rounded-md bg-white border border-[#d6dae1]">
                                        <div className="flex flex-col justify-start items-start w-[660px] h-[111px] absolute left-3 top-[11.63px]">
                                            <div className="flex justify-start items-start self-stretch flex-grow relative gap-4">
                                                <p className="self-stretch flex-grow w-[660px] h-[97.25px] text-sm text-left text-[#515b6e]">
                                                    Leave a message
                                                </p>
                                            </div>
                                            <div className="flex-grow-0 flex-shrink-0 w-[647px] h-[13.75px] relative">
                                                <div className="absolute left-[618.83px] top-[-0.56px]" />
                                                <div className="flex flex-col justify-start items-start w-3.5 h-3.5 absolute left-[633px] top-0 gap-2.5 p-[3px]">
                                                    <svg
                                                        width={11}
                                                        height={11}
                                                        viewBox="0 0 11 11"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="flex-grow-0 flex-shrink-0"
                                                        preserveAspectRatio="none"
                                                    >
                                                        <path
                                                            d="M1 7.77706L7.70757 1.0695M4.45621 9.40333L9.33444 4.52511"
                                                            stroke="#ADB5C3"
                                                            stroke-width={2}
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-52 h-12 overflow-hidden px-10 py-2.5 rounded-md bg-[#554adf]"
                        style={{ boxShadow: "0px 1px 1px 0 rgba(0,0,0,0.08)" }}
                    >
                        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
                            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">
                                Send Message
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
