---
layout: base
title:  'Statistics of aux:pass in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="sv_talbanken-dep-aux.html">aux</a></tt>.

49 nodes (0%) are attached to their parents as `aux:pass`.

48 instances of `aux:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.69387755102041.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (49; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 aux:pass	color:blue
1	Undra	undra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	_
2	på	på	ADP	PL	_	1	compound:prt	1:compound:prt	_
3	att	att	SCONJ	SN	_	7	mark	7:mark	_
4	vi	vi	PRON	PN|UTR|PLU|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	7	nsubj:pass	7:nsubj:pass	_
5	blev	bli	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	aux:pass	7:aux:pass	_
6	lite	lite	ADV	AB|POS	Degree=Pos	7	advmod	7:advmod	_
7	undandragna	undandragen	VERB	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	1	ccomp	1:ccomp	SpaceAfter=No
8	.	.	PUNCT	MAD	_	1	punct	1:punct	_

~~~


