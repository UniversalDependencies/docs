---
layout: base
title:  'Statistics of csubj:pass in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-csubj.html">csubj</a></tt>.

27 nodes (0%) are attached to their parents as `csubj:pass`.

27 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.6666666666667.

The following 4 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (22; 81% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (3; 11% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (1; 4% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 19 csubj:pass	color:blue
1	De	de	ADP	Spsa	AdpType=Prep|Case=Acc	6	advmod	_	O
2	asemenea	asemenea	ADV	Rgp	Degree=Pos	1	fixed	_	O
3	,	,	PUNCT	COMMA	_	1	punct	_	O
4	s-	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	6	expl:pass	_	O
5	a	avea	AUX	Va--3s	Number=Sing|Person=3	6	aux	_	O
6	arătat	arăta	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
7	că	că	SCONJ	Csssp	Polarity=Neg	19	mark	_	O
8	administrarea	administrare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	19	nsubj	_	O
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	O
10	Vitamina	vitamină	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	8	nmod	_	B-CHEM
11	D	D	NOUN	Ncm--n	Definite=Ind|Gender=Masc	10	flat	_	I-CHEM
12	(	(	PUNCT	LPAR	_	14	punct	_	O
13	sau	sau	CCONJ	Ccssp	Polarity=Pos	14	cc	_	O
14	analogi	analog	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	10	conj	_	O
15	)	)	PUNCT	RPAR	_	14	punct	_	O
16	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	O
17	șoarecii	șoarece	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	8	nmod	_	O
18	NOD	NOD	NOUN	Yn	Abbr=Yes	17	nmod	_	O
19	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	csubj:pass	_	O
20	preveni	preveni	VERB	Vmnp	Tense=Pres|VerbForm=Inf	19	ccomp	_	O
21	apariția	apariție	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	20	obj	_	O
22	insulitei	insulită	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	21	nmod	_	B-DISO
23	și	și	CCONJ	Crssp	Polarity=Pos	26	cc	_	O
24	deci	deci	CCONJ	Ccssp	Polarity=Pos	28	cc	_	O
25	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	26	det	_	O
26	diabetului	diabet	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	22	conj	_	B-DISO
27	[	[	PUNCT	LSQR	_	28	punct	_	O
28	52	52	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	6	parataxis	_	O
29	]	]	PUNCT	RSQR	_	28	punct	_	O
30	.	.	PUNCT	PERIOD	_	6	punct	_	O

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj:pass	color:blue
1	S-	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	3	expl:pv	_	O
2	a	avea	AUX	Va--3s	Number=Sing|Person=3	3	aux	_	O
3	dedus	deduce	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	O
5	aici	aici	ADV	Rgp	Degree=Pos	3	advmod	_	O
6	că	că	SCONJ	Csssp	Polarity=Neg	9	mark	_	O
7	cel	cel	DET	Tdmsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	O
8	mai	mai	ADV	Rp	_	9	advmod	_	O
9	important	important	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	csubj:pass	_	O
10	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	O
11	să	să	PART	Qs	Mood=Sub	13	mark	_	O
12	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	13	expl:pass	_	O
13	atingă	atinge	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	9	csubj	_	O
14	obiectivele	obiectiv	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	13	nsubj:pass	_	O
15	tensionale	tensional	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	14	amod	_	O
16	,	,	PUNCT	COMMA	_	20	punct	_	O
17	decât	decât	ADV	Rc	_	20	mark	_	O
18	să	să	PART	Qs	Mood=Sub	20	mark	_	O
19	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	20	expl:pass	_	O
20	selecteze	selecta	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	13	advcl	_	O
21	medicamentele	medicament	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	20	nsubj:pass	_	B-CHEM
22	antihipertensive	antihipertensiv	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	21	amod	_	I-CHEM
23	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 csubj:pass	color:blue
1	Chestionarul	chestionar	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj:pass	_	O
2	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	O
3	pretestare	pretestare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	O
4	a	avea	AUX	Va--3s	Number=Sing|Person=3	6	aux	_	O
5	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	6	aux:pass	_	O
6	validat	valida	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
7	,	,	PUNCT	COMMA	_	8	punct	_	O
8	constatându-	constata	VERB	Vmg-------y	Variant=Short|VerbForm=Ger	6	advcl	_	O
9	se	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	8	expl:pass	_	O
10	că	că	SCONJ	Csssp	Polarity=Neg	14	mark	_	O
11	datele	dată	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	14	nsubj	_	O
12	obținute	obține	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	11	acl	_	O
13	vor	vrea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	14	aux	_	O
14	putea	putea	AUX	Vanp	Tense=Pres|VerbForm=Inf	8	csubj:pass	_	O
15	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	16	aux:pass	_	O
16	folosite	folosi	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	14	ccomp	_	O
17	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	18	case	_	O
18	studiu	studiu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	16	obl	_	O
19	.	.	PUNCT	PERIOD	_	6	punct	_	O

~~~


