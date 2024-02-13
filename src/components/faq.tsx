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
            <Accordion type="single" collapsible className="w-[60vw] flex flex-col md:gap-8 gap-6">
                {Pertanyaan.map((name,key)=>(
                    <AccordionItem value={`${key}`} key={key} className="bg-yellow-500 lg:rounded-[1rem] rounded-[.9rem] shadow-md">
                        <AccordionTrigger className={`bg-oren text-white lg:text-lg md:text-base text-[.8em] antialiased tracking-wider md:px-6 px-3 md:py-2 py-[.5em] lg:rounded-[1rem] rounded-[.9rem]`}>
                            {name.question}
                        </AccordionTrigger>
                        <AccordionContent className={`${body.className} text-white mx-5 md:mt-3 mt-[.6em] tracking-wide lg:text-lg md:text-base text-[.75em]`}>
                            {name.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default FaQ
