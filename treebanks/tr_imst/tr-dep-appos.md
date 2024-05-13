---
layout: base
title:  'Statistics of appos in UD_Turkish'
udver: '2'
---

## Treebank Statistics: UD_Turkish: Relations: `appos`

This relation is universal.

51 nodes (0%) are attached to their parents as `appos`.

34 instances of `appos` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.31372549019608.

The following 9 pairs of parts of speech are connected with `appos`: <tt><a href="tr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (22; 43% instances), <tt><a href="tr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (20; 39% instances), <tt><a href="tr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="tr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="tr-pos-NUM.html">NUM</a></tt>-<tt><a href="tr-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="tr-pos-PRON.html">PRON</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="tr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="tr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 appos	color:blue
1	Ağbisi	ağbi	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	2	appos	_	_
2	Firuz	Firuz	PROPN	Prop	Case=Nom|Number=Sing|Person=3	5	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	5	punct	_	_
4	savcı	savcı	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	obj	_	_
5	olmuş	ol	VERB	Verb	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 appos	color:blue
1	Dört	dört	NUM	ANum	NumType=Card	2	nummod	_	_
2	kişi	kişi	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
3	ydi	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	2	cop	_	_
4	bunlar	bu	PRON	Demons	Case=Nom|Number=Plur|Person=3|PronType=Dem	2	nsubj	_	SpaceAfter=No
5	:	:	PUNCT	Punc	_	2	punct	_	_
6	Sav	sav	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	appos	_	_
7	ve	ve	CCONJ	Conj	_	8	cc	_	_
8	Karaosmanoğlu	Karaosmanoğlu	PROPN	Prop	Case=Nom|Number=Sing|Person=3	6	conj	_	_
9	Atila'lar	Atila	PROPN	Prop	Case=Nom|Number=Plur|Person=3	8	flat	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 appos	color:blue
1	Uçağın	uçak	NOUN	Noun	Case=Gen|Number=Sing|Person=3	2	nmod	_	_
2	gövde	gövde	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	nmod:poss	_	_
3	(	(	PUNCT	Punc	_	4	punct	_	SpaceAfter=No
4	tekne	tekne	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	appos	_	SpaceAfter=No
5	)	)	PUNCT	Punc	_	4	punct	_	_
6	sigortasının	sigorta	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	nmod:poss	_	_
7	tüm	tüm	DET	Det	_	8	det	_	_
8	riskinin	risk	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	19	obj	_	_
9	Türk	Türk	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	15	nmod:poss	_	_
10	Hava	hava	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	flat	_	_
11	Yolları	yol	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	9	flat	_	_
12	(	(	PUNCT	Punc	_	13	punct	_	SpaceAfter=No
13	THY	Thy	NOUN	Abr	Abbr=Yes|Case=Nom|Number=Sing|Person=3	9	appos	_	SpaceAfter=No
14	)	)	PUNCT	Punc	_	13	punct	_	_
15	tarafından	taraf	NOUN	Noun	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	19	nsubj	_	_
16	yabancı	yabancı	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	18	amod	_	_
17	reasürans	reasürans	NOUN	Noun	Case=Nom|Number=Sing|Person=3	18	nmod:poss	_	_
18	şirketlerine	şirket	NOUN	Noun	Case=Dat|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3	19	nmod	_	_
19	sigorta	sigorta	NOUN	Noun	Case=Nom|Number=Sing|Person=3	21	obj	_	_
20	ettirildiğini	et	VERB	Verb	Aspect=Perf|Case=Acc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=CauPass	19	compound:lvc	_	_
21	bildiren	bil	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Cau	26	acl	_	_
22	Ray	Ray	PROPN	Prop	Case=Nom|Number=Sing|Person=3	25	nmod:poss	_	_
23	Sigorta	sigorta	NOUN	Noun	Case=Nom|Number=Sing|Person=3	22	flat	_	_
24	Genel	genel	ADJ	Adj	_	25	amod	_	_
25	Müdürü	müdür	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	26	nmod	_	_
26	Ercüment	Ercüment	PROPN	Prop	Case=Nom|Number=Sing|Person=3	36	nsubj	_	_
27	Çetin	Çetin	PROPN	Prop	Case=Nom|Number=Sing|Person=3	26	compound	_	_
28	Alanya	Alanya	PROPN	Prop	Case=Nom|Number=Sing|Person=3	26	flat	_	SpaceAfter=No
29	,	,	PUNCT	Punc	_	36	punct	_	_
30	yolcu	yolcu	NOUN	Noun	Case=Nom|Number=Sing|Person=3	32	compound	_	_
31	mali	mali	ADJ	Adj	_	32	amod	_	_
32	mesuliyeti	mesuliyet	NOUN	Noun	Case=Acc|Number=Sing|Person=3	33	nmod:poss	_	_
33	sigortalarının	sigorta	NOUN	Noun	Case=Gen|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	35	nmod:poss	_	_
34	kendilerinde	kendi	PRON	Reflex	Case=Loc|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3|Reflex=Yes	35	obl	_	_
35	olduğunu	ol	VERB	Verb	Aspect=Perf|Case=Acc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	36	obj	_	_
36	söyledi	söyle	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
37	.	.	PUNCT	Punc	_	36	punct	_	_

~~~


