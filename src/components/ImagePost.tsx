import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function ImagePost({data}) {
    return (
        <Card className="py-4 max-w-[400px]">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{data.title}</p>
                <p className="text-tiny uppercase font-bold">{data.id}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={data.url}
                width={400}
                />
            </CardBody>
        </Card>
    );
}
