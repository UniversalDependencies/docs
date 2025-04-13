---
layout: base
title:  'Statistics of parataxis in UD_Uzbek-UT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UT: Relations: `parataxis`

This relation is universal.

36 nodes (1%) are attached to their parents as `parataxis`.

35 instances of `parataxis` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.13888888888889.

The following 10 pairs of parts of speech are connected with `parataxis`: <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (15; 42% instances), <tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt> (4; 11% instances), <tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (3; 8% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (3; 8% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="uz_ut-pos-INTJ.html">INTJ</a></tt>-<tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 parataxis	color:blue
1	Nega	nega	ADV	_	PronType=Int	3	advmod	_	_
2	ma’lum	ma’lum	ADJ	_	_	3	compound:lvc	_	_
3	qilmadingiz	qil	VERB	_	Mood=Int|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	_
5	ayangizning	aya	NOUN	_	Case=Gen|Number=Sing|Poss=Yes	7	nmod:poss	_	_
6	ko‘zlagan	ko‘zla	VERB	_	VerbForm=Part	7	acl	_	_
7	qizlari	qiz	NOUN	_	Case=Nom|Number=Plur	8	nsubj	_	_
8	bormi	bor	VERB	_	Mood=Int|Tense=Pres|VerbForm=Fin	3	parataxis	_	SpaceAfter=No
9	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 parataxis	color:blue
1	Turkiylarning	turkiy	ADJ	_	_	2	nmod:poss	_	_
2	otlari	ot	NOUN	_	Case=Nom|Number=Plur	3	nsubj	_	_
3	uchqur	uchqur	ADJ	_	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	o‘zlari	o‘z	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
6	dovyurak	dovyurak	ADJ	_	_	3	parataxis	_	_
7	edilar	edi	AUX	_	Number=Plur|Person=3|Tense=Past	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 parataxis	color:blue
1	Ma’rifatxonga	Ma’rifatxon	PROPN	_	Case=Dat|Number=Sing	3	iobj	_	_
2	juda	juda	ADV	_	_	3	advmod	_	_
3	ixlosmand	ixlosmand	ADJ	_	_	0	root	_	_
4	ekan	ekan	AUX	_	_	3	cop	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	bu	bu	DET	_	PronType=Dem	7	det	_	_
7	taklifni	taklif	NOUN	_	Case=Acc|Number=Sing	9	obj	_	_
8	darrov	darrov	ADV	_	_	9	advmod	_	_
9	qabul	qabul	NOUN	_	Case=Nom|Number=Sing	3	parataxis	_	_
10	qildi	qil	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	compound	_	SpaceAfter=No
11	.	.	PUNCT	_	_	9	punct	_	_

~~~


