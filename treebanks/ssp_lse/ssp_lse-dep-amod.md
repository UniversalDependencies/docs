---
layout: base
title:  'Statistics of amod in UD_Spanish_Sign_Language-LSE'
udver: '2'
---

## Treebank Statistics: UD_Spanish_Sign_Language-LSE: Relations: `amod`

This relation is universal.

38 nodes (3%) are attached to their parents as `amod`.

30 instances of `amod` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.34210526315789.

The following 4 pairs of parts of speech are connected with `amod`: <tt><a href="ssp_lse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ssp_lse-pos-ADJ.html">ADJ</a></tt> (33; 87% instances), <tt><a href="ssp_lse-pos-PRON.html">PRON</a></tt>-<tt><a href="ssp_lse-pos-ADJ.html">ADJ</a></tt> (3; 8% instances), <tt><a href="ssp_lse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ssp_lse-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="ssp_lse-pos-NUM.html">NUM</a></tt>-<tt><a href="ssp_lse-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	CADA-UNO	_	NUM	Num	_	2	nsubj	_	Gloss=EACH
2	TIPO	_	NOUN	N	_	0	root	_	Gloss=TYPE
3	DIFERENTE	_	ADJ	Adj	_	2	amod	_	Gloss=DIFFERENT

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 amod	color:blue
1	INDX:tercero	_	PRON	Pro	_	4	nsubj	_	Gloss=INDX:third
2	UNO	_	NUM	Num	_	1	nummod	_	Gloss=ONE
3	TRISTE	_	ADJ	Adj	_	1	amod	_	Gloss=SAD
4	MENTE^CONCENTRAR	_	VERB	V	_	0	root	_	Gloss=MIND^CONCENTRATE
5	TRABAJAR	_	VERB	V	_	4	xcomp	_	Gloss=WORK
6	G(B):vale	_	X	MD	_	4	discourse	_	Gloss=G

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 amod	color:blue
1	HERMANO	_	NOUN	N	_	8	nmod	_	Gloss=BROTHER
2	DOS	_	NUM	Num	_	1	nummod	_	Gloss=TWO
3	INDX	_	PRON	Pro	_	8	det	_	Gloss=INDX
4	SEGUNDO	_	ADJ	Num	_	8	amod	_	Gloss=SECOND
5	PROPIO	_	PRON	Pro	_	8	amod	_	Gloss=MINE
6	LOS-DOS	_	NUM	Num	_	7	nummod	_	Gloss=BOTH
7	HERMANO	_	NOUN	N	_	8	nmod	_	Gloss=BROTHER
8	CASA	_	NOUN	N	_	9	nsubj	_	Gloss=HOME
9	DESAPARECER	_	VERB	V	_	0	root	_	Gloss=DISAPPEAR

~~~


