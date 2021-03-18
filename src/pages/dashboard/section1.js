import React from 'react';
import './style.css';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const section1 = () => {
    return(
        <div>
            <div className="items">
                <div className="item">
                    <div className="topic">POSTS</div>
                    <div className="Number">2,390</div>
                    <div className="grow">
                        <div className="icons-g">
                            <ArrowDropUpIcon/>
                        </div>
                        <div className="growth">4.7%</div>
                    </div>
                </div>

                <div className="item">
                    <div className="topic">PAGES</div>
                    <div className="Number">182</div>
                    <div className="grow">
                        <div className="icons-g">
                            <ArrowDropUpIcon/>
                        </div>
                        <div className="growth">12.4%</div>
                    </div>
                </div>

                <div className="item">
                    <div className="topic">COMMENTS</div>
                    <div className="Number">8,147</div>
                    
                    <div className="grow">
                        <div className="icon">
                            <ArrowDropDownIcon/>
                        </div>
                        <div className="growth neg">3.8%</div>
                    </div>
                </div>

                <div className="item">
                    <div className="topic">NEW CUSTOMER</div>
                    <div className="Number">29</div>
                    
                    <div className="grow">
                        <div className="icon">
                            <ArrowDropDownIcon/>
                        </div>
                        <div className="growth neg">2.71%</div>
                    </div>
                </div>

                <div className="item">
                    <div className="topic">SUBSCRIBES</div>
                    <div className="Number">17,281</div>
                    <div className="grow">
                        <div className="icon">
                            <ArrowDropDownIcon/>
                        </div>
                        <div className="growth neg">2.4%</div>
                    </div>

                </div>
            </div>  
        </div>
    )
}

export default section1;