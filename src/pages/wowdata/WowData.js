import React, {useEffect, useState} from 'react'

const WowData = () => {

    const characterList = ['Erzenkhel','Zenkel'];

    const [character, setCharacter] = useState(characterList[0]);
    const [characterData, setCharacterData] = useState(null);

    async function raiderioApiCall (character) {
        await fetch(`https://raider.io/api/v1/characters/profile?region=eu&realm=Archimonde&name=${character}`)
        .then(response => response.json())
        .then(data => {
            setCharacterData(data);
        })
        .catch(error => console.log(error));
    }

    const handleCharacterChange = (event) => {
        setCharacter(event.target.value);
        raiderioApiCall(event.target.value);
    }

    useEffect(() => {
        setCharacterData(raiderioApiCall(character));
    }, [character]);

    return(
        <>
            <select onChange={handleCharacterChange}>
                {characterList.map((character, index) => {
                    return <option key={index} value={character}>{character}</option>
                })}
            </select>
            <div>
                {characterData ? <pre>{JSON.stringify(characterData,null,2)}</pre> : 'Loading...'}
            </div>
        </>            
    )
};

export default WowData;