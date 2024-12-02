import { posts } from '../posts.jsx'
import { Card, setClass } from './Card.jsx'
import style from './MainSection.module.css'




const postsTags = posts.map(post => post.tags).flat()

function filtraTagUnici(array) {
    return array.filter((el, i) => array.indexOf(el) === i);
}

console.log(filtraTagUnici(postsTags))


export default function MainSection() {
    return (
        <main>
            <section className='main_section'>
                <div className="container">
                    <div className="row">
                        {posts.map((post) => (
                            post.published &&
                            <div key={post.id} className="col_4">
                                <Card title={post.title} image={post.image} description={post.content} tags={post.tags} />
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <section>
                <div className="tags">
                    {filtraTagUnici(postsTags).map((tag, i) => (
                        <div className={setClass(tag, tag)} key={i}>{tag}</div>

                    ))}

                </div>
            </section>
        </main>
    )
}