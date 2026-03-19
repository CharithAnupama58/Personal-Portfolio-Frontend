import useReveal      from '@/hooks/useReveal'
import SectionHeader  from '@/components/UI/SectionHeader'
import BlogCard       from './BlogCard'
import { blogPosts }  from '@/data/portfolio'

export default function Blog() {
  const ref = useReveal()

  return (
    <section id="blog" ref={ref} className="py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 relative z-10">
      <div className="max-w-[1300px] mx-auto">
        <SectionHeader num="// 04" title="Blog" highlight="Posts" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} delay={i} />
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <button
            className="btn-secondary font-mono text-[0.72rem] sm:text-[0.75rem] w-full sm:w-auto"
            onClick={e => { e.target.textContent = '// no more posts yet'; e.target.disabled = true }}
          >
            load_more_posts()
          </button>
        </div>
      </div>
    </section>
  )
}