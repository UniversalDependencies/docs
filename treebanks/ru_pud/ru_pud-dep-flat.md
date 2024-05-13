---
layout: base
title:  'Statistics of flat in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="ru_pud-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="ru_pud-dep-flat-name.html">flat:name</a></tt>.

61 nodes (0%) are attached to their parents as `flat`.

61 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.54098360655738.

The following 3 pairs of parts of speech are connected with `flat`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (27; 44% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (24; 39% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt> (10; 16% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat	color:blue
1	В	в	ADP	IN	_	3	case	_	_
2	2011	2011	ADJ	ORD	_	3	amod	_	_
3	году	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	_	_
4	Блант	Блант	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	_	_
5	была	быть	AUX	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	aux:pass	_	_
6	названа	назвать	VERB	VBNH	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
7	послом	посол	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	xcomp	_	_
8	нового	новый	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	аромата	аромат	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
10	Yves	Yves	PROPN	NNP	Foreign=Yes	9	flat	_	_
11	Saint	Saint	PROPN	NNP	Foreign=Yes	10	flat:foreign	_	_
12	Laurent	Laurent	PROPN	NNP	Foreign=Yes	10	flat:foreign	_	_
13	Opium	Opium	PROPN	NNP	Foreign=Yes	10	flat:foreign	_	SpaceAfter=No
14	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Журнал	журнал	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
2	Louis	Louis	X	NNP	Foreign=Yes	1	flat	_	_
3	Post	Post	X	NNP	Foreign=Yes	2	flat:foreign	_	_
4	Dispatch	Dispatch	X	NNP	Foreign=Yes	2	flat:foreign	_	_
5	назвал	назвать	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	его	его	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3	5	obj	_	_
7	одной	один	NUM	CD	Case=Ins|Gender=Fem|Number=Sing	5	iobj	_	_
8	из	из	ADP	IN	_	10	case	_	_
9	лучших	лучший	ADJ	JJS	Case=Gen|Degree=Sup|Number=Plur	10	amod	_	_
10	ролей	роль	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	7	nmod	_	_
11	Лабафа	Лабаф	PROPN	NNP	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 flat	color:blue
1	Эти	этот	DET	DT	Case=Nom|Number=Plur	3	det	_	_
2	растительные	растительный	ADJ	JJ	Case=Nom|Degree=Pos|Number=Plur	3	amod	_	_
3	семьи	семья	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	6	nsubj	_	_
4	все	все	ADV	RB	Degree=Pos	5	advmod	_	_
5	еще	еще	ADV	RB	Degree=Pos	6	advmod	_	_
6	присутствуют	присутствовать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	в	в	ADP	IN	_	11	case	_	_
8	Папуа	Папуа	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
9	—	—	PUNCT	-	_	11	punct	_	Proper=True
10	Новой	новый	ADJ	JJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	Proper=True
11	Гвинее	Гвинея	PROPN	NNP	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	8	flat	_	SpaceAfter=No
12	.	.	PUNCT	.	_	6	punct	_	_

~~~


