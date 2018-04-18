---
layout: base
title:  'Statistics of ccomp in UD_Belarusian'
udver: '2'
---

## Treebank Statistics: UD_Belarusian: Relations: `ccomp`

This relation is universal.

93 nodes (1%) are attached to their parents as `ccomp`.

56 instances of `ccomp` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.35483870967742.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-VERB.html">VERB</a></tt> (70; 75% instances), <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-ADJ.html">ADJ</a></tt> (12; 13% instances), <tt><a href="be-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="be-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="be-pos-PRON.html">PRON</a></tt>-<tt><a href="be-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 ccomp	color:blue
1	Як	як	ADV	WRB	Degree=Pos	3	advmod	_	_
2	гэта	гэта	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
3	скончылася	скончыцца	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	5	ccomp	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	можаце	магчы	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	бачыць	бачыць	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	5	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 ccomp	color:blue
1	Раптам	раптам	ADV	RB	Degree=Pos	2	advmod	_	_
2	аказалася	аказацца	VERB	VBC	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	8	punct	_	_
4	што	што	SCONJ	IN	_	14	mark	_	_
5	“	“	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No
6	мёртвая	мёртвы	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	SpaceAfter=No
7	”	”	PUNCT	PUNCT	_	6	punct	_	_
8	мова	мова	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
9	зусім	зусім	ADV	RB	Degree=Pos	10	advmod	_	_
10	не	не	PART	UH	Polarity=Neg	11	advmod	_	_
11	такая	такi	DET	DT	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	14	det	_	_
12	ўжо	ўжо	PART	UH	_	14	advmod:discourse	_	_
13	і	і	PART	UH	_	14	advmod:discourse	_	_
14	мёртвая	мёртвы	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	ccomp	_	SpaceAfter=No
15	!	!	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp	color:blue
1	Я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	цалкам	цалкам	ADV	RB	Degree=Pos	3	advmod	_	_
3	упэўнена	упэўнены	ADJ	JJH	Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	9	punct	_	_
5	што	што	SCONJ	IN	_	9	mark	_	_
6	беларуская	беларускі	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_
7	мова	мова	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
8	зноў	зноў	ADV	RB	Degree=Pos	9	advmod	_	_
9	загучыць	загучыць	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	3	ccomp	_	_
10	у	у	ADP	IN	_	12	case	_	_
11	беларускім	беларускі	ADJ	JJL	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	12	amod	_	_
12	народзе	народ	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


