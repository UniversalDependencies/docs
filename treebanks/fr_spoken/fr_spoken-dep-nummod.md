---
layout: base
title:  'Statistics of nummod in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `nummod`

This relation is universal.

302 nodes (1%) are attached to their parents as `nummod`.

164 instances of `nummod` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.40728476821192.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (163; 54% instances), <tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (94; 31% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (20; 7% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (7; 2% instances), <tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (6; 2% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (5; 2% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	trois	trois	NUM	_	_	2	nummod	_	_
2	policiers	policier	NOUN	_	_	0	root	_	_
3	blessés	blesser	ADJ	_	_	2	amod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	c'	ce	PRON	_	_	2	nsubj	_	_
2	est	être	AUX	_	_	0	root	_	_
3	je	je	PRON	_	_	5	nsubj	_	_
4	te	te	PRON	_	_	5	obj	_	_
5	dis	dire	VERB	DISCOURSE	_	2	parataxis:discourse	_	_
6	dix-huit	dix-huit	NUM	_	_	2	nummod	_	_
7	cent	cent	NUM	_	_	6	nummod	_	_
8	soixante-dix	soixante-dix	NUM	_	_	7	nummod	_	_
9	par	par	ADP	_	_	10	case	_	_
10	là	là	ADV	_	_	6	dep	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nummod	color:blue
1	Nice	Nice	PROPN	_	_	3	nsubj	_	_
2	s'	se	PRON	_	_	3	dep:iobj	_	_
3	impose	imposer	VERB	_	_	0	root	_	_
4	à	à	ADP	_	_	5	case	_	_
5	Nancy	Nancy	PROPN	_	_	3	obl:comp	_	_
6	deux	deux	NUM	_	_	3	nummod	_	_
7	à	à	ADP	_	_	8	case	_	_
8	un	un	NOUN	_	_	6	dep	_	_

~~~


