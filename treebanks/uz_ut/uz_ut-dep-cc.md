---
layout: base
title:  'Statistics of cc in UD_Uzbek-UT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UT: Relations: `cc`

This relation is universal.

108 nodes (2%) are attached to their parents as `cc`.

105 instances of `cc` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.22222222222222.

The following 11 pairs of parts of speech are connected with `cc`: <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-CCONJ.html">CCONJ</a></tt> (53; 49% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-CCONJ.html">CCONJ</a></tt> (33; 31% instances), <tt><a href="uz_ut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uz_ut-pos-CCONJ.html">CCONJ</a></tt> (7; 6% instances), <tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_ut-pos-CCONJ.html">CCONJ</a></tt> (5; 5% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-ADP.html">ADP</a></tt> (2; 2% instances), <tt><a href="uz_ut-pos-PART.html">PART</a></tt>-<tt><a href="uz_ut-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-SCONJ.html">SCONJ</a></tt> (2; 2% instances), <tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_ut-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="uz_ut-pos-NUM.html">NUM</a></tt>-<tt><a href="uz_ut-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="uz_ut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uz_ut-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="uz_ut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uz_ut-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 cc	color:blue
1	Oliy	oliy	ADJ	_	_	2	amod	_	_
2	sud	sud	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
3	ushbu	ushbu	DET	_	PronType=Dem	4	det	_	_
4	hukmni	hukm	NOUN	_	Case=Nom|Number=Sing	6	obj	_	_
5	o‘zgarishsiz	o‘zgarish	NOUN	_	Case=Dat	6	xcomp	_	_
6	qoldirdi	qoldir	VERB	_	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	va	va	CCONJ	_	_	9	cc	_	_
8	hukm	hukm	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	_
9	kuchga	kuch	NOUN	_	Case=Dat|Number=Sing	6	conj	_	_
10	kirdi	kir	VERB	_	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	9	compound	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 cc	color:blue
1	Ammo	ammo	CCONJ	_	_	7	cc	_	_
2	Ukraina	Ukraina	PROPN	_	Case=Nom|Number=Sing	7	nsubj	_	_
3	Rossiya	Rossiya	PROPN	_	Case=Nom|Number=Sing	6	nsubj	_	_
4	Xersonni	Xerson	PROPN	_	Case=Acc|Number=Sing	6	obj	_	_
5	jangsiz	jangsiz	ADJ	_	_	6	advmod	_	_
6	topshirishiga	topshir	VERB	_	Case=Dat|Person=3|VerbForm=Vnoun	7	ccomp	_	_
7	ishonmayapti	ishon	VERB	_	Aspect=Prog|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Buxoro	Buxoro	PROPN	_	Case=Nom|Number=Sing	4	compound	_	_
2	va	va	CCONJ	_	_	3	cc	_	_
3	Xorazm	Xorazm	PROPN	_	Case=Nom|Number=Sing	1	conj	_	_
4	viloyatlarida	viloyat	NOUN	_	Case=Loc|Number=Plur	11	obl	_	_
5	yer	yer	NOUN	_	Case=Nom|Number=Sing	6	obj	_	_
6	sotish	sot	VERB	_	VerbForm=Vnoun	8	obl	_	_
7	bilan	bilan	ADP	_	_	6	case	_	_
8	bogʻliq	bogʻliq	ADP	_	_	9	acl	_	_
9	firibgarlik	firibgarlik	NOUN	_	Case=Nom|Number=Sing	10	nmod	_	_
10	holatlari	holat	NOUN	_	Case=Nom|Number=Plur	11	nsubj	_	_
11	aniqlandi	aniqla	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


