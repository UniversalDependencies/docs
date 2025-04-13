---
layout: base
title:  'Statistics of nummod in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `nummod`

This relation is universal.

27 nodes (1%) are attached to their parents as `nummod`.

22 instances of `nummod` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40740740740741.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-NUM.html">NUM</a></tt> (20; 74% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NUM.html">NUM</a></tt> (4; 15% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="ro_tuecl-pos-SYM.html">SYM</a></tt>-<tt><a href="ro_tuecl-pos-NUM.html">NUM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
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
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 nummod	color:blue
1	nu	nu	PART	_	Polarity=Neg	2	advmod	_	_
2	zic	zice	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	că	că	SCONJ	_	Polarity=Pos	5	mark	_	_
4	ești	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	grasă	gras	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	ccomp	_	SpaceAfter=No
6	,	,	PUNCT	_	_	16	punct	_	_
7	dar	dar	CCONJ	_	Polarity=Pos	16	cc	_	_
8	pe	pe	ADP	_	AdpType=Prep|Case=Acc	10	case	_	_
9	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	10	det	_	_
10	scară	scară	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	16	obl	_	_
11	de	de	ADP	_	AdpType=Prep|Case=Acc	13	case	_	_
12	la	la	ADP	_	AdpType=Prep|Case=Acc	11	fixed	_	_
13	1	1	NUM	_	Number=Sing|NumForm=Digit|NumType=Card	10	nummod	_	_
14	la	la	ADP	_	AdpType=Prep|Case=Acc	15	case	_	_
15	10	10	NUM	_	Number=Sing|NumForm=Digit|NumType=Card	16	nummod	_	_
16	rupi	rupe	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	conj	_	_
17	9	9	NUM	_	Number=Sing|NumForm=Digit|NumType=Card	18	nummod	_	_
18	trepte	treaptă	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	16	obj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nummod	color:blue
1	Nu	nu	PART	_	Polarity=Neg	4	advmod	_	_
2	te	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	4	obj	_	_
3	mai	mai	ADV	_	_	4	advmod	_	_
4	crede	crede	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	secsi	sexy	NOUN	_	Foreign=Yes|Number=Sing	4	obj	_	CorrectForm=sexy|SpaceAfter=No|Lang=en
6	,	,	PUNCT	_	_	10	punct	_	_
7	după	după	ADP	_	AdpType=Prep|Case=Acc	10	mark	_	_
8	30	30	NUM	_	Number=Sing|NumForm=Digit|NumType=Card	10	nummod	_	_
9	ești	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	uzată	uzat	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	4	advcl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


