---
layout: base
title:  'Statistics of nmod:tmod in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="tr_gb-dep-nmod-comp.html">nmod:comp</a></tt>, <tt><a href="tr_gb-dep-nmod-part.html">nmod:part</a></tt>.

63 nodes (0%) are attached to their parents as `nmod:tmod`.

62 instances of `nmod:tmod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.15873015873016.

The following 9 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (27; 43% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (13; 21% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (9; 14% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (3; 5% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:tmod	color:blue
1	Ben	ben	PRON	_	Case=Nom|Number=Sing|Person=1	4	nsubj	_	_
2	o	o	DET	_	Definite=Def|Number=Sing	3	det	_	_
3	sırada	sıra	NOUN	_	Case=Loc|Number=Sing	4	nmod:tmod	_	_
4	öğretmen	öğretmen	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
5	dim	i	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past	4	cop	_	_
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nmod:tmod	color:blue
1	Ahmet’le	Ahmet	PROPN	_	Case=Ins|Number=Sing	6	nmod	_	_
2	dün	dün	NOUN	_	Case=Nom|Number=Sing	6	nmod:tmod	_	_
3	deniz	deniz	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
4	kenarında	kenarında	ADP	_	Number[psor]=Sing|Person[psor]=3	3	case	_	_
5	yürüyüş	yürüyüş	NOUN	_	Case=Nom|Number=Sing	6	compound	_	_
6	yaptık	yap	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nmod:tmod	color:blue
1	Londra	Londra	PROPN	_	Number=Sing	5	nsubj	_	_
2	sonbaharda	sonbahar	NOUN	_	Case=Loc|Number=Sing	5	nmod:tmod	_	_
3	o	o	PRON	_	Case=Nom|Number=Sing	5	nmod	_	_
4	kadar	kadar	ADP	_	_	3	case	_	_
5	güzel	güzel	ADJ	_	_	0	root	_	_
6	olur	ol	AUX	_	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Tense=Pres	5	cop	_	_
7	ki	ki	ADV	_	_	5	advmod:emph	_	SpaceAfter=No
8	!	!	PUNCT	_	_	5	punct	_	_

~~~


