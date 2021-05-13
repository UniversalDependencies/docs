---
layout: base
title:  'Statistics of compound in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="hu_szeged-dep-compound-preverb.html">compound:preverb</a></tt>.

147 nodes (0%) are attached to their parents as `compound`.

147 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt>-<tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt> (144; 98% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	"	"	PUNCT	_	_	5	punct	_	_
2	6	6	NUM	_	Case=Nom|Number=Sing|NumType=Card	3	compound	_	_
3	ezer	ezer	NUM	_	Case=Nom|Number=Sing|NumType=Card	4	nummod	_	_
4	rendőrre	rendőr	NOUN	_	Case=Sub|Number=Sing	5	obl	_	_
5	lenne	lesz	VERB	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	szükségünk	szükség	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=1	5	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Pilinszky	Pilinszky	PROPN	_	Case=Nom|Number=Sing	11	nsubj	_	_
2	János	János	PROPN	_	Case=Nom|Number=Sing	1	flat:name	_	_
3	1964-ben	1964	NUM	_	Case=Ine|Number=Sing|NumType=Card	11	obl	_	_
4	ars	ars	X	_	_	5	compound	_	_
5	poeticaként	poetica	NOUN	_	Case=Abs|Number=Sing	11	obl	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	Magvető	Magvető	PROPN	_	Case=Nom|Number=Sing	9	nmod:att	_	_
8	Kiadó	Kiadó	PROPN	_	Case=Nom|Number=Sing	7	flat:name	_	_
9	igazgatójának	igazgató	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	iobj	_	_
10	azt	az	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Dem	11	obj	_	_
11	írta	ír	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
12	,	,	PUNCT	_	_	14	punct	_	_
13	hogy	hogy	SCONJ	_	_	14	mark	_	_
14	szeretné	szeret	VERB	_	Definite=Def|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	ccomp:obj	_	SpaceAfter=No
15	,	,	PUNCT	_	_	18	punct	_	_
16	ha	ha	SCONJ	_	_	18	mark	_	_
17	verseinek	vers	NOUN	_	Case=Gen|Number=Plur|Number[psor]=Sing|Person[psor]=3	18	nmod:att	_	_
18	halálraítélt	halálraítélt	ADJ	_	Case=Nom|Number=Sing|VerbForm=PartPast	14	advcl	_	_
19	legyen	lesz	AUX	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	cop	_	_
20	a	a	DET	_	Definite=Def|PronType=Art	21	det	_	_
21	lektora	lektor	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	18	nsubj	_	SpaceAfter=No
22	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 compound	color:blue
1	Ha	ha	SCONJ	_	_	2	mark	_	_
2	beigazolódik	be+igazolódik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	31	advcl	_	_
3	a	a	DET	_	Definite=Def|PronType=Art	4	det	_	_
4	jóslata	jóslat	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	11	punct	_	_
6	és	és	CCONJ	_	_	11	cc	_	_
7	tíz	tíz	NUM	_	Case=Nom|Number=Sing|NumType=Card	8	nummod	_	_
8	éven	év	NOUN	_	Case=Sup|Number=Sing	11	obl	_	_
9	belül	belül	ADP	_	_	8	case	_	_
10	háromszorosára	háromszoros	ADJ	_	Case=Sub|Degree=Pos|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	obl	_	_
11	nő	nő	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
12	a	a	DET	_	Definite=Def|PronType=Art	17	det	_	_
13	jelenlegi	jelenlegi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	17	amod:att	_	_
14	350	350	NUM	_	Case=Nom|Number=Sing|NumType=Card	15	compound	_	_
15	ezres	ezres	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	17	amod:att	_	_
16	fővárosi	fővárosi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	17	amod:att	_	_
17	járműpark	járműpark	NOUN	_	Case=Nom|Number=Sing	11	nsubj	_	SpaceAfter=No
18	,	,	PUNCT	_	_	11	punct	_	_
19	akkor	akkor	ADV	_	PronType=Dem	31	advmod:tlocy	_	_
20	mindenki	mindenki	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Tot	31	nsubj	_	SpaceAfter=No
21	,	,	PUNCT	_	_	24	punct	_	_
22	legyen	lesz	AUX	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	24	cop	_	_
23	az	az	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	24	nsubj	_	_
24	kormányfő	kormányfő	NOUN	_	Case=Nom|Number=Sing	20	acl	_	_
25	vagy	vagy	CCONJ	_	_	26	cc	_	_
26	főpolgármester	főpolgármester	NOUN	_	Case=Nom|Number=Sing	24	conj	_	SpaceAfter=No
27	,	,	PUNCT	_	_	20	punct	_	_
28	a	a	DET	_	Definite=Def|PronType=Art	30	det	_	_
29	saját	saját	DET	_	Definite=Def|PronType=Prs	30	det	_	_
30	bőrén	bőr	NOUN	_	Case=Sup|Number=Sing|Number[psor]=Sing|Person[psor]=3	31	obl	_	_
31	tapasztalja	tapasztal	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
32	,	,	PUNCT	_	_	39	punct	_	_
33	hogy	hogy	SCONJ	_	_	39	mark	_	_
34	az	az	DET	_	Definite=Def|PronType=Art	36	det	_	_
35	elmúlt	elmúlt	ADJ	_	Case=Nom|Number=Sing|VerbForm=PartPast	36	amod:att	_	_
36	évek	év	NOUN	_	Case=Nom|Number=Plur	38	nmod:att	_	_
37	fejlesztési	fejlesztési	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	38	amod:att	_	_
38	üteme	ütem	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	39	nsubj	_	_
39	megegyezik	meg+egyezik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	31	ccomp:obj	_	_
40	a	a	DET	_	Definite=Def|PronType=Art	43	det	_	_
41	csúcsidőben	csúcsidő	NOUN	_	Case=Ine|Number=Sing	42	obl	_	_
42	araszoló	araszoló	ADJ	_	Case=Nom|Number=Sing|VerbForm=PartPres	43	amod:att	_	_
43	autók	autó	NOUN	_	Case=Nom|Number=Plur	44	nmod:att	_	_
44	sebességével	sebesség	NOUN	_	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	39	obl	_	SpaceAfter=No
45	.	.	PUNCT	_	_	31	punct	_	_

~~~


