---
layout: base
title:  'Statistics of obl in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="fr_sequoia-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_sequoia-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_sequoia-dep-obl-mod.html">obl:mod</a></tt>.

1 nodes (0%) are attached to their parents as `obl`.

1 instances of `obl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `obl`: <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl	color:blue
1	-	-	PUNCT	_	_	16	punct	_	_
2	Michel	Michel	PROPN	_	Gender=Masc|Number=Sing	16	nsubj:pass	_	_
3	Roussin	Roussin	PROPN	_	_	2	flat:name	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	reconnu	reconnaître	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	2	acl	_	_
6	coupable	coupable	ADJ	_	Number=Sing	5	xcomp	_	_
7	de	de	ADP	_	_	8	case	_	_
8	complicité	complicité	NOUN	_	Gender=Fem|Number=Sing	6	obl	_	_
9	et	et	CCONJ	_	_	10	cc	_	_
10	recel	recel	NOUN	_	Gender=Masc|Number=Sing	8	conj	_	_
11	de	de	ADP	_	_	12	case	_	_
12	corruption	corruption	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	5	punct	_	_
14	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	aux:tense	_	_
15	été	être	AUX	_	Tense=Past|VerbForm=Part	16	aux:pass	_	_
16	condamné	condamner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
17	à	à	ADP	_	_	19	case	_	_
18	4	4	NUM	_	NumType=Card	19	nummod	_	_
19	ans	an	NOUN	_	Gender=Masc|Number=Plur	16	obl:arg	_	_
20	de	de	ADP	_	_	21	case	_	_
21	prison	prison	NOUN	_	Gender=Fem|Number=Sing	19	nmod	_	_
22	avec	avec	ADP	_	_	23	case	_	_
23	sursis	sursis	NOUN	_	Gender=Masc|Number=Sing	19	nmod	_	_
24	et	et	CCONJ	_	_	26	cc	_	_
25	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	26	det	_	_
26	amende	amende	NOUN	_	Gender=Fem|Number=Sing	19	conj	_	_
27	de	de	ADP	_	_	29	case	_	_
28	50 000	50 000	NUM	_	_	29	nummod	_	_
29	euros	euro	NOUN	_	Gender=Masc|Number=Plur	26	nmod	_	SpaceAfter=No
30	.	.	PUNCT	_	_	16	punct	_	_

~~~


