import {View} from "./View/View";
import { Container } from "./Container/Container";

export function App(){
    let get_props = Container()
    return <View {...get_props}/>
}