---
layout: base
title:  'Statistics of ccomp in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `ccomp`

This relation is universal.

96 nodes (1%) are attached to their parents as `ccomp`.

96 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.85416666666667.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (82; 85% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (6; 6% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (5; 5% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 ccomp	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	O
2	acest	acest	DET	Dd3msr---e	Case=Nom|Gender=Masc|Number=Sing|Person=3|Position=Prenom|PronType=Dem	3	det	_	O
3	moment	moment	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	6	obl	_	O
4	peptidul	peptid	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	B-CHEM
5	C	C	NOUN	Ncm--n	Definite=Ind|Gender=Masc	4	nmod	_	I-CHEM
6	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
7	prezenta	prezenta	VERB	Vmnp	Tense=Pres|VerbForm=Inf	6	ccomp	_	O
8	valori	valoare	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	7	obj	_	O
9	variabile	variabil	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	8	amod	_	O
10	.	.	PUNCT	PERIOD	_	6	punct	_	O

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 ccomp	color:blue
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


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 ccomp	color:blue
1	Întucât	Întucât	SCONJ	Csssp	Polarity=Pos	4	mark	_	O
2	regiunea	regiune	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubj	_	B-ANAT
3	scrotală	scrotal	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	I-ANAT
4	are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	advcl	_	O
5	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	6	det	_	O
6	potențial	potențial	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	obj	_	O
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	O
8	regenerare	regenerare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nmod	_	O
9	bun	bun	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	O
10	,	,	PUNCT	COMMA	_	4	punct	_	O
11	vindecarea	vindecare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	12	nsubj	_	O
12	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
13	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	17	cop	_	O
14	uneori	uneori	ADV	Rgp	Degree=Pos	17	advmod	_	O
15	neașteptat	neașteptat	ADV	Rgp	Degree=Pos	17	advmod	_	O
16	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	O
17	rapidă	rapid	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	12	ccomp	_	O
18	.	.	PUNCT	PERIOD	_	12	punct	_	O

~~~


