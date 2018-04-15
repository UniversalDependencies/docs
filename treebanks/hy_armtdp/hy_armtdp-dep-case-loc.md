---
layout: base
title:  'Statistics of case:loc in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `case:loc`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-case.html">case</a></tt>.

8 nodes (0%) are attached to their parents as `case:loc`.

8 instances of `case:loc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 2 pairs of parts of speech are connected with `case:loc`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (7; 88% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 case:loc	color:blue
1	Եթե	եթե	SCONJ	_	_	3	mark	_	_
2	մեկը	մեկ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing|NumForm=Word	3	nsubj	_	_
3	լիներ	լինել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	9	advcl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	էլի	էլի	ADV	_	_	6	advmod:emph	_	_
6	ոչինչ	ոչինչ	PRON	_	PronType=Neg	3	discourse	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	մորը	մայր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	9	iobj	_	_
9	կասեր	ասել	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
10	՝	՝	PUNCT	_	_	12	punct	_	_
11	մեռած	մեռնել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	12	xcomp	_	_
12	ծնվեց	ծնվել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	9	ccomp	_	SpaceAfter=No
13	,	,	PUNCT	_	_	19	punct	_	SpaceAfter=No
14	—	—	PUNCT	_	_	19	punct	_	_
15	էդպիսի	այդպիսի	DET	_	Distance=Med|PronType=Exc|Style=Coll	17	det	_	_
16	՞	՞	PUNCT	_	_	15	punct	_	_
17	կյանքեր	կյանք	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Plur	19	nsubj	_	_
18	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	19	aux	_	_
19	անցել	անցնել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	9	parataxis	_	_
20	ձեռի	ձեռ	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing|Style=Coll	19	obl	_	_
21	տակով	տակ	ADP	_	AdpType=Post|Case=Ins	20	case:loc	_	SpaceAfter=No
22	.	.	PUNCT	_	_	25	punct	_	_
23	կյանքումահ	կյանքումահ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	24	obj	_	_
24	դասդասելով	դասդասել	VERB	_	Case=Ins|Definite=Ind|Number=Coll|Polarity=Pos|Subcat=Tran|VerbForm=Gdv|Voice=Act	25	advcl	_	_
25	գնում	գնալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	19	conj	_	_
26	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	25	aux	_	SpaceAfter=No
27	։	։	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case:loc	color:blue
1	Մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	2	det:poss	_	_
2	շարժումը	շարժում	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	_
3	մեր	մենք	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	5	obl	_	_
4	միջի	մեջ	ADP	_	AdpType=Post|Case=Dat	3	case:loc	_	_
5	անհավանականն	անհավանական	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	0	root	_	_
6	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	5	cop	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	որ	որ	SCONJ	_	_	10	mark	_	_
9	հավանաբար	հավանաբար	ADV	_	_	10	advmod	_	_
10	բացվում	բացվել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	5	acl	_	_
11	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	aux	_	_
12	հարյուր	հարյուր	NUM	_	NumForm=Word|NumType=Card	13	nummod	_	_
13	տարին	տարի	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	14	obl	_	_
14	մեկ	մեկ	ADV	_	NumForm=Word|NumType=Dist	10	advmod	_	SpaceAfter=No
15	:	:	PUNCT	_	_	5	punct	_	_

~~~


