---
layout: base
title:  'Statistics of flat in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="id_pud-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="id_pud-dep-flat-name.html">flat:name</a></tt>.

116 nodes (1%) are attached to their parents as `flat`.

116 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.38793103448276.

The following 11 pairs of parts of speech are connected with `flat`: <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (51; 44% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (24; 21% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (19; 16% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (6; 5% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (5; 4% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="id_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="id_pud-pos-SYM.html">SYM</a></tt> (3; 3% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="id_pud-pos-X.html">X</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 flat	color:blue
1	Raja	raja	NOUN	_	Number=Sing	5	nsubj	_	_
2	pertama	pertama	ADJ	_	NumType=Ord	1	amod	_	_
3	nya	nya	PRON	_	Number=Sing|Person=3|PronType=Prs	1	nmod:poss	_	_
4	adalah	adalah	AUX	_	_	5	cop	_	_
5	Mojmír	Mojmír	PROPN	_	_	0	root	_	_
6	I	I	PROPN	_	_	5	flat:name	_	_
7	(	(	PUNCT	_	_	8	punct	_	SpaceAfter=No
8	berkuasa	kuasa	VERB	_	Mood=Ind|Voice=Act	5	parataxis	_	_
9	830	830	NUM	_	NumType=Card	8	obl:tmod	_	_
10	–	–	PUNCT	_	_	11	punct	_	_
11	846	846	NUM	_	NumType=Card	9	flat	_	SpaceAfter=No
12	)	)	PUNCT	_	_	8	punct	_	SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat	color:blue
1	Mereka	mereka	PRON	_	Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
2	akan	akan	AUX	_	_	3	aux	_	_
3	main	main	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
4	pada	pada	ADP	_	_	5	case	_	_
5	hari	hari	NOUN	_	Number=Sing	3	obl:tmod	_	_
6	Sabtu	Sabtu	PROPN	_	_	5	nmod:tmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	10	10	NUM	_	NumType=Card	5	appos	_	_
9	Juni	Juni	PROPN	_	_	8	flat	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 flat	color:blue
1	Di	di	ADP	_	_	2	case	_	_
2	bulan	bulan	NOUN	_	Number=Sing	8	obl:tmod	_	_
3	Juni	Juni	PROPN	_	_	2	nmod:tmod	_	_
4	hingga	hingga	ADP	_	_	5	case	_	_
5	Agustus	Agustus	PROPN	_	_	3	nmod:tmod	_	_
6	2010	2010	NUM	_	NumType=Card	3	flat	_	_
7	kelaparan	lapar	NOUN	_	Number=Sing	8	nsubj	_	_
8	melanda	landa	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
9	Sahel	Sahel	PROPN	_	_	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


