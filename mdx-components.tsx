import type { MDXComponents } from "mdx/types";

const components = {
  h2: (props) => <h2 className="mt-16 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl" {...props} />,
  p: (props) => <p className="mt-6 text-lg leading-8 text-muted-foreground" {...props} />,
  ul: (props) => <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-muted-foreground" {...props} />,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents { return components; }
