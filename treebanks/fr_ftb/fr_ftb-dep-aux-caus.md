---
layout: base
title:  'Statistics of aux:caus in UD_French-FTB'
udver: '2'
---

## Treebank Statistics: UD_French-FTB: Relations: `aux:caus`

This relation is a language-specific subtype of <tt><a href="fr_ftb-dep-aux.html">aux</a></tt>.
There are also 1 other language-specific subtypes of `aux`: <tt><a href="fr_ftb-dep-aux-pass.html">aux:pass</a></tt>.

259 nodes (0%) are attached to their parents as `aux:caus`.

259 instances of `aux:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16988416988417.

The following 1 pairs of parts of speech are connected with `aux:caus`: <tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_ftb-pos-VERB.html">VERB</a></tt> (259; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:caus	color:blue
1	Tout	tout	ADV	_	_	3	advmod	_	_
2	_	_	ADP	_	_	3	mark	_	_
3	_	_	VERB	_	Tense=Pres|VerbForm=Part	14	advcl	_	_
4	_	_	ADP	_	_	6	mark	_	_
5	_	_	VERB	_	VerbForm=Inf	6	aux:caus	_	_
6	_	_	VERB	_	VerbForm=Inf	3	xcomp	_	_
7	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	_	_	NOUN	_	Gender=Fem|Number=Sing	6	obj	_	_
9	_	_	ADP	_	_	10	mark	_	_
10	_	_	VERB	_	VerbForm=Inf	6	advcl	_	SpaceAfter=No
11	_	_	PUNCT	_	_	14	punct	_	_
12	_	_	PROPN	_	Number=Sing	14	nsubj	_	_
13	_	_	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	_
14	_	_	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
15	_	_	VERB	_	VerbForm=Part	14	xcomp	_	_
16	_	_	ADP	_	_	17	case	_	_
17	_	_	NOUN	_	Gender=Fem|Number=Sing	15	obl	_	_
18	_	_	CCONJ	_	_	20	cc	_	_
19	_	_	PROPN	_	Number=Sing	20	nsubj	_	_
20	_	_	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	conj	_	_
21	_	_	ADP	_	_	20	advmod	_	_
22	_	_	NOUN	_	_	21	fixed	_	_
23	_	_	ADP	_	_	25	case	_	_
24	_	_	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	_	_	NOUN	_	Gender=Masc|Number=Sing	20	obl	_	_
26	_	_	ADP	_	_	28	case	_	_
27	_	_	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	28	det	_	_
28	_	_	NOUN	_	Gender=Fem|Number=Sing	25	nmod	_	SpaceAfter=No
29	_	_	PUNCT	_	_	14	punct	_	_

~~~


