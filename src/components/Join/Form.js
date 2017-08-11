import React from 'react'

const Form = props => (
            <form method="post">
              <input type="hidden" name="form-name" value="joinus" />
              <div className="field">
                <label name="name" className="label">Name</label>
                <div className="control">
                   <input name="name" className="input" type="text" placeholder="e.g Full Name"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                   <input name="email" className="input" type="email" placeholder="e.g your@email.com"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                   <input name="phone" className="input" type="phone" placeholder="e.g 0000000000"/>
                </div>
              </div>
              <div className="field has-addons">
                <div className="control">
                  <div className="select">
                    <select name="semester">
                      <option value="">Semester</option>
                      <option value="1st">1st Semester</option>
                      <option value="3rd">3rd Semester</option>
                      <option value="5th">5th Semester</option>
                      <option value="7th">7th Semester</option>
                    </select>
                  </div>
                </div>
                <div className="control">
                  <div className="select">
                    <select name="branch">
                      <option value="">Branch</option>
                      <option value="cse">CSE</option>
                      <option value="ece">ECE</option>
                      <option value="mechanical">Mechanical</option>
                      <option value="electrical">Electrical</option>
                      <option value="civil">Civil</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Roll number</label>
                <div className="control">
                   <input name="roll" className="input" type="text" placeholder="e.g 150310007025"/>
                </div>
              </div>
              <div className="field">
                 <label name="expectations" className="label">What do you expect from the club?</label>
                 <div className="control">
                   <textarea name="expectations" className="textarea" placeholder="Textarea"></textarea>
                 </div>
              </div>
              <div className="field">
                 <label name="interests" className="label">Technical Interests?(Just names, use commas)</label>
                 <div className="control">
                   <textarea name="interests" className="textarea" placeholder="Textarea"></textarea>
                 </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-info is-medium full-width">Join</button>
                </div>
              </div>
            </form>
)

export default Form;
