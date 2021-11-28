import styles from '../components/background.module.css'


const Background = props => {

    const {images, slice, pie} = props

    // generates arrays of alternating images
    const imageGenerator = () => {
        for (let i = 0; i < 9; i++) {
            images.push(styles.slice)
            images.push(styles.pie)
        }
        // creates the div containers, with alternating columns beginning with alternating images
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

    // sets the number of columns across the page width, the integers will dictate which image the column begins with
    const columns = [1,2,1,2,1,2,1,2,1,2,1,2,1,2]

    return (

        // full background
        <div id="wrapper" className={styles.wrapper}>

            {/* creates columns of pizza images */}
            {columns.map((col, idx) => {
                return(
                    
                    // column "#1" - begins with the pie image
                    (col === 1) ?
                    <div key={idx} id={col} className={`flex-1 ${styles.column1}`}>
                    
                    {/* check to make sure the div containers for images have been created - see line 58 for exception handling */}
                    {(images.length > 0) ?
                        images.map((image, idx) => {
                            return(
                                (idx % 2 === 0) ?
                                <div key={idx} id={image} className={styles.slice} ></div>
                                :
                                <div key={idx} id={image} className={styles.pie} ></div>
                            )
                        })
                        // handle exception, generate image divs
                        :
                        imageGenerator()
                    }
                    </div>

                    // column "#2" - begins with the slice image
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
                        // exception handling, same as above
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
