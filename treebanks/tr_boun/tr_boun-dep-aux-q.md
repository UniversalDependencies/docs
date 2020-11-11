---
layout: base
title:  'Statistics of aux:q in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `aux:q`

This relation is a language-specific subtype of <tt><a href="tr_boun-dep-aux.html">aux</a></tt>.

290 nodes (0%) are attached to their parents as `aux:q`.

289 instances of `aux:q` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.29310344827586.

The following 7 pairs of parts of speech are connected with `aux:q`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (142; 49% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (90; 31% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (26; 9% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (11; 4% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (10; 3% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (9; 3% instances), <tt><a href="tr_boun-pos-DET.html">DET</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux:q	color:blue
1	Konumuz	konu	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	2	nsubj	_	_
2	varsa	var	VERB	Verb	Mood=Des|Number=Sing|Person=3|Polarity=Pos	3	advcl	_	_
3	başlayalım	başla	VERB	Verb	Mood=Opt|Number=Plur|Person=1|Polarity=Pos	0	root	_	_
4	mı	mi	AUX	Ques	Aspect=Imp|Number=Sing|Person=3|Tense=Pres	3	aux:q	_	_
5	artık	artık	ADV	Adverb	_	3	advmod	_	SpaceAfter=No
6	?	?	PUNCT	Punc	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux:q	color:blue
1	PARANOYANIN	paranoya	NOUN	Noun	Case=Gen|Number=Sing|Person=3	2	nmod:poss	_	_
2	FARKINDA	fark	NOUN	Abr	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	_
3	MISINIZ	mi	AUX	Ques	Aspect=Imp|Number=Plur|Person=2|Tense=Pres	2	aux:q	_	SpaceAfter=No
4	?	?	PUNCT	Punc	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 aux:q	color:blue
1	Sana	san	PRON	Pers	Case=Dat|Number=Sing|Person=3	2	obl	_	_
2	katlanmak	katla	VERB	Verb	Case=Nom|Polarity=Pos|Voice=Pass	3	obj	_	_
3	uyumlu	uyum	ADJ	Adj	Case=Nom|Number=Sing|Person=3	6	amod	_	_
4	olmak	ol	VERB	Verb	Case=Nom|Polarity=Pos	3	compound	_	_
5	mı	mi	AUX	Ques	Aspect=Imp|Number=Sing|Person=3|Tense=Pres	3	aux:q	_	_
6	yani	yani	CCONJ	Conj	_	8	obj	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	8	punct	_	_
8	diyorum	de	VERB	Verb	Aspect=Prog|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	SpacesAfter=\n

~~~


