const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def

git add .
git commit -m "Adding default view for layout"
git push origin main
