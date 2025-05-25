<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Slim-Beatnik/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Fake Store App</h3>

  <p align="center">
    The Assignment:

    # **📝 Module Project: FakeStore E-Commerce App**

📌 **Project Overview**  
 In this project, you will build a FakeStore E-Commerce App using React, React Router, and FakeStoreAPI. Your app will allow users to view, create, update, and delete products dynamically using API calls. This project reinforces state management, API interactions, React Router for navigation, and component-based architecture.

**Important Note:** FakeStoreAPI is a mock API designed for testing and learning purposes. While it will respond positively to POST, PUT, and DELETE requests (as if the actions were successful), these changes will not actually persist. You’ll still receive a success message and can test how your app handles these interactions, but the data will reset or remain unchanged when you fetch it again.

Unlike a full-stack project, you do not need to build a backend—your app will interact with this external API solely for practice with front-end API integration.

---

✨ **Learning Objectives**  
 By the end of this project, you should be able to:  
 ✅ Organize and structure a React application with reusable components.  
 ✅ Manage state using useState.  
 ✅ Fetch, create, update, and delete products using Axios or Fetch API.  
 ✅ Implement React Router for multi-page navigation.  
 ✅ Apply React Bootstrap for UI styling and responsiveness.  
 ✅ Handle loading states, errors, and API responses effectively.

---

💬 **Project Presentation Reminder**  
 As part of your final deliverables for this module, you’ll also give a short presentation of your project. This can be done live during a weekly Q\&A session, recorded and submitted to Google Classroom, or shared directly with your Student Success Manager. If you'd like to schedule a 1-on-1 presentation, click here to book a time.

---

🛠 **Project Setup Instructions**

1️⃣ Set up the React app  
 Create a new React project inside a folder:

```
npx create-vite fakestore-app --template react
```

Navigate into the project folder and install dependencies:

```
cd fakestore-app  
npm install  
npm install react-router-dom axios react-bootstrap bootstrap
```

Import Bootstrap in main.jsx:

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

Start the development server:

```
npm run dev
```

---

📌 **Project Requirements**

Your project should consist of the following pages, components, and functionalities:

🏠 **1️⃣ Home Page**

* Displays a welcome message and introduction to the store.  
* Contains a button to navigate to the Product Listing page.  
* Styled using React Bootstrap.

🛍 **2️⃣ Product Listing Page**

