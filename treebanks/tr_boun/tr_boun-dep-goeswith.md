---
layout: base
title:  'Statistics of goeswith in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `goeswith`

This relation is universal.

4 nodes (0%) are attached to their parents as `goeswith`.

4 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `goeswith`: <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (1; 25% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (1; 25% instances), <tt><a href="tr_boun-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 goeswith	color:blue
1	Pirinç	pirinç	NOUN	Noun	Case=Nom|Number=Sing|Person=3	15	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	3	punct	_	_
3	fiber	fiber	NOUN	Noun	Case=Nom|Number=Sing|Person=3	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	5	punct	_	_
5	bakır	bakır	NOUN	Noun	Case=Nom|Number=Sing|Person=3	1	obl	_	_
6	ya	ya	CCONJ	Conj	_	8	cc	_	_
7	da	da	CCONJ	Conj	_	8	cc	_	_
8	almangümüşünün	almangümüş	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	conj	_	_
9	yanı	yan	ADP	NAdj	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	case	_	_
10	sıra	sıra	NOUN	Noun	Case=Nom|Number=Sing|Person=3	9	goeswith	_	_
11	tahta	tahta	ADJ	Adj	Case=Nom|Number=Sing|Person=3	1	conj	_	_
12	ve	ve	CCONJ	Conj	_	13	cc	_	_
13	kristal	kristal	ADJ	Adj	Case=Nom|Number=Sing|Person=3	1	conj	_	_
14	de	de	CCONJ	Conj	_	13	advmod:emph	_	_
15	kullanılmaya	kullan	VERB	Verb	Case=Dat|Number=Sing|Person=3|Polarity=Pos|Voice=Pass	16	ccomp	_	_
16	başlandı	başla	VERB	Verb	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Pass	0	root	_	SpaceAfter=No
17	.	.	PUNCT	Punc	_	16	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Öyle	öyle	ADV	Adverb	_	11	advmod	_	_
2	ya	ya	CCONJ	Conj	_	1	goeswith	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	5	punct	_	_
4	gökyüzü	gökyüz	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	nmod	_	_
5	alemdir	âlem	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	obl	_	_
6	o	o	ADV	Det	_	11	advmod	_	_
7	sıra	sıra	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	compound	_	SpaceAfter=No
8	!	!	PUNCT	Punc	_	11	punct	_	_
9	Haklısın	hâk	NOUN	Noun	Case=Nom|Number=Sing|Person=3	11	obj	_	SpaceAfter=No
10	,	,	PUNCT	Punc	_	11	punct	_	_
11	diyor	de	VERB	Verb	Aspect=Prog|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_
12	sözü	söz	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	13	obj	_	_
13	alan	al	VERB	Verb	Polarity=Pos|Tense=Pres|VerbForm=Part	11	nsubj	_	SpaceAfter=No
14	.	.	PUNCT	Punc	_	11	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 goeswith	color:blue
1	Minibüslerde	minibüs	NOUN	Noun	Case=Loc|Number=Plur|Person=3	6	obl	_	SpaceAfter=No
2	/	/	PUNCT	Punc	_	3	punct	_	SpaceAfter=No
3	otobüslerde	otobüs	NOUN	Noun	Case=Loc|Number=Plur|Person=3	1	conj	_	_
4	değişik	değişik	ADJ	Adj	_	5	amod	_	_
5	şeyler	şey	NOUN	Noun	Case=Nom|Number=Plur|Person=3	6	obj	_	_
6	fark	fark	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
7	ederiz	et	VERB	Verb	Aspect=Hab|Number=Plur|Person=1|Polarity=Pos|Tense=Aor	6	compound:lvc	_	SpaceAfter=No
8	;	;	PUNCT	Punc	_	6	punct	_	_
9	mesela	mesela	ADV	Adverb	_	12	advmod	_	_
10	işyerinde	işyer	NOUN	Noun	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	12	obl	_	_
11	elimize	el	NOUN	Noun	Case=Dat|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	12	obl	_	_
12	geçse	geç	VERB	Verb	Mood=Des|Number=Sing|Person=3|Polarity=Pos	17	advcl	_	_
13	şöyle	şöyle	ADV	Adverb	_	15	advmod	_	_
14	bir	bir	NUM	ANum	NumType=Card	13	goeswith	_	_
15	göz	göz	NOUN	Noun	Case=Nom|Number=Sing|Person=3	17	advcl	_	_
16	atıp	at	VERB	Verb	Polarity=Pos	15	compound	_	_
17	kapatacağımız	kapa	NOUN	Noun	Aspect=Imp|Number[psor]=Plur|Person[psor]=1|Polarity=Pos|Tense=Fut|VerbForm=Part|Voice=Cau	19	acl	_	_
18	uyduruk	uyduruk	NOUN	Noun	Case=Nom|Number=Sing|Person=3	19	amod	_	_
19	gazetelerden	gazete	NOUN	Noun	Case=Abl|Number=Plur|Person=3	20	nmod:poss	_	_
20	teki	tek	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	24	nsubj	_	_
21	yolculardan	yolcu	NOUN	Noun	Case=Abl|Number=Plur|Person=3	20	nmod:poss	_	_
22	biri	biri	PRON	Quant	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	23	obl	_	_
23	tarafından	taraf	NOUN	Noun	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	24	obl	_	_
24	açıldığında	aç	NOUN	Noun	Aspect=Perf|Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	40	advcl	_	SpaceAfter=No
25	,	,	PUNCT	Punc	_	40	punct	_	_
26	iki	iki	ADV	ANum	NumType=Card	33	advmod	_	_
27	de	de	CCONJ	Conj	_	26	advmod:emph	_	_
28	bir	bir	ADV	Adverb	_	26	compound:redup	_	_
29	de	de	CCONJ	Conj	_	28	advmod:emph	_	_
30	kafamızı	kafa	ADJ	NAdj	Case=Acc|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	33	obj	_	_
31	o	o	DET	Det	_	32	det	_	_
32	yöne	yön	ADJ	NAdj	Case=Dat|Number=Sing|Person=3	33	obl	_	_
33	döndürüp	dön	VERB	Verb	Polarity=Pos|Voice=Cau	40	advcl	_	SpaceAfter=No
34	,	,	PUNCT	Punc	_	40	punct	_	_
35	önemli	önem	NOUN	Noun	Case=Nom|Number=Sing|Person=3	37	amod	_	_
36	önemsiz	önem	NUM	ANum	Case=Nom|Number=Sing|Person=3	35	compound:redup	_	_
37	haberleri	haber	NOUN	Noun	Case=Acc|Number=Plur|Person=3	39	obj	_	_
38	ısrarla	ısrar	ADV	Noun	Case=Ins|Number=Sing|Person=3	39	advmod	_	_
39	okumaya	oku	VERB	Verb	Case=Dat|Number=Sing|Person=3|Polarity=Pos	40	ccomp	_	_
40	çalıştığımızı	çalış	VERB	Verb	Aspect=Perf|Case=Acc|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1|Polarity=Pos|Tense=Past|VerbForm=Part	6	ccomp	_	SpaceAfter=No
41	.	.	PUNCT	Punc	_	40	punct	_	SpacesAfter=\n

~~~


