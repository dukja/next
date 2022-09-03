export default function Image  ({src, type = "image/webp", fallback, alt })  {
    return(
        <>
                <picture>
                    <source srcSet={src} type={type} />
                    <img src={fallback} alt={alt} />
                </picture>
        </>
    )
}



