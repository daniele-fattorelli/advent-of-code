
const input = "220D700071F39F9C6BC92D4A6713C737B3E98783004AC0169B4B99F93CFC31AC4D8A4BB89E9D654D216B80131DC0050B20043E27C1F83240086C468A311CC0188DB0BA12B00719221D3F7AF776DC5DE635094A7D2370082795A52911791ECB7EDA9CFD634BDED14030047C01498EE203931BF7256189A593005E116802D34673999A3A805126EB2B5BEEBB823CB561E9F2165492CE00E6918C011926CA005465B0BB2D85D700B675DA72DD7E9DBE377D62B27698F0D4BAD100735276B4B93C0FF002FF359F3BCFF0DC802ACC002CE3546B92FCB7590C380210523E180233FD21D0040001098ED076108002110960D45F988EB14D9D9802F232A32E802F2FDBEBA7D3B3B7FB06320132B0037700043224C5D8F2000844558C704A6FEAA800D2CFE27B921CA872003A90C6214D62DA8AA9009CF600B8803B10E144741006A1C47F85D29DCF7C9C40132680213037284B3D488640A1008A314BC3D86D9AB6492637D331003E79300012F9BDE8560F1009B32B09EC7FC0151006A0EC6082A0008744287511CC0269810987789132AC600BD802C00087C1D88D05C001088BF1BE284D298005FB1366B353798689D8A84D5194C017D005647181A931895D588E7736C6A5008200F0B802909F97B35897CFCBD9AC4A26DD880259A0037E49861F4E4349A6005CFAD180333E95281338A930EA400824981CC8A2804523AA6F5B3691CF5425B05B3D9AF8DD400F9EDA1100789800D2CBD30E32F4C3ACF52F9FF64326009D802733197392438BF22C52D5AD2D8524034E800C8B202F604008602A6CC00940256C008A9601FF8400D100240062F50038400970034003CE600C70C00F600760C00B98C563FB37CE4BD1BFA769839802F400F8C9CA79429B96E0A93FAE4A5F32201428401A8F508A1B0002131723B43400043618C2089E40143CBA748B3CE01C893C8904F4E1B2D300527AB63DA0091253929E42A53929E420";

console.log(input);

var Packets = '';
var Parsed = {};
var Result = 0;

for (let i = 0; i < input.length; i++) {
    Packets += parseInt(input[i], 16).toString(2).padStart(4, '0');
}
console.log(Packets);

function Parse(PacketString, Packet) {

    Packet.Version = parseInt(PacketString.substring(0, 3), 2);
    Result += Packet.Version;
    Packet.TypeID = parseInt(PacketString.substring(3, 6), 2);
    if (Packet.TypeID != 4) {

        Packet.LengthTypeID = parseInt(PacketString.substring(6, 7), 2);
        let Offset = 7 + (Packet.LengthTypeID ? 11 : 15);
        Packet.SubPacketLength = parseInt(PacketString.substring(7, Offset), 2);
        Packet.SubPackets = [];

        let i = 0;
        while (i < Packet.SubPacketLength) {

            Packet.SubPackets.push({});
            let PacketLength = Parse(PacketString.substring(Offset), Packet.SubPackets[Packet.SubPackets.length-1]);

            Offset += PacketLength;
            i += Packet.LengthTypeID ? 1 : PacketLength;

        }

        switch (Packet.TypeID) {
            case 0:
                Packet.Value = 0;
                for (let j = 0; j < Packet.SubPackets.length; j++) Packet.Value += Packet.SubPackets[j].Value;
            break;
            case 1:
                Packet.Value = 1;
                for (let j = 0; j < Packet.SubPackets.length; j++) Packet.Value *= Packet.SubPackets[j].Value;                
            break;
            case 2:
                Packet.Value = Math.min(...Packet.SubPackets.map(p => p.Value));
            break;
            case 3:
                Packet.Value = Math.max(...Packet.SubPackets.map(p => p.Value));                
            break;
            case 5:
                Packet.Value = Packet.SubPackets[0].Value > Packet.SubPackets[1].Value ? 1 : 0;
            break;
            case 6:
                Packet.Value = Packet.SubPackets[0].Value < Packet.SubPackets[1].Value ? 1 : 0;
            break;
            case 7:
                Packet.Value = Packet.SubPackets[0].Value == Packet.SubPackets[1].Value ? 1 : 0;
            break;
        }

        return Offset;

    } else {

        let i = 0;
        Packet.Literal = '';
        while(parseInt(PacketString.substring(6+5*i, 7+5*i), 2)) {
            Packet.Literal += PacketString.substring(7+5*i, 11+5*i);
            i++;
        }
        Packet.Literal += PacketString.substring(7+5*i, 11+5*i);
        i++;
        Packet.Value = parseInt(Packet.Literal, 2);

        return 6+5*i

    }

}

Parse(Packets, Parsed);
console.log(Parsed);

console.log('Part 1 answer: ' + Result);

Result = Parsed.Value;

console.log('Part 2 answer: ' + Result);
