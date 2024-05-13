---
layout: base
title:  'Statistics of punct in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `punct`

This relation is universal.

2510 nodes (10%) are attached to their parents as `punct`.

1314 instances of `punct` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.27689243027888.

The following 17 pairs of parts of speech are connected with `punct`: <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (1014; 40% instances), <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (668; 27% instances), <tt><a href="ga-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (137; 5% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (137; 5% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (116; 5% instances), <tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (91; 4% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (75; 3% instances), <tt><a href="ga-pos-ADP.html">ADP</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (72; 3% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (67; 3% instances), <tt><a href="ga-pos-NUM.html">NUM</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (41; 2% instances), <tt><a href="ga-pos-ADV.html">ADV</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (36; 1% instances), <tt><a href="ga-pos-PART.html">PART</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (20; 1% instances), <tt><a href="ga-pos-AUX.html">AUX</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (17; 1% instances), <tt><a href="ga-pos-DET.html">DET</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (8; 0% instances), <tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (8; 0% instances), <tt><a href="ga-pos-SYM.html">SYM</a></tt>-<tt><a href="ga-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 punct	color:blue
1	Ansin	ansin	ADV	Loc	_	6	advmod	_	_
2	nach	is	AUX	Cop	Mood=Int|Polarity=Neg|Tense=Pres|VerbForm=Cop	6	cop	_	_
3	deas	deas	ADJ	Adj	Degree=Pos	6	xcomp:pred	_	_
4	mar	mar	SCONJ	Subord	_	6	mark	_	_
5	a	a	PART	Vb	PartType=Vb|PronType=Rel	6	mark:prt	_	_
6	bheadh	bí	VERB	Cond	Form=Len|Mood=Cnd	0	root	_	_
7	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	scéal	scéal	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	_
9	a'm	ag	ADP	Prep	Number=Sing|Person=1	6	obl:prep	_	SpaceAfter=No
10	?	?	PUNCT	?	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 punct	color:blue
1	Limistéar	limistéar	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Meánmhara	muir	NOUN	Noun	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	compound	_	_
4	is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	5	cop	_	_
5	áit	áit	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	1	ccomp	_	_
6	dúcháis	dúchas	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	5	compound	_	_
7	don	do	ADP	Art	Number=Sing|PronType=Art	9	case	_	_
8	Rós	Rós	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	9	compound	_	_
9	Mhuire	Muire	PROPN	Noun	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 punct	color:blue
1	Agus	agus	CCONJ	Coord	_	0	root	_	_
2	as	as	ADP	Simp	_	4	case	_	_
3	go	go	ADP	Simp	_	4	case	_	_
4	brách	brách	NOUN	Subst	Number=Sing	1	nmod	_	_
5	leo	le	ADP	Prep	Number=Plur|Person=3	4	obl:prep	_	SpaceAfter=No
6	.	.	PUNCT	.	_	1	punct	_	_

~~~


