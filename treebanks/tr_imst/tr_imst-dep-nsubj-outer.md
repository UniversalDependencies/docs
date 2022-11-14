---
layout: base
title:  'Statistics of nsubj:outer in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="tr_imst-dep-nsubj.html">nsubj</a></tt>.

9 nodes (0%) are attached to their parents as `nsubj:outer`.

9 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 10.8888888888889.

The following 6 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (3; 33% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt> (2; 22% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-NUM.html">NUM</a></tt> (1; 11% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-PRON.html">PRON</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:outer	color:blue
1	Eski	eski	ADJ	Adj	_	2	amod	_	_
2	çamlar	çam	NOUN	Noun	Case=Nom|Number=Plur|Person=3	8	nsubj:outer	_	_
3	bardak	bardak	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	conj	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	3	punct	_	_
5	eski	eski	ADJ	Adj	_	6	amod	_	_
6	komünistler	komünist	NOUN	Noun	Case=Nom|Number=Plur|Person=3	8	nsubj	_	_
7	yeşil	yeşil	ADJ	Adj	_	8	obj	_	_
8	oldu	ol	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:outer	color:blue
1	Cevat	Cevat	PROPN	Prop	Case=Nom|Number=Sing|Person=3	7	nsubj:outer	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	7	punct	_	_
3	Nasıl	nasıl	ADV	Adverb	_	7	advmod	_	_
4	yani	yani	CCONJ	Conj	_	3	compound	_	SpaceAfter=No
5	?	?	PUNCT	Punc	_	4	punct	_	_
6	diye	diye	ADP	PCNom	_	3	case	_	_
7	sordu	sor	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	7	punct	_	_
9	Selahattin	Selahattin	PROPN	Prop	Case=Nom|Number=Sing|Person=3	7	nsubj	_	_
10	de	de	CCONJ	Conj	_	9	advmod:emph	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	10	punct	_	_
12	Rahip	rahip	NOUN	Noun	Case=Nom|Number=Sing|Person=3	13	obj	_	_
13	bulup	bul	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Conv	14	advcl	_	_
14	günah	günah	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	conj	_	_
15	mı	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	14	aux:q	_	_
16	çıkaralım	çıkar	VERB	Verb	Aspect=Perf|Mood=Opt|Number=Plur|Person=1|Polarity=Pos|Tense=Pres	14	compound	_	SpaceAfter=No
17	?	?	PUNCT	Punc	_	16	punct	_	_
18	diye	diye	ADP	PCNom	_	14	case	_	SpaceAfter=No
19	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 29 nsubj:outer	color:blue
1	Elektrozayıf	elektrozayıf	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	nmod:poss	_	_
2	kuramın	kuram	NOUN	Noun	Case=Gen|Number=Sing|Person=3	3	nmod:poss	_	_
3	oluşturulmasıyla	oluş	VERB	Verb	Aspect=Perf|Case=Ins|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Pres|VerbForm=Vnoun|Voice=CauPass	6	nmod	_	_
4	Nobel	Nobel	PROPN	Prop	Case=Nom|Number=Sing|Person=3	5	nmod:poss	_	_
5	ödülü	ödül	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	obj	_	_
6	alan	al	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part	7	acl	_	_
7	bilim	bilim	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	nmod:poss	_	_
8	insanlarından	insan	NOUN	Noun	Case=Abl|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	7	compound	_	_
9	birisi	biri	PRON	Quant	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Ind	10	obj	_	_
10	olan	ol	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part	11	acl	_	_
11	Sheldon	Sheldon	PROPN	Prop	Case=Nom|Number=Sing|Person=3	21	nsubj	_	_
12	Glashow	Glashow	PROPN	Prop	Case=Nom|Number=Sing|Person=3	11	flat	_	SpaceAfter=No
13	,	,	PUNCT	Punc	_	21	punct	_	_
14	projenin	proje	NOUN	Noun	Case=Gen|Number=Sing|Person=3	16	nmod:poss	_	_
15	onanma	ona	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun|Voice=Pass	16	nmod:poss	_	_
16	şansının	şans	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	18	nsubj	_	_
17	düşük	düşük	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	18	obj	_	_
18	olduğunu	ol	VERB	Verb	Aspect=Perf|Case=Acc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	21	obj	_	_
19	şu	şu	DET	Det	_	20	det	_	_
20	şakayla	şaka	NOUN	Noun	Case=Ins|Number=Sing|Person=3	21	nmod	_	_
21	anlatıyor	anlat	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	0	root	_	SpaceAfter=No
22	:	:	PUNCT	Punc	_	45	punct	_	_
23	bizi	biz	PRON	Pers	Case=Acc|Number=Plur|Person=1|PronType=Prs	26	obj	_	_
24	erke	erke	NOUN	Noun	Case=Nom|Number=Sing|Person=3	25	nmod:poss	_	_
25	düzeylerine	düzey	NOUN	Noun	Case=Dat|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	26	iobj	_	_
26	çıkaracak	çıkar	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Fut|VerbForm=Part	27	acl	_	_
27	olan	ol	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part	28	acl	_	_
28	hızlandırıcının	hızlandırıcı	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	29	nmod:poss	_	_
29	boyu	boy	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	45	nsubj:outer	_	_
30	birkaç	birkaç	DET	Det	_	31	det	_	_
31	ışık	ışık	NOUN	Noun	Case=Nom|Number=Sing|Person=3	33	nmod	_	_
32	yılı	yıl	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	31	compound	_	_
33	uzunluklarda	uzunluk	NOUN	Noun	Case=Loc|Number=Plur|Person=3	37	obl	_	_
34	ve	ve	CCONJ	Conj	_	36	cc	_	_
35	bir	bir	NUM	ANum	NumType=Card	36	nummod	_	_
36	saniyede	saniye	NOUN	Noun	Case=Loc|Number=Sing|Person=3	33	conj	_	_
37	tüketeceği	tüket	VERB	Verb	Aspect=Perf|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Fut|VerbForm=Part	38	acl	_	_
38	erke	erke	NOUN	Noun	Case=Nom|Number=Sing|Person=3	45	nsubj	_	_
39	de	de	CCONJ	Conj	_	38	advmod:emph	_	_
40	Güneş'in	Güneş	PROPN	Prop	Case=Gen|Number=Sing|Person=3	43	nmod:poss	_	_
41	bir	bir	NUM	ANum	NumType=Card	42	nummod	_	_
42	saniyede	saniye	NOUN	Noun	Case=Loc|Number=Sing|Person=3	43	obl	_	_
43	ürettiği	üre	VERB	Verb	Aspect=Perf|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Cau	44	acl	_	_
44	erkeye	erke	NOUN	Noun	Case=Dat|Number=Sing|Person=3	45	obl	_	_
45	denk	denk	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	21	conj	_	_
46	olacaktır	ol	VERB	Verb	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Polarity=Pos|Tense=Fut	45	compound:lvc	_	SpaceAfter=No
47	.	.	PUNCT	Punc	_	45	punct	_	_

~~~


