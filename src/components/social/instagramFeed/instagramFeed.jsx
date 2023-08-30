import { useEffect, useState } from "react";
import instagramData from "@/data/instagram.json";
import { BsCameraVideoFill } from "react-icons/bs";

import "./instagramFeed.css";

export default function InstagramFeed() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setData(instagramData);
    setLoading(false);
  }, []);

  //   const posts = data?.data?.user?.edge_owner_to_timeline_media?.edges.map(
  //     (edge) => ({
  //       id: edge.node.id,
  //       url: `https://instagram.com/p/${edge.node.shortcode}`,
  //       thumbnail: edge.node.thumbnail_src,
  //       caption: edge.node.edge_media_to_caption.edges[0].node.text,
  //       is_video: edge.node.is_video,
  //     })
  //   );

  const justify = {
    0: "mr-0",
    1: "margin-auto",
    2: "ml-0",
  };
  let counter = 0;

  return (
    <div className="flex flex-wrap justify-center items-center">
      {instagramData.map((data) => (
        <div
          className={`card p-2 ${counter > 5 ? "last-2" : ""}`}
          key={data.id}
        >
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            <div className="card-container rounded-lg transition-all">
              <img
                src={data.thumbnail}
                alt={data.caption}
                className={
                  "card-image-background rounded-lg sm:h-auto" +
                  justify[counter++ % 3]
                }
              />
              {data.is_video && (
                <div className="absolute top-2 right-2">
                  <BsCameraVideoFill className="text-white text-3xl" />
                </div>
              )}
              <div className="card-overlay absolute top-0 left-0 w-full h-full opacity-0 flex justify-center items-center p-4 overflow-ellipsis">
                <p className="text-sm">{data.caption.replace("\n", " ")}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
