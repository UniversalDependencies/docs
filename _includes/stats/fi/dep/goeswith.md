

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

17 nodes (0%) are attached to their parents as `goeswith`.

17 instances of `goeswith` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `goeswith`: [fi-pos/NOUN]()-[fi-pos/NOUN]() (12; 71% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (1; 6% instances), [fi-pos/ADJ]()-[fi-pos/X]() (1; 6% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (1; 6% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (1; 6% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 goeswith	color:blue
1	Veri	veri	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	_
2	putoaa	pudota	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	pisara	pisara	NOUN	N	Case=Nom|Number=Sing	4	nmod	_	_
4	pisaralta	pisara	NOUN	N	Case=Abl|Number=Sing	2	nmod	_	_
5	paperi	paperi	NOUN	N	Case=Nom|Number=Sing	6	goeswith	_	_
6	silppuun	silppu	NOUN	N	Case=Ill|Number=Sing	2	nmod	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 goeswith	color:blue
1	Yht’	yht’äkkiä	ADV	Adv	Typo=Yes	2	goeswith	_	_
2	äkkiä	yht’äkkiä	ADV	Adv	Typo=Yes	4	advmod	_	_
3	naisella	nainen	NOUN	N	Case=Ade|Number=Sing	4	nmod:own	_	_
4	oli	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	kummassakin	kumpikin	PRON	Pron	Case=Ine|Number=Sing|PronType=Ind	6	det	_	_
6	kädessään	käsi	NOUN	N	Case=Ine|Number=Sing|Person[psor]=3	4	nmod	_	_
7	isot	iso	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	8	amod	_	_
8	käsilautaset	käsi#lautanen	NOUN	N	Case=Nom|Number=Plur	4	nsubj	_	SpaceAfter=No
9	,	,	PUNCT	Punct	_	11	punct	_	_
10	jonkinlaiset	jonkinlainen	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	11	amod	_	_
11	symbaalit	symbaali	NOUN	N	Case=Nom|Number=Plur	8	appos	_	_
12	joita	joka	PRON	Pron	Case=Par|Number=Plur|PronType=Rel	15	dobj	_	_
13	ainakin	ainakin	ADV	Adv	_	14	advmod	_	_
14	marssimusiikissa	marssi#musiikki	NOUN	N	Case=Ine|Number=Sing	15	nmod	_	_
15	käytetään	käyttää	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	11	acl:relcl	_	SpaceAfter=No
16	.	.	PUNCT	Punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 goeswith	color:blue
1	Kuitenkin	kuitenkin	ADV	Adv	_	5	advmod	26:advmod	_
2	japanilaiset	Japani	ADJ	A	Case=Nom|Degree=Pos|Derivation=Lainen|Number=Plur	3	amod	_	_
3	autonvalmistajat	auto#valmistaja	NOUN	N	Case=Nom|Number=Plur	5	nsubj	_	_
4	ovat	olla	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
5	laajentaneen	laajentaa	VERB	V	Case=Nom|Degree=Pos|Number=Plur|PartForm=Past|Typo=Yes|VerbForm=Part|Voice=Act	0	root	_	_
6	toimintaansa	toiminta	NOUN	N	Case=Par|Number=Sing|Person[psor]=3	5	dobj	_	_
7	voimakkaasti	voimakkaasti	ADV	Adv	_	5	advmod	_	_
8	kaikkialle	kaikkialle	ADV	Adv	_	5	advmod	_	_
9	maailmaa	maailma	NOUN	N	Case=Ill|Number=Sing|Typo=Yes	8	nmod	_	_
10	ja	ja	CONJ	C	_	5	cc	_	_
11	Japani	Japani	PROPN	N	Case=Gen|Number=Sing|Typo=Yes	12	nmod:poss	_	_
12	valmistusmäärien	valmistus#määrä	NOUN	N	Case=Gen|Number=Plur	13	nmod:poss	_	_
13	laskusta	lasku	NOUN	N	Case=Ela|Number=Sing	26	nmod	_	_
14	huolimatta	huolimatta	ADP	Adp	AdpType=Post	13	case	_	_
15	Toyota-yhtymä	Toyota#yhtymä	NOUN	N	Case=Nom|Number=Sing	26	nsubj	_	SpaceAfter=No
16	,	,	PUNCT	Punct	_	19	punct	_	_
17	johon	joka	PRON	Pron	Case=Ill|Number=Sing|PronType=Rel	19	nmod	_	_
18	kuulu	kuulua	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin|Voice=Act	19	goeswith	_	_
19	ovat	kuulua	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin|Voice=Act	15	acl:relcl	_	_
20	myös	myös	ADV	Adv	_	21	advmod	23:advmod	_
21	Hino	Hino	PROPN	N	Case=Nom|Number=Sing	19	nsubj	_	_
22	ja	ja	CONJ	C	_	21	cc	_	_
23	Daihatsu	Daihatsu	PROPN	N	Case=Nom|Number=Sing	21	conj	19:nsubj	SpaceAfter=No
24	,	,	PUNCT	Punct	_	19	punct	_	_
25	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	26	aux	_	_
26	kohonnut	kohota	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	5	conj	_	_
27	maailman	maailma	NOUN	N	Case=Gen|Number=Sing	28	nmod:poss	_	_
28	suurimmaksi	suuri	ADJ	A	Case=Tra|Degree=Sup|Number=Sing	30	amod	_	_
29	ajoneuvojen	ajo#neuvo	NOUN	N	Case=Gen|Number=Plur	30	nmod:gobj	_	_
30	valmistajaksi	valmistaja	NOUN	N	Case=Tra|Number=Sing	26	xcomp	_	_
31	ohitse	ohitse	ADP	Adp	AdpType=Post	33	case	_	_
32	amerikkalaisen	amerikkalainen	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	33	amod	_	_
33	General	General	PROPN	N	_	26	nmod	_	_
34	Motorsin	Motors	PROPN	N	Case=Gen|Number=Sing	33	name	_	SpaceAfter=No
35	.	.	PUNCT	Punct	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

7 nodes (0%) are attached to their parents as `goeswith`.

7 instances of `goeswith` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `goeswith`: [fi-pos/NOUN]()-[fi-pos/NOUN]() (3; 43% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (2; 29% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (1; 14% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (1; 14% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 goeswith	color:blue
1	Kun	kun	SCONJ	Pcle,CS	_	12	mark	_	_
2	tusina	tusina	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	nmod	_	_
3	Chopinin	chopin	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	4	nmod	_	_
4	preludeja	preludi	NOUN	N,Pl,Par	Case=Par|Number=Plur	12	dobj	_	_
5	,	,	PUNCT	Pun	_	4	punct	_	FTB-rel=phrm
6	pari	pari	NUM	Num,Card,Sg,Nom	Case=Nom|Number=Sing|NumType=Card	7	nummod	_	_
7	valssia	valssi	NOUN	N,Sg,Par	Case=Par|Number=Sing	4	conj	_	_
8	ja	ja	CONJ	Pcle,CC	_	4	cc	_	_
9	b-molli	b-molli	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	10	goeswith	_	Alt=goeswith
10	skertso	skertso	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	conj	_	_
11	oli	olla	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	aux	_	_
12	singottu	singota	VERB	V,Pass,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	19	advcl	_	_
13	kirkkosaliin	kirkkosali	NOUN	N,Sg,Ill	Case=Ill|Number=Sing	12	nmod	_	_
14	,	,	PUNCT	Pun	_	13	punct	_	_
15	olokin	olo	NOUN	N,Sg,Nom,Kin	Case=Nom|Clitic=Kin|Number=Sing	19	nsubj:cop	_	_
16	alkoi	alkaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	19	aux	_	_
17	olla	olla	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	19	cop	_	_
18	kiusallisen	kiusallinen	ADJ	A,Sg,Gen	Case=Gen|Number=Sing	19	amod	_	_
19	mukava	mukava	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
20	.	.	PUNCT	Pun	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 goeswith	color:blue
1	Siis	siis	PART	Pcle	_	4	advmod	_	_
2	semmosta	semmoinen	DET	A,Dem,Sg,Par	Case=Par|Number=Sing|PronType=Dem	4	amod	_	Alt=DET
3	ruokaruoka	ruokaruoka	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	goeswith	_	Alt=goeswith
4	tyyppistä	tyyppinen	ADJ	A,Sg,Par	Case=Par|Number=Sing	0	root	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 goeswith	color:blue
1	Favora	favora	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	2	goeswith	_	Alt=goeswith
2	ihogeeli	ihogeeli	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	3	nsubj	_	_
3	levittyy	levittyä	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	keveästi	keveästi	ADV	Adv	_	3	advmod	_	_
5	ja	ja	CONJ	Pcle,CC	_	3	cc	_	_
6	imeytyy	imeytyä	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
7	nopeasti	nopeasti	ADV	Adv	_	6	advmod	_	_
8	.	.	PUNCT	Pun	_	7	punct	_	_

~~~


