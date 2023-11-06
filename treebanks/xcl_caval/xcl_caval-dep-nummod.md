---
layout: base
title:  'Statistics of nummod in UD_Classical_Armenian-CAVaL'
udver: '2'
---

## Treebank Statistics: UD_Classical_Armenian-CAVaL: Relations: `nummod`

This relation is universal.

42 nodes (0%) are attached to their parents as `nummod`.

24 instances of `nummod` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26190476190476.

The following 4 pairs of parts of speech are connected with `nummod`: <tt><a href="xcl_caval-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xcl_caval-pos-NUM.html">NUM</a></tt> (36; 86% instances), <tt><a href="xcl_caval-pos-ADJ.html">ADJ</a></tt>-<tt><a href="xcl_caval-pos-NUM.html">NUM</a></tt> (2; 5% instances), <tt><a href="xcl_caval-pos-PRON.html">PRON</a></tt>-<tt><a href="xcl_caval-pos-NUM.html">NUM</a></tt> (2; 5% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-NUM.html">NUM</a></tt> (2; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nummod	color:blue
1	Եկաց	կամ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=Ekacʻ|LTranslit=kam|LId=կամ-1|Gloss=stand
2	Մարիամ	մարիամ	PROPN	_	Case=Nom|Number=Sing	1	nsubj	_	Translit=Mariam|LTranslit=mariam|Gloss=mariam
3	առ	առ	ADP	_	_	4	case	_	Translit=aṙ|LTranslit=aṙ|LId=առ-1|Gloss=by
4	նմա	նա	PRON	_	Case=Loc|Number=Sing|PronType=Dem	1	obl	_	Translit=nma|LTranslit=na|LId=նա-1|Gloss=he/she/it/that
5	իբրեւ	իբրեւ	ADV	_	_	6	case	_	Translit=ibrew|LTranslit=ibrew|LId=իբրեւ-2|Gloss=like
6	ամիսս	ամիս	NOUN	_	Case=Acc|Number=Plur	1	obl	_	Translit=amiss|LTranslit=amis|Gloss=month
7	երիս	երեք	NUM	_	Case=Acc|Number=Plur|NumType=Card	6	nummod	_	SpaceAfter=No|Translit=eris|LTranslit=erekʻ|Gloss=three
8	.	.	PUNCT	_	_	10	punct	_	Translit=:|LTranslit=:
9	եւ	եւ	CCONJ	_	_	10	cc	_	Translit=ew|LTranslit=ew|Gloss=and
10	դարձաւ	դառնամ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	1	conj	_	Translit=darjaw|LTranslit=daṙnam|Gloss=turn
11	ի	ի	ADP	_	_	12	case	_	Translit=i|LTranslit=i|LId=ի-1|Gloss=to/in/from
12	տուն	տուն	NOUN	_	Case=Acc|Number=Sing	10	obl	_	Translit=town|LTranslit=town|Gloss=house
13	իւր	իւր	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	12	nmod	_	SpaceAfter=No|Translit=iwr|LTranslit=iwr|LId=իւր-2|Gloss=oneself
14	:	:	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Եւ	եւ	CCONJ	_	_	2	cc	_	Translit=Ew|LTranslit=ew|Gloss=and
2	ասէ	ասեմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|Translit=asē|LTranslit=asem|Gloss=say
3	՝	՝	PUNCT	_	_	8	punct	_	Translit=;|LTranslit=;
4	երկու	երկու	NUM	_	Case=Nom|Number=Sing|NumType=Card	5	nummod	_	Translit=erkow|LTranslit=erkow|Gloss=two
5	պարտապանք	պարտապան	ADJ	_	Case=Nom|Number=Plur	8	nsubj	_	Translit=partapankʻ|LTranslit=partapan|Gloss=debtor
6	եին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	8	cop	_	Translit=ein|LTranslit=em|Gloss=be
7	ուրումն	ոմն	PRON	_	Animacy=Anim|Case=Gen|Number=Sing|PronType=Ind	8	nmod	_	Translit=owrowmn|LTranslit=omn|Gloss=someone
8	փոխատուի	փոխատու	NOUN	_	Case=Gen|Number=Sing	2	ccomp	_	SpaceAfter=No|Translit=pʻoxatowi|LTranslit=pʻoxatow|Gloss=lender
9	՝	՝	PUNCT	_	_	12	punct	_	Translit=;|LTranslit=;
10	մի	մի	NUM	_	Case=Nom|Number=Sing|NumType=Card	12	nsubj	_	SpaceAfter=No|Translit=mi|LTranslit=mi|LId=մի-3|Gloss=one
11	ն	ն	DET	_	Definite=Def|PronType=Dem	10	det	_	Translit=n|LTranslit=n|Gloss=that
12	պարտէր	պարտիմ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	conj	_	Translit=partēr|LTranslit=partim|Gloss=defeat
13	հինգ	հինգ	NUM	_	Case=Acc|Number=Sing|NumType=Card	14	compound	_	Translit=hing|LTranslit=hing|Gloss=five
14	հարիւր	հարիւր	NUM	_	Case=Acc|Number=Sing|NumType=Card	15	nummod	_	Translit=hariwr|LTranslit=hariwr|Gloss=hundred
15	դարհեկան	դահեկան	NOUN	_	Case=Acc|Number=Sing	12	obj	_	SpaceAfter=No|Translit=darhekan|LTranslit=dahekan|Gloss=denarius
16	՝	՝	PUNCT	_	_	18	punct	_	Translit=;|LTranslit=;
17	եւ	եւ	CCONJ	_	_	18	orphan	_	Translit=ew|LTranslit=ew|Gloss=and
18	միւս	միւս	ADJ	_	Case=Nom|Number=Sing	8	conj	_	SpaceAfter=No|Translit=miws|LTranslit=miws|Gloss=the_other
19	ն	ն	DET	_	Definite=Def|PronType=Dem	18	orphan	_	Translit=n|LTranslit=n|Gloss=that
20	յիսուն	յիսուն	NUM	_	Case=Acc|Number=Plur|NumType=Card	18	orphan	_	SpaceAfter=No|Translit=yisown|LTranslit=yisown|Gloss=fifty
21	՝	՝	PUNCT	_	_	2	punct	_	Translit=;|LTranslit=;

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 nummod	color:blue
1	այսորիկ	այս	DET	_	Case=Gen|Number=Sing|PronType=Dem	2	obl	_	Translit=aysorik|LTranslit=ays|LId=այս-1|Gloss=this
2	երեւեցոյց	երեւեցուցանեմ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	Translit=erewecʻoycʻ|LTranslit=erewecʻowcʻanem|Gloss=imagine
3	Տէր	Տէր	NOUN	_	Case=Nom|Number=Sing	2	nsubj:caus	_	Translit=Tēr|LTranslit=Tēr|Gloss=Lord
4	եւ	եւ	ADV	_	_	2	advmod	_	Translit=ew|LTranslit=ew|LId=եւ-1|Gloss=and
5	այլս	այլ	ADJ	_	Case=Acc|Number=Sing	2	obj	_	Translit=ayls|LTranslit=ayl|LId=այլ-1|Gloss=another
6	եւթանասուն	եւթանասուն	NUM	_	Case=Acc|Number=Sing|NumType=Card	5	nummod	_	Translit=ewtʻanasown|LTranslit=ewtʻanasown|Gloss=seventy
7	եւ	եւ	CCONJ	_	_	8	cc	_	Translit=ew|LTranslit=ew|Gloss=and
8	երկուս	երկու	NUM	_	Case=Acc|Number=Plur|NumType=Card	6	conj	_	SpaceAfter=No|Translit=erkows|LTranslit=erkow|Gloss=two
9	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
10	եւ	եւ	CCONJ	_	_	11	cc	_	Translit=ew|LTranslit=ew|Gloss=and
11	առաքեաց	առաքեմ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	Translit=aṙakʻeacʻ|LTranslit=aṙakʻem|Gloss=send
12	զ	զ	DET	_	Definite=Def	13	det	_	SpaceAfter=No|Translit=z|LTranslit=z
13	նոսա	նա	PRON	_	Case=Acc|Number=Plur|PronType=Dem	11	obj	_	Translit=nosa|LTranslit=na|LId=նա-1|Gloss=he/she/it/that
14	երկուս	երկու	NUM	_	Case=Acc|Number=Plur|NumType=Card	13	nummod	_	Translit=erkows|LTranslit=erkow|Gloss=two
15	երկուս	երկու	NUM	_	Case=Acc|Number=Plur|NumType=Card	14	compound:redup	_	Translit=erkows|LTranslit=erkow|Gloss=two
16	առաջի	առաջի	ADP	_	_	17	case	_	Translit=aṙaǰi|LTranslit=aṙaǰi|LId=առաջի-1|Gloss=before
17	իւր	իւր	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	11	obl	_	SpaceAfter=No|Translit=iwr|LTranslit=iwr|LId=իւր-2|Gloss=oneself
18	՝	՝	PUNCT	_	_	21	punct	_	Translit=;|LTranslit=;
19	յ	ի	ADP	_	_	21	case	_	SpaceAfter=No|Translit=y|LTranslit=i|LId=ի-1|Gloss=to/in/from
20	ամենայն	ամենայն	DET	_	Case=Acc|Number=Sing|PronType=Tot	21	det	_	Translit=amenayn|LTranslit=amenayn|LId=ամենայն-1|Gloss=every
21	քաղաքս	քաղաք	NOUN	_	Case=Acc|Number=Plur	11	obl	_	Translit=kʻałakʻs|LTranslit=kʻałakʻ|Gloss=city
22	եւ	եւ	CCONJ	_	_	24	cc	_	Translit=ew|LTranslit=ew|Gloss=and
23	ի	ի	ADP	_	_	24	case	_	Translit=i|LTranslit=i|LId=ի-1|Gloss=to/in/from
24	տեղիս	տեղի	NOUN	_	Case=Acc|Number=Plur	21	conj	_	SpaceAfter=No|Translit=tełis|LTranslit=tełi|Gloss=place
25	.	.	PUNCT	_	_	28	punct	_	Translit=:|LTranslit=:
26	ուր	ուր	ADV	_	_	28	advmod	_	Translit=owr|LTranslit=owr|Gloss=where
27	ինքն	ինքն	PRON	_	Case=Nom|Number=Sing|PronType=Prs|Reflex=Yes	28	nsubj	_	Translit=inkʻn|LTranslit=inkʻn|Gloss=he/she/self
28	երթալոց	երթամ	VERB	_	Case=Nom|VerbForm=Conv	24	acl	_	Translit=ertʻalocʻ|LTranslit=ertʻam|Gloss=go
29	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	28	cop	_	SpaceAfter=No|Translit=ēr|LTranslit=em|Gloss=be
30	:	:	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


