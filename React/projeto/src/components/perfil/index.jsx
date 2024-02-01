import './users.css'

const Perfil = () => {
    const Users = {
        nome: 'Karen Aprigio Moraes',
        avatar: 'https://github.com/Xmaloe.png'
    }

    return (
    <div>
        <img className="users-avatar" src={Users.avatar}/>
            <h3 className='perfil-titulo'>{Users.nome}</h3>
    </div>
    )
}

export default Perfil;