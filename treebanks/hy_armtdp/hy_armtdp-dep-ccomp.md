---
layout: base
title:  'Statistics of ccomp in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `ccomp`

This relation is universal.

109 nodes (1%) are attached to their parents as `ccomp`.

106 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.54128440366972.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (76; 70% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (12; 11% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (11; 10% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (5; 5% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Զգաց	զգալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	որ	որ	SCONJ	_	_	4	mark	_	_
4	ուզում	ուզել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	1	ccomp	_	_
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	_
6	չլինել	լինել	VERB	_	Polarity=Neg|Subcat=Intr|VerbForm=Inf|Voice=Mid	4	xcomp	_	_
7	այս	այս	DET	_	Distance=Prox|PronType=Dem	8	det	_	_
8	բոլորի	բոլորը	PRON	_	Case=Gen|Definite=Ind|PronType=Tot	6	obl	_	_
9	մեջ	մեջ	ADP	_	AdpType=Post|Case=Nom	8	case	_	SpaceAfter=No
10	։	։	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	—	—	PUNCT	_	_	15	punct	_	_
2	Բայց	բայց	CCONJ	_	_	15	cc	_	_
3	երբ	երբ	SCONJ	_	_	4	mark	_	_
4	տեսավ	տեսնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	15	advcl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	որ	որ	SCONJ	_	_	8	mark	_	_
7	ծնվողը	ծնվող	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	8	nsubj	_	_
8	մենակ	մենակ	ADJ	_	_	4	ccomp	_	_
9	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	8	cop	_	SpaceAfter=No
10	՝	՝	PUNCT	_	_	12	punct	_	_
11	պտուղը	պտուղ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	12	nsubj	_	_
12	զույգ	զույգ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	8	conj	_	_
13	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	cop	_	SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	հասկացավ	հասկանալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
16	,	,	PUNCT	_	_	20	punct	_	_
17	որ	որ	SCONJ	_	_	20	mark	_	_
18	իր	ինքը	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	19	det:poss	_	_
19	ուժերից	ուժ	NOUN	_	Animacy=Inan|Case=Abl|Definite=Ind|Number=Plur	20	obl	_	_
20	վեր	վեր	ADV	_	Degree=Pos	15	ccomp	_	_
21	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	20	cop	_	SpaceAfter=No
22	։	։	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 1 ccomp	color:blue
1	Առիթ	առիթ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	13	ccomp	_	_
2	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	թե	թե	CCONJ	_	_	5	cc	_	_
5	պատճառ	պատճառ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	1	conj	_	_
6	այդ	այդ	DET	_	Distance=Med|PronType=Dem	7	det	_	_
7	ցույցը	ցույց	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	1	nsubj	_	SpaceAfter=No
8	՝	՝	PUNCT	_	_	9	punct	_	_
9	վստահ	վստահ	ADJ	_	Degree=Pos	0	root	_	_
10	չեմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	9	cop	_	SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	_
12	որ	որ	SCONJ	_	_	13	mark	_	_
13	գիտեմ	գիտենալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	9	xcomp	_	SpaceAfter=No
14	:	:	PUNCT	_	_	9	punct	_	_

~~~


