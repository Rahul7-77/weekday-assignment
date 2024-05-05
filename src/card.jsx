import React,{useState} from 'react';
import './card.css';

function Card({ data }) {
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
  return (
    // <div className="card">
    //   <div className="cardImageContainer">
    //     <img src={data.logoUrl} alt="Company Logo" />
    //   </div>
    //   <div className="cardDetails">
    //     <div>
    //       <h2>{data.companyName}</h2>
    //       <p>Role: {data.jobRole}</p>
    //       <p>Location: {data.location}</p>
    //     </div>
    //   </div>
    //     <div className="bottomDetails">
    //       <p>{data.jdLink}</p>
    //       {/* Render other fields as needed */}
    //       <p>{data.jdUid}</p>
    //       <p>{data.jobDetailsFromCompany}</p>
    //       {/* <p>{data.logoUrl}</p> */}
    //       <p>{data.maxExp}</p>
    //       <p>{data.maxJdSalary}</p>
    //       <p>{data.minExp}</p>
    //       <p>{data.minJdSalary}</p>
    //       <p>{data.salaryCurrencyCode}</p>
    //     </div>
    //   </div>
    // </div>
    <div className="card">
        <div className="cardOne">
          <div className="cardOne-innerOne">
              <img src={data.logoUrl} alt="Company Logo" />
          </div>
          <div className="cardOne-innerTwo">
              <h5>{data.companyName}</h5>
              <p className="cardOne-innerTwo-JobRole">{data.jobRole} Engineer</p>
              <p className="cardOne-innerTwo-Location">{data.location}</p>
          </div>
        </div>
        <div className="cardTwo">
            <h5>About Company:</h5>
            {/* <p>{data.jobDetailsFromCompany}</p> */}
            <p>
              {data && data.jobDetailsFromCompany && (
                showFullParagraph ? data.jobDetailsFromCompany : truncateParagraph(data.jobDetailsFromCompany)
              )}
            </p>
            {/* <p>{showFullParagraph ? data.jobDetailsFromCompany : truncateParagraph(data.jobDetailsFromCompany)}</p> */}
              {/* Render "Read more" button if paragraph length exceeds 125 characters */}
              {/* {data.jobDetailsFromCompany.length > 125 && (
                <button onClick={toggleParagraph}>
                  {showFullParagraph ? 'Read less' : 'Read more'}
                </button>
              )} */}
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
            <h5>Minimum Experience:</h5>
            {/* <p className="cardTwo-MinExp">{data.minExp} years</p> */}
            <p className="cardTwo-MinExp">{data.minExp !== null ? `${data.minExp} years` : '0 years'}</p>
        </div>
        <div className="applyBtnDiv">
            <button className="ApplyButton">⚡ Apply</button>
        </div>
    </div>
  );
}

export default Card;
