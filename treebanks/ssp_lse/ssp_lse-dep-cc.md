---
layout: base
title:  'Statistics of cc in UD_Spanish_Sign_Language-LSE'
udver: '2'
---

## Treebank Statistics: UD_Spanish_Sign_Language-LSE: Relations: `cc`

This relation is universal.

2 nodes (0%) are attached to their parents as `cc`.

2 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `cc`: <tt><a href="ssp_lse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ssp_lse-pos-CCONJ.html">CCONJ</a></tt> (1; 50% instances), <tt><a href="ssp_lse-pos-VERB.html">VERB</a></tt>-<tt><a href="ssp_lse-pos-CCONJ.html">CCONJ</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
1	TÍTULO	_	NOUN	N	_	3	nsubj	_	Gloss=TITLE
2	TRES	_	NUM	Num	_	3	nummod	_	Gloss=THREE
3	CERDO	_	NOUN	N	_	0	root	_	Gloss=PIG
4	OTRO	_	CCONJ	Conj	_	6	cc	_	Gloss=OTHER
5	UNO	_	NUM	Num	_	6	nummod	_	Gloss=ONE
6	LOBO	_	NOUN	N	_	3	conj	_	Gloss=WOLF

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	OTRO	_	CCONJ	Conj	_	3	cc	_	Gloss=OTHER
2	LOBO	_	NOUN	N	_	3	nsubj	_	Gloss=WOLF
3	MENTE^OBJETIVO	_	VERB	V	_	0	root	_	Gloss=MIND^OBJECTIVE
4	COMER	_	VERB	V	_	3	xcomp	_	Gloss=EAT
5	MORDER	_	VERB	V	_	4	compound:svc	_	Gloss=BITE

~~~


