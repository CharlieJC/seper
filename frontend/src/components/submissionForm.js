import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import axios from 'axios';
const bibtexParse = require('bibtex-parse');

const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const [state, setState] = useState({
    Title: '',
    Authors: '',
    Source: '',
    PublicationYear: '',
    DOI: '',
    SEPractice: '',
  });

  const onSubmit = () => {
    axios.post('http://localhost:8082/api/articles', state).catch((err) => {
      console.log('Error in SubmissionForm!');
    });
  };

  let fileReader;

  const handleFileRead = () => {
    const content = fileReader.result;
    const parsed = bibtexParse.entries(content);

    const data = {
      Title: parsed[0]['TITLE'],
      Authors: parsed[0]['AUTHOR'],
      Source: parsed[0]['BOOKTITLE'],
      PublicationYear: parsed[0]['YEAR'],
      DOI: parsed[0]['DOI'],
      SEPractice: state.SEPractice,
    };

    setState(data)
    // setResult([parsed[0]['TITLE'],parsed[0]['AUTHOR'],parsed[0]['BOOKTITLE'],parsed[0]['YEAR'],parsed[0]['DOI']]);

  };

  const handleFileChosen = (file) => {
    if (file) {
      fileReader = new FileReader();
      fileReader.onloadend = handleFileRead;
      fileReader.readAsText(file);
    }
  };

  const onChange = (value, key) => {
    setState({
      ...state,
      [key]: value,
    })
    console.log(state)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>
          <input {...register('Title')} placeholder="Title" type="text" value={state.Title} onChange={e => onChange(e.target.value, 'Title')} />
        </p>
        <p>
          <input {...register('Authors')} placeholder="Authors" type="text" value={state.Authors} onChange={e => onChange(e.target.value, 'Authors')} />
        </p>
        <p>
          <input {...register('Source')} placeholder="Source" type="text" value={state.Source} onChange={e => onChange(e.target.value, 'Source')}/>
        </p>
        <p>
          <input
            {...register('PublicationYear')}
            placeholder="Publication Year"
            type="text"
            value={state.PublicationYear} onChange={e => onChange(e.target.value, 'PublicationYear')}/>
        </p>
        <p>
          <input {...register('DOI')} placeholder="DOI" type="text" value={state.DOI} onChange={e => onChange(e.target.value, 'DOI')}/>
        </p>

        <p>
          <select {...register('SEPractice')}>
            <option value="">Select SE practice...</option>
            <option value="TDD">TDD</option>
            <option value="Mob Programming">Mob Programming</option>
          </select>
        </p>

        <p>
          <input type="submit" />
        </p>
      </form>
      <input
        type="file"
        className="input-file"
        accept=".bib"
        onChange={(e) => handleFileChosen(e.target.files[0])}
      />
    </div>
  );
};
export default SubmissionForm;
