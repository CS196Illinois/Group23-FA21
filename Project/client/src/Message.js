import React from 'react';
import { Row, Col, Table } from 'reactstrap';

const Message = (props) => {
    const { data } = props;

    if (!data)
        return <div></div>;
    return (
        <Row className="msg">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        
        <span></span>;
        <span></span>
        <Table>
          <tbody></tbody>
        </Table>
      </Col>
    </Row>
    );
};

export default Message;