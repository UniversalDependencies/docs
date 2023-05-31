---
layout: base
title:  'Statistics of parataxis in UD_Teko-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Teko-TuDeT: Relations: `parataxis`

This relation is universal.

74 nodes (3%) are attached to their parents as `parataxis`.

73 instances of `parataxis` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.36486486486486.

The following 9 pairs of parts of speech are connected with `parataxis`: <tt><a href="eme_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="eme_tudet-pos-VERB.html">VERB</a></tt> (46; 62% instances), <tt><a href="eme_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="eme_tudet-pos-NOUN.html">NOUN</a></tt> (11; 15% instances), <tt><a href="eme_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eme_tudet-pos-VERB.html">VERB</a></tt> (7; 9% instances), <tt><a href="eme_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eme_tudet-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="eme_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eme_tudet-pos-ADP.html">ADP</a></tt> (2; 3% instances), <tt><a href="eme_tudet-pos-ADV.html">ADV</a></tt>-<tt><a href="eme_tudet-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="eme_tudet-pos-PRON.html">PRON</a></tt>-<tt><a href="eme_tudet-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="eme_tudet-pos-PROPN.html">PROPN</a></tt>-<tt><a href="eme_tudet-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="eme_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="eme_tudet-pos-INTJ.html">INTJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 parataxis	color:blue
1	"	"	PUNCT	punct	_	2	punct	_	_
2	daʔudʒi	ʔu	VERB	v	Number=Sing|Person=1|Polarity=Neg	0	root	_	_
3	"	"	PUNCT	punct	_	2	punct	_	_
4	,	,	PUNCT	punct	_	5	punct	_	_
5	eʔi	eʔi	VERB	v	Person=3	2	parataxis	_	_
6	idʒupe	dʒupe	ADP	posp	Case=Dat|Rel=NCont	5	obl	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 parataxis	color:blue
1	lapotarupi	lapot	NOUN	n	Case=Ref|Rel=Cont	2	obl	_	_
2	omãʔẽo	mãʔẽ	VERB	v	Aspect=Cont|Person=3	0	root	_	_
3	,	,	PUNCT	punct	_	2	punct	_	_
4	zawara	zawar	NOUN	n	Case=Ref	5	nmod	_	_
5	raʔɨr	aʔɨr	NOUN	n	Rel=Cont	2	parataxis	_	_
6	ikiʔɨ	kiʔɨ	ADV	adv	_	5	advmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis	color:blue
1	apamanẽ	apam	NOUN	n	Case=Ref|Contrast=Yes	2	nsubj	_	_
2	nõdeapisitanẽ	apisi	NOUN	n	Clusivity=In|Mood=Des|Number=Plur|Person=1	0	root	_	_
3	,	,	PUNCT	punct	_	2	punct	_	_
4	eʔi	eʔi	VERB	v	Person=3	2	parataxis	_	_
5	tekokom	teko	PROPN	propn	Number=Plur	4	nsubj	_	_

~~~


