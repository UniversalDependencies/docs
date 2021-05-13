---
layout: base
title:  'Statistics of nmod:tmod in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-nmod.html">nmod</a></tt>.

104 nodes (0%) are attached to their parents as `nmod:tmod`.

62 instances of `nmod:tmod` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.66346153846154.

The following 4 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (100; 96% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 nmod:tmod	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	5	advmod	_	_
2	consecință	consecință	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	1	punct	_	_
4	concepția	concepție	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	6	nsubj	_	_
5	trebuie	trebui	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	amânată	amâna	VERB	Vmp--sf	Gender=Fem|Number=Sing|VerbForm=Part	5	csubj	_	_
7	minimum	minimum	ADV	Rgp	Degree=Pos	9	advmod	_	_
8	6	6	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	9	nummod	_	_
9	luni	lună	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	6	nmod:tmod	_	_
10	(	(	PUNCT	LPAR	_	11	punct	_	SpaceAfter=No
11	14	14	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	9	parataxis	_	SpaceAfter=No
12	)	)	PUNCT	RPAR	_	11	punct	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 31 nmod:tmod	color:blue
1	Unele	un	DET	Di3fpr---e	Case=Nom|Gender=Fem|Number=Plur|Person=3|Position=Prenom|PronType=Ind	2	det	_	_
2	rapoarte	raport	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	4	nsubj	_	_
3	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	4	aux	_	_
4	documentat	documenta	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	fezabilitatea	fezabilitate	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	obj	_	_
6	bypass	bypass	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	BioNERLabel=B-PROC
7	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
8	arterale	arterală	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	9	amod	_	BioNERLabel=B-ANAT
9	plantare	plantar	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	4	obl	_	BioNERLabel=I-ANAT
10	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
11	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	12	det	_	_
12	rată	rată	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	4	obl	_	_
13	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	succes	succes	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	12	nmod	_	_
15	rezonabilă	rezonabil	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	_
16	(	(	PUNCT	LPAR	_	17	punct	_	SpaceAfter=No
17	rata	rată	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	12	appos	_	_
18	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	19	case	_	_
19	salvare	salvare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	17	nmod	_	_
20	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	21	det	_	_
21	piciorului	picior	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	19	nmod	_	BioNERLabel=B-ANAT
22	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	24	case	_	_
23	5	5	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	24	nummod	_	_
24	ani	an	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	17	nmod:tmod	_	_
25	0.63	0.63	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	17	nummod	_	SpaceAfter=No
26	,	,	PUNCT	COMMA	_	27	punct	_	_
27	permeabilitate	permeabilitate	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	17	conj	_	_
28	primară	primar	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	27	amod	_	_
29	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	31	case	_	_
30	5	5	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	31	nummod	_	_
31	ani	an	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	27	nmod:tmod	_	_
32	0.41	0.41	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	27	nummod	_	SpaceAfter=No
33	)	)	PUNCT	RPAR	_	17	punct	_	_
34	(	(	PUNCT	LPAR	_	35	punct	_	SpaceAfter=No
35	68	68	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	4	parataxis	_	SpaceAfter=No
36	)	)	PUNCT	RPAR	_	35	punct	_	SpaceAfter=No
37	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 nmod:tmod	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	mark	_	_
2	caz	caz	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	fixed	_	_
3	că	că	SCONJ	Csssp	Polarity=Pos	1	fixed	_	_
4	probele	probă	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	8	nsubj	_	_
5	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	laborator	laborator	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	_
7	nu	nu	PART	Qz	Polarity=Neg	8	advmod	_	_
8	pot	putea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	25	advcl	_	_
9	confirma	confirma	VERB	Vmnp	Tense=Pres|VerbForm=Inf	8	ccomp	_	_
10	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	11	det	_	_
11	valoare	valoare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	9	obj	_	_
12	glicemică	glicemic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	_
13	scăzută	scăzut	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	acl	_	_
14	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
15	momentul	moment	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	13	nmod:tmod	_	_
16	prezenței	prezență	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	15	nmod	_	_
17	simptomelor	simptom	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	16	nmod	_	_
18	specifice	specific	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	17	amod	_	_
19	(	(	PUNCT	LPAR	_	20	punct	_	SpaceAfter=No
20	obiectivate	obiectiva	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	17	appos	_	_
21	medical	medical	ADV	Rgp	Degree=Pos	20	amod	_	SpaceAfter=No
22	)	)	PUNCT	RPAR	_	20	punct	_	SpaceAfter=No
23	,	,	PUNCT	COMMA	_	8	punct	_	_
24	tulburările	tulburare	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	25	nsubj	_	BioNERLabel=B-DISO
25	pot	putea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
26	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	27	aux:pass	_	_
27	încadrate	încadra	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	25	ccomp	_	_
28	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	29	case	_	_
29	Sindromul	sindrom	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	27	obl	_	BioNERLabel=B-DISO
30	postprandial	postprandial	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	29	amod	_	BioNERLabel=I-DISO
31	idiopatic	idiopatic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	29	amod	_	BioNERLabel=I-DISO|SpaceAfter=No
32	.	.	PUNCT	PERIOD	_	25	punct	_	_

~~~


