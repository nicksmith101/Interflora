import React, {Component} from 'react';


    // const TableHeader = () => {
    //     return(
    //         <div className="tableheader">
    //             <div className="tablerow">
    //                 <div className="tablecell greeting">Greeting</div>
    //                 <div className="tablecell category">Category</div>
    //             </div>
    //         </div>
    //     );
    // }


    const TableBody = (props) => {

        const rowcontents = props.entryData.map( (innerStuff, index) => {
            return(
                <div className="tablerow" key={index} >
                    <div className="tablecell greeting">{innerStuff.greeting}</div>
        
                    <div className="tablecell category">
                        <div className="categorytext">{innerStuff.category}</div>
                        <div className="categorytext"><button className="deletebutton" onClick={() => props.removeEntry(index)}>Delete</button></div>         
                    </div>
                </div>
            );
            }
        )

    return(<div className="tablebody">{rowcontents}</div>);
    }


    class Table extends Component {
       
        render() {
 
        const { entryData, removeEntry } = this.props;
    
            return (
            <div className="tablearea row">
                <div className="tableofdata">
                    {/* <TableHeader /> */}
                    <TableBody 
                    entryData={entryData}
                    removeEntry={removeEntry}
                    />
               </div>
            </div>
            );
        }
    }

export default Table