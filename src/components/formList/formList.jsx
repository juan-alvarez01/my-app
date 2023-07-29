
export default function formList({ characters }) {
    return (
      <ul className="character-list">
      {characters.map((character) => (
        <li key={character.id} >
          <img src={character.image} alt="Character" />
          <p>Name: {character.name}</p>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin}</p>
          <p>Location: {character.location}</p>
          <p>Episodes: {character.episodes}</p>
        </li>
      ))}
    </ul>
    );
  }
