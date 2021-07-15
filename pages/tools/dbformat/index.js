import Head from 'next/head';
import { useState } from 'react';
import TextArea from '../../../components/InputTextArea';
import Button from '../../../components/Button';
import Code from '../../../components/CodeBox';
import { useToast } from '@chakra-ui/react';

const dbFormat = () => {
  const [dataInput, setDataInput] = useState('');
  const toast = useToast();
  const translateToDbList = () => {
    const result =
      'in (\n' +
      dataInput
        .split('\n')
        .filter((r) => r)
        .map(
          (r, i) =>
            `'${r}'` +
            (i === dataInput.split('\n').filter((r) => r).length - 1 ? '' : ',')
        )
        .join('\n') +
      ')';
    navigator.clipboard.writeText(result);
    toast({
      title: 'Result copied to your clipboard',
      description: "We've copied the data for you.",
      status: 'success',
      duration: 1500,
      isClosable: true,
      position: 'top-right',
    });
  };

  return (
    <div className="container">
      <Head>
        <title>Tools - Database list formatter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Database list formatter</h1>

        <div className="description input">
          Example input
          <Code
            code={
              <>
                <span>1</span>
                <span>1</span>
                <span>2</span>
              </>
            }
          />
        </div>
        <div className="description output">
          Example output
          <Code
            code={
              <>
                <span>in (</span>
                <span>'1',</span>
                <span>'1',</span>
                <span>'2')</span>
              </>
            }
          />
        </div>

        <TextArea
          placeHolder={'Paste data here...'}
          onChangeFunction={setDataInput}
        />

        <Button
          onClickFunction={() => translateToDbList()}
          title={'Format & Copy'}
          disabled={dataInput.length === 0}
        />
      </main>
    </div>
  );
};

export default dbFormat;
