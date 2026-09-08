import React from 'react';

export default function PostStyle5({ imgUrl, title, subTitle, isHtml = false }) {
  return (
    <div className="cs_post cs_style_1 bg-white shadow-sm cs_mb_30">
      <img src={imgUrl} alt="Thumb" />
      <div className="cs_pl_40 cs_pr_40 cs_pt_40 cs_pb_40 cs_pl_lg_25 cs_pr_lg_25 cs_pt_lg_25 cs_pb_lg_25">
        {isHtml ? (
          <h1 className="cs_post_title cs_lh_base cs_fs_26 cs_fs_lg_18 cs_mb_20">
            {title}
          </h1>
        ) : (
          <h2 className="cs_post_title cs_lh_base cs_fs_26 cs_fs_lg_18 cs_mb_20">
            {title}
          </h2>
        )}
        {isHtml ? (
          <div className="cs_post_subtitle cs_blog_content" dangerouslySetInnerHTML={{ __html: subTitle }} />
        ) : (
          <div className="cs_post_subtitle">{subTitle}</div>
        )}
      </div>
    </div>
  );
}
