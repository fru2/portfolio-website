import React from 'react';

export default function NavBarExpanded() {
  return (
    <nav className='navbar-exp'>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Project</a></li>
        <li><a href="#">Workflow</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className='icon-btn'></button>

      <ul>
        <li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consequuntur ipsam facilis quas vel rerum, ducimus harum hic aliquam mollitia sequi aperiam eius fuga? Unde, maiores. Aperiam eaque illum eos.</p>
        </li>
        <li>
          <p>© ABC - 2022</p>
          <p>Placeholder address here</p>
          <p>India</p>
        </li>
      </ul>
    </nav>
  );
}
