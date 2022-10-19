import React from 'react';

const PaperStatistics = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center mb-4  experties-title'>Paper Statistics</h1>
            <div className="div">
                <div className="row row-cols-md-4 paper-number row-cols-1 mx-3  p-5 text-center">

                    <div className="col">
                        <div className='ps-info p-3 shadow-lg'>
                            <h2>11</h2>
                            <h4>Exp</h4>
                        </div>
                    </div>

                    <div className="col">
                        <div className='ps-info p-3 shadow-lg'>
                            <h2>25</h2>
                            <h4>Journal</h4>
                        </div>
                    </div>

                    <div className="col">
                        <div className='ps-info p-3 shadow-lg'>
                            <h2>70</h2>
                            <h4>Conference</h4>
                        </div>
                    </div>

                    <div className="col">
                        <div className='ps-info p-3 shadow-lg'>
                            <h2>17</h2>
                            <h4>Colaboration</h4>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PaperStatistics;