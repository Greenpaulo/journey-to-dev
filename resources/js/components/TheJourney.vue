<template>
  <div class="animated fadeIn">
    <div class="container my-5">
      <h1 class="display-4 mb-4 text-center">The Journey</h1>

      <section id="intro">
        <div class="icon-text-group my-4" >
          <i class="fas fa-laptop-code fa-3x text-info py-2"></i>
          <p class="px-4">Journey To Dev is a guide for learning full stack web development. It was born out of the need for a online curriculum for self-taught prospective developers.
          </p>
        </div >
        <div class="icon-text-group my-4">
          <i class="fas fa-road fa-3x text-stage3 mt-2"></i>
          <p class="px-4">On this site you will be able to make your own "Roadmap" to plan you own journey to becoming a web developer!
          </p>
        </div>
        <div class="icon-text-group my-4">
          <i class="fas fa-graduation-cap fa-3x text-success py-2"></i>
          <p class="px-4">The journey to full stack web developer comprises of nine stages. Details of each stage and the technologies you will need to learn are listed below.
          </p>
        </div>
        <div class="icon-text-group my-4">
          <i class="fas fa-exclamation fa-3x text-danger py-2 px-3"></i>
          <p class="px-4 mt-2"><span class="important">NOTE:</span> You don't need to learn everything contained in every stage! (See stage for details)
          </p>
        </div>
      </section>
      <hr>
      
      <h3 id="stages-heading" class="mt-5 text-center">The Stages</h3>
      
      <section class="p-3 my-2">
        <div class="card stage-section border-stage1 p-4 my-5" id="stage-one">
          <div class="card-header"><h3>Stage One</h3><h5 class="stage-heading text-stage1 mx-3 py-2">HTML & CSS</h5></div>
          <div class=" card-body">
            <div class="icon-text-group my-4">
              <a href="https://www.w3schools.com/html/html5_intro.asp" target="_blank"><img src="/images/html5.png" alt="html5 logo"></a>
              <p class="px-3 my-2"><span class="text-lighter">HTML</span> is a markup language that describes the content and layout of a website.
              </p>
            </div>
            <div class="icon-text-group my-4">
              <a href="https://www.w3schools.com/Css/css_intro.asp" target="_blank"><img class="pl-2" src="/images/css3.png" alt="css3 logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">CSS</span> (Cascading Style Sheets) is a style sheet language that adds style to your html document/website, adding fonts and colours etc.
              </p>
            </div>
          </div>
        </div>
        
        <div class="card stage-section border-stage2 p-4 mb-5" id="stage-two">
          <div class="card-header"><h3>Stage Two</h3><h5 class="stage-heading text-stage2 mx-3 py-2">CSS Frameworks</h5></div>
          <div class=" card-body">
            <h5>Choose One:</h5>
            <div class="icon-text-group my-4">
              <a href="https://getbootstrap.com/" target="_blank"><img src="/images/bootstrap.png" alt="bootstrap logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">Bootstrap</span>, a sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.
              </p>
            </div>
            <div class="icon-text-group my-2">
              <a href="https://materializecss.com/" target="_blank" class="pl-2 my-4"><img id="materialize-logo" src="/images/materialize.png" alt="materialize logo"></a>
              <p class="px-4 my-4"><span class="text-lighter">Materialize</span> is a modern responsive CSS framework based on Material Design by Google.
              </p>
            </div>
          </div>
        </div>

        <div class="card stage-section border-stage3 p-4 mb-5" id="stage-three">
          <div class="card-header"><h3>Stage Three</h3><h5 class="stage-heading text-stage3 mx-3 py-2">JavaScript</h5></div>
          <div class=" card-body">
            <div class="icon-text-group my-4">
              <a href="https://www.w3schools.com/Js/" target="_blank"><img src="/images/javascript.png" alt="javascript logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">JavaScript</span> is the programming language of the web. Before learning any JS frameworks it's a good idea to become competent in "vanilla" JavaScript.
              </p>
            </div>
          </div>
        </div>

        <div class="card stage-section border-stage4 p-4 mb-5" id="stage-four">
          <div class="card-header"><h3>Stage Four</h3><h5 class="stage-heading text-stage4 mx-3 py-2">Front-End JS Frameworks</h5></div>
          <div class=" card-body">
            <h5>Choose One:</h5>
            <div class="icon-text-group my-4">
              <a href="https://reactjs.org/" target="_blank"><img src="/images/react.png" alt="react.js logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">React</span> is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.
              </p>
            </div>
            <div class="icon-text-group my-4">
              <a href="https://vuejs.org/" target="_blank"><img src="/images/vue.png" alt="vue.js logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">Vue</span> is a progressive framework for building user interfaces. An incrementally adoptable ecosystem that scales between a library and a full-featured framework.
              </p>
            </div>
            <div class="icon-text-group my-4">
              <a href="https://angularjs.org/" target="_blank"><img src="/images/angular.png" alt="angular.js logo"></a>
              <p class="my-2"><span class="text-lighter">Angular</span> is a Javascript framework used for building MVC based applications.
              </p>
            </div>
          </div>
        </div>

        <div class="card stage-section border-stage5 p-4 mb-5" id="stage-five">
          <div class="card-header"><h3>Stage Five</h3><h5 class="stage-heading text-stage5 mx-3 py-2">Server Side Languages</h5></div>
          <div class=" card-body">
            <h5>Choose One:</h5>
            <div class="icon-text-group my-4">
              <a href="https://nodejs.org/en/" target="_blank"><img src="/images/Node.png" alt="node.js logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">Node.js</span> is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript on the server-side.
              </p>
            </div>
            <div class="icon-text-group my-4">
              <a href="https://www.php.net/manual/en/intro-whatis.php" class="pr-2" target="_blank"><img src="/images/php.png" alt="php logo"></a>
              <p class="px-2 my-2"><span class="text-lighter">PHP</span> is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.
              </p>
            </div>
            <div class="icon-text-group my-4">
              <a href="https://www.python.org/" target="_blank"><img src="/images/python.png" alt="python logo"></a>
              <p class="px-3 my-2"><span class="text-lighter">Python</span> is an interpreted, high-level, general-purpose programming language.
              </p>
            </div>
            <div class="icon-text-group my-4">
              <a href="https://docs.microsoft.com/en-us/dotnet/csharp/getting-started/introduction-to-the-csharp-language-and-the-net-framework" target="_blank"><img src="/images/c-sharp.png" alt="c# logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">C#</span> is a simple, modern, general-purpose, object-oriented programming language developed by Microsoft.
              </p>
            </div>
          </div>
        </div>

        <div class="card stage-section border-stage6 p-4 mb-5" id="stage-six">
          <div class="card-header"><h3>Stage Six</h3><h5 class="stage-heading text-stage6 mx-3 py-2">Databases </h5></div>
          <div class=" card-body">
            <div class="icon-text-group my-4">
              <a class="px-2" href="https://www.w3schools.com/sql/" target="_blank"><img src="/images/sql.png" alt="sql logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">SQL</span> (Structered Query Language) is a standard language for storing, manipulating and retrieving data in databases.
              </p>
            </div>
            <div class="icon-text-group my-4">
              <a href="https://www.mysql.com/" target="_blank"><img src="/images/mysql.png" alt="mysql logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">MySQL</span> is an open-source relational database management system.
              </p>
            </div>
            <div class="icon-text-group my-4">
              <a class="pl-1 pr-2" href="https://www.mongodb.com/" target="_blank"><img src="/images/mongodb.png" alt="mongodb logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">MongoDB</span> is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema.
              </p>
            </div>
          </div>
        </div>

        <div class="card stage-section border-stage7 p-4 mb-5" id="stage-seven">
          <div class="card-header"><h3>Stage Seven</h3><h5 class="stage-heading text-stage7 mx-3 py-2">Server Side Frameworks </h5></div>
          <div class=" card-body">
            <h5>Choose One:</h5>
            <div class="icon-text-group my-4">
              <a href="https://expressjs.com/" target="_blank"><img src="/images/express.png" alt="express logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">Express</span> is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
              </p>
            </div>
            <div class="icon-text-group my-4">
              <a href="https://laravel.com/" target="_blank"><img src="/images/laravel.png" alt="laravel logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">Laravel</span> is a free, open-source PHP web framework, intended for the development of web applications following the model-view-controller (MVC) architectural pattern.
              </p>
            </div>
            <div class="icon-text-group my-4">
              <a href="https://docs.microsoft.com/en-us/aspnet/" target="_blank"><img src="/images/asp-net.png" alt="asp.net logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">ASP.NET</span> is an open-source server-side web application framework designed by Microsoft for web development to produce dynamic web pages.
              </p>
            </div>
            <div class="icon-text-group my-4">
              <a href="https://www.djangoproject.com/" target="_blank"><img src="/images/django.png" alt="django logo"></a>
              <p class="px-3 my-2"><span class="text-lighter">Django</span> is a Python-based free and open-source web framework, which follows the model-template-view architectural pattern.
              </p>
            </div>
          </div>
        </div>

        <div class="card stage-section border-stage8 p-4 mb-5" id="stage-eight">
          <div class="card-header"><h3>Stage Eight</h3><h5 class="stage-heading text-stage8 mx-3 py-2">Version Control </h5></div>
          <div class=" card-body">
            <div class="icon-text-group my-4">
              <a href="https://git-scm.com/" target="_blank"><img src="/images/git.png" alt="git logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">Git</span> is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency
              </p>
            </div>
            <div class="icon-text-group my-4">
              <a href="https://github.com/" target="_blank"><img src="/images/github.png" alt="github logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">Github</span> is an American company that provides hosting for software development version control using Git. 
              </p>
            </div>
          </div>
        </div>

        <div class="card stage-section border-stage9 p-4 mb-5" id="stage-nine">
          <div class="card-header"><h3>Stage Nine</h3><h5 class="stage-heading text-stage9 mx-3 py-2">Deployment</h5></div>
          <div class=" card-body">
            <div class="icon-text-group my-4">
              <a href="https://www.netlify.com/" target="_blank"><img src="/images/netlify.png" alt="netlify logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">Netlify</span> is a cloud computing company that offers hosting and serverless backend services for static websites.
              </p>
            </div>
            <div class="icon-text-group my-4">
              <a href="https://www.digitalocean.com/" target="_blank"><img src="/images/digitalocean.png" alt="digital ocean logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">DigitalOcean</span> is a cloud infrastructure provider with data centers worldwide. DigitalOcean provides developers cloud services that help to deploy and scale applications that run simultaneously on multiple computers. 
              </p>
            </div>
            <div class="icon-text-group my-4">
              <a href="https://www.ssh.com/ssh/" target="_blank"><img src="/images/ssh2.png" alt="ssh logo"></a>
              <p class="px-4 my-2"><span class="text-lighter">SSH</span> (Secure Shell) is a cryptographic network protocol for operating network services securely over an unsecured network.  
              </p>
            </div>
          </div>
        </div>
          
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './Footer';

