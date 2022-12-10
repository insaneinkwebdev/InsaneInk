import poster from "../../../images/index/coverphoto.png"

function Cover(){
    return(
        <>
            <section className="coverSec about" aria-label="Cover Screen">
                <h2>About Our Company</h2>
                <div class="coverVidCover">
                    <video controls="true" playsInline="true" autoPlay="true" loop="true" poster={poster} className="coverVid">
                        <source src={require("../../../videos/2020-2021/2022Commercial.mp4")} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </>
    );
}

export default Cover;