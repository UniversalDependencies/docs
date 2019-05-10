---
layout: base
title:  'Statistics of iobj in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="fr_gsd-dep-iobj-agent.html">iobj:agent</a></tt>.

804 nodes (0%) are attached to their parents as `iobj`.

800 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47014925373134.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (776; 97% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (27; 3% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	Elle	elle	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	y	y	PRON	_	_	3	iobj	_	_
3	incarnera	incarner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Poussette	Poussette	PROPN	_	_	3	obj	_	_
6	de	de	ADP	_	_	7	case	_	_
7	Manon	Manon	PROPN	_	_	5	nmod	_	_
8	peu	peu	ADV	_	_	11	advmod	_	_
9	de	de	ADP	_	_	10	case	_	_
10	temps	temps	NOUN	_	Gender=Masc|Number=Sing	8	obl:arg	_	_
11	après	après	ADV	_	_	3	advmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 iobj	color:blue
1	j'	je	PRON	_	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	SpaceAfter=No
2	en	en	PRON	_	Person=3	5	iobj	_	_
3	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	très	très	ADV	_	_	5	advmod	_	_
5	contente	content	ADJ	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 20 iobj	color:blue
1	C'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	5	nsubj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	à	à	ADP	_	_	5	case	_	_
4	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	opinion	opinion	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
6	publique	public	ADJ	_	Gender=Fem|Number=Sing	5	amod	_	_
7	que	que	PRON	_	PronType=Rel	9	iobj	_	_
8	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
9	demande	demander	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
10	protection	protection	NOUN	_	Gender=Fem|Number=Sing	9	obj	_	_
11	et	et	CCONJ	_	_	14	cc	_	_
12	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	14	nsubj	_	_
13	la	le	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	14	obj	_	_
14	demande	demander	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	conj	_	_
15	contre	contre	ADP	_	_	16	case	_	_
16	elle-même	elle-même	PRON	_	Gender=Fem|Number=Sing|Person=3|Reflex=Yes	14	obl	_	SpaceAfter=No
17	,	,	PUNCT	_	_	22	punct	_	_
18	s'	si	SCONJ	_	_	22	mark	_	SpaceAfter=No
19	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	nsubj	_	_
20	en	en	PRON	_	Person=3	22	iobj	_	_
21	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	cop	_	_
22	besoin	besoin	NOUN	_	Gender=Masc|Number=Sing	14	advcl	_	SpaceAfter=No
23	.	.	PUNCT	_	_	5	punct	_	_

~~~


