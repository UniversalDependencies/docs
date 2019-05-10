---
layout: base
title:  'Statistics of cc in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `cc`

This relation is universal.

1219 nodes (3%) are attached to their parents as `cc`.

1195 instances of `cc` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.9532403609516.

The following 14 pairs of parts of speech are connected with `cc`: <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (605; 50% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (408; 33% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (85; 7% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (30; 2% instances), <tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (29; 2% instances), <tt><a href="lt_alksnis-pos-X.html">X</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (21; 2% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (15; 1% instances), <tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (9; 1% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-SCONJ.html">SCONJ</a></tt> (8; 1% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-PART.html">PART</a></tt>-<tt><a href="lt_alksnis-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_alksnis-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Būtinai	būtinai	ADV	Rgp	Degree=Pos	0	root	0:root	_
2	įmonės	įmonė	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	3	nmod	3:nmod|5:nmod	_
3	vakarėliuose	vakarėlis	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	1	obl	1:obl	_
4	ir	ir	CCONJ	Cg	_	5	cc	5:cc	_
5	susirinkimuose	susirinkimas	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	3	conj	1:obl|3:conj	SpaceAfter=No
6	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	Mes	aš	PRON	Pg-pnn	Case=Nom|Definite=Ind|Number=Plur|Person=1|PronType=Prs	0	root	0:root	_
2	nepanikuoti	nepanikuoti	VERB	Vgi-----y--n--	Polarity=Neg|VerbForm=Inf	1	xcomp	1:xcomp	_
3	ir	ir	CCONJ	Cg	_	4	cc	4:cc	_
4	vengti	vengti	VERB	Vgi-----n--n--	Polarity=Pos|VerbForm=Inf	2	conj	1:xcomp|2:conj	_
5	rizikingų	rizikingas	ADJ	Agpmpgn	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	6	amod	6:amod	_
6	sprendimų	sprendimas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	4	obj	4:obj	SpaceAfter=No
7	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	paprasta	paprastas	ADJ	Agpfsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	0:root	_
2	ir	ir	CCONJ	Cg	_	3	cc	3:cc	_
3	spontaniška	spontaniškas	ADJ	Agpfsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	conj	0:root|1:conj	_
4	ši	šis	DET	Pgfsnn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|PronType=Dem	5	det	5:det	_
5	kalba	kalba	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	1:nsubj	_
6	yra	būti	VERB	Vgmp3s--n--ni-	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	csubj	1:csubj	_
7	tik	tik	PART	Qg	_	9	advmod:emph	9:advmod:emph	_
8	iš	iš	ADP	Sgg	AdpType=Prep|Case=Gen	10	case	10:case	_
9	pirmo	pirmas	ADJ	Momsgln	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	10	amod	10:amod	_
10	žvilgsnio	žvilgsnis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	1	obl	1:obl	SpaceAfter=No
11	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


