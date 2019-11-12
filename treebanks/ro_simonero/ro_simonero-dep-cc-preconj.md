---
layout: base
title:  'Statistics of cc:preconj in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="ro_simonero-dep-cc.html">cc</a></tt>.

5 nodes (0%) are attached to their parents as `cc:preconj`.

5 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 1 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (5; 100% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 cc:preconj	color:blue
1	Acestea	acesta	PRON	Pd3fpr	Case=Nom|Gender=Fem|Number=Plur|Person=3|PronType=Dem	2	nsubj	_	O
2	pot	putea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
3	prezenta	prezenta	VERB	Vmnp	Tense=Pres|VerbForm=Inf	2	ccomp	_	O
4	modificări	modificare	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	3	obj	_	O
5	ale	al	DET	Tsfp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	6	det	_	O
6	activității	activitate	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	4	nmod	_	O
7	,	,	PUNCT	COMMA	_	8	punct	_	O
8	determinate	determinat	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	4	acl	_	O
9	genetic	genetic	ADV	Rgp	Degree=Pos	8	advmod	_	O
10	,	,	PUNCT	COMMA	_	8	punct	_	O
11	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	14	nsubj:pass	_	O
12	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	14	aux	_	O
13	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	14	aux:pass	_	O
14	implicate	implica	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	4	acl	_	O
15	atât	atât	ADV	Rgp	Degree=Pos	17	cc:preconj	_	O
16	ca	ca	ADV	Rc	_	17	advmod	_	O
17	markeri	marker	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	14	obl	_	B-CHEM
18	cât	cât	ADV	Rw	PronType=Int,Rel	21	cc	_	O
19	și	și	CCONJ	Crssp	Polarity=Pos	18	fixed	_	O
20	ca	ca	ADV	Rc	_	21	advmod	_	O
21	mecanisme	mecanism	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	17	conj	_	O
22	patogenetice	patogenetic	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	21	amod	_	O
23	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	24	case	_	O
24	apariția	apariție	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	21	nmod	_	O
25	BDR	BDR	NOUN	Yn	Abbr=Yes	24	nmod	_	B-DISO
26	.	.	PUNCT	PERIOD	_	2	punct	_	O

~~~


