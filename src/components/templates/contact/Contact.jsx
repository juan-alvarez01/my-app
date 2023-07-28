
import ContactForm from '../../contactForm/ContactForm'
import ContactList from '../../contactList/contactList';
import MainLayout from '../../layout/MainLayout'
import { ContactFormProvider } from '../../../context/ContactFormContext';
import '../../contactForm/ContactForm.css'
export default function Contact() {

    return(
    
    <MainLayout>
         <ContactFormProvider>
            <ContactForm/>
            <ContactList/>
         </ContactFormProvider>
    </MainLayout>
    )
};              