// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Auth.css'

const Auth = () => {
    return (
        <div className='auth'>
            <form style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div>
                    <label>Organization Name</label>
                    <input type="text" name="org_name" required />
                </div>
                <div>
                    <label>Contact Person Name</label>
                    <input type="text" name="contact_person" required />
                </div>
                <div>
                    <label>Email Address</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" name="phone" required />
                </div>
                <div>
                    <label>Website (Optional)</label>
                    <input type="text" name="website" />
                </div>
                <div>
                    <label>Type of Partnership</label>
                    <select name="partnership">
                        <option value="sponsorship">Sponsorship</option>
                        <option value="training">Training Collaboration</option>
                        <option value="research">Research and Development</option>
                        <option value="placement">Internship/Job Placement</option>
                        <option value="other">Other</option>
                    </select>
                    <input type="text" placeholder='Specify here if picked other' name='other' />

                </div>
                <div>
                    <label>Describe Your Organization</label>
                    <textarea placeholder='Briefly describe your organization&#39;s mission, values, and why you&#39;re interested in partnering with us.' name='describe' required></textarea>
                </div>
                <div>
                    <label>Upload Proposal or Supporting Documents (Optional)</label>
                    <input type="file" accept=".pdf,.docx,.pptx"/>
                </div>
                <div>
                    <label>How Can We Collaborate?</label>
                    <textarea placeholder='Tell us how you&#39;d like to work with Ongoza Cyber Hub and the potential areas of collaboration.' name="collaborate" required></textarea>
                </div>
                <div>
                    <label>Additional Comments/Questions</label>
                    <input type="text" name="additional" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Auth