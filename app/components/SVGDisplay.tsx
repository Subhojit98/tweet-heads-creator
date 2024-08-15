import { Suspense, lazy } from 'react';
import Loader from '@/app/components/Loader'
interface SVGDisplayProps {
    id: number;
    color: string;
}

const SVGDisplay: React.FC<SVGDisplayProps> = ({ id, color }) => {

    const SVGComponent = lazy(() => import(`../components/patterns/Pattern_${id}`));

    return (
        <div className='w-full h-full absolute duration-300 ease-linear z-20'>
            <Suspense fallback={<Loader />}>
                <SVGComponent color={color} />
            </Suspense>
        </div>
    );
};

export default SVGDisplay;
