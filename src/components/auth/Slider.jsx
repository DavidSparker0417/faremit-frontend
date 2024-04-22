import React, { useEffect, useState } from "react";

function AuthSlider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ["/images/auth/side.png", "/images/auth/side2.png"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 5 seconds (5000 milliseconds)

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex  justify-between  relative flex-col     max-h-[816px] max-md:mt-10 max-md:max-w-full">
                <div>
                    {" "}
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4405036bf60905f11bcbdd90f0e96de1f2efcde33133b79957099b43e5009cb?apiKey=786e42c6526d4ad4bad3df542e370598&"
                        className={`object-cover z-50 absolute inset-0 size-full  transition-opacity duration-1000`}
                        alt=""
                    />{" "}
                    {images.map((src, index) => (
                        <img
                            key={index}
                            loading="lazy"
                            src={src}
                            className={`object-cover h-max absolute inset-0   ${
                                index === currentImageIndex ? "opacity-100" : "opacity-0"
                            } transition-opacity duration-1000`}
                            alt=""
                        />
                    ))}
                </div>
                <div className="flex mt-52 md:mt-0 overflow-hidden relative flex-col px-8 py-10 w-full min-h-[816px] max-md:px-5 max-md:max-w-full">
                    <div className="flex relative flex-col justify-between p-4 mt-96 bg-[#f6e2f6] rounded-xl backdrop-blur-lg max-md:mt-10 max-md:max-w-full">
                        <h2 className="text-5xl font-semibold text-slate-900 max-md:max-w-full">
                            Secure Remittances, Seamless Transfers
                        </h2>
                        <p className="mt-4 text-xl font-medium tracking-wider leading-10 text-primary max-md:max-w-full">
                            At <span className="font-semibold text-primary">Faremit</span>, we
                            understand that your money's journey is not just about reaching its
                            destination; it's about contributing to the well-being and success of
                            those who matter most to you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthSlider;
