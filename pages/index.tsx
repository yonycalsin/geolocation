import * as React from 'react'
import { Link, VStack, Divider, Text, Box, Image, Center, Container, Heading, Button } from '@chakra-ui/react'
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Head from 'next/head'

interface HomePageProps {
  country: string
  city: string
  region: string
  currencyCode: string
  currencySymbol: string
  name: string
  languages: string
  ip: string
}

function HomePage(props: HomePageProps) {
  let { name, languages, city, region, country, currencyCode, currencySymbol, ip } = props

  const [showIp, setShowIp] = React.useState(false)

  name = decodeURIComponent(name)

  city = decodeURIComponent(city)

  return (
    <div>
      <Head>
        <title>Geolocation</title>
      </Head>
      <Image
        src="/static/images/map.svg"
        position="fixed"
        overflow="hidden"
        zIndex="initial"
        backgroundColor="#f8fafb"
        top="0"
        bottom="0"
        left="0"
        right="0"
        w="full"
        h="full"
        objectFit="cover"
        alt="Map Background Image"
      />

      <Container position="relative" py="6">
        <div>
          <VStack>
            <Heading fontSize="5xl" textAlign="center">
              Geolocation
            </Heading>
            <Text fontSize="xl">Show localized content based on headers.</Text>
          </VStack>
          <Box
            border="1px"
            borderColor="gray.200"
            mt="6"
            borderRadius="md"
            backgroundColor="white"
            maxW="360px"
            mx="auto"
          >
            <Box p="3" display="flex" justifyContent="space-between" alignItems="center">
              <Box alignSelf="center">
                <Image
                  alt={`${country} flag`}
                  borderRadius="full"
                  src={`https://flagcdn.com/96x72/${country.toLowerCase()}.png`}
                  width="8"
                  height="8"
                />
              </Box>
              <Box flex="1" ml="3">
                <Text fontWeight="bold">{name}</Text>
                <Text>{city}</Text>
              </Box>
              <Text>{country}</Text>
            </Box>
            <Divider />
            <Box p="3" display="flex" justifyContent="space-between" alignItems="center" backgroundColor="primary.50">
              <Text>Languages</Text>
              <Text>{languages}</Text>
            </Box>
            <Divider />
            <Box p="3" display="flex" justifyContent="space-between" alignItems="center" backgroundColor="primary.50">
              <Text>Currency</Text>
              <Text>{`${currencyCode} ${currencySymbol}`}</Text>
            </Box>
            <Divider />
            <Box p="3" display="flex" justifyContent="space-between" alignItems="center" backgroundColor="primary.50">
              <Link textColor="primary.500" onClick={() => setShowIp(prevState => !prevState)}>
                {showIp ? 'Hide Ip' : 'Show Ip'}
              </Link>
              <Text> {showIp ? ip : '-----'}</Text>
            </Box>
            <Divider />
            <Box
              p="3"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              backgroundColor="primary.50"
            >
              <Text as="p">More Info</Text>
              <Box background="gray.900" borderRadius="md" mt="3" p="3" textColor="white">
                <p>Country Region: {region}</p>
                <p>Country: {country}</p>
                <p>City: {city}</p>
              </Box>
            </Box>
          </Box>
        </div>
      </Container>
    </div>
  )
}

export function getServerSideProps(context: GetServerSidePropsContext): GetServerSidePropsResult<HomePageProps> {
  const { query } = context

  return {
    props: query as any,
  }
}

export default HomePage
