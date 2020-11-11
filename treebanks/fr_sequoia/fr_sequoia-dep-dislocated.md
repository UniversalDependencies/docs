---
layout: base
title:  'Statistics of dislocated in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `dislocated`

This relation is universal.

17 nodes (0%) are attached to their parents as `dislocated`.

9 instances of `dislocated` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.76470588235294.

The following 8 pairs of parts of speech are connected with `dislocated`: <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (6; 35% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (3; 18% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (2; 12% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 dislocated	color:blue
1	Qu'	que	PRON	_	PronType=Int	0	root	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	-ce	ce	PRON	_	Number=Sing|Person=3	1	expl:subj	_	_
4	que	que	SCONJ	_	_	5	mark	_	_
5	Angiox	Angiox	PROPN	_	_	1	dislocated	_	_
6	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 dislocated	color:blue
1	Ce	ce	PRON	_	_	8	dislocated	_	_
2	que	que	PRON	_	PronType=Rel	4	obj	_	_
3	nous	il	PRON	_	Number=Plur|Person=1	4	nsubj	_	_
4	voulons	vouloir	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
5	surtout	surtout	ADV	_	_	4	advmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	c'	ce	PRON	_	Number=Sing|Person=3	8	expl:subj	_	SpaceAfter=No
8	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	économiser	économiser	VERB	_	VerbForm=Inf	8	xcomp	_	_
10	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	combustibles	combustible	NOUN	_	Gender=Masc|Number=Plur	9	obj	_	_
12	fossiles	fossile	ADJ	_	Number=Plur	11	amod	_	SpaceAfter=No
13	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 3 dislocated	color:blue
1	Faire	faire	AUX	_	VerbForm=Inf	3	aux:caus	_	_
2	s'	se	PRON	_	Person=3|Reflex=Yes	3	expl:comp	_	SpaceAfter=No
3	exprimer	exprimer	VERB	_	VerbForm=Inf	13	dislocated	_	_
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	enfants	enfant	NOUN	_	Number=Plur	3	obj:agent	_	_
6	à	à	ADP	_	_	9	case	_	ExtPos=ADP
7	travers	travers	NOUN	_	Gender=Masc	6	fixed	_	_
8	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
9	activité	activité	NOUN	_	Gender=Fem|Number=Sing	3	obl:mod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	c'	ce	PRON	_	Number=Sing|Person=3	13	expl:subj	_	SpaceAfter=No
12	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
13	important	important	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
14	.	.	PUNCT	_	_	13	punct	_	_

~~~