export default {
  name: 'TheJourney',
  components: {
    Footer
  },
  mounted(){
    window.scrollTo(0, 0);
  }
}
</script>

<style lang='scss' scoped>

@import 'resources/sass/variables';
@import 'resources/sass/colors';
 
.icon-text-group {
    display: flex;
    margin: 1.7rem 0;
}

section#intro {
  border-bottom: 2px solid rgb(202, 195, 195);
  padding: 1rem 1rem 2rem 1rem;

  .important {
    font-weight: bolder;
    color: lighten(rgb(202, 195, 195), 30%);
  }
}

p {
  font-size: 1.4rem !important;
  line-height: 2.2rem;
  // color: rgb(202, 195, 195);
  color: darken(white, 15%);
}

.card-header > h3 {
  color: white;
  display: inline;
}

h5.stage-heading {
  display: inline;
}

img {
  max-height: 70px;
}

img[src="/images/angular.png"] {
  padding: 0 0 0.5rem 0.5rem;
}

img[src="/images/php.png"] {
  max-height: 50px;
  margin-top: 0.5rem;
}

img[src="/images/ssh2.png"] {
  max-width: 70px;
  margin-top: 0.5rem;
}

a[href="https://angularjs.org/"] + p {
  padding: 0 1.5rem 0 1.8rem;
}

