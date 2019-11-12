---
layout: base
title:  'Statistics of obj in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `obj`

This relation is universal.
There are 1 language-specific subtypes of `obj`: <tt><a href="fr_partut-dep-obj-agent.html">obj:agent</a></tt>.

1097 nodes (4%) are attached to their parents as `obj`.

897 instances of `obj` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.37739288969918.

The following 12 pairs of parts of speech are connected with `obj`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (853; 78% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (207; 19% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt> (11; 1% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (9; 1% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obj	color:blue
1	Je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	voudrais	vouloir	AUX	VM	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	encore	encore	ADV	B	_	4	advmod	_	_
4	aborder	aborder	VERB	V	VerbForm=Inf	0	root	_	_
5	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	dernier	dernier	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	7	amod	_	_
7	point	point	NOUN	S	Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
8	:	:	PUNCT	FC	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obj	color:blue
1	Cher	cher	ADJ	A	Gender=Masc|Number=Sing	2	amod	_	_
2	collègue	collègue	NOUN	S	Gender=Masc|Number=Sing	5	vocative	_	_
3	nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
4	allons	aller	AUX	VA	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	vérifier	vérifier	VERB	V	VerbForm=Inf	0	root	_	_
6	tout	tout	DET	T	Gender=Masc|Number=Sing|PronType=Tot	7	det	_	_
7	cela	cela	PRON	PD	Number=Sing|Person=3|PronType=Dem	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 obj	color:blue
1	Pour	pour	ADP	E	_	3	mark	_	_
2	en	en	PRON	PE	Person=3|PronType=Prs	3	iobj	_	_
3	apprendre	apprendre	VERB	V	VerbForm=Inf	13	advcl	_	_
4	plus	plus	ADV	B	_	3	advmod	_	_
5	sur	sur	ADP	E	_	7	case	_	_
6	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	bouton	bouton	NOUN	S	Gender=Masc|Number=Sing	3	obl	_	_
8	"	"	PUNCT	FB	_	10	punct	_	SpaceAfter=No
9	s'	se	PRON	P	PronType=Prs	10	expl	_	SpaceAfter=No
10	abonner	abonner	VERB	V	VerbForm=Inf	7	acl	_	SpaceAfter=No
11	"	"	PUNCT	FB	_	10	punct	_	SpaceAfter=No
12	,	,	PUNCT	FF	_	3	punct	_	_
13	consultez	consulter	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
14	les	le	DET	RD	Definite=Def|Number=Plur|PronType=Art	15	det	_	_
15	Aide	Aide	PROPN	SP	_	13	obj	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	13	punct	_	_

~~~


