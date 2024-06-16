import wildcard from "npm:wildcard@2.0.1";

export interface Props{
    stringWildCard?: string
    searchString?: string
}

export default function MatchersStudy(props: Props){
    const resultWildCard = wildcard(props.stringWildCard || '', props.searchString || '');
    return(
        <div>
            <p>searchString: {props.searchString}</p><br />
            <p>stringWildCard: {props.stringWildCard}</p><br />
            <p>Result: {resultWildCard}</p>
        </div>
    )
}