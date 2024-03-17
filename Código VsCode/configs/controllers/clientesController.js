// Implementar lógica dos endpoints para clientes
const ClienteService = require('../services/clientesService');

class ClientesController {
    static async getAllClientes(req, res, next) {
        try {
            const clientes = await ClienteService.getAllClientes();
            res.json(clientes);
        } catch (error) {
            next(error);
        }
    }

    static async addCliente(req, res, next) {
        try {
            const clienteData = req.body;
            const clienteId = await ClienteService.addCliente(clienteData);
            res.status(201).json({ id: clienteId, message: 'Cliente adicionado com sucesso' });
        } catch (error) {
            next(error);
        }
    }

    static async updateCliente(req, res, next) {
        try {
            const clienteId = req.params.id;
            const clienteData = req.body;
            await ClienteService.updateCliente(clienteId, clienteData);
            res.json({ message: 'Cliente atualizado com sucesso' });
        } catch (error) {
            next(error);
        }
    }

    static async deleteCliente(req, res, next) {
        try {
            const clienteId = req.params.id;
            await ClienteService.deleteCliente(clienteId);
            res.json({ message: 'Cliente excluído com sucesso' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ClientesController;
