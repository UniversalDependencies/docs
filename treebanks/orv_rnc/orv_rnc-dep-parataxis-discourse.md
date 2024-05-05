---
layout: base
title:  'Statistics of parataxis:discourse in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `parataxis:discourse`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-parataxis.html">parataxis</a></tt>.

35 nodes (0%) are attached to their parents as `parataxis:discourse`.

32 instances of `parataxis:discourse` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.62857142857143.

The following 9 pairs of parts of speech are connected with `parataxis:discourse`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (16; 46% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (5; 14% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (4; 11% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (3; 9% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (2; 6% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis:discourse	color:blue
1	Великій	великий	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	wf="Великій"
2	государь	государь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	vocative	_	wf="государь"|SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	wf=","|_
4	смилуйся	смиловатися	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Mid	0	root	_	wf="смилуйся"|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	wf=","|_
6	пожалуй	пожаловати	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	4	parataxis:discourse	_	wf="пожалуй"|SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	wf="."|_|_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 4 parataxis:discourse	color:blue
1	А	а	CCONJ	_	_	13	cc	_	wf="А"
2	я	я	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	wf="я"|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	wf=","
4	слава	слава	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	13	parataxis:discourse	_	wf="слава"
5	Богу	богъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	4	iobj	_	wf="Богу"|SpaceAfter=No
6	,	,	PUNCT	_	_	4	punct	_	wf=","
7	кроме	кромѣ	ADP	_	_	8	case	_	wf="кроме"
8	сего	сие	PRON	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	9	obl	_	wf="сего"
9	натсажать	надсажати	VERB	_	VerbForm=Inf|Voice=Act	13	xcomp	_	wf="натсажать"
10	себя	себя	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	9	obj	_	wf="себя"
11	інымъ	иной	DET	_	Case=Ins|Gender=Neut|Number=Sing|PronType=Tot	9	iobj	_	wf="інымъ"
12	не	не	PART	_	Polarity=Neg	13	advmod	_	wf="не"
13	стану	стати	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	wf="стану"
14	і	и	CCONJ	_	_	15	cc	_	wf="і"
15	поеду	поѣхати	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	13	conj	_	wf="поеду"
16	по	по	ADP	_	_	17	case	_	wf="по"
17	мѣре	мѣра	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	15	obl	_	wf="мѣре"
18	не	не	PART	_	Polarity=Neg	19	advmod	_	wf="не"
19	замешкаѳъ	замѣшкати	VERB	_	Tense=Past|VerbForm=Conv|Voice=Act	15	advcl	_	wf="замешкаѳъ"|SpaceAfter=No
20	;	;	PUNCT	_	_	26	punct	_	wf=";"
21	а	а	CCONJ	_	_	26	cc	_	wf="а"
22	Анъдурския	андурский	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	23	amod	_	wf="Анъдурския"
23	карабли	корабль	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	26	nsubj	_	wf="карабли"
24	еше	еще	ADV	_	Degree=Pos	26	advmod	_	wf="еше"
25	не	не	PART	_	Polarity=Neg	26	advmod	_	wf="не"
26	бывали	бывати	VERB	_	Aspect=Imp|Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	15	conj	_	wf="бывали"|SpaceAfter=No
27	.	.	PUNCT	_	_	13	punct	_	wf="."

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 parataxis:discourse	color:blue
1	Слава	слава	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	parataxis:discourse	_	wf="Слава"
2	Богу	богъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	1	iobj	_	wf="Богу"|SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	wf=","
4	живъ	живой	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	_	wf="живъ"|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	wf="."

~~~


