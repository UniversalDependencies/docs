---
layout: base
title:  'Statistics of nummod in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `nummod`

This relation is universal.

189 nodes (1%) are attached to their parents as `nummod`.

188 instances of `nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32804232804233.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> (186; 98% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="hy_armtdp-pos-X.html">X</a></tt>-<tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	Երկու	երկու	NUM	_	NumForm=Word|NumType=Card	2	nummod	_	_
2	դեպքում	դեպք	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	4	obl	_	_
3	էլ	էլ	ADV	_	_	2	advmod:emph	_	_
4	տեսանք	տեսնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	mark	_	_
6	թե	թե	SCONJ	_	_	8	mark	_	_
7	ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	8	obj	_	_
8	եղավ	լինել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	4	ccomp	_	_
9	հետո	հետո	ADV	_	_	8	advmod	_	SpaceAfter=No
10	:	:	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Ենթադրաբար	ենթադրաբար	ADV	_	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	_
3	նա	նա	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
4	60	60	NUM	_	NumForm=Digit|NumType=Card	5	nummod	_	_
5	տարեկան	տարեկան	ADJ	_	_	0	root	_	_
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	SpaceAfter=No
7	։	։	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 nummod	color:blue
1	Այս	այս	DET	_	Distance=Prox|PronType=Dem	2	det	_	_
2	իրադարձությունը	իրադարձություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	_
3	կրկնակի	կրկնակի	ADV	_	_	4	advmod	_	_
4	հաջողված	հաջողվել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	_
5	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	4	cop	_	_
6	«	«	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	Allianplace	Allianplace	X	_	Foreign=Yes	23	nmod	_	SpaceAfter=No
8	»	»	PUNCT	_	_	7	punct	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	«	«	PUNCT	_	_	11	punct	_	SpaceAfter=No
11	The	The	X	_	Foreign=Yes	7	conj	_	_
12	Windrose	The	X	_	Foreign=Yes	11	flat	_	SpaceAfter=No
13	»	»	PUNCT	_	_	11	punct	_	SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	«	«	PUNCT	_	_	16	punct	_	SpaceAfter=No
16	Project	Project	X	_	Foreign=Yes	7	conj	_	_
17	12	12	NUM	_	NumForm=Digit|NumType=Card	16	nummod	_	SpaceAfter=No
18	»	»	PUNCT	_	_	16	punct	_	_
19	և	և	CCONJ	_	_	21	cc	_	_
20	«	«	PUNCT	_	_	21	punct	_	SpaceAfter=No
21	Նեմրա	Նեմրա	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Com|Number=Sing	7	conj	_	SpaceAfter=No
22	»	»	PUNCT	_	_	21	punct	_	_
23	խմբերի	խումբ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	25	nmod:poss	_	_
24	անկրկնելի	անկրկնելի	ADJ	_	Degree=Pos	25	amod	_	_
25	կատարումների	կատարում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	4	obl	_	_
26	շնորհիվ	շնորհիվ	ADP	_	AdpType=Post	25	case	_	SpaceAfter=No
27	:	:	PUNCT	_	_	4	punct	_	_

~~~


