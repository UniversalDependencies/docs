---
layout: base
title:  'Statistics of punct in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `punct`

This relation is universal.

474 nodes (11%) are attached to their parents as `punct`.

273 instances of `punct` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.64767932489451.

The following 11 pairs of parts of speech are connected with `punct`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PUNCT.html">PUNCT</a></tt> (251; 53% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-PUNCT.html">PUNCT</a></tt> (126; 27% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-PUNCT.html">PUNCT</a></tt> (44; 9% instances), <tt><a href="ro_tuecl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_tuecl-pos-PUNCT.html">PUNCT</a></tt> (15; 3% instances), <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-PUNCT.html">PUNCT</a></tt> (14; 3% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-PUNCT.html">PUNCT</a></tt> (14; 3% instances), <tt><a href="ro_tuecl-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_tuecl-pos-PUNCT.html">PUNCT</a></tt> (3; 1% instances), <tt><a href="ro_tuecl-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_tuecl-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_tuecl-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="ro_tuecl-pos-X.html">X</a></tt>-<tt><a href="ro_tuecl-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="ro_tuecl-pos-SYM.html">SYM</a></tt>-<tt><a href="ro_tuecl-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 15 punct	color:blue
1	Îți	tu	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	2	iobj	_	_
2	urez	ura	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	4	det	_	_
4	noapte	noapte	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	obj	_	_
5	că	că	SCONJ	_	Polarity=Pos	8	mark	_	_
6	dacă	dacă	SCONJ	_	Polarity=Pos	8	mark	_	_
7	era	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	bună	bun	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	10	advcl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	erai	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Imp|VerbForm=Fin	2	ccomp:pmod	_	_
11	în	în	ADP	_	AdpType=Prep|Case=Acc	12	case	_	_
12	pat	pat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	10	obl	_	_
13	cu	cu	ADP	_	AdpType=Prep|Case=Acc	14	case	_	_
14	mine	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	10	obl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 punct	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 punct	color:blue
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


