---
layout: base
title:  'Statistics of clf in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `clf`

This relation is universal.

8 nodes (0%) are attached to their parents as `clf`.

8 instances of `clf` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `clf`: <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (6; 75% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 clf	color:blue
1	Bir	bir	DET	ANum	_	2	det	_	_
2	bardak	bardak	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	clf	_	_
3	su	su	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
4	var	var	ADJ	Adj	_	8	ccomp	_	_
5	mı	mi	AUX	Ques	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	aux:q	_	SpaceAfter=No
6	?	?	PUNCT	Punc	_	5	punct	_	_
7	diye	diye	ADP	PCNom	_	4	case	_	_
8	sordu	sor	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 clf	color:blue
1	Neyse	neyse	ADV	Adverb	_	3	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	3	punct	_	_
3	buldum	bul	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past	0	root	_	_
4	bir	bir	NUM	ANum	NumType=Card	5	nummod	_	_
5	şişe	şişe	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	clf	_	_
6	tonik	tonik	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	3	obj	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 clf	color:blue
1	Aşağıda	aşağı	ADJ	NAdj	Case=Loc|Number=Sing|Person=3	3	nmod	_	_
2	ki	ki	ADP	Rel	_	1	case	_	_
3	satırlarda	satır	NOUN	Noun	Case=Loc|Number=Plur|Person=3	7	obl	_	_
4	(	(	PUNCT	Punc	_	6	punct	_	SpaceAfter=No
5	)	)	PUNCT	Punc	_	6	punct	_	_
6	ile	ile	CCONJ	Conj	_	7	nmod	_	_
7	karşılaşan	karşılaş	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part	8	acl	_	_
8	okuyucudan	okuyucu	NOUN	Noun	Case=Abl|Number=Sing|Person=3	12	nsubj	_	_
9	bu	bu	DET	Det	_	10	det	_	_
10	paragrafın	paragraf	NOUN	Noun	Case=Gen|Number=Sing|Person=3	11	nmod:poss	_	_
11	başına	baş	NOUN	Noun	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	12	obl	_	_
12	dönüp	dön	VERB	Verb	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Conv	19	advcl	_	SpaceAfter=No
13	,	,	PUNCT	Punc	_	12	punct	_	_
14	bilimsel	bilimsel	ADJ	Adj	_	15	amod	_	_
15	ölçütü	ölçüt	NOUN	Noun	Case=Acc|Number=Sing|Person=3	19	obj	_	_
16	bir	bir	NUM	ANum	NumType=Card	17	nummod	_	_
17	kez	kez	NOUN	Noun	Case=Nom|Number=Sing|Person=3	18	clf	_	_
18	daha	daha	ADV	Adverb	_	19	advmod	_	_
19	okumasını	oku	VERB	Verb	Aspect=Perf|Case=Acc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	20	obj	_	_
20	rica	rica	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
21	ediyorum	et	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Polite=Infm|Tense=Pres	20	compound	_	SpaceAfter=No
22	.	.	PUNCT	Punc	_	20	punct	_	_

~~~


