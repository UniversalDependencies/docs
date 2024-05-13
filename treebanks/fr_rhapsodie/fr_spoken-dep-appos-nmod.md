---
layout: base
title:  'Statistics of appos:nmod in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `appos:nmod`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `appos`: <tt><a href="fr_spoken-dep-appos-conj.html">appos:conj</a></tt>.

101 nodes (0%) are attached to their parents as `appos:nmod`.

101 instances of `appos:nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06930693069307.

The following 4 pairs of parts of speech are connected with `appos:nmod`: <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (95; 94% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (4; 4% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 appos:nmod	color:blue
1	la	le	DET	_	_	2	det	_	_
2	foire	foire	NOUN	_	_	0	root	_	_
3	d'	de	ADP	_	_	4	case	_	_
4	empoigne	empoigne	NOUN	_	_	2	nmod	_	_
5	au	à+le	ADP	_	_	6	case	_	_
6	procès	procès	NOUN	_	_	2	nmod	_	_
7	Colonna	Colonna	PROPN	_	_	6	appos:nmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 appos:nmod	color:blue
1	et	et	CCONJ	_	_	12	cc	_	_
2	puis	puis	ADV	_	_	1	fixed	_	_
3	après	après	ADP	_	_	12	obl:periph	_	_
4	rue	rue	NOUN	_	_	12	dislocated	_	_
5	du	de+le	ADP	_	_	6	case	_	_
6	Faubourg	Faubourg	PROPN	_	_	4	nmod	_	_
7	Saint	Saint	PROPN	_	_	6	appos:nmod	_	_
8	Antoine	Antoine	PROPN	_	_	7	flat	_	_
9	c'	ce	PRON	_	_	12	nsubj	_	_
10	est	être	AUX	_	_	12	cop	_	_
11	très	très	ADV	_	_	12	advmod	_	_
12	vivant	vivant	ADJ	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos:nmod	color:blue
1	mes	son	DET	_	_	2	det	_	_
2	parents	parent	NOUN	_	_	7	nsubj	_	_
3	tous	tout	ADJ	_	_	5	amod	_	_
4	les	le	DET	_	_	5	det	_	_
5	deux	deux	NUM	_	_	2	appos:nmod	_	_
6	ont	avoir	AUX	_	_	7	aux	_	_
7	vécu	vivre	VERB	_	_	0	root	_	_
8	à	à	ADP	_	_	9	case	_	_
9	Paris	Paris	PROPN	_	_	7	obl:comp	_	_
10	jeunes	jeune	ADJ	_	_	7	advmod	_	_
11	hein	hein	INTJ	_	_	10	discourse	_	_

~~~


