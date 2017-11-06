---
layout: base
title:  'Statistics of fixed in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `fixed`

This relation is universal.

165 nodes (1%) are attached to their parents as `fixed`.

160 instances of `fixed` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04848484848485.

The following 17 pairs of parts of speech are connected with `fixed`: <tt><a href="ro_nonstandard-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_nonstandard-pos-ADP.html">ADP</a></tt> (75; 45% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-PART.html">PART</a></tt> (44; 27% instances), <tt><a href="ro_nonstandard-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (13; 8% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-ADP.html">ADP</a></tt> (7; 4% instances), <tt><a href="ro_nonstandard-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (5; 3% instances), <tt><a href="ro_nonstandard-feat-AUX.html">AUX</a></tt>-<tt><a href="ro_nonstandard-pos-PART.html">PART</a></tt> (4; 2% instances), <tt><a href="ro_nonstandard-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ro_nonstandard-pos-ADP.html">ADP</a></tt> (3; 2% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_nonstandard-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_nonstandard-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt>-<tt><a href="ro_nonstandard-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-PART.html">PART</a></tt>-<tt><a href="ro_nonstandard-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	DE	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	ref=MATT.title
2	LA	la	ADP	Spsa	AdpType=Prep|Case=Acc	1	fixed	_	ref=MATT.title
3	MATTEIU	MATEI	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	ref=MATT.title
4	SFÎNTA	sfânt	ADJ	Afpfsry	Case=Acc,Nom|Definite=Def|Degree=Pos|Gender=Fem|	5	amod	_	ref=MATT.title
5	EVANGHELIE	evanghelie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	ref=MATT.title
6	.	.	PUNCT	PERIOD	_	5	punct	_	ref=MATT.title

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Aceasta	acesta	PRON	Pd3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	ref=MATT 1.22
2	tot	tot	ADV	Rg	_	3	advmod	_	ref=MATT 1.22
3	fu	fi	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT 1.22
4	ca	ca	ADV	Rg	_	7	mark	_	ref=MATT 1.22
5	să	să	PART	Qs	PartType=Sub	4	fixed	_	ref=MATT 1.22
6	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Refl|Strength=Weak	7	expl:pass	_	ref=MATT 1.22
7	împle	umple	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	_	ref=MATT 1.22
8	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		9	obj	_
9	zice	zice	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	mark	_	ref=MATT 1.22
10	Domnul	domn	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubj	_	ref=MATT 1.22
11	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	ref=MATT 1.22
12	prorocul	proroc	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	obl	_	ref=MATT 1.22
13	zicînd	zice	VERB	Vmg-----p	Mood=Ger|Polarity=Pos|VerbForm=Fin	9	advcl	_	ref=MATT 1.22
14	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT 1.22

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 fixed	color:blue
1	Iată	iată	INTJ	I	_	3	discourse	_	ref=MATT 10.16
2	Eu	eu	PRON	Pp1-sr	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	ref=MATT 10.16
3	trimet	trimite	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	ref=MATT 10.16
4	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	ref=MATT 10.16
5	voi	tu	PRON	Pp2-pa--------s	Case=Acc|Number=Plur|Person=2|PronType=Prs|Strength=Strong	3	nmod:pmod	_	ref=MATT 10.16
6	,	,	PUNCT	COMMA	_	8	punct	_	ref=MATT 10.16
7	ca	ca	ADV	Rg	_	8	case	_	ref=MATT 10.16
8	oile	oaie	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	3	obl	_	ref=MATT 10.16
9	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	ref=MATT 10.16
10	mijlocul	mijloc	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	fixed	_	ref=MATT 10.16
11	lupilor	lup	NOUN	Ncmpoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur	8	nmod	_	ref=MATT 10.16
12	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT 10.16

~~~


