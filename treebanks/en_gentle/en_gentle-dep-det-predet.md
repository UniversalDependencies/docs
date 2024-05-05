---
layout: base
title:  'Statistics of det:predet in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-det.html">det</a></tt>.

15 nodes (0%) are attached to their parents as `det:predet`.

15 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.6.

The following 1 pairs of parts of speech are connected with `det:predet`: <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-DET.html">DET</a></tt> (15; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 det:predet	color:blue
1	And	and	CCONJ	CC	_	4	cc	4:cc	Discourse=elaboration-additional:202->198:3:_
2	his	his	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	Entity=(134-object-new-cf2-2-sgl(107-animal-giv:act-cf1*-1-ana)
3	eyes	eye	NOUN	NNS	Number=Plur	4	nsubj	4:nsubj	Entity=134)|MSeg=eye-s
4	have	have	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	all	all	DET	RB	Degree=Pos|PronType=Tot	7	det:predet	7:det:predet	Entity=(135-abstract-new-cf3-3-sgl
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	7:det	_
7	seeming	seeming	NOUN	NN	Number=Sing	4	obj	4:obj	MSeg=seem-ing
8	of	of	ADP	IN	_	10	case	10:case	_
9	a	a	DET	DT	Definite=Ind|PronType=Art	10	det	10:det	Entity=(136-person-new-cf4-2-sgl
10	demon	demon	NOUN	NN	Number=Sing	7	nmod	7:nmod:of|14:nsubj	_
11	's	's	PART	POS	_	10	case	10:case	_
12	that	that	PRON	WDT	PronType=Rel	14	nsubj	10:ref	Discourse=elaboration-attribute:203->202:0:_
13	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux	14:aux	_
14	dreaming	dream	VERB	VBG	Tense=Pres|VerbForm=Part	10	acl:relcl	10:acl:relcl	Entity=136)135)|MSeg=dream-ing

~~~


