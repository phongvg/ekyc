import AnimetedProgress from '@/components/Ui-kits/Progress/AnimetedProgress'
import BasicProgress from '@/components/Ui-kits/Progress/BasicProgress'
import CustomHeightProgress from '@/components/Ui-kits/Progress/CustomHeightProgress'
import CustomProgress from '@/components/Ui-kits/Progress/CustomProgress'
import LargeProgress from '@/components/Ui-kits/Progress/LargeProgress'
import MultipleBars from '@/components/Ui-kits/Progress/MultipleBars'
import ProgressWithNumber from '@/components/Ui-kits/Progress/ProgressWithNumber'
import SmallProgress from '@/components/Ui-kits/Progress/SmallProgress'
import StripedProgress from '@/components/Ui-kits/Progress/StripedProgress'
import Breadcrumbs from 'CommonElements/Breadcrumbs'
import React from 'react'
import { Container, Row } from 'reactstrap'

const Progress = () => {
    return (
        <div className='page-body'>
            <Breadcrumbs mainTitle='Progress' title='Progress' parent='Ui Kits' />
            <Container fluid={true}>
                <Row>
                    <BasicProgress />
                    <StripedProgress />
                    <AnimetedProgress />
                    <MultipleBars />
                    <ProgressWithNumber />
                    <CustomProgress />
                    <SmallProgress />
                    <LargeProgress />
                    <CustomHeightProgress />
                </Row>
            </Container>
        </div>
    )
}

export default Progress