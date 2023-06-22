// import logo from './logo.svg';
// import { Component, useState } from 'react';
// import { styled } from 'styled-components';
import { Suspense } from 'react';
import './App.css';
import LazyLoading from './lazyLoading';
// import ReactList from './ReactList';
// import Ytsstyled from './Ytsstyled';
// import Quote from './usestate';
// import { YtData } from './utils/common';
// import Card from './Card';
// import ClassEuipment from './R';
// import Form from './Form';
// import Conditionalrender from './conditionalrender';
// import Button from './button';
// import Boxes from './box';
// import { useState } from 'react';
// import Button from './button2';
// export const colors = ["black", "red", "green", "blue", "yellow", "pink", "cyan", "skyblue", "purple"];ઇ
// export const words = ["Success", "Faliure", "Motivation", "Work hard", "Learning", "Belive", "Don't judge"];



// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: true,
//       videoLink: ""
//     }
//   }
function App() {
  //   const [videoLink, setVideoLink] = useState("");

  //   console.log(videoLink);

  //   const link = videoLink.replace('watch?v=', 'embed/')
  // const [count,setCount] = useState(0);
  // const [color, setColor] = useState([{ color: "" }, { color: "" }, { color: "" }, { color: "" }, { color: "" }, { color: "" }])
  // const duplicateArray = Array.from({ length: 100 });
  // const colors = ["red", "green", "blue", "yellow", "pink", "cyan", "skyblue", "purple"];
  // function onClick(index) {
  //   const upDateArray = color.map((ele, i) => {
  //     if (index === i) {
  //       return {
  //         color: colors[Math.floor(Math.random() * colors.length)]
  //       }
  //     }
  //     else { return ele }
  //   })
  //   setColor(upDateArray)
  // render(){

  // }
  return (
    <>

      <div className="App">
        <Suspense fallback={<h1>...loading</h1>}>
        <LazyLoading />
        </Suspense>
        {/* <Card cource={"Web developmnet"} dob={"19/07/2002"} grno={"1020"} name={"Rupen Desai"} address={"Atmiya bunglows"}/> */}
        {/* <ClassEuipment label={"Room 1"} fan={"15"} /> */}
        {/* <Conditionalrender isLoggedIn={"s"}/> */}
        {/* <Form /> */}
        {/* <h1> this button is {this.state.count > 10 ? 0 : this.state.count}</h1> */}
        {/* {this.state.count ?
        <h1>Rupen</h1>
        :
        <h1>Darshil</h1>}
        <button onClick={() => this.setState({ count: !this.state.count })}>Click me</button> */}
        {/* colors[Math.floor(Math.random() * colors.length)] */}

        {/* <Post src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" content={"Wikis are enabled by wiki software, otherwise known as wiki engines. A wiki engine, being a form of a content management system, differs from other web-based systems such as blog software, in that the content is created without any defined owner or leader, and wikis have little inherent structure, allowing structure to emerge according to the needs of the users. Some wiki engines are free and open-source, whereas others are proprietary. Some permit control over different functions (levels of access); for example, editing rights may permit changing, adding, or removing material. Others may permit access without enforcing access control. Other rules may be imposed to organize content.A wiki invites all users—not just experts—to edit any page or to create new pages within the wiki web site, using only a standard 'plain-vanilla' Web browser without any extra add-ons.A wiki is not a carefully crafted site created by experts and professional writers and designed for casual visitors. Instead, it seeks to involve the typical visitor/user in an ongoing process of creation and collaboration that constantly changes the website landscape."} />
      <Post src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswR24076fmtGT5E1nuJCZJ_WaUbp9bczZnQ&usqp=CAU" content={"Wiki engines usually allow content to be written using a simplified markup language and sometimes edited with the help of a rich-text editor.[2] There are dozens of different wiki engines in use, both standalone and part of other software, such as bug tracking systems.The online encyclopedia project Wikipedia is the most popular wiki-based website, and is one of the most widely viewed sites in the world, having been ranked in the top twenty since 2007.[7] Wikipedia is not a single wiki but rather a collection of hundreds of wikis, with each one pertaining to a specific language. The English-language Wikipedia has the largest collection of articles: as of February 2020, it has over 6 million articles.Wiki promotes meaningful topic associations between different pages by making page link creation intuitively easy and showing whether an intended target page exists or not.A wiki enables communities of editors and contributors to write documents collaboratively. All that people require to contribute is a computer, Internet access, a web browser, and a basic understanding of a simple markup language (e.g. MediaWiki markup language). A single page in a wiki website is referred to as a "} />
     */}

        {/* <Quote/> */}

        {/* <ReactList/> */}
        {/* <Maindiv>
          {YtData.map(yt => (
            <Ytsstyled {...yt} onClick={(link) => setVideoLink(link)} />

          ))}
        </Maindiv>
                                      
        {videoLink && <Iframe src={link} title="The BEST 5 Side Hustles (2023)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>}   */}



        {/* <Button></Button>
      <Button content={"Submit"}></Button>
      <Button content={"Reset"}></Button>
      <Button content={"Back"}></Button> */}

        {/* <Boxes color={"red"}></Boxes>
      <Boxes color={"blue"}></Boxes>
      <Boxes color={"green"}></Boxes>
    </div> */}
        {/* <div className="App">
      <Boxes color={"aqua"}></Boxes>
      <Boxes color={"gray"}></Boxes> */}
        {/* </div> */}



        {/* {color.map((ele, i) => (
          <Boxes index={i} color={ele.color} onClick={onClick}></Boxes>
        ))} */}
        {/* {
        count ?
        <h1>Rupen</h1>
        :
        <h1>Darshil</h1>
      } */}

        {/* <h1>
        this button is for {count} click.
      </h1>
        <button onClick={() => setCount(count >=10 ? count: count + 1)}>Click me</button> */}
        {/* <Button title={"This is class component"} /> */}
        {/* <Button title={"This is function component"} /> */}
      </div>
    </>

  );
}

// const Maindiv = styled.div`

// width: 90%;
// gap: 25px;
// margin: auto;
// margin-top: 10px;
// display: grid;
// grid-template-columns: repeat(3, 1fr);

// @media (max-width: 576px) {
//   grid-template-columns: 1fr;
// }

// @media (min-width: 576px) and (max-width: 992px) {
//   grid-template-columns: repeat(2, 1fr);
// }
// `;

// const Iframe = styled.iframe`
// min-height: 100vh;
// min-width: 100vw;
// position: fixed;
// top: 0;
// left: 0;
// `

export default App;
