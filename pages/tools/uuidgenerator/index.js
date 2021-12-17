import Head from 'next/head';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Select, Flex, Text } from '@chakra-ui/react';
import { Heading, Button } from '../../../components';
import { UuidButton } from '../../../components';

const UuidGenerator = () => {
  const [amountToGenerate, setAmountToGenerate] = useState(1);
  const [uuids, setUuids] = useState([]);

  return (
    <div className="container">
      <Head>
        <title>Tools - UUID generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading text={'UUID generator'} />

        <Flex justifyContent={'center'} mt={5} ml={55}>
          <Select
            placeholder="Select amount"
            onChange={(e) => setAmountToGenerate(parseInt(e.target.value))}
            w={200}
            mr={15}
          >
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </Select>

          <Button
            title="Generate uuid"
            onClickFunction={async () => {
              setUuids([...Array(amountToGenerate)].map(() => uuidv4()));
            }}
          />
        </Flex>

        <Flex direction={'column'} mt={5}>
          {uuids.map((id) => {
            return (
              <Flex key={id} justify={'center'} m={1}>
                <Text>{id}</Text>
                <UuidButton value={id} />
              </Flex>
            );
          })}
        </Flex>
      </main>
    </div>
  );
};

UuidGenerator.toolMetaData = {
  path: '/tools/uuidgenerator',
  label: 'Generate v4 UUIds',
  shortDesc: 'Tool to generate v4 uuids',
};
export default UuidGenerator;
