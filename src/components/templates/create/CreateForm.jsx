import { useState } from 'react'
import CharacterForm from '../../charterForm/charterForm'; 
import CharacterList from '../../formList/formList'
import { FormProvider } from '../../../context/FormContext';
import MainLayout from '../../layout/MainLayout'
import '../../formList/FormList.css'


export default function CreateForm() {
    const [characters, setCharacter] = useState([]);

    const addCharacter = (character) => {
        setCharacter([...characters, character]);
    }
    return(
    <MainLayout>
        <FormProvider  addCharacter={addCharacter}>
            <CharacterForm/>
            <CharacterList characters={characters} />
        </FormProvider>
    </MainLayout>
    )
} 