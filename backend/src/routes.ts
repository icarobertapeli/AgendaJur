import Router from 'express'
import { isAutenticado } from './middleware/autenticado'

import { criarAdvogadoController } from './controller/advogado/criarAdvogadoController'
import { deletarAdvogadoController } from './controller/advogado/deletarAdvogadoController'
import { listarAdvogadosController } from './controller/advogado/listarAdvogadosController'
import { LoginAdvogadoController } from './controller/advogado/loginAdvogadoController'
import { alterarAdvogadoController } from './controller/advogado/alterarAdvogadoController'

const router = Router()

//Advogados
router.post('/CriarAdvogado', new criarAdvogadoController().handle)
router.delete('/DeletarAdvogado', isAutenticado, new deletarAdvogadoController().handle)
router.get('/ListarAdvogados', isAutenticado, new listarAdvogadosController().handle)
router.post('/LoginAdvogado', new LoginAdvogadoController().handle)
router.put('/AlterarAdvogado', isAutenticado, new alterarAdvogadoController().handle)

export { router }