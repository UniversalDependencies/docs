---
layout: base
title:  'Statistics of aux:pass in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-aux.html">aux</a></tt>.

96 nodes (1%) are attached to their parents as `aux:pass`.

96 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35416666666667.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt> (96; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	_	_	PRON	EX	PronType=Dem	2	expl	2:expl	Discourse=context-background:22->25:2:sem-rpt-181-201+sem-rpt-182,212-213|Lem=*LOWER*|Len=5
2	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	Cxn=Existential-CopPred-ThereExpl|Lem=be|Len=3
3	_	_	DET	DT	Definite=Ind|PronType=Art	4	det	4:det	Entity=(38-event-new-cf1-2-sgl|Lem=a|Len=2
4	_	_	NOUN	NN	Number=Sing	2	nsubj	2:nsubj|7:nsubj:pass	Lem=_|Len=10
5	_	_	PRON	WDT	PronType=Rel	7	nsubj:pass	4:ref	Discourse=elaboration-attribute:23->22:0:syn-mdf-176+syn-relcl-177,179|Lem=_|Len=4
6	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	7:aux:pass	Lem=be|Len=3
7	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	4	acl:relcl	4:acl:relcl	Lem=do|Len=4
8	_	_	ADP	IN	_	11	case	11:case	Lem=_|Len=4
9	_	_	DET	DT	Definite=Ind|PronType=Art	11	det	11:det	Entity=(39-abstract-new-cf2-3-coref|Lem=_|Len=1
10	_	_	NOUN	NN	Number=Sing	11	compound	11:compound	Entity=(40-animal-new-cf7-1-coref)|Lem=_|Len=3
11	_	_	NOUN	NN	Number=Sing	7	obl	7:obl:with|14:nsubj:pass	Lem=_|Len=10|MSeg=populat-ion
12	_	_	PRON	WDT	PronType=Rel	14	nsubj:pass	11:ref	Discourse=elaboration-attribute:24->23:0:syn-mdf-183+syn-relcl-184,186|Lem=_|Len=5
13	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	aux:pass	14:aux:pass	Lem=be|Len=3
14	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	11	acl:relcl	11:acl:relcl	Lem=raise|Len=6|MSeg=rais-ed
15	_	_	ADP	IN	_	17	case	17:case	Lem=_|Len=2
16	_	_	DET	DT	Definite=Ind|PronType=Art	17	det	17:det	Entity=(41-place-new-cf3-2-sgl|Lem=a|Len=2
17	_	_	NOUN	NN	Number=Sing	14	obl	14:obl:in	Lem=_|Len=11|MSeg=environ-ment
18	_	_	ADP	IN	_	21	case	21:case	Lem=_|Len=2
19	_	_	ADJ	JJ	Degree=Pos	21	amod	21:amod	Entity=(42-abstract-new-cf4-3-sgl|Lem=_|Len=10|MSeg=artific-ial
20	_	_	ADJ	JJ	Degree=Pos	21	amod	21:amod	Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	17	nmod	17:nmod:of	Lem=_|Len=9|MSeg=abundan-ce
22	_	_	ADP	IN	_	23	case	23:case	Lem=_|Len=2
23	_	_	NOUN	NN	Number=Sing	21	nmod	21:nmod:of	Entity=(43-substance-new-cf5-1-sgl)|Lem=_|Len=4|SpaceAfter=No
24	_	_	PUNCT	,	_	25	punct	25:punct	Lem=_|Len=1
25	_	_	NOUN	NN	Number=Sing	23	conj	21:nmod:of|23:conj	Entity=(44-substance-new-cf6-1-sgl)|Lem=_|Len=5|SpaceAfter=No
26	_	_	PUNCT	,	_	27	punct	27:punct	Lem=_|Len=1
27	_	_	NOUN	FW	Abbr=Yes|Number=Plur	23	conj	21:nmod:of|23:conj	Entity=42)41)39)38)|Lem=_|Len=4

~~~


