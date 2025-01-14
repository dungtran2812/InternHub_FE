import { BlogAndReviewCard } from "@/components/BlogAndReviewCard"
import { MemberCard } from "@/components/MemberCard"

const AboutUsPage = () => {
    return (
        <div className='mt-20 mx-3'>
            <div className='text-center'>
                <div ></div>
                <div className='text-3xl'>Công ty của chúng tôi</div>
                <div>
                Xin chào thế giới
                </div>
            </div>
            <div className='mt-20 grid lg:grid-cols-2 grid-cols-1'>
                <div className='container px-24'>
                    <p className='text-center text-xl '>Chúng ta có thể làm gì?</p>
                    <p className='mt-5 text-sm'>Aenean sollicituin, lorem quis bibendum auctor nisi elit consequat ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctora ornare odio.</p>
                    <p className='mt-2 text-sm'>Aenean sollicituin, lorem quis bibendum auctor nisi elit consequat ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet maurisorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctora ornare odio.</p>
                    <p className='mt-2 text-sm'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis non nisi purus. Integer sit nostra, per inceptos himenaeos.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis non nisi purus. Integer sit nostra, per inceptos himenaeos.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <img width={600} src="data:image/jpeg;base64,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" alt="" />
                </div>
            </div>
            <div className='text-center mt-10'>
                <div >Our Company</div>
                <div className='text-3xl'>Meet our members</div>
                <div>
                    Hello world
                </div>
            </div>
            <div className="grid grid-cols-3 justify-items-center mt-10">
                <MemberCard name="Dao Hoai Phuong" position="CEO" />
                <MemberCard name="Dao Hoai Phuong" position="CEO" />
                <MemberCard name="Dao Hoai Phuong" position="CEO" />
            </div>
            <div className="grid grid-cols-3 mt-5 justify-items-center">
                <MemberCard name="Dao Hoai Phuong" position="CEO" />
                <MemberCard name="Dao Hoai Phuong" position="CEO" />
                <MemberCard name="Dao Hoai Phuong" position="CEO" />
            </div>
            <p className="mt-10 text-3xl font-bold text-blue-900 text-center">Blog and Reviews</p>
            <div className="overflow-x-auto mt-10">
                <div className="w-[1280px] flex gap-4">
                    <div className="grid grid-cols-4 gap-4 flex-shrink-0">
                        <BlogAndReviewCard
                            timeToRead={2}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet nisi lorem, non finibus turpis blandit at. Integer rhoncus libero diam. Etiam accumsan orci sed sem ullamcorper, at feugiat leo luctus. Ut tincidunt lectus magna."}
                            title={"Chiikawa Chiikawa"}
                            category={["GIF", "Tips"]} />
                        <BlogAndReviewCard
                            timeToRead={2}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet nisi lorem, non finibus turpis blandit at. Integer rhoncus libero diam. Etiam accumsan orci sed sem ullamcorper, at feugiat leo luctus. Ut tincidunt lectus magna."}
                            title={"Chiikawa Chiikawa"}
                            category={["GIF", "Tips"]} />
                             <BlogAndReviewCard
                            timeToRead={2}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet nisi lorem, non finibus turpis blandit at. Integer rhoncus libero diam. Etiam accumsan orci sed sem ullamcorper, at feugiat leo luctus. Ut tincidunt lectus magna."}
                            title={"Chiikawa Chiikawa"}
                            category={["GIF", "Tips"]} />
                             <BlogAndReviewCard
                            timeToRead={2}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet nisi lorem, non finibus turpis blandit at. Integer rhoncus libero diam. Etiam accumsan orci sed sem ullamcorper, at feugiat leo luctus. Ut tincidunt lectus magna."}
                            title={"Chiikawa Chiikawa"}
                            category={["GIF", "Tips"]} />
                    </div>
                    <div className="grid grid-cols-4 gap-4 flex-shrink-0">
                    <BlogAndReviewCard
                            timeToRead={2}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet nisi lorem, non finibus turpis blandit at. Integer rhoncus libero diam. Etiam accumsan orci sed sem ullamcorper, at feugiat leo luctus. Ut tincidunt lectus magna."}
                            title={"Chiikawa Chiikawa"}
                            category={["GIF", "Tips"]} />
                             <BlogAndReviewCard
                            timeToRead={2}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet nisi lorem, non finibus turpis blandit at. Integer rhoncus libero diam. Etiam accumsan orci sed sem ullamcorper, at feugiat leo luctus. Ut tincidunt lectus magna."}
                            title={"Chiikawa Chiikawa"}
                            category={["GIF", "Tips"]} />
                             <BlogAndReviewCard
                            timeToRead={2}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet nisi lorem, non finibus turpis blandit at. Integer rhoncus libero diam. Etiam accumsan orci sed sem ullamcorper, at feugiat leo luctus. Ut tincidunt lectus magna."}
                            title={"Chiikawa Chiikawa"}
                            category={["GIF", "Tips"]} />
                             <BlogAndReviewCard
                            timeToRead={2}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet nisi lorem, non finibus turpis blandit at. Integer rhoncus libero diam. Etiam accumsan orci sed sem ullamcorper, at feugiat leo luctus. Ut tincidunt lectus magna."}
                            title={"Chiikawa Chiikawa"}
                            category={["GIF", "Tips"]} />
                    </div>
                    <div className="grid grid-cols-4 gap-4 flex-shrink-0">
                    <BlogAndReviewCard
                            timeToRead={2}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet nisi lorem, non finibus turpis blandit at. Integer rhoncus libero diam. Etiam accumsan orci sed sem ullamcorper, at feugiat leo luctus. Ut tincidunt lectus magna."}
                            title={"Chiikawa Chiikawa"}
                            category={["GIF", "Tips"]} /> <BlogAndReviewCard
                            timeToRead={2}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet nisi lorem, non finibus turpis blandit at. Integer rhoncus libero diam. Etiam accumsan orci sed sem ullamcorper, at feugiat leo luctus. Ut tincidunt lectus magna."}
                            title={"Chiikawa Chiikawa"}
                            category={["GIF", "Tips"]} /> <BlogAndReviewCard
                            timeToRead={2}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet nisi lorem, non finibus turpis blandit at. Integer rhoncus libero diam. Etiam accumsan orci sed sem ullamcorper, at feugiat leo luctus. Ut tincidunt lectus magna."}
                            title={"Chiikawa Chiikawa"}
                            category={["GIF", "Tips"]} /> <BlogAndReviewCard
                            timeToRead={2}
                            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet nisi lorem, non finibus turpis blandit at. Integer rhoncus libero diam. Etiam accumsan orci sed sem ullamcorper, at feugiat leo luctus. Ut tincidunt lectus magna."}
                            title={"Chiikawa Chiikawa"}
                            category={["GIF", "Tips"]} />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default AboutUsPage
