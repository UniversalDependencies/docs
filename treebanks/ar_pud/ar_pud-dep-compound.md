---
layout: base
title:  'Statistics of compound in UD_Arabic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PUD: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="ar_pud-dep-compound-prt.html">compound:prt</a></tt>.

5 nodes (0%) are attached to their parents as `compound`.

5 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.8.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (4; 80% instances), <tt><a href="ar_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_pud-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound	color:blue
1	ازدهرت	{izodahar_1	VERB	VBC	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
2	هذه	h`*A_1	PRON	PDEM	Case=Nom|Gender=Fem|Number=Sing	3	det	_	_
3	المدينة	madiynap_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	nsubj	_	SpaceAfter=No
4	-	-_0	PUNCT	-	_	5	punct	_	SpaceAfter=No
5	الدولة	dawolap_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	compound	_	_
6	في	fiy_1	ADP	IN	_	7	case	_	_
7	ذات	*At_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	obl	_	_
8	فترة	fatorap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	7	nmod	_	_
9	مملكة	mamolakap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	nmod	_	_
10	سوكوتاي	swkwtAy_0	PROPN	NNP	Animacy=Nhum|Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
11	.	._0	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 30 compound	color:blue
1	ضم	Dam~-u_1	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
2	عدة	Eid~ap_1	DET	PDT	Case=Acc	3	det	_	_
3	أغانٍ	>ugoniyap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Fem|Number=Plur	1	obj	_	_
4	تم	tam~-i_1	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	3	acl:relcl	_	_
5	تأليف	ta>oliyf_1	NOUN	NN	Animacy=Nhum|Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No
6	ها	hA	PRON	PRP	Case=Gen|Gender=Fem|Number=Sing|Person=3	5	nmod	_	_
7	ب	b	ADP	IN	_	8	case	_	SpaceAfter=No
8	الاشتراك	{i$otirAk_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	nmod	_	_
9	مع	maE_1	ADP	IN	_	10	case	_	_
10	جيم	jiym_2	PROPN	NNP	Animacy=Hum|Gender=Masc|Number=Sing	8	nmod	_	_
11	شقيق	$aqiyq_1	NOUN	NN	Animacy=Hum|Case=Gen|Definite=Def|Gender=Masc|Number=Sing	10	appos	_	_
12	رافيرتي	rAfyrty_0	PROPN	NNP	Animacy=Hum|Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
13	,	,_0	PUNCT	,	_	15	punct	_	_
14	الذي	Al~a*iy_1	PRON	REL	Case=Gen|Gender=Masc|Number=Sing	15	nsubj	_	_
15	يعمل	Eamil-a_1	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	10	acl:relcl	_	_
16	أيضاً	>ayoDAF_1	ADV	RB	_	15	advmod	_	_
17	ك	k	ADP	IN	_	18	case	_	SpaceAfter=No
18	مغنٍ	mugan~iy_1	NOUN	NN	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	15	obl	_	_
19	و	w	CCONJ	CC	_	20	cc	_	SpaceAfter=No
20	مؤلف	mu&al~if_1	NOUN	NN	Animacy=Hum|Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	18	conj	_	_
21	أغانٍ	>ugoniyap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Ind|Gender=Fem|Number=Plur	20	nmod	_	SpaceAfter=No
22	,	,_0	PUNCT	,	_	25	punct	_	_
23	و	w	PART	RP	_	25	compound:prt	_	SpaceAfter=No
24	الذي	Al~a*iy_1	PRON	REL	Case=Gen|Gender=Masc|Number=Sing	25	nsubj	_	_
25	وقع	waq~aE_1	VERB	VBC	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|Voice=Act	10	advcl	_	_
26	مع	maE_1	ADP	IN	_	27	case	_	_
27	شركة	$arikap_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	25	obl	_	_
28	"	"_0	PUNCT	``	_	29	punct	_	SpaceAfter=No
29	ديكا	diyk_2	PROPN	NNP	Animacy=Nhum|Number=Sing	27	nmod	_	_
30	ريكوردز	rykwrdz_0	NOUN	NN	Animacy=Nhum|Definite=Ind|Number=Plur	29	compound	_	SpaceAfter=No
31	"	"_0	PUNCT	''	_	29	punct	_	_
32	في	fiy_1	ADP	IN	_	33	case	_	_
33	السبعينيات	saboEiyniy~_1	NOUN	NN	Animacy=Nhum|Case=Gen|Definite=Def|Gender=Fem|Number=Plur	25	obl	_	SpaceAfter=No
34	.	._0	PUNCT	.	_	1	punct	_	_

~~~


