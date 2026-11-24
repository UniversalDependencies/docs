---
layout: base
title:  'Statistics of nsubj:pass in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="uk_zhelekhivka-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="uk_zhelekhivka-dep-nsubj-outer.html">nsubj:outer</a></tt>.

15 nodes (0%) are attached to their parents as `nsubj:pass`.

10 instances of `nsubj:pass` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.06666666666667.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt> (11; 73% instances), <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt> (3; 20% instances), <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 nsubj:pass	color:blue
1	Певна	певний	ADJ	ADJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	TokenRange=8186:8191
2	річ	річ	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No|TokenRange=8192:8195
3	,	,	PUNCT	PUNCT	_	13	punct	_	TokenRange=8195:8196
4	що	що	SCONJ	SCONJ	_	13	mark	_	TokenRange=8197:8199
5	з	з	ADP	ADP	Case=Ins	6	case	_	TokenRange=8200:8201
6	початком	початок	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	13	obl	_	TokenRange=8202:8210
7	XIX	XIX	ADJ	ADJ	Case=Gen|Gender=Masc|Number=Sing|NumType=Ord	9	amod	_	SpaceAfter=No|TokenRange=8211:8214
8	.	.	PUNCT	PUNCT	_	7	punct	_	TokenRange=8214:8215
9	віку	вік	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	TokenRange=8216:8220
10	народи	народ	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	13	nsubj:pass	_	TokenRange=8221:8227
11	Европи	Європа	PROPN	PROPN	Animacy=Inan|Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	10	nmod	_	NameType=Geo|TokenRange=8228:8234
12	були	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	13	cop	_	TokenRange=8235:8239
13	подїлені	поділений	ADJ	ADJ	Aspect=Perf|Case=Nom|Number=Plur|VerbForm=Part|Voice=Pass	2	ccomp	_	TokenRange=8240:8248
14	без	без	ADP	ADP	Case=Gen	16	case	_	TokenRange=8249:8252
15	їх	їх	DET	DET	Case=Gen|Gender=Fem|InflClass=Ind|Number=Sing|Person=3|PronType=Prs	16	det	_	BadStyle=Yes|InflClass=Ind|TokenRange=8253:8255
16	волї	воля	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	13	obl	_	TokenRange=8256:8260
17	гірше	гірше	ADV	ADV	Degree=Cmp	13	advmod	_	TokenRange=8261:8266
18	нїж	ніж	SCONJ	SCONJ	_	19	mark	_	TokenRange=8267:8270
19	тепер	тепер	ADV	ADV	PronType=Dem	17	advcl	_	SpaceAfter=No|TokenRange=8271:8276
20	.	.	PUNCT	PUNCT	_	2	punct	_	TokenRange=8276:8277

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 nsubj:pass	color:blue
1	Віщовання	віщування	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	16	nsubj	_	TokenRange=382:391
2	про	про	ADP	ADP	Case=Acc	3	case	_	TokenRange=392:395
3	життє	життя	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	1	nmod	_	TokenRange=396:401
4	народів	народ	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	SpaceAfter=No|TokenRange=402:409
5	,	,	PUNCT	PUNCT	_	8	punct	_	TokenRange=409:410
6	якого	який	PRON	DET	Case=Gen|Gender=Neut|Number=Sing|PronType=Rel	8	obj	_	TokenRange=411:416
7	вони	вони	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	8	nsubj	_	TokenRange=417:421
8	досягнуть	досягнути	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	3	acl:relcl	_	TokenRange=422:431
9	через	через	ADP	ADP	Case=Acc	10	case	_	TokenRange=432:437
10	сотню	сотня	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	8	obl	_	TokenRange=438:443
11	лїт	літа	NOUN	NOUN	Animacy=Inan|Case=Gen|Number=Ptan	10	nmod	_	SpaceAfter=No|TokenRange=444:447
12	,	,	PUNCT	PUNCT	_	8	punct	_	TokenRange=447:448
13	зовсїм	зовсім	ADV	ADV	_	16	advmod	_	TokenRange=449:455
14	не	не	PART	PART	Polarity=Neg	16	advmod:neg	_	TokenRange=456:458
15	буде	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	16	cop	_	TokenRange=459:463
16	чудним	чудний	ADJ	ADJ	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No|TokenRange=464:470
17	,	,	PUNCT	PUNCT	_	21	punct	_	TokenRange=470:471
18	коли	коли	SCONJ	SCONJ	_	21	mark	_	TokenRange=472:476
19	воно	воно	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	21	nsubj:pass	_	TokenRange=477:481
20	буде	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	21	cop	_	TokenRange=482:486
21	виведене	виведений	ADJ	ADJ	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	16	advcl	_	TokenRange=487:495
22	з	з	ADP	ADP	Case=Gen	24	case	_	TokenRange=496:497
23	безсторонного	безсторонній	ADJ	ADJ	Case=Gen|Gender=Masc|Number=Sing	24	amod	_	TokenRange=498:511
24	суду	суд	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	21	obl	_	TokenRange=512:516
25	над	над	ADP	ADP	Case=Ins	26	case	_	TokenRange=517:520
26	минулим	минуле	ADJ	ADJ	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	24	nmod	_	SpaceAfter=No|TokenRange=521:528
27	,	,	PUNCT	PUNCT	_	29	punct	_	TokenRange=528:529
28	з	з	ADP	ADP	Case=Gen	29	case	_	TokenRange=530:531
29	суду	суд	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	24	appos	_	SpaceAfter=No|TokenRange=532:536
30	,	,	PUNCT	PUNCT	_	31	punct	_	TokenRange=536:537
31	зробленого	зроблений	ADJ	ADJ	Aspect=Perf|Case=Gen|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	29	amod	_	TokenRange=538:548
32	пісьля	після	NOUN	NOUN	Case=Gen	34	case	_	TokenRange=549:555
33	безсторонної	безсторонній	ADJ	ADJ	Case=Gen|Gender=Fem|Number=Sing	34	amod	_	TokenRange=556:568
34	розваги	розвага	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	31	obl	_	SpaceAfter=No|TokenRange=569:576
35	.	.	PUNCT	PUNCT	_	16	punct	_	SpacesAfter=\r\n\r\n\s\r\n\r\n|TokenRange=576:577

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	Здійснений	здійснений	ADJ	ADJ	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	3	xcomp	_	TokenRange=15217:15227
2	він	він	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	TokenRange=15228:15231
3	міг	могти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	TokenRange=15232:15237
4	би	би	AUX	AUX	_	3	aux	_	TokenRange=15232:15237
5	бути	бути	AUX	AUX	Aspect=Imp|VerbForm=Inf	1	cop	_	TokenRange=15238:15242
6	аж	аж	PART	PART	_	7	discourse	_	TokenRange=15243:15245
7	тоді	тоді	ADV	ADV	PronType=Dem	3	advmod	_	SpaceAfter=No|TokenRange=15246:15250
8	,	,	PUNCT	PUNCT	_	12	punct	_	TokenRange=15250:15251
9	коли	коли	ADV	ADV	_	12	mark	_	TokenRange=15252:15256
10	все	весь	DET	DET	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	11	det	_	TokenRange=15257:15260
11	людство	людство	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	12	nsubj	_	TokenRange=15261:15268
12	двигнеться	двигнутися	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Reflex=Yes|Tense=Fut|VerbForm=Fin	7	advcl	_	TokenRange=15269:15279
13	на	на	ADP	ADP	Case=Acc	15	case	_	TokenRange=15280:15282
14	високий	високий	ADJ	ADJ	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	TokenRange=15283:15290
15	ступінь	ступінь	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	12	obl	_	TokenRange=15291:15298
16	загальної	загальний	ADJ	ADJ	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	17	amod	_	TokenRange=15299:15308
17	етики	етика	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	15	nmod	_	SpaceAfter=No|TokenRange=15309:15314
18	,	,	PUNCT	PUNCT	_	26	punct	_	TokenRange=15314:15315
19	коли	коли	ADV	SCONJ	_	26	mark	_	TokenRange=15316:15320
20	глибоко	глибокий	ADV	ADJ	Degree=Pos	21	advmod	_	TokenRange=15321:15328
21	етичне	етичний	ADJ	ADJ	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	22	amod	_	TokenRange=15329:15335
22	поступовання	поступовання	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	26	nsubj	_	TokenRange=15336:15348
23	буде	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	26	cop	_	TokenRange=15349:15353
24	чимось	щось	PRON	PRON	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing|PronType=Ind	26	obl	_	TokenRange=15354:15360
25	так	так	ADV	ADV	PronType=Dem	26	advmod	_	TokenRange=15361:15364
26	зрозумілим	зрозумілий	ADJ	ADJ	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	12	conj	_	TokenRange=15365:15375
27	як	як	SCONJ	SCONJ	_	34	mark	_	TokenRange=15376:15378
28	тепер	тепер	ADV	ADV	PronType=Dem	34	advmod	_	TokenRange=15379:15384
29	н	н.	ADP	NOUN	Abbr=Yes|ExtPos=ADV	34	parataxis	_	SpaceAfter=No|TokenRange=15385:15386
30	.	.	PUNCT	PUNCT	_	29	punct	_	TokenRange=15386:15387
31	пр	пр.	NOUN	NOUN	Abbr=Yes|InflClass=Ind	29	fixed	_	TokenRange=15388:15391|SpaceAfter=No
32	.	.	PUNCT	PUNCT	_	31	punct	_	TokenRange=15388:15391
33	тільки	тільки	PART	PART	_	34	advmod	_	TokenRange=15392:15398
34	підчеркування	підчеркування	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	26	advcl	_	TokenRange=15399:15412
35	егоїстичніх	егоїстичній	ADJ	ADJ	Case=Gen|Number=Plur	36	amod	_	TokenRange=15413:15424
36	інтересів	інтерес	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	34	nmod	_	TokenRange=15425:15434
37	та	та	CCONJ	CCONJ	_	38	cc	_	TokenRange=15435:15437
38	гноблення	гноблення	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	34	conj	_	TokenRange=15438:15447
39	другого	другий	PRON	DET	Case=Gen|Gender=Masc|Number=Sing|PronType=Ind	38	nmod	_	SpaceAfter=No|TokenRange=15448:15455
40	.	.	PUNCT	PUNCT	_	3	punct	_	TokenRange=15455:15456

~~~


