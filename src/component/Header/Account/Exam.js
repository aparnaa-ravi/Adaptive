import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Validation from './Validation';

/*RULES AND REGULATION*/


const Main = () => {
    return (
        <div class="main">
            <center><h5>Welcome to exam portal</h5></center>
            <center><p>Rules and Regulation</p></center>
            <center><p>1. Each Candidate must observe the Examination rules as laid down in this article.<br />
                2. During the Examination, the conduct of the Candidate and the circumstances must
                enable EXIN to establish the identity and/or to test the knowledge, understanding
                    and/or skills of the Candidate in an adequate manner.<br />
                3. The Candidate must prove his/her identity prior to the Examination by means of a
                    valid ID, recognized by law and carrying a recent photo.<br />
            </p></center>
        </div>
    )
}


/*ADD TOPICS*/


const Topic = () => {
    return (
        <div>
            <div class="container">
                <h2>ADD TOPIC</h2>
                <div class="card">

                    <div align="center" class="card-body">


                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" >Topic Name</span>
                            </div>
                            <label for="inputtopicname" class="sr-only">Topic Name</label>
                            <input type="text" id="topicname" class="form-control" required autofocus />
                            <span class="error_form" id="topicname_error_message"></span>
                        </div>

                        <br />
                        <a class="btn btn-outline-primary" href="#" role="button">Add</a>
                        <button type="submit" class="btn btn-outline-primary">List</button>



                    </div>
                    <div class="col-sm-3">
                        {/*side we can use the space later*/}
                    </div>
                </div>
            </div>
        </div>
    )
}


/*ADD SUBTOPICS*/


const Subtopic = () => {
    return (

        <div>
            <div class="container">
                <h2>ADD TOPIC</h2>
                <div class="card">

                    <div align="center" class="card-body">


                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" >Topic Name</span>
                            </div>
                            <label for="inputtopicname" class="sr-only">Topic Name</label>
                            <input type="text" id="topicname" class="form-control" required autofocus />
                            <span class="error_form" id="topicname_error_message"></span>
                        </div><br />
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" >SubTopic Name</span>
                            </div>
                            <label for="inputtopicname" class="sr-only">Sub-Topic Name</label>
                            <input type="text" id="topicname" class="form-control" required autofocus />
                            <span class="error_form" id="topicname_error_message"></span>
                        </div>

                        <br />
                        <a class="btn btn-outline-primary" href="#" role="button">Add</a>
                        <button type="submit" class="btn btn-outline-primary">List</button>



                    </div>
                    <div class="col-sm-3">
                        {/*side we can use the space later*/}
                    </div>
                </div>
            </div>
        </div>
    )
}





/*CREATE QUESTIONS*/

