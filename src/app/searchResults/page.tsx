import ThemeSwitch from "@/components/themeSwitchButton";
import SearchFilter from "@/components/searchPageComponents/searchFilter";


export default function Page() {
    return (
        <main className="relative w-full min-h-screen">
            <ThemeSwitch />
            <SearchFilter/>
        </main>
    );
}
