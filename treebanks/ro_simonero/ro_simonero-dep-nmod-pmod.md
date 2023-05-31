---
layout: base
title:  'Statistics of nmod:pmod in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `nmod:pmod`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="ro_simonero-dep-nmod-agent.html">nmod:agent</a></tt>, <tt><a href="ro_simonero-dep-nmod-tmod.html">nmod:tmod</a></tt>.

488 nodes (0%) are attached to their parents as `nmod:pmod`.

486 instances of `nmod:pmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.50614754098361.

The following 12 pairs of parts of speech are connected with `nmod:pmod`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (378; 77% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (71; 15% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (10; 2% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod:pmod	color:blue
1	Studiul	studiu	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	O
2	a	avea	AUX	Va--3s	Number=Sing|Person=3	3	aux	_	O
3	avut	avea	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
4	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	3	fixed	_	O
5	vedere	vedere	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	3	fixed	_	O
6	338	338	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	7	nummod	_	O
7	pacienți	pacient	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	3	obj	_	O
8	suferind	suferi	VERB	Vmg	VerbForm=Ger	7	acl	_	O
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	O
10	diabet	diabet	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	8	nmod:pmod	_	B-DISO
11	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 nmod:pmod	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	anasamblu	anasamblu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	obl	_	O
3	,	,	PUNCT	COMMA	_	2	punct	_	O
4	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	5	expl:pass	_	O
5	estimează	estima	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
6	că	că	SCONJ	Csssp	Polarity=Neg	10	mark	_	O
7	factorii	factor	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	10	nsubj	_	O
8	genetici	genetic	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	7	amod	_	O
9	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	O
10	responsabili	responsabil	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	5	ccomp	_	O
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	O
12	evenimentele	eveniment	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	10	nmod:pmod	_	B-DISO
13	trombotice	trombotic	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	12	amod	_	I-DISO
14	.	.	PUNCT	PERIOD	_	5	punct	_	O

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 nmod:pmod	color:blue
1	Produsul	produs	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubj	_	O
2	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	O
3	cea	cel	DET	Tdfsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	O
4	mai	mai	ADV	Rp	_	5	advmod	_	O
5	largă	larg	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	O
6	utilizare	utilizare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	O
7	actuală	actual	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	O
8	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	O
9	alprostadilul	alprostadil	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	B-CHEM
10	(	(	PUNCT	LPAR	_	11	punct	_	O
11	PgE1	PgE1	NOUN	Yn	Abbr=Yes	9	appos	_	B-CHEM
12	)	)	PUNCT	RPAR	_	11	punct	_	O
13	,	,	PUNCT	COMMA	_	14	punct	_	O
14	autoadministrat	autoadministra	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	9	conj	_	O
15	injectabil	injectabil	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	O
16	intracavernos	intracavernos	ADV	Rgp	Degree=Pos	14	amod	_	O
17	sau	sau	CCONJ	Ccssp	Polarity=Pos	18	cc	_	O
18	intrauretral	intrauretral	ADV	Rgp	Degree=Pos	14	conj	_	O
19	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	O
20	dispozitive	dispozitiv	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	18	nmod:pmod	_	O
21	adecvate	adecvat	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	20	amod	_	O
22	.	.	PUNCT	PERIOD	_	9	punct	_	O

~~~


