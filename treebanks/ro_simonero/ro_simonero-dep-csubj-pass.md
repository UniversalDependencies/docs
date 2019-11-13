---
layout: base
title:  'Statistics of csubj:pass in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-csubj.html">csubj</a></tt>.

4 nodes (0%) are attached to their parents as `csubj:pass`.

4 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.5.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 25% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 19 csubj:pass	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	O
2	acest	acest	DET	Dd3msr---e	Case=Nom|Gender=Masc|Number=Sing|Person=3|Position=Prenom|PronType=Dem	3	det	_	O
3	sens	sens	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	6	obl	_	O
4	,	,	PUNCT	COMMA	_	3	punct	_	O
5	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	6	expl:pass	_	O
6	știe	ști	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
7	că	că	SCONJ	Csssp	Polarity=Pos	19	mark	_	O
8	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	O
9	perioade	perioadă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	19	obl	_	O
10	interprandiale	interprandial	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	9	amod	_	O
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	O
12	scurtă	scurt	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	O
13	durată	durată	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	9	nmod	_	O
14	(	(	PUNCT	LPAR	_	16	punct	_	O
15	43259	43259	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	16	nummod	_	O
16	ore	oră	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	9	appos	_	O
17	)	)	PUNCT	RPAR	_	16	punct	_	O
18	ficatul	ficat	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	19	nsubj	_	B-ANAT
19	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	csubj:pass	_	O
20	utiliza	utiliza	VERB	Vmnp	Tense=Pres|VerbForm=Inf	19	ccomp	_	O
21	aproximativ	aproximativ	ADV	Rgp	Degree=Pos	23	advmod	_	O
22	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	23	det	_	O
23	sfert	sfert	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	20	obj	_	O
24	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	25	case	_	O
25	acizii	acid	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	23	nmod	_	B-CHEM
26	grași	gras	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	25	amod	_	I-CHEM
27	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	28	case	_	O
28	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	30	obj	_	O
29	îi	el	PRON	Pp3mpa--------w	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Weak	30	expl	_	O
30	primește	primi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	25	acl	_	O
31	.	.	PUNCT	PERIOD	_	6	punct	_	O

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 csubj:pass	color:blue
1	Nu	nu	PART	Qz	Polarity=Neg	3	advmod	_	O
2	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	O
3	exclus	exclude	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
4	ca	ca	ADV	Rc	_	10	mark	_	O
5	activitatea	activitate	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	10	nsubj	_	O
6	acestor	acest	DET	Dd3-po---e	Case=Gen|Number=Plur|Person=3|Position=Prenom|PronType=Dem	7	det	_	O
7	enzime	enzimă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	5	nmod	_	B-CHEM
8	să	să	PART	Qs	Mood=Sub	10	mark	_	O
9	fie	fi	AUX	Vasp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	O
10	secundară	secundar	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	3	csubj:pass	_	O
11	afluxului	aflux	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	10	iobj	_	O
12	hepatic	hepatic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	O
13	crescut	crescut	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	11	acl	_	O
14	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	O
15	aminoacizi	aminoacid	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	11	nmod	_	B-CHEM
16	glucoformatori	glucoformator	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	15	amod	_	I-CHEM
17	eliberați	elibera	VERB	Vmp--pm	Gender=Masc|Number=Plur|VerbForm=Part	15	acl	_	O
18	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	19	case	_	O
19	țesutul	țesut	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	17	obl	_	B-ANAT
20	muscular	muscular	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	I-ANAT
21	sub	sub	ADP	Spsa	AdpType=Prep|Case=Acc	22	case	_	O
22	acțiunea	acțiune	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	17	obl	_	O
23	cortizolului	cortizol	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	22	nmod	_	B-CHEM
24	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 19 csubj:pass	color:blue
1	Totuși	totuși	ADV	Rgp	Degree=Pos	3	advmod	_	O
2	,	,	PUNCT	COMMA	_	1	punct	_	O
3	trebuie	trebui	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
4	notat	nota	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	csubj	_	O
5	că	că	SCONJ	Csssp	Polarity=Pos	19	mark	_	O
6	,	,	PUNCT	COMMA	_	10	punct	_	O
7	prin	prin	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	O
8	comparație	comparație	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	7	fixed	_	O
9	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	7	fixed	_	O
10	dozarea	dozare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	19	nmod	_	O
11	hormonilor	hormon	NOUN	Ncmpoy	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	10	nmod	_	B-CHEM
12	natriuretici	natriuretic	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	11	amod	_	I-CHEM
13	,	,	PUNCT	COMMA	_	10	punct	_	O
14	FE	FE	NOUN	Yn	Abbr=Yes	19	nsubj	_	O
15	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	16	det	_	O
16	VS	VS	NOUN	Yn	Abbr=Yes	14	nmod	_	B-ANAT
17	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	cop	_	O
18	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	19	det	_	O
19	element	element	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	csubj:pass	_	O
20	prognostic	prognostic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	O
21	slab	slab	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	O
22	(	(	PUNCT	LPAR	_	23	punct	_	O
23	3	3	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	19	parataxis	_	O
24	)	)	PUNCT	RPAR	_	23	punct	_	O
25	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


