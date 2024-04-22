import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useId } from "react";
import { Link } from "react-router-dom";

function GridPattern({ width, height, x, y, squares, ...props }) {
    let patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
    );
}
function CardPattern({ mouseX, mouseY, ...gridProps }) {
    let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div className="pointer-events-none">
            <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                <GridPattern
                    width={72}
                    height={56}
                    x="50%"
                    className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5"
                    {...gridProps}
                />
            </div>
            <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#e4dffb] to-[#d7ede4] opacity-0 transition duration-300 group-hover:opacity-100"
                style={style}
            />
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                style={style}
            >
                <GridPattern
                    width={72}
                    height={56}
                    x="50%"
                    className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70"
                    {...gridProps}
                />
            </motion.div>
        </div>
    );
}
export default function CategoryCard({ href, name, description, icon, pattern }) {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            key={href}
            onMouseMove={onMouseMove}
            className="group relative flex rounded-2xl bg-gray-50 transition-shadow hover:shadow-md hover:shadow-gray-900/5"
        >
            <CardPattern {...pattern} mouseX={mouseX} mouseY={mouseY} />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-200 group-hover:ring-gray-900/10" />
            <div className="relative rounded-2xl p-6 pt-16">
                {icon}
                <h3 className="mt-4 font-semibold leading-7 text-gray-900">
                    <Link to={href}>
                        <span className="absolute inset-0 rounded-2xl" />
                        {name}
                    </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
}

const moneyTransferSteps = [
    {
        date: "Create an account",
        title: "simple. sign up. And keep things secure "
    },
    {
        date: "verify your details",
        title: "better security, we’ll verify who you are"
    },
    {
        date: "Start your transfer ",
        title: "Select destination, method, and amount to view fees and rates upfront"
    },
    {
        date: "Enter receiver’s detail",
        title: "Transfer in Progress"
    },
    {
        date: "Pay for your transfer",
        title: "Select payment method: bank deposit or card."
    }
];
export const MoneyTransferProcess = () => {
    return (
        <div className="space-y-5 pt-20  border border-b-#b8a1b8-300 pb-10 md:space-y-10">
            <div className="mx-auto max-w-lg text-center sm:max-w-xl">
                <h2 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
                    We Send money
                    <span className="bg-gradient-to-br from-[#FE956ECC] to-purple-600 bg-clip-text pr-2 italic text-transparent">
                        fast
                    </span>
                </h2>
                <p className="mt-5 text-gray-600 sm:text-lg">
                    Check out our changelog to see what's new on Dub.
                </p>
            </div>
            <ul className="mx-5 max-w-4xl md:mx-auto md:translate-x-28">
                {moneyTransferSteps.map((step, index) => (
                    <li key={index}>
                        <DesktopChangelogEntry step={step} />
                        <div className="sm:hidden">
                            {" "}
                            <MobileChangelogEntry step={step} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
const DesktopChangelogEntry = ({ step }) => (
    <div className="group hidden grid-cols-5 items-center md:grid">
        <dl>
            <dd className="text-base font-medium text-gray-400 transition-colors group-hover:text-gray-700">
                <time dateTime={step.date}>{step.date}</time>
            </dd>
        </dl>
        <div className="col-span-4 flex items-center">
            <div className="relative ml-4">
                <div className="h-16 border-l border-gray-400 pr-8" />
                <div className="absolute -left-1 top-[1.6875rem] h-2.5 w-2.5 rounded-full bg-gray-400 transition-colors group-hover:bg-gray-700" />
            </div>
            <h3 className="text-2xl  truncate font-medium tracking-tight w-max text-gray-500 transition-colors group-hover:text-black">
                {step.title}
            </h3>
        </div>
    </div>
);

const MobileChangelogEntry = ({ step }) => (
    <div className="flex items-center cursor-pointer  space-x-4 rounded-lg active:bg-gray-100 sm:hidden">
        <div className="relative">
            <div className="h-16 border-l border-gray-400" />
            <div className="absolute -left-1 top-5 h-2.5 w-2.5 rounded-full bg-gray-400" />
        </div>
        <div>
            <dl>
                <dd className="text-sm font-medium text-gray-400">
                    <time dateTime={step.date}>{step.date}</time>
                </dd>
            </dl>
            <h3 className="text-lg font-medium tracking-tight text-gray-700">{step.title}</h3>
        </div>
    </div>
);
