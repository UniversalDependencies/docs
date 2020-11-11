---
layout: base
title:  'Statistics of dep in UD_Tupinamba-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Tupinamba-TuDeT: Relations: `dep`

This relation is universal.

4 nodes (5%) are attached to their parents as `dep`.

4 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.25.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="tpn_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tpn_tudet-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="tpn_tudet-pos-ADV.html">ADV</a></tt>-<tt><a href="tpn_tudet-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="tpn_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tpn_tudet-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dep	color:blue
1	Seʔõawera	eʔõ	NOUN	n	Rel=NCont|Tense=Past	0	root	_	_
2	resépe	esé	ADP	pp	_	1	case	_	_
3	Tupã	tupã	NOUN	n	_	5	nmod	_	_
4	Tuβa	uβ	NOUN	n	Case=Ref|Rel=Abs	3	dep	_	_
5	ɲɨrõkatúramo	ɲɨrõkatú	NOUN	n	Nomz=Circ	1	dep	_	_
6	aséβe	asé	PRON	pro	PronType=Prs	5	obl	_	_
7	?	?	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 dep	color:blue
1	Marã	marã	ADV	adv	_	0	root	0:root	_
2	ojkóβo	ojkó	VERB	vi	Number=Sing|Person=3|VerbForm=Ger	6	advcl	6:advcl	_
3	pe	pe	PART	pcl	_	2	discourse	2:discourse	_
4	teko	eko	NOUN	n	Rel=Abs	6	nmod	6:nmod	_
5	angaipaβa	angaipaβ	NOUN	n	Case=Ref	4	nmod	4:nmod	_
6	ʔóki	ʔok	NOUN	n	_	1	dep	1:dep	_
7	?	?	PUNCT	punct	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 dep	color:blue
1	O	o	PRON	pro	Reflex=Yes	2	nmod	2:nmod	_
2	emimotárɨβo	emimotár	NOUN	n	Case=Loc	0	root	0:root	_
3	épe	épe	PART	pcl	_	2	discourse	2:discourse	_
4	erimbaʔe	erimbaʔe	ADV	adv	_	2	advmod	2:advmod	_
5	i	i	PRON	pro	_	6	nmod	6:nmod	_
6	ɲemeʔẽngi	meʔẽng	NOUN	n	Nomz=Circ|Reflex=Yes	2	appos	2:appos	_
7	ogupjarama	upjaram	NOUN	n	Reflex=Yes	6	obl	6:obl	_
8	supé	supé	ADP	pp	_	7	case	7:case	_
9	oɲeraneʔɨma	ɲeran	VERB	v	Polarity=Neg|VerbForm=Ger	6	dep	6:dep	_
10	?	_	PUNCT	punct	_	2	punct	2:punct	_

~~~


