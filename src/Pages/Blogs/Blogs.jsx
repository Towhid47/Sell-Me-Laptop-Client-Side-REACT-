import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What are the different ways to manage a state in a React
            application?
          </Accordion.Header>
          <Accordion.Body>
            <h2>Communication State:</h2>
            <p>
              Communication state forms the backbone of your React Native app
              without you even knowing about it. Remember when you had requested
              a call back to an HTTP request? That’s when you introduced the
              communication system in your app.
            </p>
            <p>
              Communication plays a crucial role in storing information in
              different states. It covers essential aspects of an application
              such as loading spinners, error messages, pop-ups, and many others
              which showcases that a communication link has been formed.
              Communication state is the “loading phase” of the transactions
              between different states. It stores the following information when
              used in a React app:
            </p>
            <p>
              1. The error messages, given that the request failed or the
              transaction was not completed.
            </p>
            <p>
              2. The type, selector, and expected change of operations
              requested.
            </p>
            <p>3. The type of data requested to access or expect to receive.</p>
            <br />
            <br />

            <h2>Data State</h2>
            <p>
              Data state covers information that your React application stores
              temporarily for various business functions. Supposedly, you are
              building a project management app. The information stored in the
              data state will include the following things – project names,
              contacts, details about the clients, etc.
            </p>

            <h2>Control State</h2>
            <p>
              Contrary to the state mentioned above in a React app, the control
              state does not represent the application’s environment. Instead,
              it refers to the state which the user has input into the app. For
              example, form inputs, selected items, etc. Control state is known
              to be more diverse and versatile when it comes to storing
              information.
            </p>
            <br />
            <br />
            <h2>Session State</h2>
            <p>
              Session state contains information about the user of the
              application such as user id, permissions, passwords, etc. It may
              also include information on how the application should work
              according to a particular user’s preferences.
            </p>
            <p>
              While Session state can store similar patterned components like
              Control state, there is a thick difference between both the
              information stored. For example, you may have a part of a Control
              state information that represents parts of a tree view, you can
              find kind of similar data in the Session state, but it will
              definitely be different from the Control state.
            </p>
            <p>
              Session states can only be read when a component is mounted, which
              means that you store a copy of the information already present in
              the Control state. It stores personal preferences based on the
              user’s choices to depict the data.
            </p>
            <br />
            <br />

            <h2>Location State</h2>
            <p>
              Location state is the UTF-8 display that appears in your URL bar.
              In fact, the L in URL stands for Locator! One of the most
              interesting facts about Location state is that you can give
              directions to a user to parts of the application that do not have
              unique URLs associated with them. Also, the HTML5 History API
              allows you to store states separately from the specific URL.
            </p>

            <p>
              Unlike Data and Communication state, which follow a particular
              pattern or a shape to store information, location state instead
              stores information in a simple string like structure. However, one
              of the most interesting things about location states is that it
              typically stores URLs in the forms of string-like structures even
              when they don’t actually represent strings.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            How does prototypical inheritance work?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Every object with its methods and properties contains an internal
              and hidden property known as [[Prototype]]. The Prototypal
              Inheritance is a feature in javascript used to add methods and
              properties in objects. It is a method by which an object can
              inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object.setPrototypeOf.
              Nowadays, in modern language, it is being set using __proto__.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What is a unit test? Why should we write unit tests?
          </Accordion.Header>
          <Accordion.Body>
            <h2>What is Unit test ?</h2>
            <p>
              Unit testing is a type of software testing where individual units
              or software components are tested. Its purpose is to validate that
              each unit of code performs as expected. A unit can be anything you
              want it to be — a line of code, a method, or a class.{" "}
            </p>
            <h2>Why Should we use Unit test ?</h2>
            <p>
              Unit tests save time and money. Usually, we tend to test the happy
              path more than the unhappy path. If you release such an app
              without thorough testing, you would have to keep fixing issues
              raised by your potential users. The time to fix these issues
              could’ve been used to build new features or optimize the existing
              system. Bear in mind that fixing bugs without running tests could
              also introduce new bugs into the system.
            </p>
            <p>
              Well-written unit tests act as documentation for your code. Any
              developer can quickly look at your tests and know the purpose of
              your functions.
            </p>
            <p>It simplifies the debugging process</p>
            <p>
              Unit testing is an integral part of extreme programming. Extreme
              programming is basically a
              “test-everything-that-can-possibly-break” programming strategy.
            </p>
            <p>
              Unit testing improves code coverage. A debatable topic is to have
              100% code coverage across your application.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>React vs. Angular vs. Vue?</Accordion.Header>
          <Accordion.Body>
            <h2>React JS</h2>
            <p>
              React, interestingly, combines the UI and behavior of components.
              For instance, here is the code to create a hello world component
              in React. In React, the same part of the code is responsible for
              creating a UI element and dictating its behavior.
            </p>
            <p>
              React offers a Getting Started guide that should help one set up
              React in about an hour. The documentation is thorough and
              complete, with solutions to common issues already present on Stack
              Overflow. React is not a complete framework and advanced features
              require the use of third-party libraries. This makes the learning
              curve of the core framework not so steep but depends on the path
              you take with additional functionality. However, learning to use
              React does not necessarily mean that you are using the best
              practices.
            </p>

            <h2>Angular JS</h2>
            <p>
              Angular has a steep learning curve, considering it is a complete
              solution, and mastering Angular requires you to learn associated
              concepts like TypeScript and MVC. Even though it takes time to
              learn Angular, the investment pays dividends in terms of
              understanding how the front end works.
            </p>
            <p>
              In Angular, components are referred to as directives. Directives
              are just markers on DOM elements, which Angular can track and
              attach specific behavior too. Therefore, Angular separates the UI
              part of components as attributes of HTML tags, and their behaviors
              in the form of JavaScript code. This is what sets it apart when
              looking at Angular vs React.
            </p>

            <h2>Vue JS</h2>
            <p>
              When looking into Vue vs React, in Vue, UI and behavior are also a
              part of components, which makes things more intuitive. Also, Vue
              is highly customizable, which allows you to combine the UI and
              behavior of components from within a script. Further, you can also
              use pre-processors in Vue rather than CSS, which is a great
              functionality. Vue is great when it comes to integration with
              other libraries, like Bootstrap.
            </p>
            <p>
              Vue provides higher customizability and hence is easier to learn
              than Angular or React. Further, Vue has an overlap with Angular
              and React with respect to their functionality like the use of
              components. Hence, the transition to Vue from either of the two is
              an easy option. However, simplicity and flexibility of Vue is a
              double-edged sword — it allows poor code, making it difficult to
              debug and test.
            </p>

            <h5>
              Although Angular, React and Vue have a significant learning curve,
              their uses upon mastery are limitless. For instance, you can
              integrate Angular and React with WordPress and WooCommerce to
              create progressive web apps.
            </h5>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
