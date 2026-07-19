import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

const withMDX = createMDX({
  options: {
    // Frontmatter is parsed separately via gray-matter (see src/lib/case-studies.ts);
    // this plugin just keeps the raw `---` YAML block out of the rendered MDX output.
    // Passed as a string (not imported) since Turbopack can't serialize JS plugin functions.
    remarkPlugins: ["remark-frontmatter"],
  },
});

export default withMDX(nextConfig);
