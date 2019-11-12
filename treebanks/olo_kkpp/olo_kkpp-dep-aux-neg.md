---
layout: base
title:  'Statistics of aux:neg in UD_Livvi-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Livvi-KKPP: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="olo_kkpp-dep-aux.html">aux</a></tt>.

2 nodes (0%) are attached to their parents as `aux:neg`.

1 instances of `aux:neg` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `aux:neg`: <tt><a href="olo_kkpp-pos-PRON.html">PRON</a></tt>-<tt><a href="olo_kkpp-pos-AUX.html">AUX</a></tt> (1; 50% instances), <tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="olo_kkpp-pos-AUX.html">AUX</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux:neg	color:blue
1	Heil	Hyö	PRON	PRON	Case=All|Number=Plur|Person=3|PronType=Prs	0	root	_	_
2	ei	ei	AUX	AUX	Mood=Ind|Number=Sing|Person=3	1	aux:neg	_	_
3	ole	olla	AUX	AUX	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop:own	_	_
4	ovvostustu	ovvostus	NOUN	NOUN	Case=Par|Number=Sing	1	nsubj:cop	_	_
5	sit	sit	PRON	PRON	Case=Par|Number=Sing	4	nmod	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	9	punct	_	_
7	ken	ken	PRON	PRON	Case=Nom|Number=Sing	9	nsubj	_	PronType=Interr
8	sen	se	PRON	PRON	Case=Gen|Number=Sing|PronType=Dem	9	obj	_	_
9	kirjutti	kirjuttua	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux:neg	color:blue
1	Ei	ei	AUX	AUX	Mood=Ind|Person=0|Tense=Pres	3	aux:neg	_	_
2	voidu	voija	AUX	AUX	Connegative=Yes|Mood=Ind|Number=Plur|Tense=Past|Voice=Pass	3	aux	_	_
3	vallita	vallita	VERB	VERB	VerbForm=Inf	0	root	_	_
4	Peter	Peter	PROPN	PROPN	Case=Nom|Number=Sing	3	obj	_	_
5	Smithua	Smith	PROPN	PROPN	Case=Par|Number=Sing	4	flat:name	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	eigo	ja#ei	CCONJ	CCONJ	Number=Plur|Person=3|Polarity=Neg	8	cc	_	_
8	Mary	Mary	PROPN	PROPN	Case=Nom|Number=Sing	5	conj	_	_
9	Brownii	Brown	PROPN	PROPN	Case=Par|Number=Sing	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


