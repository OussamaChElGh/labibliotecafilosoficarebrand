import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import DownloadBlock from '@/components/mdx/DownloadBlock';

// Configure the components available to MDX
const components = {
  DownloadBlock,
};

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content');
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  const files = fs.readdirSync(contentDir);
  const slugs = files
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx?$/, ''),
    }));
  return slugs;
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const contentDir = path.join(process.cwd(), 'content');
  
  let filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(contentDir, `${slug}.md`);
  }

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);

  return (
    <article className="container" style={{ paddingTop: '120px' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}>{data.title}</h1>
        {data.date && <p style={{ color: 'var(--text-secondary)' }}>{data.date}</p>}
      </header>
      
      <div className="prose">
        <MDXRemote source={content} components={components} />
      </div>
    </article>
  );
}
