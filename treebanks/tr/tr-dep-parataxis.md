---
layout: base
title:  'Statistics of parataxis in UD_Turkish'
udver: '2'
---

## Treebank Statistics: UD_Turkish: Relations: `parataxis`

This relation is universal.

9 nodes (0%) are attached to their parents as `parataxis`.

8 instances of `parataxis` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.33333333333333.

The following 4 pairs of parts of speech are connected with `parataxis`: <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-VERB.html">VERB</a></tt> (5; 56% instances), <tt><a href="tr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr-pos-VERB.html">VERB</a></tt> (2; 22% instances), <tt><a href="tr-pos-ADP.html">ADP</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="tr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 19 parataxis	color:blue
1	O	o	PRON	Pers	Case=Nom|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
2	da	da	CCONJ	Conj	_	1	advmod:emph	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	15	punct	_	_
4	sizin	siz	PRON	Pers	Case=Gen|Number=Plur|Person=2|PronType=Prs	6	obl	_	_
5	onu	o	PRON	Pers	Case=Acc|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
6	sevdiğiniz	sev	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Plur|Person[psor]=2|Polarity=Pos|Tense=Past|VerbForm=Part	10	acl	_	_
7	kadar	kadar	ADP	PCNom	_	6	case	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	6	punct	_	_
9	sizi	siz	PRON	Pers	Case=Acc|Number=Plur|Person=2|PronType=Prs	10	obj	_	_
10	seviyorsa	sev	VERB	Verb	Aspect=Prog|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	15	nmod	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	10	punct	_	_
12	yarısını	yarı	ADJ	NAdj	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	13	obj	_	_
13	kesip	kes	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Conv	15	nmod	_	_
14	size	siz	PRON	Pers	Case=Dat|Number=Plur|Person=2|PronType=Prs	15	obl	_	_
15	verir	ver	VERB	Verb	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Aor	0	root	_	_
16	(	(	PUNCT	Punc	_	19	punct	_	SpaceAfter=No
17	Karım	karı	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	19	nsubj	_	_
18	böyle	böyle	ADV	Adverb	_	19	advmod	_	_
19	yapar	yap	VERB	Verb	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Aor	15	parataxis	_	SpaceAfter=No
20	)	)	PUNCT	Punc	_	19	punct	_	SpaceAfter=No
21	.	.	PUNCT	Punc	_	19	punct	_	_

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


