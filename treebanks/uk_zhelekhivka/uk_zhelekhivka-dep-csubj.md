---
layout: base
title:  'Statistics of csubj in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `csubj`

This relation is universal.

52 nodes (1%) are attached to their parents as `csubj`.

50 instances of `csubj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.80769230769231.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt> (48; 92% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Годї	годі	ADV	VERB	_	0	root	_	TokenRange=20944:20948
2	про	про	ADP	ADP	Case=Acc	3	case	_	TokenRange=20949:20952
3	се	се	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	obl	_	TokenRange=20953:20955
4	й	й	PART	PART	_	5	advmod:emph	_	TokenRange=20956:20957
5	гадати	гадати	VERB	VERB	Aspect=Imp|VerbForm=Inf	1	csubj	_	SpaceAfter=No|TokenRange=20958:20964
6	!	!	PUNCT	PUNCT	_	1	punct	_	TokenRange=20964:20965

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj	color:blue
1	Нам	ми	PRON	PRON	Animacy=Anim|Case=Dat|Number=Plur|Person=1|PronType=Prs	2	iobj	_	TokenRange=9407:9410
2	пора	пора	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	TokenRange=9411:9415
3	оглянутися	оглянутися	VERB	VERB	Aspect=Perf|Reflex=Yes|VerbForm=Inf	2	csubj	_	TokenRange=9416:9426
4	за	за	ADP	ADP	Case=Ins	6	case	_	TokenRange=9427:9429
5	духовними	духовний	ADJ	ADJ	Case=Ins|Number=Plur	6	amod	_	TokenRange=9430:9439
6	цінностями	цінність	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	3	obl	_	TokenRange=9440:9450
7	де	де	ADV	ADV	ExtPos=ADV|PronType=Rel	3	advmod	_	TokenRange=9451:9453
8	инде	инде	ADV	ADV	_	7	fixed	_	SpaceAfter=No|TokenRange=9454:9458
9	,	,	PUNCT	PUNCT	_	15	punct	_	TokenRange=9458:9459
10	може	може	ADV	ADV	_	15	parataxis	_	TokenRange=9460:9464
11	таки	таки	PART	PART	_	10	discourse	_	TokenRange=9465:9469
12	в	в	ADP	ADP	Case=Loc	15	case	_	TokenRange=9470:9471
13	самій	самий	DET	DET	Case=Loc|Gender=Fem|Number=Sing|PronType=Emp	15	det	_	TokenRange=9472:9477
14	східній	східний	ADJ	ADJ	Case=Loc|Gender=Fem|Number=Sing	15	amod	_	TokenRange=9478:9485
15	Европі	Європа	PROPN	PROPN	Animacy=Inan|Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	7	conj	_	NameType=Geo|SpaceAfter=No|TokenRange=9486:9492
16	,	,	PUNCT	PUNCT	_	18	punct	_	TokenRange=9492:9493
17	в	в	ADP	ADP	Case=Loc	18	case	_	TokenRange=9494:9495
18	орієнті	орієнт	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	15	conj	_	SpaceAfter=No|TokenRange=9496:9503
19	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=9503:9504
20	"	"	PUNCT	PUNCT	_	2	punct	_	SpacesAfter=\r\n\r\n\s\r\n\r\n|TokenRange=9504:9505

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 29 csubj	color:blue
1	Достеменно	достеменно	ADV	ADV	Degree=Pos	10	advmod	_	TokenRange=161:171
2	певної	певний	ADJ	ADJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	TokenRange=172:178
3	відповіди	відповідь	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	10	obj	_	TokenRange=179:188
4	на	на	ADP	ADP	Case=Acc	6	case	_	TokenRange=189:191
5	такі	такий	DET	DET	Animacy=Inan|Case=Acc|Number=Plur|PronType=Dem	6	det	_	TokenRange=192:196
6	питання	питання	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Plur	3	nmod	_	TokenRange=197:204
7	нїхто	ніхто	PRON	PRON	Animacy=Anim|Case=Nom|PronType=Neg	10	nsubj	_	TokenRange=205:210
8	дати	дати	VERB	VERB	Aspect=Perf|VerbForm=Inf	10	xcomp	_	TokenRange=211:215
9	не	не	PART	PART	Polarity=Neg	10	advmod:neg	_	TokenRange=216:218
10	спроможен	спроможний	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No|TokenRange=219:228|Variant=Short
11	;	;	PUNCT	PUNCT	_	13	punct	_	TokenRange=228:229
12	але	але	CCONJ	CCONJ	_	13	cc	_	TokenRange=230:233
13	можна	можна	ADV	ADV	_	10	conj	_	TokenRange=234:239
14	дати	дати	VERB	VERB	Aspect=Perf|VerbForm=Inf	13	csubj	_	TokenRange=240:244
15	відповідь	відповідь	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	14	obj	_	TokenRange=245:254
16	більш	більш	ADV	ADV	Degree=Cmp|Variant=Short	20	advmod	_	SpaceAfter=No|TokenRange=255:260|Variant=Short
17	,	,	PUNCT	PUNCT	_	19	punct	_	TokenRange=260:261
18	чи	чи	CCONJ	CCONJ	_	19	cc	_	TokenRange=262:264
19	менш	менш	ADV	ADV	Degree=Cmp|Variant=Short	16	conj	_	TokenRange=265:269|Variant=Short
20	близьку	близький	ADJ	ADJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	15	amod	_	TokenRange=270:277
21	до	до	ADP	ADP	Case=Gen	22	case	_	TokenRange=278:280
22	правди	правда	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	20	nmod	_	TokenRange=281:287
23	і	і	CCONJ	CCONJ	_	27	cc	_	TokenRange=288:289
24	на	на	ADP	ADP	Case=Acc	25	case	_	TokenRange=290:292
25	те	те	PRON	PRON	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	27	obl	_	TokenRange=293:295
26	не	не	PART	PART	Polarity=Neg	27	advmod:neg	_	TokenRange=296:298
27	треба	треба	ADV	ADV	_	13	conj	_	TokenRange=299:304
28	бути	бути	AUX	AUX	Aspect=Imp|VerbForm=Inf	29	cop	_	TokenRange=305:309
29	пророком	пророк	NOUN	NOUN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	27	csubj	_	SpaceAfter=No|TokenRange=310:318
30	;	;	PUNCT	PUNCT	_	31	punct	_	TokenRange=318:319
31	треба	треба	ADV	ADV	_	27	conj	_	TokenRange=320:325
32	тілько	тільки	ADV	ADV	_	31	advmod	_	SpaceAfter=No|TokenRange=326:332
33	,	,	PUNCT	PUNCT	_	34	punct	_	TokenRange=332:333
34	віщуючи	віщувати	VERB	VERB	Aspect=Imp|Tense=Pres|VerbForm=Conv	31	advcl	_	TokenRange=334:341
35	про	про	ADP	ADP	Case=Acc	37	case	_	TokenRange=342:345
36	XX.	XX.	ADJ	_	Case=Acc|Gender=Masc|Number=Sing	37	amod	_	_
37	вік	вік	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	34	obl	_	SpaceAfter=No|TokenRange=350:353
38	,	,	PUNCT	PUNCT	_	34	punct	_	TokenRange=353:354
39	стати	стати	VERB	VERB	Aspect=Perf|VerbForm=Inf	31	csubj	_	TokenRange=355:360
40	на	на	ADP	ADP	Case=Loc	41	case	_	TokenRange=361:363
41	ґрунтї	ґрунт	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	39	obl	_	TokenRange=364:370
42	науковому	науковий	ADJ	ADJ	Case=Loc|Gender=Masc|Number=Sing	41	amod	_	SpaceAfter=No|TokenRange=371:380
43	.	.	PUNCT	PUNCT	_	10	punct	_	TokenRange=380:381

~~~


