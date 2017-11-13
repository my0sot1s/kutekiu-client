import React from 'react'
// require('./how2Render.css')
/**
 * 
 * @param {{width:number,height:number,url:string}} img 
 * @return h-ngang v- dọc s-vuong=h
 */
const chk_h_v = img => {

    let dim = img.height / img.width;
    // if (dim < 1) return 'h'
    // else if (dim > 1) return 'v'
    // // else return 's'
    // else return 'h'
    return dim
}
/**
 * 
 * @param {[{width:number,height:number,url:string}]} media 
 */
const sort = media => {
    let cl = []
    media.map(val => {
        if (cl.length === 0) cl.push(val)
        else if (cl.length === 1) {
            chk_h_v(cl[0]) >= chk_h_v(val) ? cl.push(val) : cl.unshift(val);
        }
    })
}
/**
 * 
 * @param {[{width:number,height:number,url:string}]} media 
 */
export const how2render = (media) => {
    if (!Array.isArray(media)) return <div />
    else {
        let len = media.length;
        switch (len) {
            case 1: {
                return <img src={media[0].url} alt={media[0].public_id} />
            }
            case 2: {
                return <div className="content_img_3">
                    <div className="content_img_3_1">
                        <img src={media[0].url} alt={media[0].public_id} />

                    </div>
                    <div className="content_img_3_1">
                        <img src={media[1].url} alt={media[1].public_id} />
                    </div>
                </div>

                // <div style={{ height: 100 + '%', width: 100 + '%' }}>
                //     <img src={media[0].url} alt={media[0].public_id} />
                //     <img src={media[1].url} alt={media[1].public_id} />
                // </div>
            }
            case 3: {
                return <div className="content_img_3">
                    <div className="content_img_3_1">
                        <img src={media[0].url} alt={media[0].public_id} />

                    </div>
                    <div className="content_img_3_2">
                        <img src={media[1].url} alt={media[1].public_id} />
                        <img src={media[2].url} alt={media[2].public_id} />
                    </div>
                </div>
            }
            default: return;
        }
    }
}


export const pushToCell = media => {
    if (!Array.isArray(media)) return <div />
    else {
        let len = media.length, dot = [];
        for (var i = 1; i <= len; i++) {
            dot.push(<label for={`img-${i}`} className="nav-dot" id={`img-dot-${i}`}></label>)
        }
        return (
            <ul className="slides">
                {media.map((value, index) => {
                    return [(<input type="radio" name="radio-btn" id={`img-${index + 1}`} checked={index === 0 ? "checked" : ""} key={index} />),
                    (<li className="slide-container">
                        <div className="slide">
                            <img src={`${value.url}`} tag={`${value.public_id}`} />
                        </div>
                        <div className="nav">
                            <label htmlFor={index + 1 === 1 ? `img-${len}` : `img-${index}`} className="prev">&#x2039;</label>
                            <label htmlFor={index + 1 === len ? `img-1` : `img-${index + 2}`} className="next">&#x203a;</label>
                        </div>
                    </li>)]
                })}

                <li className="nav-dots">
                    {dot}
                    {/* <label for="img-1" className="nav-dot" id="img-dot-1"></label>
                    <label for="img-2" className="nav-dot" id="img-dot-2"></label>
                    <label for="img-3" className="nav-dot" id="img-dot-3"></label>
                    <label for="img-4" className="nav-dot" id="img-dot-4"></label>
                    <label for="img-5" className="nav-dot" id="img-dot-5"></label>
                    <label for="img-6" className="nav-dot" id="img-dot-6"></label> */}
                </li>
            </ul>
        )
    }
}