* Fetches and displays a list of products from FakeStoreAPI ([https://fakestoreapi.com/products](https://fakestoreapi.com/products)).  
* Products should be displayed in a visually structured layout.

* Each product should show:  
  * Image  
  * Title  
  * Price  
  * Button to view details (navigates to Product Details page).  
* Uses React Router for navigation.

📄 **3️⃣ Product Details Page**

* Displays detailed information for a single product.  
* Uses useParams() to extract the product ID from the URL.  
* Fetches the product data from FakeStoreAPI ([https://fakestoreapi.com/products/:id](https://fakestoreapi.com/products/:id)).  
* Displays:  
  * Product image, title, description, category, and price.  
  * Button to add the product to a cart (cart functionality is optional).  
  * Button to delete the product (removes it from the API).  
* Handles loading states and error messages.

**Note:** FakeStoreAPI will return a success response to DELETE requests, but the product will not actually be removed from the API. This is expected behavior for a mock testing API.

➕ **4️⃣ Add Product Page**

* A form to create a new product using FakeStoreAPI (POST request).  
* The form should include fields for:  
  * Product title  
  * Price  
  * Description  
  * Category  
* Submitting the form should send data to FakeStoreAPI.  
* Displays a confirmation message when the product is "created."

**Note:** FakeStoreAPI will return a successful response to your POST request, allowing you to test how your app handles product creation. However, the new product will not actually be saved or appear in the product list on future API calls, since this API is for testing purposes only.

* Uses React Bootstrap form components.

✏️ **5️⃣ Edit Product Page**

* Allows users to update an existing product (PUT request to FakeStoreAPI).  
* Pre-fills the form with the existing product data.  
* Submitting the form should update the product on the API.  
* Displays a success message after updating.

**Note:** While FakeStoreAPI will respond as if the update succeeded, the changes will not persist if you refresh or fetch the data again. This is expected behavior for a mock API used in testing.

🗑 **6️⃣ Delete Product Functionality**

* Users should be able to delete a product (DELETE request to FakeStoreAPI).

* Includes a confirmation modal before deletion.  
* After deletion, the user should be redirected to the product listing page.

**Note:** FakeStoreAPI will return a success response when you send a DELETE request, but the product will not actually be removed from the API data. This allows you to test the frontend interaction and behavior without altering real data.

🛠 **7️⃣ Navigation Bar**

* A React Bootstrap Navbar should be present across the app.  
* Should include links to:  
  * Home (/)  
  * Product Listing (/products)  
  * Add Product (/add-product)  
* The navbar should work properly in mobile view.

🛠 **8️⃣ Additional Features**

* Handle loading states (display loading indicators when fetching data).  
* Handle API errors (display user-friendly error messages).  
* Ensure mobile responsiveness using React Bootstrap.

---

✅ **Final Checklist Before Submission**

🚀 **Core Features**  
 ✅ Home page with navigation.  
 ✅ Fetch and display products on /products.  
 ✅ View individual product details on /products/:id.  
 ✅ Add, edit, and delete products with API interactions.

🎨 **Styling & Layout**  
 ✅ Uses React Bootstrap for styling and layout.  
 ✅ Fully responsive on desktop and mobile devices.

🔄 **API Handling**  
 ✅ Handles API loading states and errors.  
 ✅ Uses Axios or Fetch for API interactions.  
 ✅ Clearly communicates that FakeStoreAPI is a testing API—responses to POST/PUT/DELETE will appear successful, but the underlying data will not change permanently.

💡 **Code Structure**  
 ✅ Organized React components with reusable structure.  
 ✅ Uses React Router for navigation.

---

📤 **Submission Instructions**  
 🔹 Push your project to GitHub.  
 🔹 Submit your GitHub repository link in the assignment portal.

---

💯 **Grading Criteria (Total: 25 Points)**

| Criteria | Full Points (5 pts) | Partial (2–4 pts) | Needs Improvement (0–1 pts) |
| :---: | :---: | :---: | :---: |
| **State Management** | Uses useState properly | Minor issues with state | Missing or incorrect state usage |
| **API Handling** | Fetch, create, update, delete work correctly | Some API calls work | Major API failures |
| **Routing & Navigation** | React Router works properly | Minor navigation issues | Broken or missing routes |
| **Component Structure** | Components are well-organized | Some structure issues | Components are disorganized |
| **Styling & Layout** | Clean and responsive UI | Some layout issues | Poor styling or lack of responsiveness |

🎯 **Tips for Success**  
 ✅ Test API calls using Postman or browser before implementing them.  
 ✅ Break your UI into reusable components (e.g., ProductCard).  
 ✅ Use console logs to debug API calls.  
 ✅ Plan before coding\! Sketch layouts before writing JSX.

---

🎉 **Congratulations\!**  
 Once you’ve completed this project, you’ve built a fully functional E-Commerce front-end that interacts with a real API for testing and development practice\! 🚀


OK, so my main take aways from this project:
This was faster and easier to format to for smooth operation and appearance with bootstrap.

The Axios get, instead of the built-in fetch method made for an easier to read API grab, and the addition of react-router-dom made the navigation visually trackable.

useNavigate, useParam and useInterval were all new to me.
This was kinda fun. On to the next

--bonus, add to cart button added -- no functionality.


    <br />
    <a href="https://github.com/Slim-Beatnik/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Slim-Beatnik/repo_name">View Demo</a>
    &middot;
    <a href="https://github.com/Slim-Beatnik/repo_name/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/Slim-Beatnik/repo_name/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started. To avoid retyping too much info, do a search and replace with your text editor for the following: `Slim-Beatnik`, `repo_name`, `x`, `3dkylehill`, `gmail.com`, `totem64`, `Fake Store App`, `project_description`, `project_license`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/Slim-Beatnik/repo_name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin Slim-Beatnik/repo_name
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/Slim-Beatnik/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/Slim-Beatnik/repo_name/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Slim-Beatnik/repo_name" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Distributed under the project_license. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - totem64@gmail.com.com

Project Link: [https://github.com/Slim-Beatnik/repo_name](https://github.com/Slim-Beatnik/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Slim-Beatnik/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/Slim-Beatnik/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Slim-Beatnik/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/Slim-Beatnik/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/Slim-Beatnik/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/Slim-Beatnik/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/Slim-Beatnik/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/Slim-Beatnik/repo_name/issues
[license-shield]: https://img.shields.io/github/license/Slim-Beatnik/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/Slim-Beatnik/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/3dkylehill
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com

