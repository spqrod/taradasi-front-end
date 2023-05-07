import "../styles/blog.css";

function Blog() {
    return (
        <section>
            <h1>Our Blog</h1>
            <p className="headline">Read our latest tips and tricks on how to run a dental practice</p>
            <div id="blogPostsContainer">
                <div className="blogPost">
                    <h2>Types of Dental Equipment</h2>
                    <p>
                        Whether for setting up a new practice or upgrading the existing one, we need a lot of dental tools. From treating patients, to the sterilization system, dentistry is all about numerous types of dental equipment. It is important to know about the latest available tools that can help us to meet patient treatment needs. With these latest dental supplies, and technologies we can improve our services and get better results. 
                    </p>
                </div>
                <div className="blogPost">
                    <h2>Top 10 tips for new dentists</h2>
                    <p>
                        Starting our journey as new dentists, we face many challenges and these dental tips can help to plan better for a successful rewarding career. To start your dental business we need some plans and strategies that can help us perform better. By following these strategies we can achieve success faster. 
                    </p>
                </div>
                <div className="blogPost">
                    <h2>Dental Ergonomics</h2>
                    <p>
                        Dentists have a physically and mentally demanding job - they relieve pain, provide comfort and distribute lovely smiles. Each day dentists treat thousands of patients throughout the world.  While they are busy bringing smiles to the faces of their patients, they often neglect one thing: their personal health and care. 
                    </p>
                </div>
                <div className="blogPost">
                    <h2>How to choose the best dental chair?</h2>
                    <p>
                        Modern dental chairs come with many inbuilt technologies that can influence the efficiency of your work and the patient comfort. When you start your dental business considering some of these important factors while choosing the right chair can enhance your ergonomics, leading to successful dental career. 
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Blog;