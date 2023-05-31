---
layout: base
title:  'Statistics of appos in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `appos`

This relation is universal.

146 nodes (1%) are attached to their parents as `appos`.

146 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.96575342465753.

The following 16 pairs of parts of speech are connected with `appos`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (84; 58% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (16; 11% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (14; 10% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (5; 3% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (5; 3% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	Eşi	eş	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	_
2	Alice	_	PROPN	PROPN	_	1	appos	_	Proper=True|SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	"	"	PUNCT	``	_	8	punct	_	SpaceAfter=No
5	Kendi	kendi	PRON	PRR	Number=Sing|Reflex=Yes	6	amod	_	_
6	sağlığını	sağlık	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	_
7	tamamen	tamamen	ADV	RB	_	8	advmod	_	_
8	ihmal	ihmal	NOUN	NN	Number=Sing	12	xcomp	_	_
9	etmesi	et	VERB	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Vnoun	8	compound:lvc	_	SpaceAfter=No
10	.	_	PUNCT	.	_	8	punct	_	SpaceAfter=No
11	"	_	PUNCT	''	_	8	punct	_	_
12	dedi	de	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 appos	color:blue
1	İlk	ilk	ADJ	JJ	Number=Sing	2	amod	_	_
2	kralları	kral	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=3	3	nsubj	_	_
3	Mojmír	Mojmír	PROPN	PROPN	Number=Sing	0	root	_	Proper=True
4	I	i	NUM	CD	_	3	compound	_	Proper=True
5	(	(	PUNCT	(	_	10	punct	_	SpaceAfter=No
6	830	_	NUM	CD	Number=Sing	9	nmod:poss	_	SpaceAfter=No
7	-	-	PUNCT	-	_	8	punct	_	SpaceAfter=No
8	846	846	NUM	CD	Number=Sing	6	conj	_	_
9	arasında	ara	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	obl	_	_
10	hükümdar	hükümdar	NOUN	NN	Number=Sing	3	appos	_	SpaceAfter=No
11	)	)	PUNCT	)	_	10	punct	_	_
12	olmuştur	ol	AUX	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	3	cop	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 appos	color:blue
1	1.	1	NUM	CD	Number=Sing|NumType=Ord	2	amod	_	Proper=True
2	Henry'nin	Henry	PROPN	PROPN	Case=Gen|Number=Sing	3	nmod:poss	_	Proper=True
3	yönetiminde	yönetim	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	obl	_	_
4	sadece	sadece	ADV	RB	_	7	advmod	_	_
5	bir	bir	DET	DT	Definite=Ind|Polarity=Pos	6	det	_	_
6	avuç	avuç	NOUN	NN	Number=Sing	7	clf	_	_
7	insan	insan	NOUN	NN	Case=Nom|Number=Sing	11	nsubj	_	_
8	(	(	PUNCT	(	_	9	punct	_	SpaceAfter=No
9	kontluklar	kontluk	NOUN	NN	Number=Plur	7	appos	_	SpaceAfter=No
10	)	)	PUNCT	)	_	9	punct	_	_
11	bulunmuş	bul	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
12	ve	ve	CCONJ	CCONJ	_	16	cc	_	_
13	bunlar	bu	PRON	PRI	Case=Nom|Number=Plur|Polarity=Pos	16	nsubj	_	_
14	büyük	büyük	ADJ	JJ	Number=Sing	15	amod	_	_
15	oranda	oran	NOUN	NN	Case=Loc|Number=Sing	16	obl	_	_
16	sembolik	sembolik	ADJ	JJ	Number=Sing	11	conj	_	_
17	kalmıştır	kal	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	16	compound	_	SpaceAfter=No
18	.	.	PUNCT	.	_	16	punct	_	_

~~~


