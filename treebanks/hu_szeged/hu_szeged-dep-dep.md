---
layout: base
title:  'Statistics of dep in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `dep`

This relation is universal.

1 nodes (0%) are attached to their parents as `dep`.

1 instances of `dep` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 12.

The following 1 pairs of parts of speech are connected with `dep`: <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 24 dep	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	lemondás	lemondás	NOUN	_	Case=Nom|Number=Sing	4	nmod:att	_	_
3	közvetlen	közvetlen	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	amod:att	_	_
4	előzménye	előzmény	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	nsubj	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	Napi	Napi	PROPN	_	Case=Nom|Number=Sing	9	nmod:att	_	_
7	Magyarország	Magyarország	PROPN	_	Case=Nom|Number=Sing	6	flat:name	_	_
8	hétfői	hétfői	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	9	amod:att	_	_
9	cikke	cikk	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	SpaceAfter=No
10	,	,	PUNCT	_	_	37	punct	_	_
11	amelyben	amely	PRON	_	Case=Ine|Number=Sing|Person=3|PronType=Rel	37	obl	_	_
12	az	az	DET	_	Definite=Def|PronType=Art	13	det	_	_
13	APEH-elnök	APEH-elnök	NOUN	_	Case=Nom|Number=Sing	37	nsubj	_	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	közhivatalnoktól	közhivatalnok	NOUN	_	Case=Abl|Number=Sing	16	obl	_	_
16	szokatlan	szokatlan	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	17	amod:att	_	_
17	módon	mód	NOUN	_	Case=Sup|Number=Sing	37	obl	_	SpaceAfter=No
18	,	,	PUNCT	_	_	17	punct	_	_
19	"	"	PUNCT	_	_	24	punct	_	SpaceAfter=No
20	Az	az	DET	_	Definite=Def|PronType=Art	23	det	_	_
21	elmúlt	elmúlt	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|VerbForm=PartPast	23	amod:att	_	_
22	három	három	NUM	_	Case=Nom|Number=Sing|NumType=Card	23	amod:att	_	_
23	hónapban	hónap	NOUN	_	Case=Ine|Number=Sing	24	obl	_	_
24	megöltétek	megöl	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	36	dep	_	_
25	az	az	DET	_	Definite=Def|PronType=Art	26	det	_	_
26	apámat	apa	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=1	24	obj	_	SpaceAfter=No
27	,	,	PUNCT	_	_	29	punct	_	_
28	az	az	DET	_	Definite=Def|PronType=Art	29	det	_	_
29	apósomat	após	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=1	26	conj	_	SpaceAfter=No
30	,	,	PUNCT	_	_	33	punct	_	_
31	az	az	DET	_	Definite=Def|PronType=Art	32	det	_	_
32	Úristen	Úristen	PROPN	_	Case=Nom|Number=Sing	33	nsubj	_	_
33	irgalmazzon	irgalmaz	VERB	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	24	conj	_	_
34	néktek	néki	PRON	_	Case=Dat|Number=Plur|Person=2|PronType=Prs	33	iobj	_	SpaceAfter=No
35	"	"	PUNCT	_	_	24	punct	_	_
36	szavakat	szó	NOUN	_	Case=Acc|Number=Plur	37	obj	_	_
37	intézte	intéz	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	acl	_	_
38	mindazokhoz	mindaz	PRON	_	Case=All|Number=Plur|Person=3|PronType=Dem	37	obl	_	SpaceAfter=No
39	,	,	PUNCT	_	_	42	punct	_	_
40	akik	aki	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Rel	42	nsubj	_	_
41	szerinte	szerinte	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	42	nmod	_	ToDo=nmod
42	okozói	okozó	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	38	nmod:att	_	_
43	voltak	van	AUX	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	42	cop	_	_
44	a	a	DET	_	Definite=Def|PronType=Art	46	det	_	_
45	családi	családi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	46	amod:att	_	_
46	tragédiáknak	tragédia	NOUN	_	Case=Gen|Number=Plur	42	nmod:att	_	SpaceAfter=No
47	.	.	PUNCT	_	_	9	punct	_	_

~~~


