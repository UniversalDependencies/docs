---
layout: base
title:  'Statistics of obl:agent in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-obl.html">obl</a></tt>.

18 nodes (0%) are attached to their parents as `obl:agent`.

15 instances of `obl:agent` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.22222222222222.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (14; 78% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (3; 17% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:agent	color:blue
1	2016	2016	NUM	_	NumForm=Digit|NumType=Card	2	nummod	_	_
2	թվականին	թվական	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	5	obl	_	_
3	ազգային	ազգային	ADJ	_	Degree=Pos	4	amod	_	_
4	հայտատուներից	հայտատու	NOUN	_	Animacy=Hum|Case=Abl|Definite=Ind|Number=Plur	5	obl:agent	_	_
5	ստացվել	ստանալ	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	_
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	_	_
7	1261	1261	NUM	_	NumForm=Digit|NumType=Card	8	nummod	_	_
8	հայտ	հայտ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	nsubj:pass	_	SpaceAfter=No
9	,	,	PUNCT	_	_	14	punct	_	_
10	որը	որ	PRON	_	Case=Nom|Definite=Def|Number=Sing|PronType=Rel	14	nsubj:pass	_	_
11	2015	2015	NUM	_	NumForm=Digit|NumType=Card	12	nummod	_	_
12	թվականի	թվական	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	13	nmod:poss	_	_
13	համեմատությամբ	համեմատություն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	14	obl	_	_
14	նվազել	նվազել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	8	acl:relcl	_	_
15	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	14	aux	_	_
16	79-ով	79-	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing|NumForm=Digit	14	obl	_	SpaceAfter=No
17	:	:	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 obl:agent	color:blue
1	Երբ	երբ	SCONJ	_	_	2	mark	_	_
2	սկսեց	սկսել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	6	advcl	_	_
3	աշխատել	աշխատել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	2	xcomp	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	շատ	շատ	ADV	_	Degree=Pos	6	advmod	_	_
6	զարմացավ	զարմանալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	որ	որ	SCONJ	_	_	10	mark	_	_
9	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	զգում	զգալ	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	6	ccomp	_	_
11	ինքն	ինքը	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Emp	13	obl:agent	_	_
12	իրենից	ինքը	PRON	_	Case=Abl|Number=Sing|Person=3|PronType=Emp|Reflex=Yes	13	obl	_	_
13	ակնկալվող	ակնկալել	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	14	acl	_	_
14	դիմադրությունը	դիմադրություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	10	obj	_	SpaceAfter=No
15	։	։	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 39 38 obl:agent	color:blue
1	Չեմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	արժեզրկում	արժեզրկել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	պարզապես	պարզապես	ADV	_	_	5	advmod	_	_
5	ուզում	ուզել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	2	conj	_	_
6	եմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	_	_
7	ցույց	ցույց	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	8	compound:lvc	_	_
8	տալ	տալ	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	5	xcomp	_	_
9	ինչպես	ինչպես	ADV	_	PronType=Int	20	advmod	_	_
10	2008-ի	2008	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing|NumForm=Digit	11	nmod:poss	_	_
11	շարժման	շարժում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	14	nmod:poss	_	_
12	ազատական	ազատական	ADJ	_	Degree=Pos	14	amod	_	_
13	ժողովրդավար	ժողովրդավար	ADJ	_	Degree=Pos	14	amod	_	_
14	գաղափարները	գաղափար	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	20	nsubj	_	_
15	ու	ու	CCONJ	_	_	16	cc	_	_
16	մոտեցումները	մոտեցում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	14	conj	_	SpaceAfter=No
17	,	,	PUNCT	_	_	19	punct	_	_
18	ցանած	ցանել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	19	acl	_	_
19	սերմերը	սերմ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	14	conj	_	_
20	ապրեցին	ապրել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	8	ccomp	_	SpaceAfter=No
21	,	,	PUNCT	_	_	28	punct	_	_
22	աննկատելի	աննկատելի	ADV	_	_	28	advmod	_	SpaceAfter=No
23	,	,	PUNCT	_	_	27	punct	_	_
24	բայց	բայց	CCONJ	_	_	27	cc	_	_
25	պարզվում	պարզվել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	27	parataxis	_	_
26	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	25	aux	_	_
27	լայնորեն	լայնորեն	ADV	_	_	22	conj	_	_
28	տարածվեցին	տարածվել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	20	conj	_	_
29	հասարակությունում	հասարակություն	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	28	obl	_	_
30	յուրահատուկ	յուրահատուկ	ADJ	_	Degree=Pos	32	amod	_	_
31	ծպտյալ	ծպտյալ	ADJ	_	_	32	amod	_	_
32	եղանակով	եղանակ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	28	obl	_	SpaceAfter=No
33	,	,	PUNCT	_	_	46	punct	_	_
34	ու	ու	CCONJ	_	_	46	cc	_	_
35	հենց	հենց	ADV	_	_	37	advmod	_	_
36	որ	որ	PART	_	_	35	fixed	_	_
37	տեսան	տեսնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	46	advcl	_	_
38	Նիկոլի	Նիկոլ	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Giv|Number=Sing	39	obl:agent	_	_
39	պատրաստված	պատրաստել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	43	acl	_	_
40	ուղիղ	ուղիղ	ADJ	_	Degree=Pos	43	amod	_	_
41	ու	ու	CCONJ	_	_	42	cc	_	_
42	ճիշտ	ճիշտ	ADJ	_	Degree=Pos	40	conj	_	_
43	ջրանցքը	ջրանցք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	37	obj	_	SpaceAfter=No
44	,	,	PUNCT	_	_	46	punct	_	_
45	միանգամից	միանգամից	ADV	_	_	46	advmod	_	_
46	հոսեցին	հոսել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	20	conj	_	_
47	ստորգետնից	ստորգետին	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Coll	46	obl	_	_
48	մակերես	մակերես	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	46	obl	_	SpaceAfter=No
49	:	:	PUNCT	_	_	2	punct	_	_

~~~


