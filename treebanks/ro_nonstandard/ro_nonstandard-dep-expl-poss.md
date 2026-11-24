---
layout: base
title:  'Statistics of expl:poss in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `expl:poss`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_nonstandard-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pv.html">expl:pv</a></tt>.

123 nodes (0%) are attached to their parents as `expl:poss`.

96 instances of `expl:poss` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30081300813008.

The following 4 pairs of parts of speech are connected with `expl:poss`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (117; 95% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 expl:poss	color:blue
1	Atuncea	atunci	ADV	Rg	_	3	advmod:tmod	_	Ref=MATT25.7
2	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Strength=Weak	3	expl:pv	_	Ref=MATT25.7
3	sculară	scula	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Ref=MATT25.7
4	vergurele	vergură	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	3	nsubj	_	Ref=MATT25.7
5	acealea	acela	DET	Dd3fpr---o	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|Position=Postnom|PronType=Dem	4	det	_	Ref=MATT25.7
6	și	și	CCONJ	Ccssp	Polarity=Pos	8	cc	_	Ref=MATT25.7|SpaceAfter=No
7	-și	sine	PRON	Px3--d--------w	Case=Dat|Person=3|PronType=Prs|Strength=Weak	8	expl:poss	_	Ref=MATT25.7
8	gătiră	găti	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	3	conj	_	Ref=MATT25.7
9	lămpașele	lămpaș	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	8	obj	_	Ref=MATT25.7
10	lor	el	PRON	Pp3-po	Case=Dat,Gen|Number=Plur|Person=3|PronType=Prs	9	nmod	_	Ref=MATT25.7|SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	3	punct	_	Ref=MATT25.7

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 expl:poss	color:blue
1	Iară	iar	CCONJ	Ccssp	Polarity=Pos	4	cc	_	Ref=PAVEL_1.CORINT_12.27
2	voi	tu	PRON	Pp2-pr	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	Ref=PAVEL_1.CORINT_12.27
3	sînteți	fi	AUX	Vaip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres	4	cop	_	Ref=PAVEL_1.CORINT_12.27
4	trupul	trup	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	Ref=PAVEL_1.CORINT_12.27
5	lui	-ul	DET	Tf-so	Case=Dat,Gen|Definite=Def|Number=Sing|PronType=Art	6	det	_	Ref=PAVEL_1.CORINT_12.27
6	Hristos	Hristos	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	Ref=PAVEL_1.CORINT_12.27|SpaceAfter=No
7	,	,	PUNCT	COMMA	_	9	punct	_	Ref=PAVEL_1.CORINT_12.27
8	și	și	CCONJ	Ccssp	Polarity=Pos	9	cc	_	Ref=PAVEL_1.CORINT_12.27
9	mădulare	mădular	NOUN	Ncfprn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Plur	4	conj	_	Ref=PAVEL_1.CORINT_12.27
10	den	din	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	11	case	_	Ref=PAVEL_1.CORINT_12.27
11	parte	parte	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	nmod	_	Ref=PAVEL_1.CORINT_12.27|SpaceAfter=No
12	-I	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	11	expl:poss	_	Ref=PAVEL_1.CORINT_12.27|SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	4	punct	_	Ref=PAVEL_1.CORINT_12.27

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 expl:poss	color:blue
1	Crăia	crăie	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	11	nsubj	_	Ref=PSALM.144.12
2	ta	tău	DET	Ds2fsrs	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=2|PronType=Prs	1	det	_	Ref=PSALM.144.12
3	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	11	cop	_	Ref=PSALM.144.12|SpaceAfter=No
4	,	,	PUNCT	COMMA	_	5	punct	_	Ref=PSALM.144.12
5	Doamne	domn	NOUN	Ncmsvn	Case=Voc|Definite=Ind|Gender=Masc|Number=Sing	11	vocative	_	Ref=PSALM.144.12
6	svinte	sfânt	ADJ	Afpmsvn	Case=Voc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	Ref=PSALM.144.12|SpaceAfter=No
7	,	,	PUNCT	COMMA	_	5	punct	_	Ref=PSALM.144.12
8	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	Ref=PSALM.144.12
9	toț	tot	DET	Di3mpr	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Ind	10	det	_	Ref=PSALM.144.12
10	vecii	veac	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	11	nmod:tmod	_	Ref=PSALM.144.12
11	crăie	crăie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	Ref=PSALM.144.12
12	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	13	mark	_	Ref=PSALM.144.12
13	mainte	înainte	ADV	Rg	_	11	advmod	_	Ref=PSALM.144.12|SpaceAfter=No
14	,	,	PUNCT	COMMA	_	19	punct	_	Ref=PSALM.144.12
15	Și	și	CCONJ	Ccssp	Polarity=Pos	19	cc	_	Ref=PSALM.144.12
16	domnia	domnie	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	19	nsubj	_	Ref=PSALM.144.12
17	ț-	tu	PRON	Pp2-sd--------w	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	19	expl:poss	_	Ref=PSALM.144.12|SpaceAfter=No
18	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	19	cop	_	Ref=PSALM.144.12
19	domnitoare	domnitor	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	conj	_	Ref=PSALM.144.12
20	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	22	case	_	Ref=PSALM.144.12
21	tot	tot	DET	Di3msr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Ind	22	det	_	Ref=PSALM.144.12
22	rod	rod	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	19	nmod:tmod	_	Ref=PSALM.144.12
23	de	de	SCONJ	Csssp	Polarity=Pos	22	nmod	_	Ref=PSALM.144.12
24	rod	rod	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	23	case	_	Ref=PSALM.144.12
25	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	27	mark	_	Ref=PSALM.144.12|SpaceAfter=No
26	-i	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	27	cop	_	Ref=PSALM.144.12
27	stătătoare	stătător	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	19	advcl	_	Ref=PSALM.144.12|SpaceAfter=No
28	.	.	PUNCT	PERIOD	_	11	punct	_	Ref=PSALM.144.12

~~~


