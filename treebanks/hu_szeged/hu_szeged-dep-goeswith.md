---
layout: base
title:  'Statistics of goeswith in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `goeswith`

This relation is universal.

5 nodes (0%) are attached to their parents as `goeswith`.

5 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `goeswith`: <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-CCONJ.html">CCONJ</a></tt> (2; 40% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 goeswith	color:blue
1	Ezek	ez	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Dem	5	nsubj	_	_
2	már	már	ADV	_	_	5	advmod:tlocy	_	_
3	pénzt	pénz	NOUN	_	Case=Acc|Number=Sing	5	obj:lvc	_	_
4	is	is	CCONJ	_	_	3	cc	_	ToDo=cc-without-conj
5	hoznának	hoz	VERB	_	Definite=Ind|Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	házhoz	ház	NOUN	_	Case=All|Number=Sing	5	obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	nem	nem	ADV	_	PronType=Neg	11	cc	_	_
10	csak	csak	CCONJ	_	_	9	goeswith	_	_
11	nekem	én	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	5	obl	_	SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	_	_
13	hanem	hanem	CCONJ	_	_	15	cc	_	_
14	az	az	DET	_	Definite=Def|PronType=Art	15	det	_	_
15	Universumnak	Universum	PROPN	_	Case=Dat|Number=Sing	11	conj	_	_
16	is	is	CCONJ	_	_	11	cc	_	SpaceAfter=No|ToDo=cc-after-conj
17	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 32 goeswith	color:blue
1	Ez	ez	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	2	det	_	_
2	utóbbi	utóbbi	NOUN	_	Case=Nom|Number=Sing	3	nmod:att	_	_
3	megfogalmazása	megfogalmazás	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nmod:att	_	_
4	érdekében	érdek	NOUN	_	Case=Ine|Number=Sing|Number[psor]=Sing|Person[psor]=3	21	obl	_	_
5	az	az	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	idén	idén	ADV	_	_	21	advmod:tlocy	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	10	det	_	_
8	Time	Time	PROPN	_	Case=Nom|Number=Sing	10	nmod:att	_	_
9	Warner	Warner	PROPN	_	Case=Nom|Number=Sing	8	flat:name	_	_
10	médiabirodalommal	médiabirodalom	NOUN	_	Case=Ins|Number=Sing	21	obl	_	_
11	együtt	együtt	ADP	_	_	10	case	_	_
12	a	a	DET	_	Definite=Def|PronType=Art	13	det	_	_
13	kávébárjaiban	kávébár	NOUN	_	Case=Ine|Number=Plur|Number[psor]=Sing|Person[psor]=3	21	obl	_	_
14	3	3	NUM	_	Case=Nom|Number=Sing|NumType=Card	15	amod:att	_	_
15	dollárért	dollár	NOUN	_	Case=Cau|Number=Sing	16	obl	_	_
16	kapható	kapható	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|VerbForm=PartPres	20	amod:att	_	SpaceAfter=No
17	,	,	PUNCT	_	_	16	punct	_	_
18	kéthavonta	kéthavonta	ADV	_	_	19	advmod:mode	_	_
19	megjelenő	megjelenő	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|VerbForm=PartPres	20	amod:att	_	_
20	magazint	magazin	NOUN	_	Case=Acc|Number=Sing	21	obj	_	_
21	indított	indít	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
22	Joe	Joe	PROPN	_	Case=Nom|Number=Sing	23	nmod:att	_	_
23	néven	név	NOUN	_	Case=Sup|Number=Sing	21	obl	_	SpaceAfter=No
24	,	,	PUNCT	_	_	43	punct	_	_
25	s	s	CCONJ	_	_	43	cc	_	_
26	a	a	DET	_	Definite=Def|PronType=Art	27	det	_	_
27	szolgáltatásaival	szolgáltatás	NOUN	_	Case=Ins|Number=Plur|Number[psor]=Sing|Person[psor]=3	34	obl	_	_
28	és	és	CCONJ	_	_	29	cc	_	_
29	mondandójával	mondandó	NOUN	_	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	27	conj	_	_
30	a	a	DET	_	Definite=Def|PronType=Art	33	det	_	_
31	jól	jól	ADV	_	Degree=Pos	33	amod:att	_	_
32	szituált	szituált	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	31	goeswith	_	_
33	nőket	nő	NOUN	_	Case=Acc|Number=Plur	34	obj	_	_
34	megcélzó	megcélzó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|VerbForm=PartPres	40	amod:att	_	_
35	Oxygen	Oxygen	PROPN	_	Case=Nom|Number=Sing	40	nmod:att	_	_
36	Media	Media	PROPN	_	Case=Nom|Number=Sing	35	flat:name	_	_
37	televíziós	televíziós	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	40	amod:att	_	_
38	és	és	CCONJ	_	_	39	cc	_	_
39	internetes	internetes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	37	conj	_	_
40	vállalkozással	vállalkozás	NOUN	_	Case=Ins|Number=Sing	43	obl	_	_
41	is	is	CCONJ	_	_	40	cc	_	ToDo=cc-without-conj
42	szövetségre	szövetség	NOUN	_	Case=Sub|Number=Sing	43	obl	_	_
43	lépett	lép	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	21	conj	_	SpaceAfter=No
44	.	.	PUNCT	_	_	21	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Ugyan	ugyan	ADV	_	_	4	amod:att	_	_
2	ilyen	ilyen	ADV	_	PronType=Dem	1	goeswith	_	_
3	konkrét	konkrét	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	amod:att	_	_
4	eset	eset	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
5	ismert	ismert	ADJ	_	Case=Nom|Number=Sing|VerbForm=PartPast	0	root	_	_
6	az	az	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	érdekképviselők	érdekképviselő	NOUN	_	Case=Nom|Number=Plur	5	obl	_	_
8	előtt	előtt	ADP	_	_	7	case	_	_
9	Kerekegyházán	Kerekegyháza	PROPN	_	Case=Sup|Number=Sing	5	obl	_	_
10	is	is	CCONJ	_	_	9	cc	_	SpaceAfter=No|ToDo=cc-without-conj
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


