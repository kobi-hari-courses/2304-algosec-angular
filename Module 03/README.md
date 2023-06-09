Day 03 - Dependency Injection, Promises and Http
### Projects
|     |     |
| --- | --- |
| [fun-with-di](./fun-with-di/) | Deep dive into Dependency Injection in angular |
| [fun-with-promises](./fun-with-promises/) | Introduction to promises in JS |
| [jokes-server](./jokes-server/) | A restful server for the http demo |
| [fun-with-http](./fun-with-http/) | Introduction to `HttpClient` |

### Introduction to Dependency Injection 
* We talked about the motivation to use a dependency injection infrastructure
* We saw how to create a service - an object encapsulating a bit of logic and perhaps data
* We defined the terms:
    * **Consumer** - the object that requires dependency
    * **Injection request / token** - The item that the consumer asks for, to be provided using dependency in the constructor
    * **Injector** - An object responsible for resolving (providing, injecting) the injection request
    * **Provider** - The algorithm, or logic, used to resolve the injected object
* We saw how to define injecter and provider using the `providers` property of a Module, or Component
* We understood the effect of defining a component as injector, and how to use the component hierarchy as injector hierarchy
* We saw how to define a provider that used another class instead of the requested class
* We saw other types of providers:
  * `useClass` - defines a class provider, essentialy calling `new` to instantiate an object
  * `useValue` - provide an already created value
  * `useExisting` - provides the value of a different request / token
  * `useFactory` - calls a function to calculated the provided value
* We saw how to define a service as Injectable so it can also consume dependencies
  * We talked about the **Tree Shaking** Algorithm and how to define "tree shakable" services
* We created an Injector on our own and saw how to 
    * Create it using the `Injector.create` factory
    * Define the injector providers
    * Define the parent injector
    * Use it to get instances of objects per token.
* We saw how to define an Injection Token
    * We used the `useValue` and `useFactory` providers to set the value of the token
    * We consumed the token using the `@Inject` decorator
* We saw how to inject `APP_INITIALIZER` to initialize a service


### Introduction to Promises and Async Development
* We defined a promise as an object that tells us if an action that takes time has completed, and what is the result
* We saw that we can not "pull" that information, but rather have to use the `.then` and `.catch` methods and provide callbacks that will be called when the promise completes
* We saw how to create a promise using the `Promise Constructor`.
* We understood what `async` and `await` keywords do and how do they affect the compilation
* We understood that the `.then` method, and the `async` keywords, also create promises, out of other promises
* We understood what operators are and that we have 3 categories of operators:
  * Factories - create promises out of nothing
  * Pipeables - create promise out of one promise, and therefore chainable
  * Combinators - create promise out of collection of promises
* We saw how to use `Promise.resolve` and `Promise.reject` as factories to create promises that are already completed.
* We saw how to use `Promise.all` and `Promise.race` to group promises together and wrap them in a single promise that returns all the results from all the promises or from the first one to complete.
* Finally we understood how the `Promise` constructor works
  * We saw that we provide it with a callback that is executed instantly
  * We saw that the Promise constroctor passes to our callbacks 2 functions that can be used to complete the promises, either succesfully with a result or unsuccesfully with an error
  * We saw an example of storing the `resolve` callback and then calling it later when the user clicks a button

### Introduction to Http in Angular
* We talked about the structure of Http Request - Verb, URL, Header, Body
* We talked about the various types of verbs: 
    * `GET` to query a single or a list of objects
    * `POST` to add a new object
    * `PUT` to update an entire existing object
    * `DELETE` to delete an existing object or list of objects
    * `PATCH` to modify a part of an existing object (several fields only)
* We used `HttpClientModule` to provide our services with the `HttpClient` service
* We used the `HttpClient` Service to create web requests a server we created using `json-server`
* We saw that the `HttpClient` methods all return Observables
* We saw that it is preferable to use the `firstValueFrom` operator, to convert the observable to promise.
* We saw how to use sites like [QuickType](https://app.quicktype.io/) to automatically generate model for json data
* We saw how to ask the http client to give us the entire response (including headers and response code) rather than just the body using `observe: 'response'`





