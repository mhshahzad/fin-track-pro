import {Button, FormLabel, Grid, Input} from "@mui/joy";

const InvoicePage = () => {
    return (
        <Grid container spacing={2} p={4}>
            <Grid xs={12} md={4} sm={12}>
                <FormLabel>Select Start Date: </FormLabel>
                <Input type={'date'}></Input>
                <FormLabel>Select End Date: </FormLabel>
                <Input type={'date'}></Input>
                <FormLabel>Invoice Number </FormLabel>
                <Input type={'number'}></Input>
                <FormLabel>Month </FormLabel>
                <Input type={'month'}></Input>
                <Button fullWidth>Generate</Button>
            </Grid>
        </Grid>
    );
}

export default InvoicePage;