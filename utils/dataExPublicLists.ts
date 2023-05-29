// PublicList Array contains Object list | Array[ Object{ number, string, Array[ Objects{} ] } ]

const publicLists = [
    {
        id: 1,
        name: 'Favorites',
        items: [
            {
                id: 'ss639QH-s7',
                favorite: true,
                name: 'Asset Management',
                def: 'The ServiceNow® Asset Management application integrates the physical, technological, contractual, and financial aspects of information technology assets.',
                ver: 'Utah',
                ref: 'docs.servicenow.com/bundle/utah-it-service-management/page/product/asset-management/concept/c_AssetManagement.html',
                product: 'IT Service Management [ITSM]',
                tags: ['Asset Management', 'ITSM', 'ITAM'],
            },
            {
                id: 'vvPmUwhXEz',
                favorite: true,
                name: 'Product Catalog',
                def: 'The product catalog is a set of information about individual models. Models are specific versions or various configurations of an asset. Asset managers use the product catalog as a centralized repository for model information.',
                ver: 'Utah',
                ref: 'docs.servicenow.com/bundle/utah-it-asset-management/page/product/product-catalog/concept/c_ProductCatalog.html',
                product: 'Product Catalog',
                tags: [
                'Product Catalog',
                'Asset Management',
                'Procurement',
                'Request',
                'Contract',
                'Vender',
                ],
            },
            {
                id: 'ss639QH-s7',
                favorite: false,
                name: 'Asset Management',
                def: 'The ServiceNow® Asset Management application integrates the physical, technological, contractual, and financial aspects of information technology assets.',
                ver: 'Utah',
                ref: 'docs.servicenow.com/bundle/utah-it-service-management/page/product/asset-management/concept/c_AssetManagement.html',
                product: 'IT Service Management [ITSM]',
                tags: ['Asset Management', 'ITSM', 'ITAM'], 
            },
        ]
    },
    {
        id:2,
        name: 'Lists1',
        items: [{
            id: 'ss639QH-s7',
            favorite: true,
            name: 'Asset Management',
            def: 'The ServiceNow® Asset Management application integrates the physical, technological, contractual, and financial aspects of information technology assets.',
            ver: 'Utah',
            ref: 'docs.servicenow.com/bundle/utah-it-service-management/page/product/asset-management/concept/c_AssetManagement.html',
            product: 'IT Service Management [ITSM]',
            tags: ['Asset Management', 'ITSM', 'ITAM'],
        }]
    },
    {
        id:3,
        name: 'Lists2',
        items: [{
            id: 'vvPmUwhXEz',
            favorite: true,
                name: 'Product Catalog',
                def: 'The product catalog is a set of information about individual models. Models are specific versions or various configurations of an asset. Asset managers use the product catalog as a centralized repository for model information.',
                ver: 'Utah',
                ref: 'docs.servicenow.com/bundle/utah-it-asset-management/page/product/product-catalog/concept/c_ProductCatalog.html',
                product: 'Product Catalog',
                tags: [
                'Product Catalog',
                'Asset Management',
                'Procurement',
                'Request',
                'Contract',
                'Vender',
                ],
            }
        ]
    },
    {
        id: 4,
        name: 'Lists3',
        glossary: [{
            id: 'NQWH-lojbF',
            favorite: false,
            name: 'Models',
            def: 'Models are specific versions or various configurations of an asset. Models are used for managing and tracking assets through various ServiceNow platform asset applications, including Product Catalog, Asset Management, and Procurement.',
            ver: 'Utah',
            ref: 'docs.servicenow.com/bundle/utah-it-asset-management/page/product/product-catalog/concept/c_Models.html',
            product: 'Product Catalog',
            tags: ['Models','Product Catalog', 'Asset Management', 'Procurement'],
            }
        ]
    }
] 
export default publicLists;
