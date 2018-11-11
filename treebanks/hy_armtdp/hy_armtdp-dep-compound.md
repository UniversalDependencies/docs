---
layout: base
title:  'Statistics of compound in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="hy_armtdp-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="hy_armtdp-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="hy_armtdp-dep-compound-svc.html">compound:svc</a></tt>.

22 nodes (0%) are attached to their parents as `compound`.

19 instances of `compound` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.81818181818182.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (17; 77% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 compound	color:blue
1	Հիմա	հիմա	ADV	_	_	8	advmod	_	_
2	էլ	էլ	ADV	_	_	1	advmod	_	_
3	վերջապես	վերջապես	ADV	_	_	8	advmod	_	_
4	միս	միս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	8	compound:lvc	_	_
5	ու	ու	CCONJ	_	_	6	cc	_	_
6	արյուն	արյուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	compound	_	_
7	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	առել	առնել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
9	։	։	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 compound	color:blue
1	Մի	մի	DET	_	PronType=Art	2	det	_	_
2	անգամ	անգամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	obl	_	_
3	տեսել	տեսնել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
4	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	3	aux	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	առավոտ	առավոտ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	nmod	_	_
7	ծեգին	ծեգ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	3	obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	SpaceAfter=No
9	—	—	PUNCT	_	_	10	punct	_	_
10	չիմացավ	իմանալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis	_	_
11	էլ	էլ	ADV	_	_	10	discourse	_	SpaceAfter=No
12	,	,	PUNCT	_	_	21	punct	_	_
13	թե	թե	SCONJ	_	_	21	mark	_	_
14	էդ	այդ	DET	_	Distance=Med|PronType=Dem|Style=Coll	15	det	_	_
15	խեղճ	խեղճ	ADJ	_	Degree=Pos	21	nsubj	_	SpaceAfter=No
16	-	-	PUNCT	_	_	17	punct	_	SpaceAfter=No
17	հեսիրն	հեսիր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing|Style=Vrnc	15	compound	_	_
18	ինչ	ինչ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	21	obj	_	_
19	՞	՞	PUNCT	_	_	18	punct	_	_
20	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	21	aux	_	_
21	արել	անել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	10	ccomp	_	SpaceAfter=No
22	...	...	PUNCT	_	_	10	punct	_	SpaceAfter=No
23	—	—	PUNCT	_	_	10	punct	_	_
24	մեկ	մեկ	ADV	_	NumForm=Word|NumType=Card|PronType=Tot	27	advmod	_	_
25	էլ	էլ	ADV	_	_	24	fixed	_	_
26	էն	այն	DET	_	Distance=Dist|PronType=Dem|Style=Coll	27	obj	_	_
27	տեսավ	տեսնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
28	,	,	PUNCT	_	_	32	punct	_	_
29	որ	որ	SCONJ	_	_	32	mark	_	_
30	Հարութը	Հարութ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	32	nsubj	_	_
31	քացով	քացի	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	32	obl	_	_
32	տվեց	տալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	26	acl	_	_
33	ձիու	ձի	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	34	nmod:poss	_	_
34	պլորներին	պլոր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur|Style=Vulg	32	obj	_	SpaceAfter=No
35	,	,	PUNCT	_	_	38	punct	_	_
36	ձին	ձի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	38	nsubj	_	_
37	խրտնած	խրտնել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	38	advcl	_	_
38	պոկվեց	պոկվել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	32	conj	_	SpaceAfter=No
39	՝	՝	PUNCT	_	_	45	punct	_	_
40	հետևից	հետև	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	41	obl	_	_
41	քռքաշ	քռքաշ	ADV	_	Style=Vrnc	45	advmod	_	_
42	ու	ու	CCONJ	_	_	44	cc	_	_
43	քարերին	քար	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	44	obl	_	_
44	լղզելով	լղզել	VERB	_	Case=Ins|Definite=Ind|Number=Coll|Polarity=Pos|Style=Vrnc|Subcat=Tran|VerbForm=Gdv|Voice=Act	41	conj	_	_
45	տարավ	տանել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	38	conj	_	SpaceAfter=No
46	...	...	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 compound	color:blue
1	Դեմ	դեմ	ADV	_	_	4	amod	_	SpaceAfter=No
2	-	֊	PUNCT	_	_	3	punct	_	SpaceAfter=No
3	դիմացի	դիմացի	ADJ	_	_	1	compound	_	_
4	գյուղը	գյուղ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	5	obj	_	_
5	վերցնելը	վերցնել	VERB	_	Case=Nom|Definite=Def|Number=Coll|Polarity=Pos|Subcat=Tran|VerbForm=Gdv|Voice=Act	6	nsubj	_	_
6	դժվար	դժվար	ADJ	_	Degree=Pos	0	root	_	_
7	չէր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	6	cop	_	SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	բայց	բայց	CCONJ	_	_	11	cc	_	_
10	չէինք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Imp|VerbForm=Fin	11	aux	_	_
11	ցանկանում	ցանկանալ	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	6	conj	_	_
12	տղաներին	տղա	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	13	obj	_	_
13	կորցնել	կորչել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	11	xcomp	_	SpaceAfter=No
14	:	:	PUNCT	_	_	6	punct	_	_

~~~


