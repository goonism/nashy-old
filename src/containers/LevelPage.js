import React, {Component} from 'react';

import NashyNum from 'components/NashyNum';
import NashyInput from 'components/NashyInput';

export default class LevelPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listOfRandoms: [1123, 4124, 1241]
        };
    }

    render() {
        return (<div>
            <NashyNum></NashyNum>

            {this.state.listOfRandoms.map((n) => <NashyInput number={n}/>)}

        </div>);
    }

}
