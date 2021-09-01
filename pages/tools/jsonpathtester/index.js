import Head from 'next/head';
import { useState } from 'react';
import {
  Heading,
  CodeBox,
  InputArea,
  InputTextArea,
} from '../../../components';

const JsonPathTester = () => {
  const [dataInput, setDataInput] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);
  const [jsonResult, setJsonResult] = useState('');

  const inputJson = (input) => {
    try {
      const parsedJson = JSON.parse(input);
      setDataInput(parsedJson);
      setIsInputValid(true);
    } catch (err) {
      setIsInputValid(false);
    }
  };

  const testJson = (input) => {
    try {
      setJsonResult(eval('dataInput.' + input));
    } catch (err) {
      setJsonResult('Invalid JSON');
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Tools - Json path tester</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading text={'Json path tester'} />

        <InputTextArea
          placeHolder={'Paste data here...'}
          onChangeFunction={inputJson}
        />

        <InputArea
          onChangeFunction={testJson}
          isInvalid={!isInputValid}
          placeholder={'test.files[0].filename'}
        />

        <CodeBox code={JSON.stringify(jsonResult)} />
      </main>
    </div>
  );
};

JsonPathTester.toolMetaData = {
  path: '/tools/jsonpathtester',
  label: 'JSON path tester',
  shortDesc: 'This is a tool that test your json path.',
};
export default JsonPathTester;
