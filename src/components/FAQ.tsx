import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
    return (
        <Accordion type="multiple">
            <AccordionItem value="faq-1">
                <AccordionTrigger className="text-start text-lg font-semibold">
                    How do I join the server?
                </AccordionTrigger>
                <AccordionContent>
                    <p className="text-muted-foreground">
                        To join the server, click the &quot;Join Server&quot;
                        button above. You will be redirected to the Kings World
                        server where you can accept the invite.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
                <AccordionTrigger className="text-start text-lg font-semibold">
                    How can I become a staff member?
                </AccordionTrigger>
                <AccordionContent>
                    <p className="text-muted-foreground">
                        Unfortunately, we are not currently accepting
                        applications for staff members. However, we may open
                        applications in the future.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
