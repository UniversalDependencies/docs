---
layout: base
title:  'Statistics of advcl in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `advcl`

This relation is universal.

37 nodes (0%) are attached to their parents as `advcl`.

37 instances of `advcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.45945945945946.

The following 6 pairs of parts of speech are connected with `advcl`: <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (27; 73% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (4; 11% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (3; 8% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advcl	color:blue
1	Herkes	herkes	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
2	istediği	iste	VERB	Verb	Aspect=Perf|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	4	advcl	_	_
3	gibi	gibi	ADP	PCNom	_	2	case	_	_
4	sevişiyor	seviş	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	8	punct	_	_
6	her	her	DET	Det	_	8	nsubj	_	_
7	şey	şey	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	compound	_	_
8	serbest	serbest	ADJ	Adj	_	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advcl	color:blue
1	Çok	çok	ADJ	Adj	_	2	amod	_	_
2	sevdiğim	sev	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=1|Polarity=Pos|Tense=Past|VerbForm=Part	5	advcl	_	_
3	bir	bir	DET	ANum	Definite=Ind|PronType=Art	4	det	_	_
4	mahalle	mahalle	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nmod:poss	_	_
5	arkadaşım	arkadaş	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	6	nsubj	_	_
6	var	var	ADJ	Adj	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 5 advcl	color:blue
1	Ardından	art	NOUN	Noun	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	2	nmod	_	_
2	gene	gene	ADV	Adverb	_	15	advmod	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	2	punct	_	_
4	gündüzleri	gündüz	NOUN	Noun	Case=Acc|Number=Plur|Person=3	5	obl	_	_
5	gezdiğim	gez	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=1|Polarity=Pos|Tense=Past|VerbForm=Part	14	advcl	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	5	punct	_	_
7	birlikte	birlikte	ADP	PCIns	_	12	case	_	_
8	aynı	aynı	ADJ	Adj	_	9	amod	_	_
9	mahallede	mahalle	NOUN	Noun	Case=Loc|Number=Sing|Person=3	11	nmod	_	_
10	ki	ki	ADP	Rel	_	9	case	_	_
11	sinemaları	sinema	NOUN	Noun	Case=Acc|Number=Plur|Person=3	12	obj	_	_
12	dolaştığım	dolaş	VERB	Verb	Aspect=Perf|Mood=Ind|Number[psor]=Sing|Person[psor]=1|Polarity=Pos|Tense=Past|VerbForm=Part	14	acl	_	_
13	genç	genç	ADJ	Adj	_	14	amod	_	_
14	kızlara	kız	ADJ	NAdj	Case=Dat|Number=Plur|Person=3	15	amod	_	_
15	geliyordu	gel	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Past	0	root	_	_
16	sıra	sıra	NOUN	Noun	Case=Nom|Number=Sing|Person=3	15	nsubj	_	SpaceAfter=No
17	.	.	PUNCT	Punc	_	15	punct	_	_

~~~


