
function Middle(props) {
  return (
    <div>
      <div className=" flex gap-4 mt-6 mb-2 ml-[230px]">
        <div>
        <img className="rounded h-[140px] w-[200px] " src={props.image}/>
        </div>
        <div className="mt-3">
        <h1>{props.title}</h1> 
        <p className="mt-2">{props.desc}</p>
        <p className="mt-2">{props.desc2}</p>
        <button className="text-black  bg-orange-400 rounded p-2">OrderNow</button>
      </div>
      </div>
      </div>
    
  )
}

export default Middle
