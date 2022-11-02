import Card from './Card'
import data from '../data.json'


const res=data.map(item=>
    <Card
    key={item.id}
    {...item}
    />
)

export default function Main(){
    return(
        <div className='main-container'>
            {res}
        </div>
    )
}

