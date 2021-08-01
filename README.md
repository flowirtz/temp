# Airport Lookup Code Challenge

This is a simple app to lookup airport information.

## Getting Started

```shell
yarn install
yarn dev
# http://localhost:3000
```

## Questions

### 1. What are some edge-cases you'd consider before shipping this feature?

- Very long airport names
- Umlauts and other special characters in airport names
- Usable for colour-blind people
- Run through accessibility tester to make sure our screen reader efforts actually work
- Error handling, e.g. what happens if the backend is down or erroneous
- How app displays across screen sizes
- Security implications (e.g. SQL injection possible if this is connected to a database?)

### 2. How do you design a large project like Maybe for scalability/maintainability/reliability?

**Scalability**
We want our application to be accessible to all users at all times. In my opinion, the first step to ensuring scalability is to define what performance means to us and what load we are expecting (base and peak). Based on that we can design our application. We also would want to perform load tests to identify bottlenecks.
In general, we would want to make use of horizontal scaling using Load Balancers, Content Delivery Networks and Caches. We would want to conduct architectural reviews regularly based on our load tests and also continuously reevaluate our expected load levels to make sure the application is able to cope with them.
From a non-tech perspective, we would also want to make sure that other functions are able to scale with the growth of our user base. I think it’s important to be able to scale support staff, engineering staff and other aspects accordingly so that all users have a great experience.

**Maintainability**
We want to be able to maintain our application over a long time horizon, not getting to a worst-case scenario of needing to rewrite the whole application because it’s unmaintainable. The key concept here in my opinion is the book ‘Clean Code’ by uncle Bob: To have a maintainable system, we need to architect it in a clean way. To achieve that, we need to choose descriptive names, decouple code, follow KISS and DRY principles, favour readability over complexity, be consistent and many others. Test-driven development also helps with ensuring maintainability.

**Reliability**
We want our application to continue working correctly, even when things go wrong. I think there are two important points to making sure a system is reliable. First, I’d want to simulate faults and see what happens. Using methods of chaos engineering, meaning breaking things on purpose, we can find out how our system behaves when faults occur. We could, for example, stop a service in a microservice environment, or just turn off parts of the backend to see how the frontend behaves. We would then optimise our system for these cases.
The second important part, in my opinion, to making sure that our system is reliable, is to prepare strategies for how we will handle faults when they occur. Defining a clear Incident strategy in advance, including escalation paths and stakeholders that need to be involved, is vital to be resolve faults quickly. Depending on the scale of the system we would also want to have engineers on-call who can respond to faults quickly. We also need a thorough monitoring infrastructure so that we can quickly notice when faults occur. Once faults are fixed, we would want to add regression tests where possible.
We’d also want to minimise human error, especially through the introduction of code bugs. We can achieve this by performing code reviews and writing tests that are run in a CI pipeline. Depending on team size I also think software like incident.io would be a helpful addition to the toolset.

### 3. What's been your experience with SQL and scaling up performance with very large data sets?

At a previous job, we were using Postgres in a microservice context for a huge customer base. We achieved that by building on patroni which provides a high availability template for Kubernetes.
It’s important to minimise the load on the database at all times. The possibly most important aspect to achieve that is to design the database schema in an efficient way. We also would want to act differently based on whether we have an OLAP or OLTP workload. Identifying good primary and secondary keys and making use of them is important as well. To further reduce the load on the database we would want to make use of caching and optimise our queries.

### 4. What's important for remote engineering teams to work well?

Asynchronous approach to everything, as everyone likely works from different timezones
Overcommunicate, and be overly friendly (a lot of information gets lost when communicating by text vs face to face; also don’t be afraid of occasional video calls to resolve more complex issues)
Document everything
Encourage human connections (e.g. by encouraging people to turn on their cameras during calls etc. I feel that remote work sometimes can feel a bit lonely, so this is a nice way of combating that a bit)
