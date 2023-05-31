---
layout: base
title:  'Statistics of flat:name in UD_Maltese-MUDT'
udver: '2'
---

## Treebank Statistics: UD_Maltese-MUDT: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="mt_mudt-dep-flat.html">flat</a></tt>.

529 nodes (1%) are attached to their parents as `flat:name`.

529 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.53119092627599.

The following 11 pairs of parts of speech are connected with `flat:name`: <tt><a href="mt_mudt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mt_mudt-pos-PROPN.html">PROPN</a></tt> (335; 63% instances), <tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt_mudt-pos-PROPN.html">PROPN</a></tt> (163; 31% instances), <tt><a href="mt_mudt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt> (12; 2% instances), <tt><a href="mt_mudt-pos-X.html">X</a></tt>-<tt><a href="mt_mudt-pos-X.html">X</a></tt> (7; 1% instances), <tt><a href="mt_mudt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mt_mudt-pos-SYM.html">SYM</a></tt> (3; 1% instances), <tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt_mudt-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="mt_mudt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mt_mudt-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt_mudt-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="mt_mudt-pos-X.html">X</a></tt>-<tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="mt_mudt-pos-X.html">X</a></tt>-<tt><a href="mt_mudt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:name	color:blue
1	Mhux	_	AUX	PRON_PERS_NEG	_	2	aux:neg	_	_
2	dgħufija	_	NOUN	NOUN	_	0	root	_	_
3	li	_	SCONJ	COMP	_	6	mark	_	_
4	wieħed	_	NUM	NUM_WHD	_	6	nsubj	_	_
5	ikun	_	AUX	KIEN	_	6	cop	_	_
6	prudenti	_	ADJ	ADJ	_	2	acl	_	SpaceAfter=No
7	,	_	PUNCT	X_PUN	_	2	punct	_	_
8	kompla	_	VERB	VERB	_	2	parataxis	_	_
9	Tonio	_	PROPN	NOUN_PROP	_	8	nsubj	_	_
10	Borg	_	PROPN	NOUN_PROP	_	9	flat:name	_	SpaceAfter=No
11	.	_	PUNCT	X_PUN	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:name	color:blue
1	"	_	PUNCT	X_PUN	_	3	punct	_	_
2	Jien	_	PRON	PRON_PERS	_	3	nsubj	_	_
3	għadni	_	VERB	VERB_PSEU	_	0	root	_	_
4	mmur	_	VERB	VERB	_	3	xcomp	_	_
5	nara	_	VERB	VERB	_	4	xcomp	_	_
6	lil	_	ADP	LIL	_	7	case	_	_
7	Mrs	_	NOUN	X_ABV	_	5	obj	_	_
8	Borg	_	PROPN	NOUN_PROP	_	7	flat:name	_	_
9	Olivier	_	PROPN	NOUN_PROP	_	7	flat:name	_	SpaceAfter=No
10	.	_	PUNCT	X_PUN	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	John	_	PROPN	NOUN_PROP	_	0	root	_	_
2	W	_	NOUN	X_ABV	_	1	flat:name	_	SpaceAfter=No
3	.	_	PUNCT	X_PUN	_	2	punct	_	_
4	Moffatt	_	PROPN	NOUN_PROP	_	1	flat:name	_	SpaceAfter=No
5	,	_	PUNCT	X_PUN	_	1	punct	_	_
6	gravitazzjoni	_	NOUN	NOUN	_	1	list	_	_
7	mhux	_	AUX	PRON_PERS_NEG	_	8	aux:neg	_	_
8	simmetrica	_	ADJ	ADJ	_	6	amod	_	_
9	(	_	PUNCT	X_PUN	_	10	punct	_	SpaceAfter=No
10	NGT	_	NOUN	X_ABV	_	6	appos	_	SpaceAfter=No
11	,	_	PUNCT	X_PUN	_	10	punct	_	_
12	Nonsymmetric	_	X	X_ENG	_	10	appos	_	_
13	Gravitational	_	X	X_ENG	_	12	flat	_	_
14	Theory	_	X	X_ENG	_	12	flat	_	SpaceAfter=No
15	)	_	PUNCT	X_PUN	_	10	punct	_	SpaceAfter=No
16	,	_	PUNCT	X_PUN	_	1	punct	_	_
17	1994	_	NUM	X_DIG	_	1	list	_	_

~~~


