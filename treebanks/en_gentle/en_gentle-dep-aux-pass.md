---
layout: base
title:  'Statistics of aux:pass in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-aux.html">aux</a></tt>.

112 nodes (1%) are attached to their parents as `aux:pass`.

112 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16964285714286.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-AUX.html">AUX</a></tt> (112; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:pass	color:blue
1	When	when	ADV	WRB	PronType=Int	4	advmod	4:advmod	Discourse=context-circumstance:117->118:0|XML=<hi rend:::"italic">
2	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	4:nsubj	Entity=(165-person-acc:com-cf1-1-sgl)
3	next	next	ADV	RB	Degree=Pos	4	advmod	4:advmod	_
4	meet	meet	VERB	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	9	advcl	9:advcl:when	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	4:punct	_
6	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	9	nsubj:pass	9:nsubj:pass	Discourse=joint-list_m:118->116:1|Entity=(166-person-acc:com-cf2-1-sgl)
7	'll	will	AUX	MD	VerbForm=Fin	9	aux	9:aux	_
8	be	be	AUX	VB	VerbForm=Inf	9	aux:pass	9:aux:pass	_
9	married	marry	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	9:punct	XML=</hi>

~~~


