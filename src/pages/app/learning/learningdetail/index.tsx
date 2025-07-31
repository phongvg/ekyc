import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/index';
import DetailedCourseContainer from '@/components/Miscellaneous/Learning/DetailedCourse';

const learningList = () => {
    return (
        <div className='page-body'>
            <Breadcrumbs title='Learning List' mainTitle='Learning List' parent='Learning' />
            <DetailedCourseContainer />
        </div>
    )
}

export default learningList
