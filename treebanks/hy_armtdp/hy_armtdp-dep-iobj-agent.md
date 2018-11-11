---
layout: base
title:  'Statistics of iobj:agent in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `iobj:agent`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-iobj.html">iobj</a></tt>.

4 nodes (0%) are attached to their parents as `iobj:agent`.

3 instances of `iobj:agent` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.75.

The following 3 pairs of parts of speech are connected with `iobj:agent`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (2; 50% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (1; 25% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 iobj:agent	color:blue
1	—	—	PUNCT	_	_	9	punct	_	_
2	Մեզ	մենք	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	9	iobj:agent	_	_
3	ոչ	ոչ	PART	_	_	4	advmod	_	_
4	սովորական	սովորական	ADJ	_	Degree=Pos	7	amod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	սրբազան	սրբազան	ADJ	_	Degree=Pos	4	conj	_	_
7	պատերազմ	պատերազմ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	9	nsubj:pass	_	_
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	սպասվում	սպասել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	_
10	մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	12	det:poss	_	_
11	սուրբ	սուրբ	ADJ	_	Degree=Pos	12	amod	_	_
12	հավատի	հավատ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	13	nmod:poss	_	_
13	մաքրության	մաքրություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	14	nmod:poss	_	_
14	պահպանման	պահպանում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	9	obl	_	_
15	համար	համար	ADP	_	AdpType=Post	14	case	_	SpaceAfter=No
16	:	:	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 14 iobj:agent	color:blue
1	Կանանցից	կին	NOUN	_	Animacy=Hum|Case=Abl|Definite=Ind|Number=Plur	2	nmod	_	_
2	երկուսը	երկուս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing|NumForm=Word	7	nsubj	_	_
3	նրա	նա	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	4	det:poss	_	_
4	թևերն	թև	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	5	obl	_	_
5	ընկած	ընկնել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	7	advcl	_	_
6	քռքաշ	քռքաշ	ADV	_	Style=Vrnc	7	advmod	_	_
7	տարան	տանել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	տուն	տուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	obl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	23	punct	_	_
10	իսկ	իսկ	CCONJ	_	_	23	cc	_	_
11	պատշարի	պատշար	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	12	nmod:poss	_	_
12	կնիկ	կնիկ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	13	nmod	_	_
13	Բավականը	Բավական	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	23	nsubj:caus	_	_
14	մի	մի	DET	_	PronType=Art	23	iobj:agent	_	_
15	քանիսին	քանիսը	PRON	_	Case=Dat|Number=Sing|PronType=Ind	14	fixed	_	SpaceAfter=No
16	,	,	PUNCT	_	_	20	punct	_	_
17	այդ	այդ	DET	_	Distance=Med|PronType=Dem	18	det	_	_
18	թվում	թիվ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	20	nmod:npmod	_	_
19	և	և	CCONJ	_	_	20	advmod:emph	_	_
20	Սաթոյին	Սաթո	PROPN	_	Animacy=Hum|Case=Dat|Definite=Def|NameType=Giv|Number=Sing	14	appos	_	SpaceAfter=No
21	,	,	PUNCT	_	_	23	punct	_	_
22	աչքունքով	աչքունք	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	23	obl	_	_
23	հասկացրեց	հասկանալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Cau	7	conj	_	SpaceAfter=No
24	,	,	PUNCT	_	_	28	punct	_	_
25	որ	որ	SCONJ	_	_	28	mark	_	_
26	իր	ինքը	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	27	det:poss	_	_
27	հետևից	հետև	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	28	obl	_	_
28	գնան	գնալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	23	ccomp	_	SpaceAfter=No
29	։	։	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj:agent	color:blue
1	Գոնե	գոնե	PART	_	_	2	advmod:emph	_	_
2	սա	սա	PRON	_	Case=Nom|Distance=Prox|Number=Sing|PronType=Dem	4	nsubj:caus	_	_
3	պիտի	պիտի	PART	_	Mood=Nec|Polarity=Pos	4	aux	_	_
4	հասկացներ	հասկանալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Cau	0	root	_	_
5	իշխանությանը	իշխանություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	4	iobj:agent	_	SpaceAfter=No
6	,	,	PUNCT	_	_	17	punct	_	_
7	որ	որ	SCONJ	_	_	17	mark	_	_
8	նույնիսկ	նույնիսկ	PART	_	_	9	advmod:emph	_	_
9	իրենց	ինքը	PRON	_	Case=Dat|Number=Plur|Person=3|PronType=Emp|Reflex=Yes	12	obl	_	_
10	համար	համար	ADP	_	AdpType=Post	9	case	_	_
11	միակ	միակ	ADV	_	_	12	advmod	_	_
12	ընդունելի	ընդունելի	ADJ	_	Degree=Pos	13	amod	_	_
13	ընդդիմություն	ընդդիմություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	14	nmod	_	_
14	ԵԼՔ-ն	ելք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	17	nsubj	_	_
15	արդեն	արդեն	ADV	_	_	17	advmod	_	_
16	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	17	aux	_	_
17	բավարարվում	բավարարվել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	4	ccomp	_	_
18	խորհրդարանով	խորհրդարան	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	17	obl	_	SpaceAfter=No
19	:	:	PUNCT	_	_	4	punct	_	_

~~~


