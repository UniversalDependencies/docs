---
layout: base
title:  'Statistics of ccomp:pmod in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `ccomp:pmod`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-ccomp.html">ccomp</a></tt>.

16 nodes (0%) are attached to their parents as `ccomp:pmod`.

16 instances of `ccomp:pmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.0625.

The following 5 pairs of parts of speech are connected with `ccomp:pmod`: <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (8; 50% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (4; 25% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 ccomp:pmod	color:blue
1	Betacelulina	betacelulină	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubj	_	BioNERLabel=B-CHEM
2	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	4	det	_	_
4	peptid	peptid	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	BioNERLabel=B-CHEM
5	aparținând	aparține	VERB	Vmg	VerbForm=Ger	4	acl	_	_
6	familiei	familie	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	iobj	_	_
7	factorilor	factor	NOUN	Ncmpoy	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	6	nmod	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	creștere	creștere	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	_
10	epidermici	epidermic	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	7	amod	_	SpaceAfter=No
11	,	,	PUNCT	COMMA	_	12	punct	_	_
12	capabil	capabil	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	_
13	să	să	PART	Qs	Mood=Sub	14	mark	_	_
14	inducă	induce	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	12	ccomp:pmod	_	SpaceAfter=No
15	,	,	PUNCT	COMMA	_	17	punct	_	_
16	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	_
17	animalele	animal	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	14	obl	_	_
18	aloxanizate	aloxanizat	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	17	amod	_	SpaceAfter=No
19	,	,	PUNCT	COMMA	_	17	punct	_	_
20	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	21	det	_	_
21	regenerare	regenerare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	14	obj	_	_
22	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	23	det	_	_
23	celulelor	celulă	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	21	nmod	_	BioNERLabel=B-ANAT
24	&b.beta;	&b.beta;	X	X	_	23	amod	_	BioNERLabel=I-ANAT
25	prin	prin	ADP	Spsa	AdpType=Prep|Case=Acc	26	case	_	_
26	neogeneză	neogeneză	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	21	nmod	_	SpaceAfter=No
27	,	,	PUNCT	COMMA	_	29	punct	_	_
28	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	29	case	_	_
29	liniile	linie	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	21	nmod	_	_
30	celulare	celular	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	29	amod	_	_
31	ductale	ductal	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	29	amod	_	_
32	pancreatice	pancreatic	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	29	amod	_	SpaceAfter=No
33	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 31 ccomp:pmod	color:blue
1	Dr.	Dr.	NOUN	Yn	Abbr=Yes	17	nsubj	_	_
2	Zangeneh	Zangeneh	PROPN	Np	_	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	5	punct	_	_
4	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	5	nsubj	_	_
5	face	face	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl	_	_
6	parte	parte	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	5	obj	_	_
7	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	Consiliul	consiliu	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nmod	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	Administrație	administrație	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	8	nmod	_	_
11	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	12	det	_	_
12	prgramului	prgram	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	8	nmod	_	_
13	Blood	Blood	X	X	_	12	nmod	_	_
14	Sugar	sugar	X	X	_	13	flat	_	_
15	Basics	Basics	X	X	_	13	flat	_	SpaceAfter=No
16	,	,	PUNCT	COMMA	_	5	punct	_	_
17	menționează	menționa	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
18	că	că	SCONJ	Csssp	Polarity=Neg	23	mark	_	_
19	programul	program	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	23	nsubj	_	_
20	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	cop	_	_
21	ușor	ușor	ADV	Rgp	Degree=Pos	17	ccomp	_	_
22	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	23	mark	_	_
23	folosit	folosi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	21	advcl	_	SpaceAfter=No
24	,	,	PUNCT	COMMA	_	25	punct	_	_
25	ajutându-	ajuta	VERB	Vmg-------y	Variant=Short|VerbForm=Ger	23	advcl	_	SpaceAfter=No
26	i	el	PRON	Pp3mpa--y-----w	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Weak|Variant=Short	25	expl	_	_
27	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	28	case	_	_
28	pacienți	pacient	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	25	obj	_	_
29	să	să	PART	Qs	Mood=Sub	31	mark	_	_
30	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	31	expl:pv	_	_
31	informeze	informa	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	25	ccomp:pmod	_	SpaceAfter=No
32	.	.	PUNCT	PERIOD	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 ccomp:pmod	color:blue
1	Pacienții	pacient	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	5	nsubj:pass	_	_
2	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	diabet	diabet	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	_	BioNERLabel=B-DISO
4	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	învățați	învăța	VERB	Vmp--pm	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
6	că	că	SCONJ	Csssp	Polarity=Neg	11	mark	_	_
7	valorile	valoare	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	11	nsubj	_	_
8	glicemice	glicemic	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	7	amod	_	_
9	mari	mare	ADJ	Afp-p-n	Definite=Ind|Degree=Pos|Number=Plur	7	amod	_	_
10	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	semnul	semn	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	5	ccomp:pmod	_	_
12	că	că	SCONJ	Csssp	Polarity=Neg	15	mark	_	_
13	boala	boală	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	15	nsubj	_	BioNERLabel=B-DISO
14	nu	nu	PART	Qz	Polarity=Neg	15	advmod	_	_
15	evoluează	evolua	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	11	acl	_	_
16	satisfăcător	satisfăcător	ADV	Rgp	Degree=Pos	15	advmod	_	SpaceAfter=No
17	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


