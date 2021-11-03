---
layout: base
title:  'Statistics of nmod:tmod in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="en_atis-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="en_atis-dep-nmod-poss.html">nmod:poss</a></tt>.

1263 nodes (2%) are attached to their parents as `nmod:tmod`.

1258 instances of `nmod:tmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.54948535233571.

The following 19 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (693; 55% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (341; 27% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (67; 5% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (51; 4% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (21; 2% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (20; 2% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (12; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (10; 1% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (9; 1% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-AUX.html">AUX</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:tmod	color:blue
1	list	list	VERB	_	VerbForm=Inf	0	root	_	_
2	the	the	DET	_	PronType=Art	5	det	_	_
3	tower	tower	PROPN	_	Number=Sing	5	compound	_	_
4	air	air	PROPN	_	Number=Sing	3	flat	_	_
5	flights	flight	NOUN	_	Number=Plur	1	obj	_	_
6	on	on	ADP	_	_	7	case	_	_
7	mondays	monday	PROPN	_	Number=Plur	5	nmod:tmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 nmod:tmod	color:blue
1	flights	flight	NOUN	_	Number=Plur	0	root	_	_
2	from	from	ADP	_	_	3	case	_	_
3	pittsburgh	pittsburgh	PROPN	_	Number=Sing	1	nmod	_	_
4	to	to	ADP	_	_	5	case	_	_
5	baltimore	baltimore	PROPN	_	Number=Sing	1	nmod	_	_
6	between	between	ADP	_	_	8	case	_	_
7	10	10	NUM	_	NumType=Card	8	nummod	_	_
8	am	be	NOUN	_	Number=Sing	1	nmod:tmod	_	_
9	and	and	CCONJ	_	_	11	cc	_	_
10	2	2	NUM	_	NumType=Card	11	nummod	_	_
11	pm	pm	NOUN	_	Number=Sing	8	conj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 nmod:tmod	color:blue
1	and	and	CCONJ	_	_	3	cc	_	_
2	from	from	ADP	_	_	3	case	_	_
3	milwaukee	milwaukee	PROPN	_	Number=Sing	0	root	_	_
4	to	to	ADP	_	_	5	case	_	_
5	atlanta	atlanta	PROPN	_	Number=Sing	3	nmod	_	_
6	before	before	ADP	_	_	8	case	_	_
7	10	10	NUM	_	NumType=Card	8	nummod	_	_
8	am	be	NOUN	_	Number=Sing	3	nmod:tmod	_	_
9	daily	daily	ADJ	_	Degree=Pos	3	amod	_	_

~~~


