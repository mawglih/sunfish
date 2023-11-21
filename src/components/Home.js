import Title from './Title';
import classes from './Page.module.css';
import Form from './Form';

const Text1 = "Page title";
const Text2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, ipsum dicta. Rerum ut hic ad voluptates. Tempore expedita voluptate nostrum error necessitatibus quos earum, alias sint qui repellat tenetur natus?"

const Home = () => {
    return (
        <div className={classes.container}>
            <Title title={Text1} subtitle={Text2} />
            <Form/>
        </div>
    )
}

export default Home;