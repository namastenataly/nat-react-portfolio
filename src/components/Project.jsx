export default function({project}) {
  return (
    <div className='card text-bg-dark p-0'>
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <a href={project.repoURL} className='stretched-link'></a>
      </div>
      <img src={project.image} className='card-img-bottom img-fluid card-blur'></img>
    </div>
  );
}