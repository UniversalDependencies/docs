---
layout: base
title:  'Statistics of csubj:pass in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-csubj.html">csubj</a></tt>.

61 nodes (0%) are attached to their parents as `csubj:pass`.

38 instances of `csubj:pass` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.37704918032787.

The following 4 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (56; 92% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (1; 2% instances).


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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 csubj:pass	color:blue
1	Căci	căci	SCONJ	Cscsp	Compound=Yes|Polarity=Pos	8	mark	_	ref=PART_IV_CAP_3c.41.3b
2	atunci	atunci	ADV	Rg	_	8	advmod:tmod	_	ref=PART_IV_CAP_3c.41.3b
3	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	6	nsubj	_	ref=PART_IV_CAP_3c.41.3b
4	e	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	cop	_	ref=PART_IV_CAP_3c.41.3b
5	mai	mai	ADV	Rg	_	6	advmod	_	ref=PART_IV_CAP_3c.41.3b
6	mult	mult	ADV	Rg	_	8	csubj:pass	_	ref=PART_IV_CAP_3c.41.3b
7	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Strength=Weak	8	expl:pass	_	ref=PART_IV_CAP_3c.41.3b
8	scoate	scoate	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	ref=PART_IV_CAP_3c.41.3b
9	din	din	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	10	case	_	ref=PART_IV_CAP_3c.41.3b
10	legaturi	legat	NOUN	Ncfprn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Plur	8	obl	_	ref=PART_IV_CAP_3c.41.3b|SpaceAfter=No
11	,	,	PUNCT	COMMA	_	14	punct	_	ref=PART_IV_CAP_3c.41.3b
12	și	și	CCONJ	Ccssp	Polarity=Pos	14	cc	_	ref=PART_IV_CAP_3c.41.3b
13	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Strength=Weak	14	expl:pv	_	ref=PART_IV_CAP_3c.41.3b
14	dă	da	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	conj	_	ref=PART_IV_CAP_3c.41.3b
15	moștenitorilor	moștenitor	NOUN	Ncmpoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur	14	iobj	_	ref=PART_IV_CAP_3c.41.3b|SpaceAfter=No
16	,	,	PUNCT	COMMA	_	23	punct	_	ref=PART_IV_CAP_3c.41.3b
17	iară	iar	CCONJ	Ccssp	Polarity=Pos	23	cc	_	ref=PART_IV_CAP_3c.41.3b
18	cealelalte	celălalt	DET	Dd3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Dem	19	det	_	ref=PART_IV_CAP_3c.41.3b
19	orîndueli	orîndueli	NOUN	Ncfprn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Plur	23	nsubj	_	ref=PART_IV_CAP_3c.41.3b
20	din	din	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	21	case	_	ref=PART_IV_CAP_3c.41.3b
21	diiată	diată	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	19	nmod	_	ref=PART_IV_CAP_3c.41.3b
22	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Strength=Weak	23	expl:pv	_	ref=PART_IV_CAP_3c.41.3b
23	împlinesc	împlini	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	14	conj	_	ref=PART_IV_CAP_3c.41.3b|SpaceAfter=No
24	.	.	PUNCT	PERIOD	_	8	punct	_	ref=PART_IV_CAP_3c.41.3b

~~~


