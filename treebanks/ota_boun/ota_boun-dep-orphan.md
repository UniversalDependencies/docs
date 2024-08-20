---
layout: base
title:  'Statistics of orphan in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `orphan`

This relation is universal.

4 nodes (0%) are attached to their parents as `orphan`.

4 instances of `orphan` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75.

The following 3 pairs of parts of speech are connected with `orphan`: <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-ADV.html">ADV</a></tt> (1; 25% instances), <tt><a href="ota_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 orphan	color:blue
1	On	on	NUM	NNum	Case=Nom|Number=Sing|NumType=Card|Person=3	2	nummod	_	_
2	dakika	dakika	NOUN	_	Case=Nom|Number=Sing|Person=3	20	obl	_	_
3	sonra	sonra	ADP	PCAbl	_	2	case	_	_
4	bu	bu	DET	Demons	_	5	det	_	_
5	mehtab	mehtab	NOUN	_	Case=Nom|Number=Sing|Person=3	20	nsubj	_	_
6	onun	o	PRON	Pers	Case=Gen|Number=Sing|Person=3|PronType=Prs	7	nmod:poss	_	_
7	kefeni	kefen	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	20	obj	_	_
8	,	,	PUNCT	Comma	_	13	punct	_	_
9	bu	bu	DET	Demons	_	10	det	_	_
10	çamlık	çamlık	NOUN	_	Case=Nom|Number=Sing|Person=3	13	orphan	_	_
11	onun	o	PRON	Pers	Case=Gen|Number=Sing|Person=3|PronType=Prs	13	nmod:poss	_	_
12	muvakkat	muvakkat	NOUN	_	Case=Nom|Number=Sing|Person=3	13	acl	_	_
13	mezarı	mezar	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	conj	_	_
14	lâkin	lâkin	CCONJ	_	_	13	cc	_	_
15	bu	bu	DET	Demons	_	17	det	_	_
16	hafif	hafif	ADJ	Adj	_	17	amod	_	_
17	rüzgâr	rüzgâr	NOUN	_	Case=Nom|Number=Sing|Person=3	19	orphan	_	_
18	onun	o	PRON	Pers	Case=Gen|Number=Sing|Person=3|PronType=Prs	19	nmod:poss	_	_
19	mersiyehânı	mersiyehân	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	conj	_	_
20	olacaktı	ol	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
21	.	.	PUNCT	Stop	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 orphan	color:blue
1	Nisbeten	nisbeten	ADV	_	_	2	orphan	_	_
2	hanımlarımızın	hanım	NOUN	_	Case=Gen|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=1	0	root	_	_
3	mı	mi	AUX	Ques	Aspect=Imp|Number=Sing|Person=3|Tense=Pres	2	discourse	_	_
4	?	?	PUNCT	Ques	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 orphan	color:blue
1	Mediha	Mediha	PROPN	_	Case=Nom|Number=Sing|Person=3	6	orphan	_	_
2	Hüsnü	Hüsnü	PROPN	_	Case=Nom|Number=Sing|Person=3	1	flat	_	_
3	Hanımefendi	Hanimefendi	PROPN	_	Case=Nom|Number=Sing|Person=3	1	flat	_	_
4	;	;	PUNCT	Punc	_	6	punct	_	_
5	erkeklerden	erkek	NOUN	_	Case=Abl|Number=Plur|Person=3	6	obl	_	_
6	beş	beş	NUM	ANum	NumType=Card	0	root	_	_
7	değil	değil	AUX	Overt	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	6	aux	_	_
8	,	,	PUNCT	Comma	_	9	punct	_	_
9	on	on	NUM	ANum	NumType=Card	6	conj	_	_
10	değil	değil	AUX	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	9	aux	_	_
11	...	...	PUNCT	TDots	_	9	punct	_	_

~~~


