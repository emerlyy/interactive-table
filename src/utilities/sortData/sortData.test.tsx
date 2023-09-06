import { sortData } from "../sortData/sortData"

const data = [
    {
        "id": 43,
        "firstName": "Desmond",
        "lastName": "Longmire",
        "email": "AMorin@nunc.io",
        "phone": "(739)433-6086",
        "address": {
            "streetAddress": "6509 Sit St",
            "city": "Fe Warren Afb",
            "state": "UT",
            "zip": "52245"
        },
        "description": "tellus sit tortor dolor sed consectetur lectus dui massa porttitor placerat nec placerat lacus lectus facilisis nullam sagittis ac ante placerat eros vitae aenean porta sit id pulvinar at dui tellus ante"
    },
    {
        "id": 568,
        "firstName": "Kantanzia",
        "lastName": "Szewczuk",
        "email": "DDiramio@mattis.net",
        "phone": "(261)938-6669",
        "address": {
            "streetAddress": "5809 Dolor Ln",
            "city": "Rockville",
            "state": "RI",
            "zip": "53693"
        },
        "description": "aliquam sagittis tincidunt pulvinar fringilla mi massa at ipsum dolor non massa rutrum nec massa nullam odio magna vestibulum risus vestibulum lacus ac et scelerisque lacus vestibulum id sagittis massa dui lacus"
    },
    {
        "id": 442,
        "firstName": "Diana",
        "lastName": "Eubanks",
        "email": "TDiramio@vestibulum.net",
        "phone": "(318)542-4769",
        "address": {
            "streetAddress": "4107 Et St",
            "city": "Baltimore",
            "state": "SD",
            "zip": "50421"
        },
        "description": "massa orci sagittis neque etiam ante sed curabitur in rutrum magna mattis placerat pulvinar id libero sit in sollicitudin vitae lacus convallis dolor amet eros ipsum velit sollicitudin mi sagittis sapien aliquam"
    },
    {
        "id": 719,
        "firstName": "Danny",
        "lastName": "Gentenaar",
        "email": "DStar@in.net",
        "phone": "(611)397-6402",
        "address": {
            "streetAddress": "685 Elit Ct",
            "city": "Eglin Afb",
            "state": "RI",
            "zip": "97456"
        },
        "description": "curabitur risus lacus in massa elementum mattis pretium massa amet mi malesuada sed orci amet adipiscing porta magna risus ante dolor dolor tortor aenean orci magna ipsum neque ipsum scelerisque tincidunt suspendisse"
    },
    {
        "id": 17,
        "firstName": "Ollie",
        "lastName": "Trautman",
        "email": "VDykstra@suspendisse.com",
        "phone": "(635)370-0396",
        "address": {
            "streetAddress": "2342 Massa Dr",
            "city": "Woodland Hills",
            "state": "NJ",
            "zip": "30037"
        },
        "description": "vel mattis libero massa egestas massa vel tortor eget lectus massa dolor elit sapien tincidunt curabitur lectus ac ac malesuada tortor ac odio lacus pretium sit vitae nec morbi tellus porttitor curabitur"
    },
    {
        "id": 413,
        "firstName": "Phuong",
        "lastName": "Petti",
        "email": "JOtto@nullam.com",
        "phone": "(480)764-5351",
        "address": {
            "streetAddress": "2700 Sollicitudin Ct",
            "city": "Ashburn",
            "state": "AK",
            "zip": "53508"
        },
        "description": "et dolor sed consequat aenean at sit dolor velit pharetra risus vel tellus aenean magna et amet placerat consequat amet ipsum nullam suspendisse egestas sit magna porta mattis mattis consectetur consequat mattis"
    },
    {
        "id": 565,
        "firstName": "Polina",
        "lastName": "Seymour",
        "email": "SSkiffington@sapien.com",
        "phone": "(473)480-8077",
        "address": {
            "streetAddress": "9683 Lorem Ct",
            "city": "East Boston",
            "state": "MA",
            "zip": "39062"
        },
        "description": "scelerisque sit elementum in placerat etiam lorem nec molestie rutrum molestie aliquam hendrerit sed adipiscing eget placerat lacus magna tempor at malesuada lacus et morbi pulvinar risus mattis magna elit in pulvinar"
    },
    {
        "id": 316,
        "firstName": "Gerard",
        "lastName": "Scribner",
        "email": "NGreene@nec.io",
        "phone": "(582)171-9028",
        "address": {
            "streetAddress": "4657 At Rd",
            "city": "Fort Campbell",
            "state": "ND",
            "zip": "35836"
        },
        "description": "aliquam libero scelerisque scelerisque eros sit scelerisque sed sit ac porta placerat pretium eget donec amet sagittis lacus sollicitudin nec odio odio orci curabitur mattis placerat quis morbi nec dolor amet consectetur"
    },
    {
        "id": 389,
        "firstName": "Corretta",
        "lastName": "Houston",
        "email": "EZhu@eros.io",
        "phone": "(146)774-6405",
        "address": {
            "streetAddress": "5433 Aliquam Rd",
            "city": "Pacoima",
            "state": "PA",
            "zip": "53941"
        },
        "description": "elit sapien hendrerit ac rutrum nullam neque pretium nullam at sollicitudin malesuada dolor non vel mattis convallis aenean sollicitudin pulvinar sed sed turpis tincidunt sed ac hendrerit aenean at placerat placerat sollicitudin"
    },
    {
        "id": 728,
        "firstName": "Fritz",
        "lastName": "Ibanez",
        "email": "NSchreiner@lacus.org",
        "phone": "(519)282-7448",
        "address": {
            "streetAddress": "2915 Ipsum Dr",
            "city": "El Paso",
            "state": "WA",
            "zip": "46511"
        },
        "description": "sed lorem sapien orci libero et sapien sagittis placerat scelerisque sit nunc risus adipiscing sit aenean mattis mattis sed magna rutrum magna molestie mattis neque nunc magna sagittis ante lacus dolor molestie"
    }
]


