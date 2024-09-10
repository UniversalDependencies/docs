---
layout: base
title:  'Statistics of iobj in UD_Georgian-GLC'
udver: '2'
---

## Treebank Statistics: UD_Georgian-GLC: Relations: `iobj`

This relation is universal.

23 nodes (1%) are attached to their parents as `iobj`.

15 instances of `iobj` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.17391304347826.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt> (16; 70% instances), <tt><a href="ka_glc-pos-VERB.html">VERB</a></tt>-<tt><a href="ka_glc-pos-PRON.html">PRON</a></tt> (6; 26% instances), <tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ka_glc-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	ახალგაზრდა	ახალგაზრდა	ADJ	Adj	Case=Nom|Number=Sing	2	amod	_	Translit=axalgazrda
2	გოგონები	გოგონი	NOUN	Noun	Animacy=Anim|Case=Nom|Number=Plur	4	nsubj	_	Translit=gogonebi
3	სიცილ-კისკისით	სიცილ-კისკისი	NOUN	Noun	Animacy=Inan|Case=Ins|Number=Sing	4	obl	_	Translit=sicʻil-kiskisitʻ
4	მიჰფენოდნენ	მიი/ეფინება	VERB	Verb	Aspect=Perf|Mood=Sub|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Subcat=Intr|Tense=PastPerf|Voice=Act	0	root	_	Translit=mihpʻenodnen
5	შარაგზას	შარაგზა	NOUN	Noun	Animacy=Inan|Case=Dat|Number=Sing	4	iobj	_	SpaceAfter=No|Translit=šaragzas
6	.	.	PUNCT	F	PunctType=Peri	4	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	თქვენ	თქვენ	PRON	Pron	Case=Dat|Number=Plur|Person=2|PronType=Prs	3	iobj	_	Translit=tʻkʻven
2	ალბათ	ალბათ	PART	Part	PartType=Int	3	advmod	_	Translit=albatʻ
3	გაინტერესებთ	აინტერესებს	VERB	Verb	Aspect=Imp|Mood=Ind|Person[io]=2|Person[obj]=3|Person[subj]=1|Subcat=Tran|Tense=Pres|Voice=Act	0	root	_	Translit=gainteresebtʻ
4	რას	რა	PRON	Pron	Case=Dat|Number=Sing|PronType=Int	3	obj	_	Translit=ras
5	მეძახიან	იძახის	VERB	Verb	Aspect=Imp|Mood=Ind|Number[io]=Sing|Number[subj]=Plur|Person[io]=1|Person[subj]=3|Subcat=Tran|Tense=Pres|Voice=Act	3	ccomp	_	SpaceAfter=No|Translit=meżaxian
6	.	.	PUNCT	F	PunctType=Peri	3	punct	_	Translit=.

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 21 iobj	color:blue
1	თეორიულ	თეორიული	ADJ	Adj	Case=Dat|Number=Sing	2	amod	_	Translit=tʻeoriul
2	კვლევა-ძიებას	კვლევა-ძიება	NOUN	Noun	Animacy=Inan|Case=Dat|Number=Sing	4	obl	_	Translit=kvleva-żiebas
3	თან	თან	ADP	Post	AdpType=Post|Case=Dat	2	case	_	Translit=tʻan
4	ერთად	ერთად	ADV	Adv	AdvType=Man	8	advmod	_	Translit=ertʻad
5	იგი	იგი	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	Translit=igi
6	დიდ	დიდი	ADJ	Adj	Case=Dat|Degree=Pos|Number=Sing	7	amod	_	Translit=did
7	მნიშვნელობას	მნიშვნელობა	NOUN	Noun	Animacy=Inan|Case=Dat|Number=Sing	8	obj	_	Translit=mnišvnelobas
8	ანიჭებს	ანიჭებს	VERB	Verb	Aspect=Imp|Mood=Ind|Number[subj]=Sing|Person[io]=3|Person[obj]=3|Person[subj]=3|Subcat=Tran|Tense=Pres|Voice=Act	0	root	_	SpaceAfter=No|Translit=aničebs
9	,	,	PUNCT	F	PunctType=Comm	8	punct	_	Translit=,
10	მუშაობის	მუშაობა	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	12	nmod	_	Translit=mušaobis
11	მეორე	ორი	NUM	Num	Case=Dat|Number=Sing|NumType=Ord	12	nummod	_	Translit=meore
12	მხარეს	მხარე	NOUN	Noun	Animacy=Inan|Case=Dat|Number=Sing	8	iobj	_	Translit=mxares
13	–	–	PUNCT	F	PunctType=Dash	21	punct	_	Translit=–
14	საშუალო	საშუალო	ADJ	Adj	Case=Gen|Number=Sing	17	nmod	_	Translit=sašualo
15	და	და	CCONJ	Conj	_	16	cc	_	Translit=da
16	უმაღლესი	მაღალი	ADJ	Adj	Case=Gen|Degree=Sup|Number=Sing	14	conj	_	Translit=umaġlesi
17	სასწავლებლებისა	სასწავლებელი	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Plur	21	obl	_	Translit=sascavleblebisa
18	თვის	თვის	ADP	Post	AdpType=Post|Case=Gen	17	case	_	Translit=tʻvis
19	გრამატიკული	გრამატიკული	ADJ	Adj	Case=Gen|Number=Sing	20	nmod	_	Translit=gramatikuli
20	სახელმძღვანელოს	სახელმძღვანელო	NOUN	Noun	Animacy=Inan|Case=Gen|Number=Sing	21	nmod	_	Translit=saxelmżġvanelos
21	შედგენას	შედგენა	NOUN	Noun	Animacy=Inan|Case=Dat|Number=Sing	12	iobj	_	SpaceAfter=No|Translit=šedgenas
22	.	.	PUNCT	F	PunctType=Peri	8	punct	_	Translit=.

~~~


