export interface Props{
    Text: string
}

export default function testSection(props: Props){
    return <div className={"flex justify-center "}>{props.Text}</div>
}