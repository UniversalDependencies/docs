---
layout: base
title:  'Statistics of nmod:poss in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="yrl_complin-dep-nmod.html">nmod</a></tt>.

133 nodes (6%) are attached to their parents as `nmod:poss`.

128 instances of `nmod:poss` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.00751879699248.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (94; 71% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (33; 25% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt> (6; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Ayuíri	yuíri	VERB	V	Number=Sing|Person=1|VerbForm=Fin	0	root	_	_
2	putari	putari	AUX	V	VerbForm=Inf	1	aux	_	_
3	se	se	PRON	PRON2	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod:poss	_	TokenRange=14:16
4	retama	tetama	NOUN	N	Number=Sing|Rel=Cont	1	obl	_	TokenRange=17:23
5	kití	kití	ADP	ADP	_	4	case	_	SpaceAfter=No|TokenRange=24:28
6	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=28:29

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod:poss	color:blue
1	Ixé	ixé	PRON	PRON	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	TokenRange=0:3
2	ti	ti	PART	NEG	Polarity=Neg	3	advmod	_	TokenRange=4:6
3	amandwari	mandwari	VERB	V	Number=Sing|Person=1|VerbForm=Fin	0	root	_	TokenRange=7:16
4	ayuíri	yuíri	VERB	V	Number=Sing|Person=1|VerbForm=Fin	3	ccomp	_	TokenRange=17:23
5	se	se	PRON	PRON2	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	nmod:poss	_	TokenRange=24:26
6	família-itá	família	NOUN	N	Number=Plur	7	nmod:poss	_	Orig=anama|OrigLang=pt|TokenRange=27:36
7	ruka	uka	NOUN	N	Number=Sing|Rel=Cont	4	obl	_	TokenRange=37:41
8	kití	kití	ADP	ADP	_	7	case	_	SpaceAfter=No|TokenRange=42:46
9	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|TokenRange=46:47

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Augusto	augusto	PROPN	PROPN	_	2	nmod:poss	_	TokenRange=0:7
2	ambira	ambira	NOUN	N	Number=Sing	3	nsubj	_	TokenRange=8:14
3	usika	sika	VERB	V	Person=3|VerbForm=Fin	0	root	_	TokenRange=15:20
4	iké	iké	ADV	ADVD	PronType=Dem	3	advmod	_	SpaceAfter=No|TokenRange=21:24
5	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|TokenRange=24:25

~~~


