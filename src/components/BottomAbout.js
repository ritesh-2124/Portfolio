import React from 'react'
// import {useForm, ValidationError} from '@formspree/react'

function BottomAbout() {
    // const [state, handleSubmit] = useForm('mgedkwky');
    // if(state.succeeded){
    //     return <p className='center'>Thanks for chatting</p>
    // }
    return (
        <div id='bottom' className="Bottom">
            <div className="free">
                <div className="txthead">
                   If you want to Say something feel free to contect me.
                </div>
                <div className="txt">
                  or Have an exciting project or idea ?
                    <div className='contsmes'>
                        Contact Me:
                    </div>
                </div>
                <div className="form">

        {/* if you want to use form for contect me just use this form   */}
                    {/* <form onSubmit={handleSubmit}>
                        <div className='email'>
                            <input type="email" name="email" id="email" placeholder='Email Address'/>
                            <ValidationError prefix='email' field='email' errors={state.errors}/>
                            <input type="text" name='name' id='name' placeholder='Name' />
                            <ValidationError prefix='name' field='name' errors={state.errors}/>
                        </div>
                        <textarea id="message" name="message" placeholder='Message' minLength={20}/>
                      <ValidationError prefix="Message" field="message" errors={state.errors}/>
                      <button type="submit" disabled={state.submitting}>Submit</button>
                    </form>   */}
             <div id='headeradd'>
                  <h2 className='contsmes'>Email: RiteshYad222000@gmail.com</h2>
                  <h2 className='contsmes'>Github: ritesh-2124</h2>
                  <h2 className='contsmes'>From: PRAYAGRAJ U.P.</h2>

                </div>
                </div>
               
            </div>
        </div>
    )
}

export default BottomAbout
