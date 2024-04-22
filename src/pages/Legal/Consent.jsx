import { Container } from "../../components/utils";
import Nav from "../../layouts/Nav";

function Consent() {
    return (
        <div>
            <Nav />
            <Container>
                <div className="bg-gray-50">
                    <div className="bg-white  sm:py-40">
                        <h1 className="mt-10 sm:mt-5  text-center font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
                            Electronic Signature, <br /> ACH Authorization
                        </h1>
                    </div>
                    <div className="flex  flex-col max-w-2xl items-center p-10 sm:pt-20 mx-auto">
                        Faremit Electronic Signature and ACH Payment Authorization Disclosure
                        Faremit is requesting your consent to use electronic signatures and ACH
                        payments for the following purposes:
                        <br />
                        <br />
                        To initiate payments from your bank account to Faremit. To initiate
                        withdrawals from your debit or credit card to Faremit.
                        <br />
                        <br /> You have the right to refuse to provide your consent to electronic
                        signatures and ACH payments.
                        <br />
                        <br /> However, if you do so, you may not be able to use Faremit's services.
                        You can withdraw your consent to electronic signatures and ACH payments at
                        any time by contacting Faremit customer service. <br />
                        <br /> By clicking below, you are giving your consent to Faremit to use
                        electronic signatures and ACH payments for the purposes described above.
                        <br />
                        <br />
                        Click here to consent to Faremit's use of electronic signatures and ACH
                        payments.
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

export default Consent;
