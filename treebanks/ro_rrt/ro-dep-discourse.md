---
layout: base
title:  'Statistics of discourse in UD_Romanian'
udver: '2'
---

## Treebank Statistics: UD_Romanian: Relations: `discourse`

This relation is universal.

20 nodes (0%) are attached to their parents as `discourse`.

11 instances of `discourse` (55%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.55.

The following 12 pairs of parts of speech are connected with `discourse`: <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-INTJ.html">INTJ</a></tt> (5; 25% instances), <tt><a href="ro-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ro-pos-VERB.html">VERB</a></tt> (3; 15% instances), <tt><a href="ro-pos-ADV.html">ADV</a></tt>-<tt><a href="ro-pos-INTJ.html">INTJ</a></tt> (2; 10% instances), <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-CCONJ.html">CCONJ</a></tt> (2; 10% instances), <tt><a href="ro-pos-ADV.html">ADV</a></tt>-<tt><a href="ro-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="ro-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ro-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="ro-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ro-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="ro-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ro-pos-INTJ.html">INTJ</a></tt> (1; 5% instances), <tt><a href="ro-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="ro-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ro-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-SCONJ.html">SCONJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	Vai	vai	INTJ	I	_	2	discourse	_	_
2	pare	părea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	aglomerat	aglomerat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	xcomp	_	SpaceAfter=No
4	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 discourse	color:blue
1	Domnule	domn	NOUN	Ncmsvy	Case=Voc|Definite=Def|Gender=Masc|Number=Sing	7	vocative	_	_
2	sergent	sergent	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	1	punct	_	_
4	dar	dar	CCONJ	Ccssp	Polarity=Pos	0	root	_	_
5	n-	nu	PART	Qz-y	Polarity=Neg|Variant=Short	7	advmod	_	SpaceAfter=No
6	am	avea	AUX	Va--1	Person=1	7	aux	_	_
7	știut	ști	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	4	discourse	_	SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	Ei	ei	INTJ	I	_	7	discourse	_	_
2	bine	bine	ADV	Rgp	Degree=Pos	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	1	punct	_	_
4	nu	nu	PART	Qz	Polarity=Neg	7	advmod	_	_
5	a	avea	AUX	Va--3s	Number=Sing|Person=3	7	aux	_	_
6	fost	fi	AUX	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	7	cop	_	_
7	așa	așa	ADV	Rgp	Degree=Pos	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


