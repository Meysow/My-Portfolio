import React, { useState } from 'react';
import { projectList } from '../../datas/projectList';
import Project from './Project';
import ProjectFilter from './ProjectFilter';
import useViewport from '../hooks/Viewport';
import ReactPaginate from 'react-paginate';

const Projects = () => {
  const [projects] = useState(projectList);
  const [pageNumber, setPageNumber] = useState(0);

  const [selectedRadio, setSelectedRadio] = useState('all');

  const { width } = useViewport();
  const breakpoint = 850;

  const projectPerPage = () => (width < breakpoint ? 2 : 3);
  const pageVisited = pageNumber * projectPerPage();

  const categories = projectList.reduce((acc, proj) => acc.concat(proj.tags), []);
  const tags = categories.reduce((acc, cat) => (acc.includes(cat) ? acc : acc.concat(cat)), []);

  const projectsFiltered = projects.filter((item, i, a) =>
    selectedRadio === 'all' ? a : item.tags.includes(selectedRadio)
  );

  const projectCount = Math.min(
    Math.ceil(projects.length / projectPerPage()),
    Math.ceil(projectsFiltered.length / projectPerPage())
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleRadio = (e) => {
    let newRadio = e.target.value;
    setSelectedRadio(newRadio);
    setPageNumber(0);
  };

  const displayProject = projectsFiltered
    .slice(pageVisited, pageVisited + projectPerPage())
    .map((item) => {
      return (
        <div key={item.id} className='tier'>
          <Project
            cover={item.cover}
            tags={item.tags}
            name={item.name}
            blabla={item.blabla}
            demo={item.demo}
            git={item.git}
          />
        </div>
      );
    });

  return (
    <div className='projects'>
      <ProjectFilter
        projectsFiltered={projectsFiltered}
        tags={tags}
        selectedRadio={selectedRadio}
        setSelectedRadio={setSelectedRadio}
        handleRadio={handleRadio}
      />
      <div className='projectsContainer'>{displayProject}</div>
      <ReactPaginate
        previousLabel={'❮'}
        nextLabel={'❯'}
        pageCount={projectCount}
        onPageChange={changePage}
        containerClassName={'paginationBtn'}
        previousLinkClassName={'previousBtn'}
        nextLinkClassName={'nextBtn'}
        disabledClassName={'disabledBtn'}
        activeClassName={'activeBtn'}
        forcePage={pageNumber}
      />
    </div>
  );
};

export default Projects;
