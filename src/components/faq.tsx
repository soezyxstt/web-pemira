import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "~/components/ui/accordion"
import { header,body } from '~/styles/fonts'
import Pertanyaan from '~/questions.json'


const FaQ = () => {
    return (
        <div className="z-[1] mb-[3em]">
            <h1 className={`${header.className} text-oren text-4xl mb-10 text-center`}>
                FaQ
            </h1>
            <Accordion type="single" collapsible className="w-full sm:w-[60vw] flex flex-col gap-8">
                {Pertanyaan.map((name,key)=>(
                    <AccordionItem value={`${key}`} key={key} className="bg-yellow-500 rounded-[2rem]">
                        <AccordionTrigger className={`bg-oren text-white text-lg tracking-wider px-6 pb-3 rounded-[2rem]`}>
                            {name.question}
                        </AccordionTrigger>
                        <AccordionContent className={`${body.className} text-white mx-5 mt-3 tracking-wide text-lg`}>
                            {name.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default FaQ
