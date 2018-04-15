---
layout: base
title:  'Statistics of compound in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="hy_armtdp-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="hy_armtdp-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="hy_armtdp-dep-compound-svc.html">compound:svc</a></tt>.

9 nodes (0%) are attached to their parents as `compound`.

7 instances of `compound` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.88888888888889.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (7; 78% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 compound	color:blue
1	—	—	PUNCT	_	_	4	punct	_	_
2	Քանի	քանի	DET	_	PronType=Exc	4	det	_	_
3	՜	՜	PUNCT	_	_	2	punct	_	_
4	անգամ	անգամ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	0	root	_	SpaceAfter=No
5	...	...	PUNCT	_	_	12	punct	_	_
6	վերջերս	վերջ	NOUN	_	Animacy=Inan|Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=1	12	obl	_	_
7	էլ	էլ	PART	_	_	6	advmod:emph	_	_
8	էն	այն	DET	_	Distance=Dist|PronType=Dem|Style=Coll	9	det	_	_
9	եթիմ	եթիմ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing|Style=Vrnc	12	nsubj	_	SpaceAfter=No
10	-	-	PUNCT	_	_	11	punct	_	SpaceAfter=No
11	անտերին	անտեր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	9	compound	_	_
12	օգնեց	օգնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|VerbForm=Fin|Voice=Mid	4	parataxis	_	SpaceAfter=No
13	՝	՝	PUNCT	_	_	16	punct	_	_
14	դարբնի	դարբին	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	16	nmod:poss	_	_
15	թերհաս	թերհաս	ADJ	_	_	16	amod	_	_
16	աղջկան	աղջիկ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	9	appos	_	SpaceAfter=No
17	։	։	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 compound	color:blue
1	Մի	մի	DET	_	PronType=Art	2	det	_	_
2	անգամ	անգամ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	3	obl	_	_
3	տեսել	տեսնել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
4	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	3	aux	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	առավոտ	առավոտ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	7	nmod	_	_
7	ծեգին	ծեգ	NOUN	_	Animacy=Inan|Case=Dat|Definite=Def|Number=Sing	3	obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	SpaceAfter=No
9	—	—	PUNCT	_	_	10	punct	_	_
10	չիմացավ	իմանալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis	_	_
11	էլ	էլ	PART	_	_	10	discourse	_	SpaceAfter=No
12	,	,	PUNCT	_	_	21	punct	_	_
13	թե	թե	SCONJ	_	_	21	mark	_	_
14	էդ	այդ	DET	_	Distance=Med|PronType=Dem|Style=Coll	15	det	_	_
15	խեղճ	խեղճ	ADJ	_	Degree=Pos	21	nsubj	_	SpaceAfter=No
16	-	-	PUNCT	_	_	17	punct	_	SpaceAfter=No
17	հեսիրն	հեսիր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing|Style=Vrnc	15	compound	_	_
18	ինչ	ինչ	PRON	_	Case=Nom|Number=Sing|PronType=Int	21	obj	_	_
19	՞	՞	PUNCT	_	_	18	punct	_	_
20	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	21	aux	_	_
21	արել	անել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	10	ccomp	_	SpaceAfter=No
22	...	...	PUNCT	_	_	21	punct	_	SpaceAfter=No
23	—	—	PUNCT	_	_	27	punct	_	_
24	մեկ	մեկ	ADV	_	NumForm=Word|NumType=Dist	27	advmod	_	_
25	էլ	էլ	PART	_	_	24	fixed	_	_
26	էն	այն	DET	_	Distance=Dist|PronType=Dem|Style=Coll	27	obj	_	_
27	տեսավ	տեսնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
28	,	,	PUNCT	_	_	32	punct	_	_
29	որ	որ	SCONJ	_	_	32	mark	_	_
30	Հարութը	Հարութ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	32	nsubj	_	_
31	քացով	քացի	NOUN	_	Animacy=Inan|Case=Ins|Definite=Ind|Number=Sing	32	obl	_	_
32	տվեց	տալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	26	acl	_	_
33	ձիու	ձի	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	34	nmod:poss	_	_
34	պլորներին	պլոր	NOUN	_	Animacy=Inan|Case=Dat|Definite=Def|Number=Plur|Style=Vulg	32	obj	_	SpaceAfter=No
35	,	,	PUNCT	_	_	38	punct	_	_
36	ձին	ձի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	38	nsubj	_	_
37	խրտնած	խրտնել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	38	advcl	_	_
38	պոկվեց	պոկվել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	32	conj	_	SpaceAfter=No
39	՝	՝	PUNCT	_	_	45	punct	_	_
40	հետևից	հետև	NOUN	_	Animacy=Inan|Case=Abl|Definite=Ind|Number=Sing	41	obl	_	_
41	քռքաշ	քռքաշ	ADV	_	Style=Vrnc	45	advcl	_	_
42	ու	ու	CCONJ	_	_	44	cc	_	_
43	քարերին	քար	NOUN	_	Animacy=Inan|Case=Dat|Definite=Def|Number=Plur	44	obl	_	_
44	լղզելով	լղզել	VERB	_	Case=Ins|Definite=Ind|Number=Coll|Polarity=Pos|Style=Vrnc|Subcat=Tran|VerbForm=Gdv|Voice=Act	41	conj	_	_
45	տարավ	տանել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	32	conj	_	SpaceAfter=No
46	...	...	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	Հետ	հետ	ADV	_	_	2	compound	_	_
2	ընկածների	ընկած	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Plur	3	nmod:poss	_	_
3	խաժամուժի	խաժամուժ	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Coll	9	obl	_	_
4	մեջ	մեջ	ADP	_	AdpType=Post|Case=Nom	3	case	_	_
5	ինչ	ինչ	DET	_	Case=Nom|PronType=Exc	6	det	_	_
6	տեսակի	տեսակ	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	7	nmod:poss	_	_
7	մարդ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	9	nsubj	_	_
8	ասես	ասել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=2|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl	_	_
9	կար	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
10	։	։	PUNCT	_	_	9	punct	_	_

~~~


