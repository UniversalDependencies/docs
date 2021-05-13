---
layout: base
title:  'Statistics of nsubj:pass in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-nsubj.html">nsubj</a></tt>.

1430 nodes (1%) are attached to their parents as `nsubj:pass`.

863 instances of `nsubj:pass` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.95524475524476.

The following 18 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1249; 87% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (95; 7% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (43; 3% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (13; 1% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	El	el	PRON	Pp3msr--------s	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	3	nsubj:pass	_	_
2	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	depozitat	depozita	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	organite	organit	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	3	obl	_	_
6	specifice	specific	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	COMMA	_	8	punct	_	_
8	veziculele	veziculă	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	5	appos	_	BioNERLabel=B-CHEM
9	GLUT	GLUT	NOUN	Yn	Abbr=Yes	8	nmod	_	BioNERLabel=I-CHEM
10	4	4	NUM	Mc-s-d	Number=Sing|NumForm=Digit|NumType=Card	9	nummod	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 8 nsubj:pass	color:blue
1	Din	din	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
2	cauza	cauză	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	13	obl	_	_
3	costului	cost	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	13	obl	_	_
4	ridicat	ridicat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
5	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	6	det	_	_
6	materialelor	material	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	3	nmod	_	SpaceAfter=No
7	,	,	PUNCT	COMMA	_	3	punct	_	_
8	numărul	număr	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	13	nsubj:pass	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	intervenții	intervenție	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	8	nmod	_	_
11	a	avea	AUX	Va--3s	Number=Sing|Person=3	13	aux	_	_
12	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	13	aux:pass	_	_
13	limitat	limitat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	13	punct	_	_

~~~


