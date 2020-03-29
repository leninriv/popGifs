import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';


function SearchInput(props) {
    return (
        <div>
            <h2>Search your interests</h2>
            <div className="search_input-buttons--content">
                <Input placeholder="Basic usage" size="large" value={props.value} onChange={props.onChangeValue} onPressEnter={props.onSearch}/>
                <Button type="primary" size="large" onClick={props.onSearch}>Search</Button>
            </div>
        </div>

    );
}


export default SearchInput
