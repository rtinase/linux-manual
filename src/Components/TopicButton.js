import { Link } from 'react-router-dom'

export default function TopicButton(props) {
    return (
        <Link to={props.link}>
            <div class="card">
                <h3 class="topic-card-header">{props.title}</h3>
                <p class="topic-card-descroption">{props.children}</p>
            </div>
        </Link>
    );
}

