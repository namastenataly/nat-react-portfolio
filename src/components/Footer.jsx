import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <div className="container sticky-bottom mt-5">
      <Link key={1} to={"https://github.com/namastenataly"} className="p-4">
        <i className="bi bi-github" style={{fontSize:40+'px'}}></i>
      </Link>
      <Link key={2} to="/contact" className="p-4">
        <i className="bi bi-envelope" style={{fontSize:40+'px'}}></i>
      </Link>
    </div>
  );
}