# Car Record DApp!

## Description

This decentralized application allows its user to search for the history of a car. The Owner can register authorised users to add cars, manage car changes and car events such as an accident or a new paint.

## Functionality

On the first page there is a form where the user can search a car by typing it's VIN. Once the user clicks on the Search button, if the car is registered, information regarding said car will appear on the screen

The **Manage Admin** option is enabled only for the owner, here the owner can add, remove or search for an admin.

Once an address is authorised, it will have access to **Manage Cars** dropdown menu that contains: **Add Car**, **Modify Car** and **Add Event** options.


## Installation steps

- clone the repository
- go to the project directory
- run the following commands:  
**npm install --save next react react-dom**
**npm installsemantic-ui-react**
**npm install @material-ui/core@next**
**npm install web3**

- run the app with **npm run dev**

>Note:  Try using Ubuntu

## Deploying the Dapp again/to another network

Currently, the Dapp is deployed on **Modex Test Net** using Metamask. In the **web3.js** file you can change the variables to connect to another network. The address and abi of a contract can be find and modified in **carrecord.js**