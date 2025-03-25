import Nav from './Nav';

export default function Header () {
  return (
    <div className='d-flex justify-content-between mb-5 p-5 shadow-sm'>
      <h1>     
        Nataly's Portfolio
      </h1>
      <Nav />
    </div>
  );
}