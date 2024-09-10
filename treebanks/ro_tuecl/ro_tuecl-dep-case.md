---
layout: base
title:  'Statistics of case in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `case`

This relation is universal.

416 nodes (9%) are attached to their parents as `case`.

413 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18990384615385.

The following 12 pairs of parts of speech are connected with `case`: <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (292; 70% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (52; 13% instances), <tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (30; 7% instances), <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (12; 3% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (10; 2% instances), <tt><a href="ro_tuecl-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (8; 2% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="ro_tuecl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="ro_tuecl-pos-DET.html">DET</a></tt>-<tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	Felul	fel	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
2	întâi	întâi	NUM	_	Number=Sing|NumForm=Word|NumType=Ord	3	nummod	_	_
3	sarmale	sarma	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	1	nmod	_	_
4	iar	iar	CCONJ	_	_	6	cc	_	_
5	la	la	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
6	desert	desert	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	1	conj	_	_
7	buzele	buză	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Plur	6	nmod	_	_
8	tale	tău	PRON	_	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	Degeaba	degeaba	ADV	_	Degree=Pos	3	advmod	_	_
2	ești	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	frumoasă	frumos	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
4	dacă	dacă	SCONJ	_	Polarity=Pos	6	mark	_	_
5	nu	nu	ADV	_	Polarity=Neg	6	advmod	_	_
6	ești	fi	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	advcl	_	_
7	cu	cu	ADP	_	AdpType=Prep|Case=Acc	8	case	_	_
8	mine	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	6	obl	_	_
9	...	...	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
1	Fete	fată	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	3	nsubj	_	_
2	sunt	fi	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	destule	destul	ADJ	_	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	avem	avea	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	conj	_	_
6	nevoie	nevoie	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	5	fixed	_	_
7	doar	doar	ADV	_	Degree=Pos	9	advmod	_	_
8	de	de	ADP	_	AdpType=Prep|Case=Acc	9	case	_	_
9	BMW-uri	BMW	PROPN	_	Number=Plur	5	obl	_	SpaceAfter=No
10	😏	😏	SYM	_	_	3	discourse:emo	_	_

~~~


