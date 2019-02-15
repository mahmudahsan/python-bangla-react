/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import React from 'react';
import {addItemInPlaylist} from '../Model/Model';

export default (props) => {
  const onFormSubmit = (e) => {
    e.preventDefault();

    const collection = document.getElementById('collection').value;
    const id = document.getElementById('id').value;
    const title = document.getElementById('title').value;
    const youtube = document.getElementById('youtube').value;
    const description = document.getElementById('description').value;

    console.log(collection);
    console.log(id);
    console.log(title);
    console.log(youtube);
    console.log(description);

    // add data in firebase
    addItemInPlaylist(collection, id, title, description, youtube);

    document.getElementById('id').value = "";
    document.getElementById('title').value = "";
    document.getElementById('youtube').value = "";
    document.getElementById('description').value = "";
  };

  return(
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="collection">Collection Name</label>
          <input type="text" className="form-control" id="collection" placeholder="beginner" />
        </div>

        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input type="text" className="form-control" id="id" placeholder="1" />
        </div>
      
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" placeholder="Title" />
        </div>
      
        <div className="form-group">
          <label htmlFor="youtube">Youtube ID</label>
          <input type="text" className="form-control" id="youtube" placeholder="xkdkdi393" />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-2" onClick={onFormSubmit}>ADD</button>
     </form>
    </div>
  );
};