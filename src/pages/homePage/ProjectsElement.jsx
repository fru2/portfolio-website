import React from 'react';

export default function ProjectsElement(props) {

  const { id, imgSrc, title, desc } = props;

  return (
    <article>
      <div>
        <p>{id}</p> {/* container number */}
        <img src={imgSrc} alt="project thumbnail" />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </article>
  );
}


// Event handler of this container will be in this component only.
