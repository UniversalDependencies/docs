---
layout: base
title:  'Statistics of iobj in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `iobj`

This relation is universal.

6 nodes (0%) are attached to their parents as `iobj`.

3 instances of `iobj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-PRON.html">PRON</a></tt> (4; 67% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt> (2; 33% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	omnium	omnis	DET	C1|grn1|casK|gen3	Case=Gen|Gender=Neut|InflClass=IndEurI|Number=Plur|PronType=Tot	2	nmod	_	_
2	artifex	artifex	NOUN	C1|grn1|casA|gen1	Case=Nom|Compound=Yes|Gender=Masc|InflClass=IndEurX|Number=Sing	3	nsubj	_	_
3	docuit	doceo	VERB	K3|modA|tem4|gen6	Aspect=Perf|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Perfectum
4	me	ego	PRON	F1|grn1|casD|gen1	Case=Acc|InflClass=LatAnom|Number=Sing|Person=1|PronType=Prs	3	iobj	_	_
5	sapientiam	sapientia	NOUN	A1|grn1|casD|gen2|vgr1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	3	obj	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 iobj	color:blue
1	et	et	CCONJ	O4	_	3	cc	_	_
2	in	in	ADP	S4	_	3	case	_	_
3	psalmo	psalmus	NOUN	B1|grn1|casF|gen1	Case=Abl|Gender=Masc|InflClass=IndEurO|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	6	punct	_	_
5	qui	qui	PRON	F1|grn1|casA|gen1	Case=Nom|Gender=Masc|InflClass=LatPron|Number=Sing|PronType=Rel	6	nsubj	_	_
6	docet	doceo	VERB	K3|modA|tem1|gen6	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
7	hominem	homo	NOUN	C1|grn1|casD|gen1	Case=Acc|Gender=Masc|InflClass=IndEurX|Number=Sing	6	iobj	_	_
8	scientiam	scientia	NOUN	A1|grn1|casD|gen2|vgr1	Case=Acc|Gender=Fem|InflClass=IndEurA|Number=Sing	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


