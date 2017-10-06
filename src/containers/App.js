
import React, { Component } from 'react';
import Image from "./Image"
import Head from './components/helmet'
// const bus = _bus.bus({ url: "amqp://wugaruqk:1WfsfZum9rQKHhBiq5Z4OvJ6ZkFqn9Gc@rhino.rmq.cloudamqp.com/wugaruqk" });

// var Stomp = require('stomp-client');
// var destination = '/queue/notifyQueue';
// var client = new Stomp({
//     vhost: 'rhino.rmq.cloudamqp.com',
//     user: 'wugaruqk',
//     pass: '1WfsfZum9rQKHhBiq5Z4OvJ6ZkFqn9Gc'
// });


class AppBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        // document.title = "Kutekiu - Amazing Page";
        // client.connect(function (sessionId) {
        //     client.subscribe(destination, function (body, headers) {
        //         console.log('This is the body of a message on the subscribed queue:', body);
        //     });

        //     // client.publish(destination, 'Oh herrow');
        // });
    }

    render() {
        return (
            <div>
                <Head />
                <Image />
            </div >
        );
    }
}

export default AppBase;