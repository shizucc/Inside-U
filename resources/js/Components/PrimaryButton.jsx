export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `w-full items-center px-4 py-2 bg-[#98A8F8] border border-transparent rounded-2xl font-medium text-lg text-white tracking-widest hover:bg-[#737EDE] focus:bg-[#737EDE] active:bg-[#737EDE] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-300 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
