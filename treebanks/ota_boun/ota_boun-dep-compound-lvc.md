---
layout: base
title:  'Statistics of compound:lvc in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="ota_boun-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="ota_boun-dep-compound-redup.html">compound:redup</a></tt>.

245 nodes (3%) are attached to their parents as `compound:lvc`.

245 instances of `compound:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.09795918367347.

The following 4 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (219; 89% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (21; 9% instances), <tt><a href="ota_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:lvc	color:blue
1	Her	her	DET	Det	_	2	det	_	_
2	halde	hâl	NOUN	_	Case=Loc|Number=Sing|Person=3	6	obl	_	_
3	merkezden	merkez	NOUN	_	Case=Abl|Number=Sing|Person=3	4	obl	_	_
4	ayrılmak	ayrıl	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	5	nmod:poss	_	_
5	gayesini	gaye	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	obj	_	_
6	takip	takip	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
7	ediyor	et	VERB	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	6	compound:lvc	_	_
8	.	.	PUNCT	Stop	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:lvc	color:blue
1	Belki	belki	ADV	_	_	8	advmod	_	_
2	zavallı	zavallı	ADJ	Adj	_	3	amod	_	_
3	adam	adam	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nsubj	_	_
4	ahvâline	ahvâl	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obl	_	_
5	dikkat	dikkat	NOUN	_	Case=Nom|Number=Sing|Person=3	8	advcl	_	_
6	ettiğimden	et	VERB	Ptcp	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	5	compound:lvc	_	_
7	dolayı	dolayı	ADP	PCAbl	_	5	case	_	_
8	müteezzî	müteezzî	ADJ	Adj	_	0	root	_	_
9	olur	ol	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	8	compound:lvc	_	_
10	?	?	PUNCT	Ques	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 compound:lvc	color:blue
1	Ya	ya	INTJ	_	_	13	discourse	_	_
2	,	,	PUNCT	Comma	_	1	punct	_	_
3	kendisi	kendi	PRON	Reflex	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Reflex=Yes	13	obl	_	_
4	için	için	ADP	PCNom	_	3	case	_	_
5	de	de	PART	Emph	_	3	advmod:emph	_	_
6	“	“	PUNCT	Punc	_	7	punct	_	_
7	İki	iki	NUM	ANum	NumType=Card	8	nummod	_	_
8	rahmetin	rahmet	NOUN	_	Case=Gen|Number=Sing|Person=3	9	nmod:poss	_	_
9	biri	biri	PRON	Quant	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	12	nmod	_	_
10	!	!	PUNCT	Excl	_	9	punct	_	_
11	”	”	PUNCT	Punc	_	9	punct	_	_
12	duasını	dua	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	13	obj	_	_
13	tekrar	tekrar	ADV	_	_	0	root	_	_
14	ederlerse	et	VERB	_	Aspect=Hab|Number=Plur|Person=3|Polarity=Pos|Tense=Pres	13	compound:lvc	_	_
15	...	...	PUNCT	TDots	_	14	punct	_	_

~~~


