---
layout: base
title: 'Enhanced Representation'
udver: '2'
---

# Enhanced UD Graphs in the Data

<pre>
Explanation of the numbers:
EB ... edge basic only; EE ... edge enhanced only
EBE ... same edge in basic and enhanced; EBe ... same parent in basic and enhanced, enhanced edge type extends basic; EBi ... same parent in basic and enhanced, enhanced edge type incompatible
G ... gapping (empty nodes); P ... shared coord parent; S ... shared coord dependent; X ... controlled subject; R ... relative clause; C ... case-enhanced relation type

UD_Arabic-PADT                                  EB=2583         EBE=196503      EBe=83298       EBi=0           EE=21150        G=58    P=13166 S=2099  X=0     R=2204  C=87220
UD_Belarusian-HSE*                              EB=3194         EBE=256865      EBe=45028       EBi=24          EE=21162        G=308   P=13373 S=58    X=1875  R=2297  C=47417
UD_Bulgarian-BTB                                EB=1514         EBE=136230      EBe=18403       EBi=11          EE=6192         G=0     P=1123  S=556   X=405   R=1488  C=18486
UD_Catalan-AnCora                               EB=1            EBE=547261      EBe=0           EBi=0           EE=6378         G=6377  P=0     S=0     X=0     R=0     C=0
UD_Chintang-CTNTB                               EB=1            EBE=14630       EBe=0           EBi=0           EE=250          G=0     P=71    S=26    X=108   R=1     C=0
UD_Chukchi-HSE                                  EB=25           EBE=6094        EBe=4           EBi=1           EE=113          G=87    P=0     S=0     X=0     R=0     C=0
UD_Czech-CAC*                                   EB=8743         EBE=394079      EBe=91558       EBi=107         EE=60276        G=829   P=31225 S=8347  X=2008  R=5760  C=97868
UD_Czech-CLTT*                                  EB=589          EBE=28506       EBe=6918        EBi=5           EE=5915         G=10    P=2565  S=916   X=133   R=558   C=7650
UD_Czech-FicTree*                               EB=2239         EBE=143725      EBe=21091       EBi=23          EE=17216        G=169   P=9274  S=2412  X=681   R=1640  C=21914
UD_Czech-PDTC*                                  EB=46069        EBE=2855359     EBe=538728      EBi=851         EE=424255       G=120919        P=141365        S=33202 X=25258 R=35896 C=569631
UD_Czech-PUD*                                   EB=357          EBE=15076       EBe=3176        EBi=1           EE=1468         G=13    P=730   S=9     X=112   R=239   C=3318
UD_Dutch-Alpino*                                EB=2253         EBE=179428      EBe=26993       EBi=11          EE=9374         G=130   P=3008  S=965   X=1165  R=1993  C=27043
UD_Dutch-LassySmall*                            EB=3260         EBE=250464      EBe=43375       EBi=14          EE=15954        G=416   P=6334  S=2293  X=1118  R=2504  C=43436
UD_English-CHILDES                              EB=330          EBE=289006      EBe=13402       EBi=2           EE=7681         G=0     P=1185  S=671   X=4854  R=327   C=13451
UD_English-EWT*                                 EB=1597         EBE=220988      EBe=32235       EBi=0           EE=15337        G=43    P=5361  S=2044  X=3306  R=1514  C=32236
UD_English-GENTLE                               EB=85           EBE=15420       EBe=2294        EBi=0           EE=1090         G=0     P=578   S=98    X=182   R=95    C=2311
UD_English-GUM*                                 EB=1954         EBE=220546      EBe=34239       EBi=0           EE=15897        G=154   P=6036  S=1820  X=3034  R=1884  C=34344
UD_English-GUMReddit                            EB=116          EBE=14220       EBe=2028        EBi=0           EE=1077         G=0     P=317   S=166   X=258   R=136   C=2050
UD_English-PUD*                                 EB=172          EBE=17818       EBe=3190        EBi=0           EE=1177         G=7     P=439   S=127   X=227   R=165   C=3190
UD_Estonian-EDT*                                EB=5027         EBE=393717      EBe=38558       EBi=486         EE=38634        G=528   P=21887 S=2639  X=3954  R=3329  C=2
UD_Estonian-EWT                                 EB=995          EBE=84984       EBe=4568        EBi=38          EE=7932         G=110   P=4725  S=498   X=780   R=632   C=0
UD_Finnish-PUD                                  EB=4            EBE=15809       EBe=0           EBi=0           EE=17           G=4     P=4     S=0     X=0     R=0     C=0
UD_Finnish-TDT                                  EB=326          EBE=201866      EBe=0           EBi=98          EE=16094        G=261   P=6701  S=5124  X=984   R=0     C=0
UD_Highland_Puebla_Nahuatl-ITML                 EB=7            EBE=10081       EBe=0           EBi=0           EE=22           G=15    P=0     S=0     X=0     R=0     C=0
UD_Italian-ISDT*                                EB=3050         EBE=244730      EBe=50555       EBi=5           EE=16098        G=37    P=7276  S=1259  X=1410  R=2920  C=50568
UD_Italian-Old                                  EB=1223         EBE=120751      EBe=7           EBi=43          EE=1529         G=306   P=0     S=0     X=0     R=0     C=1
UD_Khoekhoe-KDT                                 EB=5            EBE=28996       EBe=1           EBi=5           EE=924          G=0     P=134   S=220   X=183   R=75    C=6
UD_Korean-LittlePrince                          EB=7            EBE=13648       EBe=0           EBi=1           EE=4088         G=4081  P=0     S=0     X=0     R=0     C=0
UD_Latgalian-Cairo                              EB=13           EBE=145         EBe=12          EBi=0           EE=28           G=3     P=4     S=3     X=5     R=0     C=12
UD_Latvian-Cairo                                EB=13           EBE=145         EBe=10          EBi=0           EE=28           G=3     P=4     S=3     X=5     R=0     C=10
UD_Latvian-LVTB                                 EB=3154         EBE=274578      EBe=52558       EBi=28          EE=29300        G=876   P=11697 S=8633  X=2536  R=0     C=52779
UD_Lithuanian-ALKSNIS*                          EB=378          EBE=53250       EBe=16419       EBi=0           EE=8138         G=2     P=5075  S=1449  X=352   R=368   C=17016
UD_Naga-Suansu                                  EB=0            EBE=3122        EBe=0           EBi=1           EE=46           G=0     P=16    S=6     X=17    R=0     C=0
UD_Polish-LFG                                   EB=0            EBE=119772      EBe=11191       EBi=5           EE=3614         G=0     P=1502  S=977   X=896   R=0     C=11209
UD_Polish-MPDT                                  EB=19           EBE=47249       EBe=0           EBi=5           EE=3962         G=0     P=1974  S=1452  X=0     R=17    C=0
UD_Polish-PDB                                   EB=18           EBE=349960      EBe=0           EBi=0           EE=21681        G=0     P=14028 S=5823  X=0     R=18    C=0
UD_Polish-PUD                                   EB=0            EBE=18384       EBe=0           EBi=0           EE=1033         G=0     P=649   S=322   X=0     R=0     C=0
UD_Portuguese-Porttinari*                       EB=1970         EBE=139314      EBe=26797       EBi=0           EE=11723        G=63    P=3420  S=2244  X=1653  R=1796  C=26798
UD_Russian-SynTagRus*                           EB=20533        EBE=1261026     EBe=233989      EBi=40          EE=114440       G=2204  P=72443 S=583   X=10514 R=7628  C=238648
UD_Ruuli-RDT                                    EB=25           EBE=6276        EBe=0           EBi=0           EE=145          G=0     P=30    S=3     X=12    R=25    C=0
UD_Slovak-SNK*                                  EB=917          EBE=89277       EBe=16178       EBi=2           EE=6896         G=52    P=4104  S=593   X=360   R=728   C=16681
UD_Spanish-AnCora                               EB=3            EBE=560133      EBe=0           EBi=1           EE=8115         G=8112  P=0     S=0     X=0     R=0     C=0
UD_Swedish-PUD*                                 EB=277          EBE=15737       EBe=3062        EBi=0           EE=1336         G=9     P=421   S=138   X=201   R=255   C=3068
UD_Swedish-Talbanken*                           EB=1124         EBE=80677       EBe=15012       EBi=7           EE=7325         G=39    P=3300  S=761   X=931   R=1004  C=15082
UD_Tamil-TTB                                    EB=0            EBE=6982        EBe=2599        EBi=0           EE=307          G=0     P=238   S=0     X=0     R=0     C=2630
UD_Ukrainian-IU                                 EB=854          EBE=121848      EBe=47          EBi=11          EE=11602        G=233   P=6086  S=971   X=1080  R=795   C=0
UD_Western_Sierra_Puebla_Nahuatl-MesoTree       EB=17           EBE=19517       EBe=0           EBi=1           EE=33           G=16    P=0     S=0     X=0     R=0     C=0

Explanation of the numbers:
EB ... edge basic only; EE ... edge enhanced only
EBE ... same edge in basic and enhanced; EBe ... same parent in basic and enhanced, enhanced edge type extends basic; EBi ... same parent in basic and enhanced, enhanced edge type incompatible
G ... gapping (empty nodes); P ... shared coord parent; S ... shared coord dependent; X ... controlled subject; R ... relative clause; C ... case-enhanced relation type

Total 19 treebanks (marked with *) have all types of enhancements.
Total 47 treebanks have at least one type of enhancement.
Total 29 languages have at least one type of enhancement in at least one treebank.
</pre>
