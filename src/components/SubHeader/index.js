import React from "react";
import { Container } from "react-bootstrap";

const SubHeader = () => {
  return (
    <Container className="content">
      <div className="subHeaderTitleBlock">
        <text className="subHeaderText">
          Discover one-of-a-kind items from independent creators
        </text>
      </div>

      <div className="subHeaderSubCategoriesBlock"></div>
      <div className="headerBlock"></div>
      <div className="subHeadeCategoriesBlock">
        <ul className="subHeader-categories">
          <li className="cat-section-block">
            <div className="categoriesImgBlock">
              <img
                src="https://i.etsystatic.com/30213933/c/1510/1510/342/335/il/ea97e0/3755997843/il_300x300.3755997843_9z68.jpg"
                width="100%"
              />
            </div>
            <div className="catgoriesTitle">
              <text>wall Art</text>
            </div>
          </li>

          <li className="cat-section-block">
            <div className="categoriesImgBlock">
              <img
                src="https://i.etsystatic.com/21433228/r/il/3967dc/3554273629/il_300x300.3554273629_scc8.jpg"
                width="100%"
              />
            </div>
            <div className="catgoriesTitle">
              <text>Home & Living</text>
            </div>
          </li>

          <li className="cat-section-block">
            <div className="categoriesImgBlock">
              <img
                src="https://i.etsystatic.com/31727194/c/1080/1080/0/0/…/0ecb18/3774486627/il_300x300.3774486627_7y0n.jpg"
                width="100%"
              />
            </div>
            <div className="catgoriesTitle">
              <text>Clothing</text>
            </div>
          </li>

          <li className="cat-section-block">
            <div className="categoriesImgBlock">
              <img
                src="	https://i.etsystatic.com/15411220/c/1056/1056/93/5…/c65b55/1706780060/il_300x300.1706780060_igto.jpg"
                width="100%"
              />
            </div>
            <div className="catgoriesTitle">
              <text>Jewellery</text>
            </div>
          </li>

          <li className="cat-section-block">
            <div className="categoriesImgBlock">
              <img
                src="	https://i.etsystatic.com/10372432/r/il/1b959f/2959473205/il_300x300.2959473205_n35v.jpg"
                width="100%"
              />
            </div>
            <div className="catgoriesTitle">
              <text>Wedding</text>
            </div>
          </li>

          <li className="cat-section-block">
            <div className="categoriesImgBlock">
              <img
                src="	https://i.etsystatic.com/27502657/r/il/34ea55/2915113681/il_300x300.2915113681_jqpd.jpg"
                width="100%"
              />
            </div>
            <div className="catgoriesTitle">
              <text>on Sale</text>
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default SubHeader;
