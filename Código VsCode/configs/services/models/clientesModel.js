const db = require('../configs/dbConfig');

class Cliente {
    static async getAllClientes() {
        try {
            const [rows] = await db.query('SELECT * FROM clientes');
            return rows;
        } catch (error) {
            throw new Error('Erro ao obter clientes do banco de dados');
        }
    }

    static async addCliente(clienteData) {
        try {
            const { nome, sobrenome, email, idade } = clienteData;
            const [result] = await db.query('INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)', [nome, sobrenome, email, idade]);
            return result.insertId;
        } catch (error) {
            throw new Error('Erro ao adicionar cliente ao banco de dados');
        }
    }

    static async updateCliente(clienteId, clienteData) {
        try {
            const { nome, sobrenome, email, idade } = clienteData;
            await db.query('UPDATE clientes SET nome=?, sobrenome=?, email=?, idade=? WHERE id=?', [nome, sobrenome, email, idade, clienteId]);
            return true;
        } catch (error) {
            throw new Error('Erro ao atualizar cliente no banco de dados');
        }
    }

    static async deleteCliente(clienteId) {
        try {
            await db.query('DELETE FROM clientes WHERE id=?', [clienteId]);
            return true;
        } catch (error) {
            throw new Error('Erro ao excluir cliente do banco de dados');
        }
    }
}

module.exports = Cliente;
