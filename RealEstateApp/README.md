# Overview

This is a Mobile phone app that is avaialable in either iOS or Android, as it's written in React Native in TypeScript, using the Expo framework. 

The application itself is similar to an AirBnB or Vrbo property rental app. The user is able to log into the application using Google OAuth, and from there can browse the properties, search for different options and view specific details about the properties as well. 

[Software Demo Video](https://youtu.be/tVuXm6HRBrA)

# Development Environment

I used JetBrains Webstorm as the IDE for this project. It has many built in features that are helpful with JavaScript, TypeScript, and React. 

This project also uses the Expo Framework which is excellent for developing with React Native. With Expo, you're able to download an app on your phone (iPhone or Android) and access your project directly on your phone. Expo debugging also allows you to dynamically reload your code, and see the updates on your phone within seconds, which is super helpful. 

Styling for the application is done with a specific instance of Tailwind.css called Nativewind, which works hand in hand with Tailwind to provide the styling for the application. 

For the backend of the application, I used a site called AppWrite, which provides a cloud database for the app, along with the ability to redirect users to Google OAuth to sign into the application. Along side that, I do have a database on that's serving the data to the application dynamically.

# Useful Websites

* [React Native Docs](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [AppWrite](https://cloud.appwrite.io/)
* [NativeWind](https://www.nativewind.dev/getting-started/installation)
* [Google Cloud Console](console.cloud.google.com)
* GitHub CoPilot - Claude 3.7 Sonnet Model - *Disclaimer* GitHub CoPilot was used as a peer reviewer of code and a tool for troubleshooting issues within the code. Any code suggestions provided by GitHub CoPilot were just that, suggestions. All code generated was scrutanized and confirmed as correct prior to addition to the project. The code in this project was typed by the author. 

# Future Work

* Expand the functionality in the profile screen to allow users to have full-access to all the links
* Replace Demo/Dummy data with actual data
* Provide additional sign in an authorization methods. 