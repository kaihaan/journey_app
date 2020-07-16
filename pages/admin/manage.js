import { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import { Section, ContainerLg, Form } from '../components'

export default function Manage() {

    const callback = (payload) => {
        console.log(payload)
    }

    return (
    <Section>
        <ContainerLg>
            <Form formname="manageTimeline" callback={callback}/>
        </ContainerLg>
    </Section>)
}