---
layout: base
title:  'Statistics of csubj in UD_Uzbek-UT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UT: Relations: `csubj`

This relation is universal.

22 nodes (0%) are attached to their parents as `csubj`.

22 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.04545454545455.

The following 12 pairs of parts of speech are connected with `csubj`: <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (6; 27% instances), <tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (3; 14% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (3; 14% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="uz_ut-pos-AUX.html">AUX</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-PART.html">PART</a></tt> (1; 5% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="uz_ut-pos-NUM.html">NUM</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="uz_ut-pos-PRON.html">PRON</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 csubj	color:blue
1	Kuppa-kunduzi	kuppa-kunduzi	ADV	_	_	7	advmod	_	_
2	ham	ham	ADV	_	_	7	advmod	_	_
3	bulutlar	bulut	NOUN	_	Case=Nom|Number=Plur	4	nmod	_	_
4	bag‘rida	bag‘ir	NOUN	_	Case=Loc|Number=Sing	6	obl	_	_
5	chaqmoqlar	chaqmoq	NOUN	_	Case=Nom|Number=Plur	6	nsubj	_	_
6	chaqnayotgani	chaqna	VERB	_	_	7	csubj	_	_
7	ko‘rinib	ko‘rin	VERB	_	VerbForm=Conv	0	root	_	_
8	turardi	tur	VERB	_	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	7	compound	_	SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 csubj	color:blue
1	Agar	agar	SCONJ	_	_	3	mark	_	_
2	bular	bu	PRON	_	Number=Plur|PronType=Dem	3	nsubj	_	_
3	birlashib	birlash	VERB	_	VerbForm=Conv	11	advcl	_	_
4	olishsa	ol	VERB	_	Mood=Cnd|Number=Plur|Person=3	3	compound	_	SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	Chin	Chin	PROPN	_	Case=Nom|Number=Sing	7	compound	_	_
7	xoqonligining	xoqonlik	NOUN	_	Case=Gen|Number=Sing|Poss=Yes	8	nmod:poss	_	_
8	kuli	kul	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	_
9	ko‘kka	ko‘k	NOUN	_	Case=Dat|Number=Sing	11	csubj	_	_
10	sovurilishi	sovur	VERB	_	VerbForm=Vnoun	9	compound	_	_
11	muqarrar	muqarrar	ADJ	_	_	0	root	_	_
12	edi	edi	AUX	_	Tense=Past	11	cop	_	SpaceAfter=No
13	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 csubj	color:blue
1	Bepoyon	bepoyon	ADJ	_	_	2	amod	_	_
2	dalalar	dala	NOUN	_	Case=Nom|Number=Plur	4	obl	_	_
3	aro	aro	ADP	_	_	2	case	_	_
4	chopib	chop	VERB	_	VerbForm=Conv	5	advcl	_	_
5	o‘ynaganlarimiz	o‘yna	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	6	csubj	_	_
6	esimda	es	NOUN	_	Case=Loc|Number=Sing	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


