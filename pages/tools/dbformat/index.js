import Head from 'next/head';
import { useState } from 'react';
import TextArea from '../../../components/TextArea';
import Button from '../../../components/Button';
import Code from '../../../components/Code';

export default () => {
  const [dataInput, setDataInput] = useState('');
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

        <TextArea onChangeFunction={setDataInput} />

        <Button
          onClickFunction={() => translateToDbList()}
          title={'Format & Copy'}
          disabled={dataInput.length === 0}
        />
      </main>
    </div>
  );
};
