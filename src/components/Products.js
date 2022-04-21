import { Link } from "react-router-dom";

function Products() {
    return (
        <div>
          <h2>Products !</h2>
          <ul>
              <li><Link to='products/p1'>A Book</Link></li>
              <li><Link to='products/p2'>A Carpet</Link></li>
              <li><Link to='products/p3'>A Course</Link></li>
          </ul>
        </div>
      );
}

export default Products;