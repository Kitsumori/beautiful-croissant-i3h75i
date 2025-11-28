import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {
    const client = createClient();

    const page = await client.getSingle("settings");
    return (
        <footer>
            <Link href="/">{page.data.site_title}</Link>
            <p>&copy; {new Date().getFullYear()} {page.data.site_title}. All rights reserved.</p>
            {page.data.navigation.map(({link, label}) => (
                <li key={label}>
                    <PrismicNextLink field={link}>{label}</PrismicNextLink>
                </li>
            ))}
        </footer>
    )
}