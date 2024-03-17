const express = require('express');
const app = express();
const clientesRoutes = require('./routes/clientesRoutes');
const produtosRoutes = require('./routes/produtosRoutes');

app.use(express.json());
app.use('/clientes', clientesRoutes);
app.use('/produtos', produtosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
