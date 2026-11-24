---
layout: base
title:  'Statistics of acl:relcl in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="uk_zhelekhivka-dep-acl.html">acl</a></tt>.

102 nodes (1%) are attached to their parents as `acl:relcl`.

102 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.79411764705882.

The following 9 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt> (84; 82% instances), <tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_zhelekhivka-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="uk_zhelekhivka-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="uk_zhelekhivka-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl:relcl	color:blue
1	Як	Як	ADV	ADV	_	4	advmod	_	TokenRange=11214:11219
2	же	же	PART	ADV	_	4	discourse	_	TokenRange=11214:11219
3	ж	ж	PART	ADV	_	4	discourse	_	TokenRange=11214:11219
4	мають	мати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=11220:11225
5	виглядати	виглядати	VERB	VERB	Aspect=Imp|VerbForm=Inf	4	xcomp	_	TokenRange=11226:11235
6	ті	той	DET	DET	Case=Nom|Number=Plur|PronType=Dem	7	det	_	TokenRange=11236:11238
7	діла	діло	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Plur	4	nsubj	_	SpaceAfter=No|TokenRange=11239:11243
8	,	,	PUNCT	PUNCT	_	10	punct	_	TokenRange=11243:11244
9	яких	який	PRON	DET	Animacy[gram]=Anim|Case=Acc|Number=Plur|PronType=Rel	11	obj	_	TokenRange=11245:11249
10	може	могти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	TokenRange=11250:11254
11	довершити	довершити	VERB	VERB	Aspect=Perf|VerbForm=Inf	10	xcomp	_	TokenRange=11255:11264
12	молодіж	молодіж	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	SpaceAfter=No|TokenRange=11265:11272
13	?	?	PUNCT	PUNCT	_	4	punct	_	TokenRange=11272:11273

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 18 acl:relcl	color:blue
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
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 34 acl:relcl	color:blue
1	Коли	коли	SCONJ	SCONJ	_	3	mark	_	TokenRange=13080:13084
2	глибше	глибше	ADV	ADV	Degree=Cmp	3	advmod	_	TokenRange=13085:13091
3	поміркувати	поміркувати	VERB	VERB	Aspect=Perf|VerbForm=Inf	21	advcl	_	TokenRange=13092:13103
4	біля	біля	ADP	ADP	Case=Gen	5	case	_	TokenRange=13104:13108
5	причин	причина	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	3	obl	_	SpaceAfter=No|TokenRange=13109:13115
6	,	,	PUNCT	PUNCT	_	9	punct	_	TokenRange=13115:13116
7	що	що	SCONJ	SCONJ	_	9	mark	_	TokenRange=13117:13119
8	дїйсне	дійсно	ADV	ADV	_	9	advmod	_	TokenRange=13120:13126
9	сприяли	сприяти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	5	acl:relcl	_	TokenRange=13127:13134
10	і	і	CCONJ	CCONJ	_	11	cc	_	TokenRange=13135:13136
11	викликали	викликати	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	9	conj	_	TokenRange=13137:13146
12	головнїші	головніший	ADJ	ADJ	Animacy=Inan|Case=Acc|Number=Plur	13	amod	_	TokenRange=13147:13156
13	війни	війна	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	11	obj	_	TokenRange=13157:13162
14	за	за	ADP	ADP	Case=Acc	17	case	_	TokenRange=13163:13165
15	останнї	останній	ADJ	ADJ	Animacy=Inan|Case=Acc|Number=Plur	17	amod	_	TokenRange=13166:13173
16	три	три	NUM	NUM	Case=Acc|NumType=Card	17	nummod	_	TokenRange=13174:13177
17	віки	вік	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	13	nmod	_	SpaceAfter=No|TokenRange=13178:13182
18	,	,	PUNCT	PUNCT	_	9	punct	_	TokenRange=13182:13183
19	так	так	PART	ADV	_	21	discourse	_	TokenRange=13184:13187
20	не	не	PART	PART	Polarity=Neg	21	advmod:neg	_	TokenRange=13188:13190
21	можна	можна	ADV	ADV	_	0	root	_	TokenRange=13191:13196
22	не	не	PART	PART	Polarity=Neg	23	advmod:neg	_	TokenRange=13197:13199
23	спостерегти	спостерегти	VERB	VERB	Aspect=Perf|VerbForm=Inf	21	csubj	_	SpaceAfter=No|TokenRange=13200:13211
24	,	,	PUNCT	PUNCT	_	29	punct	_	TokenRange=13211:13212
25	що	що	SCONJ	SCONJ	_	29	mark	_	TokenRange=13213:13215
26	причини	причина	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Plur	29	nsubj	_	TokenRange=13216:13223
27	були	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	29	cop	_	TokenRange=13224:13228
28	ті	той	DET	DET	Case=Nom|Number=Plur|PronType=Dem	29	det	_	TokenRange=13229:13231
29	самісецькі	самісецький	ADJ	ADJ	Case=Nom|Number=Plur	23	ccomp	_	SpaceAfter=No|TokenRange=13232:13242
30	,	,	PUNCT	PUNCT	_	34	punct	_	TokenRange=13242:13243
31	які	який	PRON	DET	Case=Nom|Number=Plur|PronType=Rel	34	nsubj	_	TokenRange=13244:13247
32	й	й	PART	PART	_	33	advmod:emph	_	TokenRange=13248:13249
33	тепер	тепер	ADV	ADV	PronType=Dem	34	advmod	_	TokenRange=13250:13255
34	сприяють	сприяти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	29	acl:relcl	_	TokenRange=13256:13264
35	ворогованню	ворогування	NOUN	NOUN	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	34	obl	_	TokenRange=13265:13276
36	межинародному	межинародний	ADJ	ADJ	Case=Dat|Gender=Masc|Number=Sing	35	amod	_	TokenRange=13277:13290
37	і	і	CCONJ	CCONJ	_	38	cc	_	TokenRange=13291:13292
38	можуть	могти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	34	conj	_	TokenRange=13293:13299
39	викликати	викликати	VERB	VERB	Aspect=Perf|VerbForm=Inf	38	xcomp	_	TokenRange=13300:13309
40	війну	війна	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	39	obj	_	SpaceAfter=No|TokenRange=13310:13315
41	,	,	PUNCT	PUNCT	_	47	punct	_	TokenRange=13315:13316
42	та	та	CCONJ	CCONJ	_	47	cc	_	TokenRange=13317:13319
43	ще	ще	ADV	ADV	_	47	advmod	_	TokenRange=13320:13322
44	може	може	PART	PART	_	47	discourse	_	TokenRange=13323:13327
45	й	й	PART	PART	_	47	advmod:emph	_	TokenRange=13328:13329
46	не	не	PART	PART	Polarity=Neg	47	advmod:neg	_	TokenRange=13330:13332
47	одну	один	NUM	NUM	Case=Acc|Gender=Fem|Number=Sing|NumType=Card	39	conj	_	SpaceAfter=No|TokenRange=13333:13337
48	.	.	PUNCT	PUNCT	_	21	punct	_	TokenRange=13337:13338

~~~


