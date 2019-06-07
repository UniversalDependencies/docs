---
layout: base
title:  'Statistics of csubj:pass in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 27 csubj:pass	color:blue
1	Si	si	SCONJ	_	_	3	mark	_	_
2	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
3	assume	assumer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	advcl	_	_
4	que	que	SCONJ	_	_	8	mark	_	_
5	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	dernier	dernier	NOUN	_	Gender=Masc|Number=Sing	8	nsubj	_	_
7	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	agi	agir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	ccomp	_	_
9	comme	comme	ADP	_	_	10	case	_	_
10	particulier	particulier	NOUN	_	Gender=Masc|Number=Sing	8	obl:mod	_	_
11	et	et	CCONJ	_	_	14	cc	_	_
12	non	non	ADV	_	_	14	advmod	_	_
13	comme	comme	ADP	_	_	14	case	_	_
14	ministre	ministre	NOUN	_	Gender=Masc|Number=Sing	10	conj	_	SpaceAfter=No
15	,	,	PUNCT	_	_	3	punct	_	_
16	jamais	jamais	ADV	_	Polarity=Neg	20	advmod	_	_
17	n'	ne	ADV	_	Polarity=Neg	20	advmod	_	SpaceAfter=No
18	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	_
19	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	20	aux:pass	_	_
20	recherché	rechercher	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
21	que	que	SCONJ	_	_	27	mark	_	_
22	d'	de	ADP	_	_	24	case	_	SpaceAfter=No
23	autres	autre	ADJ	_	Gender=Masc|Number=Plur	24	amod	_	_
24	particuliers	particulier	NOUN	_	Gender=Masc|Number=Plur	27	nsubj	_	_
25	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	27	aux	_	_
26	aussi	aussi	ADV	_	_	27	advmod	_	_
27	plaidé	plaider	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	20	csubj:pass	_	_
28	pour	pour	ADP	_	_	32	mark	_	_
29	que	que	SCONJ	_	_	32	mark	_	_
30	leur	lui	PRON	_	Number=Plur|Person=3|PronType=Prs	32	iobj	_	_
31	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3	32	nsubj	_	_
32	livre	livrer	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	advcl	_	_
33	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	34	det	_	_
34	station	station	NOUN	_	Gender=Fem|Number=Sing	32	obj	_	_
35	émettrice	émetteur	ADJ	_	Gender=Fem|Number=Sing	34	amod	_	SpaceAfter=No
36	.	.	PUNCT	_	_	20	punct	_	_

~~~


