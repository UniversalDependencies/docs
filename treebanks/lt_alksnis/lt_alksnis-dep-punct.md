---
layout: base
title:  'Statistics of punct in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `punct`

This relation is universal.

7192 nodes (19%) are attached to their parents as `punct`.

3929 instances of `punct` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.39780311457175.

The following 15 pairs of parts of speech are connected with `punct`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (3146; 44% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (2028; 28% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (396; 6% instances), <tt><a href="lt_alksnis-pos-X.html">X</a></tt>-<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (371; 5% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (362; 5% instances), <tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt>-<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (251; 3% instances), <tt><a href="lt_alksnis-pos-PART.html">PART</a></tt>-<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (207; 3% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (190; 3% instances), <tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (121; 2% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (79; 1% instances), <tt><a href="lt_alksnis-pos-INTJ.html">INTJ</a></tt>-<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (21; 0% instances), <tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (13; 0% instances), <tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="lt_alksnis-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="lt_alksnis-pos-ADP.html">ADP</a></tt>-<tt><a href="lt_alksnis-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 punct	color:blue
1	Viso	visas	DET	Pgmsgn	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|PronType=Tot	2	det	2:det	_
2	to	tas	DET	Pgmsgn	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	3	obj	3:obj	_
3	išvengti	išvengti	VERB	Vgi-----n--n--	Polarity=Pos|VerbForm=Inf	0	root	0:root	_
4	nusprendus	nuspręsti	VERB	Vgaa----n--n--	Polarity=Pos|Tense=Past|VerbForm=Ger	3	advcl	3:advcl	_
5	dirbti	dirbti	VERB	Vgi-----n--n--	Polarity=Pos|VerbForm=Inf	4	xcomp	4:xcomp	_
6	namuose	namai	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	5	obl	5:obl	SpaceAfter=No
7	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 punct	color:blue
1	Darbas	darbas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
2	namuose	namai	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	1	nmod	1:nmod	_
3	kupinas	kupinas	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	conj	0:root|1:conj	_
4	pagundų	pagunda	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	3	obj	3:obj	SpaceAfter=No
5	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 punct	color:blue
1	Būtinai	būtinai	ADV	Rgp	Degree=Pos	0	root	0:root	_
2	įmonės	įmonė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	3	nmod	3:nmod|5:nmod	_
3	vakarėliuose	vakarėlis	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	1	obl	1:obl	_
4	ir	ir	CCONJ	Cg	_	5	cc	5:cc	_
5	susirinkimuose	susirinkimas	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	3	conj	1:obl|3:conj	SpaceAfter=No
6	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


