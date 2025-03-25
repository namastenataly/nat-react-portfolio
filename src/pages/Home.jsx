import Me from '../assets/images/me.png';

export default function Home() {
  return (
    <div className="container">
      <div className='d-flex flex-column'>
        <div className="d-block p-4 mb-4">
          <h2 className="float-start" style={{fontSize:2.8+'em'}}>About Me</h2>
        </div>
        <div>
          <img src={Me} style={{width:18+'em'}} className='float-start my-2'></img>
          <p className="p-1 ms-5 lh-lg" style={{fontSize:1.2+'em'}}>Hi, my name's Nataly. I'm an aspiring full-stack web develop and this website showcases some of my work.</p>
          <p className='p-1 ms-5 lh-lg'style={{fontSize:1.2+'em'}}>There is a form if you wish to contact me and a page linking to my resume and some of my skills.</p>
        </div>
      </div>
    </div>
  );
}