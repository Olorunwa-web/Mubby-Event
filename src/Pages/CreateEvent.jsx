import React, {useRef, useState} from 'react'
import Form from 'react-bootstrap/Form';
import '../Style/createevent.css'
import iconlocation from '../assets/location.svg'
import drops from '../assets/Vector (2).svg';
import cancel from '../assets/x.svg'

const CreateEvent = () => {


    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };

      const [time, setTime] = useState("");


      const options = ["Concert", "Education", "Party", "Sport", "Tech"];
      const [selectedOptions, setSelectedOptions] = useState([]);

      const handleSelect = (event) => {
        const value = event.target.value;
        if (value && !selectedOptions.includes(value)) {
          setSelectedOptions([...selectedOptions, value]);
        }
      };
    
      const handleRemove = (option) => {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
      };

   
    return (
        <>
        <section className = 'mb-4'>
          <main className = 'container space-home py-3'>
              <h1 className = 'create-event-h1'>Create Event</h1>
              <h4 className = 'upload-h4'>Upload Photo</h4>
              <div className = 'position-relative upload-wrapper d-flex justify-content-center align-items-center'>
                  <div>
                  {!image && (
                      <label htmlFor="fileInput" className = 'choose-photo-btn'>Choose Photo<input type="file" name="" id=""  onChange={handleFileChange} className = 'd-non position-absolute top-50 start-50 translate-middle opacity-0 upload-file'/></label>
                  )}
                  </div>
                 {image && <img src= {image} alt="" className = 'upload-img'/> }
              </div>
              <section className = 'd-flex flex-column gap-4' >
              <div className = 'my-3'>
                  <h3 className = 'upload-h4 mt-3'>Time & Location</h3>
                  <div className = 'd-flex flex-column gap-1 mb-3'>
                      <label htmlFor="" className = 'label-date'>Date</label>
                      <input type="date" name="" id="" className = 'input-date'/>
                  </div>
                  <div className = 'd-flex gap-4 my-3'>
                      <div className = 'd-flex flex-column gap-1 time-input-wrapper '>
                          <label htmlFor="" className = 'label-date'>Time(Start)</label>
                          <input type="time"  className = 'time-input' placeholder = '9:20' />
                      </div>
                      <div className = 'd-flex flex-column gap-1'>
                          <label htmlFor="" className = 'label-date'>Time(End)</label>
                          <input type="time" name="" id="" className = 'time-input'/>
                      </div>
                  </div>
                  <div className = 'd-flex align-items-center gap-5 event-flex mb-3'>
                      <div className = 'd-flex flex-column gap-1 w-100 position-relative'>
                          <label htmlFor="" className = 'label-date'>Location</label>
                          <select name="" id="" className = 'select-input position-relative'>
                              <option value="location" disabled selected hidden className = 'option-select'>Enter Location<img src= {iconlocation} alt=""/></option>
                              <option value="Teslim Balogun Stadium, Surulere" className = 'option-select'>Teslim Balogun Stadium, Surulere</option>
                              <option value="Euphoria House 9"  className = 'option-select' >Euphoria House 9</option>
                              <option value="Tafawa Balewa Square (TBS)"  className = 'option-select' >Tafawa Balewa Square (TBS)</option>
                          </select>
                          <img src= {iconlocation} alt="" className= 'select-icon'/>
                      </div>
                      <div className = 'd-flex align-items-center gap-5 mt-2 pt-3 online-flex'>
                          <label htmlFor="" className = 'label-date'>Online</label>
                          <div>
                          <Form>
                              <Form.Check 
                                 type="switch"
                                 id="custom-switch"
                                 label=""
                               />
                          </Form>
                          </div>
                      </div>
                  </div>
                  <div className = 'd-flex flex-column  gap-1'>
                      <label htmlFor="" className = 'label-date'>Description</label>
                      <textarea name="" id=""></textarea>
                  </div>
                  
              </div>
              <div className = 'my-3'>
                <h3 className = 'upload-h4'>Categories</h3>
                <div className = 'd-flex align-items-center category-flex gap-4'>
                   <div className = 'd-flex flex-column gap-1 position-relative pick-cate '>
                       <label htmlFor="" className = 'label-date'>Select Category</label>
                       <select name="" id="" onChange={handleSelect} className = 'select-input-1 position-relative'>
                          <option value="Category" disabled selected hidden className = 'option-select'>Category<img src= {iconlocation} alt=""/></option>
                          {options.map((option) => (
                              <option key = {option} value= {option} className = 'option-select'>{option}</option>
                          ))}
                       </select>
                       {/* <img src= {drops} alt="" className = 'select-drop'/> */}
                  </div>
                  <div className = 'd-flex flex-column gap-1 tags-w'>
                      <label htmlFor=""className = 'label-date' >Tags</label>
                      <div className = 'tag-div'>
                          {selectedOptions.map((option) => (
                              <button key = {option} onClick={() => handleRemove(option)} className = 'btn-select' >{option} <img src= {cancel}  alt=""/></button>
                          ))}
                      </div>
                  </div>
                </div>
             </div>
             <div>
                <h3 className = 'upload-h4'>Pricing</h3>
                <div className = 'd-flex flex-column gap-3'>
                <div className = 'pricing-width d-flex justify-content-between align-items-center'>
                    <label htmlFor="" className = 'label-date'>Free</label>
                    <div>
                          <Form>
                              <Form.Check 
                                 type="switch"
                                 id="custom-switch"
                                 label=""
                               />
                          </Form>
                     </div>
                </div>
                <div className = 'pricing-width d-flex flex-column gap-1'>
                        <label htmlFor="" className = 'label-date'>Regular</label>
                    <div className = 'd-flex justify-content-between align-items-center'>
                      <input type="text" className = 'text-input'/>
                      <div>
                          <Form>
                              <Form.Check 
                                 type="switch"
                                 id="custom-switch"
                                 label=""
                               />
                          </Form>
                      </div>
                    </div>
                </div>
                <div className = 'pricing-width d-flex flex-column gap-1'>
                        <label htmlFor="" className = 'label-date'>VIP</label>
                    <div className = 'd-flex justify-content-between align-items-center'>
                      <input type="text" className = 'text-input'/>
                      <div>
                          <Form>
                              <Form.Check 
                                 type="switch"
                                 id="custom-switch"
                                 label=""
                               />
                          </Form>
                      </div>
                    </div>
                </div>
                </div>
             </div>
             <div className = 'd-flex gap-3 my-4'>
                 <button className = 'can-btn'>Cancel</button>
                 <button className = 'cont-btn'>Continue</button>
             </div>
              </section>
          </main>
        </section>
        </>
    )
}

export default CreateEvent
