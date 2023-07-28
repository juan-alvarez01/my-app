
export default function formList({ characters }) {
    return (
      <ul class="character-list">
      {characters.map((character) => (
        <li key={character.id} className="character-card">
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
