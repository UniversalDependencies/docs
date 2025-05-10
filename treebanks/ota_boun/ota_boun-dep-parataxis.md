---
layout: base
title:  'Statistics of parataxis in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `parataxis`

This relation is universal.

10 nodes (0%) are attached to their parents as `parataxis`.

5 instances of `parataxis` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.1.

The following 7 pairs of parts of speech are connected with `parataxis`: <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (4; 40% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (1; 10% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="ota_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 parataxis	color:blue
1	Şu	şu	DET	Det	_	2	det	_	شو
2	muamele	muamele	NOUN	_	Case=Nom|Number=Sing|Person=3	4	nsubj	_	معامله
3	bana	ben	PRON	Pers	Case=Dat|Number=Sing|Person=1|PronType=Prs	4	obl	_	بكا
4	garib	garib	NOUN	_	Case=Nom|Number=Sing|Person=3	5	xcomp	_	غريب
5	göründü	görün	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	كورندى
6	:	:	PUNCT	Punc	_	12	punct	_	:
7	Bir	bir	DET	Det	_	8	det	_	بر
8	müşteri	müşteri	NOUN	_	Case=Nom|Number=Sing|Person=3	12	nsubj	_	مشترى
9	listeyi	liste	NOUN	_	Case=Acc|Number=Sing|Person=3	12	obj	_	ليسته يى
10	istediği	iste	VERB	Ptcp	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	11	acl	_	ايستديكى
11	zaman	zaman	NOUN	_	Case=Nom|Number=Sing|Person=3	12	obl	_	زمان
12	okuyamaz	oku	VERB	_	Aspect=Hab|Mood=Pot|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	parataxis	_	اوقويه مازمى
13	mı	mi	AUX	Ques	Aspect=Imp|Number=Sing|Person=3|Tense=Pres	12	discourse	_	اوقويه مازمى
14	?	?	PUNCT	Ques	_	12	punct	_	?

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 28 parataxis	color:blue
1	Yemeklerin	yemek	NOUN	_	Case=Gen|Number=Plur|Person=3	2	nmod:poss	_	يمكلرك
2	hepsini	hepsi	PRON	Quant	Case=Acc|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3	9	obj	_	هپسنى
3	nazar-ı	nazar	NOUN	_	Case=Nom|Number=Sing|Person=3	9	obl	_	نظر
4	dikkatinden	dikkat	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	nmod:poss	_	دقتندن
5	...	...	PUNCT	TDots	_	9	punct	_	...
6	belki	belki	ADV	_	_	9	advmod	_	بلكه
7	nazar-ı	nazar	NOUN	_	Case=Nom|Number=Sing|Person=3	9	obl	_	نظر
8	hasretinden	hasret	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	nmod:poss	_	حسرتندن
9	geçirdi	geçir	VERB	Ptcp	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Cau	0	root	_	كچيردى
10	,	,	PUNCT	Comma	_	24	punct	_	,
11	parmaklarının	parmak	NOUN	_	Case=Gen|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	12	nmod:poss	_	پارماقلرينك
12	derileri	deri	NOUN	_	Case=Acc|Number=Plur|Person=3	13	nsubj	_	دريلرى
13	soyulmuş	soyul	VERB	Ptcp	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Voice=Pass	16	acl	_	صويولمش
14	olan	ol	VERB	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	13	compound:lvc	_	اولان
15	sol	sol	ADJ	Adj	_	16	amod	_	صول
16	elini	el	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	20	obj	_	النى
17	yavaş	yavaş	ADV	_	_	20	advmod	_	ياواش
18	yavaş	yavaş	ADV	Adj	_	17	compound:redup	_	ياواش
19	yukarıya	yukarı	NOUN	_	Case=Dat|Number=Sing|Person=3	20	obl	_	يوقارى
20	kaldırarak	kaldır	VERB	Conv	Aspect=Prog|Polarity=Pos|VerbForm=Conv|Voice=Cau	24	advcl	_	يوقالديره رق
21	listede	liste	NOUN	_	Case=Loc|Number=Sing|Person=3	24	obl	_	ليسته ده
22	iki	iki	NUM	ANum	NumType=Card	23	nummod	_	ايكى
23	yemek	yemek	NOUN	_	Case=Acc|Number=Sing|Person=3	24	obj	_	يمك
24	işaret	işaret	NOUN	_	Case=Nom|Number=Sing|Person=3	9	conj	_	اشارت
25	edebildi	et	VERB	_	Aspect=Perf|Evident=Fh|Mood=Pot|Number=Sing|Person=3|Polarity=Pos|Tense=Past	24	compound:lvc	_	ايده بيلدى
26	:	:	PUNCT	Punc	_	24	punct	_	:
27	Et	et	NOUN	_	Case=Nom|Number=Sing|Person=3	28	nmod:poss	_	ات
28	suyu	su	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	24	parataxis	_	صويى
29	,	,	PUNCT	Comma	_	31	punct	_	,
30	beyin	beyin	NOUN	_	Case=Nom|Number=Sing|Person=3	31	nmod:poss	_	بين
31	tavası	tava	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	28	conj	_	طواسى
32	.	.	PUNCT	Stop	_	31	punct	_	.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 parataxis	color:blue
1	Edibelerimizde	edibe	NOUN	_	Case=Loc|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=1	7	obl	_	أديبه لرمزده
2	ise	i	PART	Topic	_	1	discourse	_	ايسه
3	tesir-i	tesir	NOUN	_	Case=Nom|Number=Sing|Person=3	7	nsubj	_	تأثير
4	inkılap	inkılap	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nmod:poss	_	انقلاب
5	başka	başka	ADJ	Adj	_	6	amod	_	باشقه
6	türlü	türlü	ADJ	Adj	_	7	advmod	_	درلو
7	tezahür	tezahür	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	تظاهر
8	etti	et	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	7	compound:lvc	_	ايتدى
9	:	:	PUNCT	Punc	_	10	punct	_	:
10	Feminizm	Feminizm	PROPN	_	Case=Nom|Number=Sing|Person=3	7	parataxis	_	فه مينيزم
11	...	...	PUNCT	TDots	_	10	punct	_	...

~~~


