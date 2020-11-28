import React from "react";

export const EditForm = () => {
   return (
      <div className="column">
         <div className="field">
            <label className="label">Title</label>
            <div className="control">
               <input className="input" type="text" />
            </div>
         </div>

         <div className="field">
            <label className="label">Author</label>
            <div className="control">
               <div className="select">
                  <select>
                     <option>Select dropdown</option>
                     <option>With options</option>
                  </select>
               </div>
            </div>
         </div>

         <div className="field">
            <label className="label">Body</label>
            <div className="control">
               <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
         </div>

         <div className="field">
            <div className="file has-name">
               <label className="file-label">
                  <input className="file-input" type="file" name="resume" />
                  <span className="file-cta">
                     <span className="file-icon">
                        <i className="fa fa-upload"></i>
                     </span>
                     <span className="file-label">
                        Choose a file…
                     </span>
                  </span>
                  <span className="file-name">
                     Screen Shot 2017-07-29 at 15.54.25.png
                  </span>
               </label>
            </div>
         </div>

         <div className="field is-grouped">
            <div className="control">
               <button className="button is-link">Submit</button>
            </div>
            <div className="control">
               <button className="button is-link is-light">Cancel</button>
            </div>
         </div>
      </div>
   );
};
