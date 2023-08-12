---
layout: base
title:  'Statistics of nsubj:pass in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-nsubj.html">nsubj</a></tt>.

18 nodes (0%) are attached to their parents as `nsubj:pass`.

12 instances of `nsubj:pass` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.77777777777778.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (11; 61% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt> (4; 22% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt> (3; 17% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nsubj:pass	color:blue
1	А	а	CCONJ	_	_	2	cc	_	wf="А"
2	псан(а)	писати	VERB	_	Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="псана"
3	быс(ть)	быти	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	aux:pass	_	wf="бысть"
4	грамота	грамота	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	nsubj:pass	_	wf="грамота"
5	сѧ	сей	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	wf="сѧ"
6	оу	въ	ADP	_	_	7	case	_	wf="оу"
7	Могилѣвѣ	Могилѣвъ	PROPN	_	Case=Loc|Gender=Masc|NameType=Sur|Number=Sing	2	obl	_	wf="Могилѣвѣ"|SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	по	по	ADP	_	_	11	case	_	wf="по"
10	Б(о)жьем	божий	ADJ	_	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	11	nmod	_	wf="Божьем"
11	нарожѣньи	нарожение	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	13	nmod	_	wf="нарожѣньи"
12	1000	1000	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	11	nummod	_	_
13	лѣт	лѣто	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	2	obl	_	wf="лѣт"
14	и	и	CCONJ	_	_	16	cc	_	wf="и"
15	400	400	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	16	nummod	_	_
16	лѣт	лѣто	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	11	conj	_	wf="лѣт"
17	и	и	CCONJ	_	_	19	cc	_	wf="и"
18	сем(ь)	семь	NUM	_	Case=Acc|NumForm=Word|NumType=Card	19	nummod:gov	_	wf="семь"
19	лѣт	лѣто	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	11	conj	_	wf="лѣт"|SpaceAfter=No
20	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 15 nsubj:pass	color:blue
1	На	на	ADP	_	_	2	case	_	wf="На"
2	семъ	сие	PRON	_	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	5	obl	_	wf="семъ"
3	на	на	ADP	_	_	4	case	_	wf="на"
4	всемъ	весь	DET	_	Case=Loc|Gender=Neut|Number=Sing|PronType=Tot	2	det	_	wf="всемъ"
5	далъ	дати	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="далъ"
6	есмь	быти	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	wf="есмь"
7	правду	правда	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	wf="правду"
8	крепкую	крѣпкий	ADJ	_	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	wf="крепкую"
9	брату	братъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	5	iobj	_	wf="брату"
10	своему	свой	DET	_	Case=Dat|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	9	det	_	wf="своему"
11	кн(ѧ)зю	князь	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	9	appos	_	wf="кнѧзю"
12	Скирикгаилу	Скиригайло	PROPN	_	Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	9	appos	_	wf="Скирикгаилу"|SpaceAfter=No
13	,	,	PUNCT	_	_	18	punct	_	_
14	ажбы	ажебы	SCONJ	_	Mood=Cnd	18	mark	_	wf="ажбы"
15	то	тотъ	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	18	nsubj:pass	_	wf="то"
16	было	быти	AUX	_	Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	18	cop	_	wf="было"
17	не	не	PART	_	Polarity=Neg	18	advmod	_	wf="не"
18	измешано	измешати	VERB	_	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	5	advcl	_	wf="измешано"|SpaceAfter=No
19	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Што	что	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	2	nsubj:pass	_	wf="Што"
2	поклепани	поклепати	VERB	_	Case=Nom|Gender=Masc|Number=Plur|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	12	acl:relcl	_	wf="поклепани"
3	на	на	ADP	_	_	4	case	_	wf="на"
4	Рѣзне	Рѣзно	PROPN	_	Case=Loc|Gender=Neut|NameType=Geo|Number=Sing	2	obl	_	wf="Рѣзне"
5	и	и	CCONJ	_	_	7	cc	_	wf="и"
6	што	что	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	7	nsubj	_	wf="што"
7	словеть	слути	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	wf="словеть"
8	Лотыгольскаѧ	лотыгольский	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	wf="Лотыгольскаѧ"
9	землѧ	земля	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	7	xcomp	_	wf="землѧ"|SpaceAfter=No
10	,	,	PUNCT	_	_	2	punct	_	_
11	ѡт	отъ	ADP	_	_	12	case	_	wf="ѡт"
12	того	то	PRON	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	14	obl	_	wf="того"
13	сѧ	ся	PRON	_	Analyt=Yes|PronType=Prs|Reflex=Yes	14	expl	_	wf="сѧ"
14	ѡтступили	отступити	VERB	_	Aspect=Perf|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="ѡтступили"
15	с	съ	ADP	_	_	17	case	_	wf="с"
16	всею	весь	DET	_	Case=Ins|Gender=Fem|Number=Sing|PronType=Tot	17	det	_	wf="всею"
17	правдою	правда	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	14	obl	_	wf="правдою"|SpaceAfter=No
18	.	.	PUNCT	_	_	14	punct	_	_

~~~


