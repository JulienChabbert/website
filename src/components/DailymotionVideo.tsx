type VideoProps = {
    id: string
}

export const DailymotionVideo : React.FC<VideoProps> = ({ id }) => {
    return(
        <iframe width="560" height="315"
        src={"https://www.dailymotion.com/embed/video/" + id} 
        allowFullScreen title="Dailymotion Video Player" allow="autoplay"> </iframe>

    )
}