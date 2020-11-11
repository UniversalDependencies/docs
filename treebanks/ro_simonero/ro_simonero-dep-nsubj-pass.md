---
layout: base
title:  'Statistics of nsubj:pass in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-nsubj.html">nsubj</a></tt>.

1343 nodes (1%) are attached to their parents as `nsubj:pass`.

777 instances of `nsubj:pass` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.88309754281459.

The following 18 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1182; 88% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (83; 6% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (36; 3% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Stentarea	stentare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	nsubj:pass	_	B-PROC
2	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	O
3	rezervată	rezerva	VERB	Vmp--sf	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	O
4	cazurilor	caz	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	3	iobj	_	O
5	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	O
6	APTL	APTL	NOUN	Yn	Abbr=Yes	4	nmod	_	B-PROC
7	suboptimală	suboptimal	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	O
8	(	(	PUNCT	LPAR	_	9	punct	_	O
9	39	39	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	3	parataxis	_	O
10	)	)	PUNCT	RPAR	_	9	punct	_	O
11	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Ele	el	PRON	Pp3fpr--------s	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Strength=Strong	3	nsubj:pass	_	O
2	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	O
3	reprezentate	reprezenta	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	0	root	_	O
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	O
5	procese	proces	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	3	nmod:agent	_	O
6	complexe	complex	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	5	amod	_	O
7	între	între	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	O
8	sistemele	sistem	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	5	nmod	_	O
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	O
10	excitație	excitație	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	8	nmod	_	O
11	și	și	CCONJ	Crssp	Polarity=Pos	12	cc	_	O
12	inhibiție	inhibiție	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	10	conj	_	O
13	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 8 nsubj:pass	color:blue
1	Din	din	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	O
2	cauza	cauză	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	13	obl	_	O
3	costului	cost	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	13	obl	_	O
4	ridicat	ridicat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	O
5	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	6	det	_	O
6	materialelor	material	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	3	nmod	_	O
7	,	,	PUNCT	COMMA	_	3	punct	_	O
8	numărul	număr	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	13	nsubj:pass	_	O
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	O
10	intervenții	intervenție	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	8	nmod	_	O
11	a	avea	AUX	Va--3s	Number=Sing|Person=3	13	aux	_	O
12	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	13	aux:pass	_	O
13	limitat	limitat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	O
14	.	.	PUNCT	PERIOD	_	13	punct	_	O

~~~


