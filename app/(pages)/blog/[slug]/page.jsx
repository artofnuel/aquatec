import { PortableText } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/app/sanity/client";
import Link from "next/link";
import { FiCopy } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import CopyLinkButton from "@/app/components/CopyLinkButton";
import Image from "next/image";
import { myPortableTextComponents } from "@/app/components/PortableTextStyles";
import {
  MotionSlideDown,
  MotionSlideUp,
} from "@/app/components/(motion)/MotionFile";
import BlogNewsletter from "../components/BlogNewsletter";

const POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export async function generateMetadata({ params, searchParams }, parent) {
  const slug = (await params).slug;

  // fetch post information
  const post = await client.fetch(POST_QUERY, { slug }, options);

  return {
    title: post.title + ` - Aquatec`,
    description: post.description,
    // metadataBase: new URL(""),
    alternates: {
      canonical: `/` + post.slug,
      languages: {
        "en-US": "/en-US",
      },
    },
  };
}

const BlogPostPage = async ({ params }) => {
  const { slug } = await params;

  const post = await client.fetch(POST_QUERY, { slug }, options);
  const postImageUrl = post.image ? urlFor(post?.image)?.url() : null;

  return (
    <main className="min-h-screen w-full overflow-hidden p-4">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-5">
        <MotionSlideDown speed={0.3}>
          <Link href="/blog" className="hover:underline">
            ← Back to posts
          </Link>
        </MotionSlideDown>
        <MotionSlideDown speed={0.6}>
          <div className="flex flex-col items-start xl:flex-row xl:items-start xl:justify-between">
            <div className="space-y-3">
              <h1 className="text-2xl font-bold xl:text-3xl">{post.title}</h1>
              <p className="text-[#828282]">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="text-primary flex gap-3">
              <CopyLinkButton />
              <a
                className="hover:bg-primary flex size-10 items-center justify-center rounded-lg border border-[#D0D5DD] transition-all duration-300 ease-in-out hover:text-white"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={23} />
              </a>
              <a
                className="hover:bg-primary flex size-10 items-center justify-center rounded-lg border border-[#D0D5DD] transition-all duration-300 ease-in-out hover:text-white"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={23} />
              </a>
              <a
                className="hover:bg-primary flex size-10 items-center justify-center rounded-lg border border-[#D0D5DD] transition-all duration-300 ease-in-out hover:text-white"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter size={23} />
              </a>
            </div>
          </div>
        </MotionSlideDown>

        <MotionSlideUp speed={0.6}>
          <div className="mx-auto h-[500px] w-full max-w-7xl">
            <Image
              src={postImageUrl}
              alt={post.image.alt}
              width={1000}
              height={1000}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div className="mx-auto max-w-5xl">
            <p className="border-b border-[#EAECF0] py-2">{post.description}</p>
            <div className="prose my-10">
              {Array.isArray(post.body) && (
                <PortableText
                  value={post.body}
                  components={myPortableTextComponents}
                />
              )}
            </div>

            <div className="bg-bkg2 my-5 flex h-auto w-full flex-col items-center justify-center gap-5 rounded-2xl p-5 xl:h-[145px] xl:flex-row">
              <p className="text-primary flex w-full flex-col text-2xl xl:w-1/3">
                Join our Newsletter{" "}
                <span className="text-text2 text-base">
                  Subscribe to our newsletter to get the latest blog drops
                  straight to your inbox!
                </span>
              </p>
              <BlogNewsletter />
            </div>
          </div>
        </MotionSlideUp>
      </section>
    </main>
  );
};

export default BlogPostPage;
