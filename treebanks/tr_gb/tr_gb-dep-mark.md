---
layout: base
title:  'Statistics of mark in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `mark`

This relation is universal.

196 nodes (1%) are attached to their parents as `mark`.

134 instances of `mark` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.98469387755102.

The following 10 pairs of parts of speech are connected with `mark`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADP.html">ADP</a></tt> (93; 47% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-SCONJ.html">SCONJ</a></tt> (75; 38% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-SCONJ.html">SCONJ</a></tt> (9; 5% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-ADP.html">ADP</a></tt> (5; 3% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-ADP.html">ADP</a></tt> (4; 2% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-SCONJ.html">SCONJ</a></tt> (4; 2% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mark	color:blue
1	Bugün	bugün	NOUN	_	Case=Nom|Number=Sing	3	obl:tmod	_	_
2	Ziya’yla	Ziya	PROPN	_	Case=Ins|Number=Sing	3	obl	_	_
3	buluştuğunuz	buluştuk	VERB	_	Mood=Ind|Number[psor]=Plur|Person[psor]=2|Tense=Past|VerbForm=Part	6	obl:tmod	_	_
4	zaman	zaman	ADP	_	Case=Nom|Number=Sing	3	mark	_	_
5	bana	ben	PRON	_	Case=Dat|Number=Sing|Person=1|Polarity=Pos	6	nmod	_	_
6	telefon	telefon	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
7	edin	et	VERB	_	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	compound	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 mark	color:blue
1	Eğer	eğer	SCONJ	_	_	4	mark	_	_
2	sokağa	sokak	NOUN	_	Case=Dat|Number=Sing	3	obl	_	_
3	çıkmak	çık	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	4	xcomp	_	_
4	istiyorsan	iste	VERB	_	Aspect=Prog|Evident=Fh|Mood=Cnd|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	…	…	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 mark	color:blue
1	Bildiğim	bil	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1|Tense=Past|VerbForm=Part	2	csubj:cop	_	_
2	şu	şu	PRON	_	Case=Nom|Number=Sing	0	root	_	_
3	ki	ki	SCONJ	_	_	8	mark	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	herkesin	herkes	PRON	_	Case=Gen|Number=Sing|Person=3	8	nsubj	_	_
6	tatile	tatil	NOUN	_	Case=Dat|Number=Sing	8	obl	_	_
7	ihtiyacı	ihtiyaç	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	compound	_	_
8	var	var	ADJ	_	_	2	parataxis	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


