import { Helvetica } from '@next/font/google'

const helvetica = Helvetica({

})

export default function Home(){
  return(
    <main className="bg-[url(/resources/Background_1.png)] bg-cover bg-center min-h-screen flex justify-center items-center">
      <img src = "/resources/SPEEEX_BG_Rainbow.png" className="justify-self-center"></img>
      <div>
        <h2 className="font color=white">Test</h2>
        <p></p>
      </div>
    </main>
  );
}