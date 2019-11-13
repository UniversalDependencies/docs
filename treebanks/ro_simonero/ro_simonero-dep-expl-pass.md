---
layout: base
title:  'Statistics of expl:pass in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_simonero-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_simonero-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro_simonero-dep-expl-pv.html">expl:pv</a></tt>.

75 nodes (1%) are attached to their parents as `expl:pass`.

73 instances of `expl:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18666666666667.

The following 1 pairs of parts of speech are connected with `expl:pass`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (75; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl:pass	color:blue
1	La	la	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	acestea	acesta	PRON	Pd3fpr	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Dem	4	obl	_	O
3	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pass	_	O
4	adaugă	adăuga	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
5	și	și	CCONJ	Crssp	Polarity=Pos	6	advmod	_	O
6	normalizarea	normalizare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubj:pass	_	O
7	valorilor	valoare	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	6	nmod	_	O
8	Na	Na	NOUN	Yn	Abbr=Yes	7	nmod	_	B-CHEM
9	+	+	PUNCT	PLUS	_	8	punct	_	O
10	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	O
11	pacienții	pacient	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	6	nmod	_	O
12	hiponatremici	hiponatremic	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	11	amod	_	O
13	.	.	PUNCT	PERIOD	_	4	punct	_	O

~~~


