import Image from "../../../../../component/Image"

export default function Loader  ({}) {
    return(
        <>
            <ImageBlock id="image-3"/>
        </>
    )
}

export function ImageBlock  ({id}) {
    return(
        <>
            <Image
                src={process.env.PUBLIC_URL +`./../src/images/${id}.webp`}
                fallback={process.env.PUBLIC_URL +`./../src/images/${id}.jpg`}
                alt={id}
            />
        </>
    )
}