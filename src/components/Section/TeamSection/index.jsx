import React from 'react';
import Team from '../../Team';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';

export default function TeamSection({ data, sectionTitle, sectionTitleUp }) {
  return (
    <div className="container">
      {sectionTitle && (
        <SectionHeadingStyle2
          sectionTitle={sectionTitle}
          sectionTitleUp={sectionTitleUp}
        />
      )}

      <div className="row g-4">
        {data?.map((item, index) => (
          <div className="col-lg-6 col-xl-4" key={index}>
            <Team
              key={index}
              imgUrl={item.imgUrl}
              name={item.name}
              designation={item.designation}
              srcUrl={item.srcUrl}
              experience={item.experience}
              initials={item.initials}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
