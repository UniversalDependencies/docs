---
layout: base
title:  'Statistics of vocative in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `vocative`

This relation is universal.
There are 1 language-specific subtypes of `vocative`: <tt><a href="ro_tuecl-dep-vocative-mention.html">vocative:mention</a></tt>.

17 nodes (0%) are attached to their parents as `vocative`.

11 instances of `vocative` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.35294117647059.

The following 7 pairs of parts of speech are connected with `vocative`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (7; 41% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt> (3; 18% instances), <tt><a href="ro_tuecl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (2; 12% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 vocative	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	3	vocative:mention	_	_
2	Te	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	3	obj	_	_
3	pup	pupa	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	dulce	dulce	ADJ	_	Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	3	xcomp	_	_
5	frumusețe	frumusețe	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	3	vocative	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 vocative	color:blue
1	Ok	Ok	ADV	_	Degree=Pos	4	advmod	_	_
2	Alex	Alex	PROPN	_	_	4	vocative	_	_
3	am	avea	AUX	_	Number=Sing|Person=1	4	aux	_	_
4	înțeles	înțelege	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	ca	că	SCONJ	_	Polarity=Pos|Typo=Yes	8	mark	_	CorrectForm=că
6	te-	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak|Variant=Short	8	obj	_	SpaceAfter=No
7	a	avea	AUX	_	Number=Sing|Person=3	8	aux	_	_
8	refuzat	refuza	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	4	ccomp	_	_
9	Maria	Maria	PROPN	_	_	8	nsubj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	14	punct	_	_
11	dar	dar	CCONJ	_	Polarity=Pos	14	cc	_	_
12	asta	acesta	PRON	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	_
13	nu	nu	PART	_	Polarity=Neg	14	advmod	_	_
14	inseamna	înseamnă	VERB	_	Mood=Ind|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	4	conj	_	CorrectForm=înseamnă
15	ca	că	SCONJ	_	Polarity=Pos|Typo=Yes	17	mark	_	CorrectForm=că
16	ii	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Typo=Yes|VerbForm=Fin	17	cop	_	CorrectForm=îi
17	curva	curvă	NOUN	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Typo=Yes	14	xcomp	_	CorrectForm=curvă|SpaceAfter=No
18	😭	😭	SYM	_	_	4	discourse:emo	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 vocative	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	2	vocative:mention	_	_
2	Ahhhhh	Ah	INTJ	_	_	0	root	_	_
3	ce	ce	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	4	obj	_	_
4	bună	bun	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	ccomp	_	_
5	ești	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	cop	_	_
6	drăguța	drăguță	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	vocative	_	_
7	💋	💋	SYM	_	_	2	discourse:emo	_	_
8	💋	💋	SYM	_	_	2	discourse:emo	_	_
9	👅	👅	SYM	_	_	2	discourse:emo	_	SpaceAfter=No
10	👅	👅	SYM	_	_	2	discourse:emo	_	SpaceAfter=No
11	🔥	🔥	SYM	_	_	2	discourse:emo	_	SpaceAfter=No
12	🔥	🔥	SYM	_	_	2	discourse:emo	_	SpaceAfter=No
13	😍	😍	SYM	_	_	2	discourse:emo	_	SpaceAfter=No
14	😍	😍	SYM	_	_	2	discourse:emo	_	_

~~~


