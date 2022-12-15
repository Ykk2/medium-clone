import { GetResponsesByStory } from "../Responses/Responses";



function ResponseModal({storyDetails}) {

    return(
        <>
            <GetResponsesByStory storyDetails={storyDetails} />
        </>
    )
}

export default ResponseModal
