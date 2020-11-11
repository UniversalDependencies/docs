---
layout: base
title:  'Statistics of nummod in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="be_hse-dep-nummod-gov.html">nummod:gov</a></tt>.

3061 nodes (1%) are attached to their parents as `nummod`.

2271 instances of `nummod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.50277687030382.

The following 13 pairs of parts of speech are connected with `nummod`: <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (2130; 70% instances), <tt><a href="be_hse-pos-SYM.html">SYM</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (240; 8% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (214; 7% instances), <tt><a href="be_hse-pos-NUM.html">NUM</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (207; 7% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (118; 4% instances), <tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (74; 2% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (41; 1% instances), <tt><a href="be_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (19; 1% instances), <tt><a href="be_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (9; 0% instances), <tt><a href="be_hse-pos-X.html">X</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (6; 0% instances), <tt><a href="be_hse-pos-NUM.html">NUM</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-PART.html">PART</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-SYM.html">SYM</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	"	"	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
2	Мы	мы	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
3	часта	часта	ADV	RB	Degree=Pos	4	advmod	_	_
4	рухаемся	рухацца	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
5	дзесьці	дзесьці	ADV	RB	Degree=Pos	9	advmod	_	_
6	паміж	паміж	ADP	IN	_	9	case	_	_
7	гэтымі	гэты	DET	DT	Case=Ins|Number=Plur|PronType=Dem	9	det	_	_
8	двума	два	NUM	CD	Case=Ins|Gender=Masc|NumType=Card	9	nummod	_	_
9	падыходамі	падыход	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	12	12	NUM	CD	Case=Nom|NumType=Card	2	nummod	_	SpaceAfter=No
2	%	%	SYM	SYM	_	4	nsubj	_	_
3	беларусаў	беларус	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	2	nmod	_	_
4	жывуць	жыць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	на	на	ADP	IN	_	8	case	_	_
6	радыяцыйна	радыяцыйна	ADV	RB	Degree=Pos	7	advmod	_	_
7	забруджаных	забрудзіць	VERB	VBNL	Aspect=Perf|Case=Loc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	8	acl	_	_
8	тэрыторыях	тэрыторыя	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
9	❗	❗	SYM	SYM	_	4	obj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	ДВУХ	два	NUM	CD	Animacy=Anim|Case=Acc|Gender=Masc|NumType=Card	2	nummod	_	_
2	ПАСАДЗІЛІ	пасадзіць	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	ТРЭЦЯГА	трэці	ADJ	JJL	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	5	obj	_	_
5	АШТРАФАВАЛІ	аштрафаваць	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


