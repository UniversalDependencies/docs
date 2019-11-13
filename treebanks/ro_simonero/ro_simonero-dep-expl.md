---
layout: base
title:  'Statistics of expl in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `expl`

This relation is universal.
There are 4 language-specific subtypes of `expl`: <tt><a href="ro_simonero-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_simonero-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_simonero-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro_simonero-dep-expl-pv.html">expl:pv</a></tt>.

6 nodes (0%) are attached to their parents as `expl`.

5 instances of `expl` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 1 pairs of parts of speech are connected with `expl`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (6; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 expl	color:blue
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


