---
layout: base
title:  'Statistics of csubj in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="tr_boun-dep-csubj-outer.html">csubj:outer</a></tt>.

581 nodes (0%) are attached to their parents as `csubj`.

575 instances of `csubj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.47676419965577.

The following 20 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (263; 45% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (105; 18% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (90; 15% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (64; 11% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (21; 4% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (11; 2% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (9; 2% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj	color:blue
1	Fakülteyi	fakülte	NOUN	_	Case=Acc|Number=Sing|Person=3	2	obj	_	_
2	bitirenler	bitir	VERB	Ptcp	Polarity=Pos|VerbForm=Part	6	csubj	_	_
3	en	en	ADV	_	_	4	advmod	_	_
4	uçtan	uç	NOUN	_	Case=Abl|Number=Sing|Person=3	6	obl	_	_
5	göreve	görev	NOUN	_	Case=Dat|Number=Sing|Person=3	6	obj	_	_
6	başlıyorlar	başla	VERB	Ptcp	Aspect=Prog|Evident=Nfh|Number=Plur|Person=3|Polarity=Pos|VerbForm=Part	0	root	_	_
7	mış	y	AUX	Zero	Evident=Nfh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	6	cop	_	_
8	.	.	PUNCT	Stop	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 csubj	color:blue
1	2	2	NUM	ANum	NumType=Card	6	obl	_	SpaceAfter=No
2	.	.	PUNCT	Stop	_	1	punct	_	_
3	Kitap	kitap	NOUN	_	Case=Nom|Number=Sing|Person=3	4	obj	_	_
4	okumak	oku	VERB	Vnoun	Case=Nom|Polarity=Pos|VerbForm=Vnoun	6	csubj	_	_
5	neden	neden	ADV	Ques	_	6	advmod	_	_
6	önemli	önem	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
7	dir	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
8	?	?	PUNCT	Ques	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj	color:blue
1	Daha	daha	ADV	_	_	5	advmod	_	_
2	da	da	ADV	Emph	_	1	advmod:emph	_	_
3	ne	ne	PRON	Ques	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
4	olacağı	ol	VERB	Ptcp	Aspect=Imp|Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Fut|VerbForm=Part	5	csubj	_	_
5	belli	belli	ADJ	Adj	_	0	root	_	_
6	değil	değil	AUX	Overt	Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	cop	_	SpaceAfter=No
7	.	.	PUNCT	Stop	_	5	punct	_	SpacesAfter=\n

~~~


