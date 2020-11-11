---
layout: base
title:  'Statistics of det:poss in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="akk_riao-dep-det.html">det</a></tt>.

1780 nodes (8%) are attached to their parents as `det:poss`.

1780 instances of `det:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `det:poss`: <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (1751; 98% instances), <tt><a href="akk_riao-pos-DET.html">DET</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (29; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 det:poss	color:blue
1	Bi-x	_	PROPN	_	Gender=Masc	0	root	0:root	_
2	x	_	NOUN	_	_	1	appos	1:appos	_
3	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	2	det:poss	2:det:poss	_
4	ša	ša	ADP	DET	_	5	case	5:case	ša₂
5	Amme-baʾli	Ammi-baʾal	PROPN	PN	Gender=Masc	2	nmod	2:nmod	{m}am-me-ba-aʾ-li

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 det:poss	color:blue
1	eli	eli	ADP	PRP	_	2	case	2:case	UGU
2	kalî	kalû	DET	N	_	4	amod	4:amod	DU₃-ši-na
3	šina	_	PRON	_	Gender=Fem|Number=Plur|Person=3	2	det:poss	2:det:poss	_
4	mātāti	mātu	NOUN	N	Gender=Fem|Nounbase=Free|Number=Plur	0	root	0:root	KUR.KUR.MEŠ

~~~


