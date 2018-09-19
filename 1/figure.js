var figure = {
    "frames": [], 
    "layout": {
        "autosize": true, 
        "title": "Did you participate in the first HVTN Investigator &lt;br&gt;Online Data Forum on Sep. 18, 2017?", 
        "plot_bgcolor": "rgb(255, 255, 255)", 
        "yaxis": {
            "domain": [
                0, 
                1
            ], 
            "tickmode": "linear", 
            "title": "Count", 
            "range": [
                0, 
                17.894736842105264
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
            "domain": [
                0, 
                1
            ], 
            "title": "Survey Response", 
            "categoryorder": "array", 
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
            "r": 30, 
            "b": 70, 
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
            "ysrc": "zongzhang:44:9cd91a", 
            "frame": null, 
            "xsrc": "zongzhang:44:b4b706", 
            "visible": false, 
            "xaxis": "x", 
            "y": [
                "0", 
                "0", 
                "0", 
                "1"
            ], 
            "x": [
                "Yes, Attended", 
                "No, No Invitation", 
                "No, Inconvenient Time, <br>No Future Participation", 
                "No, Inconvenient Time, <br>Participation Next Time"
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
            "ysrc": "zongzhang:44:f124e9", 
            "frame": null, 
            "xsrc": "zongzhang:44:b4b706", 
            "visible": false, 
            "xaxis": "x", 
            "y": [
                "9", 
                "4", 
                "1", 
                "6"
            ], 
            "x": [
                "Yes, Attended", 
                "No, No Invitation", 
                "No, Inconvenient Time, <br>No Future Participation", 
                "No, Inconvenient Time, <br>Participation Next Time"
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
            "ysrc": "zongzhang:44:7355a6", 
            "frame": null, 
            "xsrc": "zongzhang:44:b4b706", 
            "visible": false, 
            "xaxis": "x", 
            "y": [
                "1", 
                "1", 
                "0", 
                "5"
            ], 
            "x": [
                "Yes, Attended", 
                "No, No Invitation", 
                "No, Inconvenient Time, <br>No Future Participation", 
                "No, Inconvenient Time, <br>Participation Next Time"
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
            "ysrc": "zongzhang:44:d0a1d1", 
            "frame": null, 
            "xsrc": "zongzhang:44:b4b706", 
            "visible": false, 
            "xaxis": "x", 
            "y": [
                "2", 
                "0", 
                "0", 
                "5"
            ], 
            "x": [
                "Yes, Attended", 
                "No, No Invitation", 
                "No, Inconvenient Time, <br>No Future Participation", 
                "No, Inconvenient Time, <br>Participation Next Time"
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
            "ysrc": "zongzhang:44:393fd6", 
            "frame": null, 
            "xsrc": "zongzhang:44:b4b706", 
            "visible": true, 
            "xaxis": "x", 
            "y": [
                "12", 
                "5", 
                "1", 
                "17"
            ], 
            "x": [
                "Yes, Attended", 
                "No, No Invitation", 
                "No, Inconvenient Time, <br>No Future Participation", 
                "No, Inconvenient Time, <br>Participation Next Time"
            ], 
            "autobiny": true, 
            "type": "bar", 
            "marker": {
                "color": "rgb(23, 190, 207)", 
                "line": {
                    "color": "transparent"
                }, 
                "fillcolor": "rgba(148,103,189,1)"
            }, 
            "name": "All Ppts"
        }
    ]
}