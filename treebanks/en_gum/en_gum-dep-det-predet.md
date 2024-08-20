---
layout: base
title:  'Statistics of det:predet in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-det.html">det</a></tt>.

178 nodes (0%) are attached to their parents as `det:predet`.

178 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.31460674157303.

The following 6 pairs of parts of speech are connected with `det:predet`: <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (166; 93% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (7; 4% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det:predet	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj|8:nsubj	Discourse=elaboration-additional:45->37:7:ref-prs-387-396,418|Entity=(75-abstract-new-cf5-5,8-disc(44-abstract-giv:act-cf1*-1-ana)
2	's	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
3	both	both	DET	PDT	PronType=Tot	5	det:predet	5:det:predet	Entity=(44-abstract-giv:act-cf1*-3,6-coref
4	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(73-event-giv:act-cf2-2-coref
5	waiver	waiver	NOUN	NN	Number=Sing	0	root	0:root	Entity=73)
6	and	and	CCONJ	CC	_	8	cc	8:cc	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	Entity=(74-event-giv:act-cf3-2-coref
8	modification	modification	NOUN	NN	Number=Sing	5	conj	5:conj:and	Entity=74)44)75)|MSeg=mod-ification|SpaceAfter=No
9	,	,	PUNCT	,	_	10	punct	10:punct	_
10	Justice	Justice	PROPN	NNP	Number=Sing	5	vocative	5:vocative	Entity=(76-person-new-cf4-1,2-coref-Clarence_Thomas
11	Thomas	Thomas	PROPN	NNP	Number=Sing	10	flat	10:flat	Entity=76)|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:predet	color:blue
1	Keep	keep	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=joint-other_m:51->3:2:grf-seq-
2	track	track	NOUN	NN	Number=Sing	1	obj	1:obj	_
3	of	of	ADP	IN	_	5	case	5:case	_
4	all	all	DET	PDT	PronType=Tot	5	det:predet	5:det:predet	Entity=(83-abstract-new-cf2-2-sgl
5	your	your	PRON	PRP$	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs|Typo=Yes	2	nmod	2:nmod:of	CorrectForm=your words.|Entity=(5-person-giv:act-cf1*-1-ana)83)|XML=<sic ana:::"your words."></sic>

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 det:predet	color:blue
1	“	''	PUNCT	``	_	4	punct	4:punct	Discourse=elaboration-additional:37->36:0:grf-dsh-318|SpaceAfter=No
2	Average	Average	ADJ	JJ	Degree=Pos	3	amod	3:amod	Entity=(62-abstract-new-cf1-2-coref
3	age	age	NOUN	NN	Number=Sing	4	nsubj	4:nsubj	Entity=62)
4	62	62	NUM	CD	NumForm=Digit|NumType=Card	0	root	0:root	Entity=(62-abstract-giv:act-cf1-1-coref)|SpaceAfter=No
5	,	,	PUNCT	,	_	8	punct	8:punct	_
6	birth	birth	NOUN	NN	Number=Sing	7	compound	7:compound	Discourse=joint-list_m:38->37:0:_|Entity=(63-abstract-new-cf2-2-coref|MSeg=bir-th
7	rate	rate	NOUN	NN	Number=Sing	8	nsubj	8:nsubj	Entity=63)
8	0.22	0.22	NUM	CD	NumForm=Digit|NumType=Frac	4	conj	4:conj	Entity=(63-abstract-giv:act-cf2-1-coref)|SpaceAfter=No
9	,	,	PUNCT	,	_	11	punct	11:punct	_
10	net	net	ADJ	JJ	Degree=Pos	11	amod	11:amod	Discourse=joint-list_m:39->37:0:_|Entity=(64-abstract-new-cf3-2-sgl
11	immigration	immigration	NOUN	NN	Number=Sing	4	conj	4:conj	MSeg=immigrat-ion
12	of	of	ADP	IN	_	15	case	15:case	_
13	half	half	DET	PDT	NumForm=Word|NumType=Frac|PronType=Ind	15	det:predet	15:det:predet	Entity=(65-person-new-cf5-3-sgl
14	a	a	DET	DT	Definite=Ind|PronType=Art	15	det	15:det	_
15	million	million	NUM	CD	NumForm=Word|NumType=Card	11	nmod	11:nmod:of	Entity=65)
16	a	a	DET	DT	Definite=Ind|PronType=Art	17	det	17:det	Entity=(66-time-new-cf4-2-sgl
17	year	year	NOUN	NN	Number=Sing	15	nmod:tmod	15:nmod:tmod	Entity=66)64)|SpaceAfter=No
18	”	''	PUNCT	''	_	4	punct	4:punct	_
19	—	—	PUNCT	:	_	4	punct	4:punct	_

~~~


