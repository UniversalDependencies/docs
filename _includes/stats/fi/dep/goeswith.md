

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

42 nodes (0%) are attached to their parents as `goeswith`.

42 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 8 pairs of parts of speech are connected with `goeswith`: [fi-pos/NOUN]()-[fi-pos/NOUN]() (22; 52% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (8; 19% instances), [fi-pos/PUNCT]()-[fi-pos/PUNCT]() (6; 14% instances), [fi-pos/NUM]()-[fi-pos/NUM]() (2; 5% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (1; 2% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (1; 2% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (1; 2% instances), [fi-pos/X]()-[fi-pos/ADJ]() (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 goeswith	color:blue
1	Komissio	komissio	NOUN	N	Case=Nom|Number=Sing	2	nsubj	3:nsubj	_
2	halusi	haluta	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	korvata	korvata	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	2	xcomp	_	_
4	hintojen	hinta	NOUN	N	Case=Gen|Number=Plur	5	nmod:poss	_	_
5	laskun	lasku	NOUN	N	Case=Gen|Number=Sing	3	obj	_	_
6	vain	vain	ADV	Adv	_	7	advmod	_	_
7	44	44	NUM	Num	NumType=Card	8	nummod	_	_
8	%:	prosentti	NOUN	N	Case=Ade|Number=Sing	3	obl	_	_
9	lla	lla	NOUN	N	Case=Ade|Number=Sing	8	goeswith	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 goeswith	color:blue
1	Teollisuustuotteet	teollisuus#tuote	NOUN	N	Case=Nom|Number=Plur	2	nsubj	_	_
2	muodostavat	muodostaa	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	suurimman	suuri	ADJ	A	Case=Gen|Degree=Sup|Number=Sing	4	amod	_	_
4	osan	osa	NOUN	N	Case=Gen|Number=Sing	2	obj	_	_
5	EU:	EU	PROPN	N	Abbr=Yes|Case=Gen|Number=Sing	7	nmod:gsubj	_	_
6	n	n	PROPN	N	Abbr=Yes|Case=Gen|Number=Sing	5	goeswith	_	_
7	viennistä	vienti	NOUN	N	Case=Ela|Number=Sing	4	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 goeswith	color:blue
1	Kerran	kerta	NOUN	N	Case=Gen|Number=Sing	2	obl	_	_
2	esiintyi	esiintyä	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	selitys	selitys	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	6	punct	_	_
5	jossa	joka	PRON	Pron	Case=Ine|Number=Sing|PronType=Rel	6	obl	_	_
6	sanottiin	sanoa	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	3	acl:relcl	_	_
7	likimain	likimain	ADV	Adv	_	8	advmod	_	_
8	näin	näin	ADV	Adv	_	6	advmod	_	_
9	-	-	PUNCT	Punct	_	6	punct	_	_
10	-	-	PUNCT	Punct	_	9	goeswith	_	_

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
4	preludeja	preludi	NOUN	N,Pl,Par	Case=Par|Number=Plur	12	obj	_	_
5	,	,	PUNCT	Pun	_	4	punct	_	FTB-rel=phrm
6	pari	pari	NUM	Num,Card,Sg,Nom	Case=Nom|Number=Sing|NumType=Card	7	nummod	_	_
7	valssia	valssi	NOUN	N,Sg,Par	Case=Par|Number=Sing	4	conj	_	_
8	ja	ja	CCONJ	Pcle,CC	_	10	cc	_	_
9	b-molli	b-molli	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	10	goeswith	_	Alt=goeswith
10	skertso	skertso	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	conj	_	_
11	oli	olla	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	aux	_	_
12	singottu	singota	VERB	V,Pass,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	19	advcl	_	_
13	kirkkosaliin	kirkkosali	NOUN	N,Sg,Ill	Case=Ill|Number=Sing	12	nmod	_	_
14	,	,	PUNCT	Pun	_	13	punct	_	_
15	olokin	olo	NOUN	N,Sg,Nom,Kin	Case=Nom|Clitic=Kin|Number=Sing	19	nsubj:cop	_	_
16	alkoi	alkaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	19	aux	_	_
17	olla	olla	AUX	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	19	cop	_	_
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 goeswith	color:blue
1	Passissa	passi	NOUN	N,Sg,Ine	Case=Ine|Number=Sing	3	nmod	_	_
2	hänellä	hän	PRON	Pron,Pers,Sg3,Ade	Case=Ade|Number=Sing|Person=3|PronType=Prs	3	nmod	_	_
3	lukee	lukea	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	syntymäpaikkana	syntymäpaikka	NOUN	N,Sg,Ess	Case=Ess|Number=Sing	3	nmod	_	_
5	Wiipuri	wiipuri	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	3	nsubj	_	_
6	,	,	PUNCT	Pun	_	5	punct	_	_
7	tupla	tupla	ADJ	A	_	8	goeswith	_	Alt=goeswith
8	veellä	vee	NOUN	N,Sg,Ade	Case=Ade|Number=Sing	5	nmod	_	_
9	,	,	PUNCT	Pun	_	8	punct	_	_
10	ja	ja	CCONJ	Pcle,CC	_	14	cc	_	_
11	siitä	se	PRON	Pron,Dem,Sg,Ela	Case=Ela|Number=Sing|PronType=Dem	14	nmod	_	_
12	hän	hän	PRON	Pron,Pers,Sg3,Nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	14	nsubj:cop	_	_
13	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	cop	_	_
14	ylpeä	ylpeä	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	3	conj	_	_
15	.	.	PUNCT	Pun	_	14	punct	_	_

~~~


