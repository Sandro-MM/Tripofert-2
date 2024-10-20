import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function Questions() {
    return (
        <div
            className={'min-[760px]:flex p-[12px] justify-center items-center w-max mx-auto gap-6 mt-12 child:min-w-[320px] child:max-w-[320px]'}>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>What type of vehicle will I get?</AccordionTrigger>
                    <AccordionContent>
                        You will receive the best vehicle adapted to your needs. Our fleet normally has 4 to 7
                        passengers, sometimes depending on the areas, up to 8 seats can be requested. We inform you
                        about the vehicle that will be in your service.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Where will my driver pick me up?</AccordionTrigger>
                    <AccordionContent>
                        Normally the driver will wait at the waiting areas, places such as houses, hotels, the
                        pick-up will always be nearby, meanwhile it will be possible for the vehicle to arrive. Our
                        service is door to door. </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How can I make changes to my booking?</AccordionTrigger>
                    <AccordionContent>
                        You can make any changes as long as it would be with a time of 24 hours, such as main or
                        additional stops you can send a message with a time of 24 hours in advance, otherwise an
                        extra payment will be applied. </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Will my sightseeing stop be open?</AccordionTrigger>
                    <AccordionContent>
                        We cannot guarantee or inform about the opening of the premises or the sale of tickets.
                        Normally, any type of reservation, it is mostly possible to reserve online one day in
                        advance. </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
