---
layout: base
title:  'Statistics of nsubj:outer in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="it_parlamint-dep-nsubj.html">nsubj</a></tt>.

6 nodes (0%) are attached to their parents as `nsubj:outer`.

6 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.16666666666667.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (5; 83% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:outer	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	punto	punto	NOUN	S	Gender=Masc|Number=Sing	8	nsubj:outer	_	_
3	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
4	che	che	SCONJ	CS	_	8	mark	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Paese	paese	NOUN	S	Gender=Masc|Number=Sing	8	nsubj	_	_
7	oggi	oggi	ADV	B	_	8	advmod	_	_
8	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	bisogno	bisogno	NOUN	S	Gender=Masc|Number=Sing	8	obj	_	_
10	di	di	ADP	E	_	11	case	_	_
11	qualcuno	qualcuno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	9	nmod	_	_
12	che	che	PRON	PR	PronType=Rel	13	nsubj	_	_
13	decida	decidere	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	acl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 3 nsubj:outer	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
2	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	3	det	_	_
3	problema	problema	NOUN	S	Gender=Masc|Number=Sing	15	nsubj:outer	_	_
4	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
5	che	che	SCONJ	CS	_	15	mark	_	_
6	quella	quello	PRON	PD	Gender=Fem|Number=Sing|PronType=Dem	15	nsubj	_	_
7	che	che	PRON	PR	PronType=Rel	9	obj	_	_
8	stiamo	stare	AUX	VA	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	attraversando	attraversare	VERB	V	VerbForm=Ger	6	acl	_	_
10	oggi	oggi	ADV	B	_	9	advmod	_	_
11	non	non	ADV	BN	PronType=Neg	15	advmod	_	_
12	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
13	affatto	affatto	ADV	B	_	15	advmod	_	_
14	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	stagione	stagione	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
16	ordinaria	ordinario	ADJ	A	Gender=Fem|Number=Sing	15	amod	_	_
17	e	e	CCONJ	CC	_	36	cc	_	SpaceAfter=No
18	,	,	PUNCT	FF	_	19	punct	_	_
19	pertanto	pertanto	ADV	B	_	36	advmod	_	SpaceAfter=No
20	,	,	PUNCT	FF	_	19	punct	_	_
21	ogni	ogni	DET	DI	Number=Sing|PronType=Ind	22	det	_	_
22	atteggiamento	atteggiamento	NOUN	S	Gender=Masc|Number=Sing	36	nsubj	_	_
23	ordinario	ordinario	ADJ	A	Gender=Masc|Number=Sing	22	amod	_	SpaceAfter=No
24	,	,	PUNCT	FF	_	27	punct	_	_
25	ogni	ogni	DET	DI	Number=Sing|PronType=Ind	27	det	_	_
26	consueta	consueto	ADJ	A	Gender=Fem|Number=Sing	27	amod	_	_
27	negligenza	negligenza	NOUN	S	Gender=Fem|Number=Sing	22	conj	_	_
28	e	e	CCONJ	CC	_	30	cc	_	_
29	ogni	ogni	DET	DI	Number=Sing|PronType=Ind	30	det	_	_
30	comportamento	comportamento	NOUN	S	Gender=Masc|Number=Sing	22	conj	_	_
31	sperimentato	sperimentare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	30	acl	_	_
32	in	in	ADP	E	_	35	case	_	_
33	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	35	det	_	_
34	ordinaria	ordinario	ADJ	A	Gender=Fem|Number=Sing	35	amod	_	_
35	amministrazione	amministrazione	NOUN	S	Gender=Fem|Number=Sing	31	obl	_	_
36	risultano	risultare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	15	conj	_	_
37	oggi	oggi	ADV	B	_	36	advmod	_	_
38	inadeguati	inadeguato	ADJ	A	Gender=Masc|Number=Plur	36	xcomp	_	_
39	e	e	CCONJ	CC	_	40	cc	_	_
40	insufficienti	insufficiente	ADJ	A	Number=Plur	38	conj	_	SpaceAfter=No
41	.	.	PUNCT	FS	_	15	punct	_	_

~~~


