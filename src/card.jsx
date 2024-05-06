import React,{useState} from 'react';
import './card.css';

function Card({ data }) {
  /*
    1) we need to implement truncating and read more feature in company description
    2) In order to achieve this we use 'useState' hook of boolean variable
    3) showFullParagraph is a boolean variable. If it is true then we show everything else we restrict it to 125 words
    4) We had implemented a button which when gets clicked triggers toggleParagraph function which alters the boolean value in showFullParagraph using setShowFullParagraph function in useState hook
  */
  const [showFullParagraph, setShowFullParagraph] = useState(false);
  const toggleParagraph = () => {
    setShowFullParagraph(!showFullParagraph);
  };
  const truncateParagraph = (paragraph) => {
    if (paragraph.length <= 125) {
      return paragraph;
    }
    return `${paragraph.slice(0, 125)}...`;
  };
  /*
    1) According to the instruction given, if the value of an attribute is NULL then we need to omit out showing that attribute in our card
    2) we can achieve this by using a ternary operator.
    3) {data.logoUrl && (
          <img src={data.logoUrl} alt="Company Logo" />
        )}
    4) we use ternary operator as shown in above code. It first checks if value exists or not. If yes it renders image or whatever included there
  */
  return (
    <div className="card">
        <div className="cardOne">
          <div className="cardOne-innerOne">
              {data.logoUrl && (
                <img src={data.logoUrl} alt="Company Logo" />
              )}
          </div>
          <div className="cardOne-innerTwo">
              {data.companyName && (
                <h5>{data.companyName}</h5>
              )}
              {data.jobRole && (
                <p className="cardOne-innerTwo-JobRole">{data.jobRole} Engineer</p>
              )}
              {data.location && (
                <p className="cardOne-innerTwo-Location">{data.location}</p>
              )}
          </div>
        </div>
        <div className="cardTwo">
            <h5>About Company:</h5>
            <p>
              {data && data.jobDetailsFromCompany && (
                showFullParagraph ? data.jobDetailsFromCompany : truncateParagraph(data.jobDetailsFromCompany)
              )}
            </p>
            {data && data.jobDetailsFromCompany && (
              <p className="cardTwo-ReadMore">
              {data.jobDetailsFromCompany.length > 125 ? (
                <>
                {showFullParagraph ? data.jobDetailsFromCompany : truncateParagraph(data.jobDetailsFromCompany)}
                <button className="cardTwo-ReadMoreBtn" onClick={toggleParagraph}>
                  {showFullParagraph ? 'Read less' : 'Read more'}
                </button>
                </>
              ) : (
                data.jobDetailsFromCompany
              )}
              </p>
            )}
            {data.minExp && (
              <>
              <h5>Minimum Experience:</h5>
              <p className="cardOne-innerTwo-Location">{data.minExp} years</p>
              </>
            )}
            
        </div>
        <div className="applyBtnDiv">
            <button className="ApplyButton">⚡ Apply</button>
        </div>
    </div>
  );
}

export default Card;
