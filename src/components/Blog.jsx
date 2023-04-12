import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='container' style={{ margin: '5rem' }}>
            <div className='fw-bold text-center bg-success bg-opacity-25 rounded'  style={{ margin: '5rem' }}><h1>Q & A session</h1></div>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. When should you use context API?</Accordion.Header>
        <Accordion.Body>
        Context API is a feature in React that allows components to share data without the need for explicit props drilling.In general, you should use Context API when you have data that needs to be shared across multiple components and you want to avoid prop drilling. However, it's important to use it judiciously, as overusing Context API can make your code more difficult to understand and maintain.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2. What is a custom hook?</Accordion.Header>
        <Accordion.Body>
        A custom hook is a reusable piece of code that encapsulates logic related to a specific functionality in a React application. Custom hooks allow you to extract common logic from components, making them easier to read, test, and maintain.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>3. What is useRef?</Accordion.Header>
        <Accordion.Body>
        useRef is a built-in hook in React that provides a way to create a mutable reference that persists across component re-renders. The useRef hook can be used to access the underlying DOM node or to store any mutable value in a component without triggering a re-render.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>4. What is useMemo?</Accordion.Header>
        <Accordion.Body>
        useMemo is a built-in hook in React that allows you to memoize the result of a function call and cache it for future use. Memoization is a technique used to optimize expensive computations by caching the result of the computation and returning it if the input parameters are the same as a previous call.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Blog;