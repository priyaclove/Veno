import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import path from 'path';
import fs from 'fs';

// Types
type Blog = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
};

// Load blog data (static JSON file)
const getBlogData = async (): Promise<Blog[]> => {
  const filePath = path.join(process.cwd(), 'src/data/publications.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blogs = await getBlogData();
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const blogs = await getBlogData();
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By <span className="font-medium">{blog.author}</span> | {new Date(blog.date).toDateString()}
      </p>

      <div className="mb-6">
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          className="rounded-lg w-full object-cover"
        />
      </div>

      <div className="prose prose-red prose-lg max-w-none">
        <p>{blog.excerpt}</p>
        <p>{blog.content}</p>
        {/* You can split content into paragraphs if needed */}
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {blog.tags.map((tag) => (
          <span key={tag} className="bg-red-100 text-red-700 px-3 py-1 text-sm rounded-full">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
