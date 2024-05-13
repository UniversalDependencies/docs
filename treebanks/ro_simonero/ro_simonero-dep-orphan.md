---
layout: base
title:  'Statistics of orphan in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `orphan`

This relation is universal.

4 nodes (0%) are attached to their parents as `orphan`.

4 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5.

The following 4 pairs of parts of speech are connected with `orphan`: <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 25% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 orphan	color:blue
1	Consecința	consecință	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	7	nsubj	_	_
2	morfologică	morfologic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	_
3	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	5	det	_	_
4	acestor	acest	DET	Dd3-po---e	Case=Gen|Number=Plur|Person=3|Position=Prenom|PronType=Dem	5	det	_	_
5	modificări	modificare	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	1	nmod	_	_
6	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	dilatarea	dilatare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	BioNERLabel=B-DISO
8	arterei	arteră	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	7	nmod	_	BioNERLabel=I-DISO
9	elastice	elastic	ADJ	Afpfson	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	BioNERLabel=I-DISO|SpaceAfter=No
10	,	,	PUNCT	COMMA	_	12	punct	_	_
11	iar	iar	ADV	Rc	_	12	cc	_	_
12	funcțional	funcțional	ADV	Rgp	Degree=Pos	7	conj	_	_
13	–	–	PUNCT	DASH	_	14	punct	_	_
14	pierderea	pierdere	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	12	orphan	_	BioNERLabel=B-DISO
15	distensibilității	distensibilitate	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	14	nmod	_	BioNERLabel=I-DISO|SpaceAfter=No
16	,	,	PUNCT	COMMA	_	17	punct	_	_
17	numită	numit	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	14	acl	_	_
18	RA	RA	NOUN	Yn	Abbr=Yes	17	xcomp	_	BioNERLabel=B-DISO|SpaceAfter=No
19	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 41 44 orphan	color:blue
1	Din	din	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	punct	punct	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	obl	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	vedere	vedere	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	2	nmod	_	_
5	morfologic	morfologic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	SpaceAfter=No
6	,	,	PUNCT	COMMA	_	2	punct	_	_
7	anevrismele	anevrism	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	9	nsubj	_	BioNERLabel=B-DISO
8	adevărate	adevărat	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	7	amod	_	_
9	pot	putea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	11	cop	_	_
11	fusiforme	fusiform	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	9	ccomp	_	BioNERLabel=I-DISO
12	(	(	PUNCT	LPAR	_	13	punct	_	SpaceAfter=No
13	dilatație	dilatație	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	11	appos	_	_
14	simetrică	simetric	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	SpaceAfter=No
15	,	,	PUNCT	COMMA	_	16	punct	_	_
16	aspect	aspect	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	13	conj	_	_
17	cilindric	cilindric	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	16	amod	_	_
18	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	19	det	_	_
19	vasului	vas	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	16	nmod	_	BioNERLabel=B-ANAT|SpaceAfter=No
20	)	)	PUNCT	RPAR	_	13	punct	_	_
21	sau	sau	CCONJ	Ccssp	Polarity=Pos	22	cc	_	_
22	sacciforme	sacciform	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	11	conj	_	BioNERLabel=I-DISO
23	(	(	PUNCT	LPAR	_	24	punct	_	SpaceAfter=No
24	afectează	afecta	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	9	parataxis	_	_
25	doar	doar	ADV	Rgp	Degree=Pos	27	advmod	_	_
26	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	27	det	_	_
27	porțiune	porțiune	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	24	obj	_	_
28	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	29	det	_	_
29	peretelui	perete	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	27	nmod	_	BioNERLabel=B-ANAT
30	aortic	aortic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	29	amod	_	BioNERLabel=I-ANAT
31	și	și	CCONJ	Crssp	Polarity=Pos	32	cc	_	_
32	comunică	comunica	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	24	conj	_	_
33	printr-	printru	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	35	case	_	SpaceAfter=No
34	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	35	det	_	_
35	colet	colet	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	32	obl	_	_
36	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	37	case	_	_
37	lumenul	lumen	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	35	nmod	_	BioNERLabel=B-ANAT|SpaceAfter=No
38	)	)	PUNCT	RPAR	_	24	punct	_	SpaceAfter=No
39	,	,	PUNCT	COMMA	_	41	punct	_	_
40	iar	iar	ADV	Rc	_	41	cc	_	_
41	pseudoanevrismele	pseudoanevrism	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	11	conj	_	BioNERLabel=B-DISO|SpaceAfter=No
42	,	,	PUNCT	COMMA	_	44	punct	_	_
43	doar	doar	ADV	Rgp	Degree=Pos	44	advmod	_	_
44	sacciforme	sacciform	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	41	orphan	_	BioNERLabel=I-DISO|SpaceAfter=No
45	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 20 orphan	color:blue
1	Astfel	astfel	ADV	Rgp	Degree=Pos	5	advmod	_	SpaceAfter=No
2	,	,	PUNCT	COMMA	_	1	punct	_	_
3	băuturile	băutură	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	5	nsubj	_	_
4	fermentate	fermentat	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	3	amod	_	_
5	conțin	conține	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	între	între	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
7	0.04	0.04	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	10	nummod	_	_
8	și	și	CCONJ	Crssp	Polarity=Pos	9	cc	_	_
9	0.12	0.12	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	7	conj	_	_
10	alcool	alcool	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
11	,	,	PUNCT	COMMA	_	13	punct	_	_
12	iar	iar	ADV	Rc	_	13	cc	_	_
13	băuturile	băutură	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	5	conj	_	_
14	distilate	distilat	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	13	amod	_	_
15	–	–	PUNCT	DASH	_	20	punct	_	_
16	mai	mai	ADV	Rp	_	17	advmod	_	_
17	mult	mult	ADV	Rgp	Degree=Pos	19	advmod	_	_
18	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	_
19	0.15	0.15	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	20	nummod	_	_
20	alcool	alcool	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	13	orphan	_	SpaceAfter=No
21	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


