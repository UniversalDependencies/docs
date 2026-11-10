---
layout: base
title:  'Statistics of det in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `det`

This relation is universal.
There are 2 language-specific subtypes of `det`: <tt><a href="uk_zhelekhivka-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="uk_zhelekhivka-dep-det-nummod.html">det:nummod</a></tt>.

437 nodes (5%) are attached to their parents as `det`.

408 instances of `det` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.50114416475973.

The following 10 pairs of parts of speech are connected with `det`: <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-DET.html">DET</a></tt> (399; 91% instances), <tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_zhelekhivka-pos-DET.html">DET</a></tt> (13; 3% instances), <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-DET.html">DET</a></tt> (9; 2% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="uk_zhelekhivka-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_zhelekhivka-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_zhelekhivka-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_zhelekhivka-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Отся	оцей	DET	DET	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	det	_	TokenRange=1189:1193
2	гіпотеза	гіпотеза	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	TokenRange=1194:1202
3	нам	ми	PRON	PRON	Animacy=Anim|Case=Dat|Number=Plur|Person=1|PronType=Prs	4	obl	_	TokenRange=1203:1206
4	здаєть	здавати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=1207:1213
5	ся	ся	PRON	PRON	PronType=Prs|Reflex=Yes	4	expl:pv	_	TokenRange=1214:1216
6	трохи	трохи	ADV	ADV	_	7	advmod	_	TokenRange=1217:1222
7	великою	великий	ADJ	ADJ	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	4	xcomp	_	SpaceAfter=No|TokenRange=1223:1230
8	.	.	PUNCT	PUNCT	_	4	punct	_	TokenRange=1230:1231

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 det	color:blue
1	—	—	PUNCT	PUNCT	_	3	punct	_	TokenRange=10308:10309
2	Друга	другий	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing|NumType=Ord	3	amod	_	TokenRange=10310:10315
3	сторона	сторона	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	SpaceAfter=No|TokenRange=10316:10323
4	,	,	PUNCT	PUNCT	_	7	punct	_	TokenRange=10323:10324
5	—	—	PUNCT	PUNCT	_	7	punct	_	TokenRange=10325:10326
6	це	це	PRON	PRON	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	expl	_	TokenRange=10327:10329
7	переведення	переведення	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	TokenRange=10330:10341
8	в	в	ADP	ADP	Case=Acc	9	case	_	TokenRange=10342:10343
9	діло	діло	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	7	nmod	_	SpaceAfter=No|TokenRange=10344:10348
10	,	,	PUNCT	PUNCT	_	12	punct	_	TokenRange=10348:10349
11	практичне	практичний	ADJ	ADJ	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	12	amod	_	TokenRange=10350:10359
12	примінення	примінення	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	7	conj	_	TokenRange=10360:10370
13	того	те	PRON	DET	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	12	nmod	_	TokenRange=10371:10375
14	всего	все	DET	PRON	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Tot	13	det	_	SpaceAfter=No|TokenRange=10376:10381
15	,	,	PUNCT	PUNCT	_	18	punct	_	TokenRange=10381:10382
16	до	до	ADP	ADP	Case=Gen	17	case	_	TokenRange=10383:10385
17	чого	що	PRON	PRON	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|PronType=Rel	18	obl	_	TokenRange=10386:10390
18	дійшлося	дійтися	VERB	VERB	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Reflex=Yes|Tense=Past|VerbForm=Fin	13	acl:relcl	_	TokenRange=10391:10399
19	в	в	ADP	ADP	Case=Loc	20	case	_	TokenRange=10400:10401
20	теорії	теорія	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	18	obl	_	SpaceAfter=No|TokenRange=10402:10408
21	.	.	PUNCT	PUNCT	_	7	punct	_	TokenRange=10408:10409

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	Та	той	DET	CCONJ	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	TokenRange=3436:3438
2	геройська	геройський	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	3	amod	_	TokenRange=3439:3448
3	сміливість	сміливість	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	TokenRange=3449:3459
4	й	й	PART	PART	_	5	discourse	_	TokenRange=3460:3461
5	робить	робити	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=3462:3468
6	його	його	DET	DET	Case=Acc|Gender=Fem|InflClass=Ind|Number=Sing|Person=3|Poss=Yes|PronType=Prs	7	det	_	InflClass=Ind|TokenRange=3469:3473
7	критику	критика	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	5	obj	_	TokenRange=3474:3481
8	такою	такий	DET	DET	Case=Ins|Gender=Fem|Number=Sing|PronType=Dem	9	det	_	TokenRange=3482:3487
9	займаючою	займаючий	ADJ	ADJ	Aspect=Imp|Case=Ins|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	5	xcomp	_	SpaceAfter=No|TokenRange=3488:3497
10	,	,	PUNCT	PUNCT	_	11	punct	_	TokenRange=3497:3498
11	життєвою	життєвий	ADJ	ADJ	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	9	conj	_	SpaceAfter=No|TokenRange=3499:3507
12	.	.	PUNCT	PUNCT	_	5	punct	_	TokenRange=3507:3508

~~~


