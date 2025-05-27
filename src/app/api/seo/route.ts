import { supabase } from "@/directions-functions/supabaseClient";
import { NextResponse } from "next/server";

const routesList = [
    '/blogs/blogPage/ultimate_madrid_travel_guide/0',
    '/blogs/blogPage/ultimate_barcelona_travel_guide/1',
    '/blogs/blogPage/ultimate_lisbon_travel_guide/2',
    '/blogs/blogPage/ultimate_paris_travel_guide/3'
];

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const route = searchParams.get("route") || "/";
    const matchedRoute = routesList.includes(route) ? route : "default";

    const { data, error } = await supabase
        .from("seo_data")
        .select("*")
        .eq("for_route", matchedRoute)
        .single();

    if (error || !data) {
        return NextResponse.json({ title: "Tripofert", description: "Default description" });
    }

    return NextResponse.json(data);
}
