---
layout: base
title:  'Statistics of iobj in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `iobj`

This relation is universal.

441 nodes (0%) are attached to their parents as `iobj`.

373 instances of `iobj` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.87528344671202.

The following 14 pairs of parts of speech are connected with `iobj`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (204; 46% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (142; 32% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (55; 12% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (13; 3% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (9; 2% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-PART.html">PART</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Stentarea	stentare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	nsubj:pass	_	BioNERLabel=B-PROC
2	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	rezervată	rezerva	VERB	Vmp--sf	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
4	cazurilor	caz	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	3	iobj	_	_
5	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	APTL	APTL	NOUN	Yn	Abbr=Yes	4	nmod	_	BioNERLabel=B-PROC
7	suboptimală	suboptimal	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
8	(	(	PUNCT	LPAR	_	9	punct	_	SpaceAfter=No
9	39	39	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	3	parataxis	_	SpaceAfter=No
10	)	)	PUNCT	RPAR	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	Este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	3	det	_	_
3	test	test	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
4	indispensabil	indispensabil	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
5	evaluării	evaluare	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	4	iobj	_	_
6	eficacității	eficacitate	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	nmod	_	_
7	terapiei	terapie	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 iobj	color:blue
1	Diabetul	diabet	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	BioNERLabel=B-DISO
2	scăpat	scăpa	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	1	acl	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
4	sub	sub	ADP	Spsa	AdpType=Prep|Case=Acc	3	fixed	_	_
5	control	control	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	obl	_	_
6	vă	tu	PRON	Pp2-pd--------w	Case=Dat|Number=Plur|Person=2|PronType=Prs|Strength=Weak	8	iobj	_	_
7	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	controla	controla	VERB	Vmnp	Tense=Pres|VerbForm=Inf	7	ccomp	_	_
9	sănătatea	sănătate	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


