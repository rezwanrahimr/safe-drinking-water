import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
           <div className='container mt-5'>
           <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header><h3 className='fw-bold'>What is Context Api ?</h3></Accordion.Header>
    <Accordion.Body>
    <div className='container'>
    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.we are able to change the context via a nested component by sending the function to change the component as part of the state.
    </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><h3 className='fw-bold'>What is Semantic Tag?</h3></Accordion.Header>
    <Accordion.Body>
    A semantic tag in HTML is a tag whose name clearly describes its purpose and content.
    In other terms semantic tags are those tags whose name can easily let you know which type of content take place in it. For example header, section, article and footer
    Specifically, semantic tags make it clear to the browser what the meaning of a page and its content is. That clarity is also communicated with search engines, ensuring that the right pages are delivered for the right queries.
    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>
           </div>
        </div>
    );
};

export default Blogs;