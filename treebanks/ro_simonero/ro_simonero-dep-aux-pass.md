---
layout: base
title:  'Statistics of aux:pass in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-aux.html">aux</a></tt>.

117 nodes (1%) are attached to their parents as `aux:pass`.

117 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16239316239316.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (105; 90% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (9; 8% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (3; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux:pass	color:blue
1	De	de	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	menționat	menționa	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
3	însă	însă	CCONJ	Ccssp	Polarity=Pos	2	cc	_	O
4	că	că	SCONJ	Csssp	Polarity=Pos	9	mark	_	O
5	și	și	CCONJ	Crssp	Polarity=Pos	6	advmod	_	O
6	subdozarea	subdozare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	9	nsubj:pass	_	O
7	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	_	O
8	adesea	adesea	ADV	Rgp	Degree=Pos	9	advmod	_	O
9	întâlnită	întâlni	VERB	Vmp--sf	Gender=Fem|Number=Sing|VerbForm=Part	2	ccomp	_	O
10	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	O
11	practică	practică	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	9	obl	_	O
12	medicală	medical	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	O
13	.	.	PUNCT	PERIOD	_	2	punct	_	O

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux:pass	color:blue
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


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 aux:pass	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	12	advmod	_	O
2	consecință	consecință	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	1	fixed	_	O
3	,	,	PUNCT	COMMA	_	1	punct	_	O
4	pacientul	pacient	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	12	nsubj	_	O
5	vârstnic	vârstnic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	O
6	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	O
7	deficiență	deficiență	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	4	nmod	_	B-DISO
8	fibroelastică	fibroelastic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	I-DISO
9	bine	bine	ADV	Rgp	Degree=Pos	10	advmod	_	O
10	selecționat	selecționa	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	7	amod	_	O
11	ar	avea	AUX	Va--3	Person=3|VerbForm=Fin	12	aux	_	O
12	putea	putea	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	O
13	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	14	aux:pass	_	O
14	candidat	candidat	NOUN	Ncmsrn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	12	ccomp	_	O
15	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	O
16	această	acest	DET	Dd3fsr---e	Case=Nom|Gender=Fem|Number=Sing|Person=3|Position=Prenom|PronType=Dem	17	det	_	O
17	procedură	procedură	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	14	obl	_	O
18	.	.	PUNCT	PERIOD	_	12	punct	_	O

~~~


