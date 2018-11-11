---
layout: base
title:  'Statistics of csubj:pass in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-csubj.html">csubj</a></tt>.

38 nodes (0%) are attached to their parents as `csubj:pass`.

25 instances of `csubj:pass` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.39473684210526.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (35; 92% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (3; 8% instances).


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
1	Că	că	SCONJ	Csssp	Polarity=Pos	14	cc	_	ref=PAVEL_2.CORINT_3.11
2	de	de	SCONJ	Csssp	Polarity=Pos	5	mark	_	ref=PAVEL_2.CORINT_3.11
3	au	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	5	aux	_	ref=PAVEL_2.CORINT_3.11
4	fost	fi	AUX	Vap	VerbForm=Part	5	aux:pass	_	ref=PAVEL_2.CORINT_3.11
5	slăvit	slăvi	VERB	Vmp--sm-p	Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part	14	advcl	_	ref=PAVEL_2.CORINT_3.11
6	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	8	nsubj	_	ref=PAVEL_2.CORINT_3.11
7	e	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	ref=PAVEL_2.CORINT_3.11
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


