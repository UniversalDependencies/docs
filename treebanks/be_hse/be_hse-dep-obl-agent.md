---
layout: base
title:  'Statistics of obl:agent in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-obl.html">obl</a></tt>.

130 nodes (0%) are attached to their parents as `obl:agent`.

123 instances of `obl:agent` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.78461538461538.

The following 6 pairs of parts of speech are connected with `obl:agent`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (112; 86% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt> (10; 8% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-PRON.html">PRON</a></tt> (5; 4% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Бунт	бунт	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj:pass	_	_
2	быў	быць	AUX	VBC	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	_	_
3	жорстка	жорстка	ADV	RB	Degree=Pos	4	advmod	_	_
4	падаўлены	падавіць	VERB	VBNH	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
5	савецкімі	савецкі	ADJ	JJL	Case=Ins|Degree=Pos|Number=Plur	6	amod	_	_
6	акупантамі	акупант	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Plur	4	obl:agent	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:agent	color:blue
1	Судовы	судовы	ADJ	JJL	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	працэс	працэс	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	15	obj	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	ініцыяваны	ініцыяваць	VERB	VBNH	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	2	acl	_	_
5	Леанідам	Леанід	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	4	obl:agent	_	_
6	Зайдэсам	Зайдэс	PROPN	NNP	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	5	flat:name	_	_
7	у	у	ADP	IN	_	9	case	_	_
8	тым	той	DET	DT	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	_
9	ліку	лік	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	11	obl	_	_
10	супраць	супраць	ADP	IN	_	11	case	_	_
11	мяне	я	PRON	PRP	Case=Gen|Number=Sing|Person=1|PronType=Prs	4	obl	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	4	punct	_	_
13	я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	15	nsubj	_	_
14	-	-	PUNCT	PUNCT	_	13	punct	_	_
15	ВЫЙГРАЎ	выйграць	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:agent	color:blue
1	Яна	яна	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	проста	проста	PART	UH	_	3	advmod	_	_
3	павінна	павінны	ADJ	JJH	Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	0	root	_	_
4	быць	быць	AUX	VB	VerbForm=Inf|Voice=Act	7	aux:pass	_	_
5	уласнаручна	уласнаручна	ADV	RB	Degree=Pos	7	advmod	_	_
6	ім	ён	PRON	_	Case=Ins|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obl:agent	_	_
7	падпісана	падпісаць	VERB	VBNH	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	3	xcomp	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	11	punct	_	_
9	аб	аб	ADP	IN	_	10	case	_	_
10	згодзе	згода	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	11	obl	_	_
11	балятавацца	балятавацца	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Mid	7	conj	_	SpaceAfter=No
12	»	»	PUNCT	PUNCT	_	7	punct	_	_

~~~


