const db = require('../configs/dbConfig');

// Implementar lógica de interação com o banco de dados para clientes
const Cliente = require('../models/clientesModel');

class ClienteService {
    static async getAllClientes() {
        try {
            return await Cliente.getAllClientes();
        } catch (error) {
            throw new Error('Erro ao obter clientes do serviço');
        }
    }

    static async addCliente(clienteData) {
        try {
            return await Cliente.addCliente(clienteData);
        } catch (error) {
            throw new Error('Erro ao adicionar cliente ao serviço');
        }
    }

    static async updateCliente(clienteId, clienteData) {
        try {
            return await Cliente.updateCliente(clienteId, clienteData);
        } catch (error) {
            throw new Error('Erro ao atualizar cliente no serviço');
        }
    }

    static async deleteCliente(clienteId) {
        try {
            return await Cliente.deleteCliente(clienteId);
        } catch (error) {
            throw new Error('Erro ao excluir cliente do serviço');
        }
    }
}

module.exports = ClienteService;
