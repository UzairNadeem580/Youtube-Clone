import React from "react";
import "./Recomended.css";
import VideoCard from "./VideoCard";
import pic from "./images/69.jpg";
import pic1 from "./images/300.jpg";
import pic2 from "./images/hsja.jpg";
import pic3 from "./images/images.jpg";
import pic4 from "./images/maxresdefault.jpg";
import pic5 from "./images/maxresdefault (1).jpg";
import pic6 from "./images/1.jpg";
import pic7 from "./images/2.jpg";
import pic8 from "./images/3.jpg";
import pic9 from "./images/4.jpg";
import pic11 from "./images/5.jpg";
import pic12 from "./images/6.jpg";
import pic13 from "./images/7.jpg";
import pic14 from "./images/8.jpg";
import pic10 from "./images/10.jpg";
import logo from "./images/mr.jpg";
import logo1 from "./images/l1.jpg";
import logo2 from "./images/l2.png";
import logo3 from "./images/l3.png";
import logo4 from "./images/l4.png";
import logo5 from "./images/l5.png";
import logo6 from "./images/l6.jpg";
import logo7 from "./images/l7.png";
import logo8 from "./images/l8.jpg";
import logo9 from "./images/l9.png";
import logo10 from "./images/l10.png";
import logo11 from "./images/pew.png";
import pic15 from "./images/React.png";
import pic16 from "./images/New.jpg";

function Recomended() {
  return (
    <div className="recomended">
      <h2>Recommended</h2>
      <div className="recomended_videos">
        <VideoCard
          title="Top 10 Beautifull places on earth "
          views="3M views"
          timestamp="1 days ago"
          channel="Travelz"
          image={pic}
          channelImage={logo8}
        />

        <VideoCard
          title="Youtube Clone in React js "
          views="10M views"
          timestamp="3 days ago"
          channel="Uzair Codes"
          image={pic15}
          channelImage={logo1}
        />

        <VideoCard
          title="Best Thumbnails for Youtube video"
          views="200K views"
          timestamp="2 days ago"
          channel="Graphicz"
          image={pic2}
          channelImage={logo2}
        />
        <VideoCard
          title="Thumbnails for your video"
          views="700K views"
          timestamp="3 days ago"
          channel="Photoshop God"
          image={pic3}
          channelImage={logo3}
        />
        <VideoCard
          title="Thumbnails to get more views"
          views="3M views"
          timestamp="1 month ago"
          channel="Graphics Mentor"
          image={pic4}
          channelImage={logo4}
        />
        <VideoCard
          title="Become a Web Developer"
          views="2.3M views"
          timestamp="1 week ago"
          channel="Harry Programmer"
          image={pic16}
          channelImage={logo5}
        />
        <VideoCard
          title="Burger King Chicken Whooper"
          views="10M views"
          timestamp="1 Year ago"
          channel="Burger King"
          image={pic14}
          channelImage={logo7}
        />

        <VideoCard
          title="Imran Khan Speech"
          views="7.6M views"
          timestamp=" 1 month ago"
          channel="World News"
          image={pic13}
          channelImage={logo6}
        />

        <VideoCard
          title="4 hours of playing minecraft "
          views="1M views"
          timestamp="1 hour ago"
          channel="Pewdipie"
          image={pic12}
          channelImage={logo11}
        />

        <VideoCard
          title="1 Million dollars to poor people"
          views="70M views"
          timestamp="6 days ago"
          channel="Mr beast"
          image={pic11}
          channelImage={logo}
        />

        <VideoCard
          title="Messi Top 10 Goals for 2021"
          views="10M views"
          timestamp="1 Week ago"
          channel="FC Barcelona"
          image={pic10}
          channelImage={logo10}
        />

        <VideoCard
          title="Turkey hot balloon cappadocia"
          views="90K views"
          timestamp="16 hours ago"
          channel="Turkey Discovery"
          image={pic9}
          channelImage={logo9}
        />  

        <VideoCard
          title="Come Travel with us"
          views="2.3M views"
          timestamp="3 days ago"
          channel="Travelz"
          image={pic8}
          channelImage={logo8}
        />

        <VideoCard
          title="World Tallest Buildings"
          views="10K views"
          timestamp="19 hours ago"
          channel="Information hub"
          image={pic7}
          channelImage={logo4}
        />

        <VideoCard
          title="Best song Ever"
          views="13M views"
          timestamp="3 Weeks ago"
          channel="One Band"
          image={pic6}
          channelImage={logo2}
        />
      </div>
    </div>
  );
}

export default Recomended;
