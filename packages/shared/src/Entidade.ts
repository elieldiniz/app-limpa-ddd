
import Id from "./Id"


export interface EntidadeProps {
    id: string 
}

export default  class Entidade<ENT, PROPS extends EntidadeProps>{
    constructor(readonly props: PROPS ){
        this.props = {...props, id: props.id ?? Id.novoHash()

        }
    }

    get id() {
        return this.props.id
    }

    igual(entidade: ENT): boolean {
        return this.id === (entidade as any).id
    }

    deferente(entidade: ENT): boolean {
        return !this.igual(entidade)
    }

    clone(props: Partial<PROPS>): ENT {
        return new (this.constructor as any).Entidade({
            ...this.props,
            ...props,
        })
    }

}
