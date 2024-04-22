import * as React from "react";
import Logo from "../components/Logo/Logo";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="flex overflow-hidden bg-primary container mx-auto rounded-lg relative flex-col justify-center items-center px-16 py-20 font-semibold min-h-[320px] max-md:px-5">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col mt-2 max-w-full w-[601px]">
                    <div className="text-3xl text-center text-secondary max-md:max-w-full">
                        Experience swift, secure, and cost-effective
                        <br /> international transactions.{" "}
                    </div>
                    <Link
                        className="justify-center self-center px-4 py-2.5 mt-10 text-sm leading-6 text-orange-600 bg-white rounded-md shadow-sm max-md:px-5 max-md:mt-10"
                        to="/login"
                    >
                        Sign Up Now
                    </Link>
                </div>
            </div>
            <div className="flex flex-col justify-center bg-white">
                <div className="flex flex-col pt-20 w-full bg-neutral-100 max-md:max-w-full">
                    <div className="flex gap-5 justify-between items-start self-center px-5 w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
                        <div className="flex flex-col items-center my-auto">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee122a10a505c06276d11bcf3fd6956d1403c1e8a48279c5e5438e8dcb62a65d?"
                                className="aspect-[3.33] w-[167px]"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/54fe01d171eb68d123d93c643ce2ccbb0d32e2688865a4239d2c4c1959ca2ea4?"
                                className="mt-5 aspect-[3.33] w-[167px]"
                            />
                        </div>
                        <div className="flex flex-col self-end mt-6 text-base text-slate-700">
                            <div className="font-semibold leading-[150%] text-slate-900">
                                Company
                            </div>
                            <div className="mt-3">About us</div>
                            <div className="mt-3">Careers</div>
                            <div className="mt-3">FAQ</div>
                            <div className="mt-3 text-base text-slate-700">Contact us</div>
                        </div>
                        <div className="flex flex-col self-end mt-6 text-base text-slate-700">
                            <div className="font-semibold leading-[150%] text-slate-900">Legal</div>
                            <div className="mt-3">Terms & privacy</div>
                            <div className="mt-3">Patriot Act</div>
                            <div className="mt-3">Consent</div>
                            <div className="mt-3 text-base text-slate-700">Contact us</div>
                        </div>

                        <div className="flex flex-col self-start text-base text-slate-900">
                            <div className="flex gap-5 justify-between px-px font-semibold whitespace-nowrap leading-[150%]">
                                <div className="my-auto">Legal</div>
                            </div>
                            <div className="mt-5 leading-6 text-slate-700">
                                128 City Road, London, <br />
                                United Kingdom
                            </div>
                            <div className="self-start mt-5 text-sm leading-5">
                                +1 (234) 567-890
                            </div>
                            <div className="self-start mt-5 text-sm leading-5">
                                info@faremit.com
                            </div>
                            <div className="mt-3 text-base text-slate-700">Contact us</div>
                            <div className="shrink-0 h-px bg-violet-300 border border-violet-300 border-solid w-[109px]" />
                        </div>
                    </div>
                    <div className="flex overflow-hidden relative flex-col items-end px-16 pt-1 pb-20 mt-1 w-full min-h-[243px] max-md:px-5 max-md:max-w-full">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/804ddf382bee41c8fca656872d60aeb57b6793eaa339a4afcbd92c03ee2d74bd?"
                            className="object-cover absolute inset-0 size-full"
                        />
                        <div className="flex relative flex-col mr-14 max-w-full w-[881px] max-md:mr-2.5">
                            <div className="shrink-0 mt-7 h-px border border-solid bg-zinc-300 border-zinc-300 max-md:max-w-full" />
                            <div className="flex gap-5 items-center mt-6 text-sm leading-5 text-slate-900 max-md:flex-wrap max-md:max-w-full">
                                <Logo />

                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2f5e8d2a3c70a6d817b02f8b60150a15e7885cb8ffbae65309c4cdb8af622a3?"
                                    className="shrink-0 self-stretch my-auto max-w-full aspect-[5] w-[100px]"
                                />
                                <div className="flex-auto self-stretch my-auto">© Faremit 2022</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{" "}
        </>
    );
}
export default Footer;
