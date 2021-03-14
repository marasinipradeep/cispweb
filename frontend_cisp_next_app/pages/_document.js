
//This is boiler plate for next js that talks themself
import Document, {Html, Head, NextScript, Main} from 'next/document';

//This does not support functional component and is only some of one file where we must use class component till today.
export default class MyDocument extends Document{

    render() {

        //This is for custom html and importing css file
        return(
        <Html lang="en">

            {/* <Head></Head> */}

            <body>
                <Main/>
                    <NextScript/>
            </body>
        </Html>
        )
    }
}