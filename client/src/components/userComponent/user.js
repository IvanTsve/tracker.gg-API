import user from './user.css';

import { useState, useEffect } from 'react';
import config from '../../helpers/config';
import fetchData from '../../helpers/fetchData';



function User() {
    const [data, setData] = useState();
    const [weaponData, setWeaponData] = useState();
    const [renderState, setRenderState] = useState();

    useEffect(async () => {
        const userResp = await fetchData(config.USER_URL);
        const userData = await userResp.json();
        const weaponsResp = await fetchData(config.WEAPONS_URL);
        const weaponsData = await weaponsResp.json();

        setData({
            userInfo: userData.platformInfo,
            userData: userData.segments[0].stats,
            weaponsData: weaponsData,
        })
    }, []);

    async function weaponsHander(e) {
        setRenderState(false);
        console.log(renderState);
    }

    async function userHandler() {
        setRenderState(true);
    }

    function weaponDetailsHandler(e) {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }
        let selectedWeapon = data.weaponsData.find(x => x.attributes.key === e.target.parentNode.id);
        setWeaponData(selectedWeapon);
    }

    if (!data) {
        return <h1>loading</h1>
    }
    return (
            <div className="container">
                <div className="user-side">
                    <h1>{data.userInfo.platformUserHandle}</h1>
                    <div className="player-container">
                        <img src={data.userInfo.avatarUrl} alt='user steam photo' className="user-photo" />

                    </div>
                    <button className='main-cta' onClick={weaponsHander}>Weapons</button>
                    <button className='main-cta' onClick={userHandler}>Status</button>
                    <div className='weapons-container' onClick={weaponDetailsHandler}>
                        <>
                            {data.weaponsData ?
                                data.weaponsData.map(x => {
                                    return (
                                        <div className="weapon-container" key={x.attributes.key} id={x.attributes.key}>
                                            <img src={x.metadata.imageUrl} alt={x.metadata.imageUrl} />
                                            <button>Details</button>
                                        </div>
                                    )
                                })
                                : null
                            }
                        </>
                    </div>
                </div>
                <div className='details-container'>
                    {renderState ? <>
                        {data.userData ? <ul className="hits">
                            <li><span className="bodyPart">head:</span><span className="hits-percent">{data.userData.headshotPct.value}%</span><span
                                className="hits-number">{data.userData.headshots.value} hits</span></li>
                            <li><span className="bodyPart">kills:</span><span className="hits-percent">{data.userData.kills.value}</span><span
                                className="hits-number">{data.userData.shotsHit.value} hits</span></li>
                            <li><span className="bodyPart">Rounds Won:</span><span className="hits-percent">{data.userData.roundsWon.value}</span><span
                                className="hits-number">321321 hits</span></li>
                        </ul> : null}
                    </> :
                        <>
                            {weaponData ? <>
                                <div>
                                    <h1>{weaponData.attributes.key}</h1>
                                    <h5>{weaponData.attributes.categoryKey}</h5>
                                    <h2>Kills</h2>
                                    <p>{weaponData.stats.kills.value}</p>
                                    <h2>Accuracy</h2>
                                    <p>{(weaponData.stats.shotsAccuracy.value).toFixed(2)}%</p>
                                    <h2>Shot hits</h2>
                                    <p>{weaponData.stats.shotsHit.value}</p>
                                </div>
                            </> : <h1>Select weapons</h1>}
                        </>
                    }
                </div>

            </div>

    )
}

export default User;