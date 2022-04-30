---
layout: base
title:  'Statistics of flat in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="pt_bosque-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="pt_bosque-dep-flat-name.html">flat:name</a></tt>.

468 nodes (0%) are attached to their parents as `flat`.

468 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12393162393162.

The following 8 pairs of parts of speech are connected with `flat`: <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (451; 96% instances), <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_bosque-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_bosque-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	«	«	PUNCT	_	_	6	punct	_	SpaceAfter=No
2	Onze	onze	NUM	_	NumType=Card	6	nsubj	_	_
3	milhões	milhão	NUM	_	NumType=Card	2	flat	_	_
4	de	de	ADP	_	_	5	case	_	_
5	aposentados	aposentado	NOUN	_	Gender=Masc|Number=Plur	2	nmod	_	_
6	ganham	ganhar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	mínimo	mínimo	NOUN	_	Gender=Masc|Number=Sing	6	obj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Trinta	trinta	NUM	_	ExtPos=NUM|NumType=Card	4	nummod	_	_
2	e	e	CCONJ	_	_	1	flat	_	_
3	sete	sete	NUM	_	NumType=Card	1	flat	_	_
4	anos	ano	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 flat	color:blue
1	Alguns	algum	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	2	nsubj	_	_
2	conseguiram	conseguir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	descer	descer	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	através	através	ADV	_	_	3	advmod	_	_
5	de	de	ADP	_	_	7	case	_	_
6	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	linhas	linha	NOUN	_	Gender=Fem|Number=Plur	4	obl	_	_
8	de	de	ADP	_	_	10	case	_	_
9	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Exército	exército	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
11	;	;	PUNCT	_	_	2	punct	_	_
12	outros	outro	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	14	nsubj:pass	_	_
13	foram	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	14	aux:pass	_	_
14	escoltados	escoltar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	2	parataxis	_	_
15	por	por	ADP	_	_	16	case	_	_
16	Monsenhor	Monsenhor	PROPN	_	Gender=Masc|Number=Sing	14	obl:agent	_	_
17	Pérez	Pérez	PROPN	_	Gender=Masc|Number=Sing	16	flat	_	_
18	Serantes	Serantes	PROPN	_	Gender=Masc|Number=Sing	16	flat	_	_
19	[	[	PUNCT	_	_	20	punct	_	_
20	arcebispo	arcebispo	NOUN	_	Gender=Masc|Number=Sing	16	appos	_	_
21	de	de	ADP	_	_	22	case	_	_
22	Santiago	Santiago	PROPN	_	Gender=Masc|Number=Sing	20	nmod	_	_
23	de	de	ADP	_	_	24	case	_	_
24	Cuba	Cuba	PROPN	_	Gender=Fem|Number=Sing	22	nmod	_	_
25	]	]	PUNCT	_	_	16	punct	_	_
26	a	a	SCONJ	_	_	30	mark	_	_
27	fim	fim	NOUN	_	Gender=Masc|Number=Sing	26	fixed	_	_
28	de	de	ADP	_	_	26	fixed	_	_
29	se	se	PRON	_	Person=3|PronType=Prs|Reflex=Yes	30	obj	_	_
30	renderem	render	VERB	_	Number=Plur|Person=3|Tense=Pres|VerbForm=Inf	14	advcl	_	SpaceAfter=No
31	.	.	PUNCT	_	_	2	punct	_	_

~~~


