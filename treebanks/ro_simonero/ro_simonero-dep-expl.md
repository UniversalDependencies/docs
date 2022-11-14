---
layout: base
title:  'Statistics of expl in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `expl`

This relation is universal.
There are 4 language-specific subtypes of `expl`: <tt><a href="ro_simonero-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_simonero-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_simonero-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro_simonero-dep-expl-pv.html">expl:pv</a></tt>.

97 nodes (0%) are attached to their parents as `expl`.

87 instances of `expl` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11340206185567.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (88; 91% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (5; 5% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 expl	color:blue
1	Celui	cel	DET	Tdmso	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
2	de-	de	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	4	case	_	SpaceAfter=No
3	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	4	det	_	_
4	treilea	treilea	NUM	Moms-l	Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	5	nummod	_	_
5	grup	grup	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	iobj	_	_
6	i	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	9	expl	_	_
7	s-	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	9	expl:pass	_	SpaceAfter=No
8	a	avea	AUX	Va--3s	Number=Sing|Person=3	9	aux	_	_
9	dat	da	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
10	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	11	det	_	_
11	amestec	amestec	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	nsubj:pass	_	_
12	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	brioșe	brioșă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	11	nmod	_	_
14	și	și	CCONJ	Crssp	Polarity=Pos	15	cc	_	_
15	nuci	nucă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	13	conj	_	SpaceAfter=No
16	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 expl	color:blue
1	Nu	nu	PART	Qz	Polarity=Neg	2	advmod	_	_
2	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	advmod	_	_
3	ultimul	ultimul	NUM	Momsrly	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	2	fixed	_	_
4	rând	rând	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	fixed	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	2	punct	_	_
6	le	el	PRON	Pp3-pd--------w	Case=Dat|Number=Plur|Person=3|PronType=Prs|Strength=Weak	8	expl	_	_
7	sunt	fi	AUX	Vaip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	recunoscator	recunoscator	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
9	d-nei	d-nei	NOUN	Ynfsoy	Abbr=Yes|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	iobj	_	_
10	dr.	dr.	NOUN	Yn	Abbr=Yes	9	nmod	_	_
11	Monica	Monica	PROPN	Np	_	9	nmod	_	_
12	Negrean	Negrean	PROPN	Np	_	11	flat	_	_
13	și	și	CCONJ	Crssp	Polarity=Pos	14	cc	_	_
14	d-nei	d-nei	NOUN	Ynfsoy	Abbr=Yes|Case=Gen|Definite=Def|Gender=Fem|Number=Sing	9	conj	_	_
15	Cristina	Cristina	PROPN	Np	_	14	nmod	_	_
16	Zegreanu	Zegreanu	PROPN	Np	_	15	flat	_	_
17	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	19	case	_	_
18	indispensabilul	indispensabil	ADJ	Afpmsry	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	_
19	ajutor	ajutor	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	14	nmod	_	_
20	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	21	case	_	_
21	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	25	obj	_	_
22	mi	eu	PRON	Pp1-sd--------w	Case=Dat|Number=Sing|Person=1|PronType=Prs|Strength=Weak	25	iobj	_	_
23	l-	el	PRON	Pp3msa--y-----w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	25	expl	_	SpaceAfter=No
24	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	25	aux	_	_
25	dat	da	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	19	acl	_	_
26	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	27	case	_	_
27	redactare	redactare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	25	obl	_	SpaceAfter=No
28	.	.	PUNCT	PERIOD	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 expl	color:blue
1	Alterarea	alterare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	7	nsubj	_	_
2	metabolismului	metabolism	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	nmod	_	_
3	eicosanoizilor	eicosanoid	NOUN	Ncmpoy	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	2	nmod	_	BioNERLabel=B-CHEM
4	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
5	și	și	CCONJ	Crssp	Polarity=Pos	6	advmod	_	_
6	ea	el	PRON	Pp3fsr--------s	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Strong	1	expl	_	_
7	implicată	implica	VERB	Vmp--sf	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
8	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	patogenia	patogenie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	7	obl	_	_
10	complicațiilor	complicație	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	9	nmod	_	BioNERLabel=B-DISO
11	cronice	cronic	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	10	amod	_	BioNERLabel=I-DISO
12	ale	al	DET	Tsfp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	13	det	_	_
13	DZ	DZ	NOUN	Yn	Abbr=Yes	10	nmod	_	BioNERLabel=B-DISO|SpaceAfter=No
14	,	,	PUNCT	COMMA	_	17	punct	_	_
15	inclusiv	inclusiv	ADV	Rgp	Degree=Pos	17	advmod	_	_
16	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	_
17	neuropatia	neuropatie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	7	obl	_	BioNERLabel=B-DISO
18	diabetică	diabetic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	17	amod	_	BioNERLabel=I-DISO
19	(	(	PUNCT	LPAR	_	20	punct	_	SpaceAfter=No
20	14	14	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	7	parataxis	_	SpaceAfter=No
21	,	,	PUNCT	COMMA	_	22	punct	_	SpaceAfter=No
22	22	22	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	20	conj	_	SpaceAfter=No
23	)	)	PUNCT	RPAR	_	20	punct	_	SpaceAfter=No
24	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


