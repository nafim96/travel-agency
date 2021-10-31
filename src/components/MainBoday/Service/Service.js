import React from 'react';
import { data } from '../../../App';
import Items from '../../Items/Items';



const Service = () =>
{
    return (
        <div>
            <div className="row">
                {
                    data.map( ( dt ) =>
                    {
                        return (
                            <Items key={ dt.id } value={ dt } />
                        );
                    } )
                }
            </div>
        </div>
    );
};

export default Service;
