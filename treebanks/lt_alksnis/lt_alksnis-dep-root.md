---
layout: base
title:  'Statistics of root in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `root`

This relation is universal.

2355 nodes (6%) are attached to their parents as `root`.

2355 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.94097664543524.

The following 14 pairs of parts of speech are connected with `root`: -<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (830; 35% instances), -<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (727; 31% instances), -<tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt> (206; 9% instances), -<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (129; 5% instances), -<tt><a href="lt_alksnis-pos-PART.html">PART</a></tt> (121; 5% instances), -<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (102; 4% instances), -<tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt> (85; 4% instances), -<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (53; 2% instances), -<tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt> (51; 2% instances), -<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (31; 1% instances), -<tt><a href="lt_alksnis-pos-X.html">X</a></tt> (11; 0% instances), -<tt><a href="lt_alksnis-pos-INTJ.html">INTJ</a></tt> (6; 0% instances), -<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), -<tt><a href="lt_alksnis-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Viso	visas	DET	Pgmsgn	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|PronType=Tot	2	det	2:det	_
2	to	tas	DET	Pgmsgn	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	3	obj	3:obj	_
3	išvengti	išvengti	VERB	Vgi-----n--n--	Polarity=Pos|VerbForm=Inf	0	root	0:root	_
4	nusprendus	nuspręsti	VERB	Vgaa----n--n--	Polarity=Pos|Tense=Past|VerbForm=Ger	3	advcl	3:advcl	_
5	dirbti	dirbti	VERB	Vgi-----n--n--	Polarity=Pos|VerbForm=Inf	4	xcomp	4:xcomp	_
6	namuose	namai	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	5	obl	5:obl	SpaceAfter=No
7	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	namuose	namai	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	0	root	0:root	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Būtinai	būtinai	ADV	Rgp	Degree=Pos	0	root	0:root	_
2	įmonės	įmonė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	3	nmod	3:nmod|5:nmod	_
3	vakarėliuose	vakarėlis	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	1	obl	1:obl	_
4	ir	ir	CCONJ	Cg	_	5	cc	5:cc	_
5	susirinkimuose	susirinkimas	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	3	conj	1:obl|3:conj	SpaceAfter=No
6	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


