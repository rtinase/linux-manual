import TopicButton from "./TopicButton"

export default function TopicList(props) {
    return (
        <div class="topic-list">
            {
                props.topicsList.map((topicItem) =>
                    <TopicButton key={topicItem.title} link={topicItem.link} title={topicItem.title} description={topicItem.description}></TopicButton>
                )
            }
        </div>
    )
}