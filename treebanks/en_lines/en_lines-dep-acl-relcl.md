---
layout: base
title:  'Statistics of acl:relcl in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-acl.html">acl</a></tt>.

766 nodes (1%) are attached to their parents as `acl:relcl`.

766 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.12271540469974.

The following 20 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (591; 77% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (61; 8% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (28; 4% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (28; 4% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (17; 2% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (7; 1% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_lines-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-X.html">X</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	I	I	PRON	PERS-P1SG-NOM	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	have	have	VERB	PRES	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	no	no	DET	NEG	PronType=Neg	4	det	_	_
4	idea	idea	NOUN	SG-NOM	Number=Sing	2	obj	_	_
5	what	what	PRON	WH	PronType=Int	8	dislocated	_	_
6	you	you	PRON	PERS-P2	_	8	nsubj	_	_
7	're	be	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	talking	talk	VERB	ING	Tense=Pres|VerbForm=Part	4	acl:relcl	_	_
9	about	about	ADP	_	_	5	case	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	It	it	PRON	PERS-SG	_	3	nsubj	_	_
2	's	be	AUX	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	all	all	PRON	TOT-SG	Case=Nom	0	root	_	_
4	that	that	PRON	REL	PronType=Rel	6	nsubj	_	_
5	's	be	AUX	PRES-AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	keeping	keep	VERB	ING	Tense=Pres|VerbForm=Part	3	acl:relcl	_	_
7	me	I	PRON	PERS-P1SG-ACC	Case=Acc|Number=Sing|Person=1|PronType=Prs	6	obj	_	_
8	going	go	VERB	ING	Tense=Pres|VerbForm=Part	6	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	He	he	PRON	PERS-P3SG-NOM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	was	be	AUX	PAST	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	3	aux	_	_
3	wearing	wear	VERB	ING	Tense=Pres|VerbForm=Part	0	root	_	_
4	long	long	ADJ	POS	Degree=Pos	6	amod	_	_
5	green	green	ADJ	POS	Degree=Pos	6	amod	_	_
6	robes	robe	NOUN	PL-NOM	Number=Plur	3	obj	_	_
7	which	which	PRON	WH-REL	PronType=Rel	9	nsubj	_	_
8	were	be	AUX	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	9	cop	_	_
9	dusty	dusty	ADJ	POS	Degree=Pos	6	acl:relcl	_	_
10	and	and	CCONJ	_	_	11	cc	_	_
11	travel-worn	travel-worn	ADJ	POS	Degree=Pos	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	3	punct	_	_

~~~


