
import style from './Card.module.css'
import Button from './Button'

const placeHolderSrc = 'https://picsum.photos/1200/1000'


let tag_css = ''

export function setClass(el, classe) {
    el = ''
    switch (classe) {

        case 'html':
            el = 'html';
            break;

        case 'js':
            el = 'js';
            break;

        case 'php':
            el = 'php';
            break;

        case 'css':
            el = 'css';
            break;

    }
    return el

}




export function Card({ title = '', image = '', description = '', tags = [], author = '', deleteFunction = () => { }, updateFunction = () => { }, onChange = () => { } }) {
    console.log(tags)







    return (
        <div className={style.card}>
            <div className={style.card_header}>
                <div className="figure">
                    <img src={image ? image : placeHolderSrc} alt="" />
                </div>
            </div>
            <div className={style.card_body}>
                <div className={style.title}>
                    <h3>{title}</h3>
                    <form action="">
                        <input type="text" name="title" value={title} onChange={onChange} />
                        <input type="submit" value="Aggiorna" onSubmit={updateFunction} />
                    </form>
                </div>
                {tags.length ? <div>{tags.map((tag, i) => <span key={i} className={setClass(tag_css, tag)}>{tag}</span>)}</div> : <div>Nessun tag </div>}
                <p className={style.description}>
                    {description}
                </p>
                <div className={style.author}>{`Autore: ${author}`}</div>
                <Button />
                <button onClick={deleteFunction}>elimina</button>

            </div>
        </div>
    )
}