---
layout: base
title:  'Statistics of nummod in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="orv_birchbark-dep-nummod-gov.html">nummod:gov</a></tt>.

74 nodes (0%) are attached to their parents as `nummod`.

64 instances of `nummod` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24324324324324.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt> (70; 95% instances), <tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="orv_birchbark-pos-X.html">X</a></tt>-<tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	и	и	CCONJ	_	_	2	cc	_	wf="и"|addr="096:3"|SpaceAfter=Yes
2	ѧ	ꙗзъ	PRON	_	Case=Nom|Number=Sing|Person=1	0	root	_	wf="ѧ"|addr="096:3"|SpaceAfter=Yes
3	ѡмеши	омеши	NOUN	_	Case=Acc|Number=Plur	2	orphan	_	wf="ѡмеши"|comment=pl_tant|meaning="лемеха́"|addr="096:3"|SpaceAfter=Yes
4	двои	двои	NUM	_	Case=Acc|Number=Plur	3	nummod	_	wf="двои"|meaning="двукратный,_двойной"|addr="096:3"|SpaceAfter=Yes
5	за	за	ADP	_	_	6	case	_	wf="за"|addr="096:3"|SpaceAfter=Yes
6	ѳедора	Федоръ	PROPN	_	Case=Acc|Gender=Masc|NameType=Giv|Number=Sing	2	orphan	_	wf="ѳедора"|addr="096:3"|SpaceAfter=Yes
7	з	съ	ADP	_	_	8	case	_	wf="з"|addr="096:3"|SpaceAfter=Yes
8	бра<lbr/>(т)…	братьꙗ	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	6	nmod	_	wf="брат…"|comment="aggr"|comment=lemma_unsure|addr="096:3"|after:line_id=4|SpaceAfter=Yes

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nummod	color:blue
1	а	а	CCONJ	_	_	4	cc	_	wf="а"|addr="Мос._3:51"|line_id=51|SpaceAfter=Yes
2	что	что	PRON	_	Case=Acc|PronType=Rel	4	obj	_	wf="что"|addr="Мос._3:51"|SpaceAfter=Yes
3	ѧзъ	ꙗзъ	PRON	_	Case=Nom|Number=Sing|Person=1	4	nsubj	_	wf="ѧзъ"|addr="Мос._3:51"|SpaceAfter=Yes
4	ѻтдал	отдати	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	8	dislocated	_	wf="ѻтдал"|tense=perf|addr="Мос._3:51"|SpaceAfter=Yes
5	-----------------	-----------------	X	_	_	4	dep	_	wf="-----------------"|addr="Мос._3:51"|SpaceAfter=Yes
6	(за	за	ADP	_	_	7	case	_	wf="за"|comment=reconstr|comment=lemma_unsure|addr="Мос._3:52"|line_id=52|SpaceAfter=Yes
7	м)ною	ꙗзъ	DET	_	Case=Ins|Number=Sing	8	obl	_	wf="мною"|comment=lemma_unsure|addr="Мос._3:52"|SpaceAfter=Yes
8	пошло	поити	VERB	_	Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="пошло"|tense=perf|meaning="пойти"|addr="Мос._3:52"|SpaceAfter=Yes
9	·ѯ҃·	·ѯ҃·	NUM	_	NumForm=Digit|NumType=Card	12	nummod:gov	_	wf="·ѯ҃·"|addr="Мос._3:52"|SpaceAfter=Yes
10	и	и	CCONJ	_	_	11	cc	_	wf="и"|addr="Мос._3:52"|SpaceAfter=Yes
11	двоѥ	двоѥ	NUM	_	Case=Nom|NumType=Card	9	nummod	_	wf="двоѥ"|addr="Мос._3:52"|SpaceAfter=Yes
12	лошад	лошадь	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	8	nsubj	_	wf="лошад"|addr="Мос._3:52"|SpaceAfter=Yes
13	а	а	CCONJ	_	_	16	cc	_	wf="а"|addr="Мос._3:52"|SpaceAfter=Yes
14	за	за	ADP	_	_	15	case	_	wf="за"|addr="Мос._3:52"|SpaceAfter=Yes
15	мене	ꙗзъ	DET	_	Case=Acc	16	obl	_	wf="мене"|comment="clitic_ton"|addr="Мос._3:52"|SpaceAfter=Yes
16	дашь	дати	VERB	_	Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	wf="дашь"|addr="Мос._3:52"|SpaceAfter=Yes
17	·л҃·ро	·л҃·	NUM	_	Case=Acc|NumForm=Digit|NumType=Card	16	obj	_	wf="·л҃·ро"|addr="Мос._3:53"|line_id=53|SpaceAfter=Yes
18	и	и	CCONJ	_	_	19	cc	_	wf="и"|addr="Мос._3:53"|SpaceAfter=Yes
19	двоѥ	двоѥ	NUM	_	Case=Acc|NumType=Card	17	conj	_	wf="двоѥ"|addr="Мос._3:53"|SpaceAfter=Yes

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nummod	color:blue
1	послало	послати	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="послало"|tense=perf|comment=number_unsure|comment=person_unsure|addr="133:2"|SpaceAfter=Yes
2	[ѥ](см-	быти	AUX	_	Analyt=Yes|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	_	wf="ѥсм-"|addr="133:2"|SpaceAfter=Yes
3	с)	съ	ADP	_	_	4	case	_	wf="с"|comment=reconstr|addr="133:2"|SpaceAfter=Yes
4	--<lbr/>аномо	…анъ	PROPN	_	Case=Ins|Gender=Masc|NameType=Giv|Number=Sing	1	obl	_	wf="--аномо"|addr="133:2"|SpaceAfter=Yes
5	со	съ	ADP	_	_	7	case	_	wf="со"|addr="133:3"|line_id=3|SpaceAfter=Yes
6	своимо	свои	DET	_	Case=Ins|Gender=Masc|Number=Sing	7	det	_	wf="своимо"|addr="133:3"|SpaceAfter=Yes
7	су[к]ладн(икомо)	сукладникъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	4	appos	_	wf="сукладникомо"|meaning="компаньон"|addr="133:3"|SpaceAfter=Yes
8	кипу	кипа	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	1	iobj	_	wf="кипу"|addr="133:4"|line_id=4|SpaceAfter=Yes
9	непрѣ	непрѧ	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	wf="непрѣ"|meaning="знач.?"|addr="133:4"|SpaceAfter=Yes
10	:ѳ҃:	·ѳ҃·	NUM	_	NumForm=Digit|NumType=Card	11	nummod:gov	_	wf=":ѳ҃:"|addr="133:4"|SpaceAfter=Yes
11	сото	сто	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	9	nummod	_	wf="сото"|addr="133:4"|SpaceAfter=Yes
12	и	и	CCONJ	_	_	14	cc	_	wf="и"|addr="133:4"|SpaceAfter=Yes
13	:г҃	·г҃·	NUM	_	NumForm=Digit|NumType=Card	14	nummod:gov	_	wf=":г҃"|addr="133:4"|SpaceAfter=Yes
14	в------	в------	X	_	_	8	conj	_	wf="в------"|addr="133:4"|SpaceAfter=Yes
15	вѣревки	вервка	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	14	nmod	_	wf="вѣревки"|addr="133:5"|line_id=5|SpaceAfter=Yes
16	узкои	узкыи	ADJ	_	Case=Gen|Gender=Fem|Number=Sing	15	amod	_	wf="узкои"|addr="133:5"|SpaceAfter=Yes

~~~


