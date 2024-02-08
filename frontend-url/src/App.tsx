import React, { useState } from 'react';

const App = () => {
  const [links, setLinks] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(links);
    setShortUrl('');
  }

  let linkBox = null;

  if (shortUrl) {
    linkBox = (
      <>
        <div className="mt-3">
          <h4 className="my2">Your links look like this:</h4>
          <p><a href={shortUrl} className="link-underline-dark">{shortUrl}</a></p>
        </div>
      </>
    )
  }


  return (
    <div className="container">
      <h2 className="mt-5 mb-3">Shorten your link</h2>
      <form onSubmit={onSubmit} style={{maxWidth: '500px'}}>
      <div className='mb-3 input-group'>
          <label htmlFor='links' className='input-group-text'>
            Put your url
          </label>
          <input
            type='text'
            name='links'
            id='links'
            className='form-control'
            required
            value={links}
            onChange={(e) => setLinks(e.target.name)}
          />
        </div>
        <button className='btn btn-primary' type="submit">Shorten!</button>
      </form>
      {linkBox}
    </div>
  );
};

export default App;