import {useState} from 'react'
import Head from 'next/head';
import TopAppBar from '../components/TopAppBar'
import CustomerGrid from "../components/CustomerGrid";
import Stack from '@mui/material/Stack';
import UploadDropzone from "../components/UploadDropZone";

export default function Home() {
    const [customers, setCustomers] = useState([])
    return (
        <div style={{width: '100%'}}>
            <Head>
                <title>Outdoor.sy</title>
                <meta name="description" content="Outdoor.sy Admin Customer Portal"/>
                <link rel="icon" href="/favicon.png"/>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <TopAppBar authenticated={true}/>
            <Stack spacing={2} mt={2}>
                <UploadDropzone setCustomers={setCustomers}/>
                <CustomerGrid customers={customers}/>
            </Stack>
        </div>
    )
}
