---
layout: base
title:  'Statistics of compound:lvc in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="ota_boun-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="ota_boun-dep-compound-redup.html">compound:redup</a></tt>.

248 nodes (3%) are attached to their parents as `compound:lvc`.

248 instances of `compound:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.09677419354839.

The following 4 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (211; 85% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (33; 13% instances), <tt><a href="ota_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-VERB.html">VERB</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:lvc	color:blue
1	Her	her	DET	Det	_	2	det	_	هر
2	halde	hâl	NOUN	_	Case=Loc|Number=Sing|Person=3	6	obl	_	حالده
3	merkezden	merkez	NOUN	_	Case=Abl|Number=Sing|Person=3	4	obl	_	مركزدن
4	ayrılmak	ayrıl	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	5	nmod:poss	_	آيرلمق
5	gayesini	gaye	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	obj	_	غايه سنى
6	takip	takip	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	تعقيب
7	ediyor	et	VERB	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	6	compound:lvc	_	ايدييور
8	.	.	PUNCT	Stop	_	6	punct	_	.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound:lvc	color:blue
1	Yoksa	yoksa	ADV	_	_	5	advmod	_	يوقسه
2	zavallı	zavallı	ADJ	Adj	_	3	amod	_	زواللى
3	erkeklerin	erkek	NOUN	_	Case=Gen|Number=Plur|Person=3	5	nsubj	_	ارككلرك
4	mi	mi	AUX	Ques	Aspect=Imp|Number=Sing|Person=3|Tense=Pres	3	discourse	_	مى
5	gaip	gaip	ADJ	_	Case=Nom|Number=Sing|Person=3	7	csubj	_	غائب
6	ettiği	et	VERB	Ptcp	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	5	compound:lvc	_	ايتديكى
7	tezahür	tezahür	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	تظاهر
8	eder	et	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	7	compound:lvc	_	ايدر
9	.	.	PUNCT	Stop	_	7	punct	_	.

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 compound:lvc	color:blue
1	Ya	ya	INTJ	_	_	13	discourse	_	يا
2	,	,	PUNCT	Comma	_	1	punct	_	,
3	kendisi	kendi	PRON	Reflex	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Reflex=Yes	13	obl	_	كنديسى
4	için	için	ADP	PCNom	_	3	case	_	ايچون
5	de	de	PART	Emph	_	3	advmod:emph	_	ده
6	“	“	PUNCT	Punc	_	7	punct	_	“
7	İki	iki	NUM	ANum	NumType=Card	8	nummod	_	ايكى
8	rahmetin	rahmet	NOUN	_	Case=Gen|Number=Sing|Person=3	9	nmod:poss	_	رحمتك
9	biri	biri	PRON	Quant	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	12	nmod	_	برى
10	!	!	PUNCT	Excl	_	9	punct	_	!
11	”	”	PUNCT	Punc	_	9	punct	_	”
12	duasını	dua	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	13	obj	_	دعاسنى
13	tekrar	tekrar	ADV	_	_	0	root	_	تكرار
14	ederlerse	et	VERB	_	Aspect=Hab|Number=Plur|Person=3|Polarity=Pos|Tense=Pres	13	compound:lvc	_	ايدرلرسه
15	...	...	PUNCT	TDots	_	14	punct	_	...

~~~


