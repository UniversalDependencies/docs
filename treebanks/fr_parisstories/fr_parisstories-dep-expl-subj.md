---
layout: base
title:  'Statistics of expl:subj in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `expl:subj`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `expl`: <tt><a href="fr_parisstories-dep-expl-comp.html">expl:comp</a></tt>, <tt><a href="fr_parisstories-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="fr_parisstories-dep-expl-pv.html">expl:pv</a></tt>.

314 nodes (1%) are attached to their parents as `expl:subj`.

304 instances of `expl:subj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.37261146496815.

The following 6 pairs of parts of speech are connected with `expl:subj`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (269; 86% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (15; 5% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (15; 5% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (10; 3% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl:subj	color:blue
1	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl:subj	_	Exponence[Person]=Inherent
2	y	y	PRON	_	Person=3|PronType=Prs	3	expl:comp	_	Exponence[Person]=Inherent
3	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	Exponence[Number]=Absent|Exponence[Person]=Absent
4	beaucoup	beaucoup	ADV	_	_	3	obj	_	_
5	de	de	ADP	_	_	6	case	_	_
6	violences	violence	NOUN	_	Gender=Fem|Number=Plur	4	nmod	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
7	sexuelles	sexuel	ADJ	_	Gender=Fem|Number=Plur	6	amod	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison
8	là-bas	là-bas	ADV	_	_	3	advmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	en	en	ADP	_	ExtPos=ADV	3	discourse	_	Idiom=Yes
11	fait	fait	NOUN	_	Gender=Masc|Number=Sing	10	fixed	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|InIdiom=Yes|SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 expl:subj	color:blue
1	donc	donc	ADV	_	_	5	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=NotInThisDialect|HasSpokenNumber=OnlyWithLiaison
6	qu'	que	SCONJ	_	_	10	mark	_	SpaceAfter=No
7	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	10	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	_
9	toujours	toujours	ADV	_	_	10	advmod	_	_
10	resté	rester	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	5	csubj	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
11	là-dessus	là	ADV	_	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 expl:subj	color:blue
1	et	et	CCONJ	_	_	4	cc	_	_
2	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
3	me	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	4	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
4	dis	dire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent|SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	_	_
6	oh	oh	INTJ	_	_	8	discourse	_	_
7	mon	son	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	8	det	_	HasSpokenGender=OnlySingExceptWithLiaison
8	dieu	dieu	NOUN	_	ExtPos=INTJ|Gender=Masc|Number=Sing	10	discourse	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
9	mais	mais	CCONJ	_	_	10	cc	_	_
10	qu'	que	PRON	_	PronType=Int	4	ccomp	_	SpaceAfter=No
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	Reported=Yes|SpaceAfter=No
12	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	10	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
13	qu'	que	SCONJ	_	_	17	mark	_	SpaceAfter=No
14	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	17	nsubj	_	Exponence[Person]=Inherent
15	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	17	expl:pv	_	Exponence[Person]=Inherent|SpaceAfter=No
16	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	aux:tense	_	Filler=obj
17	passé	passer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	10	advcl:cleft	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
18	?	?	PUNCT	_	_	4	punct	_	_

~~~


