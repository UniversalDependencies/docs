---
layout: base
title:  'Statistics of aux in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ro_simonero-dep-aux-pass.html">aux:pass</a></tt>.

121 nodes (1%) are attached to their parents as `aux`.

117 instances of `aux` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25619834710744.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (111; 92% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (4; 3% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (3; 2% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (2; 2% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Clasic	clasic	ADV	Rgp	Degree=Pos	6	advmod	_	O
2	,	,	PUNCT	COMMA	_	1	punct	_	O
3	creierul	creier	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	B-ANAT
4	a	avea	AUX	Va--3s	Number=Sing|Person=3	6	aux	_	O
5	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	6	aux	_	O
6	inclus	include	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
7	printre	printre	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	O
8	țesuturile	țesut	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	6	obl	_	B-ANAT
9	insulinoindependente	insulinoindependent	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	8	amod	_	I-ANAT
10	.	.	PUNCT	PERIOD	_	6	punct	_	O

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 aux	color:blue
1	Insuficiența	insuficiență	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	21	nsubj	_	B-DISO
2	aortică	aortic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	I-DISO
3	acută	acut	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	I-DISO
4	secundară	secundar	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	O
5	unor	un	DET	Ti-po	Case=Gen|Number=Plur|PronType=Ind	6	det	_	O
6	procese	proces	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	1	nmod	_	O
7	patologice	patologic	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	6	amod	_	O
8	agresive	agresiv	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	6	amod	_	O
9	cum	cum	ADV	Rw	PronType=Int,Rel	6	acl	_	O
10	ar	avea	AUX	Va--3	Person=3|VerbForm=Fin	9	aux	_	O
11	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	9	cop	_	O
12	disecția	disecție	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	9	nsubj	_	B-DISO
13	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	I-DISO
14	aortă	aortă	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	12	nmod	_	I-DISO
15	și	și	CCONJ	Crssp	Polarity=Pos	16	cc	_	O
16	endocardita	endocardită	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	12	conj	_	B-DISO
17	,	,	PUNCT	COMMA	_	19	punct	_	O
18	sau	sau	CCONJ	Ccssp	Polarity=Pos	19	cc	_	O
19	posttraumatică	posttraumatic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	16	conj	_	O
20	,	,	PUNCT	COMMA	_	9	punct	_	O
21	determină	determina	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
22	decompensarea	decompensare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	21	obj	_	B-DISO
23	rapidă	rapid	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	22	amod	_	O
24	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	25	det	_	O
25	VS	VS	NOUN	Yn	Abbr=Yes	22	nmod	_	B-ANAT
26	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	27	case	_	O
27	edem	edem	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	22	nmod	_	B-DISO
28	pulmonar	pulmonar	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	27	amod	_	I-DISO
29	acut	acut	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	27	amod	_	I-DISO
30	și	și	CCONJ	Crssp	Polarity=Pos	31	cc	_	O
31	șoc	șoc	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	27	conj	_	B-DISO
32	cardiogen	cardiogen	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	31	amod	_	I-DISO
33	,	,	PUNCT	COMMA	_	36	punct	_	O
34	ceea	acela	PRON	Pd3fsr	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	36	nsubj	_	O
35	ce	ce	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	34	fixed	_	O
36	impune	impune	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	advcl	_	O
37	intervenția	intervenție	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	36	obj	_	O
38	chirurgicală	chirurgical	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	37	amod	_	O
39	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	40	case	_	O
40	urgență	urgență	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	37	nmod	_	O
41	.	.	PUNCT	PERIOD	_	21	punct	_	O

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	Explicația	explicație	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	6	nsubj	_	O
2	acestei	acest	DET	Dd3fso---e	Case=Gen|Gender=Fem|Number=Sing|Person=3|Position=Prenom|PronType=Dem	3	det	_	O
3	constatări	constatare	NOUN	Ncfson	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	O
4	ar	avea	AUX	Va--3	Person=3|VerbForm=Fin	6	aux	_	O
5	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	6	cop	_	O
6	capacitatea	capacitate	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	O
7	hepatocitelor	hepatocit	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	6	nmod	_	B-CHEM
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	mark	_	O
9	a	a	PART	Qn	PartType=Inf	10	mark	_	O
10	utiliza	utiliza	VERB	Vmnp	Tense=Pres|VerbForm=Inf	6	acl	_	O
11	alternativ	alternativ	ADV	Rgp	Degree=Pos	12	advmod	_	O
12	substrate	substrat	NOUN	Ncfprn	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	10	ccomp	_	O
13	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	O
14	glicoliză	glicoliză	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	12	obl	_	O
15	și	și	CCONJ	Crssp	Polarity=Pos	16	cc	_	O
16	gluconeogeneză	gluconeogeneză	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	14	conj	_	O
17	(	(	PUNCT	LPAR	_	18	punct	_	O
18	figura	figură	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	6	parataxis	_	O
19	5	5	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	18	nummod	_	O
20	)	)	PUNCT	RPAR	_	18	punct	_	O
21	.	.	PUNCT	PERIOD	_	6	punct	_	O

~~~


