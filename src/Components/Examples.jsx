import TabButton from './TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';


export default function Examples() 

{
    const [selectedTopic, setSelectTopic] = useState();

    function handleClick(selectedButton){    
        setSelectTopic(selectedButton);
        console.log(selectedTopic);
    }

   let topic = "Please select a topic"

   if(selectedTopic){
    topic = (<div id='tab-content'>
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
  </div>
    );
    }
    
    return(
        <Section title="Examples" id="examples">
                
                <menu>
                <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleClick("components")}>Components</TabButton>
                <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleClick("jsx")}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleClick("props")}>Props</TabButton>
                <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleClick("state")}>State</TabButton>
                </menu>
                {topic}
        </Section>
    );
}