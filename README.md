# hexagonal-architecture-typescript

This repository applying and explain the concepts of hexagonal architecture
The main services are:

- API
- DB
- Control Plane
- FrontEnd

The interaction between services born from request of login, this execute a primary action this action interact with Control Plane and DB services through are adapters

Recommendations at the moment to define the work flow of a services:
Identify ...
1. what are the entry triggers?
2. what are the main ports?

I follow the following nomenclature:
If it's a driver:
for - "what needs to be done?" 

Example:
for - authenticating
    - logging
    - register
  
bad practices:
for - authenticating 
for - logging
for - register

In the first example I englobe the methods in a one action (ports).
In the second example I created as many ports as actions.

Important:
Let us remember that the port limits our actions.

Back to the topic..
This port "authenticating" needed a adapter "authenticator", for this I need to create proxies

Design Pattern "Proxy":
url of pattern

