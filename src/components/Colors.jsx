import React, { useState } from 'react';
import checkHex, { hex2rgb } from '../utils';

export default function Colors() {
  const [color, setColor] = useState({ hex: '', rgb: '' })
  console.log('AppColor', color)

    const [form, setForm]= useState({
    name:''})
    const handleChange=({target})=>{
        const{name, value}=target;
        console.log(value)
        setForm(prevForm=>({...prevForm, [name]:value}))
        if(value.length===7){
            if(checkHex(value)){
                console.log('color')
                const color=hex2rgb(value);
                console.log(color)
                setColor({hex:value, rgb:color});
            }
            else{
                setColor({hex:'error', rgb:'error'})
            }
        }
        }
    const handleSubmit=(evt)=>{
        evt.preventsDefault();
        console.log(evt.target)
    }
    const styleColor=()=>{
        if(color.hex==='error'){
            return {backgroundColor:'red'}
        }
        else if(color.hex===''){
            return {backgroundColor:'white'}
        }
        else{ return {backgroundColor: color.hex}}
    }
  return (
    <div style={styleColor()} className='container'>
      <form onSubmit={handleSubmit}>
        <input id='name' name='name' className='input' value={form.name} onChange={handleChange} maxlength='7'>
        </input>
      </form>
      <div className='box'>
        {color.rgb}
      </div>
    </div>
  );
}
 