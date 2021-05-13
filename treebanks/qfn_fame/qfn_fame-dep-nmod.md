---
layout: base
title:  'Statistics of nmod in UD_Frisian_Dutch-Fame'
udver: '2'
---

## Treebank Statistics: UD_Frisian_Dutch-Fame: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="qfn_fame-dep-nmod-poss.html">nmod:poss</a></tt>.

132 nodes (4%) are attached to their parents as `nmod`.

107 instances of `nmod` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.9469696969697.

The following 14 pairs of parts of speech are connected with `nmod`: <tt><a href="qfn_fame-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qfn_fame-pos-NOUN.html">NOUN</a></tt> (67; 51% instances), <tt><a href="qfn_fame-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qfn_fame-pos-PROPN.html">PROPN</a></tt> (26; 20% instances), <tt><a href="qfn_fame-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qfn_fame-pos-PROPN.html">PROPN</a></tt> (10; 8% instances), <tt><a href="qfn_fame-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qfn_fame-pos-PRON.html">PRON</a></tt> (9; 7% instances), <tt><a href="qfn_fame-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qfn_fame-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="qfn_fame-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qfn_fame-pos-NUM.html">NUM</a></tt> (4; 3% instances), <tt><a href="qfn_fame-pos-PRON.html">PRON</a></tt>-<tt><a href="qfn_fame-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="qfn_fame-pos-ADV.html">ADV</a></tt>-<tt><a href="qfn_fame-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="qfn_fame-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qfn_fame-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="qfn_fame-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qfn_fame-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="qfn_fame-pos-NUM.html">NUM</a></tt>-<tt><a href="qfn_fame-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="qfn_fame-pos-PRON.html">PRON</a></tt>-<tt><a href="qfn_fame-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="qfn_fame-pos-PRON.html">PRON</a></tt>-<tt><a href="qfn_fame-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="qfn_fame-pos-VERB.html">VERB</a></tt>-<tt><a href="qfn_fame-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod	color:blue
1	de	_	DET	_	_	2	det	_	Lang=fy
2	ontwikkeling	_	NOUN	_	_	0	root	_	Lang=nl
3	in	_	ADP	_	_	4	case	_	Lang=nl
4	hoofdlijnen	_	NOUN	_	_	2	nmod	_	Lang=nl
5	foar	_	ADP	_	_	11	case	_	Lang=fy
6	it	_	DET	_	_	11	det	_	Lang=fy
7	yn	_	ADP	_	_	9	case	_	Lang=fy
8	it	_	DET	_	_	9	det	_	Lang=fy
9	plan	_	NOUN	_	_	11	nmod	_	Lang=nl
10	begrepen	_	VERB	_	_	9	amod	_	Lang=nl
11	gebied	_	NOUN	_	_	2	nmod	_	Lang=nl

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 nmod	color:blue
1	in	_	DET	_	_	2	det	_	Lang=fy
2	aventoer	_	NOUN	_	_	0	root	_	Lang=fy
3	fan	_	ADP	_	_	4	case	_	Lang=fy
4	rechercheur	_	NOUN	_	_	2	nmod:poss	_	Lang=nl
5	Thomas	_	PROPN	_	_	4	appos	_	Lang=fy
6	Taktyk	_	PROPN	_	_	5	flat:name	_	Lang=fy
7	troch	_	ADP	_	_	8	case	_	Lang=fy
8	Piter	_	PROPN	_	_	2	nmod	_	Lang=fy
9	Terpstra	_	PROPN	_	_	8	flat:name	_	Lang=fy

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod	color:blue
1	freegje	_	VERB	_	_	0	root	_	Lang=fy
2	de	_	DET	_	_	3	det	_	Lang=fy
3	Provinsjale	_	PROPN	_	_	1	nsubj	_	Lang=fy
4	Staten	_	PROPN	_	_	3	flat:name	_	Lang=nl
5	fan	_	ADP	_	_	6	case	_	Lang=fy
6	Fryslân	_	PROPN	_	_	4	nmod	_	Lang=fy
7	it	_	DET	_	_	8	det	_	Lang=fy
8	KOVS	_	PROPN	_	_	1	iobj	_	Lang=fy

~~~


