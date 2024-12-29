import TabButton from "./TabButton"
import  {EXAMPLES} from "../data.js";
import React from "react";

export default function Example(){
    const [ConceptItem,SetConceptItem]= React.useState()



  function HandleSelect(SelectedButton){
      SetConceptItem(SelectedButton);
  }
   let SelectedItem=<p>"Please Select A topic"</p>;


   if(ConceptItem){
    SelectedItem=<div id="tab-content">
    <h3>{EXAMPLES[ConceptItem].title}</h3>
    <p>{EXAMPLES[ConceptItem].description}</p>
    <pre>
      <code>
      {EXAMPLES[ConceptItem].code}
      </code>
    </pre>
  </div>
  }

    return  <section id ="examples">
    <h2>Examples</h2>
    <menu>
    <TabButton isSelected={ConceptItem==="components"} onSelect={() => HandleSelect("components")}>Components</TabButton>
    <TabButton isSelected={ConceptItem==="jsx"} onSelect={() => HandleSelect("jsx")} >JSX</TabButton>
    <TabButton isSelected={ConceptItem==="props"} onSelect={() => HandleSelect("props")}>Props</TabButton>
    <TabButton isSelected={ConceptItem==="state"} onSelect={() => HandleSelect("state")}>State</TabButton>
    </menu>
    {SelectedItem}
   </section>
}