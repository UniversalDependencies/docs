---
layout: base
title:  'Statistics of nmod in UD_Kalmyk-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Kalmyk-GDUD: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="xal_gdud-dep-nmod-poss.html">nmod:poss</a></tt>.

8 nodes (2%) are attached to their parents as `nmod`.

5 instances of `nmod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.375.

The following 6 pairs of parts of speech are connected with `nmod`: <tt><a href="xal_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xal_gdud-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="xal_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xal_gdud-pos-PRON.html">PRON</a></tt> (2; 25% instances), <tt><a href="xal_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xal_gdud-pos-NUM.html">NUM</a></tt> (1; 13% instances), <tt><a href="xal_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xal_gdud-pos-PROPN.html">PROPN</a></tt> (1; 13% instances), <tt><a href="xal_gdud-pos-NUM.html">NUM</a></tt>-<tt><a href="xal_gdud-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="xal_gdud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="xal_gdud-pos-PROPN.html">PROPN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nmod	color:blue
1	ger-t-än	ger	NOUN	_	Case=Dat|Number=Plur|Reflex=Yes	4	nmod	_	_
2	tus	tus	NOUN	_	_	4	nsubj	_	_
3	uga	uga	AUX	_	Polarity=Neg	4	cop	_	_
4	jovačə	jovačə	NOUN	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	tiig-žə	tiig	VERB	_	_	0	root	_	Deriv=CvIpfv
2	naad-də-m	naad	VERB	_	Aspect=Hab	1	xcomp	_	CopType=Aff
3	bišə	bišə	PART	_	Polarity=Neg	2	advmod	_	_
4	küü-n-ä	küü	PRON	_	Number=Sing|PronType=Prs	5	nmod	_	Case=Ext
5	amə-n-də	amə	NOUN	_	Case=Dat|Number=Sing	2	obj	_	_
6	odekolon	odekolon	NOUN	_	_	7	obj	_	_
7	ke-d-ü	ke	VERB	_	Mood=Int	1	ccomp	_	Deriv=PcHab

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nmod	color:blue
1	a	a	CCONJ	_	_	5	cc	_	_
2	b	b	ADV	_	_	5	discourse	_	_
3	42	42	NUM	_	_	5	nmod	_	_
4	godə	god	NOUN	_	_	3	nmod	_	Case=Ext
5	äärm-də	äärm	NOUN	_	Case=Dat	6	obl	_	_
6	od-ad	od	VERB	_	_	0	root	_	Deriv=CvAnt

~~~


