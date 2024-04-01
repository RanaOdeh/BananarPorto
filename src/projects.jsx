import React from 'react';
//import './projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>

      <h3>Regular Expression Engine</h3>
      <ul>
        <li>
        Created a software project in which a Python Regular Expression Engine was built to mimic NFA and DFA
        functions and translate regular expressions into NFAs
        </li>
        <li>
        Demonstrated expertise in sophisticated algorithm design by implementing algorithmic basic elements such as
        string acceptance evaluation and NFA to DFA conversion utilizing subset building.
        </li>
      </ul>

      <h3> Spell Checker </h3>
      <ul>
        <li>
            Engineered a Rust-based spell checker capable of processing strings and using a dictionary for word verification, 
            demonstrating advanced skills in Rust programming, data structures, and algorithm implementation.
        </li>
        <li>
        Executed effective file I/O operations in Rust for dictionary management, coupled with test-driven development 
        practices, including writing and passing numerous unit and integration tests to ensure code reliability.
        </li>
      </ul>

      <h3> Women’s Weightlifting Website </h3>
      <ul>
        <li>
        Developing an informative web portal to guide women through weightlifting fundamentals, advanced techniques,
        and nutrition.
        </li>
        <li>
        Employing responsive design with HTML and CSS for optimal user experience across devices. The goal is to
        support a 30% increase in users’ regular engagement with fitness routines
        </li>
        <li>
        Implementing JavaScript for interactive elements, including workout videos and nutritional planners.
        </li>
      </ul>
    </div>
  )
}

export default Projects;
