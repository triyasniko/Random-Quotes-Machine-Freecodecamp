import { useQuotesApi } from '../utils/QuotesApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useBgImage } from '../utils/BgImage';

const Quotes = () => {
  const { QuotesData, getNewQuote } = useQuotesApi();
  // console.log(QuotesData);
  const { img } = useBgImage();

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", fontFamily:"Source Sans Pro, sans-serif", fontSize:"24px"}}>
      <div id="quote-box" className="bg-light p-5" style={{ maxWidth: "80%"}}>
        <p id="text">{QuotesData.quote}</p>
        <p id="author" style={{ fontWeight:"300", fontSize:"16px" }}>-{QuotesData.author}</p>
        <div className="button-container d-flex flex-column justify-content-center mt-2">
          <button className="btn btn-primary" id="new-quote" onClick={getNewQuote}>Generate Quotes</button>
          <a className="btn" id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${QuotesData.quote}" - ${QuotesData.author}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
