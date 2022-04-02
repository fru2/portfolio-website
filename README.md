This is my [portfolio website](https://utsav-anand.com) which is built with [create-react-app](https://create-react-app.dev) which uses [SCSS](https://sass-lang.com) for styling and [GSAP](https://greensock.com/gsap/) for animation.


## How to run the web app:

To download the source code, open CMD and type:

`git clone https://github.com/fru2/portfolio-website.git`

Locate to the folder

`cd <path_of_the_folder>/portfolio-website`

> Make sure that [NODE JS](https://nodejs.org/en/download/) is installed.

To install the pre-requisite modules, type 
`npm install`

To run this web app, type
`npm start` 
and it will open an instance on your browser with the url https://127:0.0.1:3000



## Directory structure
    
    ├── build                   # Compiled files (`npm build`)
    ├── node_modules             
    ├── public                   
    ├── src                     # Source files
    │   ├── assets              # Media files that will be shipped with the bundle
    │   │   ├── icons
    │   │   └── images
    │   ├── components          # Reusable react components (to be used in pages)
    │   ├── data                # Data for the projects section
    │   ├── pages               # Diffenent pages (routes)
    │   ├── styles              # Stylesheets
    │   │   ├── layouts         # Styles for certain component or section 
    │   │   ├── modules         # Styles independent to html element
    │   │   └── ...
    │   └── ...
    └── ...
