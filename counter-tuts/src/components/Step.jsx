const Step =(props)=> {
    return(
        <div className="step">
            <input type="number" onChange={(event)=> {console.log(event);
                props.setStepValue(+event.target.value)}}/>
        </div>
    )
}

export default Step;