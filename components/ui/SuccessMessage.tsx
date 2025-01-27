
export default function SuccessMessage({ children }: { children: React.ReactNode }) {
    return (
        <p className="p-3 bg-green-600 text-white font-black text-center my-3">{children}</p>
    )
}
