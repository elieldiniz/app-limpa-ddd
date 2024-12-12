import { EntidadeProps } from "shared";
import { Nivel } from "./Nivel";


export interface Curso extends EntidadeProps {
    nome: string
    nivel: Nivel


}