a[href="https://www.python.org/"] + p {
  padding: 0 1.5rem 0 2rem;
}

a[href="https://www.w3schools.com/sql/"] + p {
  margin-left: 0.75rem;
}

#materialize-logo {
  max-width: 70px;
  max-height: 30px;
}

.stage-section {
  background-color: lighten(rgb(19, 18, 18), 5%);
  border-radius: 0 20px 0 20px;
  box-shadow: -5px 5px 10px -2px darken($body-bg, 2%);
}

.header {
  border-bottom: 2px solid lighten($body-bg, 10%); 
}

.text-lighter {
  color: darken(#fff, 15%);
}

// Media Queries
//  Ipad Pro
@media (max-width: 1024px){
 
  img[src="/images/materialize.png"], 
  img[src="/images/javascript.png"], 
  img[src="/images/vue.png"]  {
    margin-top: 1rem;
  }

}

// Ipad and large phone landscape
@media (max-width: 900px){

}

// Smartphones with larger screens
@media(max-width: 742px) {

  h1 {
    margin-bottom: 0 !important;
  }

  .icon-text-group {
    flex-direction: column;
    text-align: center;

    i {
      margin-bottom: 1rem;
    }
  }

  p {
  font-size: 1.2rem !important;
  line-height: 2.2rem;
  // color: rgb(202, 195, 195);
  color: darken(white, 15%);
  padding: 0 !important;
  }

  .stage-section, .stage-heading{
    text-align: center;
  }

  .card-header {

    padding-bottom: 1rem;

    &>h3, h5 {
      display: block;
    }

    &>h3 {
      font-size: 2.3rem;
    }
  }

  .card-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }

  a[href="https://materializecss.com/"] {
    margin: 0 !important;
  }

    img[src="/images/javascript.png"]{
    margin-bottom: 1rem;
    margin-top: 0;
  } 
}

// Smartphones with width 360px
@media (max-width: 360px){

  .card-header {

    &>h3 {
      font-size: 2rem;
    }

    h5 {
      font-size: 1.2rem;
    }
  }
}

</style>