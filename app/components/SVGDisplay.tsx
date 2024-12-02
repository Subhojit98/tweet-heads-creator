import { Suspense, lazy, memo } from 'react';
import Loader from '@/app/components/Loader'
interface SVGDisplayProps {
    id: number;
    color: string;
}


const SVGDisplay: React.FC<SVGDisplayProps> = memo(({ id, color }) => {

    const SVGComponent = lazy(() => import(`../components/patterns/Pattern_${id}`));

    return (
        <div className='w-full h-full absolute duration-300 ease-linear z-20'>
            <Suspense fallback={<Loader />}>
                <SVGComponent color={color} />
            </Suspense>
        </div>
    );

})

SVGDisplay.displayName = "SVGDisplay";
export default SVGDisplay;
