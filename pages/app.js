var writeGood = require('write-good');
import Head from 'next/head'
import { useState } from 'react';
import Link from 'next/link';

const App = () => {

  const [text, setText] = useState("so the cat was stolen")
  var suggestions = writeGood(text, {passive: true, thereIs: true, weasel: true,  illusion:true, adverb: true, so: true, tooWordy: true, cliches: true});

  return (
    <div style={{backgroundImage: '-webkit-linear-gradient(90deg,#fff 3%,hsla(0,0%,100%,0)),-webkit-linear-gradient(347deg,#aaf2e1,#93edf5 50%,#dbebff)' , backgroundPosition: 'right'}}>   

        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
        </Head>

        <nav className="navbar navbar-light">
            <Link href="/"> 
                <a className="navbar-brand"><b>Grammarly Clone</b></a>
            </Link>           
        </nav><br/>
       
        <div className='container'>
            <textarea type='text' style={{width: 100+'%', height: 60+'vh', background: 'transparent'}} placeholder="So the cat was stolen." onChange={e => setText(e.target.value)} spellCheck='true'></textarea>
            <div id='suggestions'>
              {suggestions.map(suggestion => <p key='a'> {suggestion.reason} </p>)}
            </div>
        </div>

    </div>
  );
}

export default App;