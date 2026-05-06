---
layout: base
title:  'Statistics of parataxis in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `parataxis`

This relation is universal.
There are 1 language-specific subtypes of `parataxis`: <tt><a href="fr_parisstories-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

18 nodes (0%) are attached to their parents as `parataxis`.

18 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.9444444444444.

The following 8 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (6; 33% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (4; 22% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (2; 11% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 parataxis	color:blue
1	ouais	ouais	INTJ	_	_	6	discourse	_	AlignBegin=119290|AlignEnd=119608|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=119608|AlignEnd=119608
3	bah	bah	INTJ	_	_	6	discourse	_	AlignBegin=119608|AlignEnd=119925|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=119925|AlignEnd=119925
5	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	AlignBegin=119925|AlignEnd=120243|Exponence[Number]=Inherent|Exponence[Person]=Inherent
6	pense	penser	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=120243|AlignEnd=120561|Exponence[Person]=Absent|SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	AlignBegin=120561|AlignEnd=120561
8	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	9	nsubj	_	AlignBegin=120561|AlignEnd=120878|Exponence[Number]=Inherent|Exponence[Person]=Inherent
9	as	avoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	parataxis	_	AlignBegin=120878|AlignEnd=121196
10	raison	raison	NOUN	_	Gender=Fem|Number=Sing	9	obj	_	AlignBegin=121196|AlignEnd=121513|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	AlignBegin=121513|AlignEnd=121513
12	sûrement	sûrement	ADV	_	_	6	advmod	_	AlignBegin=121513|AlignEnd=121831|SpaceAfter=No
13	.	.	PUNCT	_	_	6	punct	_	AlignBegin=121831|AlignEnd=121831

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 parataxis	color:blue
1	honnêtement	honnêtement	ADV	_	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	euh	euh	INTJ	_	_	1	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	1	punct	_	_
5	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	reparandum	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	pas	pas	ADV	_	Polarity=Neg	11	advmod	_	_
11	possible	possible	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
12	,	,	PUNCT	_	_	14	punct	_	_
13	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	14	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
14	peux	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	parataxis	_	Exponence[Person]=Absent
15	pas	pas	ADV	_	Polarity=Neg	14	advmod	_	_
16	connaître	connaître	VERB	_	VerbForm=Inf	14	xcomp	_	SpaceAfter=No|Subject=SubjRaising
17	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 15 parataxis	color:blue
1	donc	donc	ADV	_	_	4	advmod	_	_
2	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
3	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	4	iobj	_	Exponence[Person]=Inherent
4	pose	poser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Number]=Absent|Exponence[Person]=Absent
5	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	6	det	_	_
6	questions	question	NOUN	_	Gender=Fem|Number=Plur	4	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
7	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	peu	peu	NOUN	_	Gender=Masc|Number=Sing	9	obl:mod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
9	basiques	basique	ADJ	_	Gender=Fem|Number=Plur	6	amod	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
10	:	:	PUNCT	_	_	15	punct	_	_
11	euh	euh	INTJ	_	_	15	discourse	_	_
12	comment	comment	ADV	_	_	15	advmod	_	_
13	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	15	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
14	t'	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs|Reflex=Yes	15	expl:pv	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
15	appelles	appeler	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	parataxis	_	Exponence[Person]=Absent|SpaceAfter=No
16	?	?	PUNCT	_	_	4	punct	_	_

~~~


