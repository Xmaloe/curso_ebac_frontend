<template>
    <div class="container">
        <header class="p-5 mb-4 mt-4 bg-light rounded-8">
            <h1>Minhas tarefas</h1>
            <p>Você possui {{getPendentes().length}} tarefas pendentes</p>
        </header>
            <form @submit.prevent="Cadastro">
            <div class="row">
                <div class="col">
                    <input :value="estado.temp" @change="evento => estado.temp = evento.target.value" required type="text" placeholder="Digite aqui a descrição da tarefa" class="form-control">
                </div>
                <div class="col-md-2">
                    <button type="submit" class="btn btn-dark">Cadastrar</button>
                </div>
                <div class="col-md-2">
                    <select @change="evento => estado.filtro = evento.target.value" class="form-control">
                        <option value="todas">Todas tarefas</option>
                        <option value="pendentes">Pendentes</option>
                        <option value="finalizadas">Finalizadas</option>
                    </select>
                </div>
            </div>
        </form>
        <ul class="list-group mt-4">
            <li class="list-group-item" v-for="tarefa in getFiltradas()">
                <input @change="evento => tarefa.finalizada = evento.target.checked" :checked="tarefa.finalizada" :id="tarefa.titulo" type="checkbox">
                <label :class="{done: tarefa.finalizada === true}" class="ms-3" :for="tarefa.titulo">
                    {{tarefa.titulo}}
                </label>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

    const estado = reactive( {
        filtro: 'todas',
        temp: '',
        tarefas: [{
            titulo: 'Estudar NodeJS',
            finalizada: true,
        },
        {
            titulo: 'Estudar Docker',
            finalizada: false,
        },
        {
            titulo: 'Estudar TypeScript',
            finalizada: true,
        },
        {
            titulo: 'Estudar CI/CD',
            finalizada: false,
        },
        {
            titulo: 'Estudar AWS',
            finalizada: false,
        }
        ]
    })

    const getPendentes = () => {
        return estado.tarefas.filter(tarefa => !tarefa.finalizada)
    }
    const getFinalizadas = () => {
        return estado.tarefas.filter(tarefa => tarefa.finalizada)
    }

    const getFiltradas = () => {
        const {filtro} = estado;

        switch (filtro) {
            case 'pendentes':
                return getPendentes();
            case 'finalizadas':
                return getFinalizadas();
            default: 
            return estado.tarefas;
        }
    }

    const Cadastro = () => {
        const novo = {
            titulo: estado.temp,
            finalizada: false,
        }
        estado.tarefas.push(novo);
        estado.temp = '';
    }
</script>

<style scoped>
    .done {
        text-decoration: line-through;
    }
</style>
