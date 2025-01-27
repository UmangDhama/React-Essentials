
 import {CORE_CONCEPTS} from "../data.js";
 import CoreConcept from "./CoreConcept.jsx";

export default function CoreConceptes(){
    return  (<>  <section id="core-concepts">
    <h2>Core  Concepts!</h2>
    <ul>
      {CORE_CONCEPTS.map((concepts) =>(<CoreConcept key={concepts.title} {...concepts} / >) )}
    </ul>
     </section>
  </>)
}