---
layout: base
title:  'Statistics of ccomp in UD_Uzbek-UT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UT: Relations: `ccomp`

This relation is universal.

33 nodes (1%) are attached to their parents as `ccomp`.

33 instances of `ccomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.63636363636364.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (17; 52% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (7; 21% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt> (3; 9% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="uz_ut-pos-ADV.html">ADV</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-PART.html">PART</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 ccomp	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 ccomp	color:blue
1	Momaqaldiroq	momaqaldiroq	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
2	qanday	qanday	ADV	_	PronType=Int	3	advmod	_	_
3	hosil	hosil	NOUN	_	Case=Nom|Number=Sing	5	ccomp	_	_
4	bo‘lishini	bo‘l	VERB	_	Case=Acc|VerbForm=Vnoun	3	compound	_	_
5	ko‘rganmisiz	ko‘r	VERB	_	Mood=Int|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 ccomp	color:blue
1	Avliyolarning	avliyo	NOUN	_	Case=Gen|Number=Plur|Poss=Yes	2	nmod:poss	_	_
2	darajalari	daraja	NOUN	_	Case=Nom|Number=Plur	5	nsubj	_	_
3	mendan	men	PRON	_	Case=Abl|Number=Sing|Person=1|PronType=Prs	5	obl	_	_
4	juda	juda	ADV	_	_	5	advmod	_	_
5	yuksakda	yuksak	ADJ	_	Case=Loc	8	ccomp	_	_
6	ekanini	ekan	AUX	_	Case=Acc	5	cop	_	_
7	qalbim	qalb	NOUN	_	Case=Nom|Number=Sing	8	nsubj	_	_
8	sezadi	sez	VERB	_	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


