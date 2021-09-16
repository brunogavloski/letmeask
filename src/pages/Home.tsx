import illustrationImg from '../assets/images/illustration.svg' //import of image 
import logoImg from '../assets/images/logo.svg'
import googleiconImg from '../assets/images/google-icon.svg'

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A</strong>
                <p>Tire as dúvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="LetmeAsk" />
                    <button>
                        <img src={googleiconImg} alt="logo do google"/>
                        Crie sua sala com o Google
                    </button>
                </div>
            </main>
        </div>
    )

}