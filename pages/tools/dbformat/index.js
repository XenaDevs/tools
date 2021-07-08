import Head from 'next/head';
import { useState } from 'react';
import TextArea from '../../../components/TextArea/index';

export default function Home() {
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
          <code>
            <span>1</span>
            <span>1</span>
            <span>2</span>
          </code>
        </div>
        <div className="description output">
          Example output
          <code>
            <span>in (</span>
            <span>'1',</span>
            <span>'1',</span>
            <span>'2')</span>
          </code>
        </div>

        <TextArea onChangeFunction={setDataInput} />

        <button
          onClick={() => translateToDbList()}
          type="button"
          className="btn btn-primary"
        >
          Format & Copy
        </button>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
