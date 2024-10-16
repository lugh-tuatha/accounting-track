import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="pt-4 flex items-center justify-center">
            <SignIn />
        </div>
    )
}