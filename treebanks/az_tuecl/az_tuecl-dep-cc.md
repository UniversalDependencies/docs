---
layout: base
title:  'Statistics of cc in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `cc`

This relation is universal.

12 nodes (2%) are attached to their parents as `cc`.

12 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 3 pairs of parts of speech are connected with `cc`: <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-CCONJ.html">CCONJ</a></tt> (8; 67% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-CCONJ.html">CCONJ</a></tt> (2; 17% instances), <tt><a href="az_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="az_tuecl-pos-CCONJ.html">CCONJ</a></tt> (2; 17% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 cc	color:blue
1	O	o	PRON	_	_	2	nsubj	_	_
2	çalışdı	çalış	VERB	_	_	0	root	_	_
3	kı	ki	SCONJ	_	_	9	mark	_	_
4	siqar	siqar	NOUN	_	_	5	compound	_	_
5	çekmә	çek	VERB	_	_	9	xcomp	_	_
6	vә	və	CCONJ	_	_	8	cc	_	_
7	әlkol	alkol	NOUN	_	_	8	obj	_	_
8	içmәni	iç	VERB	_	_	5	conj	_	_
9	tәrkidә	tərk	VERB	_	_	2	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	İguazu	İguazu	NOUN	_	_	2	nsubj	_	_
2	böyük	böyük	ADJ	_	_	4	amod	_	_
3	bir	bir	DET	_	_	4	det	_	_
4	kisvərdir	keşvər	NOUN	_	_	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	ya	ya	CCONJ	_	_	7	cc	_	_
7	kiçik	kiçik	ADJ	_	_	4	conj	_	SpaceAfter=No
8	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc	color:blue
1	Nә	nə	CCONJ	_	_	2	cc	_	_
2	Peter	Peter	PROPN	_	_	10	nsubj	_	_
3	Smith	Smith	PROPN	_	_	2	flat	_	_
4	nә	nə	CCONJ	_	_	6	cc	_	_
5	də	də	ADV	_	_	4	fixed	_	_
6	Mary	Mary	PROPN	_	_	2	conj	_	_
7	Brown	Brown	PROPN	_	_	6	flat	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	intixab	intixab	NOUN	_	_	10	compound:lvc	_	_
10	ola	ol	VERB	_	_	0	root	_	_
11	bildi	bil	AUX	_	_	10	aux	_	SpaceAfter=No
12	.	.	PUNCT	_	_	10	punct	_	_

~~~


