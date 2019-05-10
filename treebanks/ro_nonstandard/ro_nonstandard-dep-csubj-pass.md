---
layout: base
title:  'Statistics of csubj:pass in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-csubj.html">csubj</a></tt>.

55 nodes (0%) are attached to their parents as `csubj:pass`.

37 instances of `csubj:pass` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.05454545454545.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (51; 93% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 csubj:pass	color:blue
1	Zis	zice	VERB	Vmp--sm-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part	0	root	_	ref=PAVEL_ROM.9.12
2	fu	fi	AUX	Vais3s	Mood=Ind|Number=Sing|Person=3|Tense=Past	1	aux:pass	_	ref=PAVEL_ROM.9.12
3	ei	el	PRON	Pp3fsd--------s	Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Strong	1	iobj	_	ref=PAVEL_ROM.9.12|SpaceAfter=No
4	,	,	PUNCT	COMMA	_	9	punct	_	ref=PAVEL_ROM.9.12
5	că	că	SCONJ	Csssp	Polarity=Pos	9	mark	_	ref=PAVEL_ROM.9.12
6	cel	cel	DET	Tdmsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	ref=PAVEL_ROM.9.12
7	mai	mai	ADV	Rg	_	8	advmod	_	ref=PAVEL_ROM.9.12
8	mare	mare	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	9	nsubj	_	ref=PAVEL_ROM.9.12
9	sluji	sluji	VERB	Vmn	VerbForm=Inf	1	csubj:pass	_	ref=PAVEL_ROM.9.12|SpaceAfter=No
10	-va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	aux	_	ref=PAVEL_ROM.9.12
11	celui	cel	DET	Tdmso	Case=Dat,Gen|Gender=Masc|Number=Sing|PronType=Dem	13	det	_	ref=PAVEL_ROM.9.12
12	mai	mai	ADV	Rg	_	13	advmod	_	ref=PAVEL_ROM.9.12
13	mic	mic	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	9	iobj	_	ref=PAVEL_ROM.9.12|SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	1	punct	_	ref=PAVEL_ROM.9.12

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 csubj:pass	color:blue
1	Că	că	SCONJ	Csssp	Polarity=Pos	14	mark	_	ref=PAVEL_2.CORINT_3.11
2	de	de	SCONJ	Csssp	Polarity=Pos	5	mark	_	ref=PAVEL_2.CORINT_3.11
3	au	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	5	aux	_	ref=PAVEL_2.CORINT_3.11
4	fost	fi	AUX	Vap	VerbForm=Part	5	aux:pass	_	ref=PAVEL_2.CORINT_3.11
5	slăvit	slăvi	VERB	Vmp--sm-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part	14	advcl	_	ref=PAVEL_2.CORINT_3.11
6	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	8	nsubj	_	ref=PAVEL_2.CORINT_3.11
7	e	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	cop	_	ref=PAVEL_2.CORINT_3.11
8	pieitoriu	pieritor	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	csubj:pass	_	ref=PAVEL_2.CORINT_3.11|SpaceAfter=No
9	,	,	PUNCT	COMMA	_	5	punct	_	ref=PAVEL_2.CORINT_3.11
10	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	11	mark	_	ref=PAVEL_2.CORINT_3.11
11	multu	mult	ADV	Rg	_	14	advmod	_	ref=PAVEL_2.CORINT_3.11|SpaceAfter=No
12	-i	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	14	aux:pass	_	ref=PAVEL_2.CORINT_3.11
13	mai	mai	ADV	Rg	_	14	advmod	_	ref=PAVEL_2.CORINT_3.11
14	slăvit	slăvi	VERB	Vmp--sm-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part	0	root	_	ref=PAVEL_2.CORINT_3.11
15	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	16	nsubj	_	ref=PAVEL_2.CORINT_3.11
16	rămîne	rămâne	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	csubj:pass	_	ref=PAVEL_2.CORINT_3.11
17	(	(	PUNCT	LPAR	_	19	punct	_	ref=PAVEL_2.CORINT_3.11|SpaceAfter=No
18	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	19	case	_	ref=PAVEL_2.CORINT_3.11
19	veaci	veac	NOUN	Ncmprn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Plur	16	nmod:tmod	_	ref=PAVEL_2.CORINT_3.11|SpaceAfter=No
20	)	)	PUNCT	RPAR	_	19	punct	_	ref=PAVEL_2.CORINT_3.11|SpaceAfter=No
21	.	.	PUNCT	PERIOD	_	14	punct	_	ref=PAVEL_2.CORINT_3.11

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 28 csubj:pass	color:blue
1	Aceștea	acesta	PRON	Pd3mpr	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Dem	3	nsubj	_	ref=IOAN_APOC_17.14
2	vor	vrea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	3	aux	_	ref=IOAN_APOC_17.14
3	face	face	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	ref=IOAN_APOC_17.14
4	războiu	război	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	3	obj	_	ref=IOAN_APOC_17.14
5	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	ref=IOAN_APOC_17.14
6	Mielul	miel	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	3	obl	_	ref=IOAN_APOC_17.14|SpaceAfter=No
7	,	,	PUNCT	COMMA	_	11	punct	_	ref=IOAN_APOC_17.14
8	și	și	CCONJ	Ccssp	Polarity=Pos	11	cc	_	ref=IOAN_APOC_17.14|SpaceAfter=No
9	-i	el	PRON	Pp3mpa--------w	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Weak	11	obj	_	ref=IOAN_APOC_17.14
10	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	11	aux	_	ref=IOAN_APOC_17.14
11	birui	birui	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	conj	_	ref=IOAN_APOC_17.14
12	Mielul	miel	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	11	nsubj	_	ref=IOAN_APOC_17.14
13	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	ref=IOAN_APOC_17.14
14	ei	el	PRON	Pp3mpr	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	11	nmod:pmod	_	ref=IOAN_APOC_17.14|SpaceAfter=No
15	,	,	PUNCT	COMMA	_	18	punct	_	ref=IOAN_APOC_17.14
16	că	că	SCONJ	Csssp	Polarity=Pos	18	mark	_	ref=IOAN_APOC_17.14|SpaceAfter=No
17	-i	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	18	cop	_	ref=IOAN_APOC_17.14
18	Domnu	domn	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	11	obl	_	ref=IOAN_APOC_17.14
19	domnilor	domn	NOUN	Ncmpoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur	18	nmod	_	ref=IOAN_APOC_17.14
20	și	și	CCONJ	Ccssp	Polarity=Pos	21	cc	_	ref=IOAN_APOC_17.14
21	Împăratul	împărat	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	18	conj	_	ref=IOAN_APOC_17.14
22	împăraților	împărat	NOUN	Ncmpoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur	21	nmod	_	ref=IOAN_APOC_17.14|SpaceAfter=No
23	,	,	PUNCT	COMMA	_	29	punct	_	ref=IOAN_APOC_17.14
24	și	și	CCONJ	Ccssp	Polarity=Pos	29	cc	_	ref=IOAN_APOC_17.14
25	carii	care	PRON	Pw3mpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur|Person=3|PronType=Int,Rel	28	nsubj	_	ref=IOAN_APOC_17.14|SpaceAfter=No
26	-s	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	28	cop	_	ref=IOAN_APOC_17.14
27	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	28	case	_	ref=IOAN_APOC_17.14
28	El	el	PRON	Pp3msa--------s	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	29	csubj:pass	_	ref=IOAN_APOC_17.14
29	chemați	chema	VERB	Vmii2p	Mood=Ind|Number=Plur|Person=2|Tense=Imp|VerbForm=Fin	18	conj	_	ref=IOAN_APOC_17.14|SpaceAfter=No
30	-s	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	29	aux:pass	_	ref=IOAN_APOC_17.14
31	și	și	CCONJ	Ccssp	Polarity=Pos	32	cc	_	ref=IOAN_APOC_17.14
32	aleși	alege	VERB	Vmp--pm-p	Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part	29	conj	_	ref=IOAN_APOC_17.14
33	și	și	CCONJ	Ccssp	Polarity=Pos	34	cc	_	ref=IOAN_APOC_17.14
34	credincioși	credincios	ADJ	Afpmprn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	29	conj	_	ref=IOAN_APOC_17.14|SpaceAfter=No
35	.	.	PUNCT	PERIOD	_	3	punct	_	ref=IOAN_APOC_17.14

~~~


