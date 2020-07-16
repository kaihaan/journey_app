const REQUIRED = true
//const NOT_REQUIRED = false

const forms = {
    // main form for managing timeline / map entries
    manageTimeline: [
        {
            type: 'text',
            label: 'Subject',
            props: {
                name: 'subject',
                id: 'subject',
                placeholder: "Timeline's subject",
                required: REQUIRED,
            },
            validation: [
                { maxlen: 15 }
            ],
            options: []
        },
        {
            type: 'date',
            label: 'Date',
            props: {
                name: 'date',
                id: 'date',
                placeholder: 'date YYYY-MM-DD',
                required: REQUIRED,
            },
            validation: [
                { dateFormat: 'YYYY-MM-DD' },
            ],
            options: []
        },
        {
            type: 'textarea',
            label: 'Description',
            props: {
                name: 'description',
                id: 'description',
                placeholder: 'description of event',
                required: REQUIRED,
            },
            validation: [
                { maxlen: 120 },
            ],
            options: []
        },
        {
            type: 'text',
            label: 'Place',
            props: {
                name: 'place',
                id: 'place',
                placeholder: 'Name of place',
                required: REQUIRED,
            },
            validation: [{ maxlen: 15 }],
            options: []

        },
        {
            type: 'geoloc',
            label: 'Lat,Long',
            props: {
                name: 'geoloc',
                id: 'geoloc',
                placeholder: '0.0000000, 0.0000000',
                required: REQUIRED,
            },
            validation: [{ geoloc: true }],
            options: []

        },
        {
            type: 'text',
            label: 'Person',
            props: {
                name: 'person',
                id: 'person',
                placeholder: 'Main person involved',
                required: REQUIRED,
            },
            validation: [
                { maxlen: 15 },
            ],
            options: []
        },
        {
            type: 'text',
            label: 'Link',
            props: {
                name: 'link',
                id: 'link',
                placeholder: 'Link to related info',
                required: REQUIRED,
            },
            validation: [
                { link: true },
            ],
            options: []
        },
    ],

    // field for entering geocode target
    geocode: [
        {
            type: 'text',
            label: 'Location',
            props: {
                name: 'location',
                id: 'location',
                placeholder: 'where the even took place',
                required: REQUIRED,
            },
            validation: [
                { maxlen: 15 },
            ],
            options: []
        },
    ]
}

export default forms