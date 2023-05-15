import React, {useEffect, useState} from 'react'

const WowData = () => {

    const characterList = [`Erzenkhel`,`Zenkel`];

    const [characterData, setCharacterData] = useState(null);

    async function raiderioApiCall (character, characterList) {
        await fetch(`https://raider.io/api/v1/characters/profile?region=eu&realm=Archimonde&name=${characterList[character]}`)
        .then(response => response.json())
        .then(data => {
            setCharacterData({...characterData, [character]: data});
        })
        .catch(error => console.log(error));
    }

    useEffect(() => {
        for (const character in characterList) {
            raiderioApiCall(character, characterList )
        }
    }, []);

    return(
        <div>
            {characterData ? <pre>{JSON.stringify(characterData, null, 2)}</pre> : 'Loading...'}
        </div>                  
    )
};

export default WowData;