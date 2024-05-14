---
layout: base
title:  'Statistics of aux:pass in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="no_nynorsk-dep-aux.html">aux</a></tt>.

1197 nodes (0%) are attached to their parents as `aux:pass`.

1197 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5421888053467.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (1197; 100% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:pass	color:blue
1	Jaudå	jaudå	INTJ	interj	_	4	discourse	_	SpaceAfter=No
2	,	$,	PUNCT	<komma>	_	1	punct	_	_
3	eg	eg	PRON	pron	Animacy=Hum|Case=Nom|Person=1|PronType=Prs	4	nsubj	_	_
4	har	ha	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	det	det	PRON	pron	Gender=Neut|Person=3|PronType=Prs	4	obj	_	SpaceAfter=No
6	,	$,	PUNCT	<komma>	_	10	punct	_	_
7	og	og	CCONJ	konj	_	10	cc	_	_
8	den	den	PRON	pron	Gender=Fem,Masc|Person=3|PronType=Prs	10	nsubj:pass	_	_
9	vert	verte	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	brukt	bruke	ADJ	adj	Definite=Ind|Gender=Fem,Masc|VerbForm=Part	4	conj	_	_
11	rett	rett	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut	10	advmod	_	_
12	som	som	SCONJ	sbu	_	14	mark	_	_
13	det	det	PRON	pron	Gender=Neut|Person=3|PronType=Prs	14	expl	_	_
14	er	vere	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	11	advcl	_	SpaceAfter=No
15	.	$.	PUNCT	clb	_	4	punct	_	_

~~~


