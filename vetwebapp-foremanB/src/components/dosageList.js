import React from "react";
import DosageCard from "./dosageCard";
import { Table } from 'semantic-ui-react';

// Creates the form for drug data, calling the drug card which fills in the data.
const DosageList = (props) => {
    console.log(props);

    const renderDosageList = props.dosages.map((dosage) => {    
        return (
            <DosageCard 
            dosage={dosage}
            clickHandler={props.deleteDosageHandler}
            editDosageHandler={props.editDosageHandler}
            key={dosage.id}>
            </DosageCard>
        );
    });
    return <Table>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell width={2}>Dosage</Table.HeaderCell>
                <Table.HeaderCell width={1} textAlign='left'>Method</Table.HeaderCell>
                <Table.HeaderCell width={1} textAlign='left'>Concentration</Table.HeaderCell>
                <Table.HeaderCell width={1} textAlign='left'>Concentration Unit</Table.HeaderCell>
                <Table.HeaderCell width={1} textAlign='left'>Dosage Low</Table.HeaderCell>
                <Table.HeaderCell width={1} textAlign='left'>Dosage High</Table.HeaderCell>
                <Table.HeaderCell width={1} textAlign='left'>Dosage Unit</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
                <Table.HeaderCell width={1} textAlign='center'>Edit</Table.HeaderCell>
                <Table.HeaderCell width={1} textAlign='right'>Remove</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {renderDosageList}
        </Table.Body>
    </Table>;
};

export default DosageList;