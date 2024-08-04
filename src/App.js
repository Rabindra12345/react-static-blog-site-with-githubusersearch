// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {GitHubUser}  from './components/githubuser.component';
import { NavBar } from './components/navbar/navbar.component';
import { BlogFooter } from './components/footer/blog-footer.component';
import { UserForm } from './components/form/user-form.component';
class App extends Component{

  constructor(){
    super();
  };

  render(){
    return (
      <div className="App">
        <NavBar/>
        <GitHubUser />
        <br/><br/>
        <UserForm/>
        <div className='about-page'>
          <h2>About me:</h2>
          <p>Hey there! I’m Rabindra, a passionate Java developer with over 2 years of experience. Currently, I’m diving into the exciting world of JavaScript to enhance my skills even further. 🚀
            🌐 As an IT student based in Kathmandu, Nepal, I thrive on creating web apps and have a soft spot for web design. My goal? To become a front-end developer and bring my design interests to life.
            🤝 I pride myself on being nice, loyal, and having a killer sense of humor (just ask my friends!). I’m always up for meeting new people, exploring fresh perspectives, and connecting with fellow enthusiasts.
            🌍 When I’m not coding, you’ll find me trekking, hiking, and seeking adventure. I love delving deep into the unknown, whether it’s exploring hidden corners of the world or diving into a good book. ⚡
            🏈 Oh, and did I mention I’m a football fan? 📚 Feel free to check out some of my posts on my blog: Rabindra’s Blog.</p>
        </div>
        <BlogFooter/>
      </div>
    );
  }
}




// function App() {
//   return (
   
//   );
// }

export default App;
