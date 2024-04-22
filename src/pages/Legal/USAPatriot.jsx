import { Container } from "../../components/utils";
import Nav from "../../layouts/Nav";

function USAPatriot() {
    return (
        <div>
            <Nav />
            <Container>
                <div className="bg-gray-50">
                    <div className="bg-white py-20 sm:py-40">
                        <h1 className="mt-10 sm:mt-5  text-center font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
                            USA Patriot Act Disclosure
                        </h1>
                    </div>
                    <div className="flex  flex-col max-w-2xl items-center  sm:pt-20 mx-auto">
                        Faremit is committed to protecting your privacy. However, we are required by
                        law to collect certain information about our customers, including your name,
                        address, and email address.
                        <br />
                        <br />
                        We may also collect information about your financial transactions. This
                        information may be shared with law enforcement agencies if they have a
                        warrant or other legal justification.
                        <br />
                        <br />
                        We may also share this information with other third parties, such as payment
                        processors and fraud prevention services.
                        <br />
                        <br />
                        By signing up for Faremit, you consent to the collection and sharing of your
                        information as described above. You also agree to abide by the terms of our
                        Privacy Policy.
                        <br />
                        <br />
                        <div className="mt-10 w-full border-t border-gray-200 pt-10 text-center">
                            <p className="text-gray-500">1 / sep / 2023</p>
                        </div>
                    </div>
                </div>
                <h1 className="text-center pt-32 text-sm w-1/2 mx-auto leading-6 prose lg:prose-xl"></h1>
            </Container>
        </div>
    );
}

export default USAPatriot;
