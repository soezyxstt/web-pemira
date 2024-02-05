import { header } from "@fonts";
import { useState } from "react";
import Bg from "~/components/background";
import { api } from "~/utils/api";

const createVote = api.voteTools.create.useMutation({})

export default function dumVote() {
  const [nim, setNIM] = useState('')

  return (
    <>
      <div className="dusty-bg flex flex-col items-center justify-center">
        <Bg />
        <div
          className={`${header.className} z-[1] text-4xl text-oren shadow-teal-4 text-shadow text-stroke-width-1 text-stroke-color-cream`}
        >
          <form
            onSubmit={(e)=> {e.preventDefault
            createVote.mutate(nim)
            }}>
            <input type="text" id="nim" value={nim} onChange={(e)=>{setNIM(e.target.value)}}></input>  
            <button type="submit" name="submit">Pilih</button>
          </form>
        </div>
      </div>
    </>
  );
}
