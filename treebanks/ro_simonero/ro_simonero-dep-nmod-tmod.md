---
layout: base
title:  'Statistics of nmod:tmod in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="ro_simonero-dep-nmod-agent.html">nmod:agent</a></tt>, <tt><a href="ro_simonero-dep-nmod-pmod.html">nmod:pmod</a></tt>.

9 nodes (0%) are attached to their parents as `nmod:tmod`.

7 instances of `nmod:tmod` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.66666666666667.

The following 2 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (8; 89% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 nmod:tmod	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	anul	an	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	10	nmod:tmod	_	O
3	2010	2010	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	2	nummod	_	O
4	,	,	PUNCT	COMMA	_	2	punct	_	O
5	Massie	Massie	PROPN	Np	_	10	nsubj	_	O
6	și	și	CCONJ	Crssp	Polarity=Pos	7	cc	_	O
7	colaboratorii	colaborator	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	5	conj	_	O
8	săi	său	DET	Ds3mp-s	Gender=Masc|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	7	det	_	O
9	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	10	aux	_	O
10	publicat	publica	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
11	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	12	det	_	O
12	studiu	studiu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	obj	_	O
13	ce	ce	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	15	nsubj	_	O
14	a	avea	AUX	Va--3s	Number=Sing|Person=3	15	aux	_	O
15	inclus	include	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	12	acl	_	O
16	aproximativ	aproximativ	ADV	Rgp	Degree=Pos	17	advmod	_	O
17	2	2	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	19	nummod	_	O
18	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	O
19	pacienți	pacient	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	15	obj	_	O
20	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	21	case	_	O
21	ICA	ICA	NOUN	Yn	Abbr=Yes	19	nmod	_	B-DISO
22	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	23	case	_	O
23	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	26	obl	_	O
24	s-	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	26	expl:pass	_	O
25	a	avea	AUX	Va--3s	Number=Sing|Person=3	26	aux	_	O
26	administrat	administra	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	19	acl	_	O
27	comparativ	comparativ	ADV	Rgp	Degree=Pos	26	advmod	_	O
28	rolofilina	rolofilină	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	26	nsubj:pass	_	B-CHEM
29	30	30	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	30	nummod	_	O
30	mg	mg	NOUN	Yn	Abbr=Yes	28	nmod	_	O
31	/	/	PUNCT	SLASH	AdpType=Prep	30	punct	_	O
32	zi	zi	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	30	nmod	_	O
33	sau	sau	CCONJ	Ccssp	Polarity=Pos	34	cc	_	O
34	placebo	placebo	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	30	conj	_	O
35	.	.	PUNCT	PERIOD	_	10	punct	_	O

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 nmod:tmod	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	mark	_	O
2	caz	caz	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	fixed	_	O
3	că	că	SCONJ	Csssp	Polarity=Pos	1	fixed	_	O
4	probele	probă	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	8	nsubj	_	O
5	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	O
6	laborator	laborator	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	O
7	nu	nu	PART	Qz	Polarity=Neg	8	advmod	_	O
8	pot	putea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	25	advcl	_	O
9	confirma	confirma	VERB	Vmnp	Tense=Pres|VerbForm=Inf	8	ccomp	_	O
10	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	11	det	_	O
11	valoare	valoare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	9	obj	_	O
12	glicemică	glicemic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	O
13	scăzută	scăzut	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	acl	_	O
14	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	O
15	momentul	moment	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	13	nmod:tmod	_	O
16	prezenței	prezență	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	15	nmod	_	O
17	simptomelor	simptom	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	16	nmod	_	O
18	specifice	specific	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	17	amod	_	O
19	(	(	PUNCT	LPAR	_	20	punct	_	O
20	obiectivate	obiectiva	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	17	appos	_	O
21	medical	medical	ADV	Rgp	Degree=Pos	20	amod	_	O
22	)	)	PUNCT	RPAR	_	20	punct	_	O
23	,	,	PUNCT	COMMA	_	8	punct	_	O
24	tulburările	tulburare	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	25	nsubj	_	B-DISO
25	pot	putea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
26	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	27	aux:pass	_	O
27	încadrate	încadra	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	25	ccomp	_	O
28	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	29	case	_	O
29	Sindromul	sindrom	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	27	obl	_	B-DISO
30	postprandial	postprandial	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	29	amod	_	I-DISO
31	idiopatic	idiopatic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	29	amod	_	I-DISO
32	.	.	PUNCT	PERIOD	_	25	punct	_	O

~~~


