---
layout: base
title:  'Statistics of nmod:npmod in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="hy_armtdp-dep-nmod-poss.html">nmod:poss</a></tt>.

106 nodes (1%) are attached to their parents as `nmod:npmod`.

90 instances of `nmod:npmod` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.65094339622642.

The following 6 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (76; 72% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (19; 18% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:npmod	color:blue
1	Երեսնիվայր	երեսնիվայր	ADV	_	_	7	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	ծնոտը	ծնոտ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	1	appos	_	_
4	բազուկին	բազուկ	NOUN	_	Animacy=Inan|Case=Dat|Definite=Def|Number=Sing	3	nmod:npmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	նա	նա	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
7	պառկած	պառկել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	_
8	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	7	aux	_	_
9	սառը	սառը	ADJ	_	_	10	amod	_	_
10	ավազի	ավազ	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	7	obl	_	_
11	վրա	վրա	ADP	_	AdpType=Post|Case=Nom	10	case	_	SpaceAfter=No
12	։	։	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 nmod:npmod	color:blue
1	Այդ	այդ	DET	_	Distance=Med|PronType=Dem	2	det	_	_
2	նշանակությունը	նշանակություն	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	_
3	հատկապես	հատկապես	ADV	_	_	4	advmod	_	_
4	ընդգծվեց	ընդգծվել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
5	այն	այն	DET	_	Distance=Dist|PronType=Dem	6	det	_	_
6	բանից	բան	NOUN	_	Animacy=Inan|Case=Abl|Definite=Ind|Number=Sing	4	obl	_	_
7	հետո	հետո	ADP	_	AdpType=Post	6	case	_	SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	երբ	երբ	PRON	_	Case=Nom|PronType=Rel	11	obl	_	_
10	տեղի	տեղի	ADV	_	Style=Arch	11	compound:lvc	_	_
11	ունեցավ	ունենալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	6	acl:relcl	_	_
12	Իրանի	Իրան	PROPN	_	Animacy=Inan|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	15	nmod:npmod	_	_
13	շուրջ	շուրջ	ADP	_	AdpType=Post	12	case	_	_
14	միջուկային	միջուկային	ADJ	_	_	15	amod	_	_
15	համաձայնությունը	համաձայնություն	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	11	nsubj	_	_
16	Արևմուտքի	արևմուտք	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	11	obl	_	_
17	հետ	հետ	ADP	_	AdpType=Post	16	case	_	SpaceAfter=No
18	:	:	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 18 nmod:npmod	color:blue
1	Կանանցից	կին	NOUN	_	Animacy=Hum|Case=Abl|Definite=Ind|Number=Plur	2	nmod	_	_
2	երկուսը	երկուս	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	_
3	նրա	նա	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	4	det:poss	_	_
4	թևերն	թև	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Plur	5	obl	_	_
5	ընկած	ընկնել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	7	advcl	_	_
6	քռքաշ	քռքաշ	ADV	_	Style=Vrnc	7	advmod	_	_
7	տարան	տանել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	տուն	տուն	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	7	obl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	13	punct	_	_
10	իսկ	իսկ	CCONJ	_	_	13	advmod:emph	_	_
11	պատշարի	պատշար	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	12	nmod:poss	_	_
12	կնիկ	կնիկ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	13	nmod	_	_
13	Բավականը	Բավական	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	23	nsubj:caus	_	_
14	մի	մի	DET	_	PronType=Art	15	det	_	_
15	քանիսին	քանիսը	PRON	_	Case=Dat|Definite=Def|Number=Sing|PronType=Ind	23	iobj:agent	_	SpaceAfter=No
16	,	,	PUNCT	_	_	20	punct	_	_
17	այդ	այդ	DET	_	Distance=Med|PronType=Dem	18	det	_	_
18	թվում	թիվ	NOUN	_	Animacy=Inan|Case=Loc|Definite=Ind|Number=Sing	20	nmod:npmod	_	_
19	և	և	CCONJ	_	_	20	advmod:emph	_	_
20	Սաթոյին	Սաթո	PROPN	_	Animacy=Hum|Case=Dat|Definite=Def|NameType=Giv|Number=Sing	15	appos	_	SpaceAfter=No
21	,	,	PUNCT	_	_	23	punct	_	_
22	աչքունքով	աչքունք	NOUN	_	Animacy=Inan|Case=Ins|Definite=Ind|Number=Sing	23	obl	_	_
23	հասկացրեց	հասկանալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Cau	7	conj	_	SpaceAfter=No
24	,	,	PUNCT	_	_	28	punct	_	_
25	որ	որ	SCONJ	_	_	28	mark	_	_
26	իր	ինքը	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	27	det:poss	_	_
27	հետևից	հետև	NOUN	_	Animacy=Inan|Case=Abl|Definite=Ind|Number=Sing	28	obl	_	_
28	գնան	գնալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	23	ccomp	_	SpaceAfter=No
29	։	։	PUNCT	_	_	7	punct	_	_

~~~


