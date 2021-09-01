import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Ean13Utils } from 'ean13-lib';
const jsBarcode = require('jsbarcode');
import { Heading, Button, InputTextArea } from '../../../components';

import { Box, Text, Wrap, WrapItem } from '@chakra-ui/react';

const BarCodes = () => {
  const [textAreaValues, setTextAreaValues] = useState(
    '111111111111\n222222222222\n333333333333\n444444444444',
  );
  const [eanType, setEanType] = useState('EAN13');
  const [error, setError] = useState('');
  const buildSvgIcon = (eanType, value) => {
    return (
      <svg
        className="barcode"
        jsbarcode-format={eanType}
        jsbarcode-value={value}
        jsbarcode-textmargin="0"
        jsbarcode-fontoptions="bold"
      />
    );
  };

  const buildAllIcons = () => {
    return textAreaValues
      .split('\n')
      .map((v, i) => <WrapItem key={i}>{buildSvgIcon(eanType, v)}</WrapItem>);
  };

  const generateBarcodes = () => {
    setError('');
    try {
      jsBarcode('.barcode', 'barcode', {
        background: '#1A202C',
        lineColor: '#FFF',
      }).init();
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  const testing = async (val) => {
    await setTextAreaValues(val);
    await generateBarcodes();
  };

  useEffect(() => {
    generateBarcodes();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>{BarCodes.toolMetaData.label}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading text={BarCodes.toolMetaData.label} />

        <Box>
          <Text>{error}</Text>
          <InputTextArea
            placeHolder={'Paste data here...'}
            onChangeFunction={testing}
            width={300}
            isValid={error}
          />
        </Box>

        <Wrap spacing="50px">{buildAllIcons()}</Wrap>
      </main>
    </div>
  );
};
BarCodes.toolMetaData = {
  path: '/tools/barcodes',
  label: 'Barcode Generator',
  shortDesc: 'Different barcode stuff',
};
export default BarCodes;
