import * as dynamose from 'dynamoose'
import { Document } from 'dynamoose/dist/Document'
import * as uuid from 'uuid'
export interface Funcionario extends Document {
  nome: string
  idade: number
  cargo: string
}

const FuncionarioSchema = new dynamose.Schema({
  id: {
    hashKey: true,
    type: String,
    default: uuid.v4()
  },
  nome: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  cargo: {
    type: String,
    required: true,
    default: 'Não informado'
  }
}, {
  saveUnknown: true,
  timestamps: true
})

export const FuncionarioModel = dynamose.model<Funcionario>('funcionarios', FuncionarioSchema)
