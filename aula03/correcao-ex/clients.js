const clients = [
    { name: 'Cícero Feijó', city: 'Porto Alegre' },
    { name: 'Ana Paula', city: 'Canoas' },
    { name: 'Maria Luiza', city: 'Novo Hamburgo' },
    { name: 'Paulo Roberto', city: 'Porto Alegre' },
]

function getClientsByCity(city) {
    return clients.filter(client => {
        return client.city == city
    })
}
export default getClientsByCity