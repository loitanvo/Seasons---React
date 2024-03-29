import React from 'react';

const SeasonConfig ={
    summer: {
    text: 'lets hit the beach',
    iconName: 'sun'
    },
    winter: {
    text: 'burr it is cold',
    iconName: 'snowflake'
    }
    };


const getSeason = (lat, month) =>{
    if (month > 2 && month < 9) {
        //lat greater than 0. if true summer else winter
       return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' :  'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());

    const { text, iconName } = SeasonConfig[season];
    // const text = 
    //     season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'

    // const icon = season === 'winter' ? 'snowflake' : 'sun';


   console.log(season);
    return (
    <div> 
        <i className={`massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`massive ${iconName} icon`} />
    </div>
    );
};

export default SeasonDisplay;