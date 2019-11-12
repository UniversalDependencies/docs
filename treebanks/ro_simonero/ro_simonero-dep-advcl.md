---
layout: base
title:  'Statistics of advcl in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `advcl`

This relation is universal.

123 nodes (1%) are attached to their parents as `advcl`.

98 instances of `advcl` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.6829268292683.

The following 17 pairs of parts of speech are connected with `advcl`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (68; 55% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (16; 13% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (11; 9% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (8; 7% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (4; 3% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 13 advcl	color:blue
1	Procesul	proces	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	B-PROC
2	endocarditic	endocarditic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	amod	_	I-PROC
3	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
4	determina	determina	VERB	Vmnp	Tense=Pres|VerbForm=Inf	3	ccomp	_	O
5	distrucția	distrucție	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	obj	_	O
6	masivă	masiv	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	O
7	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	8	det	_	O
8	rădăcinii	rădăcină	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	nmod	_	B-ANAT
9	aortice	aortic	ADJ	Afpfson	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	I-ANAT
10	,	,	PUNCT	COMMA	_	13	punct	_	O
11	ceea	acela	PRON	Pd3fsr	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	13	nsubj	_	O
12	ce	ce	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	11	fixed	_	O
13	impune	impune	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	O
14	reconstrucția	reconstrucție	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	13	obj	_	O
15	complexă	complex	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	14	amod	_	O
16	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 advcl	color:blue
1	Deși	deși	SCONJ	Csssp	Polarity=Pos	6	mark	_	O
2	riscul	risc	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	B-DISO
3	hemoragic	hemoragic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	I-DISO
4	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	O
5	mai	mai	ADV	Rp	_	6	advmod	_	O
6	mare	mare	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	11	advcl	_	O
7	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	O
8	vârstnici	vârstnic	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	6	obl	_	O
9	,	,	PUNCT	COMMA	_	6	punct	_	O
10	anticoagularea	anticoagulare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	12	nsubj	_	B-PROC
11	trebuie	trebui	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
12	aplicată	aplica	VERB	Vmp--sf	Gender=Fem|Number=Sing|VerbForm=Part	11	csubj	_	O
13	,	,	PUNCT	COMMA	_	16	punct	_	O
14	dar	dar	CCONJ	Ccssp	Polarity=Pos	16	cc	_	O
15	strict	strict	ADV	Rgp	Degree=Pos	16	advmod	_	O
16	individualizată	individualiza	VERB	Vmp--sf	Gender=Fem|Number=Sing|VerbForm=Part	12	conj	_	O
17	.	.	PUNCT	PERIOD	_	11	punct	_	O

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 advcl	color:blue
1	Diureticele	diuretic	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	6	nsubj	_	B-CHEM
2	și	și	CCONJ	Crssp	Polarity=Pos	3	cc	_	O
3	medicația	medicație	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	conj	_	B-CHEM
4	tonicardiacă	tonicardiac	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	I-CHEM
5	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	O
6	utile	util	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	0	root	_	O
7	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	O
8	ameliorarea	ameliorare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	6	obl	_	O
9	simptomelor	simptom	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	8	nmod	_	O
10	,	,	PUNCT	COMMA	_	13	punct	_	O
11	fără	fără	SCONJ	Csssp	Polarity=Pos	13	mark	_	O
12	să	să	PART	Qs	Mood=Sub	11	fixed	_	O
13	influențeze	influența	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	6	advcl	_	O
14	însă	însă	CCONJ	Ccssp	Polarity=Pos	6	cc	_	O
15	supraviețuirea	supraviețuire	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	13	obj	_	O
16	bolnavilor	bolnav	NOUN	Ncmpoy	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	15	nmod	_	O
17	.	.	PUNCT	PERIOD	_	6	punct	_	O

~~~


