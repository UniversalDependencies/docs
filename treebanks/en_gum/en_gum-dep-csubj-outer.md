---
layout: base
title:  'Statistics of csubj:outer in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="en_gum-dep-csubj-pass.html">csubj:pass</a></tt>.

9 nodes (0%) are attached to their parents as `csubj:outer`.

9 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.33333333333333.

The following 2 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (6; 67% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 csubj:outer	color:blue
1	Studying	study	VERB	VBG	VerbForm=Ger	7	csubj:outer	7:csubj:outer	Discourse=elaboration-additional:16->14:1:_|Entity=(27-event-new-cf1-1-disc|MSeg=Study-ing
2	groups	group	NOUN	NNS	Number=Plur	1	obj	1:obj	Entity=(28-abstract-new-cf2-1-sgl)27)|MSeg=group-s
3	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
4	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	_
5	bit	bit	NOUN	NN	Number=Sing	7	obl:npmod	7:obl:npmod	_
6	like	like	SCONJ	IN	_	7	mark	7:mark	_
7	studying	study	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	MSeg=study-ing
8	symmetry	symmetry	NOUN	NN	Number=Sing	7	obj	7:obj	Entity=(29-abstract-new-cf3-1-sgl)|SpaceAfter=No
9	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 csubj:outer	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	4	nsubj	4:nsubj	Discourse=organization-preparation:54->55:3:_|Entity=(26-abstract-new-cf4-1-cata)
2	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	another	another	DET	DT	PronType=Ind	4	det	4:det	Entity=(26-abstract-acc:com-cf4-2-coref|MSeg=an-other
4	thing	thing	NOUN	NN	Number=Sing	10	csubj:outer	10:csubj:outer	Entity=26)
5	too	too	ADV	RB	Degree=Pos	4	advmod	4:advmod	SpaceAfter=No
6	,	,	PUNCT	,	_	4	punct	4:punct	_
7	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	Discourse=joint-other_m:55->10:4:lex-indwd-269
8	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	10:nsubj	Entity=(1-person-giv:inact-cf3-1-ana)
9	kinda	kinda	ADV	RB	Degree=Pos	10	advmod	10:advmod	_
10	had	have	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	_
11	a	a	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Entity=(27-abstract-new-cf5-4-sgl
12	b-	b-	INTJ	UH	_	13	reparandum	13:reparandum	_
13	general	general	ADJ	JJ	Degree=Pos	14	amod	14:amod	_
14	idea	idea	NOUN	NN	Number=Sing	10	obj	10:obj	SpaceAfter=No
15	,	,	PUNCT	,	_	18	punct	18:punct	_
16	of	of	ADP	IN	_	18	case	18:case	Discourse=elaboration-additional:56->55:0:_
17	kinda	kinda	ADV	RB	Degree=Pos	18	advmod	18:advmod	_
18	how	how	ADV	WRB	PronType=Int	14	nmod	14:nmod:of	_
19	to	to	PART	TO	_	20	mark	20:mark	_
20	do	do	VERB	VB	VerbForm=Inf	18	acl	18:acl:to	_
21	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	20	obj	20:obj	Entity=(4-event-giv:act-cf2-1-ana)27)|SpaceAfter=No
22	,	,	PUNCT	,	_	24	punct	24:punct	_
23	just	just	ADV	RB	_	24	advmod	24:advmod	Discourse=causal-cause:57->55:1:_
24	watching	watch	VERB	VBG	Tense=Pres|VerbForm=Part	10	advcl	10:advcl	MSeg=watch-ing
25	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	24	obj	24:obj	Entity=(24-person-giv:act-cf1*-1-ana)|SpaceAfter=No|XML=<hi rend:::"lengthened"></hi>
26	.	.	PUNCT	.	_	10	punct	10:punct	_

~~~


