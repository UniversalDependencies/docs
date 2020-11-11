---
layout: base
title:  'Statistics of goeswith in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `goeswith`

This relation is universal.

28 nodes (0%) are attached to their parents as `goeswith`.

28 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 7 pairs of parts of speech are connected with `goeswith`: <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (21; 75% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 goeswith	color:blue
1	Timpul	timp	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	22	nsubj	_	O
2	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	O
3	recuperare	recuperare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	O
4	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	5	det	_	O
5	indicilor	indice	NOUN	Ncmpoy	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	3	nmod	_	O
6	ECG	ECG	NOUN	Yn	Abbr=Yes	5	nmod	_	B-PROC
7	până	până	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	O
8	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	7	fixed	_	O
9	cei	acela	PRON	Pd3mpr	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Dem	10	det	_	O
10	inițiali	inițial	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	1	nmod	_	O
11	după	după	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	O
12	încetarea	încetare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	10	nmod	_	O
13	efortului	efort	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	12	nmod	_	O
14	a	avea	AUX	Va--3s	Number=Sing|Person=3	22	aux	_	O
15	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	22	cop	_	O
16	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	22	case	_	O
17	4.1	4.1	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	22	nummod	_	O
18	0.4	0.4	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	17	goeswith	_	O
19	și	și	CCONJ	Crssp	Polarity=Pos	20	cc	_	O
20	4.2	4.2	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	22	nummod	_	O
21	0.5	0.5	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	20	goeswith	_	O
22	min	min	NOUN	Yn	Abbr=Yes	0	root	_	O
23	,	,	PUNCT	COMMA	_	24	punct	_	O
24	respectiv	respectiv	ADV	Rgp	Degree=Pos	22	advmod	_	O
25	(	(	PUNCT	LPAR	_	26	punct	_	O
26	p	p	NOUN	Yn	Abbr=Yes	22	appos	_	O
27	>	>	PUNCT	GT	_	26	punct	_	O
28	0.1	0.1	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	26	nummod	_	O
29	)	)	PUNCT	RPAR	_	26	punct	_	O
30	.	.	PUNCT	PERIOD	_	22	punct	_	O

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 28 goeswith	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	mod	mod	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	17	obl	_	O
3	incontestabil	incontestabil	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	O
4	,	,	PUNCT	COMMA	_	2	punct	_	O
5	ligatura	ligatură	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	17	nsubj	_	B-PROC
6	și	și	CCONJ	Crssp	Polarity=Pos	7	cc	_	O
7	stripping-ul	stripping	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	5	conj	_	B-PROC
8	venei	venă	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	7	nmod	_	B-ANAT
9	safene	safenă	NOUN	Ncfson	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	8	amod	_	I-ANAT
10	interne	intern	ADJ	Afpfson	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	I-ANAT
11	,	,	PUNCT	COMMA	_	14	punct	_	O
12	împreună	împreună	ADV	Rgp	Degree=Pos	14	case	_	O
13	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	12	fixed	_	O
14	flebectomiile	flebectomie	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	16	obl	_	B-DISO
15	individuale	individual	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	14	amod	_	O
16	oferă	oferi	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
17	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	18	det	_	O
18	îmbunătățire	îmbunătățire	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	16	obj	_	O
19	semnificativă	semnificativ	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	O
20	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	21	det	_	O
21	calității	calitate	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	18	nmod	_	O
22	vieții	viață	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	21	nmod	_	O
23	,	,	PUNCT	COMMA	_	26	punct	_	O
24	comparativ	comparativ	ADV	Rgp	Degree=Pos	26	case	_	O
25	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	24	fixed	_	O
26	tratamentul	tratament	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	16	obl	_	O
27	non	non	X	X	_	26	dep	_	amod
28	chirurgical	chirurgical	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	27	goeswith	_	O
29	(	(	PUNCT	LPAR	_	30	punct	_	O
30	115	115	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	16	parataxis	_	O
31	,	,	PUNCT	COMMA	_	32	punct	_	O
32	116	116	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	30	conj	_	O
33	)	)	PUNCT	RPAR	_	30	punct	_	O
34	.	.	PUNCT	PERIOD	_	16	punct	_	O

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 goeswith	color:blue
1	Nu	nu	PART	Qz	Polarity=Neg	2	advmod	_	O
2	trebuie	trebui	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
3	să	să	PART	Qs	Mood=Sub	5	mark	_	O
4	mai	mai	ADV	Rp	_	5	advmod	_	O
5	vedem	vedea	VERB	Vmsp1p	Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	2	csubj	_	O
6	mixedematoși	mixedematos	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	5	nsubj	_	O
7	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	12	nsubj	_	O
8	de-	de	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	12	advmod	_	O
9	abia	abia	ADV	Rgp	Degree=Pos	8	goeswith	_	O
10	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	12	expl:pv	_	O
11	mai	mai	ADV	Rp	_	12	advmod	_	O
12	pot	putea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	O
13	mișca	mișca	VERB	Vmnp	Tense=Pres|VerbForm=Inf	12	ccomp	_	O
14	sau	sau	CCONJ	Ccssp	Polarity=Pos	16	cc	_	O
15	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	16	nsubj	_	O
16	scot	scoate	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	conj	_	O
17	câte	câte	ADV	Rw	PronType=Int,Rel	18	advmod	_	O
18	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	19	det	_	O
19	cuvânt	cuvânt	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	16	obj	_	O
20	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	16	advmod	_	O
21	când	când	ADV	Rw	PronType=Int,Rel	20	fixed	_	O
22	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	20	fixed	_	O
23	când	când	ADV	Rw	PronType=Int,Rel	20	fixed	_	O
24	.	.	PUNCT	PERIOD	_	2	punct	_	O

~~~


