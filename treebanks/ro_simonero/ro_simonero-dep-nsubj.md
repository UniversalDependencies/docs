---
layout: base
title:  'Statistics of nsubj in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="ro_simonero-dep-nsubj-pass.html">nsubj:pass</a></tt>.

615 nodes (4%) are attached to their parents as `nsubj`.

562 instances of `nsubj` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.94634146341463.

The following 22 pairs of parts of speech are connected with `nsubj`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (341; 55% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (107; 17% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (77; 13% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (52; 8% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (9; 1% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nsubj	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Acesta	acesta	PRON	Pd3msr	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	nsubj	_	O
2	are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
3	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	4	det	_	O
4	profil	profil	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	obj	_	O
5	asemănător	asemănător	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	O
6	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	O
7	tolvaptanul	tolvaptan	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	obl	_	B-CHEM
8	,	,	PUNCT	COMMA	_	11	punct	_	O
9	dar	dar	CCONJ	Ccssp	Polarity=Pos	11	cc	_	O
10	nu	nu	PART	Qz	Polarity=Neg	11	advmod	_	O
11	ameliorează	ameliora	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	O
12	semnele	semn	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	11	obj	_	O
13	și	și	CCONJ	Crssp	Polarity=Pos	14	cc	_	O
14	simptomele	simptom	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	12	conj	_	O
15	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	16	case	_	O
16	IC	IC	NOUN	Yn	Abbr=Yes	14	nmod	_	B-DISO
17	.	.	PUNCT	PERIOD	_	2	punct	_	O

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 nsubj	color:blue
1	Tusea	tuse	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	11	nsubj	_	B-DISO
2	cronică	cronic	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	I-DISO
3	,	,	PUNCT	COMMA	_	4	punct	_	O
4	seacă	sec	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	conj	_	I-DISO
5	,	,	PUNCT	COMMA	_	6	punct	_	O
6	echivalent	echivalent	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	conj	_	O
7	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	8	det	_	O
8	dispneei	dispnee	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	6	nmod	_	B-DISO
9	,	,	PUNCT	COMMA	_	1	punct	_	O
10	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	O
11	frecventă	frecvent	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	O
12	.	.	PUNCT	PERIOD	_	11	punct	_	O

~~~


