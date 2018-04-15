---
layout: base
title:  'Statistics of parataxis in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `parataxis`

This relation is universal.

11 nodes (0%) are attached to their parents as `parataxis`.

10 instances of `parataxis` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.54545454545455.

The following 5 pairs of parts of speech are connected with `parataxis`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (6; 55% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (2; 18% instances), <tt><a href="tr_imst-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (1; 9% instances).


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
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 36 parataxis	color:blue
1	İnsanları	insan	NOUN	Noun	Case=Acc|Number=Plur|Person=3	3	obj	_	_
2	ikiye	iki	NUM	NNum	Case=Dat|Number=Sing|NumType=Card|Person=3	3	nummod	_	_
3	ayırıyor	ayır	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	0	root	_	_
4	annem	anne	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	3	nsubj	_	_
5	(	(	PUNCT	Punc	_	15	punct	_	SpaceAfter=No
6	sayacağı	say	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Fut|VerbForm=Part	10	nsubj	_	_
7	iki	iki	NUM	ANum	NumType=Card	8	nummod	_	_
8	kalem	kalem	NOUN	Noun	Case=Nom|Number=Sing|Person=3	10	obl	_	_
9	de	de	CCONJ	Conj	_	8	advmod:emph	_	_
10	olsa	ol	VERB	Verb	Aspect=Perf|Mood=Des|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	15	nmod	_	_
11	mutlaka	mutlaka	ADV	Adverb	_	14	advmod	_	_
12	parmaklarını	parmak	NOUN	Noun	Case=Acc|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=2	14	obj	_	_
13	avucuna	avuç	NOUN	Noun	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	14	obl	_	_
14	kapatarak	kapa	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Conv|Voice=Cau	15	nmod	_	_
15	sayacak	say	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut	3	conj	_	SpaceAfter=No
16	;	;	PUNCT	Punc	_	15	punct	_	_
17	birincisi	birinci	NUM	NNum	Case=Nom|Number=Sing|Number[psor]=Sing|NumType=Ord|Person=3|Person[psor]=3	18	amod	_	_
18	yaşayan	yaşa	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part	30	nmod	_	_
19	lar	_	ADP	Zero	Case=Nom|Number=Plur|Person=3	18	case	_	_
20	(	(	PUNCT	Punc	_	24	punct	_	SpaceAfter=No
21	bunlar	bu	PRON	Demons	Case=Nom|Number=Plur|Person=3|PronType=Dem	24	nsubj	_	_
22	başkalarını	başka	ADJ	NAdj	Case=Acc|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=3	24	obj	_	_
23	da	da	CCONJ	Conj	_	22	advmod:emph	_	_
24	yaşatıyor	yaşa	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres|Voice=Cau	18	parataxis	_	SpaceAfter=No
25	)	)	PUNCT	Punc	_	24	punct	_	SpaceAfter=No
26	,	,	PUNCT	Punc	_	24	punct	_	_
27	ikincisi	ikinci	NUM	NNum	Case=Nom|Number=Sing|Number[psor]=Sing|NumType=Ord|Person=3|Person[psor]=3	30	amod	_	_
28	yaşayan	yaşa	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part	30	obj	_	_
29	ları	_	ADP	Zero	Case=Acc|Number=Plur|Person=3	28	case	_	_
30	seyreden	seyret	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part	3	nsubj	_	_
31	ler	_	ADP	Zero	Case=Nom|Number=Plur|Person=3	30	case	_	_
32	(	(	PUNCT	Punc	_	30	punct	_	SpaceAfter=No
33	bunlar	bu	PRON	Demons	Case=Nom|Number=Plur|Person=3|PronType=Dem	36	nsubj	_	_
34	da	da	CCONJ	Conj	_	33	advmod:emph	_	_
35	başkalarının	başka	ADJ	NAdj	Case=Gen|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	36	nmod:poss	_	_
36	sırtına	sırt	NOUN	Noun	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	31	parataxis	_	_
37	yük	yük	NOUN	Noun	Case=Nom|Number=Sing|Person=3	36	compound	_	_
38	oluyorlar	ol	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	36	compound	_	SpaceAfter=No
39	)	)	PUNCT	Punc	_	30	punct	_	SpaceAfter=No
40	.	.	PUNCT	Punc	_	30	punct	_	_

~~~


