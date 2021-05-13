---
layout: base
title:  'Statistics of obl:pmod in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `obl:pmod`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="ro_simonero-dep-obl-agent.html">obl:agent</a></tt>.

488 nodes (0%) are attached to their parents as `obl:pmod`.

486 instances of `obl:pmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.50614754098361.

The following 12 pairs of parts of speech are connected with `obl:pmod`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (378; 77% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (71; 15% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (10; 2% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 obl:pmod	color:blue
1	Studiul	studiu	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	_
2	a	avea	AUX	Va--3s	Number=Sing|Person=3	3	aux	_	_
3	avut	avea	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	3	fixed	_	_
5	vedere	vedere	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	3	fixed	_	_
6	338	338	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	7	nummod	_	_
7	pacienți	pacient	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	3	obj	_	_
8	suferind	suferi	VERB	Vmg	VerbForm=Ger	7	acl	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	diabet	diabet	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	8	obl:pmod	_	BioNERLabel=B-DISO|SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 obl:pmod	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	anasamblu	anasamblu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	2	punct	_	_
4	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	5	expl:pass	_	_
5	estimează	estima	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	că	că	SCONJ	Csssp	Polarity=Neg	10	mark	_	_
7	factorii	factor	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	10	nsubj	_	_
8	genetici	genetic	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	7	amod	_	_
9	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	responsabili	responsabil	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	5	ccomp	_	_
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	evenimentele	eveniment	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	10	obl:pmod	_	BioNERLabel=B-DISO
13	trombotice	trombotic	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	12	amod	_	BioNERLabel=I-DISO|SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 obl:pmod	color:blue
1	Produsul	produs	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubj	_	_
2	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
3	cea	cel	DET	Tdfsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
4	mai	mai	ADV	Rp	_	5	advmod	_	_
5	largă	larg	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	utilizare	utilizare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	_
7	actuală	actual	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
8	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	alprostadilul	alprostadil	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	BioNERLabel=B-CHEM
10	(	(	PUNCT	LPAR	_	11	punct	_	SpaceAfter=No
11	PgE1	PgE1	NOUN	Yn	Abbr=Yes	9	appos	_	BioNERLabel=B-CHEM|SpaceAfter=No
12	)	)	PUNCT	RPAR	_	11	punct	_	SpaceAfter=No
13	,	,	PUNCT	COMMA	_	14	punct	_	_
14	autoadministrat	autoadministra	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	9	conj	_	_
15	injectabil	injectabil	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	_
16	intracavernos	intracavernos	ADV	Rgp	Degree=Pos	14	amod	_	_
17	sau	sau	CCONJ	Ccssp	Polarity=Pos	18	cc	_	_
18	intrauretral	intrauretral	ADV	Rgp	Degree=Pos	14	conj	_	_
19	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	_
20	dispozitive	dispozitiv	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	18	obl:pmod	_	_
21	adecvate	adecvat	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	20	amod	_	SpaceAfter=No
22	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


