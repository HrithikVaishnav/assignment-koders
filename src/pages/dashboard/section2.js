import './style.css';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
const section2 = () => {

    return(
        <div className="mid-container">
            <div className="left-cont">
                <div className="kuch-head">
                    Users Overview
                </div>
                <div className="date-area">
                    <div className="data-left">
                        <div className="time-box">
                            <input
                                type="text"
                                onFocus={(e) => (e.currentTarget.type = "date")}
                                onBlur={(e) => (e.currentTarget.type = "text")}
                                placeholder="Start Time"
                            />
                            <input
                                type="text"
                                onFocus={(e) => (e.currentTarget.type = "date")}
                                onBlur={(e) => (e.currentTarget.type = "text")}
                                placeholder="End Time"
                            />
                            <DateRangeIcon/>
                        </div>
                    </div>
                    <button>View Full Report</button>
                </div>
            </div>
            <div className="right-cont">
                <div className="kuch-head">
                    Users by device
                </div>
            </div>
        </div>
    )
}

export default section2;