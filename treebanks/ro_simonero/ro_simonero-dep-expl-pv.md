---
layout: base
title:  'Statistics of expl:pv in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_simonero-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_simonero-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_simonero-dep-expl-poss.html">expl:poss</a></tt>.

551 nodes (0%) are attached to their parents as `expl:pv`.

534 instances of `expl:pv` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32486388384755.

The following 3 pairs of parts of speech are connected with `expl:pv`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (543; 99% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl:pv	color:blue
1	Procedeul	procedeu	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	O
2	Bentall	Bentall	PROPN	Np	_	1	nmod	_	O
3	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pv	_	O
4	practică	practica	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
5	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	O
6	caz	caz	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	obl	_	O
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	O
8	ectazie	ectazie	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nmod	_	B-DISO
9	anuloaortică	anuloaortic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	I-DISO
10	.	.	PUNCT	PERIOD	_	4	punct	_	O

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 31 expl:pv	color:blue
1	Nivelul	nivel	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	22	nsubj	_	O
2	mediu	mediu	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	amod	_	O
3	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	4	det	_	O
4	glucozei	glucoză	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	B-CHEM
5	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	O
6	sânge	sânge	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	B-ANAT
7	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	O
8	cazul	caz	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	nmod	_	O
9	copiilor	copil	NOUN	Ncmpoy	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	8	nmod	_	O
10	cărora	care	PRON	Pw3-po	Case=Gen|Number=Plur|Person=3|PronType=Int,Rel	14	iobj	_	O
11	li	el	PRON	Pp3-pd--------w	Case=Dat|Number=Plur|Person=3|PronType=Prs|Strength=Weak	14	expl	_	O
12	s-	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	14	expl:pass	_	O
13	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	14	aux	_	O
14	administrat	administra	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	9	acl	_	O
15	doze	doză	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	14	nsubj:pass	_	O
16	mici	mic	ADJ	Afp-p-n	Definite=Ind|Degree=Pos|Number=Plur	15	amod	_	O
17	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	18	case	_	O
18	glucagon	glucagon	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	15	nmod	_	B-CHEM
19	era	fi	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	22	cop	_	O
20	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	22	case	_	O
21	62	62	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	22	nummod	_	O
22	mg	mg	NOUN	Yn	Abbr=Yes	0	root	_	O
23	/	/	PUNCT	SLASH	AdpType=Prep	22	punct	_	O
24	dl	dl	NOUN	Yn	Abbr=Yes	22	nmod	_	O
25	înainte	înainte	ADV	Rgp	Degree=Pos	27	case	_	O
26	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	25	fixed	_	O
27	tratament	tratament	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	22	nmod	_	O
28	,	,	PUNCT	COMMA	_	22	punct	_	O
29	el	el	PRON	Pp3msr--------s	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	34	nsubj	_	O
30	ridicându-	ridica	VERB	Vmg-------y	Variant=Short|VerbForm=Ger	29	nmod	_	O
31	se	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	34	expl:pv	_	O
32	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	34	case	_	O
33	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	34	det	_	O
34	medie	medie	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	22	nmod	_	O
35	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	37	case	_	O
36	146	146	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	37	nummod	_	O
37	mg	mg	NOUN	Yn	Abbr=Yes	34	nmod	_	O
38	/	/	PUNCT	SLASH	AdpType=Prep	37	punct	_	O
39	dl	dl	NOUN	Yn	Abbr=Yes	37	nmod	_	O
40	după	după	ADP	Spsa	AdpType=Prep|Case=Acc	41	case	_	O
41	tratament	tratament	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	34	nmod	_	O
42	.	.	PUNCT	PERIOD	_	22	punct	_	O

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 22 expl:pv	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	studiul	studiu	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	10	obl	_	O
3	PLATO	PLATO	NOUN	Yn	Abbr=Yes	2	nmod	_	O
4	,	,	PUNCT	COMMA	_	2	punct	_	O
5	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	6	det	_	O
6	parte	parte	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	10	nsubj	_	O
7	dintre	dintre	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	O
8	pacienți	pacient	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	6	nmod	_	O
9	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	10	aux	_	O
10	primit	primi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
11	și	și	CCONJ	Crssp	Polarity=Pos	12	advmod	_	O
12	GPIs	GPIs	NOUN	Yn	Abbr=Yes	10	obj	_	B-CHEM
13	,	,	PUNCT	COMMA	_	10	punct	_	O
14	beneficiul	beneficiu	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	25	nsubj	_	O
15	ticagrelorului	ticagrelor	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	14	nmod	_	B-CHEM
16	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	O
17	prevenirea	prevenire	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	14	nmod	_	O
18	trombozei	tromboză	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	17	nmod	_	B-DISO
19	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	I-DISO
20	stent	stent	NOUN	Ncmsrn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	18	nmod	_	I-DISO
21	demonstrându-	demonstra	VERB	Vmg-------y	Variant=Short|VerbForm=Ger	18	amod	_	O
22	se	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	25	expl:pv	_	O
23	a	a	PART	Qn	PartType=Inf	25	mark	_	O
24	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	25	cop	_	O
25	independent	independent	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	10	advcl	_	O
26	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	27	case	_	O
27	utilizarea	utilizare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	25	obl	_	O
28	GPIs	GPIs	NOUN	Yn	Abbr=Yes	27	nmod	_	B-CHEM
29	(	(	PUNCT	LPAR	_	30	punct	_	O
30	32	32	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	27	nummod	_	O
31	)	)	PUNCT	RPAR	_	30	punct	_	O
32	.	.	PUNCT	PERIOD	_	10	punct	_	O

~~~


