import {Card} from "./Style";

export function Post({listOfPosts}){
    return(
        <>
            {listOfPosts.map((value) => {
                return(
                    <Card>
                        <div className="title" key={value.id}>{value.title}</div>
                        <div className="text" key={value.id}>{value.postText}</div>
                        <div className="username" key={value.id}><a href="https://github.com/lscantelbury">{value.username}</a></div>
                    </Card>
                )
            })}
        </>
    );
}