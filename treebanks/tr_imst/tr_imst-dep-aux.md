---
layout: base
title:  'Statistics of aux in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="tr_imst-dep-aux-q.html">aux:q</a></tt>.

6 nodes (0%) are attached to their parents as `aux`.

6 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (4; 67% instances), <tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (1; 17% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux	color:blue
1	Keşke	keşke	ADV	Adverb	_	6	advmod	_	_
2	benim	ben	PRON	Pers	Case=Gen|Number=Sing|Person=1|PronType=Prs	6	nmod:poss	_	_
3	de	de	CCONJ	Conj	_	2	advmod:emph	_	_
4	böyle	böyle	ADV	Adverb	_	6	amod	_	_
5	bir	bir	DET	ANum	_	6	det	_	_
6	evim	ev	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	0	root	_	_
7	olsa	ol	AUX	Verb	Aspect=Perf|Mood=Des|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	6	aux	_	_
8	başımı	baş	NOUN	Noun	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	6	acl	_	_
9	sokacak	sok	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Fut|VerbForm=Part	8	compound	_	SpaceAfter=No
10	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 aux	color:blue
1	Konuya	konu	NOUN	Noun	Case=Dat|Number=Sing|Person=3	9	amod	_	_
2	ilişkin	ilişkin	ADP	PCDat	_	1	case	_	_
3	ücretli	ücretli	ADJ	Adj	_	4	amod	_	_
4	işçi	işçi	NOUN	Noun	Case=Nom|Number=Sing|Person=3	7	nmod:poss	_	_
5	ile	ile	CCONJ	Conj	_	6	cc	_	_
6	kapitalist	kapitalist	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	conj	_	_
7	arasında	ara	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	amod	_	_
8	ki	ki	ADP	Rel	_	7	case	_	_
9	ilişki	ilişki	NOUN	Noun	Case=Nom|Number=Sing|Person=3	10	nsubj	_	_
10	ne	ne	CCONJ	Conj	_	20	nmod	_	_
11	ise	i	AUX	Postp	Mood=Cnd|Number=Sing|Person=3	10	aux	_	SpaceAfter=No
12	,	,	PUNCT	Punc	_	11	punct	_	_
13	kiracı	kiracı	NOUN	Noun	Case=Nom|Number=Sing|Person=3	16	nmod:poss	_	_
14	ile	ile	CCONJ	Conj	_	15	cc	_	_
15	evsahibi	evsahibi	NOUN	Noun	Case=Nom|Number=Sing|Person=3	13	conj	_	_
16	arasında	ara	ADJ	NAdj	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	18	amod	_	_
17	ki	ki	ADP	Rel	_	16	case	_	_
18	ilişki	ilişki	NOUN	Noun	Case=Nom|Number=Sing|Person=3	20	nsubj	_	_
19	de	de	CCONJ	Conj	_	18	advmod:emph	_	_
20	o	o	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	22	nmod:poss	_	_
21	dur	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	20	cop	_	_
22	yargısını	yargı	NOUN	Noun	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	29	obj	_	_
23	yıllar	yıl	NOUN	Noun	Case=Nom|Number=Plur|Person=3	29	obl	_	_
24	önce	önce	ADP	PCAbl	_	23	case	_	SpaceAfter=No
25	,	,	PUNCT	Punc	_	29	punct	_	_
26	Friedrich	Friedrich	PROPN	Prop	Case=Nom|Number=Sing|Person=3	29	nsubj	_	_
27	Engels	Engels	PROPN	Prop	Case=Nom|Number=Sing|Person=3	26	flat	_	_
28	şöyle	şöyle	ADV	Adverb	_	29	advmod	_	_
29	eleştirmiş	eleştir	VERB	Verb	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
30	.	.	PUNCT	Punc	_	29	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux	color:blue
1	Mersedes	Mersedes	PROPN	Prop	Case=Nom|Number=Sing|Person=3	2	obj	_	_
2	buldum	bul	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past	4	nmod	_	_
3	mu	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	aux	_	_
4	bırakmam	bırak	VERB	Verb	Aspect=Hab|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres	0	root	_	_
5	abi	abi	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	conj	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


