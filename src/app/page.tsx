import React from 'react'
import {Card, CardBody} from "@nextui-org/react";

const home = () => {
    return (
        <main>
            <h1>
                <div className="container">
                    <h1 className='text-4xl'>Dashboard</h1>
                    <Card className='mt-10'>
                    <CardBody>
                        <p>Total No of Images are 5000</p>
                    </CardBody>
                    </Card>
                    <Card className='mt-10'>
                    <CardBody>
                        <p>Total No of Poats are 100.</p>
                    </CardBody>
                    </Card>
                </div>
            </h1>
        </main>
    )
}

export default home