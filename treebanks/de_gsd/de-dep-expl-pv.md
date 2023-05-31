---
layout: base
title:  'Statistics of expl:pv in UD_German'
udver: '2'
---

## Treebank Statistics: UD_German: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="de-dep-expl.html">expl</a></tt>.

208 nodes (0%) are attached to their parents as `expl:pv`.

147 instances of `expl:pv` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.71634615384615.

The following 1 pairs of parts of speech are connected with `expl:pv`: <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (208; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 expl:pv	color:blue
1	Hier	hier	ADV	ADV	_	9	advmod	_	_
2	kann	können	AUX	VMFIN	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
3	man	man	PRON	PIS	Case=Nom|PronType=Ind	9	nsubj	_	_
4	sich	er|es|sie	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	9	expl:pv	_	_
5	in	in	ADP	APPR	_	7	case	_	_
6	einsamer	einsam	ADJ	ADJA	Degree=Cmp,Pos	7	amod	_	_
7	Natur	Natur	NOUN	NN	_	9	obl	_	_
8	wunderbar	wunderbar	ADV	ADJD	_	9	advmod	_	_
9	erholen	erholen	VERB	VVINF	VerbForm=Inf	0	root	_	SpaceAfter=No
10	.	.	PUNCT	$.	_	9	punct	_	_

~~~


