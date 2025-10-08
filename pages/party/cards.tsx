import * as React from "react";
import { createClient } from '@supabase/supabase-js';
import { Avatar, Box, Grid, Heading, Text, Container, Section, Card, Flex } from "@radix-ui/themes";


const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function BpfCardsPage() {
    const [rows, setRows] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const { data, error } = await supabase
                .from('party_join')
                .select('*')
                .eq('id', new URLSearchParams(window.location.search).get('id'))
                .order('created_at', { ascending: false });
            if (error) {
                alert('Failed to fetch data: ' + error.message);
            } else {
                setRows(data || []);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <Container>
            <Section size={{ initial: "2", md: "4" }}>
                <Heading size="5" mb="5" align="center">Your party information</Heading>
                <div>
                    {loading ? (
                        <Text align="center">Loading...</Text>
                    ) : rows.length === 0 ? (
                        <Text align="center">No submissions found.</Text>
                    ) : (
                        <Grid columns={{ initial: "1", sm: "2" }} gap="2" data-bpf-cards-grid>
                            {rows.map(row => (
                                <Flex justify="center" key={row.id}>
                                    <Box width="445px">
                                        <Card>
                                            <Flex>
                                                {row.party === 'BPF' ? (
                                                    <img
                                                        src="/logos/nangal.svg"
                                                        alt="BPF Logo"
                                                        style={{ width: "25%", borderRadius: "1px" }}
                                                    />
                                                ) : row.party === 'UPPL' ? (
                                                    <img
                                                        src="/logos/uppl.png"
                                                        alt="UPPL Logo"
                                                        style={{ width: "25%", borderRadius: "1px" }}
                                                    />
                                                ) : row.party === 'BJP' ? (
                                                    <img
                                                        src="/logos/bjp.png"
                                                        alt="BJP Logo"
                                                        style={{ width: "25%", borderRadius: "1px" }}
                                                    />
                                                ) : null}
                                                <Box ml="3">
                                                    <Text as="div" size="2" weight="bold">
                                                        {row.party === 'UPPL'
                                                            ? "United People's Party Liberal (UPPL)"
                                                            : row.party === 'BPF'
                                                            ? "Bodoland People's Front (BPF)"
                                                            : row.party === 'BJP'
                                                            ? "Bharatiya Janata Party (BJP)"
                                                            : row.party}
                                                    </Text>
                                                    <Text as="div" size="2" color="gray">
                                                        Member since {new Date(row.created_at).toLocaleDateString()}
                                                    </Text>
                                                </Box>
                                            </Flex>
                                            <Box mt="2">
                                                <Text as="div" size="6" weight="bold" align="center">
                                                    {row.name}
                                                </Text>
                                            </Box>
                                            <Box mt="2">
                                                <Text as="div" size="2" color="gray">
                                                    BTC Constituency: <b>{row.btcconstituency}</b>
                                                </Text>
                                            </Box>
                                            <Box mt="2">
                                                <Text as="div" size="2" color="gray">
                                                    Assembly Constituency: <b>{row.assemblyconstituency}</b>
                                                </Text>
                                            </Box>
                                            <Box mt="2">
                                                <Text as="div" size="2" color="gray">
                                                    Address: <b>{row.nearestbazaar}, {row.district}, {row.pincode}</b>
                                                </Text>
                                            </Box>
                                        </Card>
                                    </Box>
                                </Flex>
                            ))}
                            {rows.map(row => (
                                <Flex justify="center" key={row.id}>
                                    <Box minWidth="5" width="445px">
                                        <Card>
                                            <Flex>
                                                <img
                                                            src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(
                                                                `Name: ${row.name}\nAddress: ${row.nearestbazaar}, ${row.district}, ${row.pincode}\nBTC Constituency: ${row.btcconstituency}\nAssembly Constituency: ${row.assemblyconstituency}\nParty: ${row.party}\nMember since: ${new Date(row.created_at).toLocaleDateString()}  `
                                                            )}`}
                                                            alt="QR code for address"
                                                            style={{ marginTop: "8px" }}
                                                        />
                                                <Box ml="3">
                                                    <Text as="div" size="2" weight="bold">
                                                        {row.party === 'UPPL'
                                                            ? "United People's Party Liberal (UPPL)"
                                                            : row.party === 'BPF'
                                                            ? "Bodoland People's Front (BPF)"
                                                            : row.party === 'BJP'
                                                            ? "Bharatiya Janata Party (BJP)"
                                                            : row.party}
                                                    </Text>
                                                    <Text as="div" size="2" color="gray">
                                                        Member since {new Date(row.created_at).toLocaleDateString()}
                                                    </Text>
                                                    <Text as="div" size="2" weight="bold" align="center">
                                                    Address: <b>{row.nearestbazaar}, {row.district}, {row.pincode}</b>
                                                </Text>
                                                <Text as="div" size="2" color="gray">
                                                    BTC Constituency: <b>{row.btcconstituency}</b>
                                                </Text>
                                                </Box>
                                            </Flex>
                                            
                                            
                                            <Box mt="2">
                                                <Text as="div" size="2" color="gray">
                                                    Assembly Constituency: <b>{row.assemblyconstituency}</b>
                                                </Text>
                                            </Box>
                                            <Box mt="2">
                                                <Text as="div" size="2" weight="bold">
                                                        {row.party === 'UPPL'
                                                            ? "United People's Party Liberal (UPPL)"
                                                            : row.party === 'BPF'
                                                            ? "Bodoland People's Front (BPF)"
                                                            : row.party === 'BJP'
                                                            ? "Bharatiya Janata Party (BJP)"
                                                            : row.party}
                                                    </Text>
                                            </Box>
                                            <Box mt="2">
                                                <Text as="div" size="6" weight="regular" align="center">
                                                    Member since {new Date(row.created_at).toLocaleDateString()}
                                                </Text>
                                                </Box>
                                                
                                        </Card>
                                    </Box>
                                </Flex>
                            ))}
                        </Grid>
                    )}
                </div>
                <Flex mt="4" justify="center">
                    <button
                        style={{
                            padding: "10px 20px",
                            background: "#0070f3",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                        onClick={() => {
                            const shareUrl = window.location.href;
                            if (navigator.share) {
                                navigator.share({
                                    title: "Party Information",
                                    url: shareUrl
                                });
                            } else {
                                navigator.clipboard.writeText(shareUrl);
                                alert("Link copied to clipboard!");
                            }
                        }}
                    >
                        Share
                    </button>
                    <Box width="16px" />
                    <button
                        style={{
                            padding: "10px 20px",
                            background: "#22c55e",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                        onClick={() => {
                            window.print();
                        }}
                    >
                        Print
                    </button>
                    <Box width="16px" />
                    <button
                        style={{
                            padding: "10px  20px",
                            background: "#666",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            marginRight: "12px"
                        }}
                        onClick={() => {
                            window.location.href = "/party";
                        }}
                    >
                        Back to BPF
                    </button>
                    
                </Flex>
               
            </Section>

        </Container>
    );
}
