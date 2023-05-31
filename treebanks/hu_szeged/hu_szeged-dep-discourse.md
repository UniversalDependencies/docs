---
layout: base
title:  'Statistics of discourse in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `discourse`

This relation is universal.

12 nodes (0%) are attached to their parents as `discourse`.

7 instances of `discourse` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.08333333333333.

The following 5 pairs of parts of speech are connected with `discourse`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-INTJ.html">INTJ</a></tt> (6; 50% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-INTJ.html">INTJ</a></tt> (3; 25% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-INTJ.html">INTJ</a></tt> (1; 8% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-INTJ.html">INTJ</a></tt> (1; 8% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Persze	persze	INTJ	_	_	4	discourse	_	orig_deprel=advmod:mode
2	mindenki	mindenki	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Tot	4	nsubj	_	_
3	maga	maga	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	conj	_	_
4	dönti	dönt	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	el	el	ADV	_	_	4	compound:preverb	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	hogyan	hogyan	ADV	_	PronType=Int	8	advmod:mode	_	_
8	él	él	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp:obj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	12	punct	_	_
10	milyen	milyen	DET	_	Definite=Def|PronType=Int	11	det	_	_
11	áron	ár	NOUN	_	Case=Sup|Number=Sing	12	obl	_	_
12	marad	marad	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	_
13	életben	élet	NOUN	_	Case=Ine|Number=Sing	12	obl	_	SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 discourse	color:blue
1	Egy	egy	NUM	_	Case=Nom|Number=Sing|NumType=Card	2	nummod	_	_
2	szó	szó	NOUN	_	Case=Nom|Number=Sing	7	parataxis	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	mint	mint	SCONJ	_	_	5	mark	_	_
5	száz	száz	NUM	_	Case=Nom|Number=Sing|NumType=Card	2	advcl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	2	punct	_	_
7	képviselő	képviselő	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
8	nem	nem	ADV	_	PronType=Neg	7	advmod	_	_
9	lehet	lesz	AUX	_	Definite=Ind|Mood=Pot|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	ellenben	ellenben	CCONJ	_	_	12	cc	_	_
12	díszvendég	díszvendég	NOUN	_	Case=Nom|Number=Sing	7	conj	_	_
13	igen	igen	INTJ	_	_	12	discourse	_	orig_deprel=advmod:mode|SpaceAfter=No
14	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 discourse	color:blue
1	Ami	ami	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Rel	3	nsubj	_	_
2	persze	persze	INTJ	_	_	3	discourse	_	orig_deprel=advmod:mode
3	értelmezhető	értelmezhető	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|VerbForm=PartPres	0	root	_	_
4	egyszerű	egyszerű	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	6	amod:att	_	_
5	szavazatszerző	szavazatszerző	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|VerbForm=PartPres	6	amod:att	_	_
6	kampányfogásként	kampányfogás	NOUN	_	Case=Abs|Number=Sing	3	obl	_	_
7	—	—	PUNCT	_	_	10	punct	_	_
8	de	de	CCONJ	_	_	10	cc	_	_
9	jól	jól	ADV	_	Degree=Pos	10	advmod:mode	_	_
10	mutatja	mutat	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
11	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
12	szociáldemokraták	szociáldemokrata	NOUN	_	Case=Nom|Number=Plur	15	nmod:att	_	_
13	hosszabb	hosszú	ADJ	_	Case=Nom|Degree=Cmp|Number=Sing	14	amod:att	_	_
14	távú	távú	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	15	amod:att	_	_
15	dilemmáit	dilemma	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	10	obj	_	_
16	és	és	CCONJ	_	_	17	cc	_	_
17	megosztottságát	megosztottság	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	15	conj	_	_
18	is	is	CCONJ	_	_	15	cc	_	SpaceAfter=No|ToDo=cc-after-conj
19	.	.	PUNCT	_	_	3	punct	_	_

~~~


