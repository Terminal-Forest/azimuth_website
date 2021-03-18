
const React = window.React;
const ReactDOM = window.ReactDOM;
const { Vitessce } = window.vitessce.index;

function MyVitessce() {
    const myViewConfig =
    {
        "version": "1.0.0",
        "name": "Human Motor Cortex",
        "datasets": [
            {
                "uid": "human-motor-cortex",
                "name": "Human Motor Cortex",
                "files": [
                    {
                        "type": "cells",
                        "fileType": "anndata-cells.zarr",
                        "url": "https://vitessce-references.s3.us-east-2.amazonaws.com/human-motor-cortex/vitessce_ref.zarr",
                        "options": {
                            "mappings": {
                                "UMAP": {
                                    "key": "obsm/X_umap",
                                    "dims": [0, 1]
                                }
                            },
                            "factors": [
                                "obs/subclass",
                                "obs/class",
                                "obs/cluster",
                                "obs/cross_species_cluster"
                            ]
                        }
                    },
                    {
                        "type": "cell-sets",
                        "fileType": "anndata-cell-sets.zarr",
                        "url": "https://vitessce-references.s3.us-east-2.amazonaws.com/human-motor-cortex/vitessce_ref.zarr",
                        "options": [
                            {
                                "groupName": "subclass",
                                "setName": "obs/subclass"
                            },
                            {
                                "groupName": "class",
                                "setName": "obs/class"
                            },
                            {
                                "groupName": "cluster",
                                "setName": "obs/cluster"
                            },
                            {
                                "groupName": "cross_species_cluster",
                                "setName": "obs/cross_species_cluster"
                            }
                        ]
                    },
                    {
                        "type": "expression-matrix",
                        "fileType": "anndata-expression-matrix.zarr",
                        "url": "https://vitessce-references.s3.us-east-2.amazonaws.com/human-motor-cortex/vitessce_ref.zarr",
                        "options": {
                            "matrix": "X"
                        }
                    }
                ]
            }
        ],
        "initStrategy": "auto",
        "coordinationSpace": {
            "embeddingType": {
                "UMAP": "UMAP"
            }
        },
        "layout": [{
            "component": "cellSets",
            "h": 3, "w": 3, "x": 9, "y": 0,
            "coordinationScopes": {}
        },
        {
            "component": "genes", "h": 3, "w": 3, "x": 9, "y": 3,
            "coordinationScopes": {}
        },
        {
            "component": "scatterplot", "h": 6, "w": 9, "x": 0, "y": 0,
            "coordinationScopes": {
                "embeddingType": "UMAP"
            }
        },
        {
            "component": "heatmap",
            "props": {
                "transpose": true
            },
            "h": 6, "w": 6, "x": 0, "y": 6
        },
        {
            "component": "cellSetExpression",
            "h": 6, "w": 6, "x": 6, "y": 6
        }
        ]
    }

    return (
        <div className="vitessce-app">
            <Vitessce
                config={myViewConfig}
                height={800}
                theme="dark"
            />
        </div>
    );
}

function renderMyVitessce() {
    ReactDOM.render(<MyVitessce />, document.getElementById("vitessce"));
}

renderMyVitessce();

