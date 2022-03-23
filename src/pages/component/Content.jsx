import React, { useState, useEffect} from 'react';

function Content({users}) {



    return (
        <div>
        {users.map(user =>(
        <div className="main__content">
            <div className="main__cont-user">
                 <div className="main__cont-img">
                     <img src={user.image} alt="" srcset="" />
                </div>
                <div className="main__cont-message">
                    <p className="main__cont-main">{user.message}</p>
                    <p className="main__cont-sub">Updated {user.days_ago} day ago</p>
                </div>
            </div>
            <div className="main__cont-name">
                <p className="main__cont-main">{user.name}</p>
                <p className="main__cont-sub">on 24.05.2019</p>
            </div>
                            <div className="main__cont-date">
                                <p className="main__cont-main">{user.date}</p>
                                <p className="main__cont-sub">{user.time}</p>
                            </div>
                            <div className="main__cont-prior">
                                <p style={user.prior === 'low' ? {background: 'orange'} : user.prior === 'normal' ? {background: 'green'}: {background:"red"}}
                                >{user.prior}</p>
                            </div>
                            <div className="main__dots">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#C5C7CD" stroke="#C5C7CD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                            </div>
                        </div>
        ))}
                        </div>
    )
}

export default Content
