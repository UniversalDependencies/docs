---
layout: base
title:  'Statistics of nsubj:own in UD_Marathi-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Marathi-UFAL: Relations: `nsubj:own`

This relation is a language-specific subtype of <tt><a href="mr_ufal-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="mr_ufal-dep-nsubj-pass.html">nsubj:pass</a></tt>.

4 nodes (0%) are attached to their parents as `nsubj:own`.

4 instances of `nsubj:own` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75.

The following 2 pairs of parts of speech are connected with `nsubj:own`: <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-PROPN.html">PROPN</a></tt> (3; 75% instances), <tt><a href="mr_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mr_ufal-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:own	color:blue
1	_	भीम	PROPN	_	Case=Obl|Gender=Masc|Number=Sing	4	nsubj:own	_	_
2	_	कडे	ADP	_	_	1	case	_	_
3	असलेली	असणे	AUX	_	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|VerbForm=Part	4	cop	_	_
4	जमीन	जमीन	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
5	वास्तविक	वास्तविक	ADV	_	_	4	advmod	_	_
6	_	मी	PRON	_	Clusivity=Incl|Number=Plur|Person=1	4	nmod:poss	_	_
7	_	चा	ADP	_	Gender=Fem|Number=Sing	6	case	_	_
8	आहे	असणे	AUX	_	Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 nsubj:own	color:blue
1	नाही	नाही	INTJ	_	_	5	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	_
3	_	मेरी	PROPN	_	Case=Obl|Gender=Fem|Number=Sing	5	nsubj:own	_	_
4	_	कडे	ADP	_	_	3	case	_	_
5	कुत्रा	कुत्रा	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
6	नाही	नाही	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	5	aux	_	_
7	आहे	असणे	AUX	_	Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	SpaceAfter=No
8	,	,	PUNCT	_	_	5	punct	_	_
9	_	ती	PRON	_	Case=Obl|Distance=Dist|Gender=Fem|Number=Sing|Person=3	12	nsubj:own	_	_
10	_	च्या	PART	_	_	9	case	_	_
11	_	कडे	ADP	_	_	9	case	_	_
12	मांजर	मांजर	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	5	parataxis	_	_
13	आहे	असणे	AUX	_	Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	SpaceAfter=No
14	.	.	PUNCT	_	_	12	punct	_	_

~~~


