"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function PostSlider({ posts }: any) {
  return (
    <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {posts.map((post: any) => (
          <SwiperSlide key={post.id}>
            
            {/* GRADIENT BORDER CARD */}
            <div className="p-[2px] rounded-2xl bg-gradient-to-r from-orange-500 via-pink-400 to-pink-200 hover:scale-[1.02] transition">

              {/* INNER CARD */}
<div className="bg-white rounded-2xl overflow-hidden outline-none ring-0 focus:outline-none focus:ring-0">
             
                {/* IMAGE */}
                {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                  <img
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    className="w-full h-40 object-cover"
                  />
                )}

                <div className="p-4">
                  <h3
                    className="font-semibold text-lg mb-2"
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }}
                  />

                  <p
                    className="text-sm text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered,
                    }}
                  />
                </div>

              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}