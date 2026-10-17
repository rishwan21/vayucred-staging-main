import type { MetadataRoute } from "next";

import { basePath } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vayucred",
    short_name: "Vayucred",
    description: "From real projects to carbon markets.",
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#F7F1E4",
    theme_color: "#F7F1E4",
    icons: [
      {
        src: `${basePath}/icon.svg`,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
