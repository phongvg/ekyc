import BasicTooltip from '@/components/Ui-kits/Tooltip/BasicTooltip'
import ColoredTooltip from '@/components/Ui-kits/Tooltip/ColoredTooltip'
import Filledtooltip from '@/components/Ui-kits/Tooltip/Filledtooltip'
import HtmlTooltip from '@/components/Ui-kits/Tooltip/HtmlTooltip'
import TooltipDirection from '@/components/Ui-kits/Tooltip/TooltipDirections'
import Breadcrumbs from 'CommonElements/Breadcrumbs'
import React from 'react'
import { Container, Row } from 'reactstrap'

const Tooltip = () => {
    return (
        <div className='page-body'>
            <Breadcrumbs title='Tooltip' mainTitle='Tooltip' parent='Ui Kits' />
            <Container fluid={true}>
                <Row>
                    <BasicTooltip />
                    <ColoredTooltip />
                    <TooltipDirection />
                    <HtmlTooltip />
                    <Filledtooltip />
                </Row>
            </Container>
        </div>
    )
}

export default Tooltip