describe('sortData', () => {
    test('Number sorting ascending', () => {
        expect(sortData(data, 'id', 'asc')).toMatchObject([
            {
                "id": 17,
                "firstName": "Ollie",
                "lastName": "Trautman",
                "email": "VDykstra@suspendisse.com",
                "phone": "(635)370-0396",
                "address": {
                    "streetAddress": "2342 Massa Dr",
                    "city": "Woodland Hills",
                    "state": "NJ",
                    "zip": "30037"
                },
                "description": "vel mattis libero massa egestas massa vel tortor eget lectus massa dolor elit sapien tincidunt curabitur lectus ac ac malesuada tortor ac odio lacus pretium sit vitae nec morbi tellus porttitor curabitur"
            },
            {
                "id": 43,
                "firstName": "Desmond",
                "lastName": "Longmire",
                "email": "AMorin@nunc.io",
                "phone": "(739)433-6086",
                "address": {
                    "streetAddress": "6509 Sit St",
                    "city": "Fe Warren Afb",
                    "state": "UT",
                    "zip": "52245"
                },
                "description": "tellus sit tortor dolor sed consectetur lectus dui massa porttitor placerat nec placerat lacus lectus facilisis nullam sagittis ac ante placerat eros vitae aenean porta sit id pulvinar at dui tellus ante"
            },
            {
                "id": 316,
                "firstName": "Gerard",
                "lastName": "Scribner",
                "email": "NGreene@nec.io",
                "phone": "(582)171-9028",
                "address": {
                    "streetAddress": "4657 At Rd",
                    "city": "Fort Campbell",
                    "state": "ND",
                    "zip": "35836"
                },
                "description": "aliquam libero scelerisque scelerisque eros sit scelerisque sed sit ac porta placerat pretium eget donec amet sagittis lacus sollicitudin nec odio odio orci curabitur mattis placerat quis morbi nec dolor amet consectetur"
            },
            {
                "id": 389,
                "firstName": "Corretta",
                "lastName": "Houston",
                "email": "EZhu@eros.io",
                "phone": "(146)774-6405",
                "address": {
                    "streetAddress": "5433 Aliquam Rd",
                    "city": "Pacoima",
                    "state": "PA",
                    "zip": "53941"
                },
                "description": "elit sapien hendrerit ac rutrum nullam neque pretium nullam at sollicitudin malesuada dolor non vel mattis convallis aenean sollicitudin pulvinar sed sed turpis tincidunt sed ac hendrerit aenean at placerat placerat sollicitudin"
            },
            {
                "id": 413,
                "firstName": "Phuong",
                "lastName": "Petti",
                "email": "JOtto@nullam.com",
                "phone": "(480)764-5351",
                "address": {
                    "streetAddress": "2700 Sollicitudin Ct",
                    "city": "Ashburn",
                    "state": "AK",
                    "zip": "53508"
                },
                "description": "et dolor sed consequat aenean at sit dolor velit pharetra risus vel tellus aenean magna et amet placerat consequat amet ipsum nullam suspendisse egestas sit magna porta mattis mattis consectetur consequat mattis"
            },
            {
                "id": 442,
                "firstName": "Diana",
                "lastName": "Eubanks",
                "email": "TDiramio@vestibulum.net",
                "phone": "(318)542-4769",
                "address": {
                    "streetAddress": "4107 Et St",
                    "city": "Baltimore",
                    "state": "SD",
                    "zip": "50421"
                },
                "description": "massa orci sagittis neque etiam ante sed curabitur in rutrum magna mattis placerat pulvinar id libero sit in sollicitudin vitae lacus convallis dolor amet eros ipsum velit sollicitudin mi sagittis sapien aliquam"
            },
            {
                "id": 565,
                "firstName": "Polina",
                "lastName": "Seymour",
                "email": "SSkiffington@sapien.com",
                "phone": "(473)480-8077",
                "address": {
                    "streetAddress": "9683 Lorem Ct",
                    "city": "East Boston",
                    "state": "MA",
                    "zip": "39062"
                },
                "description": "scelerisque sit elementum in placerat etiam lorem nec molestie rutrum molestie aliquam hendrerit sed adipiscing eget placerat lacus magna tempor at malesuada lacus et morbi pulvinar risus mattis magna elit in pulvinar"
            },
            {
                "id": 568,
                "firstName": "Kantanzia",
                "lastName": "Szewczuk",
                "email": "DDiramio@mattis.net",
                "phone": "(261)938-6669",
                "address": {
                    "streetAddress": "5809 Dolor Ln",
                    "city": "Rockville",
                    "state": "RI",
                    "zip": "53693"
                },
                "description": "aliquam sagittis tincidunt pulvinar fringilla mi massa at ipsum dolor non massa rutrum nec massa nullam odio magna vestibulum risus vestibulum lacus ac et scelerisque lacus vestibulum id sagittis massa dui lacus"
            },
            {
                "id": 719,
                "firstName": "Danny",
                "lastName": "Gentenaar",
                "email": "DStar@in.net",
                "phone": "(611)397-6402",
                "address": {
                    "streetAddress": "685 Elit Ct",
                    "city": "Eglin Afb",
                    "state": "RI",
                    "zip": "97456"
                },
                "description": "curabitur risus lacus in massa elementum mattis pretium massa amet mi malesuada sed orci amet adipiscing porta magna risus ante dolor dolor tortor aenean orci magna ipsum neque ipsum scelerisque tincidunt suspendisse"
            },
            {
                "id": 728,
                "firstName": "Fritz",
                "lastName": "Ibanez",
                "email": "NSchreiner@lacus.org",
                "phone": "(519)282-7448",
                "address": {
                    "streetAddress": "2915 Ipsum Dr",
                    "city": "El Paso",
                    "state": "WA",
                    "zip": "46511"
                },
                "description": "sed lorem sapien orci libero et sapien sagittis placerat scelerisque sit nunc risus adipiscing sit aenean mattis mattis sed magna rutrum magna molestie mattis neque nunc magna sagittis ante lacus dolor molestie"
            }
        ])
    })

    test('Number sorting descending', () => {
        expect(sortData(data, 'id', 'desc')).toMatchObject([
            {
                "id": 728,
                "firstName": "Fritz",
                "lastName": "Ibanez",
                "email": "NSchreiner@lacus.org",
                "phone": "(519)282-7448",
                "address": {
                    "streetAddress": "2915 Ipsum Dr",
                    "city": "El Paso",
                    "state": "WA",
                    "zip": "46511"
                },
                "description": "sed lorem sapien orci libero et sapien sagittis placerat scelerisque sit nunc risus adipiscing sit aenean mattis mattis sed magna rutrum magna molestie mattis neque nunc magna sagittis ante lacus dolor molestie"
            },
            {
                "id": 719,
                "firstName": "Danny",
                "lastName": "Gentenaar",
                "email": "DStar@in.net",
                "phone": "(611)397-6402",
                "address": {
                    "streetAddress": "685 Elit Ct",
                    "city": "Eglin Afb",
                    "state": "RI",
                    "zip": "97456"
                },
                "description": "curabitur risus lacus in massa elementum mattis pretium massa amet mi malesuada sed orci amet adipiscing porta magna risus ante dolor dolor tortor aenean orci magna ipsum neque ipsum scelerisque tincidunt suspendisse"
            },
            {
                "id": 568,
                "firstName": "Kantanzia",
                "lastName": "Szewczuk",
                "email": "DDiramio@mattis.net",
                "phone": "(261)938-6669",
                "address": {
                    "streetAddress": "5809 Dolor Ln",
                    "city": "Rockville",
                    "state": "RI",
                    "zip": "53693"
                },
                "description": "aliquam sagittis tincidunt pulvinar fringilla mi massa at ipsum dolor non massa rutrum nec massa nullam odio magna vestibulum risus vestibulum lacus ac et scelerisque lacus vestibulum id sagittis massa dui lacus"
            },
            {
                "id": 565,
                "firstName": "Polina",
                "lastName": "Seymour",
                "email": "SSkiffington@sapien.com",
                "phone": "(473)480-8077",
                "address": {
                    "streetAddress": "9683 Lorem Ct",
                    "city": "East Boston",
                    "state": "MA",
                    "zip": "39062"
                },
                "description": "scelerisque sit elementum in placerat etiam lorem nec molestie rutrum molestie aliquam hendrerit sed adipiscing eget placerat lacus magna tempor at malesuada lacus et morbi pulvinar risus mattis magna elit in pulvinar"
            },
            {
                "id": 442,
                "firstName": "Diana",
                "lastName": "Eubanks",
                "email": "TDiramio@vestibulum.net",
                "phone": "(318)542-4769",
                "address": {
                    "streetAddress": "4107 Et St",
                    "city": "Baltimore",
                    "state": "SD",
                    "zip": "50421"
                },
                "description": "massa orci sagittis neque etiam ante sed curabitur in rutrum magna mattis placerat pulvinar id libero sit in sollicitudin vitae lacus convallis dolor amet eros ipsum velit sollicitudin mi sagittis sapien aliquam"
            },
            {
                "id": 413,
                "firstName": "Phuong",
                "lastName": "Petti",
                "email": "JOtto@nullam.com",
                "phone": "(480)764-5351",
                "address": {
                    "streetAddress": "2700 Sollicitudin Ct",
                    "city": "Ashburn",
                    "state": "AK",
                    "zip": "53508"
                },
                "description": "et dolor sed consequat aenean at sit dolor velit pharetra risus vel tellus aenean magna et amet placerat consequat amet ipsum nullam suspendisse egestas sit magna porta mattis mattis consectetur consequat mattis"
            },
            {
                "id": 389,
                "firstName": "Corretta",
                "lastName": "Houston",
                "email": "EZhu@eros.io",
                "phone": "(146)774-6405",
                "address": {
                    "streetAddress": "5433 Aliquam Rd",
                    "city": "Pacoima",
                    "state": "PA",
                    "zip": "53941"
                },
                "description": "elit sapien hendrerit ac rutrum nullam neque pretium nullam at sollicitudin malesuada dolor non vel mattis convallis aenean sollicitudin pulvinar sed sed turpis tincidunt sed ac hendrerit aenean at placerat placerat sollicitudin"
            },
            {
                "id": 316,
                "firstName": "Gerard",
                "lastName": "Scribner",
                "email": "NGreene@nec.io",
                "phone": "(582)171-9028",
                "address": {
                    "streetAddress": "4657 At Rd",
                    "city": "Fort Campbell",
                    "state": "ND",
                    "zip": "35836"
                },
                "description": "aliquam libero scelerisque scelerisque eros sit scelerisque sed sit ac porta placerat pretium eget donec amet sagittis lacus sollicitudin nec odio odio orci curabitur mattis placerat quis morbi nec dolor amet consectetur"
            },
            {
                "id": 43,
                "firstName": "Desmond",
                "lastName": "Longmire",
                "email": "AMorin@nunc.io",
                "phone": "(739)433-6086",
                "address": {
                    "streetAddress": "6509 Sit St",
                    "city": "Fe Warren Afb",
                    "state": "UT",
                    "zip": "52245"
                },
                "description": "tellus sit tortor dolor sed consectetur lectus dui massa porttitor placerat nec placerat lacus lectus facilisis nullam sagittis ac ante placerat eros vitae aenean porta sit id pulvinar at dui tellus ante"
            },
            {
                "id": 17,
                "firstName": "Ollie",
                "lastName": "Trautman",
                "email": "VDykstra@suspendisse.com",
                "phone": "(635)370-0396",
                "address": {
                    "streetAddress": "2342 Massa Dr",
                    "city": "Woodland Hills",
                    "state": "NJ",
                    "zip": "30037"
                },
                "description": "vel mattis libero massa egestas massa vel tortor eget lectus massa dolor elit sapien tincidunt curabitur lectus ac ac malesuada tortor ac odio lacus pretium sit vitae nec morbi tellus porttitor curabitur"
            }
        ])
    })

    test('Name sorting ascending', () => {
        expect(sortData(data, 'firstName', 'asc')).toMatchObject([
            {
                "id": 389,
                "firstName": "Corretta",
                "lastName": "Houston",
                "email": "EZhu@eros.io",
                "phone": "(146)774-6405",
                "address": {
                    "streetAddress": "5433 Aliquam Rd",
                    "city": "Pacoima",
                    "state": "PA",
                    "zip": "53941"
                },
                "description": "elit sapien hendrerit ac rutrum nullam neque pretium nullam at sollicitudin malesuada dolor non vel mattis convallis aenean sollicitudin pulvinar sed sed turpis tincidunt sed ac hendrerit aenean at placerat placerat sollicitudin"
            },
            {
                "id": 719,
                "firstName": "Danny",
                "lastName": "Gentenaar",
                "email": "DStar@in.net",
                "phone": "(611)397-6402",
                "address": {
                    "streetAddress": "685 Elit Ct",
                    "city": "Eglin Afb",
                    "state": "RI",
                    "zip": "97456"
                },
                "description": "curabitur risus lacus in massa elementum mattis pretium massa amet mi malesuada sed orci amet adipiscing porta magna risus ante dolor dolor tortor aenean orci magna ipsum neque ipsum scelerisque tincidunt suspendisse"
            },
            {
                "id": 43,
                "firstName": "Desmond",
                "lastName": "Longmire",
                "email": "AMorin@nunc.io",
                "phone": "(739)433-6086",
                "address": {
                    "streetAddress": "6509 Sit St",
                    "city": "Fe Warren Afb",
                    "state": "UT",
                    "zip": "52245"
                },
                "description": "tellus sit tortor dolor sed consectetur lectus dui massa porttitor placerat nec placerat lacus lectus facilisis nullam sagittis ac ante placerat eros vitae aenean porta sit id pulvinar at dui tellus ante"
            },
            {
                "id": 442,
                "firstName": "Diana",
                "lastName": "Eubanks",
                "email": "TDiramio@vestibulum.net",
                "phone": "(318)542-4769",
                "address": {
                    "streetAddress": "4107 Et St",
                    "city": "Baltimore",
                    "state": "SD",
                    "zip": "50421"
                },
                "description": "massa orci sagittis neque etiam ante sed curabitur in rutrum magna mattis placerat pulvinar id libero sit in sollicitudin vitae lacus convallis dolor amet eros ipsum velit sollicitudin mi sagittis sapien aliquam"
            },
            {
                "id": 728,
                "firstName": "Fritz",
                "lastName": "Ibanez",
                "email": "NSchreiner@lacus.org",
                "phone": "(519)282-7448",
                "address": {
                    "streetAddress": "2915 Ipsum Dr",
                    "city": "El Paso",
                    "state": "WA",
                    "zip": "46511"
                },
                "description": "sed lorem sapien orci libero et sapien sagittis placerat scelerisque sit nunc risus adipiscing sit aenean mattis mattis sed magna rutrum magna molestie mattis neque nunc magna sagittis ante lacus dolor molestie"
            },
            {
                "id": 316,
                "firstName": "Gerard",
                "lastName": "Scribner",
                "email": "NGreene@nec.io",
                "phone": "(582)171-9028",
                "address": {
                    "streetAddress": "4657 At Rd",
                    "city": "Fort Campbell",
                    "state": "ND",
                    "zip": "35836"
                },
                "description": "aliquam libero scelerisque scelerisque eros sit scelerisque sed sit ac porta placerat pretium eget donec amet sagittis lacus sollicitudin nec odio odio orci curabitur mattis placerat quis morbi nec dolor amet consectetur"
            },
            {
                "id": 568,
                "firstName": "Kantanzia",
                "lastName": "Szewczuk",
                "email": "DDiramio@mattis.net",
                "phone": "(261)938-6669",
                "address": {
                    "streetAddress": "5809 Dolor Ln",
                    "city": "Rockville",
                    "state": "RI",
                    "zip": "53693"
                },
                "description": "aliquam sagittis tincidunt pulvinar fringilla mi massa at ipsum dolor non massa rutrum nec massa nullam odio magna vestibulum risus vestibulum lacus ac et scelerisque lacus vestibulum id sagittis massa dui lacus"
            },
            {
                "id": 17,
                "firstName": "Ollie",
                "lastName": "Trautman",
                "email": "VDykstra@suspendisse.com",
                "phone": "(635)370-0396",
                "address": {
                    "streetAddress": "2342 Massa Dr",
                    "city": "Woodland Hills",
                    "state": "NJ",
                    "zip": "30037"
                },
                "description": "vel mattis libero massa egestas massa vel tortor eget lectus massa dolor elit sapien tincidunt curabitur lectus ac ac malesuada tortor ac odio lacus pretium sit vitae nec morbi tellus porttitor curabitur"
            },
            {
                "id": 413,
                "firstName": "Phuong",
                "lastName": "Petti",
                "email": "JOtto@nullam.com",
                "phone": "(480)764-5351",
                "address": {
                    "streetAddress": "2700 Sollicitudin Ct",
                    "city": "Ashburn",
                    "state": "AK",
                    "zip": "53508"
                },
                "description": "et dolor sed consequat aenean at sit dolor velit pharetra risus vel tellus aenean magna et amet placerat consequat amet ipsum nullam suspendisse egestas sit magna porta mattis mattis consectetur consequat mattis"
            },
            {
                "id": 565,
                "firstName": "Polina",
                "lastName": "Seymour",
                "email": "SSkiffington@sapien.com",
                "phone": "(473)480-8077",
                "address": {
                    "streetAddress": "9683 Lorem Ct",
                    "city": "East Boston",
                    "state": "MA",
                    "zip": "39062"
                },
                "description": "scelerisque sit elementum in placerat etiam lorem nec molestie rutrum molestie aliquam hendrerit sed adipiscing eget placerat lacus magna tempor at malesuada lacus et morbi pulvinar risus mattis magna elit in pulvinar"
            }
        ])
    })

    test('Name sorting descending', () => {
        expect(sortData(data, 'firstName', 'desc')).toMatchObject([
            {
                "id": 565,
                "firstName": "Polina",
                "lastName": "Seymour",
                "email": "SSkiffington@sapien.com",
                "phone": "(473)480-8077",
                "address": {
                    "streetAddress": "9683 Lorem Ct",
                    "city": "East Boston",
                    "state": "MA",
                    "zip": "39062"
                },
                "description": "scelerisque sit elementum in placerat etiam lorem nec molestie rutrum molestie aliquam hendrerit sed adipiscing eget placerat lacus magna tempor at malesuada lacus et morbi pulvinar risus mattis magna elit in pulvinar"
            },
            {
                "id": 413,
                "firstName": "Phuong",
                "lastName": "Petti",
                "email": "JOtto@nullam.com",
                "phone": "(480)764-5351",
                "address": {
                    "streetAddress": "2700 Sollicitudin Ct",
                    "city": "Ashburn",
                    "state": "AK",
                    "zip": "53508"
                },
                "description": "et dolor sed consequat aenean at sit dolor velit pharetra risus vel tellus aenean magna et amet placerat consequat amet ipsum nullam suspendisse egestas sit magna porta mattis mattis consectetur consequat mattis"
            },
            {
                "id": 17,
                "firstName": "Ollie",
                "lastName": "Trautman",
                "email": "VDykstra@suspendisse.com",
                "phone": "(635)370-0396",
                "address": {
                    "streetAddress": "2342 Massa Dr",
                    "city": "Woodland Hills",
                    "state": "NJ",
                    "zip": "30037"
                },
                "description": "vel mattis libero massa egestas massa vel tortor eget lectus massa dolor elit sapien tincidunt curabitur lectus ac ac malesuada tortor ac odio lacus pretium sit vitae nec morbi tellus porttitor curabitur"
            },
            {
                "id": 568,
                "firstName": "Kantanzia",
                "lastName": "Szewczuk",
                "email": "DDiramio@mattis.net",
                "phone": "(261)938-6669",
                "address": {
                    "streetAddress": "5809 Dolor Ln",
                    "city": "Rockville",
                    "state": "RI",
                    "zip": "53693"
                },
                "description": "aliquam sagittis tincidunt pulvinar fringilla mi massa at ipsum dolor non massa rutrum nec massa nullam odio magna vestibulum risus vestibulum lacus ac et scelerisque lacus vestibulum id sagittis massa dui lacus"
            },
            {
                "id": 316,
                "firstName": "Gerard",
                "lastName": "Scribner",
                "email": "NGreene@nec.io",
                "phone": "(582)171-9028",
                "address": {
                    "streetAddress": "4657 At Rd",
                    "city": "Fort Campbell",
                    "state": "ND",
                    "zip": "35836"
                },
                "description": "aliquam libero scelerisque scelerisque eros sit scelerisque sed sit ac porta placerat pretium eget donec amet sagittis lacus sollicitudin nec odio odio orci curabitur mattis placerat quis morbi nec dolor amet consectetur"
            },
            {
                "id": 728,
                "firstName": "Fritz",
                "lastName": "Ibanez",
                "email": "NSchreiner@lacus.org",
                "phone": "(519)282-7448",
                "address": {
                    "streetAddress": "2915 Ipsum Dr",
                    "city": "El Paso",
                    "state": "WA",
                    "zip": "46511"
                },
                "description": "sed lorem sapien orci libero et sapien sagittis placerat scelerisque sit nunc risus adipiscing sit aenean mattis mattis sed magna rutrum magna molestie mattis neque nunc magna sagittis ante lacus dolor molestie"
            },
            {
                "id": 442,
                "firstName": "Diana",
                "lastName": "Eubanks",
                "email": "TDiramio@vestibulum.net",
                "phone": "(318)542-4769",
                "address": {
                    "streetAddress": "4107 Et St",
                    "city": "Baltimore",
                    "state": "SD",
                    "zip": "50421"
                },
                "description": "massa orci sagittis neque etiam ante sed curabitur in rutrum magna mattis placerat pulvinar id libero sit in sollicitudin vitae lacus convallis dolor amet eros ipsum velit sollicitudin mi sagittis sapien aliquam"
            },
            {
                "id": 43,
                "firstName": "Desmond",
                "lastName": "Longmire",
                "email": "AMorin@nunc.io",
                "phone": "(739)433-6086",
                "address": {
                    "streetAddress": "6509 Sit St",
                    "city": "Fe Warren Afb",
                    "state": "UT",
                    "zip": "52245"
                },
                "description": "tellus sit tortor dolor sed consectetur lectus dui massa porttitor placerat nec placerat lacus lectus facilisis nullam sagittis ac ante placerat eros vitae aenean porta sit id pulvinar at dui tellus ante"
            },
            {
                "id": 719,
                "firstName": "Danny",
                "lastName": "Gentenaar",
                "email": "DStar@in.net",
                "phone": "(611)397-6402",
                "address": {
                    "streetAddress": "685 Elit Ct",
                    "city": "Eglin Afb",
                    "state": "RI",
                    "zip": "97456"
                },
                "description": "curabitur risus lacus in massa elementum mattis pretium massa amet mi malesuada sed orci amet adipiscing porta magna risus ante dolor dolor tortor aenean orci magna ipsum neque ipsum scelerisque tincidunt suspendisse"
            },
            {
                "id": 389,
                "firstName": "Corretta",
                "lastName": "Houston",
                "email": "EZhu@eros.io",
                "phone": "(146)774-6405",
                "address": {
                    "streetAddress": "5433 Aliquam Rd",
                    "city": "Pacoima",
                    "state": "PA",
                    "zip": "53941"
                },
                "description": "elit sapien hendrerit ac rutrum nullam neque pretium nullam at sollicitudin malesuada dolor non vel mattis convallis aenean sollicitudin pulvinar sed sed turpis tincidunt sed ac hendrerit aenean at placerat placerat sollicitudin"
            }
        ])
    })

    test('Phone sorting ascending', () => {
        expect(sortData(data, 'phone', 'asc')).toMatchObject([
            {
                "id": 389,
                "firstName": "Corretta",
                "lastName": "Houston",
                "email": "EZhu@eros.io",
                "phone": "(146)774-6405",
                "address": {
                    "streetAddress": "5433 Aliquam Rd",
                    "city": "Pacoima",
                    "state": "PA",
                    "zip": "53941"
                },
                "description": "elit sapien hendrerit ac rutrum nullam neque pretium nullam at sollicitudin malesuada dolor non vel mattis convallis aenean sollicitudin pulvinar sed sed turpis tincidunt sed ac hendrerit aenean at placerat placerat sollicitudin"
            },
            {
                "id": 568,
                "firstName": "Kantanzia",
                "lastName": "Szewczuk",
                "email": "DDiramio@mattis.net",
                "phone": "(261)938-6669",
                "address": {
                    "streetAddress": "5809 Dolor Ln",
                    "city": "Rockville",
                    "state": "RI",
                    "zip": "53693"
                },
                "description": "aliquam sagittis tincidunt pulvinar fringilla mi massa at ipsum dolor non massa rutrum nec massa nullam odio magna vestibulum risus vestibulum lacus ac et scelerisque lacus vestibulum id sagittis massa dui lacus"
            },
            {
                "id": 442,
                "firstName": "Diana",
                "lastName": "Eubanks",
                "email": "TDiramio@vestibulum.net",
                "phone": "(318)542-4769",
                "address": {
                    "streetAddress": "4107 Et St",
                    "city": "Baltimore",
                    "state": "SD",
                    "zip": "50421"
                },
                "description": "massa orci sagittis neque etiam ante sed curabitur in rutrum magna mattis placerat pulvinar id libero sit in sollicitudin vitae lacus convallis dolor amet eros ipsum velit sollicitudin mi sagittis sapien aliquam"
            },
            {
                "id": 565,
                "firstName": "Polina",
                "lastName": "Seymour",
                "email": "SSkiffington@sapien.com",
                "phone": "(473)480-8077",
                "address": {
                    "streetAddress": "9683 Lorem Ct",
                    "city": "East Boston",
                    "state": "MA",
                    "zip": "39062"
                },
                "description": "scelerisque sit elementum in placerat etiam lorem nec molestie rutrum molestie aliquam hendrerit sed adipiscing eget placerat lacus magna tempor at malesuada lacus et morbi pulvinar risus mattis magna elit in pulvinar"
            },
            {
                "id": 413,
                "firstName": "Phuong",
                "lastName": "Petti",
                "email": "JOtto@nullam.com",
                "phone": "(480)764-5351",
                "address": {
                    "streetAddress": "2700 Sollicitudin Ct",
                    "city": "Ashburn",
                    "state": "AK",
                    "zip": "53508"
                },
                "description": "et dolor sed consequat aenean at sit dolor velit pharetra risus vel tellus aenean magna et amet placerat consequat amet ipsum nullam suspendisse egestas sit magna porta mattis mattis consectetur consequat mattis"
            },
            {
                "id": 728,
                "firstName": "Fritz",
                "lastName": "Ibanez",
                "email": "NSchreiner@lacus.org",
                "phone": "(519)282-7448",
                "address": {
                    "streetAddress": "2915 Ipsum Dr",
                    "city": "El Paso",
                    "state": "WA",
                    "zip": "46511"
                },
                "description": "sed lorem sapien orci libero et sapien sagittis placerat scelerisque sit nunc risus adipiscing sit aenean mattis mattis sed magna rutrum magna molestie mattis neque nunc magna sagittis ante lacus dolor molestie"
            },
            {
                "id": 316,
                "firstName": "Gerard",
                "lastName": "Scribner",
                "email": "NGreene@nec.io",
                "phone": "(582)171-9028",
                "address": {
                    "streetAddress": "4657 At Rd",
                    "city": "Fort Campbell",
                    "state": "ND",
                    "zip": "35836"
                },
                "description": "aliquam libero scelerisque scelerisque eros sit scelerisque sed sit ac porta placerat pretium eget donec amet sagittis lacus sollicitudin nec odio odio orci curabitur mattis placerat quis morbi nec dolor amet consectetur"
            },
            {
                "id": 719,
                "firstName": "Danny",
                "lastName": "Gentenaar",
                "email": "DStar@in.net",
                "phone": "(611)397-6402",
                "address": {
                    "streetAddress": "685 Elit Ct",
                    "city": "Eglin Afb",
                    "state": "RI",
                    "zip": "97456"
                },
                "description": "curabitur risus lacus in massa elementum mattis pretium massa amet mi malesuada sed orci amet adipiscing porta magna risus ante dolor dolor tortor aenean orci magna ipsum neque ipsum scelerisque tincidunt suspendisse"
            },
            {
                "id": 17,
                "firstName": "Ollie",
                "lastName": "Trautman",
                "email": "VDykstra@suspendisse.com",
                "phone": "(635)370-0396",
                "address": {
                    "streetAddress": "2342 Massa Dr",
                    "city": "Woodland Hills",
                    "state": "NJ",
                    "zip": "30037"
                },
                "description": "vel mattis libero massa egestas massa vel tortor eget lectus massa dolor elit sapien tincidunt curabitur lectus ac ac malesuada tortor ac odio lacus pretium sit vitae nec morbi tellus porttitor curabitur"
            },
            {
                "id": 43,
                "firstName": "Desmond",
                "lastName": "Longmire",
                "email": "AMorin@nunc.io",
                "phone": "(739)433-6086",
                "address": {
                    "streetAddress": "6509 Sit St",
                    "city": "Fe Warren Afb",
                    "state": "UT",
                    "zip": "52245"
                },
                "description": "tellus sit tortor dolor sed consectetur lectus dui massa porttitor placerat nec placerat lacus lectus facilisis nullam sagittis ac ante placerat eros vitae aenean porta sit id pulvinar at dui tellus ante"
            }
        ])
    })

    test('Phone sorting descending', () => {
        expect(sortData(data, 'phone', 'desc')).toMatchObject([
            {
                "id": 43,
                "firstName": "Desmond",
                "lastName": "Longmire",
                "email": "AMorin@nunc.io",
                "phone": "(739)433-6086",
                "address": {
                    "streetAddress": "6509 Sit St",
                    "city": "Fe Warren Afb",
                    "state": "UT",
                    "zip": "52245"
                },
                "description": "tellus sit tortor dolor sed consectetur lectus dui massa porttitor placerat nec placerat lacus lectus facilisis nullam sagittis ac ante placerat eros vitae aenean porta sit id pulvinar at dui tellus ante"
            },
            {
                "id": 17,
                "firstName": "Ollie",
                "lastName": "Trautman",
                "email": "VDykstra@suspendisse.com",
                "phone": "(635)370-0396",
                "address": {
                    "streetAddress": "2342 Massa Dr",
                    "city": "Woodland Hills",
                    "state": "NJ",
                    "zip": "30037"
                },
                "description": "vel mattis libero massa egestas massa vel tortor eget lectus massa dolor elit sapien tincidunt curabitur lectus ac ac malesuada tortor ac odio lacus pretium sit vitae nec morbi tellus porttitor curabitur"
            },
            {
                "id": 719,
                "firstName": "Danny",
                "lastName": "Gentenaar",
                "email": "DStar@in.net",
                "phone": "(611)397-6402",
                "address": {
                    "streetAddress": "685 Elit Ct",
                    "city": "Eglin Afb",
                    "state": "RI",
                    "zip": "97456"
                },
                "description": "curabitur risus lacus in massa elementum mattis pretium massa amet mi malesuada sed orci amet adipiscing porta magna risus ante dolor dolor tortor aenean orci magna ipsum neque ipsum scelerisque tincidunt suspendisse"
            },
            {
                "id": 316,
                "firstName": "Gerard",
                "lastName": "Scribner",
                "email": "NGreene@nec.io",
                "phone": "(582)171-9028",
                "address": {
                    "streetAddress": "4657 At Rd",
                    "city": "Fort Campbell",
                    "state": "ND",
                    "zip": "35836"
                },
                "description": "aliquam libero scelerisque scelerisque eros sit scelerisque sed sit ac porta placerat pretium eget donec amet sagittis lacus sollicitudin nec odio odio orci curabitur mattis placerat quis morbi nec dolor amet consectetur"
            },
            {
                "id": 728,
                "firstName": "Fritz",
                "lastName": "Ibanez",
                "email": "NSchreiner@lacus.org",
                "phone": "(519)282-7448",
                "address": {
                    "streetAddress": "2915 Ipsum Dr",
                    "city": "El Paso",
                    "state": "WA",
                    "zip": "46511"
                },
                "description": "sed lorem sapien orci libero et sapien sagittis placerat scelerisque sit nunc risus adipiscing sit aenean mattis mattis sed magna rutrum magna molestie mattis neque nunc magna sagittis ante lacus dolor molestie"
            },
            {
                "id": 413,
                "firstName": "Phuong",
                "lastName": "Petti",
                "email": "JOtto@nullam.com",
                "phone": "(480)764-5351",
                "address": {
                    "streetAddress": "2700 Sollicitudin Ct",
                    "city": "Ashburn",
                    "state": "AK",
                    "zip": "53508"
                },
                "description": "et dolor sed consequat aenean at sit dolor velit pharetra risus vel tellus aenean magna et amet placerat consequat amet ipsum nullam suspendisse egestas sit magna porta mattis mattis consectetur consequat mattis"
            },
            {
                "id": 565,
                "firstName": "Polina",
                "lastName": "Seymour",
                "email": "SSkiffington@sapien.com",
                "phone": "(473)480-8077",
                "address": {
                    "streetAddress": "9683 Lorem Ct",
                    "city": "East Boston",
                    "state": "MA",
                    "zip": "39062"
                },
                "description": "scelerisque sit elementum in placerat etiam lorem nec molestie rutrum molestie aliquam hendrerit sed adipiscing eget placerat lacus magna tempor at malesuada lacus et morbi pulvinar risus mattis magna elit in pulvinar"
            },
            {
                "id": 442,
                "firstName": "Diana",
                "lastName": "Eubanks",
                "email": "TDiramio@vestibulum.net",
                "phone": "(318)542-4769",
                "address": {
                    "streetAddress": "4107 Et St",
                    "city": "Baltimore",
                    "state": "SD",
                    "zip": "50421"
                },
                "description": "massa orci sagittis neque etiam ante sed curabitur in rutrum magna mattis placerat pulvinar id libero sit in sollicitudin vitae lacus convallis dolor amet eros ipsum velit sollicitudin mi sagittis sapien aliquam"
            },
            {
                "id": 568,
                "firstName": "Kantanzia",
                "lastName": "Szewczuk",
                "email": "DDiramio@mattis.net",
                "phone": "(261)938-6669",
                "address": {
                    "streetAddress": "5809 Dolor Ln",
                    "city": "Rockville",
                    "state": "RI",
                    "zip": "53693"
                },
                "description": "aliquam sagittis tincidunt pulvinar fringilla mi massa at ipsum dolor non massa rutrum nec massa nullam odio magna vestibulum risus vestibulum lacus ac et scelerisque lacus vestibulum id sagittis massa dui lacus"
            },
            {
                "id": 389,
                "firstName": "Corretta",
                "lastName": "Houston",
                "email": "EZhu@eros.io",
                "phone": "(146)774-6405",
                "address": {
                    "streetAddress": "5433 Aliquam Rd",
                    "city": "Pacoima",
                    "state": "PA",
                    "zip": "53941"
                },
                "description": "elit sapien hendrerit ac rutrum nullam neque pretium nullam at sollicitudin malesuada dolor non vel mattis convallis aenean sollicitudin pulvinar sed sed turpis tincidunt sed ac hendrerit aenean at placerat placerat sollicitudin"
            }
        ])
    })
})