import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectCreateLinkLoading, selectLink } from './store/linkSlice';
import { createLink } from './store/linkThunks';

const App = () => {
  const dispatch = useAppDispatch();
  const [links, setLinks] = useState('');
  const createLoading = useAppSelector(selectCreateLinkLoading);
  const selectLinks = useAppSelector(selectLink);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(createLink(links));
  };

  let linkBox = null;

  if (selectLinks) {
    linkBox = (
      <>
        <div className="mt-3">
          <h4 className="my2">Your links look like this:</h4>
          <p>
            <a
              href={`http://localhost:8000/${selectLinks.shortUrl}`}
              className="link-underline-dark"
              target="_blank"
            >
              {'http://localhost:8000/' + selectLinks.shortUrl}
            </a>
          </p>
        </div>
      </>
    );
  }


  return (
    <div className="container">
      <h2 className="mt-5 mb-3">Shorten your link</h2>
      <form onSubmit={onSubmit} style={{maxWidth: '500px'}}>
        <div className="mb-3 input-group">
          <label htmlFor="links" className="input-group-text">
            Put your url
          </label>
          <input
            type="text"
            name="links"
            id="links"
            className="form-control"
            required
            value={links}
            onChange={(e) => setLinks(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={createLoading}
        >
          Shorten!
        </button>
      </form>
      {linkBox}
    </div>
  );
};

export default App;