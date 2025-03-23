import Hero from "../component/HeroSections/Hero";
import Button from "../component/Button";
import HeroSectionHeading from "../component/HeroSections/HeroSectionHeading";

export default function GalleryPage() {
  const imageItem1 = [
    {
      src: "https://s3-alpha-sig.figma.com/img/4ff2/5fbb/d22801330eccf9aaeedf7388f729ecdf?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lEeXOd~NLNPd6XCObmaV~zYBNm9loEoJ1NvGhDzAS3tzPeqCWiWX1o6C5BYe3keqsQN~wJZ64D9ZWQJ5WtmhsJlLB2wANUv-WnZrUfV4PN1b2hlMdcYEzrx7~8SDhxyuLI2fOHkTZrxygDFM5Q5jYmO5fxd1NsG4DHXyAEE2hxpWlrRqY-An9QaPqxX8xNxeFhVK0wHJoEheRCDbAtpQorKciMybMefiYlRwIdhvmsGWydn~xwRG8XEDUWvD-1KERe7zjZWTKK4rgEbHptT63iSM-hjpk9DFWkn1SC~M9lw~GTkmJm4p3RtCnd3dNPqsAjGP2xsDMwB~OxCpim2nGg__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/6521/b928/1e965b9e2b4c3f113bb67ce649d7a461?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uBaK6vMN1640xbOvsn4mjSv8XZRlol5USFIjbuhktCtxrWTERxnKW3O2AoaFk5qglWzy5WkO5DRI-7sqfkhtYCxUFqM0faIrCGKViC72USIvaauLpDoQtyHXzEPiGxBL-uj5DWA4b4HoqUP468gd~R-MvZiAcxDkOG7hFnd2CndEXpDHqbyOpZTXJ~If6wvlKhhHP6VLNDEhP7uGnY959-cnp~BXTDtCH~1mxdgTDBxK3deS44ohgR88rvf~Rbj1C~pPz0WYWoGSvMIXPiehILBszOsDcGvJwIA4SLMpA8J~VgdWxBLYAMznA0-HLMrU4uruQyQTSFouO51K5LaKzA__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/8617/a5ae/25ee4aa2ad522926670eec6990d4dfd8?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E3xW0Z3SkPQaIcFsGOXC0MGMn5VujzPDJrHAYvUzeQ8MHJYqtBf-hg2lz3ET0wBwKH39DzBfmK42vWuUi6fvPf0bAYeO1plS5swXTA0cXoBPjxGfcRzDwGZCRR2ZNuMb18Xctw~ZBuB8YnjCSLFrt2WMOuVYzGGAjAdafYsm8i-BqXwRlDzn-kmab-9Oj5pEAN~KO5w3nn3-W1Y6wjmcAhGwQ6u0kIey7uXO0aByCCkD9doBuM5MoN050kizwwawJgVkBkqgTALCR-eXyFNCcf9bvH0KS8BWx1wVygDdiQsQ0KyRzFynTbwIsSoUxQrPAdQsizLKocsqWCiCzvJZ9A__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/9c82/fc43/ae69e562278d76e28ce26cd902277c96?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fqz2iZXbMUUCuX8gxVUoyBhOYei7vkDQyGETRpsFxGe7WS7Cei2hyGJKhUhhWu-Qqxs3Tebg2u3akpnz6gocp-IsF1Hq65~HoIYeag4ZIXDmmmVeLjG56KV2xOdf6vqCNF6amR1rSmtUhawUwOUQlU3uzyJq5F4T1OKWWRNr-dCkevyCkC~q0YbbIaB9y8DVlq3bl4pcfIX7tQhtuj4TgkEsuJpnEAKG-u1Lo3aPmF2hq8Eca~E1~~gKcfsC--61-IXJ9pQvPvRagLcuNB2oe6DbsEQMdpjU7WagPdteyEYZ7JycqKowFxkDK6BmjsMHj6ma1ctcsXyLNK-2sAk9sA__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/0434/fdd4/a5432cab47aef939e9f35e4d4f9d4705?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EhTLIVRKjB1konp-MUbmXSyqwFdEJs16QliN-cMYcivuxCeEXPHleuGtXmQaj2vDDi3tT83QhE2LBC2dH5MZApItXCrkrxIqWxpBYhngbBSbaql8WbnJMfZfYe5mexoIh4OkLttAO~EGkUjxQoYvuWWOV2vkPbw2cZ7hYdR7LDbamwJ4rOkVdbfIODrkYphaJLXF9wyCczk-fHcKU~ZKAVmlNnOWqUinmnwjhi7rCCXcoCOhUWLevSM~EKF~m0BhgQgvZvBgDKMgCXJ3zYiDl3lpLba53DEPfOM-xoMh99T3FaQlMHbSWUV5rBR2WjdUt0ovY-X2RoGXIvtTUEyoew__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/1a15/7a9b/d8d20fe935041ffe7ab54449fbea9b8b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AyxQn0ipjZ8zJbM8EqWfwc6lY6DNgs0kjJXNkIOnv5AgftbTWvJtoS07clFA5zGFNdoDu4YgJDaVJSvj887X2v1PvyKsoTX85ZvJ9MEIy8zA1MC41Zy5a40vJPB9BySweFIDE4bVMd~0oh9Mquduk4yV3zIVirHgsG7UGzNNqNqFyOEdSLhHOY6uiho7YCp4oWE1s5Z2NVyTpt9HHS29ZVrxbrtpdwxJntqwxtewpwFeaNWIygFwuKkt7I5~f2OoLQGUNLxKsC9UF2T43h7fLJFZFwxlysF8Xbz-FCC-HrltQVL2RYDzmGnqCHEzgSBJD8F~nw-Co~PENCJ4~gdUxw__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/4e43/a559/d68e2d123b678f9446c814eccc4c4e68?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AHyQ8nXhAOzBHSh9ZwK5DHB27aXy3WzXgOW1rQw~6eQAOpIjaaEdwifC9tOlxwmrLSiE1Y25fIdGVKv9DBvbAEBYyA077SyYH8FRBR2vY3-JE11a7VFjkPrvMTMtwtrrIWr0gbx1nhvmAEO1C7JylVq1Z-Pqn4pShLex05Vvh0RJVIBD288rpR2NAG-geZjDvnHzxAbwpDbvNHZiQE5lDS5tE2yn3CUUR5bwWj-hDfrbWuQLhqSLSNKNvR8F7Ye~omeEgocgGOFrhtGRAEDqvYMMz13FB6KbmRFAOMx3irNBsNwyg3gMMVFRTEtrVOZ0S1uZmp016Gj2Tgjq4A4u3A__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/5a6b/207d/fff8704aa09f24e5d144271f01125edc?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XEMLny5CpBAg6n88m6Yvqo8kdzYkWC0-iNGLF3mO63RzraZh-OAop2T5M4-8LwBrvNbw9KIbo~HOqaTAAaKkNlydz8qR5pOsMvXTG6owK4QG39aKzhJXuQOa4v8T-HPdS3XDcWuzVMJb5g2~mewTn7HBEoj6Dt-6Bbo74EYZ-oxNYtyVFTpCmYPZloVkNFhawhZ3mbJPeSwzvjfwkaaEYd7etXq3zc7NGKL1E8mea9lsWkUpze-UoWfFpuEKQna6TvbU1Vu~ziMtowD6eEGYDHHu~1sJCgJFMBpDA7kbVIr2zu-HpdtbbPsJy7HuXHwVawykFPLIdqakzztahDHNXQ__",
      alt: "description",
    },
  ];

  const imageItem2 = [
    {
      src: "https://s3-alpha-sig.figma.com/img/5d06/b58d/ba0e694cee79ef5384b5687366cc3ed3?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lSPWZKzmzYIW39E3qffqNGcl~zkboPmWT2XSRD~WvmR3ttcHqF9w4rEgDVHlUIvMsydIyeEUXpQURJJYv7mwhKyMHQ1fBcBr2xkbrO-zmfBBNoYThmyxJRON7jkqRr6xCPiRQDHtV6HX3Mp84IptzeoxblVkbUcX8TvQ79mJ8~VPq47WsjYBZuo8q2Gwy5yt96O9fDxTOJKB4nrpShPX6ulDH6Tw7UvL~hb51uuIctKaog90OBvobQAVRcHF43CkX0z~pn1HDAKb7MDyKCjqSQH-I9HsviRSW0s3iWg2~sn3ydSWkvkiiYzIzO8sTC-v7os8eEOqokX5ckLKGNI9HA__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/9d15/d85a/c4842f3a8752cb53168ec1abb70b057b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ioW-GlG0QLV5KHLPgiantoI0hY7lq7u3y9pXU9qdffeRHPzXhn4Qa1kbVKLxtOVdoZMYoJG9tCxg1k6BvALxDk8qL8mmFf33xj4iAOrpNiAEP~SSJRbtYnle83M0Cr5xcaoKbafvULLr4Ytxy8WNCMFjIW6HrbLQpsNffVo2wYztxhBv0bYx9glS8A05x80IuBqjFdvvetD2AVfEESrXMOBh3wUA7PX3bXxWc5NaShUBWlC7uXy8SmsdRohhSn3LHpgOYCGOKGUVtIWm5h~uPrT73ADYoohBfvKzRSzloGNWPY2BxaHBManrHGkJr7q3Jm3GaW7W9RBJZlj1RynsVQ__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/5fef/a2f0/5c85f954f99359a9906e7fc425e46898?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fPBEP7e46GunDPwgvlg5gkGpa9~iKJbhOdwUz0f7LKnnnYBxQQdms1D8Nhytn0UuMcfk4oNDWz~L5gnzs7ZlQDjCmheKpbrP-6KMgZYfYKyN5roLxSX2p-pAi8c5EShf6JAVxjvfPvs4jeacs7qWV-nh1SlmlfjXUFHkFLcjMtwtScP~Qw5HGoPnawnsQn6Lf0f3dX~RYz3GbQ8RU6-x2QPQpUL-rV8sRdYN6raqQs0fjiiE1dLA4-GMXPjMK2aBDdbsRI3fsnGVnWw4~nR8Nf5tSOM5glQB~e14gZCsTlt6If8ojW5B4ZGsaxTU~I~jsutpD1MlUSins--TYF1Jsg__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/440a/a3ef/5561b85c0fb6d32db923d0081101ae6a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mQ41xwhHSdNre1mrOvAgS7mkQUTZt0imLb~6s4-OLZfCE9BpKQWDUCEiRVOHjrfB~8BF~ch9tvZR-hZAvLfkhTCzTyIBbWAEfv~jgvlCPQy84CBxoa0maFeXVeGVYjaomhGlPgN0BYvG5CbkrPvom-f3S2ivi7CWMgmPVKMGzwbv~HqNYb02E42pQgPxO6au5rN5S35Y98Ar-coq6mXH7IKNxot1ocO5AuZG~KQJC3vx8DLGZRcCIoguFRGOyTXmN-DFZj6nj8DqloobVvpp3Hgo9Dc9ePf9PUS2jUQISsdD686BAN3LKQXaTG3nzcO9cm0q3isMkzhKw6Gqiw0UnQ__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/93c5/95c9/b90a0feb6593b9d24a0b3709e4c2bd86?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aiI26HPXxg62LK7nfgCaIi~vjlexmdjYeeHM792yXALSdsHnsBMm7BDl7aOk6xptb6Zm~zD0QYWa-j2Rxdg7zH~uC1Fv3SMeXwSsb68ooPuyYimHvJnrcISmntq6PeNRATFKVfQ5DPQx1XxqM7p8JXtY5StpjvIxwCz5TnIhar7SCSK~QP~R0GZZ1FbUcWQyf8zC76Z8Fq0gijUWxcW9QiZQdVLPCMH9MK8MPxX7d~43yZ1lDL2DePKq-tXOzKwu9mOTqkF6MTuxj1Sem~3KQgyq7HpjYEBNO39wRI6OPNHPJxDa961lHFvBykRluqydfY-AFuxPP2QC9dHd6t648w__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/a863/7b3c/2e3b6a00b8bbcfe1105f7916ee6a392e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=c4tOwuBHYkA1Ybveo-ps4q-4PLrKCuyhmO2g8ql3bKhGO9bL4t9Ed5R7dellX9FX6mc7W6MixMyrqJbqMgSVn3z02t~-tlG4A~66ckuTr3GWhSp~8R2r29-tIujkV88QwUe1b5ZItSl7Hx~vS63vIyiSAh6Id0vE5mpKOSaJnqbsQIbErihSQ8Y0ltqYOw126B83S1uP5E9aFxTIiwvlrsOzDEMviunZGJD9jnAFoiYpMqS073CRfDKomlJgb7pd-qvSE-mkVCbentgtLranVmAHnBz0hjItp-9Hjt4RPc9St458f3iOFH-E4lAW6RqsKA~aB8hEUcfscZ4AkcCwJA__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/28b9/b715/ba034abcefb527c735a75e71e050adde?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RmM~Ey3mjGLFPAKzPJBjjf4-WxFRc2pnKZ6u7mEuY~oHzWDPbL91ZQHgs34lGNZAYYHg6y498z81znsuVoSGf7lDn2pLbnIjWhU451epUdlGLx6GS8BFOSRbq0LyEle1il4xjyebpPxZQ8wtjOVpv7Jqe1QmPuC4Q~BylDzwVUHkwrlnJvbjh3j57w9iZAoHfjh5dNfyBWONKXKn1BcJGzlDr7uywSmSABzHOinS1Enuz0HO97nDZU1luIQf54cIJbIkjmkgGbOSBYdWotnxiGToQakRkmal5zvFyVkXgpFP~QcKAZ1gg6GmYjPHgdqQSwt2M4Ptk7jZIwQ2kWh7tg__",
      alt: "description",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/c11e/3451/61a3b99882779105842d20dd26b105f4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pBbc41PqPUz7j1AxmwAgl4WGnjEQRhh-Y5~A~BDfgBd6h9ZnBliKnVTuGLDx3gDNctCmHqCkjSyPrnEUJplD1V-rraSZkR7d8zEFqoDhyA3XooDlCCM1DR6q4IX3QmzZusQmUIzMh2wa8Tm8o9SSHmgT8O8HfCpGfkI4clxcZ0HcORBVZZGOMwTnZH~SxVQhp2E-1NQgnlfk0ZeJGCd54bNaqAW0ORIoE63md2CVTDumkUAM9EdxcKmvWuEQRollH3Ix-3Lta0nmca-O4d6wUSvJWpf~EiAHCGUc-fCLuKY2~2Yl91qhksL7bo6TJiHR~j24yyTLtmtA2dWh-w~EGQ__",
      alt: "description",
    },
  ];

  const imageItem3 = [
    {
      src: "https://s3-alpha-sig.figma.com/img/24ba/eb3d/49c149077e65e33a96fb00f428230432?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XEzUe0NSlpvc5KL4jK~mpsGwtgUGJdRsDVGlsGK2Y6tHk9CFj5Da8PAOL7rHTNYpnNuGsov7R6knrdibx-p8N~quC6bRmBaUDEIIC~Q6wYj4Jt5I7bmCcSVWf1zBRU6-hosxo3CLYlAATgBd6NZoSlUyTML0M2p4dlvX9EBro14i-EQJgddQA65112rvayrpRDUxLr8LcxkV3VsPaZMeRtT~iFCoVwJ6Hl5ey2OXd2yVK~OZsNLGejQnQtIzejZSTaz2EJ0D15eBjj1WsFqP2pDBV4T8ylB2FhWhY-0DgPNro6Du-z0-bo0zBf1-uoU4e~r2GAEb2KI3tOLehUJ7qQ__",
      alt: "",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/5e52/ced2/071eff545d1b16dd4bc36fd771859d9d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Em2S2e09wYAQmfAW2cswHV3DWnXqi4yn0bvoMHYUhcK4s9g~wz~3t3gxaiqxG8ZagvnfbJtnSbja5yKjr-Oe0TAUtwP-KKm-oNbdeqXjQxJ3d6-LXXCoswUPYh~ztJyQexetdTSkuhUEmYupwA9FW-Lb4ZQyYQKB-xg-Wa0e~wZznMrZ8n3ciEOVk21Xr7RUlhAmJkm2r3EfPQ8lqIfTxp2XuPLyQ~ghLcZ-8nI2wplMK3ZX0j4w~hPvzR0UBqhnhfwow5S4eTTHX5v4DAdSHiHTP90LO52UIp10Sub4DvgjBoAckIyrHIGeULEE5BO8bQg2KrNCgndWx9gW4pddPA__",
      alt: "",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/c2c3/8cac/5270c8133fe9fbba80ef684203daf896?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D3-6p7az-sJ34nilNWCJzQMl4I4rcdQgqkT1XWqPr9q6iMNHmqzHyV-zfoRjMJplhs55aJ7DBBYBFNM2ko8Myuz7St2t6g2wkLFP2SgPMhvWmXXLH1LlScbXO7z5IobE0aqlY1Efpcxe0oWh4tz3NhZHMNHURLggTJgBURu~GPQjtWVF8mAGzeHVCWQE1rvQcFeCziMpa9w8FZOTCLAj6ex2y8aatKYns~qzaj7EULEtzzL2DTsvWabxMk1oUY6MNrwbU3KLZ1Y5g2QGZdRqhr1VwtF~G3yBFypnqTNz~sKydIe-Ew8G9DgzZ5mCYmVrHgvh7nmo11uhmpy8b0mw4w__",
      alt: "",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/efdb/cec2/a35932c0e5b21dfbfb30629b08803e12?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PFsmB8VQoP3ABMEIltsB8oSMrpbTcwi-IXB5U06kSO8t8wtio1sGShi4hwBhI95V5XV4C8F2cu-uEajYgIUSJRz0fT2kPEOCwEZ0cPg7SNM0wrTnHsQ6WUQp9U~UNHbjk4SmYX6Q5IbTOTvyQtutnCeYfvt80vbhDUnmyzaseYUpjbVKL7fgcIL6abgBwcFg7TN072VFmuNG2oaDweuckKYb93IV7QdjcyH63VPjsQkUx4yWCDsBQXCX1r8GSvsiL55CDslJE~CQuqjFRgEBh3dMYnNjkYYqCVXKN~ayn6PJhyt5p9y2YsY4fw-hteMbctWMC-ionrIDQVu~QmiwWA__",
      alt: "",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/fc87/170d/90c406720a69ef576defbab016788d2f?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NtdlyDPU2rQ9auJNSm8Mmv5kiyszStumNS~S0oYu5hrXdIc8vtu7YxIHxJKPjRhBIF1g-eMLwlM7noYUYrXlrhv00tqlFxwx3~qc~08U1hERNXLb7DdZOZtbbnnTcdk20GeihP00m9hKpVWsZZwOPXgqiDfDNdAapJpAWwjSY3YCYZ1gMkhVmxSIXg2Y6OgIfv6lE7wXPMtrwPWC6X84Q4utJTL3ky8wyl6Yz2Yf0Jo1AyocDmNCgrkjDdNfyvEHH6eWippqmX~lsa8Vzs3vnSl0ZDN5nIivM4gQDKyv6BukUcW5Td0Kv8PBYxYRhHX7UnIBEEZbfGDrhfdNa7P5hw__",
      alt: "",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/7f97/05cf/efd22d0a9bd512eb96d8b30fd398822a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IXw6c7hWMd~SPfTsoFsMf1ua7YrTjEBSzqz5o~pvOPb9fBeo1e1i5R52Bvfqq8ATplWpWkE9SquFkMJPN4nyroVxBFtXI95f6QjkG6oMv5ONHmDuA9MT-VIgBUOZXGDajHMAgvSghDpYUHw4jKpiat2BzLh8AShdmGriqdZhTpHVJSVDeTuRFhIDbkjx41~UJO0s0FoLsNde5L37-Gc6nb8mppVphsdq3EAxrv3a7yEgaBVpt1owMSpexh5LYyzMFJQj2upY6XmBx5TG6OYr1EadhkaiXcQ-xTkYHCJfh6Y5ZMiqTlW-t7L26~8XQNikntHAJoXslcw~6E1i5CHimw__",
      alt: "",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/45cc/6e79/677858ce7ddeaf45db374c0f14abedc9?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EioQ2Jb93g2~-uM22pe5jTUFHSKDjNixU8R7GmUK71xZSV7mNynKVpUA73eCja1VFgLc5b1hLT-UcIKM6rv5B1cmWkAS4pLUnqclSI796wFaaDqgUs8w~3HTIe9Og~8bJ1XVa-3k~Dhn4V2PbVr3yqsT~GFZMa6WN62pLxdlE2q1WTIAa9mm0vjjjU-LRxGIIYZAUKM~G5218fWEnRDUwZaoErYqZOjDd5A6wm1wo7iUhsOl04~yFNs~wjGN5yZTSuwLIbax4KTro8IG48-X7~dg~9MhSbZDBkQe9mjnVbZx5oxWkRBWSTuuql8ghFuHQ-XCIrnOxmvJs~cJ5sVf0Q__",
      alt: "",
    },
    {
      src: "https://s3-alpha-sig.figma.com/img/251d/2fdb/537abdd9e098d432d20e7e633d4c2b73?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Nde3wqdsa2kmODD2sp5zTwvFyL00NXxjoDuNRJkal0GRr18UMYH3YDAUu0Ul~-3MC9fDP4lgEyEsBk21fx4c8isaHDzezGeWMH1ghcMHyy2NVSD9Uh6h~Z1E8xBozET6uEG0gBVjGoZn4cFhH7zSHMlv9N~GJZiz4Pl96SLIrqQEuM8WQyCvWl~qnLor47lKxNUI-W~vyP4NwDFnSGC2ZXMnXJMzB3pxKN4RTqm1P0A2fPg-zoeLbZZg8vza2oeDG9xaKpZUMffgQBR02xh3CdNSc8MgJ-qM-St3d2xoQvioee41WziqvDfYxIK0AaRyMxWeJq~dCusz5zY-mGJKXw__",
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
                {imageItem1.map((image, index)=>(
                <img key={index} src={image.src} alt={image.alt} />
                ))}
            </div>
            <div className="gallery-image-item2">
                {imageItem2.map((image, index)=>(
                <img key={index} src={image.src} alt={image.alt} />
                ))}
            </div>
            <div className="gallery-image-item3">
                {imageItem3.map((image, index)=>(
                <img key={index} src={image.src} alt={image.alt} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
