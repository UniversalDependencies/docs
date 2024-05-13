---
layout: base
title:  'Statistics of appos in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `appos`

This relation is universal.

116 nodes (1%) are attached to their parents as `appos`.

116 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.91379310344828.

The following 12 pairs of parts of speech are connected with `appos`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (57; 49% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (20; 17% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (15; 13% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (10; 9% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (5; 4% instances), <tt><a href="id_pud-pos-X.html">X</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 appos	color:blue
1	Kemudian	kemudian	ADV	_	_	3	advmod	_	_
2	ia	ia	PRON	_	Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	menghadapi	hadap	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
4	juara	juara	NOUN	_	Number=Sing	3	obj	_	_
5	bertahan	tahan	VERB	_	Mood=Ind|Voice=Act	4	acl	_	_
6	dan	dan	CCONJ	_	_	7	cc	_	_
7	pemain	main	NOUN	_	Number=Sing	4	conj	_	_
8	top	top	ADJ	_	_	7	amod	_	_
9	Sara	Sara	PROPN	_	_	4	appos	_	_
10	Errani	Errani	PROPN	_	_	9	flat:name	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	namun	namun	CCONJ	_	_	13	cc	_	_
13	kalah	kalah	VERB	_	Mood=Ind|Voice=Act	3	conj	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 appos	color:blue
1	Dan	dan	CCONJ	_	_	6	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	tentu	tentu	ADV	_	_	6	advmod	_	_
4	saja	saja	ADV	_	_	3	advmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	ada	ada	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
7	Bob	Bob	PROPN	_	_	6	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	sumber	sumber	NOUN	_	Number=Sing	7	appos	_	_
10	tetap	tetap	ADJ	_	_	9	amod	_	_
11	hiburan	hibur	NOUN	_	Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 appos	color:blue
1	Karya	karya	NOUN	_	Number=Sing	6	nsubj	_	_
2	nonfiksi	nonfiksi	ADJ	_	_	1	amod	_	_
3	terakhir	akhir	ADJ	_	Degree=Sup	1	amod	_	_
4	nya	nya	PRON	_	Number=Sing|Person=3|PronType=Prs	1	nmod:poss	_	_
5	adalah	adalah	AUX	_	_	6	cop	_	_
6	Margaret	Margaret	PROPN	_	_	0	root	_	_
7	Douglas	Douglas	PROPN	_	_	6	flat:name	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	Countess	Countess	PROPN	_	_	6	appos	_	_
10	of	of	PROPN	_	_	9	flat:name	_	_
11	Lennox	Lennox	PROPN	_	_	9	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


