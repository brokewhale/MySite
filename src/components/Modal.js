import React from 'react';
import ReactDOM from 'react-dom';
import myAvatar from '../img/myAvatar.png';
import { FaTimes } from 'react-icons/fa';



const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <div className="modal-overlay" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                        <FaTimes />
                    </button>
                </div>
                <div className="modal-content">
                    <div className="modalinfo">
                        <h2 className='modalinfo_title'>Hi! i'm Hussein  <span role="img" aria-label="wave hand"> 👋</span>  </h2>

                        <p > I'm Yusuf Kehinde Hussein, front-end developer and an Hardware Engineer based in Ogun Sate, Nigeria.</p>
                        <p > I am a hard working and dedicated developer witha keen eye for detail, and determination to deliver the best quality.</p>

                        <p > The main areas of my experties are HTML(5), CSS(3), SCSS and JavaScript (vanilal and React).</p>

                        <p > I sepcialise in responsive web design (RWD) and i use version control systems (GIT) to maintain my code.</p>
                        <p> I am also an Hardware developer with goal of building and developing of well optimized and cost efficient project.
                        I have developed skills in hardware development with MATLAB, Python, C programming language, Embeded System design and Circuit design.
                                </p>
                        <p > <strong> Intrested in working with me?</strong> <a href="mailto:yusufkehinde11@mail.com">Get in Touch</a> and i'd be happy to talk to you.</p>

                    </div>
                    <div className="modalimg">
                        <img src={myAvatar} alt="avatar" />
                    </div>

                </div>
            </div>


        </div>

    </React.Fragment >, document.body
) : null;

export default Modal;