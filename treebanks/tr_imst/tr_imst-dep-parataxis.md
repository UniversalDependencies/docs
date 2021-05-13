---
layout: base
title:  'Statistics of parataxis in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `parataxis`

This relation is universal.

11 nodes (0%) are attached to their parents as `parataxis`.

10 instances of `parataxis` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.36363636363636.

The following 5 pairs of parts of speech are connected with `parataxis`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (6; 55% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (2; 18% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (1; 9% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 parataxis	color:blue
1	Hey	hey	INTJ	Interj	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	3	punct	_	_
3	Ömer	Ömer	PROPN	Prop	Case=Nom|Number=Sing|Person=3	5	vocative	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	3	punct	_	_
5	kalk	kalk	VERB	Verb	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres	0	root	_	_
6	oğlum	oğul	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	5	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	9	punct	_	_
8	geç	geç	ADV	Adverb	_	9	advmod	_	_
9	kalmışız	kal	VERB	Verb	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Past	5	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 15 parataxis	color:blue
1	Eğer	eğer	CCONJ	Conj	_	6	nmod	_	_
2	sözünü	söz	NOUN	Noun	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	nmod	_	_
3	ettiğiniz	et	VERB	Verb	Aspect=Perf|Mood=Ind|Number[psor]=Plur|Person[psor]=2|Polarity=Pos|Tense=Past|VerbForm=Part	2	compound:lvc	_	_
4	şey	şey	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	nsubj	_	_
5	virtual	virtual	ADJ	Adj	_	6	amod	_	_
6	parçacıklar	parçacık	NOUN	Noun	Case=Nom|Number=Plur|Person=3	22	obl	_	_
7	sa	i	AUX	Zero	Aspect=Perf|Mood=Cnd|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
8	(	(	PUNCT	Punc	_	15	punct	_	SpaceAfter=No
9	aşağıda	aşağı	ADJ	NAdj	Case=Loc|Number=Sing|Person=3	11	amod	_	_
10	ki	ki	ADP	Rel	_	9	case	_	_
11	satırlarda	satır	NOUN	Noun	Case=Loc|Number=Plur|Person=3	13	obl	_	_
12	Verschuur'dan	Verschuur	PROPN	Prop	Case=Abl|Number=Sing|Person=3	13	obl	_	_
13	yapılan	yap	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	14	acl	_	_
14	alıntıya	alıntı	NOUN	Noun	Case=Dat|Number=Sing|Person=3	15	obl	_	_
15	bakınız	bak	VERB	Verb	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres	6	parataxis	_	SpaceAfter=No
16	)	)	PUNCT	Punc	_	15	punct	_	_
17	durum	durum	NOUN	Noun	Case=Nom|Number=Sing|Person=3	21	nsubj	_	_
18	hala	hala	ADV	Adverb	_	21	advmod	_	_
19	inandırıcı	inandırıcı	ADJ	Adj	_	20	amod	_	_
20	olmaktan	ol	VERB	Verb	Aspect=Perf|Case=Abl|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	21	nmod	_	_
21	uzak	uzak	ADJ	Adj	_	22	obj	_	_
22	demek	de	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	0	root	_	_
23	tir	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	22	cop	_	_
24	.	.	PUNCT	Punc	_	22	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 parataxis	color:blue
1	Yedi	yedi	NUM	ANum	NumType=Card	2	nummod	_	_
2	saat	saat	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	nmod	_	_
3	lik	lik	ADP	Ness	Case=Nom|Number=Sing|Person=3	2	case	_	_
4	yolculuk	yolculuk	NOUN	Noun	Case=Nom|Number=Sing|Person=3	17	obl	_	_
5	boyunca	boyunca	ADP	PCNom	_	4	case	_	SpaceAfter=No
6	-	-	PUNCT	Punc	_	10	punct	_	SpaceAfter=No
7	ki	ki	CCONJ	Conj	_	10	nmod	_	_
8	yetmiş	yetmiş	NUM	NNum	Case=Nom|Number=Sing|NumType=Card|Person=3	10	obj	_	_
9	kilometre	kilometre	NOUN	Noun	Case=Nom|Number=Sing|Person=3	8	compound	_	_
10	kat	kat	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	parataxis	_	_
11	edecektik	et	VERB	Verb	Aspect=Prosp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Fut,Past	10	compound	_	SpaceAfter=No
12	-	-	PUNCT	Punc	_	4	punct	_	SpaceAfter=No
13	bir	bir	NUM	ANum	NumType=Card	15	nummod	_	_
14	tek	tek	ADJ	Adj	_	13	compound	_	_
15	eve	ev	NOUN	Noun	Case=Dat|Number=Sing|Person=3	16	obl	_	_
16	rastlamanın	rastla	VERB	Verb	Aspect=Perf|Case=Gen|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	17	nsubj	_	_
17	mümkün	mümkün	ADJ	Adj	_	20	amod	_	_
18	olmadığı	ol	VERB	Verb	Aspect=Perf|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Neg|Tense=Past|VerbForm=Part	17	compound:lvc	_	_
19	bir	bir	DET	ANum	Definite=Ind|PronType=Art	20	det	_	_
20	coğrafya	coğrafya	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	SpaceAfter=No
21	.	.	PUNCT	Punc	_	20	punct	_	_

~~~


