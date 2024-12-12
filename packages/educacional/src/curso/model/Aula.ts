import { Entidade, EntidadeProps } from "shared";



export interface AulaProps extends EntidadeProps {

    nome: string,
    duracao: number,
    videioUrl: string,
    visivel: boolean,
    ordem: number

}

export class Aula extends Entidade<Aula, AulaProps>{
    constructor(readonly props: AulaProps){
        super(props)
    }

    static nova(props: Partial<AulaProps>): Aula {
        return new Aula({
            ...props,
            visivel: props.visivel ?? true,
            duracao: props.duracao ?? 0,
            ordem: props.ordem ?? 0,
        } as AulaProps )
    }
    get nome() {
        return this.props.nome
    }
    get duracao() {
        return this.props.duracao
    }
    get videoURL(){
        return this.props.videioUrl
    }
    get visivel(){
        return this.props.visivel
    }

}


const c1 = Aula.nova({
    nome: "React Hooks",
    duracao: 30,
    videioUrl: "https://www.youtube.com/watch?v=E1k8hA08s_U",
    visivel: true,
    ordem: 1,
})


console.log(c1.props.videioUrl)