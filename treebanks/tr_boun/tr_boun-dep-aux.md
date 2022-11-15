---
layout: base
title:  'Statistics of aux in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="tr_boun-dep-aux-q.html">aux:q</a></tt>.

458 nodes (0%) are attached to their parents as `aux`.

457 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2292576419214.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (222; 48% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (112; 24% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (77; 17% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (28; 6% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (9; 2% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (6; 1% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Yazık	yazık	NOUN	_	Case=Nom|Number=Sing|Person=3	6	advcl	_	_
2	ki	ki	PART	Attr	_	1	mark	_	_
3	toplum	toplum	NOUN	_	Case=Nom|Number=Sing|Person=3	6	advcl	_	_
4	olarak	ol	AUX	Conv	Mood=Imp|Polarity=Pos|VerbForm=Conv	3	aux	_	_
5	bunun	bu	PRON	Demons	Case=Gen|Number=Sing|Person=3	6	nmod:poss	_	_
6	farkında	fark	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	_
7	değiliz	değil	AUX	Overt	Number=Plur|Person=1|Polarity=Pos|Tense=Pres	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	Stop	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Birinin	biri	PRON	Quant	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	2	nsubj	_	_
2	sevindiğine	sevin	VERB	Ptcp	Aspect=Perf|Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	4	obl	_	_
3	ötekinin	öteki	NOUN	_	Case=Gen|Number=Sing|Person=3	4	nsubj	_	_
4	sevinmesi	sevin	VERB	Vnoun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|VerbForm=Vnoun	5	csubj	_	_
5	mümkün	mümkün	ADJ	Adj	_	0	root	_	_
6	değildir	değil	AUX	Overt	Mood=Gen|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	Stop	_	5	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux	color:blue
1	Bu	bu	DET	Det	_	2	det	_	_
2	sayıya	sayı	NOUN	_	Case=Dat|Number=Sing|Person=3	3	obl	_	_
3	ulaşılamazsa	ulaş	VERB	_	Aspect=Hab|Mood=Cnd|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|Voice=Pass	6	advcl	_	SpaceAfter=No
4	,	,	PUNCT	Comma	_	6	punct	_	_
5	paket	paket	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nsubj	_	_
6	reddedilmiş	reddet	VERB	Ptcp	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|VerbForm=Part	0	root	_	_
7	olacak	ol	AUX	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Fut	6	aux	_	SpaceAfter=No
8	.	.	PUNCT	Stop	_	6	punct	_	SpacesAfter=\n

~~~


