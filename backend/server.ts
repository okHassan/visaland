
import colors from 'colors'
import app from './src/main'
require('./db/db')

app.listen(4000, () => {
    console.log(colors.green(`Server is running at http://localhost:${4000}`));
})