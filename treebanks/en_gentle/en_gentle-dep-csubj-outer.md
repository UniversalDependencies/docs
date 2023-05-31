---
layout: base
title:  'Statistics of csubj:outer in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="en_gentle-dep-csubj-pass.html">csubj:pass</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:outer`.

1 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 1 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 csubj:outer	color:blue
1	But	but	CCONJ	CC	_	7	cc	7:cc	Discourse=context-circumstance:35->36:2
2	the	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Entity=(31-abstract-new-cf4-2-sgl
3	fact	fact	NOUN	NN	Number=Sing	7	csubj:outer	7:csubj:outer	Entity=31)
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
5	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	7:nsubj	Entity=(3-person-giv:act-cf1*-1-ana)
6	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	7	aux	7:aux	_
7	napping	nap	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	SpaceAfter=No
8	,	,	PUNCT	,	_	13	punct	13:punct	_
9	and	and	CCONJ	CC	_	13	cc	13:cc	Discourse=joint-sequence_m:36->2:3
10	so	so	ADV	RB	_	11	advmod	11:advmod	_
11	gently	gently	ADV	RB	Degree=Pos	13	advmod	13:advmod	_
12	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	13	nsubj	13:nsubj|14:nsubj:xsubj	Entity=(7-person-giv:act-cf2-1-ana)
13	came	come	VERB	VBD	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	7	conj	7:conj:and	_
14	rapping	rap	VERB	VBG	VerbForm=Ger	13	xcomp	13:xcomp	SpaceAfter=No
15	,	,	PUNCT	,	_	20	punct	20:punct	_
16	And	and	CCONJ	CC	_	20	cc	20:cc	Discourse=restatement-repetition_m:37->36:0
17	so	so	ADV	RB	_	18	advmod	18:advmod	_
18	faintly	faintly	ADV	RB	Degree=Pos	20	advmod	20:advmod	_
19	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	20	nsubj	20:nsubj|21:nsubj:xsubj	Entity=(7-person-giv:act-cf2-1-ana)
20	came	come	VERB	VBD	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	7	conj	7:conj:and	_
21	tapping	tap	VERB	VBG	VerbForm=Ger	20	xcomp	20:xcomp	SpaceAfter=No
22	,	,	PUNCT	,	_	23	punct	23:punct	_
23	tapping	tap	VERB	VBG	VerbForm=Ger	21	advcl	21:advcl	Discourse=elaboration-additional:38->37:0
24	at	at	ADP	IN	_	27	case	27:case	_
25	my	my	PRON	PRP$	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	27	nmod:poss	27:nmod:poss	Entity=(8-place-giv:inact-cf3-3-coref(3-person-giv:act-cf1*-1-ana)
26	chamber	chamber	NOUN	NN	Number=Sing	27	compound	27:compound	_
27	door	door	NOUN	NN	Number=Sing	23	obl	23:obl:at	Entity=8)|SpaceAfter=No
28	,	,	PUNCT	,	_	33	punct	33:punct	_
29	That	that	SCONJ	IN	_	33	mark	33:mark	Discourse=attribution-negative:39->40:0
30	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	33	nsubj	33:nsubj	Entity=(3-person-giv:act-cf1*-1-ana)
31	scarce	scarce	ADV	RB	Degree=Pos	33	advmod	33:advmod	_
32	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	33	cop	33:cop	_
33	sure	sure	ADJ	JJ	Degree=Pos	18	advcl	18:advcl:that	_
34	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	35	nsubj	35:nsubj	Discourse=causal-result:40->36:1|Entity=(3-person-giv:act-cf1*-1-ana)
35	heard	hear	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	33	ccomp	33:ccomp	_
36	you	you	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	35	obj	35:obj	Entity=(7-person-giv:act-cf2-1-ana)|SpaceAfter=No
37	"	''	PUNCT	''	_	7	punct	7:punct	_
38	—	—	PUNCT	:	_	7	punct	7:punct	_

~~~


