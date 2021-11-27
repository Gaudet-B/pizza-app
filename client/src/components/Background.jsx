import BackgroundSlice from './BackgroundSlice'
import BackgroundPie from './BackgroundPie'
import styles from '../components/background.module.css'
import { useEffect } from 'react'
// import pieImg from './pizza-pie-vector.png'
// import sliceImg from './pizza-slice-vector.png'


const Background = props => {

    // const waterfallSetup = (e, height, duration) => {
    //     let y = e.getBoundingClientRect().y
    //     console.log(`$$ height $$ -> ${height}`)
    //     if (y >= height - 20) {
    //         console.log(`(IF) Y -> ${y}`)
    //         // e.addEventListener("animationend", waterfall(e, height, 5000, -height))
    //         setInterval(waterfall(e, height, 5000, (-height)), 5000)
    //         // setInterval(waterfall(e, height), 5000)
    //     } else {
    //         console.log(`(ELSE) Y -> ${y}`)
    //         // e.addEventListener("animationend", waterfall(e, height, 5000, -height))
    //         waterfall(e, (height - y), duration, 0)
    //         setTimeout(() => {
    //             setInterval(waterfall(e, height, 5000, (-height)), 5000)
    //         }, duration);
    //         // setInterval(waterfall(e, height, 5000), 5000)
    //     } 
    // }

    // const waterfall = (e, height, duration, y) => {
    //     // console.log(e.className)
    //     e.animate([
    //         {transform: `translateY(${(height - y) + 20}px)`}
    //     ], {duration: duration, interations: 1})
    //     setTimeout(() => {
    //         console.log("go to top!");
    //         e.setAttribute("style", `transform: translateY(${-y}px); position: absolute; margin: 6px 30px;`)
    //         // setTimeout(() => {
    //             // e.setAttribute("class", `${styles.waterfall}`)
    //             e.className += ` ${styles.waterfall}`
    //         // }, 100);
    //     }, duration);
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         let wrapper = document.getElementById("wrapper")
    //         // console.log(wrapper)
    //         let height = window.innerHeight
    //         // console.log(height)
    //         let columns = wrapper.childNodes
    //         // console.log(columns)
    //         for (let i = 0; i < columns.length; i++) {
    //             let images = columns[i].childNodes
    //             // console.log(images)
    //             for (let i = 0; i < images.length; i++) {
    //                 let originalY = images[i].getBoundingClientRect().y
    //                 console.log(originalY)
    //                 let duration = ((height - originalY) / height) * 5000
    //                 console.log(duration)
    //                 waterfall(images[i], height, duration, originalY)
    //             }
    //         }
    //     }, 5000);
    // })

    const {images, slice, pie} = props

    const imageGenerator = () => {
        for (let i = 0; i < 9; i++) {
            images.push(styles.slice)
            images.push(styles.pie)
        }
        // console.log(images)
        return(
            images.map((image, idx) => {
                return(
                    (idx % 2 === 0) ?
                        <div key={idx} id={image} className={styles.slice} ></div>
                        :
                        <div key={idx} id={image} className={styles.pie} ></div>
                )
            })
        )
    }

    const columns = [1,2,1,2,1,2,1,2,1,2,1,2,1,2]

    return (

        <div id="wrapper" className={styles.wrapper}>
            {columns.map((col, idx) => {
                return(
                    (col === 1) ?

                    <div key={idx} id={col} className={`flex-1 ${styles.column1}`}>
                    {(images.length > 0) ?
                        images.map((image, idx) => {
                            return(
                                (idx % 2 === 0) ?
                                <div key={idx} id={image} className={styles.slice} ></div>
                                :
                                <div key={idx} id={image} className={styles.pie} ></div>
                            )
                        })
                        :
                        imageGenerator()
                    }
                    </div>

                    :

                    <div key={idx} id={col} className={`flex-1 ${styles.column2}`}>
                    {(images.length > 0) ?
                        images.map((image, idx) => {
                            return(
                                (idx % 2 === 0) ?
                                <div key={idx} id={image} className={styles.pie} ></div>
                                :
                                <div key={idx} id={image} className={styles.slice} ></div>
                            )
                        })
                        :
                        imageGenerator()
                    }
                    </div>
                )
            })}
        </div>
    )
}

export default Background
