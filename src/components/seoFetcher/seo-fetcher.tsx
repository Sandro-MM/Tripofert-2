'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function SeoUpdater() {
    const pathname = usePathname();

    useEffect(() => {
        async function updateSeo() {
            const response = await fetch(`/api/seo?route=${encodeURIComponent(pathname)}`);
            const data = await response.json();

            if (data?.title) {
                document.title = data.title;

                let metaDesc = document.querySelector("meta[name='description']");
                if (!metaDesc) {
                    metaDesc = document.createElement('meta');
                    metaDesc.setAttribute('name', 'description');
                    document.head.appendChild(metaDesc);
                }

                metaDesc.setAttribute('content', data.description || '');
            }
        }

        updateSeo();
    }, [pathname]);

    return null;
}
