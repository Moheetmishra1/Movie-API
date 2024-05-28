import "../../CSS/MovieBox.css"

export default function MovieBox({title,year,Released,runtime,genre,actors,poster,rated,country,language}){


    return (
        <div className="MovieBox">
            <img src={poster} alt="" />
            <div className="MovieTitle">{title}</div>
            <div><p>Actors:</p> <p>{actors}</p></div>
            <div><p>Country:</p> <p>{country}</p></div>
            <div> <p>Language:</p><p> {language||"N/A"}</p></div>
            <div><p>Runtim: {runtime}</p> <p>Released: {Released}</p></div>
            <div>  Genre: {genre}</div>
            <div><p>rated: {rated}</p><p> Year: {year}</p></div>


        </div>
    )
}