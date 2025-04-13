---
layout: base
title:  'Statistics of dep:comp in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-dep.html">dep</a></tt>.

27 nodes (0%) are attached to their parents as `dep:comp`.

19 instances of `dep:comp` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.51851851851852.

The following 13 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt> (7; 26% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (5; 19% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (2; 7% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (2; 7% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt>-<tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-DET.html">DET</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 dep:comp	color:blue
1	euh	euh	INTJ	_	_	3	discourse	_	_
2	qu'	que	PRON	_	PronType=Int	3	xcomp	_	SpaceAfter=No
3	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	expl:subj	_	_
5	qu'	que	SCONJ	_	_	8	dep:comp	_	SpaceAfter=No
6	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	8	nsubj	_	_
7	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:tense	_	_
8	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	advcl:cleft	_	_
9	bah	bah	INTJ	_	_	3	discourse	_	SpaceAfter=No
10	,	,	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 dep:comp	color:blue
1	tu	toi	PRON	_	Number=Sing|Person=2|PronType=Prs	4	nsubj	_	AlignBegin=13720|AlignEnd=13860
2	t'	toi	PRON	_	Number=Sing|Person=2|PronType=Prs	4	dep:comp	_	AlignBegin=13860|AlignEnd=14000|SpaceAfter=No
3	en	en	PRON	_	Person=3|PronType=Prs	4	obj	_	AlignBegin=14000|AlignEnd=14139
4	souviens	souvenir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=14139|AlignEnd=14279
5	encore	encore	ADV	_	_	4	advmod	_	AlignBegin=14279|AlignEnd=14419
6	?	?	PUNCT	_	_	4	punct	_	AlignBegin=14419|AlignEnd=14419

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 dep:comp	color:blue
1	elle	lui	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	reparandum	_	_
3	vraiment	vraiment	ADV	_	_	2	advmod	_	_
4	euh	euh	INTJ	_	_	16	discourse	_	_
5	pour	pour	ADP	_	_	13	reparandum	_	_
6	euh	euh	INTJ	_	_	9	discourse	_	_
7	pour	pour	ADP	_	_	9	case	_	_
8	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	élèves	élève	NOUN	_	Gender=Masc|Number=Plur	13	reparandum	_	_
10	euh~	euh~	INTJ	_	_	13	discourse	_	_
11	enfin	enfin	ADV	_	ExtPos=INTJ	13	discourse	_	_
12	pour	pour	ADP	_	_	13	case	_	_
13	nous	nous	PRON	_	Number=Plur|Person=1|PronType=Prs	16	obl:arg	_	SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	elle	lui	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	16	nsubj	_	_
16	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
17	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	début	début	NOUN	_	Gender=Masc|Number=Sing	16	xcomp	_	_
19	de	de	ADP	_	_	20	dep:comp	_	_
20	tout	tout	ADP	_	_	18	dep	_	SpaceAfter=No
21	.	.	PUNCT	_	_	16	punct	_	_

~~~


