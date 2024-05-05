---
layout: base
title:  'Statistics of ccomp in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="ro_tuecl-dep-ccomp-pmod.html">ccomp:pmod</a></tt>.

102 nodes (2%) are attached to their parents as `ccomp`.

102 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.79411764705882.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (70; 69% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (10; 10% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (9; 9% instances), <tt><a href="ro_tuecl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="ro_tuecl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-INTJ.html">INTJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	4	vocative:mention	_	_
2	Și	și	CCONJ	_	Polarity=Pos	4	cc:preconj	_	_
3	cum	cum	ADV	_	PronType=Int,Rel	4	advmod	_	_
4	facem	face	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	să	să	PART	_	Mood=Sub	7	mark	_	_
6	îți	tu	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	7	expl:poss	_	_
7	văd	vedea	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	ccomp	_	_
8	corpul	corp	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	obj	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 ccomp	color:blue
1	acum	acum	ADV	_	Degree=Pos	3	advmod	_	_
2	e	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	soare	soare	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	acum	acum	ADV	_	Degree=Pos	6	advmod:tmod	_	_
6	dispare	dispărea	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
7	zici	zice	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	conj	_	_
8	ca	că	SCONJ	_	Polarity=Pos|Typo=Yes	10	mark	_	CorrectForm=că
9	e	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	barbat	bărbat	NOUN	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	ccomp	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
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


