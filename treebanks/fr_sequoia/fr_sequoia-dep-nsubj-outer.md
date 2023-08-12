---
layout: base
title:  'Statistics of nsubj:outer in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="fr_sequoia-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="fr_sequoia-dep-nsubj-pass.html">nsubj:pass</a></tt>.

3 nodes (0%) are attached to their parents as `nsubj:outer`.

3 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.33333333333333.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 nsubj:outer	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	problème	problème	NOUN	_	Gender=Masc|Number=Sing	13	nsubj:outer	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
4	que	que	SCONJ	_	_	13	mark	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	législateur	législateur	NOUN	_	Gender=Masc|Number=Sing	13	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	tant	tant	ADV	_	_	9	advmod	_	_
9	national	national	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
10	qu'	que	SCONJ	_	_	11	mark	_	SpaceAfter=No
11	européen	européen	ADJ	_	Gender=Masc|Number=Sing	9	dep	_	SpaceAfter=No
12	,	,	PUNCT	_	_	9	punct	_	_
13	tarde	tarder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	à	à	ADP	_	_	15	mark	_	_
15	adapter	adapter	VERB	_	VerbForm=Inf	13	xcomp	_	Subject=SubjRaising
16	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	pays	pays	NOUN	_	Gender=Masc|Number=Sing	15	obj	_	_
18	légal	légal	ADJ	_	Gender=Masc|Number=Sing	17	amod	_	_
19	à	à	ADP	_	_	21	case	_	_
20	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	pays	pays	NOUN	_	Gender=Masc|Number=Sing	15	obl:arg	_	_
22	réel	réel	ADJ	_	Gender=Masc|Number=Sing	21	amod	_	SpaceAfter=No
23	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:outer	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	premier	premier	ADJ	_	Gender=Masc|Number=Sing|NumType=Ord	6	nsubj:outer	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	qu'	que	SCONJ	_	_	6	mark	_	SpaceAfter=No
5	elle	lui	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
6	doit	devoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	constituer	constituer	VERB	_	VerbForm=Inf	6	xcomp	_	Subject=SubjRaising
8	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	incitation	incitation	NOUN	_	Gender=Fem|Number=Sing	7	obj	_	_
10	et	et	CCONJ	_	_	13	cc	_	_
11	pas	pas	ADV	_	Polarity=Neg	13	advmod	_	_
12	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	obstacle	obstacle	NOUN	_	Gender=Masc|Number=Sing	9	conj	_	_
14	-	-	PUNCT	_	_	17	punct	_	SpaceAfter=No
15	pas	pas	ADV	_	Polarity=Neg	17	advmod	_	_
16	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	obstacle	obstacle	NOUN	_	Gender=Masc|Number=Sing	13	appos	_	SpaceAfter=No
18	,	,	PUNCT	_	_	17	punct	_	_
19	j'	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	20	nsubj	_	SpaceAfter=No
20	insiste	insister	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	17	parataxis:insert	_	SpaceAfter=No
21	-	-	PUNCT	_	_	17	punct	_	SpaceAfter=No
22	,	,	PUNCT	_	_	24	punct	_	_
23	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	24	det	_	_
24	incitation	incitation	NOUN	_	Gender=Fem|Number=Sing	9	conj	_	_
25	pour	pour	ADP	_	_	28	case	_	_
26	tous	tout	ADJ	_	Gender=Masc|Number=Plur	28	amod	_	_
27	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	28	det	_	_
28	pays	pays	NOUN	_	Gender=Masc|Number=Plur	24	nmod	_	_
29	membres	membre	ADJ	_	Gender=Masc|Number=Plur	28	amod	_	_
30	à	à	ADP	_	_	34	case	_	_
31	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	34	det	_	_
32	plus	plus	ADV	_	_	33	advmod	_	_
33	grande	grand	ADJ	_	Gender=Fem|Number=Sing	34	amod	_	_
34	participation	participation	NOUN	_	Gender=Fem|Number=Sing	24	nmod	_	SpaceAfter=No
35	,	,	PUNCT	_	_	37	punct	_	_
36	en	en	ADP	_	_	37	case	_	_
37	profondeur	profondeur	NOUN	_	Gender=Fem|Number=Sing	34	nmod	_	SpaceAfter=No
38	,	,	PUNCT	_	_	41	punct	_	_
39	à	à	ADP	_	_	41	case	_	_
40	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	41	det	_	_
41	procédures	procédure	NOUN	_	Gender=Fem|Number=Plur	34	nmod	_	_
42	européennes	européen	ADJ	_	Gender=Fem|Number=Plur	41	amod	_	SpaceAfter=No
43	.	.	PUNCT	_	_	6	punct	_	_

~~~


