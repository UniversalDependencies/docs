---
layout: base
title:  'Statistics of acl in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="uk_zhelekhivka-dep-acl-relcl.html">acl:relcl</a></tt>.

64 nodes (1%) are attached to their parents as `acl`.

62 instances of `acl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.328125.

The following 14 pairs of parts of speech are connected with `acl`: <tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt> (21; 33% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt> (19; 30% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt> (6; 9% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt> (3; 5% instances), <tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt> (3; 5% instances), <tt><a href="uk_zhelekhivka-pos-DET.html">DET</a></tt>-<tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl	color:blue
1	Західна	західний	ADJ	ADJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	TokenRange=9126:9133
2	Европа	Європа	PROPN	PROPN	Animacy=Inan|Case=Nom|Gender=Fem|NameType=Geo|Number=Sing	3	nsubj	_	NameType=Geo|TokenRange=9134:9140
3	перестала	перестати	VERB	VERB	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	TokenRange=9141:9150
4	тепер	тепер	ADV	ADV	PronType=Dem	3	advmod	_	TokenRange=9151:9156
5	бути	бути	AUX	AUX	Aspect=Imp|VerbForm=Inf	6	cop	_	TokenRange=9157:9161
6	тим	те	PRON	PRON	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	3	xcomp	_	SpaceAfter=No|TokenRange=9162:9165
7	,	,	PUNCT	PUNCT	_	9	punct	_	TokenRange=9165:9166
8	чим	що	PRON	PRON	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing|PronType=Rel	9	obl	_	TokenRange=9167:9170
9	була	бути	VERB	AUX	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	6	acl	_	TokenRange=9171:9175
10	за	за	ADP	ADP	Case=Gen	11	case	_	TokenRange=9176:9178
11	Драгоманова	Драгоманов	PROPN	PROPN	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	9	obl	_	NameType=Sur|SpaceAfter=No|TokenRange=9179:9190
12	.	.	PUNCT	PUNCT	_	3	punct	_	TokenRange=9190:9191

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 acl	color:blue
1	Навпаки	навпаки	ADV	ADV	_	4	parataxis	_	TokenRange=28934:28941
2	кожен	кожний	DET	DET	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot|Variant=Short	3	det	_	TokenRange=28942:28947|Variant=Short
3	українець	українець	NOUN	NOUN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	TokenRange=28948:28957
4	мав	мати	VERB	VERB	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	TokenRange=28958:28961
5	би	би	AUX	AUX	_	4	aux	_	TokenRange=28962:28964
6	право	право	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	4	obj	_	TokenRange=28965:28970
7	дорікати	дорікати	VERB	VERB	Aspect=Imp|VerbForm=Inf	6	acl	_	TokenRange=28971:28979
8	нам	ми	PRON	PRON	Animacy=Anim|Case=Dat|Number=Plur|Person=1|PronType=Prs	7	obl	_	SpaceAfter=No|TokenRange=28980:28983
9	,	,	PUNCT	PUNCT	_	14	punct	_	TokenRange=28983:28984
10	коли	коли	SCONJ	SCONJ	PronType=Rel	14	mark	_	TokenRange=28985:28991
11	б	б	AUX	SCONJ	_	14	aux	_	TokenRange=28985:28991
12	ми	ми	PRON	PRON	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	14	nsubj	_	TokenRange=28992:28994
13	не	не	PART	PART	Polarity=Neg	14	advmod:neg	_	TokenRange=28995:28997
14	йшли	йти	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	4	advcl	_	TokenRange=28998:29002
15	поперед	поперед	ADP	ADP	Case=Gen	16	case	_	TokenRange=29003:29010
16	Українцїв	українець	NOUN	PROPN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	14	obl	_	SpaceAfter=No|TokenRange=29011:29020
17	!	!	PUNCT	PUNCT	_	4	punct	_	TokenRange=29020:29021

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 36 acl	color:blue
1	Війна	війна	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	13	nsubj	_	TokenRange=14408:14413
2	в	в	ADP	ADP	Case=Loc	3	case	_	TokenRange=14414:14415
3	загалї	загал	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	13	obl	_	SpaceAfter=No|TokenRange=14416:14422
4	,	,	PUNCT	PUNCT	_	10	punct	_	TokenRange=14422:14423
5	на	на	ADP	ADP	Case=Loc	6	case	_	TokenRange=14424:14426
6	чому	що	PRON	NOUN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing|PronType=Int	10	obl	_	TokenRange=14427:14433
7	б	б	AUX	NOUN	_	10	aux	_	TokenRange=14427:14433
8	вона	вона	PRON	PRON	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	TokenRange=14434:14438
9	не	не	PART	PART	Polarity=Neg	10	advmod:neg	_	TokenRange=14439:14441
10	скінчила	скінчити	VERB	VERB	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	13	advcl	_	TokenRange=14442:14450
11	ся	ся	PRON	PRON	PronType=Prs|Reflex=Yes	10	expl:pv	_	SpaceAfter=No|TokenRange=14451:14453
12	,	,	PUNCT	PUNCT	_	10	punct	_	TokenRange=14453:14454
13	дає	давати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=14455:14458
14	ті	той	DET	DET	Animacy=Inan|Case=Acc|Number=Plur|PronType=Dem	27	det	_	SpaceAfter=No|TokenRange=14459:14461
15	,	,	PUNCT	PUNCT	_	17	punct	_	TokenRange=14461:14462
16	чи	чи	CCONJ	CCONJ	_	17	cc	_	TokenRange=14463:14465
17	інчі	інший	DET	NOUN	Animacy=Inan|Case=Acc|Number=Plur|PronType=Ind	14	conj	_	SpaceAfter=No|TokenRange=14466:14470
18	,	,	PUNCT	PUNCT	_	20	punct	_	TokenRange=14470:14471
19	одному	один	PRON	DET	Case=Dat|Gender=Masc|Number=Sing|PronType=Ind	20	nmod	_	TokenRange=14472:14478
20	милі	милий	ADJ	NOUN	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	27	acl	_	SpaceAfter=No|TokenRange=14479:14483
21	,	,	PUNCT	PUNCT	_	26	punct	_	TokenRange=14483:14484
22	другому	другий	PRON	DET	Case=Dat|Gender=Masc|Number=Sing|PronType=Ind	26	det	_	TokenRange=14485:14492
23	нїби	ніби	PART	PART	ExtPos=PART	26	discourse	_	TokenRange=14493:14497
24	то	то	PART	PART	_	23	fixed	_	TokenRange=14498:14500
25	й	й	PART	PART	_	26	advmod:emph	_	TokenRange=14501:14502
26	добрі	добрий	ADJ	ADJ	Animacy=Inan|Case=Acc|Degree=Pos|Number=Plur	20	conj	_	TokenRange=14503:14508
27	добутки	добуток	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	13	obj	_	TokenRange=14509:14516
28	—	—	PUNCT	PUNCT	_	31	punct	_	TokenRange=14517:14518
29	тілько	тільки	PART	PART	_	31	discourse	_	TokenRange=14519:14525
30	на	на	ADP	ADP	Case=Acc	31	case	_	TokenRange=14526:14528
31	час	час	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	13	obl	_	SpaceAfter=No|TokenRange=14529:14532
32	,	,	PUNCT	PUNCT	_	36	punct	_	TokenRange=14532:14533
33	інодї	іноді	ADV	ADV	PronType=Ind	36	orphan	_	TokenRange=14534:14539
34	на	на	ADP	ADP	Case=Acc	36	case	_	TokenRange=14540:14542
35	вельми	вельми	ADV	NOUN	_	36	advmod	_	TokenRange=14543:14549
36	короткий	короткий	ADJ	ADJ	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	31	acl	_	SpaceAfter=No|TokenRange=14550:14558
37	.	.	PUNCT	PUNCT	_	13	punct	_	SpacesAfter=\r\n\r\n\s\r\n\r\n|TokenRange=14558:14559

~~~


