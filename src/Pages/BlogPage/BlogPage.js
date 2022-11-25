import React from 'react';

const BlogPage = () => {
    return (
        <div>
            <div className='mt-5 font-bold text-2xl text-center'>
                <h1>Questions & Answers</h1>
            </div>
            <div>
                <div className="card m-5  bg-lime-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="font-bold text-lg">Q1. What are the different ways to manage a state in a React application?</h2>
                        <p><b>Answer:</b> There are four main types of state we need to properly manage in our React application.</p>
                        <p>1. Local State.</p>
                        <p>2. Global State.</p>
                        <p>3. Server State.</p>
                        <p>4. URL State.</p>
                        <></>
                        <p><b>Local State:</b> Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p>
                        <p><b>Global State:</b> Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. Sometimes state we think should be local might become global.</p>
                        <p><b>Server State:</b> Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p>
                        <p><b>URL State:</b> URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card m-5  bg-lime-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="font-bold text-lg">Q2. How does prototypical inheritance work?</h2>
                        <p><b>Answer:</b> When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype . That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype</p>
                        <p>Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function . All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card m-5  bg-lime-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="font-bold text-lg">Q3. What is a unit test? Why should we write unit tests?</h2>
                        <p><b>Answer:</b> JavaScript Unit Testing is a method where JavaScript test code is written for a web page or web application module . It is then combined with HTML as an inline event handler and executed in the browser to test if all functionalities are working as desired. These unit tests are then organized in the test suite.</p>
                        <p>Unit testing is an important and often overlooked part of the development process. It is considered boring by many, and being traditionally difficult to properly set up earned it a poor reputation early on. The benefits of shipping quality code certainly outweigh any negatives, but how does one find the time and muster the effort to start writing unit tests?</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card m-5  bg-lime-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="font-bold text-lg">Q4. React vs. Angular vs. Vue?</h2>
                        <p><b>Answer:</b> React vs. Angular vs. Vue are as follows:</p>
                        <p><b>React:</b> React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.</p>
                        <p>React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.</p>
                        <p>Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.</p>
                        <></>
                        <p><b>Angular:</b> AngularJS, the original framework, is an MVC (Model-View-Controller)) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.</p>
                        <p>Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.</p>
                        <p>Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.</p>
                        <p><b>Vue:</b> Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.</p>
                        <p>Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.</p>
                        <p>Components in Vue are small, self-contained, and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so that all relevant code resides in one file.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;