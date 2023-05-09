---
layout: base
title:  'Statistics of nsubj:outer in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="de_gsd-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="de_gsd-dep-nsubj-pass.html">nsubj:pass</a></tt>.

3 nodes (0%) are attached to their parents as `nsubj:outer`.

3 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.33333333333333.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (2; 67% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:outer	color:blue
1	Das	der	PRON	PDS	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem,Rel	5	nsubj:outer	_	_
2	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	was	was	PRON	PIAT	Gender=Neut|Number=Sing|PronType=Int,Rel	5	obj	_	_
4	Hunde	Hund	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	5	nsubj	_	_
5	verstehen	verstehen	VERB	VVINF	VerbForm=Inf	0	root	_	SpaceAfter=No
6	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj:outer	color:blue
1	Spätere	spät	ADJ	ADJA	Case=Nom|Degree=Cmp|Gender=Masc|Number=Plur	3	amod	_	_
2	weitere	weit	ADJ	ADJA	Case=Nom|Degree=Cmp|Gender=Neut|Number=Plur	3	amod	_	_
3	Dramen	Drama	NOUN	NN	Case=Nom|Gender=Neut|Number=Plur	6	nsubj:outer	_	_
4	waren	sein	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
5	Achilles	Achilles	PROPN	NE	Foreign=Yes	6	nsubj	_	Lang=en|NamedEntity=Yes
6	Had	have	VERB	NE	Foreign=Yes	0	root	_	Lang=en|NamedEntity=Yes
7	a	a	DET	NE	Foreign=Yes	8	det	_	Lang=en|NamedEntity=Yes
8	Heel	heel	NOUN	NE	Foreign=Yes	6	obj	_	Lang=en|NamedEntity=Yes
9	(	(	PUNCT	$(	_	10	punct	_	SpaceAfter=No
10	1924	1924	NUM	CARD	NumType=Card	6	appos	_	SpaceAfter=No
11	)	)	PUNCT	$(	_	10	punct	_	SpaceAfter=No
12	,	,	PUNCT	$,	_	13	punct	_	_
13	Lady	Lady	PROPN	NE	Case=Nom|Gender=Fem|Number=Sing	6	conj	_	NamedEntity=Yes
14	of	of	PROPN	NE	Foreign=Yes	13	nmod	_	NamedEntity=Yes
15	the	the	DET	NE	Definite=Def|Foreign=Yes|PronType=Art	16	det	_	Lang=en|NamedEntity=Yes
16	Rose	Rose	PROPN	NE	Foreign=Yes	14	appos	_	NamedEntity=Yes
17	(	(	PUNCT	$(	_	18	punct	_	SpaceAfter=No
18	1925	1925	NUM	CARD	NumType=Card	13	appos	_	SpaceAfter=No
19	)	)	PUNCT	$(	_	18	punct	_	SpaceAfter=No
20	,	,	PUNCT	$,	_	21	punct	_	_
21	Service	Service	PROPN	NE	Foreign=Yes	6	conj	_	NamedEntity=Yes
22	for	for	PROPN	NE	Foreign=Yes	21	flat	_	NamedEntity=Yes
23	Two	Two	PROPN	NE	Foreign=Yes	21	flat	_	NamedEntity=Yes
24	(	(	PUNCT	$(	_	25	punct	_	SpaceAfter=No
25	1926	1926	NUM	CARD	NumType=Card	21	appos	_	SpaceAfter=No
26	)	)	PUNCT	$(	_	25	punct	_	_
27	sowie	sowie	CCONJ	KON	_	30	cc	_	_
28	The	the	DET	FM	Definite=Def|Foreign=Yes|PronType=Art	30	det	_	Lang=en|NamedEntity=Yes
29	Criminal	Criminal	PROPN	FM	Foreign=Yes	30	amod	_	NamedEntity=Yes
30	Code	Code	PROPN	NE	Foreign=Yes	6	conj	_	NamedEntity=Yes|SpaceAfter=No
31	,	,	PUNCT	$,	_	33	punct	_	_
32	Broken	Broken	PROPN	NE	Case=Gen|Gender=Masc|Number=Sing	33	amod	_	NamedEntity=Yes
33	Dishes	Dishes	PROPN	NE	Case=Gen|Gender=Masc|Number=Sing	30	conj	_	NamedEntity=Yes
34	und	und	CCONJ	KON	_	35	cc	_	_
35	Crossroads	Crossroads	PROPN	NE	Case=Gen|Gender=Masc|Number=Sing	30	conj	_	NamedEntity=Yes|SpaceAfter=No
36	,	,	PUNCT	$,	_	41	punct	_	_
37	die	der	PRON	PRELS	Case=Nom|Number=Plur|PronType=Dem,Rel	41	nsubj	_	_
38	alle	alle	DET	PIAT	Case=Acc|Gender=Masc|Number=Plur|PronType=Tot	39	det	_	_
39	drei	drei	NUM	CARD	NumType=Card	37	appos	_	_
40	1929	1929	NUM	CARD	NumType=Card	41	obl	_	_
41	erschienen	erscheinen	VERB	VVPP	VerbForm=Part	30	acl	_	SpaceAfter=No
42	.	.	PUNCT	$.	_	6	punct	_	_

~~~


