import poster from "../../../images/about/poster.jpg"

function Cover(){
    return(
        <>
            <section className="coverSec about" aria-label="Cover Screen">
                <h2>About Our Company</h2>
                <div class="coverVidCover">
                    <video controls playsInline autoPlay loop poster={poster} className="coverVid">
                        <source src={require("../../../videos/2020-2021/2022Commercial.mp4")} type="video/ogg"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </>
    );
}

export default Cover;