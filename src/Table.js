import React, {Component} from 'react';

const TableHeader = () => {
        return(
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Remove</th>
                </tr>
            </thead>
        );
    }


    const TableBody = (props) => {

        const rowcontents = props.characterData.map( (innerStuff, index) => {
            return(
                <tr key={index} >
                    <td>{innerStuff.guysname}</td>
                    <td>{innerStuff.job}</td>
                    <td>
                        <button onClick={() => props.removeCharacter(index)}>delete this</button>
                    </td>
                </tr>
            );
            }
        )

    return(<tbody>{rowcontents}</tbody>);
    }



    class Table extends Component {
       
        render() {
 
        const { characterData, removeCharacter } = this.props;
    
            return (
                <table className="tabletest">
                    <TableHeader />
                    <TableBody 
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                    />
                </table>
            );
        }
    }

export default Table