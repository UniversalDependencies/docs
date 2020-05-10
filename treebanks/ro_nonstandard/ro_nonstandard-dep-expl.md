---
layout: base
title:  'Statistics of expl in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `expl`

This relation is universal.
There are 4 language-specific subtypes of `expl`: <tt><a href="ro_nonstandard-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_nonstandard-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pv.html">expl:pv</a></tt>.

1499 nodes (0%) are attached to their parents as `expl`.

1230 instances of `expl` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.62441627751835.

The following 9 pairs of parts of speech are connected with `expl`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (1419; 95% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (47; 3% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (10; 1% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 expl	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	2	cc	_	ref=MATT20.32
2	stătu	sta	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT20.32
3	Iisus	Iisus	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	2	nsubj	_	ref=MATT20.32|SpaceAfter=No
4	,	,	PUNCT	COMMA	_	5	punct	_	ref=MATT20.32
5	chemă	chema	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	ref=MATT20.32
6	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	ref=MATT20.32
7	ei	el	PRON	Pp3mpa--------s	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Strong	5	nmod:pmod	_	ref=MATT20.32
8	și	și	CCONJ	Ccssp	Polarity=Pos	9	cc	_	ref=MATT20.32
9	zise	zice	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	conj	_	ref=MATT20.32|SpaceAfter=No
10	:	:	PUNCT	COLON	_	12	punct	_	ref=MATT20.32
11	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	12	expl	_	ref=MATT20.32
12	vreți	vrea	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	9	parataxis	_	ref=MATT20.32
13	să	să	PART	Qs	PartType=Sub	14	mark	_	ref=MATT20.32
14	fac	face	VERB	Vmsp1s	Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	12	ccomp	_	ref=MATT20.32
15	voao	tu	PRON	Pp2-pd--------s	Case=Dat|Number=Plur|Person=2|PronType=Prs|Strength=Strong	14	iobj	_	ref=MATT20.32|SpaceAfter=No
16	?	?	PUNCT	QUEST	_	12	punct	_	ref=MATT20.32

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl	color:blue
1	Iară	iar	CCONJ	Ccssp	Polarity=Pos	9	cc	_	ref=MARC13.37
2	cealea	acela	PRON	Pd3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Dem	9	obj	_	ref=MARC13.37
3	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	4	obj	_	ref=MARC13.37
4	zic	zice	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	ref=MARC13.37
5	voao	tu	PRON	Pp2-pd--------s	Case=Dat|Number=Plur|Person=2|PronType=Prs|Strength=Strong	4	iobj	_	ref=MARC13.37|SpaceAfter=No
6	,	,	PUNCT	COMMA	_	2	punct	_	ref=MARC13.37
7	tuturor	tot	PRON	Pi3-po	Case=Dat,Gen|Number=Plur|Person=3|PronType=Ind	9	iobj	_	ref=MARC13.37
8	vă	tu	PRON	Pp2-pa--------w	Case=Acc|Number=Plur|Person=2|PronType=Prs|Strength=Weak	9	expl	_	ref=MARC13.37
9	zic	zic	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	ref=MARC13.37|SpaceAfter=No
10	,	,	PUNCT	COMMA	_	11	punct	_	ref=MARC13.37
11	prevegheați	priveghea	VERB	Vmm-2p	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	9	parataxis	_	ref=MARC13.37|SpaceAfter=No
12	-vă	tu	PRON	Pp2-pa--------w	Case=Acc|Number=Plur|Person=2|PronType=Prs|Strength=Weak	11	expl:pv	_	ref=MARC13.37|SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	9	punct	_	ref=MARC13.37

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 expl	color:blue
1	Învingătoriul	învingător	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	ref=IOAN_APOC_21.7
2	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	aux	_	ref=IOAN_APOC_21.7
3	moșteni	moșteni	VERB	Vmn	VerbForm=Inf	0	root	_	ref=IOAN_APOC_21.7
4	toate	tot	PRON	Pi3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Ind	3	obj	_	ref=IOAN_APOC_21.7|SpaceAfter=No
5	;	;	PUNCT	SCOLON	_	11	punct	_	ref=IOAN_APOC_21.7
6	și	și	CCONJ	Ccssp	Polarity=Pos	11	cc	_	ref=IOAN_APOC_21.7|SpaceAfter=No
7	-i	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	11	expl	_	ref=IOAN_APOC_21.7
8	voiu	vrea	AUX	Vaip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres	11	aux	_	ref=IOAN_APOC_21.7
9	fi	fi	AUX	Van	VerbForm=Inf	11	cop	_	ref=IOAN_APOC_21.7
10	lui	el	PRON	Pp3msd--------s	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	11	iobj	_	ref=IOAN_APOC_21.7
11	Dumnezău	Dumnezeu	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	3	conj	_	ref=IOAN_APOC_21.7|SpaceAfter=No
12	,	,	PUNCT	COMMA	_	18	punct	_	ref=IOAN_APOC_21.7
13	și	și	CCONJ	Ccssp	Polarity=Pos	18	cc	_	ref=IOAN_APOC_21.7
14	el	el	PRON	Pp3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	ref=IOAN_APOC_21.7
15	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	18	aux	_	ref=IOAN_APOC_21.7
16	fi	fi	AUX	Van	VerbForm=Inf	18	cop	_	ref=IOAN_APOC_21.7
17	Mie	eu	PRON	Pp1-sd--------s	Case=Dat|Number=Sing|Person=1|PronType=Prs|Strength=Strong	18	iobj	_	ref=IOAN_APOC_21.7
18	fiiu	fiu	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	3	conj	_	ref=IOAN_APOC_21.7|SpaceAfter=No
19	.	.	PUNCT	PERIOD	_	3	punct	_	ref=IOAN_APOC_21.7

~~~


