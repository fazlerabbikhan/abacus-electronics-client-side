import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h5>Q1: What are the differences between JavaScript and Node.js?</h5>
            <p>Ans: JavaScript is a programming language. It is running in any web browser with a proper browser engine while Node.js is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.<br />
                JavaScript is mainly used for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page. Node.js is mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.
            </p>
            <h5>Q2: When should you use Node.js and when should you use MongoDB?</h5>
            <p>Ans: MongoDB is a Document Oriented Database. It stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. It is designed to work with Large Scale Data. It can work on multiple servers and handle a large number of access requests easily. When we need such performance we'll use MongoDB.<br />
                There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node.js by default follows the asynchronous pattern. It does not wait for a task to be completed, in the meantime, Node.js starts another job. So it also depends on our needs.
            </p>
            <h5>Q3: What are the differences between SQL and NoSQL databases?</h5>
            <p>Ans: SQL is a relational database management system (RDBMS) while NoSQL is a non-relational or distributed database system.<br />
                SQL databases have fixed or static or predefined schema. NoSQL have dynamic schema.<br />
                SQL databases are not suited for hierarchical data storage but best suited for complex queries. NoSQL databases are best suited for hierarchical data storage but not so good for complex queries.<br />
                SQL databases are vertically scalable while NoSQL databases are horizontally scalable.
            </p>
            <h5>Q4: What is the purpose of JWT and how does it work?</h5>
            <p>Ans: JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.<br />
                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.<br />

                Once decoded, you will get two JSON strings:<br />
                1. The header and the payload.<br />
                2. The signature.<br />
                The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.<br />
                The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.<br />
                The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
            </p>
        </div>
    );
};

export default Blogs;