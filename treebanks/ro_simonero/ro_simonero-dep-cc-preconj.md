---
layout: base
title:  'Statistics of cc:preconj in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-cc.html">cc</a></tt>.

41 nodes (0%) are attached to their parents as `cc:preconj`.

40 instances of `cc:preconj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80487804878049.

The following 5 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (20; 49% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-CCONJ.html">CCONJ</a></tt> (18; 44% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 cc:preconj	color:blue
1	Mai	mai	ADV	Rp	_	2	advmod	_	_
2	multe	mult	DET	Di3fp	Gender=Fem|Number=Plur|Person=3|PronType=Ind	3	det	_	_
3	virusuri	virus	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	6	nsubj:pass	_	_
4	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	6	aux	_	_
5	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	6	aux:pass	_	_
6	descrise	descrie	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	_
7	ca	ca	ADV	Rc	_	9	mark	_	_
8	fiind	fi	AUX	Vag	VerbForm=Ger	9	aux	_	_
9	asociate	asocia	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	6	advcl	_	_
10	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	T1DM	T1DM	X	X	_	9	obl	_	BioNERLabel=B-DISO|SpaceAfter=No
12	,	,	PUNCT	COMMA	_	15	punct	_	_
13	atât	atât	ADV	Rgp	Degree=Pos	15	cc:preconj	_	_
14	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
15	om	om	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	obl	_	_
16	cât	cât	ADV	Rw	PronType=Int,Rel	20	cc	_	_
17	și	și	CCONJ	Crssp	Polarity=Pos	16	fixed	_	_
18	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	_
19	diferite	diferit	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	20	amod	_	_
20	specii	specie	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	15	conj	_	_
21	animale	animal	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	20	amod	_	SpaceAfter=No
22	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	Aceștia	acesta	PRON	Pd3mpr	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Dem	4	nsubj	_	_
2	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	fie	fie	CCONJ	Ccssp	Polarity=Pos	4	cc:preconj	_	_
4	activatori	activator	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	0	root	_	_
5	(	(	PUNCT	LPAR	_	6	punct	_	SpaceAfter=No
6	liberine	liberină	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	4	appos	_	BioNERLabel=B-CHEM|SpaceAfter=No
7	)	)	PUNCT	RPAR	_	6	punct	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	10	punct	_	_
9	fie	fie	CCONJ	Ccssp	Polarity=Pos	10	cc	_	_
10	inhibitori	inhibitor	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	4	conj	_	BioNERLabel=B-CHEM
11	(	(	PUNCT	LPAR	_	12	punct	_	SpaceAfter=No
12	inhibine	inhibină	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	10	appos	_	BioNERLabel=B-CHEM|SpaceAfter=No
13	)	)	PUNCT	RPAR	_	12	punct	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 28 cc:preconj	color:blue
1	Studiul	studiu	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
2	a	avea	AUX	Va--3s	Number=Sing|Person=3	3	aux	_	_
3	demonstrat	demonstra	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	că	că	SCONJ	Csssp	Polarity=Neg	17	mark	_	_
5	tratamentul	tratament	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	17	nsubj:pass	_	_
6	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	metformin	metformin	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	BioNERLabel=B-CHEM|SpaceAfter=No
8	,	,	PUNCT	COMMA	_	9	punct	_	_
9	comparativ	comparativ	ADV	Rgp	Degree=Pos	5	acl	_	_
10	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	insulinoterapia	insulinoterapie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	9	obl:pmod	_	BioNERLabel=B-PROC
12	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	femeile	femeie	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	11	nmod	_	_
14	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
15	DZG	DZG	NOUN	Yn	Abbr=Yes	13	nmod	_	BioNERLabel=B-DISO
16	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux:pass	_	_
17	asociat	asocia	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	ccomp	_	_
18	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	19	case	_	_
19	consecințe	consecință	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	17	obl	_	_
20	perinatale	perinatal	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	19	amod	_	_
21	similare	similar	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	19	amod	_	SpaceAfter=No
22	,	,	PUNCT	COMMA	_	23	punct	_	_
23	îmbunătățind	îmbunătăți	VERB	Vmg	VerbForm=Ger	17	advcl	_	_
24	markerii	marker	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	23	obj	_	BioNERLabel=B-CHEM
25	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	26	case	_	_
26	insulinosensibilitate	insulinosensibilitate	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	24	nmod	_	SpaceAfter=No
27	,	,	PUNCT	COMMA	_	31	punct	_	_
28	atât	atât	ADV	Rgp	Degree=Pos	31	cc:preconj	_	_
29	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	31	case	_	_
30	cei	acela	PRON	Pd3mpr	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Dem	31	det	_	_
31	materni	matern	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	23	obl	_	SpaceAfter=No
32	,	,	PUNCT	COMMA	_	36	punct	_	_
33	cât	cât	ADV	Rw	PronType=Int,Rel	36	cc	_	_
34	și	și	CCONJ	Crssp	Polarity=Pos	33	fixed	_	_
35	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	36	case	_	_
36	cei	acela	PRON	Pd3mpr	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Dem	31	conj	_	_
37	fetali	fetal	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	36	amod	_	SpaceAfter=No
38	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


