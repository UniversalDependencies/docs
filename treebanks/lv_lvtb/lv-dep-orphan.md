---
layout: base
title:  'Statistics of orphan in UD_Latvian'
udver: '2'
---

## Treebank Statistics: UD_Latvian: Relations: `orphan`

This relation is universal.

16 nodes (0%) are attached to their parents as `orphan`.

12 instances of `orphan` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5625.

The following 10 pairs of parts of speech are connected with `orphan`: <tt><a href="lv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv-pos-NOUN.html">NOUN</a></tt> (3; 19% instances), <tt><a href="lv-pos-PRON.html">PRON</a></tt>-<tt><a href="lv-pos-PRON.html">PRON</a></tt> (3; 19% instances), <tt><a href="lv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv-pos-VERB.html">VERB</a></tt> (2; 13% instances), <tt><a href="lv-pos-PRON.html">PRON</a></tt>-<tt><a href="lv-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="lv-pos-NUM.html">NUM</a></tt>-<tt><a href="lv-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="lv-pos-NUM.html">NUM</a></tt>-<tt><a href="lv-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="lv-pos-PRON.html">PRON</a></tt>-<tt><a href="lv-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="lv-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lv-pos-INTJ.html">INTJ</a></tt> (1; 6% instances), <tt><a href="lv-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lv-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="lv-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="lv-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 orphan	color:blue
1	Tam	tas	PRON	pd0msdn	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	3	obl	3.1:obl:dat	_
2	pilnas	pilna	ADJ	affpnnp	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	3	amod	3:amod	_
3	ausis	auss	NOUN	ncfpn6	Case=Nom|Gender=Fem|Number=Plur	0	root	3.1:nsubj	_
3.1	ir	būt	VERB	vmnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	_	_	0:root	_
4	dainu	daina	NOUN	ncfpg4	Case=Gen|Gender=Fem|Number=Plur	3	orphan	3.1:iobj	_
5	un	un	CCONJ	cc	_	7	cc	7:cc	_
6	zobi	zobs	NOUN	ncmpn1	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	7:nsubj	_
7	cauri	cauri	ADJ	afmpnnp	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	3	conj	3.1:conj	_
8	teikām	teika	NOUN	ncfpd4	Case=Dat|Gender=Fem|Number=Plur	7	iobj	7:iobj	SpaceAfter=No
9	!	!	PUNCT	zs	_	3	punct	3.1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 orphan	color:blue
1	Bet	bet	CCONJ	cc	_	3	cc	3.1:cc	_
2	ko	kas	PRON	pq000an	Case=Acc|PronType=Int	3	orphan	3.1:obj	_
3	tu	tu	PRON	pp20snn	Case=Nom|Number=Sing|Person=2|PronType=Prs	0	root	3.1:nsubj	SpaceAfter=No
3.1	_	_	VERB	vm0is002sa0	Evident=Fh|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	_	_	0:root	_
4	,	,	PUNCT	zc	_	5	punct	5:punct	_
5	pabāzi	pabāzt	VERB	vmnist12san	Evident=Fh|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	3.1:conj	_
6	pagultē	pagulte	NOUN	ncfsl5	Case=Loc|Gender=Fem|Number=Sing	5	obl	5:obl:loc	SpaceAfter=No
7	.	.	PUNCT	zs	_	3	punct	3.1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 orphan	color:blue
1	Vienīgās	vienīga	ADJ	arfpnyp	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	2	amod	2:amod	_
2	rūpes	rūpes	NOUN	ncfpn5	Case=Nom|Gender=Fem|Number=Plur	0	root	2.1:nsubj	SpaceAfter=No
2.1	bija	būt	VERB	vmnisii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	_	_	0:root	_
3	,	,	PUNCT	zc	_	5	punct	5:punct	_
4	kā	kā	ADV	r0m	PronType=Int	5	advmod	5:advmod	_
5	izraudāt	izraudāt	VERB	vmnn0t2000n	Polarity=Pos|VerbForm=Inf	2	orphan	2.1:ccomp	_
6	bēdas	bēda	NOUN	ncfpa4	Case=Acc|Gender=Fem|Number=Plur	5	obj	5:obj	SpaceAfter=No
7	.	.	PUNCT	zs	_	2	punct	2.1:punct	_

~~~


