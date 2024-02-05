import { useState } from 'react'; 
import { ChevronRight,ChevronLeft } from "lucide-react"
import { Button } from "~/components/ui/button"
import { header,body } from '~/styles/fonts';

const LokasiVoting = () => {
    const [currentIdx,setCurrentIdx] = useState(0);
    const srcLokasi: string[] = ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9926632364277!2d107.60808417367143!3d-6.8914799931076125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65767c9b183%3A0x2478e3dcdce37961!2sBandung%20Institute%20of%20Technology!5e0!3m2!1sen!2sid!4v1706882621469!5m2!1sen!2sid","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7921.377766258275!2d107.76934948463803!3d-6.927741936425207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c4a6175d148b%3A0xcf3db690ca7ca9dd!2sBandung%20Institute%20of%20Technology%20-%20Jatinangor%20Campus!5e0!3m2!1sen!2sid!4v1707107271186!5m2!1sen!2sid","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8551027121557!2d108.41342807589457!3d-6.664871993330056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6edf8c624e0eeb%3A0x750d66e2866d640b!2sBandung%20Institute%20of%20Technology%20Cirebon%20Campus!5e0!3m2!1sen!2sid!4v1707107518484!5m2!1sen!2sid"] 
  
    const keyLokasi: string[] = [
      "GANESHA",
      "JATINANGOR",
      "CIREBON"
    ]
  
    const cycleForward = () => {
      setCurrentIdx(a => (a + 1) % 3);
    }
  
    const cycleBackward = () => {
      if (currentIdx > 0){
        setCurrentIdx(a => Math.abs((a-1) % 3));
      } else {
        setCurrentIdx(srcLokasi.length - 1);
      }
  
    }
    return (
      <div className='z-[1] flex items-center justify-center flex-col'>
        <h1
          className={`${header.className} text-red-4 text-4xl mb-10`}
        >
            Lokasi
        </h1>
        <div className='bg-red-1 lg:pt-5 lg:px-5 w-[60vw] rounded-[2rem] overflow-clip'>
          <div>
            <iframe
              src={srcLokasi[currentIdx]}
              height="400px"
              loading="lazy"
              className='rounded-[1rem] w-[100%] max-[500px]:w-[101%]'
            ></iframe>
          </div>
          <div className='flex flex-row justify-center'>
            <div className='mx-5 my-4 px-3 py-2 bg-red-3 rounded-lg w-fit flex flex-row justify-center items-center gap-6 min-[320px]:gap-3'>
              {/* for carousel */}
                <Button onClick={cycleBackward} size="icon" variant="secondary" className='rounded-full py-1 max-[450px]:w-[25px] max-[450px]:h-[25px]'>
                  <ChevronLeft className="h-4 w-4 text-red-3" strokeWidth={3}/>
                </Button>
                <div className={`${body.className} text-white antialiased text-center lg:w-[100px] lg:text-base md:text-[13px] min-[320px]:text-[11px]`}>
                  {keyLokasi[currentIdx]}
                </div>
                <Button onClick={cycleForward} size="icon" variant="secondary" className='rounded-full max-[450px]:w-[25px] max-[450px]:h-[25px]'>
                  <ChevronRight className="h-4 w-4 text-red-3" strokeWidth={3}/>
                </Button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LokasiVoting