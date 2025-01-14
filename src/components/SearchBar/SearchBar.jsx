
import css from './SearchBar.module.css'

import React from 'react';

import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.elements.topic.value.trim();

    if (query === '') {
      toast.error('The field must not be empty.');
      return;
    }

    onSubmit(query);
    form.reset();
  };

  return (
    <header>
      <form className={css.container} onSubmit={handleSubmit}>
        <input className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="topic"
        />
        <button className={css.btn} type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
