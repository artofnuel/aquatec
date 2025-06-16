import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/app/sanity/client";

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export const myPortableTextComponents = {
  block: {
    // Customizing common block types
    h1: ({ children }) => (
      <h1 itemProp="heading" className="my-4 text-3xl font-semibold">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 itemProp="heading" className="my-4 text-left text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 itemProp="heading" className="my-4 text-left text-2xl">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 itemProp="heading" className="my-4 text-left text-xl">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-primary text-primary my-10 border-l pl-3 text-2xl xl:text-3xl">
        {children}
      </blockquote>
    ),
    basic: ({ children }) => (
      <p itemProp="article" className="text-justify text-base xl:text-lg">
        {children}
      </p>
    ),
  },
  list: {
    // Customizing common list types
    bullet: ({ children }) => (
      <ul itemProp="list" className="list-inside list-disc space-y-3 p-5">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol itemProp="list" className="list-inside list-decimal space-y-3 p-5">
        {children}
      </ol>
    ),
  },
  types: {
    image: ({ value }) => {
      const imageUrl = value?.asset?._ref ? urlFor(value).url() : "";
      return imageUrl ? (
        <img
          src={imageUrl}
          alt={value.alt || "Blog image"}
          className="my-4 rounded-lg"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ) : null;
    },
  },
};
