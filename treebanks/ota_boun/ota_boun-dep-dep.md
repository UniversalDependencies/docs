---
layout: base
title:  'Statistics of dep in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `dep`

This relation is universal.

14 nodes (0%) are attached to their parents as `dep`.

13 instances of `dep` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.42857142857143.

The following 6 pairs of parts of speech are connected with `dep`: <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-PART.html">PART</a></tt> (6; 43% instances), <tt><a href="ota_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_boun-pos-CCONJ.html">CCONJ</a></tt> (4; 29% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="ota_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_boun-pos-INTJ.html">INTJ</a></tt> (1; 7% instances), <tt><a href="ota_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_boun-pos-PRON.html">PRON</a></tt> (1; 7% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 dep	color:blue
1	Artık	artık	ADV	_	_	10	advmod	_	TokenRange=4202:4207
2	fecri	fecir	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	obj	_	TokenRange=4208:4213
3	yalnız	yalnız	ADV	_	_	9	advmod	_	TokenRange=4214:4220
4	kümeslerimizde	kümes	NOUN	_	Case=Loc|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=1	9	amod	_	_
5	ki	ki	PART	Attr	_	4	dep	_	_
6	dargın	dargın	ADJ	Adj	_	9	amod	_	TokenRange=4238:4244
7	ve	ve	CCONJ	_	_	8	cc	_	TokenRange=4245:4247
8	mağrur	mağrur	ADJ	Adj	_	6	conj	_	TokenRange=4248:4254
9	horozlara	horoz	NOUN	_	Case=Dat|Number=Plur|Person=3	10	iobj	_	TokenRange=4255:4264
10	bıraktık	bırak	VERB	_	Aspect=Perf|Evident=Fh|Number=Plur|Person=1|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No|TokenRange=4265:4273
11	.	.	PUNCT	Stop	_	10	punct	_	SpacesAfter=\r\n|TokenRange=4273:4274

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 dep	color:blue
1	Biraz	biraz	ADV	_	_	2	amod	_	_
2	zaman	zaman	NOUN	_	Case=Nom|Number=Sing|Person=3	4	obl	_	_
3	mütereddidâne	mütereddidâne	ADJ	Adj	_	4	advmod	_	_
4	düşündükten	düşün	VERB	Ptcp	Aspect=Perf|Case=Abl|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	15	advcl	_	_
5	sonra	sonra	ADP	PCAbl	_	4	case	_	_
6	“Bu	“bu	PRON	_	_	14	obj	_	_
7	ya	ya	CCONJ	Conj	_	6	dep	_	_
8	ba	ba	INTJ	_	_	6	dep	_	_
9	da	da	CCONJ	Emph	_	6	dep	_	_
10	bu	bu	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	6	dep	_	_
11	ya	ya	CCONJ	Conj	_	6	dep	_	_
12	da	da	CCONJ	Conj	_	6	dep	_	_
13	!”	!”	PUNCT	Punc	_	12	punct	_	_
14	diye	diye	ADV	_	_	15	advcl	_	_
15	kekeledi	kekele	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
16	.	.	PUNCT	Stop	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 dep	color:blue
1	O	o	DET	Det	_	3	advmod	_	_
2	kadar	kadar	ADP	PCDat	_	1	case	_	_
3	uzak	uzak	ADJ	Adj	_	0	root	_	_
4	idim	y	AUX	Zero	Aspect=Perf|Evident=Fh|Number=Sing|Person=1|Polarity=Pos|Tense=Past	3	cop	_	_
5	ki	ki	SCONJ	_	_	3	mark	_	_
6	velvele-i	velvele	NOUN	_	Case=Nom|Number=Sing|Person=3	3	dep	_	_
7	levs	levs	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nmod:poss	_	_
8	,	,	PUNCT	Comma	_	9	punct	_	_
9	dağdağa-i	dağdağa	NOUN	Adj	Case=Nom|Number=Sing|Person=3	6	conj	_	_
10	ihtirâs	ihtirâs	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nmod:poss	_	_
11	,	,	PUNCT	Comma	_	12	punct	_	_
12	tantana-i	tantana	NOUN	_	Case=Nom|Number=Sing|Person=3	6	conj	_	_
13	kîn	kîn	NOUN	_	Case=Nom|Number=Sing|Person=3	12	nmod:poss	_	_
14	,	,	PUNCT	Comma	_	15	punct	_	_
15	debdebe-i	debdebe	NOUN	_	Case=Nom|Number=Sing|Person=3	6	conj	_	_
16	riyâ	riyâ	NOUN	_	Case=Nom|Number=Sing|Person=3	15	nmod:poss	_	_
17	.	.	PUNCT	Stop	_	16	punct	_	_

~~~


