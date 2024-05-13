---
layout: base
title:  'Statistics of obj:lvc in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `obj:lvc`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-obj.html">obj</a></tt>.
There are also 1 other language-specific subtypes of `obj`: <tt><a href="fr_sequoia-dep-obj-agent.html">obj:agent</a></tt>.

2 nodes (0%) are attached to their parents as `obj:lvc`.

2 instances of `obj:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 1 pairs of parts of speech are connected with `obj:lvc`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 39 40 obj:lvc	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	3	nsubj:pass	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	connu	connaître	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	_
5	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	malheurs	malheur	NOUN	_	Gender=Masc|Number=Plur	8	nsubj	_	_
7	ne	ne	ADV	_	Polarity=Neg	8	advmod	_	_
8	surviennent	survenir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
9	jamais	jamais	ADV	_	Polarity=Neg	8	advmod	_	_
10	seuls	seul	ADJ	_	Gender=Masc|Number=Plur	8	advcl	_	_
11	:	:	PUNCT	_	_	39	punct	_	_
12	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
13	important	important	ADJ	_	Gender=Masc|Number=Sing	14	amod	_	_
14	groupe	groupe	NOUN	_	Gender=Masc|Number=Sing	39	nsubj	_	_
15	canadien	canadien	ADJ	_	Gender=Masc|Number=Sing	14	amod	_	_
16	qui	qui	PRON	_	PronType=Rel	18	nsubj	_	_
17	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	18	obj	_	_
18	disait	dire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	14	acl:relcl	_	_
19	intéressé	intéresser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	18	ccomp	_	_
20	par	par	ADP	_	_	22	case	_	_
21	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	distribution	distribution	NOUN	_	Gender=Fem|Number=Sing	19	obl:agent	_	_
23	en	en	ADP	_	_	24	case	_	_
24	Europe	Europe	PROPN	_	Gender=Fem|Number=Sing	22	nmod	_	_
25	de	de	ADP	_	_	27	case	_	_
26	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	27	det	_	_
27	plaques	plaque	NOUN	_	Gender=Fem|Number=Plur	22	nmod	_	_
28	numériques	numérique	ADJ	_	Number=Plur	27	amod	_	_
29	mises	mettre	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	27	acl	_	_
30	à	à	ADP	_	_	32	case	_	_
31	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	32	det	_	_
32	point	point	NOUN	_	Gender=Masc|Number=Sing	29	obl:arg	_	_
33	à	à	ADP	_	_	34	case	_	_
34	Baume	Baume	PROPN	_	_	29	obl:mod	_	_
35	n'	ne	ADV	_	Polarity=Neg	39	advmod	_	SpaceAfter=No
36	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	39	aux:tense	_	_
37	soudainement	soudainement	ADV	_	_	39	advmod	_	_
38	plus	plus	ADV	_	Polarity=Neg	39	advmod	_	_
39	donné	donner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	8	parataxis	_	_
40	signe	signe	NOUN	_	Gender=Masc|Number=Sing	39	obj:lvc	_	_
41	de	de	ADP	_	_	42	case	_	_
42	vie	vie	NOUN	_	Gender=Fem|Number=Sing	40	nmod	_	SpaceAfter=No
43	.	.	PUNCT	_	_	3	punct	_	_

~~~


