---
layout: base
title:  'Statistics of iobj in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="fr_sequoia-dep-iobj-agent.html">iobj:agent</a></tt>.

219 nodes (0%) are attached to their parents as `iobj`.

190 instances of `iobj` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.02283105022831.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (211; 96% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (4; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 iobj	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	4	expl:subj	_	_
2	n'	ne	ADV	_	Polarity=Neg	4	advmod	_	SpaceAfter=No
3	y	y	PRON	_	Person=3	4	expl:comp	_	_
4	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	aucun	aucun	DET	_	Gender=Masc|Number=Sing	6	det	_	_
6	motif	motif	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	_
7	pour	pour	ADP	_	_	11	mark	_	_
8	qu'	que	SCONJ	_	_	11	mark	_	SpaceAfter=No
9	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3	11	nsubj	_	_
10	y	y	PRON	_	Person=3	11	iobj	_	_
11	soient	être	VERB	_	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 iobj	color:blue
1	D'	de	ADP	_	_	5	advmod	_	ExtPos=ADV|SpaceAfter=No
2	abord	abord	NOUN	_	Gender=Masc|Number=Sing	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
5	arrive	arriver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	dans	dans	ADP	_	_	8	case	_	_
7	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	pays	pays	NOUN	_	Gender=Masc|Number=Sing	5	obl:arg	_	_
9	où	où	PRON	_	PronType=Rel	12	iobj	_	_
10	tout	tout	PRON	_	Gender=Masc|Number=Sing	12	nsubj	_	_
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	blanc	blanc	ADJ	_	Gender=Masc|Number=Sing	8	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 15 iobj	color:blue
1	Certes	certes	ADV	_	_	21	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	21	punct	_	_
3	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
4	harmonie	harmonie	NOUN	_	Gender=Fem|Number=Sing	21	nsubj	_	_
5	-	-	PUNCT	_	_	4	punct	_	SpaceAfter=No
6	deuxième	deuxième	ADJ	_	Number=Sing|NumType=Ord	7	amod	_	_
7	composante	composante	NOUN	_	Gender=Fem|Number=Sing	4	appos	_	_
8	de	de	ADP	_	_	10	case	_	_
9	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	Harmonie	harmonie	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	_
11	municipale	municipal	ADJ	_	Gender=Fem|Number=Sing	10	amod	_	SpaceAfter=No
12	-	-	PUNCT	_	_	4	punct	_	_
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	cop	_	SpaceAfter=No
14	,	,	PUNCT	_	_	21	punct	_	_
15	elle	soi	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	21	iobj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	21	punct	_	_
17	encore	encore	ADV	_	_	21	advmod	_	_
18	à	à	ADP	_	_	21	case	_	_
19	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
20	grand	grand	ADJ	_	Gender=Masc|Number=Sing	21	amod	_	_
21	complet	complet	NOUN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
22	.	.	PUNCT	_	_	21	punct	_	_

~~~


