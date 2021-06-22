import Head from 'next/head'
import Styles from '../styles/Home.module.css'

const index = () => {
    return (
        <div style={{backgroundImage: '-webkit-linear-gradient(90deg,#fff 3%,hsla(0,0%,100%,0)),-webkit-linear-gradient(347deg,#aaf2e1,#93edf5 50%,#dbebff)' , backgroundPosition: 'right'}}>
            <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            </Head>
            <nav className="navbar navbar-light">
                <a className="navbar-brand" href="/"><b>Grammarly Clone</b></a>
            </nav><br/>
            <div className='container d-lg-flex justify-content-around align-items-center p' style={{height: 100 + 'vh'}}>
                <div>
                    <h1>Great Writing, <br/> Simplified</h1><br/>
                    <p className='lead ' style={{fontWeight: 400 , fontSize: 20+'px'}}>Compose bold, clear, mistake-free writing with <br/> Grammarly Clones’s AI-powered writing assistant.</p>
                    <br/><br/>
                    <a href='/app' className='btn btn-success' style={{width: 200+'px'}}>Try Now</a><br/><br/>
                </div>
                <div style={{height: 50+'vh' , width: 40+'%', boxShadow: 0 +"px " + 0 + "px " + 3 +"px " +'black'}} className='d-flex flex-column container a'>
                    <br/><p className='lead' style={{fontWeight: 400 , fontSize: 20+'px'}}>Grammarly Clone</p> <hr color='black' width='100%'></hr>    <br/><br/>               
                    <p className='lead' style={{fontWeight: 400 , fontSize: 20+'px'}}>My My name is ABCD...</p> <br/>
                    <p className='lead text-danger' style={{fontWeight: 400 , fontSize: 20+'px'}}><b>Error: 'My' is repeated.</b></p>    <br/><br/>                
                </div>
            </div>
            
        </div>
    );
}

export default index;