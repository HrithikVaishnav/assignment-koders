import './style.css';
const section3 = () =>{
    return(
        <div className="dis-item">
            <div className="item-1">
                <div className="kuch-head">
                    New Draft
                </div>
                <div className="draft-topic">
                    <input
                        type="text"
                        placeholder="Brave New World"
                    />
                </div>
                <div className="draft-cont">    
                    <input
                        type="text"
                        placeholder="Words can be like X-rays if you use them properly.."
                    />
                </div>
                <button>Create Draft</button>
            </div>

            <div className="item-2">
                <div className="kuch-head">
                    Discussions
                </div>

            </div>
            <div className="item-3">
                <div className="kuch-head">
                    Top Referrals
                </div>

                <div className="ref-name">
                   <p>Github</p>
                   <p>19,291</p>
                </div>
                <div className="ref-name">
                   <p>Stack Overflow</p>
                   <p>11,201</p>
                </div>
                <div className="ref-name">
                   <p>Hacker News</p>
                   <p>9,291</p>
                </div>
                <div className="ref-name">
                   <p>Reddit</p>
                   <p>8,281</p>
                </div>
                <div className="ref-name">
                   <p>The Next Web</p>
                   <p>7,128</p>
                </div>
                <div className="ref-name">
                   <p>Tech Crunch</p>
                   <p>6,218</p>
                </div>
                <div className="ref-name">
                   <p>Youtube</p>
                   <p>1,218</p>
                </div>
                <div className="ref-name">
                   <p>Adobe</p>
                   <p>1,171</p>
                </div>
                <div className="ref-last">
                   <div>
                       <select>
                           <option>Last Week</option>
                           <option>Today</option>
                           <option>Last Month</option>
                           <option>Last Year</option>
                       </select>
                   </div>
                   <p>Full report</p>
                </div>
            </div>
        </div>
    )
}

export default section3;