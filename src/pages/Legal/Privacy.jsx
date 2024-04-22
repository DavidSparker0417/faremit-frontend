import { Container } from "../../components/utils";
import Nav from "../../layouts/Nav";

function Privacy() {
    return (
        <div>
            <Nav />
            <Container>
                <div className="bg-gray-50">
                    <div className="bg-white py-20 sm:py-40">
                        <h1 className="mt-10 sm:mt-5 text-center font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
                            Privacy Policy
                        </h1>
                    </div>
                    <div className="flex  flex-col max-w-2xl items-center  sm:pt-20 mx-auto">
                        Data Collection and Use
                        <br />
                        <br />
                        Faremit LLC and its subsidiaries and affiliated companies may collect, use,
                        and share your Personal Information in various ways as outlined below:
                        <br />
                        <br />
                        1. Sign Up <br /> <br />
                        When you sign up for a Faremit account, we collect the following
                        information: Your name Email address Phone number Date of birth Financial
                        information, including your bank account number and routing number.
                        <br /> <br />
                        2. Deposit Funds <br /> <br />
                        When you deposit funds into your Faremit account, we collect your bank
                        account information.
                        <br />
                        <br />
                        3. Send Remittance <br /> <br /> When you send remittance through Faremit,
                        we collect the following recipient information: Recipient's name Address
                        Phone number Amount of money sent.
                        <br />
                        <br />
                        Purposes of Data Collection <br /> <br /> We may use your Personal
                        Information for the following purposes: To provide you with our services. To
                        process your transactions. To prevent fraud and other illegal activities. To
                        improve our products and services. To send you marketing communications.
                        <br />
                        <br />
                        Sharing of Personal Information <br /> <br /> We may share your Personal
                        Information with the following third parties: Our service providers who
                        assist us in delivering our services. Financial institutions that help
                        facilitate your transactions. Government agencies as required by law. We do
                        not sell your Personal Information to third parties for their marketing
                        purposes without your consent.
                        <br />
                        <br />
                        Your Rights <br /> <br />
                        You have certain rights regarding your Personal Information, including:
                        Access to your data. The ability to correct, delete, or restrict its
                        processing. The right to object to processing and withdraw your consent. To
                        exercise these rights, please contact us at legal@faremit.com.
                        <br />
                        <br />
                        Data Retention <br /> <br /> We will retain your Personal Information for as
                        long as necessary to provide our services and for legitimate business
                        purposes.
                        <br />
                        <br />
                        Security Measures <br /> <br />
                        We take the security of your Personal Information seriously. We have
                        implemented appropriate technical and organizational measures to protect it
                        from unauthorized access, use, disclosure, alteration, or destruction.
                        <br />
                        <br />
                        Questions <br /> <br /> If you have any questions about our privacy policy,
                        please contact us at legal@faremit.com.
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

export default Privacy;
