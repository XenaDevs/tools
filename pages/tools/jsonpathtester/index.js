import Head from 'next/head';
import { useState } from 'react';
import TextArea from '../../../components/InputTextArea';
import InputArea from '../../../components/InputArea';
import Heading from '../../../components/Heading';
import CodeBox from '../../../components/CodeBox';

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

        <TextArea
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

export default JsonPathTester;
