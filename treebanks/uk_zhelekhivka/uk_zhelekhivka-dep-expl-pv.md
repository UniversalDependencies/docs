---
layout: base
title:  'Statistics of expl:pv in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="uk_zhelekhivka-dep-expl.html">expl</a></tt>.

95 nodes (1%) are attached to their parents as `expl:pv`.

95 instances of `expl:pv` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `expl:pv`: <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt> (93; 98% instances), <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_zhelekhivka-pos-DET.html">DET</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 expl:pv	color:blue
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
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 40	bgColor:blue
# visual-style 40	fgColor:white
# visual-style 40 41 expl:pv	color:blue
1	Він	він	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	TokenRange=2160:2163
2	описав	описати	VERB	VERB	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	TokenRange=2164:2170
3	і	і	CCONJ	CCONJ	_	4	cc	_	TokenRange=2171:2172
4	видав	видати	VERB	VERB	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	2	conj	_	TokenRange=2173:2178
5	богато	багато	ADV	ADV	Degree=Pos	7	advmod	_	TokenRange=2179:2185
6	старих	старий	ADJ	ADJ	Case=Gen|Degree=Pos|Number=Plur	7	amod	_	TokenRange=2186:2192
7	памятників	пам'ятник	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	obj	_	SpaceAfter=No|TokenRange=2193:2203
8	,	,	PUNCT	PUNCT	_	14	punct	_	TokenRange=2203:2204
9	які	який	DET	DET	Case=Nom|Number=Plur|PronType=Rel	14	nsubj	_	TokenRange=2205:2208
10	для	для	ADP	ADP	Case=Gen	11	case	_	TokenRange=2209:2212
11	істориї	історія	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	14	obl	_	TokenRange=2213:2220
12	української	український	ADJ	ADJ	Case=Gen|Gender=Fem|Number=Sing	13	amod	_	TokenRange=2221:2232
13	мови	мова	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	11	nmod	_	TokenRange=2233:2237
14	мають	мати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	TokenRange=2238:2243
15	велику	великий	ADJ	ADJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	16	amod	_	TokenRange=2244:2250
16	вагу	вага	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	14	obj	_	SpaceAfter=No|TokenRange=2251:2255
17	,	,	PUNCT	PUNCT	_	20	punct	_	TokenRange=2255:2256
18	як	як	SCONJ	SCONJ	ExtPos=SCONJ	20	mark	_	TokenRange=2257:2259
19	от	от	PART	PART	_	18	fixed	_	TokenRange=2260:2262
20	Dokumenta	Dokumenta	X	X	Foreign=Yes	7	appos	_	TokenRange=2263:2272
21	mołdawskie	mołdawskie	X	X	Foreign=Yes	20	flat:foreign	_	TokenRange=2273:2283
22	і	і	X	X	Foreign=Yes	20	flat:foreign	_	TokenRange=2284:2285
23	multańskie	multańskie	X	X	Foreign=Yes	20	flat:foreign	_	TokenRange=2286:2296
24	z	z	X	ADP	Foreign=Yes	20	case	_	TokenRange=2297:2298
25	archiwum	archiwum	X	X	Foreign=Yes	20	flat:foreign	_	TokenRange=2299:2307
26	miasta	miasta	X	X	Foreign=Yes	20	flat:foreign	_	TokenRange=2308:2314
27	Lwowa	Lwowa	X	X	Foreign=Yes	20	flat:foreign	_	TokenRange=2315:2320
28	(	(	PUNCT	PUNCT	_	29	punct	_	SpaceAfter=No|TokenRange=2321:2322
29	1878	1878	ADJ	ADJ	Case=Nom|Gender=Masc|Number=Sing|NumType=Ord	20	parataxis	_	SpaceAfter=No|TokenRange=2322:2326|Uninflect=Yes
30	)	)	PUNCT	PUNCT	_	29	punct	_	SpaceAfter=No|TokenRange=2326:2327
31	,	,	PUNCT	PUNCT	_	37	punct	_	TokenRange=2327:2328
32	т	т.	ADV	ADV	Abbr=Yes|ExtPos=ADJ|PronType=Dem	37	amod	_	SpaceAfter=No|TokenRange=2329:2330
33	.	.	PUNCT	PUNCT	_	32	punct	_	TokenRange=2330:2331
34	зв	зв.	ADJ	ADJ	Abbr=Yes|Case=Nom|InflClass=Ind|Number=Plur	32	fixed	_	SpaceAfter=No|TokenRange=2332:2334|Uninflect=Yes
35	.	.	PUNCT	PUNCT	_	34	punct	_	TokenRange=2334:2335
36	буковинські	буковинський	ADJ	ADJ	Case=Nom|Number=Plur	37	amod	_	TokenRange=2336:2347
37	грамоти	грамота	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	20	conj	_	SpaceAfter=No|TokenRange=2348:2355
38	,	,	PUNCT	PUNCT	_	40	punct	_	TokenRange=2355:2356
39	що	що	SCONJ	SCONJ	_	40	mark	_	TokenRange=2357:2359
40	визначають	визначати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	37	acl:relcl	_	TokenRange=2360:2370
41	ся	ся	DET	DET	PronType=Prs|Reflex=Yes	40	expl:pv	_	TokenRange=2371:2373
42	незвичайно	незвичайно	ADV	ADV	_	43	advmod	_	TokenRange=2374:2384
43	чистою	чистий	ADJ	ADJ	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	45	amod	_	TokenRange=2385:2391
44	народною	народний	ADJ	ADJ	Case=Ins|Gender=Fem|Number=Sing	45	amod	_	TokenRange=2392:2400
45	мовою	мова	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	40	obl	_	TokenRange=2401:2406
46	і	і	CCONJ	CCONJ	_	47	cc	_	TokenRange=2407:2408
47	становлять	становити	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	40	conj	_	TokenRange=2409:2419
48	важну	важний	ADJ	ADJ	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	49	amod	_	TokenRange=2420:2425
49	підставу	підстава	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	47	obj	_	TokenRange=2426:2434
50	для	для	ADP	ADP	Case=Gen	52	case	_	TokenRange=2435:2438
51	історичної	історичний	ADJ	ADJ	Case=Gen|Gender=Fem|Number=Sing	52	amod	_	TokenRange=2439:2449
52	граматики	граматика	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	49	nmod	_	TokenRange=2450:2459
53	укр.	укр.	ADJ	ADJ	Abbr=Yes|Case=Gen|Gender=Fem|InflClass=Ind|Number=Sing	54	amod	_	TokenRange=2460:2464
54	мови	мова	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	52	nmod	_	TokenRange=2465:2469
55	15-го	15-й	ADJ	ADJ	Case=Gen|Gender=Masc|Number=Sing|NumType=Ord	58	amod	_	TokenRange=2470:2475
56	і	і	CCONJ	CCONJ	_	57	cc	_	TokenRange=2476:2477
57	16-го	16-й	ADJ	ADJ	Case=Gen|Gender=Masc|Number=Sing|NumType=Ord	55	conj	_	TokenRange=2478:2483
58	віку	вік	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	54	nmod	_	SpaceAfter=No|TokenRange=2484:2488
59	.	.	PUNCT	PUNCT	_	2	punct	_	TokenRange=2488:2489

~~~


