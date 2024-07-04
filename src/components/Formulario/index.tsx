import { ButtonStyle, FildStyle, FormContainer, Title } from './stylesForm'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputForm } from './InputForm'
import { FormularioProps } from '../../Interfaces/FormularioProps'

// ! Validações do formulário:

const taskSchema = z.object({
    nomeAutor: z.string().nonempty("Nome do autor é obrigatório"),
    telefone: z.string().regex(/^\d+$/, "Telefone deve conter apenas números"),
    nomeTarefa: z.string().nonempty("Nome da tarefa é obrigatório"),
    dataTarefa: z.string().refine(value => !isNaN(Date.parse(value)), {
        message: "Data inválida",
        path: ["dataTarefa"]
    }),
    descricao: z.string().nonempty("Descrição é obrigatória")
})

type TaskSchemaValidations = z.infer<typeof taskSchema>

const Formulario = ({ onAddTask }: FormularioProps) => {

    // ! criando tipo do formulário
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TaskSchemaValidations>({
        resolver: zodResolver(taskSchema),
    })

    function handleSubmitTasks(data: TaskSchemaValidations) {
        onAddTask(data);
        reset();
    }

    const formHeight = Object.keys(errors).length > 0 ? '750px' : '650px';

    return (
        <FormContainer $height={formHeight} onSubmit={handleSubmit(handleSubmitTasks)}>
            <Title>Cadastre sua tarefa</Title>
            <FildStyle>
                <label>Nome do autor</label>
                <InputForm
                    type="text"
                    register={register}
                    name='nomeAutor'
                    error={errors.nomeAutor?.message}
                    placeholder='Guilherme'
                    maxLength={40}
                />
            </FildStyle>
            <FildStyle>
                <label>Número de telefone</label>
                <InputForm
                    type="text"
                    register={register}
                    name='telefone'
                    error={errors.telefone?.message}
                    placeholder='+5511941320207'
                    maxLength={14}
                />
            </FildStyle>
            <FildStyle>
                <label>Digite o nome da tarefa</label>
                <InputForm
                    type="text"
                    register={register}
                    name='nomeTarefa'
                    error={errors.nomeTarefa?.message}
                    placeholder='bug do componente'
                    maxLength={30}
                />
            </FildStyle>
            <FildStyle>
                <label>Até quando pode realiza-lá?</label>
                <InputForm
                    type="date"
                    register={register}
                    name='dataTarefa'
                    error={errors.dataTarefa?.message}
                />
            </FildStyle>
            <FildStyle>
                <label>Descreva tarefas a serem feitas</label>
                <textarea
                    placeholder='Resolver bug do componente, reestilizar banner'
                    {...register('descricao')}
                    name='descricao'
                />
                {errors.descricao && <p style={{ color: "red" }}>{errors.descricao.message}</p>}
            </FildStyle>
            <ButtonStyle type='submit'>Salvar</ButtonStyle>
        </FormContainer>

    )
}

export default Formulario