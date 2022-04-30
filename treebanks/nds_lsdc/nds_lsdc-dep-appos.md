---
layout: base
title:  'Statistics of appos in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `appos`

This relation is universal.

7 nodes (0%) are attached to their parents as `appos`.

7 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 4 pairs of parts of speech are connected with `appos`: <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt>-<tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt> (4; 57% instances), <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-X.html">X</a></tt> (1; 14% instances), <tt><a href="nds_lsdc-pos-PRON.html">PRON</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="nds_lsdc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 appos	color:blue
1	Hee	hee	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	lemma[gml]=hê¹
2	hadde	hebben	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	lemma[gml]=hebben
3	eyne	en	DET	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	lemma[gml]=êⁱn¹
4	vrouw	vrouwe	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	lemma[gml]=vrouwe²
5	mid	mid	ADP	_	AdpType=Prep	7	case	_	lemma[gml]=mit
6	vyv	vyv	NUM	_	NumType=Card	7	nummod	_	lemma[gml]=vîf
7	kinder	kind	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	4	nmod	_	lemma[gml]=kint|SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	_
9	dee	dee	PRON	_	Case=Nom|Number=Plur|PronType=Rel	12	nsubj	_	lemma[gml]=dê¹
10	aver	avers	ADV	_	_	12	advmod	_	lemma[gml]=āvers
11	alle	al	PRON	_	Case=Nom|Number=Plur|PronType=Tot	9	appos	_	lemma[gml]=al
12	uutsågen	uutseen	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	4	acl	_	lemma[gml]=ûtsên|SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	äs	as	SCONJ	_	_	18	mark	_	lemma[gml]=alsô
15	wän	wan	SCONJ	_	_	18	mark	_	lemma[gml]=wan³
16	see	see	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	18	nsubj	_	_
17	bast	bast	NOUN	_	Case=Acc|Gender=Masc,Neut|Number=Sing	18	obj	_	lemma[gml]=bast
18	gnageden	gnagen	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	12	advcl	_	lemma[gml]=gnāgen|SpaceAfter=No
19	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 19 appos	color:blue
1	toch	doch	ADV	_	_	9	advmod	_	lemma[gml]=doch¹
2	-	-	PUNCT	_	_	4	punct	_	_
3	det	dat	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3	4	nsubj	_	lemma[gml]=dat²
4	sküt	sketen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	parataxis	_	lemma[gml]=schêten
5	myn	ik	PRON	_	Case=Acc,Dat|Number=Sing|Person=1|PronType=Prs	4	obj	_	lemma[gml]=ik
6	dår	dår	ADV	_	_	4	advmod	_	_
7	in	ik	ADP	_	_	4	compound	_	lemma[gml]=in³
8	-	-	PUNCT	_	_	4	punct	_	_
9	kon	künnen	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	lemma[gml]=künnen
10	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	lemma[gml]=ik
11	ouk	ouk	ADV	_	_	9	advmod	_	lemma[gml]=ôk
12	enkele	enkel	ADJ	_	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	13	amod	_	lemma[gml]=enkel¹
13	leedtys	leedken	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	9	obj	_	lemma[gml]=lêt¹|SpaceAfter=No
14	,	,	PUNCT	_	_	19	punct	_	_
15	sou	sou	ADV	_	_	19	advmod	_	lemma[gml]=sô²
16	as	as	CCONJ	_	_	19	case	_	lemma[gml]=alsô|SpaceAfter=No
17	:	:	PUNCT	_	_	19	punct	_	_
18	‘	‘	PUNCT	_	_	19	punct	_	SpaceAfter=No
19	Iovivat	Iovivat	X	_	Foreign=Yes	13	appos	_	SpaceAfter=No
20	’	’	PUNCT	_	_	19	punct	_	_
21	en	un	CCONJ	_	_	23	cc	_	lemma[gml]=unde²
22	‘	‘	PUNCT	_	_	23	punct	_	SpaceAfter=No
23	Prosaluut	Prosaluut	X	_	Foreign=Yes	19	conj	_	_
24	horum	horum	X	_	Foreign=Yes	23	flat	_	_
25	Batavorum	Batavorum	X	_	Foreign=Yes	23	flat	_	_
26	en	un	CCONJ	_	_	27	cc	_	lemma[gml]=unde²
27	Amicorum	Amicorum	X	_	Foreign=Yes	23	flat	_	SpaceAfter=No
28	’	’	PUNCT	_	_	23	punct	_	SpaceAfter=No
29	;	;	PUNCT	_	_	31	punct	_	_
30	et	et	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	31	nsubj	_	lemma[gml]=et¹
31	ging	gån	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	9	parataxis	_	lemma[gml]=gân
32	altyd	altyd	ADV	_	_	31	advmod	_	lemma[gml]=al(le)tît
33	håste	håste	ADV	_	_	31	advmod	_	lemma[gml]=hâste
34	van	van	ADP	_	AdpType=Prep	36	case	_	lemma[gml]=van¹
35	‘	‘	PUNCT	_	_	36	punct	_	SpaceAfter=No
36	um	um	X	_	Foreign=Yes	31	obl	_	SpaceAfter=No
37	’	’	PUNCT	_	_	36	punct	_	_
38	en	en	CCONJ	_	_	41	cc	_	lemma[gml]=unde²
39	van	van	ADP	_	AdpType=Prep	41	case	_	lemma[gml]=van¹
40	‘	‘	PUNCT	_	_	41	punct	_	SpaceAfter=No
41	arum	arum	X	_	Foreign=Yes	36	conj	_	SpaceAfter=No
42	’	’	PUNCT	_	_	41	punct	_	SpaceAfter=No
43	;	;	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 35 appos	color:blue
1	Marigge	Marigge	PROPN	_	Number=Sing	2	nsubj	_	_
2	gung	gån	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	lemma[gml]=gân
3	avers	avers	ADV	_	_	2	advmod	_	lemma[gml]=āvers
4	in	in	ADP	_	AdpType=Prep	6	case	_	lemma[gml]=in²
5	de	de	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	lemma[gml]=dê¹
6	kameren	kamer	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	2	obl	_	lemma[gml]=kāmer
7	un	un	CCONJ	_	_	8	cc	_	lemma[gml]=unde²
8	hale	halen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	lemma[gml]=hālen¹
9	eynen	en	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	lemma[gml]=êⁱn¹
10	korv	korv	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	8	obj	_	lemma[gml]=korf
11	mid	mid	ADP	_	AdpType=Prep	12	case	_	lemma[gml]=mit
12	viksebounen	vikboune	NOUN	_	Case=Dat|Gender=Fem|Number=Plur	10	nmod	_	lemma[gml]=vikbône|SpaceAfter=No
13	,	,	PUNCT	_	_	19	punct	_	_
14	dee	dee	PRON	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Rel	19	nsubj	_	lemma[gml]=dê¹
15	nauw	nauw	ADJ	_	Degree=Pos	19	advmod	_	lemma[gml]=nouwe
16	in	in	ADP	_	AdpType=Prep	18	case	_	lemma[gml]=in²
17	den	de	DET	_	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	lemma[gml]=dê¹
18	skouten	skoute	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	19	obl	_	lemma[gml]=schôte⁴
19	saeten	sitten	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past	12	acl	_	lemma[gml]=sitten
20	un	un	CCONJ	_	_	21	cc	_	lemma[gml]=unde²
21	sea	seggen	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	lemma[gml]=seggen
22	to	to	ADP	_	AdpType=Prep	23	case	_	lemma[gml]=tô⁴
23	Jüsken	Jüsken	PROPN	_	Number=Sing	21	obj	_	SpaceAfter=No
24	:	:	PUNCT	_	_	27	punct	_	_
25	‘	‘	PUNCT	_	_	27	punct	_	SpaceAfter=No
26	Hyr	hyr	ADV	_	_	27	advmod	_	_
27	hest	hebben	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres	21	parataxis	_	lemma[gml]=hebben
28	du	du	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	27	nsubj	_	lemma[gml]=dû¹
29	ouk	ouk	ADV	_	_	27	advmod	_	lemma[gml]=ôk
30	wat	wat	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	27	obj	_	wat(te)³
31	to	to	PART	_	PartType=Inf	32	mark	_	lemma[gml]=tô⁵
32	doon	doon	VERB	_	VerbForm=Inf	30	acl	_	lemma[gml]=dôn¹|SpaceAfter=No
33	,	,	PUNCT	_	_	35	punct	_	_
34	de	de	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	35	det	_	lemma[gml]=dê¹
35	döppe	dop	NOUN	_	Gender=Masc|Number=Plur	30	appos	_	lemma[gml]=dop¹|SpaceAfter=No
36	,	,	PUNCT	_	_	35	punct	_	_
37	dan	dan	ADV	_	_	38	advmod	_	lemma[gml]=dan¹
38	bruukst	bruken	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres	27	conj	_	lemma[gml]=brûken
39	du	du	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	38	nsubj	_	lemma[gml]=dû¹
40	nich	nich	PART	_	PartType=Neg	38	advmod	_	lemma[gml]=nicht¹
41	immer	immer	ADV	_	_	38	advmod	_	lemma[gml]=iem(m)er
42	Wiesken	Wiesken	PROPN	_	Number=Sing	38	obj	_	_
43	an	an	ADV	_	_	45	compound	_	lemma[gml]=an
44	to	to	PART	_	PartType=Inf	45	mark	_	lemma[gml]=tô⁵
45	glupen	glupen	VERB	_	VerbForm=Inf	38	xcomp	_	lemma[gml]=glûpen|SpaceAfter=No
46	!	!	PUNCT	_	_	27	punct	_	_

~~~


