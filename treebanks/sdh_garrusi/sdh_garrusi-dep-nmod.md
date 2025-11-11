---
layout: base
title:  'Statistics of nmod in UD_Southern_Kurdish-Garrusi'
udver: '2'
---

## Treebank Statistics: UD_Southern_Kurdish-Garrusi: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="sdh_garrusi-dep-nmod-poss.html">nmod:poss</a></tt>.

20 nodes (1%) are attached to their parents as `nmod`.

17 instances of `nmod` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `nmod`: <tt><a href="sdh_garrusi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sdh_garrusi-pos-PRON.html">PRON</a></tt> (13; 65% instances), <tt><a href="sdh_garrusi-pos-ADV.html">ADV</a></tt>-<tt><a href="sdh_garrusi-pos-PRON.html">PRON</a></tt> (3; 15% instances), <tt><a href="sdh_garrusi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sdh_garrusi-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="sdh_garrusi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sdh_garrusi-pos-X.html">X</a></tt> (1; 5% instances), <tt><a href="sdh_garrusi-pos-PRON.html">PRON</a></tt>-<tt><a href="sdh_garrusi-pos-PART.html">PART</a></tt> (1; 5% instances), <tt><a href="sdh_garrusi-pos-PRON.html">PRON</a></tt>-<tt><a href="sdh_garrusi-pos-PRON.html">PRON</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod	color:blue
1	Îvet	îvet	NOUN	_	_	3	compound:lvc	_	_
2	î	î	PRON	_	_	1	nmod	_	_
3	kird	kirdin	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	kumek	kumek	NOUN	_	Number=Sing	7	compound:lvc	_	_
5	i	i	ADP	_	_	4	case	_	_
6	pîyayege	pîya	NOUN	_	Definite=Def|Number=Sing	7	obl	_	_
7	bikey	kirdin	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	3	parataxis	_	_
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod	color:blue
1	Hatin	Hatin	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	e	e	ADP	_	ExtPos=ADP	1	case	_	_
3	nezîk	nezîk	ADV	_	_	1	obl	_	_
4	î	î	PRON	_	Number=Sing|Person=3	3	nmod	_	_
5	kumek	kumek	NOUN	_	Number=Sing	7	compound:lvc	_	_
6	î	î	PRON	_	Number=Sing|Person=3	5	nmod	_	_
7	biken	kirdin	VERB	_	Mood=Sub|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	1	acl:relcl	_	_
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	Yêkileyan	Yêki	PRON	_	Definite=Ind|Number=Plur	3	nsubj	_	_
2	xem	xem	ADJ	_	_	3	compound:lvc	_	_
3	dû	bîgin	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	kula’i	kula	NOUN	_	Number=Sing	5	nmod	_	_
5	kuře	kuř	NOUN	_	Number=Sing	6	obj	_	_
6	elgîrî	elgîrtin	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


