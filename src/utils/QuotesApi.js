import { useState, useEffect } from 'react';

export const useQuotesApi = () => {
  const [QuotesData, setQuotesData] = useState('');
  
  const getNewQuote = async () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const quotesUrl="https://api.api-ninjas.com/v1/quotes?category=";

    await fetch(`${proxy}${quotesUrl}`, {
      headers: {
        'X-Api-Key': 'CmjONnTDtCD8Yscc1EbkOw==XMhTc9GOs3oC7mjb',
      },
    })
    .then((res) => res.json())
    .then((data) => setQuotesData(data[0]));
  };

  useEffect(() => {
    getNewQuote();
  }, []);

  return { QuotesData, getNewQuote };
};
