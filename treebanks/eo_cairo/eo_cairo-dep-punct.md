---
layout: base
title:  'Statistics of punct in UD_Esperanto-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Cairo: Relations: `punct`

This relation is universal.

28 nodes (16%) are attached to their parents as `punct`.

26 instances of `punct` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.07142857142857.

The following 4 pairs of parts of speech are connected with `punct`: <tt><a href="eo_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_cairo-pos-PUNCT.html">PUNCT</a></tt> (20; 71% instances), <tt><a href="eo_cairo-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eo_cairo-pos-PUNCT.html">PUNCT</a></tt> (5; 18% instances), <tt><a href="eo_cairo-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_cairo-pos-PUNCT.html">PUNCT</a></tt> (2; 7% instances), <tt><a href="eo_cairo-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_cairo-pos-PUNCT.html">PUNCT</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 punct	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 punct	color:blue
1	Sam	Sam	PROPN	_	_	3	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	malfermu	malfermi	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	_
4	la	la	DET	_	_	5	det	_	_
5	fenestron	fenestro	NOUN	_	Case=Acc|Number=Sing	3	obj	_	SpaceAfter=No
6	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 punct	color:blue
1	Ĉu	ĉu	PART	_	_	7	advmod	_	_
2	Iguazu	Iguazu	PROPN	_	Case=Nom|Number=Sing	7	nsubj	_	_
3	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	cop	_	_
4	granda	granda	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
5	aŭ	aŭ	CCONJ	_	_	6	cc	_	_
6	malgranda	malgranda	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	conj	_	_
7	lando	lando	NOUN	_	_	0	root	_	SpaceAfter=No
8	?	?	PUNCT	_	_	7	punct	_	_

~~~


