import CoreConcepts from './CoreConcepts.jsx';
import { CORE_CONCEPTS } from '../data.js';


export default function CoreConcepts2() {
  
return(
    <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
            {/* <CoreConcepts {...CORE_CONCEPTS[0]}/>
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts 
                title = {CORE_CONCEPTS[3].title}
                description = {CORE_CONCEPTS[3].description}
                image = {CORE_CONCEPTS[3].image}
            /> */}
            {CORE_CONCEPTS.map((conceptItem) => ( <CoreConcepts key = {conceptItem.title} {...conceptItem}/> ))}
            </ul>
    </section>
);
}
