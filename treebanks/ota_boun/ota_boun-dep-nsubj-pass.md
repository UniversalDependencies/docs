---
layout: base
title:  'Statistics of nsubj:pass in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ota_boun-dep-nsubj.html">nsubj</a></tt>.

22 nodes (0%) are attached to their parents as `nsubj:pass`.

22 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.40909090909091.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (14; 64% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (3; 14% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:pass	color:blue
1	Herkesin	herkes	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod:poss	_	_
2	yüzünde	yüz	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obl	_	_
3	alâim-i	alâim-i	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nsubj:pass	_	_
4	teessür	teessür	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nmod:poss	_	_
5	görüldü	gör	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Pass	0	root	_	_
6	.	.	PUNCT	Stop	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 nsubj:pass	color:blue
1	Nihayet	nihayet	ADV	_	_	21	advmod	_	_
2	,	,	PUNCT	Comma	_	21	punct	_	_
3	mebde-i	mebde-i	NOUN	_	Case=Nom|Number=Sing|Person=3	5	xcomp	_	_
4	kelâm	kelâm	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nmod:poss	_	_
5	kabul	kabul	NOUN	_	Case=Nom|Number=Sing|Person=3	7	acl	_	_
6	ettiğimiz	et	VERB	Ptcp	Aspect=Perf|Number[psor]=Plur|Person[psor]=1|Polarity=Pos|Tense=Past|VerbForm=Part	5	compound:lvc	_	_
7	tarihten	tarih	NOUN	_	Case=Abl|Number=Sing|Person=3	9	obl	_	_
8	dört	dört	NUM	ANum	NumType=Card	9	nummod	_	_
9	gün	gün	NOUN	_	Case=Nom|Number=Sing|Person=3	21	obl	_	_
10	evvel	evvel	ADP	PCAbl	_	7	case	_	_
11	,	,	PUNCT	Comma	_	21	punct	_	_
12	15	15	NUM	ANum	NumType=Card	13	nummod	_	_
13	Mayıs	mayıs	NOUN	_	Case=Nom|Number=Sing|Person=3	21	obl	_	_
14	335’te	335	NUM	Year	Case=Loc|Number=Sing|Person=3	21	obl	_	_
15	İtilâf	İtilâf	PROPN	_	Case=Nom|Number=Sing|Person=3	16	nmod:poss	_	_
16	Devletleri’nin	devlet	NOUN	_	Case=Gen|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	17	nmod:poss	_	_
17	muvâfakatiyle	muvâfakat	NOUN	_	Case=Ins|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	21	nmod	_	_
18	Yunan	Yunan	PROPN	_	Case=Nom|Number=Sing|Person=3	19	nmod:poss	_	_
19	ordusu	ordu	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	21	nsubj:pass	_	_
20	İzmir’e	İzmir	PROPN	Place	Case=Dat|Number=Sing|Person=3	21	obl	_	_
21	ihraç	ihraç	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
22	ediliyor	et	VERB	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|Voice=Pass	21	compound:lvc	_	_
23	.	.	PUNCT	Stop	_	22	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 nsubj:pass	color:blue
1	Şarkta	şark	NOUN	_	Case=Loc|Number=Sing|Person=3	17	obl	_	_
2	,	,	PUNCT	Comma	_	3	punct	_	_
3	Erzurum’da	Erzurum	PROPN	Place	Case=Loc|Number=Sing|Person=3	17	obl	_	_
4	ve	ve	CCONJ	_	_	5	cc	_	_
5	Elaziz’de	Elaziz	PROPN	Place	Case=Loc|Number=Sing|Person=3	17	obl	_	_
6	merkez-i	merkez-i	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
7	umumisi	umumi	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	amod	_	_
8	İstanbul’da	İstanbul	PROPN	Place	Case=Loc|Number=Sing|Person=3	9	obl	_	_
9	olmak	ol	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	17	obl	_	_
10	üzere	üzere	ADP	PCNom	_	9	case	_	_
11	Vilâyât-ı	Vilâyât-i	PROPN	_	Case=Nom|Number=Sing|Person=3	14	nmod:poss	_	_
12	Şarkiye	Şarkiye	PROPN	_	Case=Nom|Number=Sing|Person=3	11	nmod:poss	_	_
13	Müdafaa-i	Müdafaa-i	PROPN	_	Case=Nom|Number=Sing|Person=3	16	nmod:poss	_	_
14	Hukuk-ı	Hukuk-i	PROPN	_	Case=Nom|Number=Sing|Person=3	13	obj	_	_
15	Milliye	milli	PROPN	_	Case=Nom|Number=Sing|Person=3	14	nmod:poss	_	_
16	Cemiyeti	cemiyet	PROPN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	17	nsubj:pass	_	_
17	teşkil	teşkil	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
18	edilmişti	et	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Pass	17	compound:lvc	_	_
19	.	.	PUNCT	Stop	_	17	punct	_	_

~~~


