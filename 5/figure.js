var figure = {
    "frames": [], 
    "layout": {
        "autosize": true, 
        "title": "How often do you plan to utilize the improved inventory?", 
        "plot_bgcolor": "rgb(255, 255, 255)", 
        "yaxis": {
            "domain": [
                0, 
                1
            ], 
            "tickmode": "linear", 
            "title": "Count", 
            "dtick": 1, 
            "range": [
                0, 
                18.94736842105263
            ], 
            "type": "linear", 
            "autorange": true
        }, 
        "showlegend": true, 
        "updatemenus": [
            {
                "widths": [
                    67, 
                    72, 
                    83, 
                    79, 
                    70
                ], 
                "width1": 99, 
                "buttons": [
                    {
                        "args": [
                            "visible", 
                            [
                                true, 
                                false, 
                                false, 
                                false, 
                                false
                            ]
                        ], 
                        "method": "restyle", 
                        "label": "Left Blank"
                    }, 
                    {
                        "args": [
                            "visible", 
                            [
                                false, 
                                true, 
                                false, 
                                false, 
                                false
                            ]
                        ], 
                        "method": "restyle", 
                        "label": "US Sites"
                    }, 
                    {
                        "args": [
                            "visible", 
                            [
                                false, 
                                false, 
                                true, 
                                false, 
                                false
                            ]
                        ], 
                        "method": "restyle", 
                        "label": "Non US Sites"
                    }, 
                    {
                        "args": [
                            "visible", 
                            [
                                false, 
                                false, 
                                false, 
                                true, 
                                false
                            ]
                        ], 
                        "method": "restyle", 
                        "label": "HVTN Core/LAB/SCHARP"
                    }, 
                    {
                        "args": [
                            "visible", 
                            [
                                false, 
                                false, 
                                false, 
                                false, 
                                true
                            ]
                        ], 
                        "method": "restyle", 
                        "label": "All Ppts"
                    }
                ], 
                "y": 1, 
                "openWidth": 83, 
                "active": 4, 
                "x": -0.05, 
                "totalWidth": 99, 
                "headerWidth": 99
            }
        ], 
        "breakpoints": [], 
        "titlefont": {
            "size": 20
        }, 
        "xaxis": {
            "tickfont": {
                "family": "\"Open Sans\", verdana, arial, sans-serif", 
                "size": 16
            }, 
            "tickprefix": "", 
            "domain": [
                0, 
                1
            ], 
            "tickmode": "linear", 
            "title": "Survey Response", 
            "categoryorder": "array", 
            "dtick": 1, 
            "range": [
                -0.5, 
                3.5
            ], 
            "categoryarraysrc": "zongzhang:6:e08992", 
            "titlefont": {
                "color": "rgb(86, 27, 27)", 
                "size": 14
            }, 
            "type": "category", 
            "autorange": true
        }, 
        "hovermode": "closest", 
        "margin": {
            "pad": 0, 
            "r": 10, 
            "b": 120, 
            "l": 60, 
            "t": 55
        }, 
        "legend": {
            "bordercolor": "#444", 
            "yanchor": "auto", 
            "traceorder": "normal", 
            "xanchor": "left", 
            "orientation": "v", 
            "bgcolor": "#fff", 
            "height": 29, 
            "width": 53, 
            "borderwidth": 0, 
            "y": 1, 
            "x": 1.02, 
            "font": {
                "color": "#444", 
                "family": "\"Open Sans\", verdana, arial, sans-serif", 
                "size": 12
            }
        }
    }, 
    "data": [
        {
            "autobinx": true, 
            "uid": "a19f4a", 
            "yaxis": "y", 
            "ysrc": "zongzhang:42:9cd91a", 
            "frame": null, 
            "xsrc": "zongzhang:42:b4b706", 
            "visible": false, 
            "xaxis": "x", 
            "y": [
                "1", 
                "1", 
                "0", 
                "0"
            ], 
            "x": [
                "Use Couple Time/yr", 
                "Use as Needed/Rarely", 
                "Resource better <br>spent elsewhere", 
                "No Need"
            ], 
            "autobiny": true, 
            "type": "bar", 
            "marker": {
                "color": "rgba(31,119,180,1)", 
                "line": {
                    "color": "transparent"
                }, 
                "fillcolor": "rgba(31,119,180,1)"
            }, 
            "name": "Left Blank"
        }, 
        {
            "autobinx": true, 
            "uid": "bf08e7", 
            "yaxis": "y", 
            "ysrc": "zongzhang:42:f124e9", 
            "frame": null, 
            "xsrc": "zongzhang:42:b4b706", 
            "visible": false, 
            "xaxis": "x", 
            "y": [
                "13", 
                "5", 
                "0", 
                "0"
            ], 
            "x": [
                "Use Couple Time/yr", 
                "Use as Needed/Rarely", 
                "Resource better <br>spent elsewhere", 
                "No Need"
            ], 
            "autobiny": true, 
            "type": "bar", 
            "marker": {
                "color": "rgba(255,127,14,1)", 
                "line": {
                    "color": "transparent"
                }, 
                "fillcolor": "rgba(255,127,14,1)"
            }, 
            "name": "US Site"
        }, 
        {
            "autobinx": true, 
            "uid": "f22ea6", 
            "yaxis": "y", 
            "ysrc": "zongzhang:42:7355a6", 
            "frame": null, 
            "xsrc": "zongzhang:42:b4b706", 
            "visible": false, 
            "xaxis": "x", 
            "y": [
                "3", 
                "1", 
                "0", 
                "0"
            ], 
            "x": [
                "Use Couple Time/yr", 
                "Use as Needed/Rarely", 
                "Resource better <br>spent elsewhere", 
                "No Need"
            ], 
            "autobiny": true, 
            "type": "bar", 
            "marker": {
                "color": "rgba(44,160,44,1)", 
                "line": {
                    "color": "transparent"
                }, 
                "fillcolor": "rgba(44,160,44,1)"
            }, 
            "name": "Non-US Site"
        }, 
        {
            "autobinx": true, 
            "uid": "483b54", 
            "yaxis": "y", 
            "ysrc": "zongzhang:42:d0a1d1", 
            "frame": null, 
            "xsrc": "zongzhang:42:b4b706", 
            "visible": false, 
            "xaxis": "x", 
            "y": [
                "1", 
                "2", 
                "0", 
                "2"
            ], 
            "x": [
                "Use Couple Time/yr", 
                "Use as Needed/Rarely", 
                "Resource better <br>spent elsewhere", 
                "No Need"
            ], 
            "autobiny": true, 
            "type": "bar", 
            "marker": {
                "color": "rgba(214,39,40,1)", 
                "line": {
                    "color": "transparent"
                }, 
                "fillcolor": "rgba(214,39,40,1)"
            }, 
            "name": "HVTN Core/Lab/SCHARP"
        }, 
        {
            "autobinx": true, 
            "uid": "da9d3e", 
            "yaxis": "y", 
            "ysrc": "zongzhang:42:393fd6", 
            "frame": null, 
            "xsrc": "zongzhang:42:b4b706", 
            "visible": true, 
            "xaxis": "x", 
            "y": [
                "18", 
                "9", 
                "0", 
                "2"
            ], 
            "x": [
                "Use Couple Time/yr", 
                "Use as Needed/Rarely", 
                "Resource better <br>spent elsewhere", 
                "No Need"
            ], 
            "autobiny": true, 
            "type": "bar", 
            "marker": {
                "color": "rgb(140, 86, 75)", 
                "line": {
                    "color": "transparent"
                }, 
                "fillcolor": "rgba(148,103,189,1)"
            }, 
            "name": "All Ppts"
        }
    ]
}