const Questions = () => {
    return (

        <div>
            <div class="container">
                <h2>ADD QUESTION</h2>
                <div class="card">

                    <div align="center" class="card-body">


                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" >Topic Name</span>
                            </div>
                            <label for="inputtopicname" class="sr-only">Topic Name</label>
                            <input type="text" id="topicname" class="form-control" required autofocus />
                            <span class="error_form" id="topicname_error_message"></span><br />
                        </div><br />
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" >SubTopic Name</span>
                            </div>
                            <label for="inputtopicname" class="sr-only">Sub-Topic Name</label>
                            <input type="text" id="topicname" class="form-control" required autofocus />
                            <span class="error_form" id="topicname_error_message"></span>
                        </div><br />
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" >Question</span>
                            </div>
                            <label for="inputtopicname" class="sr-only">Question</label>
                            <textarea type="text" rows="3" id="topicname" class="form-control" required autofocus />
                            <span class="error_form" id="topicname_error_message"></span>
                        </div><br />

                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" >Option(1)</span>
                            </div>
                            <label for="inputtopicname" class="sr-only">Option1</label>
                            <input type="text" id="topicname" class="form-control" required autofocus />
                            <span class="error_form" id="topicname_error_message"></span>
                        </div>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" >Option(2)</span>
                            </div>
                            <label for="inputtopicname" class="sr-only">Option2</label>
                            <input type="text" id="topicname" class="form-control" required autofocus />
                            <span class="error_form" id="topicname_error_message"></span>
                        </div>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" >Option(3)</span>
                            </div>
                            <label for="inputtopicname" class="sr-only">Option3</label>
                            <input type="text" id="topicname" class="form-control" required autofocus />
                            <span class="error_form" id="topicname_error_message"></span>
                        </div>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" >Option(4)</span>
                            </div>
                            <label for="inputtopicname" class="sr-only">Option4</label>
                            <input type="text" id="topicname" class="form-control" required autofocus />
                            <span class="error_form" id="topicname_error_message"></span>
                        </div><br />

                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" >CorrectOption</span>
                            </div>
                            <label for="inputtopicname" class="sr-only">CorrectOption</label>
                            <input type="text" id="topicname" class="form-control" required autofocus />
                            <span class="error_form" id="topicname_error_message"></span>
                        </div><br />
                        <br />
                        <a class="btn btn-outline-primary" href="#" role="button">Add</a>
                        <button type="submit" class="btn btn-outline-primary">List</button>



                    </div>
                    <div class="col-sm-3">
                        {/*side we can use the space later*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
/*CREATE EXAM*/


const Createexam = () => {
    return (
        <div>
            <div class="container">
                <h2>Exam</h2>
                <div class="card" >
                <div align="left" class="card-body">
                <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" >Exam Name</span>
                            </div>
                            <label for="inputexamname" class="sr-only">Exam Name</label>
                            <input type="text" id="Examname" class="form-control" required autofocus />
                            <span class="error_form" id="Examname_error_message"></span><br />
                        </div>
                </div>
                <div class="col-sm-3">
                        {/*side we can use the space later*/}
                </div>
                </div>
            </div>
            <div class="container">
                <h2>CreateExam</h2>
                <div class="card">
                    <div align="center" class="card-body">

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" >Topic</span>
                            </div>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="input-group-append">
                            <a href="/Exam/Topic"><button class="btn btn-outline-secondary" type="button">AddTopic</button></a>
                        </div>


                        <br />
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">SubTopic</span>
                            </div>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="input-group-append">
                            <a href="/Exam/Subtopic"><button class="btn btn-outline-secondary" type="button">AddSubTopic</button></a>
                        </div>
                        <br />
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">No of Questions</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <br />

                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <input type="radio" name="gender" />
                                </div>
                            </div>
                            <input type="text" value="manual" class="form-control" />
                        </div>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <input name="" type="radio" />
                                </div>
                            </div>
                            <input type="text" value="random" class="form-control" />
                        </div>
                        <br />
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Description Of Exam</span>
                            </div>
                            <label for="inputtopicname" class="sr-only">Question</label>
                            <textarea type="text" rows="2" class="form-control" required autofocus />
                        </div><br />


                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" >TimeFrame</span>
                            </div>
                            <label for="inputtime" class="sr-only">TimeFrame</label>
                            <input type="time" name="usr_time" class="form-control" required autofocus />
                        </div>

                        <br />
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">SendTo</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="http://www.google.com/">To All</option>
                                <option value="2">ParticularUsers</option>
                            </select>
                        </div>
                        <br />
                        <button type="button" class="btn btn-outline-primary">Add</button>
                        <button type="button" class="btn btn-outline-primary">List</button>

                    </div>
                </div>
                <div class="col-sm-3">
                    {/*side we can use the space later*/}
                </div>
            </div>
        </div>

    )
}


/*EDIT PROFILE*/


const Edit = () => {
    return (
      <div>  
            
        
          </div>
    )
}

const Change = () => {
    console.log(window.location.pathname);
    return (
        <React.Fragment>
            <Route exact={true} path="/Exam/Main" component={Main} />
            <Route exact={true} path="/Exam/Topic" component={Topic} />
            <Route exact={true} path="/Exam/Subtopic" component={Subtopic} />
            <Route exact={true} path="/Exam/Questions" component={Questions} />
            <Route exact={true} path="/Exam/Createexam" component={Createexam} />
            <Route exact={true} path="/Exam/Edit" component={Edit} />
        </React.Fragment>
    )
}

class Exam extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div class="sidenav">

                        <Link to="/Exam/"></Link>
                        <Link to="/Exam/Topic">Topic</Link>
                        <Link to="/Exam/Subtopic">Subtopic</Link>
                        <Link to="/Exam/Questions">Questions</Link>
                        <Link to="/Exam/Createexam">Createexam</Link>
                        <Link to="/Exam/Edit">Editprofile</Link>


                    </div>

                    <div style={{ paddingLeft: 200 }} >
                        <Route exact={true} path="/Exam/" component={Main} />
                        <Route exact={true} path="/Exam/Topic" component={Topic} />
                        <Route exact={true} path="/Exam/Subtopic" component={Subtopic} />
                        <Route exact={true} path="/Exam/Questions" component={Questions} />
                        <Route exact={true} path="/Exam/Createexam" component={Createexam} />
                        <Route exact={true} path="/Exam/Edit" component={Edit} />
                    </div>

                </div>
            </BrowserRouter>

        )
    }
}

export default Exam;