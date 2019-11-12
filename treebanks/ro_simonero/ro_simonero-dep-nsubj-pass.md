---
layout: base
title:  'Statistics of nsubj:pass in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-nsubj.html">nsubj</a></tt>.

139 nodes (1%) are attached to their parents as `nsubj:pass`.

86 instances of `nsubj:pass` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.10791366906475.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (121; 87% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (9; 6% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nsubj:pass	color:blue
1	La	la	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	acestea	acesta	PRON	Pd3fpr	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Dem	4	obl	_	O
3	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pass	_	O
4	adaugă	adăuga	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
5	și	și	CCONJ	Crssp	Polarity=Pos	6	advmod	_	O
6	normalizarea	normalizare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubj:pass	_	O
7	valorilor	valoare	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	6	nmod	_	O
8	Na	Na	NOUN	Yn	Abbr=Yes	7	nmod	_	B-CHEM
9	+	+	PUNCT	PLUS	_	8	punct	_	O
10	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	O
11	pacienții	pacient	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	6	nmod	_	O
12	hiponatremici	hiponatremic	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	11	amod	_	O
13	.	.	PUNCT	PERIOD	_	4	punct	_	O

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 nsubj:pass	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	O
2	ultima	ultima	NUM	Mofsrly	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|NumForm=Word|NumType=Ord	3	nummod	_	O
3	perioadă	perioadă	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	6	obl	_	O
4	s-	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	6	expl:pass	_	O
5	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	6	aux	_	O
6	studiat	studia	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
7	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	8	det	_	O
8	serie	serie	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nsubj:pass	_	O
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	O
10	biomarkeri	biomarker	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	8	nmod	_	B-CHEM
11	renali	renal	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	10	amod	_	I-CHEM
12	,	,	PUNCT	COMMA	_	15	punct	_	O
13	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	15	nsubj:pass	_	O
14	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	15	expl:pass	_	O
15	eliberează	elibera	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	10	acl	_	O
16	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	18	case	_	O
17	cauza	cauză	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	16	fixed	_	O
18	injuriei	injurie	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	15	obl	_	B-DISO
19	renale	renal	ADJ	Afpfson	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	I-DISO
20	ischemice	ischemic	ADJ	Afpfson	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	18	amod	_	I-DISO
21	.	.	PUNCT	PERIOD	_	6	punct	_	O

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:pass	color:blue
1	Intensitatea	intensitate	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	6	nsubj:pass	_	O
2	zgomotului	zgomot	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	nmod	_	O
3	2	2	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	2	nummod	_	O
4	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	O
5	adesea	adesea	ADV	Rgp	Degree=Pos	6	advmod	_	O
6	diminuată	diminuat	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	O
7	,	,	PUNCT	COMMA	_	11	punct	_	O
8	iar	iar	ADV	Rc	_	11	cc	_	O
9	pulsul	puls	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	11	nsubj	_	O
10	carotidian	carotidian	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	O
11	are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	conj	_	O
12	aspect	aspect	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	11	obj	_	O
13	parvus	parvus	X	X	_	12	amod	_	O
14	et	et	X	X	_	11	obj	_	O
15	tardus	tardus	X	X	_	14	amod	_	O
16	.	.	PUNCT	PERIOD	_	6	punct	_	O

~~~


