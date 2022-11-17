import { Props } from "../Backend/interfaces/list.interfaces"


const List = ({subs}: Props) => {
    return(
        <ul>
          {
            subs.map(sub => {
              return (
                <li key={sub.nick}>
                  <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                  <h4> {sub.nick} <br/> </h4>
                  <p> {sub.description?.substring(0,100)} </p>
                </li>
              )
             })
          }
        </ul>
    )

}

export default List