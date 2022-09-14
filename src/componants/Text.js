import React, { useState } from 'react'
function Text(props) {
    const [text, setText] = useState('')

    const oncnghandler = (e) => {
        setText(e.target.value)

    }
    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("UpperCase Enabled","success");
    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("LowerCase Enabled","success");

    }
    const copyText = () => {
        let newText = document.getElementById('floatingTextarea2');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        window.getSelection().removeAllRanges()
        props.showalert("text copied","success");
    }
    const removeSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showalert("Space removed","success");

    }
    const clearText = () => {
        let newText = '';
        setText(newText)
        props.showalert("Clear Text","success");

    }








    return (
        <div className='container mx-auto my-3'>
            <div class="form-floating">
                <textarea class="form-control" value={text} onChange={oncnghandler} id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                <label htmlFor="floatingTextarea2">Enter something</label>
            </div>
            <div>
                <button className={`btn mx-2 my-2 btn-sm btn-${props.mode === 'light' ? 'primary' : 'dark'}`} mx-2 onClick={upperCase} >Upper Case </button>
                <button className={`btn mx-2 my-2 btn-sm btn-${props.mode === 'light' ? 'primary' : 'dark'}`} mx-2 onClick={lowerCase} >Lower Case </button>
                <button className={`btn mx-2 my-2 btn-sm btn-${props.mode === 'light' ? 'primary' : 'dark'}`} mx-2 onClick={copyText} >Copy Text </button>
                <button className={`btn mx-2 my-2 btn-sm btn-${props.mode === 'light' ? 'primary' : 'dark'}`} mx-2 onClick={removeSpace} >Remove Space </button>
                <button className={`btn mx-2 my-2 btn-sm btn-${props.mode === 'light' ? 'primary' : 'dark'}`} mx-2 onClick={clearText} >Clear Text </button>
            </div>
            <div className="container my-5">
                <p> {text.length === 0 ? " Enter Something To Preview :-" : text}  </p>

                <p> <span> Word count:-{text.split(' ').filter((e) => { return e.length !== 0 }).length}</span>  <span className='mx-5'>charcter count {text.length} </span> </p>
            </div>
        </div>
    )
}

export default Text
