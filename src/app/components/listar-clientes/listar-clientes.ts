import { SafeResourceUrl } from "@angular/platform-browser"

export interface Cliente {
    id?:number,
    telefone?:string | null,
    email?:string | null,
    nome?:string | null,
    cpf?:string | null,
    razaoSocial?: string | null,
    nomeFantasia?:string | null,
    cnpj?: string | null,
    endereco: {
        cep?:string | null,
        logradouro?: string | null,
        numero?:string | null,
        complemento?:string | null,
        bairro?: string | null,
        cidade?:string | null,
        uf?:string | null,
    }
}