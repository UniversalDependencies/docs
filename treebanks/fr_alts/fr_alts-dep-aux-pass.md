---
layout: base
title:  'Statistics of aux:pass in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="fr_alts-dep-aux.html">aux</a></tt>.

278 nodes (1%) are attached to their parents as `aux:pass`.

277 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17985611510791.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (278; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Et	et	CCONJ	_	_	7	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	le	le	DET	_	Definite=Def	3	det	_	gold_pos=DET|prpos=Da|uppos=D
3	soer	soir	NOUN	_	_	7	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
4	enssuyvant	ensuivant	ADJ	_	_	3	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
5	elle	il	PRON	_	PronType=Prs	7	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
6	fut	être	AUX	_	VerbForm=Fin	7	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
7	prynse	prendre	VERB	_	VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|uppos=VPP
8	de	de	ADP	_	_	9	case	_	gold_pos=ADP|prpos=S|uppos=P
9	mal	mal	NOUN	_	_	7	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
10	,	,	PUNCT	_	_	7	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


