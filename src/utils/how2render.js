import React from 'react'

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
                return <div class="content_img_3">
                    <div class="content_img_3_1">
                        <img src={media[0].url} alt={media[0].public_id} />

                    </div>
                    <div class="content_img_3_1">
                        <img src={media[1].url} alt={media[1].public_id} />
                    </div>
                </div>

                // <div style={{ height: 100 + '%', width: 100 + '%' }}>
                //     <img src={media[0].url} alt={media[0].public_id} />
                //     <img src={media[1].url} alt={media[1].public_id} />
                // </div>
            }
            case 3: {
                return <div class="content_img_3">
                    <div class="content_img_3_1">
                        <img src={media[0].url} alt={media[0].public_id} />

                    </div>
                    <div class="content_img_3_2">
                        <img src={media[1].url} alt={media[1].public_id} />
                        <img src={media[2].url} alt={media[2].public_id} />
                    </div>
                </div>
            }
            default: return;
        }
    }
}