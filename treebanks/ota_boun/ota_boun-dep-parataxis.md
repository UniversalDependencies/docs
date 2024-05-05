---
layout: base
title:  'Statistics of parataxis in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `parataxis`

This relation is universal.

10 nodes (0%) are attached to their parents as `parataxis`.

5 instances of `parataxis` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.2.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (4; 40% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt> (2; 20% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (1; 10% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="ota_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-PROPN.html">PROPN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 parataxis	color:blue
1	Şu	şu	DET	Det	_	2	det	_	_
2	muamele	muamele	NOUN	_	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
3	bana	ben	PRON	Pers	Case=Dat|Number=Sing|Person=1|PronType=Prs	4	obl	_	_
4	garib	garib	NOUN	_	Case=Nom|Number=Sing|Person=3	5	xcomp	_	_
5	göründü	görün	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	_
6	:	:	PUNCT	Punc	_	12	punct	_	_
7	Bir	bir	DET	Det	_	8	det	_	_
8	müşteri	müşteri	NOUN	_	Case=Nom|Number=Sing|Person=3	12	nsubj	_	_
9	listeyi	liste	NOUN	_	Case=Acc|Number=Sing|Person=3	12	obj	_	_
10	istediği	iste	VERB	Ptcp	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	11	acl	_	_
11	zaman	zaman	NOUN	_	Case=Nom|Number=Sing|Person=3	12	obl	_	_
12	okuyamaz	oku	VERB	_	Aspect=Hab|Mood=Pot|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	parataxis	_	_
13	mı	mi	AUX	Ques	Aspect=Imp|Number=Sing|Person=3|Tense=Pres	12	discourse	_	_
14	?	?	PUNCT	Ques	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 12 parataxis	color:blue
1	Kadın	kadın	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nmod	_	_
2	nam	nam	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nmod:poss	_	_
3	müstearıyla	müstear	NOUN	_	Case=Ins|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	nmod	_	_
4	yazan	yaz	VERB	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	6	acl	_	_
5	birkaç	birkaç	DET	Det	_	6	det	_	_
6	erkeği	erkek	NOUN	_	Case=Acc|Number=Sing|Person=3	14	obj	_	_
7	-	-	PUNCT	Punc	_	12	punct	_	_
8	ki	ki	SCONJ	_	_	12	mark	_	_
9	bence	ben	PRON	Pers	Case=Equ|Number=Sing|Person=1|PronType=Prs	12	obl	_	_
10	erkek	erkek	NOUN	_	Case=Nom|Number=Sing|Person=3	11	obj	_	_
11	oldukları	ol	VERB	Ptcp	Aspect=Perf|Number[psor]=Plur|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	12	csubj	_	_
12	muhakkakdır	muhakkak	NOUN	_	Case=Nom|Number=Sing|Person=3	26	parataxis	_	_
13	-	-	PUNCT	Punc	_	12	punct	_	_
14	istisna	istisna	NOUN	_	Case=Nom|Number=Sing|Person=3	16	ccomp	_	_
15	edecek	et	VERB	Ptcp	Aspect=Prosp|Number=Sing|Person=3|Polarity=Pos|Tense=Fut	14	compound:lvc	_	_
16	olursak	ol	VERB	_	Aspect=Hab|Mood=Cnd|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	26	advcl	_	_
17	bir	bir	NUM	ANum	NumType=Card	19	nummod	_	_
18	iki	iki	NUM	ANum	NumType=Card	17	compound	_	_
19	mübtedi	mübtedi	NOUN	_	Case=Acc|Number=Sing|Person=3	20	amod	_	_
20	nazımdan	nazım	NOUN	_	Case=Abl|Number=Sing|Person=3	23	obl	_	_
21	başka	başka	ADP	Adj	_	20	case	_	_
22	nazımla	nazım	NOUN	_	Case=Ins|Number=Sing|Person=3	23	obj	_	_
23	iştigal	iştigal	NOUN	_	Case=Nom|Number=Sing|Person=3	25	acl	_	_
24	eden	et	VERB	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	23	compound:lvc	_	_
25	hanımlarımız	hanım	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=1	26	nsubj	_	_
26	yok	yok	NOUN	Exist	Number=Sing|Person=3|Polarity=Neg	0	root	_	_
27	.	.	PUNCT	Stop	_	26	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 parataxis	color:blue
1	Edibelerimizde	edibe	NOUN	_	Case=Loc|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=1	7	obl	_	_
2	ise	i	PART	Topic	_	1	discourse	_	_
3	tesir-i	tesir-i	NOUN	_	Case=Nom|Number=Sing|Person=3	7	nsubj	_	_
4	inkılap	inkılap	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nmod:poss	_	_
5	başka	başka	ADJ	Adj	_	6	amod	_	_
6	türlü	türlü	ADJ	Adj	_	7	advmod	_	_
7	tezahür	tezahür	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
8	etti	et	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	7	compound:lvc	_	_
9	:	:	PUNCT	Punc	_	10	punct	_	_
10	Feminizm	Feminizm	PROPN	_	Case=Nom|Number=Sing|Person=3	7	parataxis	_	_
11	...	...	PUNCT	TDots	_	10	punct	_	_

~~~


