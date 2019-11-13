---
layout: base
title:  'Statistics of parataxis in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `parataxis`

This relation is universal.

113 nodes (1%) are attached to their parents as `parataxis`.

112 instances of `parataxis` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 19.9469026548673.

The following 14 pairs of parts of speech are connected with `parataxis`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (58; 51% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (17; 15% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (10; 9% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (7; 6% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 14 parataxis	color:blue
1	Scorurile	scor	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	4	nsubj	_	O
2	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	O
3	risc	risc	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	_	B-DISO
4	permit	permite	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
5	aprecierea	apreciere	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	obj	_	O
6	prealabilă	prealabil	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	O
7	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	8	det	_	O
8	riscului	risc	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	nmod	_	O
9	operator	operator	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	8	amod	_	O
10	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	O
11	fiecare	fiecare	DET	Di3-sr---e	Case=Nom|Number=Sing|Person=3|Position=Prenom|PronType=Ind	12	det	_	O
12	caz	caz	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	obl	_	O
13	(	(	PUNCT	LPAR	_	14	punct	_	O
14	23	23	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	4	parataxis	_	O
15	)	)	PUNCT	RPAR	_	14	punct	_	O
16	.	.	PUNCT	PERIOD	_	4	punct	_	O

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 parataxis	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	O
2	vederea	vedere	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	7	obl	_	O
3	evaluării	evaluare	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	2	nmod	_	O
4	acurateței	acurateță	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	3	nmod	_	O
5	anastomozelor	anastomoză	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	4	nmod	_	B-PROC
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pv	_	O
7	indică	indica	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
8	angiografie	angiografie	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nsubj	_	B-PROC
9	intraoperatorie	intraoperatoriu	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	I-PROC
10	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	O
11	control	control	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	8	nmod	_	O
12	(	(	PUNCT	LPAR	_	13	punct	_	O
13	17	17	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	8	parataxis	_	O
14	)	)	PUNCT	RPAR	_	13	punct	_	O
15	.	.	PUNCT	PERIOD	_	7	punct	_	O

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 16 parataxis	color:blue
1	Efectul	efect	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	O
2	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	O
3	mai	mai	ADV	Rp	_	4	advmod	_	O
4	marcat	marcat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	O
5	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	O
6	animalele	animal	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	4	obl	_	O
7	hipofizectomizate	hipofizectomizat	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	6	amod	_	O
8	,	,	PUNCT	COMMA	_	14	punct	_	O
9	și	și	CCONJ	Crssp	Polarity=Pos	14	cc	_	O
10	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	O
11	mod	mod	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	14	nmod	_	O
12	paradoxal	paradoxal	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	11	amod	_	O
13	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	O
14	diabetici	diabetic	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	6	conj	_	O
15	(	(	PUNCT	LPAR	_	16	punct	_	O
16	7	7	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	4	parataxis	_	O
17	)	)	PUNCT	RPAR	_	16	punct	_	O
18	.	.	PUNCT	PERIOD	_	4	punct	_	O

~~~


