import BannerPage from '../../components/BannerPage';
import RecentCard from '../../components/Recent/RecentCard';
import BannerBlog from '../../assets/images/banner-about.jpg';
import './Blog.scss';

function Blog() {
    return (
        <div className="blog">
            <BannerPage name="Blog" title="Blog Grid - Our Blogs" img={BannerBlog} />
            <div className="blog-main">
                <div className=" recent container">
                    <RecentCard />
                </div>
            </div>
        </div>
    );
}

export default Blog;
