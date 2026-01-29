import React from 'react';


export const LoadingShimmer: React.FC = () => {
    return (
        <div className=" animate-pulse space-y-3">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {
                    Array.from({length: 5}).map(()=>{
                        return(
                            <div className="space-y-2 " >
                                <div className="h-20 animate-shimmer   rounded-lg max-w-sm"></div>
                                <div className="h-6 animate-shimmer  max-w-xs  rounded-lg"></div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}