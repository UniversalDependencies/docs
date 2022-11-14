---
layout: base
title:  'Statistics of discourse:q in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `discourse:q`

This relation is a language-specific subtype of <tt><a href="tr_boun-dep-discourse.html">discourse</a></tt>.

287 nodes (0%) are attached to their parents as `discourse:q`.

285 instances of `discourse:q` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.37630662020906.

The following 8 pairs of parts of speech are connected with `discourse:q`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (143; 50% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (85; 30% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (20; 7% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (14; 5% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (10; 3% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (8; 3% instances), <tt><a href="tr_boun-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (6; 2% instances), <tt><a href="tr_boun-pos-DET.html">DET</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 discourse:q	color:blue
1	Konumuz	konu	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	2	nsubj	_	_
2	var	var	NOUN	Exist	Case=Nom|Number=Sing|Person=3	4	advcl	_	_
3	sa	y	AUX	Zero	Mood=Cnd|Number=Sing|Person=1|Polarity=Pos	2	cop	_	_
4	başlayalım	başla	VERB	_	Mood=Opt|Number=Plur|Person=1|Polarity=Pos	0	root	_	_
5	mı	mi	AUX	Ques	Aspect=Imp|Number=Sing|Person=3|Tense=Pres	4	discourse:q	_	_
6	artık	artık	ADV	_	_	4	advmod	_	SpaceAfter=No
7	?	?	PUNCT	Ques	_	4	punct	_	SpacesAfter=\r\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse:q	color:blue
1	PARANOYANIN	paranoya	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod:poss	_	_
2	FARKINDA	fark	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	_
3	MISINIZ	mi	AUX	Ques	Aspect=Imp|Number=Plur|Person=2|Tense=Pres	2	discourse:q	_	SpaceAfter=No
4	?	?	PUNCT	Ques	_	2	punct	_	SpacesAfter=\r\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 discourse:q	color:blue
1	Sana	san	PRON	Pers	Case=Dat|Number=Sing|Person=3	2	obl	_	_
2	katlanmak	katla	VERB	Vnoun	Case=Nom|Polarity=Pos|VerbForm=Vnoun|Voice=Pass	3	obj	_	_
3	uyumlu	uyumlu	ADJ	Adj	_	6	amod	_	DerivedFrom=uyum
4	olmak	ol	VERB	Vnoun	Case=Nom|Polarity=Pos|VerbForm=Vnoun	3	compound	_	_
5	mı	mi	AUX	Ques	Aspect=Imp|Number=Sing|Person=3|Tense=Pres	3	discourse:q	_	_
6	yani	yani	CCONJ	Conj	_	8	obj	_	SpaceAfter=No
7	,	,	PUNCT	Comma	_	8	punct	_	_
8	diyorum	de	VERB	_	Aspect=Prog|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Stop	_	8	punct	_	SpacesAfter=\r\n

~~~


