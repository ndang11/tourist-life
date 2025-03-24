import Hero from "../component/HeroSections/Hero";
import Button from "../component/Button";
import { useState } from "react";
import HeroSectionHeading from "../component/HeroSections/HeroSectionHeading";

export default function GalleryPage() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (src) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  const imageItem1 = [
    {
      src: "https://s3-alpha-sig.figma.com/img/4ff2/5fbb/d22801330eccf9aaeedf7388f729ecdf?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LMvR0EqdIZDC-duBkYmu1dTy0KkSQ13IOcCdNjn51zpppuUKx9mRuUyMzBAvLT6mbJZLpsZfTPMOYUwGz0DR6wjWhi3zown6glvFT~gRVhFIch~XvI7KGERkf87ReU1oZPpykzZWGDD5z~cxvWfVj4-03PawDYBPW0a4RFlmKJqj2l3q8qFM~E0yF9zaMLUD0mvIqqpiwaZADvkzTW93FAqhn6T3vzmzPOWQxp7KJEDJ31n14eknd4jRx9CjH-jl27hMZbjoEo0ydQVeTr8Zm-bFSym4tTmSaaBoWtUw5bLpv2l6M5kGS9WNRDpaVLke7o08xe7OReC6R~AnepDkSA__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/8617/a5ae/25ee4aa2ad522926670eec6990d4dfd8?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VRlJm~ycznmPPtReysbBUMSq5DNOhT2rztT8mobJCybO2BQGYSvtLUomy7-WWTjqpZmYHbj~pqJj0U-q2ts7gE1ebA5G~OBSNENiNoVAtY0SA0B3ZDcuooXLlwDtweuHUzxiRSjogknYyfrIh9PvKe6--QEWXMAOpJBhcGQTR4sHx7xC1PDoZJHm-tfnXI-o6sFxow8lGpQFiRqbwdeWP2bex-SMZvW5uwzK1GhcIBegUXOus3SkPcrjeU9Tv5BfsBmpjmQHMaefZ-pWt4CgOSVvQ5nQyRUIsin03blmAwElKmjIhAlywLR0DvTIp0VMcKum1VZxLNxiLs~TqdABKQ__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/6521/b928/1e965b9e2b4c3f113bb67ce649d7a461?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=snEwG553d-G6A45tUqfvkWo46nZi2LKYQwSQh1JCQ2L8Y9rykwL8Mi-0OalJ0WlxuC~Pg4IyQoA-SxKVzH3ks4~ZfaQON053qBAF0iEa0C-fkGY6gZG63qOCe1EbCHP4dpOE1DdaVE3QHGgUqdZ31JecWcPoSK6ItYQW0Hze6GCQIh4dE3MBAQViJzrY0YSUnZutv0qrDLq~XpIUshfOG6P5RixWJ8K4mOMvMSEcK7OmXlH28IVZ50cC9FcughQOmCyM9e6K3ic0BF6mGWxEtWBggANbV7vtGphblSUnTW65UZtU3RfOCHCMkD81j85nsgNAvyuM~HOmUGOqgoKFdg__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/5a6b/207d/fff8704aa09f24e5d144271f01125edc?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hH4okAvVEEqEJbvfEvXndwmsRdTyxbm23h~MUA7gZp89CC6HmspOSXtRsFhN79CA-2LCfJgKCf5ot1MtAOpawtdwPXlhd9iZmBeIbUPANwRBE-ze7Cc~8-SKutCFAQoNVmGKJlNyAIESxV2cqMOrfxsmakzmv9oQS3nF-Xp8nE~F28xsInlSTIKN8qjwKODliMb4M~9PweuPFh~YTkoCrgsaxL6LSHscagb9R2LWlLEKw84O8WWymOi~SCPRIMVSvGTEA~hRSy0Q2pJf40K5OKhtJ2cWSImc-vwCnmLblzSD~NHPiOp1QkbpbSvAk4V4sa33G8La3RXUE0GLIEAmiQ__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/0434/fdd4/a5432cab47aef939e9f35e4d4f9d4705?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gbOS23pexNTBEZlrnZ2Wcam3mvE6ScpFKcrg6l9OY4EaNBibR8L-01FpiN49vilMDA1jkec3s88Em66jjMhsZjzNyZRuvbVCt-wBUr14-hGy5NMp3gJCSR-vMH9v1c6Jf7LO73sF-VZn6rsWTO4M2F6V7WQQo3LcJC8Kpx1ql9iN2As34ULH4U8TevPIxDG7d5f2SDxgcUyQP1QOGrlFeNqgjPAgTo15nt0E7kNXr2OPUl9xEcJlH2S0g00PlQheTnK4fMsB-uL~FWq7esnSvzGr8dsf1dlfBsfpMWLwj7sDgfa9MTbxvlpUZaMBhu1~UIULNWttLpNzfCW~EvXe~A__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/9c82/fc43/ae69e562278d76e28ce26cd902277c96?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jVJcH6TkXqHtTTRfs03lSzJooG3CblyUWxJ1NNs1sCkIqkm40Pds9u4~bn8cuhCYoBvJC01Z~bYnXswbEA8oM-JsI99YgRfDQEnWY4kPKlY-8EmR68zix7-EZr0Hvppi4lQXeC7sX1~-Rm~hUGSeLfn02~OacDW-HPDi600sWfxDAZAh8NSeDFo7stByvZqVWj8N2Evh3pZeMBUkeh2xU8ndJlVxK7W9Y74899LpDDRziCondooRxNQVIu-aUTGNKdCErS4cCoVRuSudVNlm613rJway~LaHjDEzMqzhgzaZrgxKtPJilFbHfes1zCG6REilyOtQWKDVeCVUdRd~bA__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/1a15/7a9b/d8d20fe935041ffe7ab54449fbea9b8b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bFu1oaEmCjGW-wIDxiw~zhGRZf-zGkthnLuZVzb6tUjB79VZKGNvGkKGY0QKTCuGLszz-BFQVfDZJhCOjrCfvY2j-4A0gnStkgE7mVdu6BJBAVWWkFAczCzsAKTuwx7maB1M2tR2bApqjdOHOZlDJQJDT9vfPzqpwRmh6weQeN9aN9mIt9LFJaV3Qf4-Kq-fTKySFSLOvsv6dRgfCkJIy0kKrpXOW4ozuXaPGc8a69eAcyvG97VCQtvHMAEthZnBQiwOtHrXaCelYSqrkiHTWY6fpHvCrpYjrr0d39xfmSMD9E4qHDSM2WPbM4VMUchIpfotsH-yYolHqXgCWo5sLA__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/4e43/a559/d68e2d123b678f9446c814eccc4c4e68?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=buUSat2LJrz6oV74RnTeUzIfuJFCNYJm23rGtQWbEWhGd1fwOnwZiBkjlC~j~etfujhaAtZRdyuW-PcEdaJa1R1QALqkDevVkliZcZAlrhmzL4G-d4Ngu0Rw60gwJ5wBZEcjY64JFjW~Jy-OPFj-w8FZ5GEji6im5QZVaRMEOKBi0E1Pp5x5s~tG555TiO-WAxyg33nGQ4Sk72U7JOJY4YOleU9ymxBKN6uGuX5saXKYyAmzAfmQh4QKcMYXVPDbpF5BE9CWi1g2Mat0KREK93y5RpQ2jolMyBZbsdjd-eHYhSS52S6e738lVO~oj8qvEUsjrO4CrFN1xbrlr-OdFA__",
      alt: "description",
    },
  ];

  const imageItem2 = [
    {
      src: "https://s3-alpha-sig.figma.com/img/5d06/b58d/ba0e694cee79ef5384b5687366cc3ed3?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C6gpXgx8XuGMsFxiuAvkzBpmClmoj~ZYFmBJgbAnYwKPm6ZgRQzCz0vpfjQiKIkT3gZMbORxSo~JYWEqlqdXg4vIOZej9z60QWh~LJ1HXHLrzghbjIZ8VwuBS0vR5~hiQQbxXyOLoaJlN6BgRT700A6e5ub5obRWdREa0l-ydXq8~djtElhsxid6f3Rnwx0hrgSlH9QrYN3uw0y08pyShalpBkkf7cBFJ0fyZSqRv1H8EyDGZbV764cxEQbOi93ZpwU1o1-Y8gC~dfLn9gWsW8I7JAyxkavOWhIDCf9-cUKNlD6i2aAYT~Iu3l8hF57cbGkwLsZ8uBNKoDnjZsOWDA__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/440a/a3ef/5561b85c0fb6d32db923d0081101ae6a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=huSszrJCDqfTfVf6EkNWw97E4JF1t6fRmIVaOcmipwzEDAo6C2o6yPdLTPCIllBY4zLGw8nep48-Aqr3Buhlh86tdhB7tgvjvnIC8yWrbCT177Vi1QhBuhqpF-KXQ8OlKbcTnAzLcXNM1kBC3nPaCXPn9V24lD9Ybd89PJS7TDGAB~Xq5i1GJ6oopQ-8kb9eXw0C6dk-RwNfHH7pbvGjEYSeB0dPBKKoMUXUJqQtaO0CfPPAuuaH~~VXqazua7yUqIFJXsfKhpWv6l6W6tOo5OXeRrcAtgBeKKe4zL0Qw4zUrEHZN0GjoY5wzGa7-WS34cvt--L4EzjgO1xF0L74Mw__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/9d15/d85a/c4842f3a8752cb53168ec1abb70b057b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i1OvHjUKpFS5jrbYqzQirtv-Pa73dGBbu-CElUU4fxzsmzl46A~Hdb4Kolj2IWqgrTLMk0pzEqkWsrtmQjAV3UlSMr1FDOgfuTVxkLrCNHYKSc4nX1rW2xURIMpCOFLZsfDpHZhsR-rPAgVbqfpvDiFvo2KFLu4G0AHSxjY65PS6UVKeSecr0VlAcT12wBALnKAI3NU6xIx4PhRCSopG9YwTnD0Wc5y65tOMjsoc3FTf5dlhC3-fkzh6Kc0PYiyO-hIFFzfNLSZRsYI307LBUutOD03Os2t9QdEASoKXc4nSt1dW61Vw4trHAVpQu0ggl4PrAkS7BU2imxPBWmCN8A__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/5fef/a2f0/5c85f954f99359a9906e7fc425e46898?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qsrQxQsxBosCQsGrtw1dp3ujzoOE612Lf7L5sKgmjK0NJpy~XkAij7esPWklQXRJ4RG64itOaOtp119zPuGGSGQmU3oNyrxOgow7A5SJkU4X5TbtnJq~27BLOJiezhR9ZYTfOLvka1CnotMaN3OTpmCxkZmsKwPsvmxY-38TYtY3z0gZQxo4HWHpwxpvv5g6Z3GQxjoMokx8C6wcmj6O1pqAaCL5WTWJa7YTR~z64qXajDjUFZnoanRakc7mmAvw8wi9QtHB6QiElE3FS8eIu2EHNdaonGr8XflU3IERctBWtM~CYRLwg75XNZH9FupMANdETgtFgl~qRcvdjPi5Og__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/93c5/95c9/b90a0feb6593b9d24a0b3709e4c2bd86?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OTWxa-NP-7tKtXao5uAwwvi0vqizKgD-jwd6HVlhzYoTx7cbPXTuaGoeqNyczCRUEh8tYq4TFQVzk7QCDhtFtbuU0k1vX~aDy5yMCoH~FoU7OlCw9fG7Nvaty362IuL22-z7N~bfhbn9EEqi6c20APUniLxuxPJ6bdx9SkQBS2it1XvohPSXHzMeOyPtExYTz9VuNOAvHrGILEgcY3w0RS2TPvkaipwMk3p4VL2M~qjjAht0o-3~ufz6L-AQQ5aBXGE8kmdkX4hlITnPW0xRcu9o2iQB9US1s36-8Cym25t7zRcVGQDx8qYvn9yH8ByLAZWnKgLBF6nUmEYHIYwBgw__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/a863/7b3c/2e3b6a00b8bbcfe1105f7916ee6a392e?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U98d~c7MrrI0a6tTos1UBHORBhoG05Tm7yjHDS6i0QLIrykSAGihGeNLYKJops9BbOI-7navGBupuLzy42ZMphR~e5pBoe9hjs9A0bQMd49xxmnCQClEHaXd5keRkChVMXQdc3b2NxW2JwI6rA~QJK3J4Uvg1J7LD2x2PO~bsj4Vn8iQIIVnmH3Bt8NZOo6asM5nOxVBxPw5ugvbeWR4bV8LIjte-NP~BrTCAlS87gPEDaEtwoF5Oi6UAGPNXPGqR3abZs9LJbUiYs8uZkgR0V6ZJwmLZYKvUpa3hh0H9fbXJ0NcBLTNq5AVqusZc-zLu97Bdg6tt~azyx41lzH4IQ__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/28b9/b715/ba034abcefb527c735a75e71e050adde?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DvPtQZVNKX-MwfM7vgrlYseQiS24lINdJmG41VSHfNPa7z0M9ljewo3UYSFJTfNlOg-fTYtn~n28wDmiMA8yuOgckwBIPOsD~abRL4nxLkkwdXX81Uv3P2Bu8WB~CczrdMLcPJ-QhrpCIV1hJ5ydSKHbGmh-GWbY-jP30NLXnPtHrpE6iSSmcBLd2olsuzZOHLMlDgviuc7Em9d0K3cV3XciX-TyZ6tpPHh~F74TfBlw4j1szRLvh5YKkKF9AU5eI2vNN3YBldkCbQlLcJ~fCWu4PO3jdEINldTQVmjY7KjIQM4mYnlkdfJUiApixdoAsXFiiSzQue66NyG5WNBHRQ__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/c11e/3451/61a3b99882779105842d20dd26b105f4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OVRSXdakwc6y8FkYHKzk2YmJCR5tdH4caHb5leGRFaLkbukfSPYBqE8-LCcFtfh~ZZFBwrSdNHgc26Mc2oQpLeTPVPInrC--GBPP74JlSTSv-UqdDyU3cfWAixw9vU6YeopsQ7igHGvYLJlJst0UiKHc8XG1z-TDuzg2-wXf6FSNyV7DmkC5TljjMlblG1Fyw7G-7nwkLaYN7zc4QnccYmsi4LI6baN9AltGiXXFHpSeyWe7N8HMyPipp7wujzKi4ea4pVEgSVoOjVmqG7PY1w1u3RXyhMieP9L~hUQ5uHE2pTNuNiWU10LQogTTn-SMqLia1D22SUdS9QaNp5IStw__",
      alt: "description",
    },
  ];

  const imageItem3 = [
    {
      src: "https://s3-alpha-sig.figma.com/img/24ba/eb3d/49c149077e65e33a96fb00f428230432?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FZGHcCTSxklvgYz40utIX~0qOv511KqHmT1NIMif6~m95cjbA9zmju~NRtWRhDMOB-4BYXiwJoehTJaSM-YWcZK-vMfkfTAax-PBYkF7CUpmxoCXVfoCRoGkNW1E6ITVNNmehL902EVj00pJTWJL-cdxKtiEB8rZFHKTDfLd5lYNmK4Ajmh8dL5-PM2E6Qj5tHK-NiRGbCIaN25AeVON99R~iOQYlt0LjmGqfsVio3-cT7AVSJzERaGalFD--nDrw01aZ3rIsGrhwEuepPnvAS5BXTokBa23UYIBKMArXmaeVsi2PV5AGOB27-WNRDb8rPLIKEXpsG4DztJht~VjOA__",
      alt: "",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/251d/2fdb/537abdd9e098d432d20e7e633d4c2b73?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dp1kSuhaszxmyZu5eo2O0qe86C8ustx42z9Mk9QyQhiP0a-~WT~0Qmiid6SCSowmtfFslZssgtyhFsvfzgU3yYsUZJlwxjJFWa6tBPEbfAV9gF4LHslmfVlbH226rBlqRbUGscqWNypA1TaWf-o7dPC-m2mvM4VwXSF9Dhw8qzQkHTf-CKnc40ZUdvZdkuDellpMKcj46ah08kgqoxRUmTQt20m9OmdfrnBz9~mn5enVoKuH8ILCNprkk6gfW4FO9pH5Proha7YnsI4ZnV2FHqU6qi8p3HUctIsd4usm69n2wkp0NP5Pkx~AuEWs7EbWzQd2rMbIqRA8R2F9rXSgAw__",
      alt: "",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/5e52/ced2/071eff545d1b16dd4bc36fd771859d9d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lgqH6vxwwgsrITvNYxh-~p40IpkwbbWnLWPrbPT57Cid1ePskYIfgTfTmCORpMoeZaiP-rT3ni9Tmw3szjGpn9vo8GX8-70ejAbSgUCy5yvtwIcbLI24vLSkI~HmikTWbH8SdERubIzN2SJu6ZK2jvDs99Kxm0TwsU3WHw66WKt2sVHGovUlBO8BxxJp6IZ9vZSxl1TzFgVpLvSu2nia1XALCVJSDO~5psPGoioyGiItS8UdTzJRqL2icQMNcF8U1Gra7Yuj6m26xhP-oYmqYpAlfrU9qEva4YLRu557gbtBq56TtG6tuxUlP1ElwR0c1FdbtMGFnSsfzaM6wJv7Hw__",
      alt: "",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/c2c3/8cac/5270c8133fe9fbba80ef684203daf896?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eRQP5jmIHeajsP7slKYznnxLatM8k7d0g9CHRu7HMtBY9O25q5yjoRyQ9pe7xblMGOKCQxkblrZbE15MdwC8dRk7WNMjPgHUgeHmVrETOpN6B3fLx7Wga5dSOQr6XA1GiJh3BZEwRVEwQTvNWHjTVy0x-QHuNl8GWiRAPlkmgtwlY1LcXAa06pARtMB25ON0pjK342-1p~qDLvKACiNwauMMWEDJMtyYszCdedPMc5vlQwYFtsYsBA0Z7YLHDWG~XQKmCr8k-xw9W6iQlEUX9gqRCOnXYm8a0RwJIL5WEPWGbvwGwWw~iqetfrce1rYo9VXFYTKwUY0CS5LTaoUGlQ__",
      alt: "",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/efdb/cec2/a35932c0e5b21dfbfb30629b08803e12?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B83PypsjCCf6H-aZA0lR09UkwmZy5jwCOzJBZtoCxYat7aj52vnQAwKtIo-nE4BqwzI-bRIVBrERS~Ya0F-FpE0yoYpDyQUuFNK7HKHIT8YqmIJGdoziN6nAEDA6sKmsqrzvU4ERIxQ39xWHEx-6DgpqwEIEDt4IQCfoccXVtNzzvZTqcNE2J5Itbj1N~rCysCC4JKAlZfiVoZ~MXGA3nlSqJf7EY6qWEtvvgxTfT50Vvc9h-bfB3WY-Q9000mkRzhmxR~o1uJZNmwbtVyx-9Ny9jit9z9J2LSTS3JOscQd7tLJq4yOLK-ty3-qAy822BsUJ7dwCL8iskre3smRoDA__",
      alt: "",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/fc87/170d/90c406720a69ef576defbab016788d2f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=km1HwoJurpBiEt~xt2WoX6P-JQQFtY1woNMuhEBcIwVigACVBHHV99fsqU2kCuwfdBI1wurAjZnnF6CAew0sGV8yOi26Zi5zj8V2Uh2C4D5ilYj-H1HTwBcj-2Y-ErKjld-K4kHTvKyW-d~QQqJsQScWCF~FTIPQoJ1o~xh3RjldG6~PUI8NMrBcd4xKfzHGGYFzh~onmVfsesizaIjT4CQywjoxLCEoRWjcFomRCHvTMso8yFgEEAR~Up-Hvyg7fDpIo9Ww05fim1AHBdh5usLT3Diz4RbRGoImQhzDj7bbeYSOzlXCUbsrpbBUd7H4m2DjFt7D-uYCQhMY31HD0Q__",
      alt: "",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/7f97/05cf/efd22d0a9bd512eb96d8b30fd398822a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=enVTHvVpGmBP6wrIfubJqoFBZp5Hu3pvalvxjzTpc1yql~T4A06pZaP9WJYbFOtNgHu3zBTf2zubzvMf0~pmmge6UNq~WxWmnAsMLc6OZ1GK1N4gwp4vcyZYa-~XYm4NxxxDXCEdm~O09D06jegmklSG11HVLvK7ZyaR40s4Mmoae8eZ2niWrfeXTVJfHav6ZYfTU4a0B4eyLQKLxkATYSaIXL-jDsE4nvI2GVOQIlRwNoLhB4N9ewT~zsdSJ~hmS7cIGDlFnxinuQ9YpBvoJpoVkU3ZMpMrhDO48IXbZ2iiOITfNKvpI0dlyhLmfzMCMW~x173i-MEhTx32aiGBMg__",
      alt: "",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/45cc/6e79/677858ce7ddeaf45db374c0f14abedc9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KWSQkAO1SUL5WA7Ixs~cBtKP1mpz~KFUCb9qRo55QJg1ddVFtd7uQC0L6C1to0z0C1LcmhwEJNARC9ddox8LaLJ-euwYbj3zfyAeDdakwItPWYqxdkYCmzcVPpEzs-AEYDYZ7htl66blPsJKH8mx3rbHzm0YrXIFjGUluDCdevP8-0hdOqFfpam1xEPMuLD5BvSNKnkWcimKmCB7wcS-z6zTGFOhvL7QU29xInUlOuqkcAuVrahyjw28Pdq6m~ZXiTwr5h7i29auSIsj2naXMr06wSWGlEfUYbhT7GAdmjPhn~cPm5~ZwbZLjCetOe90~T~qUL-gwhtw47dHiQDysA__",
      alt: "",
    },
  ];

  return (
    <>
      <Hero />
      <section>
        <HeroSectionHeading
          title="Gallery"
          name="Home"
          image="/images/Vector (1).png"
          description="Gallery"
        />
      </section>
      <section>
        <div className="gallery">
          <Button label="Open Instagram" />
          <div className="gallery-photos">
            <div className="gallery-image-item1">
              {imageItem1.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  onClick={() => openLightbox(image.src)}
                />
              ))}
            </div>
            <div className="gallery-image-item2">
              {imageItem2.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  onClick={() => openLightbox(image.src)}
                />
              ))}
            </div>
            <div className="gallery-image-item3">
              {imageItem3.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  onClick={() => openLightbox(image.src)}
                />
              ))}
            </div>
          </div>
        </div>
        {lightboxImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <span className="close-btn" onClick={closeLightbox}>
              &times;
            </span>
            <img src={lightboxImage} alt="Enlarged view" />
          </div>
        )}
      </section>
    </>
  );
}
