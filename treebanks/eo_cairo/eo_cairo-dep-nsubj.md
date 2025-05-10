---
layout: base
title:  'Statistics of nsubj in UD_Esperanto-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Cairo: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="eo_cairo-dep-nsubj-pass.html">nsubj:pass</a></tt>.

22 nodes (12%) are attached to their parents as `nsubj`.

22 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.72727272727273.

The following 6 pairs of parts of speech are connected with `nsubj`: <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-PRON.html">PRON</a></tt> (15; 68% instances), <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="eo_cairo-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	pensas	pensi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	ke	ke	SCONJ	_	_	5	mark	_	_
5	pluvas	pluvi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	_	SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	La	la	DET	_	_	2	det	_	_
2	knabino	knabino	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
3	skribis	skribi	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	leteron	letero	NOUN	_	Case=Acc|Number=Sing	3	obj	_	_
5	al	al	ADP	_	_	7	case	_	_
6	sia	si	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	7	nmod:poss	_	_
7	amiko	amimo	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Maria	Maria	PROPN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	gajnis	gajni	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	bronzon	bronzo	NOUN	_	Case=Acc|Number=Sing	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	Petro	Petro	PROPN	_	Case=Nom|Number=Sing	2	conj	_	_
6	arĝenton	arĝento	NOUN	_	Case=Acc|Number=Sing	5	orphan	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	kaj	kaj	CCONJ	_	_	9	cc	_	_
9	Jane	Jane	PROPN	_	Case=Nom|Number=Sing	2	conj	_	_
10	oron	oro	NOUN	_	Case=Acc|Number=Sing	9	orphan	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


