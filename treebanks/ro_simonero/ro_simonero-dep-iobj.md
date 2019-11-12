---
layout: base
title:  'Statistics of iobj in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `iobj`

This relation is universal.

46 nodes (0%) are attached to their parents as `iobj`.

44 instances of `iobj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (25; 54% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (15; 33% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 iobj	color:blue
1	Celor	acela	DET	Td-po	Case=Gen|Number=Plur|PronType=Dem	4	det	_	O
2	mai	mai	ADV	Rp	_	3	advmod	_	O
3	mulți	mult	DET	Di3mp	Gender=Masc|Number=Plur|Person=3|PronType=Ind	4	det	_	O
4	pacienți	pacient	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	7	iobj	_	O
5	li	el	PRON	Pp3-pd--------w	Case=Dat|Number=Plur|Person=3|PronType=Prs|Strength=Weak	7	expl	_	O
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pass	_	O
7	recomandă	recomanda	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
8	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	9	det	_	O
9	restricție	restricție	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nsubj:pass	_	O
10	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	O
11	sodiu	sodiu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	nmod	_	B-CHEM
12	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	O
13	2	2	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	14	nummod	_	O
14	g	g	NOUN	Yn	Abbr=Yes	9	nmod	_	O
15	/	/	PUNCT	SLASH	AdpType=Prep	14	punct	_	O
16	zi	zi	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	14	nmod	_	O
17	,	,	PUNCT	COMMA	_	19	punct	_	O
18	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	19	case	_	O
19	rol	rol	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	nmod	_	O
20	important	important	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	19	amod	_	O
21	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	22	case	_	O
22	recăpătarea	recăpătare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	19	nmod	_	O
23	euvolemiei	euvolemie	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	22	nmod	_	O
24	.	.	PUNCT	PERIOD	_	7	punct	_	O

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 iobj	color:blue
1	La	la	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	bolnavii	bolnav	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	13	obl	_	O
3	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	4	nsubj	_	O
4	erau	fi	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	2	acl	_	O
5	sub	sub	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	O
6	tratament	tratament	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	B-CHEM
7	antiagregant	antiagregant	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	I-CHEM
8	anterior	anterior	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	O
9	apariției	apariție	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	iobj	_	O
10	EI	EI	NOUN	Yn	Abbr=Yes	9	nmod	_	B-DISO
11	nu	nu	PART	Qz	Polarity=Neg	13	advmod	_	O
12	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	13	expl:pass	_	O
13	recomandă	recomanda	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
14	întreruperea	întrerupere	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	13	nsubj:pass	_	O
15	acestuia	acesta	PRON	Pd3mso	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nmod	_	O
16	decât	decât	ADV	Rc	_	18	mark	_	O
17	dacă	dacă	SCONJ	Csssp	Polarity=Pos	16	fixed	_	O
18	apar	apărea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	advcl	_	O
19	sângerări	sângerare	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	18	nsubj	_	B-DISO
20	majore	major	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	19	amod	_	I-DISO
21	.	.	PUNCT	PERIOD	_	13	punct	_	O

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 iobj	color:blue
1	Afectarea	afectare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	nsubj	_	B-DISO
2	ischemică	ischemic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	I-DISO
3	determină	determina	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
4	tracțiunea	tracțiune	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	obj	_	B-DISO
5	cuspelor	cuspă	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	4	nmod	_	I-DISO
6	și	și	CCONJ	Crssp	Polarity=Pos	7	cc	_	O
7	cordajelor	cordaj	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	5	conj	_	I-DISO
8	secundar	secundar	ADV	Rgp	Degree=Pos	7	amod	_	O
9	retracției	retracție	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	iobj	_	O
10	mușchilor	mușchi	NOUN	Ncmpoy	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	9	nmod	_	B-ANAT
11	papilari	papilar	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	10	amod	_	I-ANAT
12	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	O
13	regiunea	regiune	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	9	nmod	_	O
14	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	O
15	infarctizare	infarctizare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	13	nmod	_	O
16	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


