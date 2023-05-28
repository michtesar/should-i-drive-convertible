import React from "react"
import {Stack, Typography} from "@mui/material";

export const AppHeadings = () => {
    return (
        <Stack spacing={2} margin={'5%'}>
            <Typography variant={'h2'}>Should I lower the roof <strong>now</strong>?</Typography>
        </Stack>
    )
}