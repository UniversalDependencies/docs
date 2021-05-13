---
layout: base
title:  'Statistics of aux:pass in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="no_nynorsk-dep-aux.html">aux</a></tt>.

1204 nodes (0%) are attached to their parents as `aux:pass`.

1204 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.54235880398671.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (1204; 100% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:pass	color:blue
1	Jaudå	jaudå	INTJ	_	_	4	discourse	_	SpaceAfter=No
2	,	$,	PUNCT	_	_	1	punct	_	_
3	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	obj	_	SpaceAfter=No
6	,	$,	PUNCT	_	_	10	punct	_	_
7	og	og	CCONJ	_	_	10	cc	_	_
8	den	den	PRON	_	Gender=Fem,Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj:pass	_	_
9	vert	verte	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	brukt	bruke	VERB	_	Definite=Ind|Number=Sing|VerbForm=Part	4	conj	_	_
11	rett	rett	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	10	advmod	_	_
12	som	som	PRON	_	PronType=Rel	14	nsubj	_	_
13	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	expl	_	_
14	er	vere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	11	advcl	_	SpaceAfter=No
15	.	$.	PUNCT	_	_	4	punct	_	_

~~~


