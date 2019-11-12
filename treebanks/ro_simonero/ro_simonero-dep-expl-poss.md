---
layout: base
title:  'Statistics of expl:poss in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `expl:poss`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_simonero-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_simonero-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_simonero-dep-expl-pv.html">expl:pv</a></tt>.

1 nodes (0%) are attached to their parents as `expl:poss`.

1 instances of `expl:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `expl:poss`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 21 expl:poss	color:blue
1	Ele	el	PRON	Pp3fpr--------s	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Strength=Strong	3	nsubj	_	O
2	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	O
3	incorporate	incorpora	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	O
4	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	O
5	VLDL	VLDL	NOUN	Yn	Abbr=Yes	3	obl	_	B-CHEM
6	împreună	împreună	ADV	Rgp	Degree=Pos	9	case	_	O
7	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	6	fixed	_	O
8	alte	alt	DET	Di3fpr---e	Case=Nom|Gender=Fem|Number=Plur|Person=3|Position=Prenom|PronType=Ind	9	det	_	O
9	lipide	lipidă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	3	obl	_	B-CHEM
10	și	și	CCONJ	Crssp	Polarity=Pos	11	cc	_	O
11	proteine	proteină	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	9	conj	_	B-CHEM
12	și	și	CCONJ	Crssp	Polarity=Pos	13	cc	_	O
13	secretate	secreta	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	9	conj	_	O
14	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	O
15	plasmă	plasmă	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	13	obl	_	B-CHEM
16	,	,	PUNCT	COMMA	_	22	punct	_	O
17	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	18	case	_	O
18	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	22	obl	_	O
19	țesuturile	țesut	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	22	nsubj	_	B-ANAT
20	extrahepatice	extrahepatic	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	19	amod	_	I-ANAT
21	își	sine	PRON	Px3--d--------w	Case=Dat|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	22	expl:poss	_	O
22	procură	procura	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	9	acl	_	O
23	acizii	acid	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	22	obj	_	B-CHEM
24	grași	gras	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	23	amod	_	I-CHEM
25	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


