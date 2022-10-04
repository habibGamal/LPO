// require('./bootstrap');
import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import Layout from './Layout'
import AppContext from './Contexts/AppContext'
import { Inertia } from '@inertiajs/inertia'
import { message } from 'antd'
// import 'antd/dist/antd.css'
// import './css/index.scss'
const app = document.getElementById('app')

render(
    <AppContext>
        <InertiaApp
            initialPage={JSON.parse(app.dataset.page)}
            // resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
            resolveComponent={
                name => {
                    const page = require(`./Pages/${name}`).default
                    page.layout = page => <Layout children={page} />
                    return page
                }
            }
        />
    </AppContext>
    ,
    app
)
