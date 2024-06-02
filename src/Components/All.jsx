// ./Components/All.jsx
import React from 'react';

function All() {
    return <>
        <div className="container">
            <div className="row">
            <div className="col-md-4">
                <div className="card" style={{ width: '25rem', height: '18rem' }}>
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFs9PHNtha14wJWxKT-DmeAXHufgqFGzGgdmtsPLNrDzW33WuGbvUoYXtXXaYKIzUrTE&usqp=CAU" alt="Card image cap" style={{ width: '25rem', height: '15rem' }} />
                    <div className="card-body">
                        <h4 className="card-title">Python Objects 101</h4>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card" style={{ width: '25rem', height: '18rem' }}>
                    <img className="card-img-top" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg" alt="Card image cap" style={{ width: '25rem', height: '15rem' }} />
                    <div className="card-body">
                        <h4 className="card-title">Machine Learning Tools You Must know </h4>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card" style={{ width: '25rem', height: '18rem' }}>
                    <img className="card-img-top" src="https://media.licdn.com/dms/image/D5612AQEvgflxTiA1jw/article-cover_image-shrink_600_2000/0/1713946920982?e=2147483647&v=beta&t=MWTuFeCytataEZWYR8E8Prjjd10cN4jP-XABiSvHYvU" alt="Card image cap" style={{ width: '25rem', height: '15rem' }} />
                    <div className="card-body">
                        <h4 className="card-title">Unlocking the Power of NLP</h4>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
}

export default All;
