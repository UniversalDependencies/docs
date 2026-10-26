---
layout: base
title:  'Statistics of csubj in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `csubj`

This relation is universal.

3 nodes (0%) are attached to their parents as `csubj`.

3 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj	color:blue
1	Anasının	ana	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj	_	_
2	kitab	kitab	NOUN	_	Case=Nom|Number=Sing	3	obj	_	_
3	oxuması	oku	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	6	csubj	_	_
4	Denizin	Deniz	PROPN	_	Case=Gen|Number=Sing	5	nsubj	_	_
5	yuxlamasını	yuxla	VERB	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	6	ccomp	_	_
6	rahatlaşdırır	rahatlaş	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Cau	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj	color:blue
1	Uşaqlara	uşaq	NOUN	_	Case=Dat|Number=Plur	3	obl	_	_
2	kitab	kitab	NOUN	_	Case=Nom|Number=Sing	3	obj	_	_
3	oxumaq	oxu	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	6	csubj	_	_
4	təkamulları	təkamul	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Plur|Person[psor]=3	6	obl	_	_
5	için	için	ADP	_	_	4	case	_	_
6	əhəmmiyətlidir	əhəmmiyətl	ADJ	_	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


