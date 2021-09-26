import React, { Component } from 'react';
import {
    NavLink,
    BrowserRouter as Router,
  } from "react-router-dom";

class guide extends Component {
    render(){
        return(
            <div className = "container">  
                <h2>User Guide</h2>
                    <p>Hello practitioners.</p>
                    <p>Welcome to SEPER for all the information on SE practices</p>
                    <p>SEPER is a database which stores academic papers about SE practices. SEPER will show you the SE practice, the proposed benefits of the practice and how strong the evidence is for the claimed benefits of the SE Practice. Please be aware we cannot provide access to the articles itself as it would be in violation of copyright rules. You are also able to submit an article on a SE Practice for our analysts to review and it will be added to the database. </p>
                <h3>Search for Articles on SE practices</h3>
                    <p>You may search for an article on the <a><NavLink to = "/SEPractice">Select the Practice</NavLink></a> page. This will take you to a table which shows you the title, author, source, publication year and the DOI of the article, the SE practice it is about, its claimed benefit and level of evidence. </p>
                    <p>You can sort through the articles using the drop-down menus at the top right part of the table. You can sort by Practice, Level of Evidence and Claimed benefits.</p>
                <h3>Submit an Article</h3>
                    <p>You may submit an article for review on the <a><NavLink to = "/submit">Submit a Practice</NavLink></a> page. You will need to supply bibliographic details about the article you wish to be reviewed. Please fill in as many fields as you can. Alternatively, you can upload a bibtext file on the article. Leave the fields blank and click the ‘choose file’ button and upload your file. This will fill in the form for you. Make sure you click the submit button to submit the article. </p>
                    <p>After you submit the article, the article will be reviewed by our moderation team and then sent to our analyst. After the article has been analysed your submitted article will appear in our database. </p>
                                        
            </div> 
        );
    }

};

export default guide;