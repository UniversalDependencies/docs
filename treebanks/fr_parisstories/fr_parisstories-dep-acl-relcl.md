---
layout: base
title:  'Statistics of acl:relcl in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-acl.html">acl</a></tt>.

205 nodes (1%) are attached to their parents as `acl:relcl`.

205 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.47317073170732.

The following 17 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (118; 58% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (51; 25% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-DET.html">DET</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_parisstories-pos-X.html">X</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl:relcl	color:blue
1	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	pizzas	pizza	NOUN	_	Gender=Fem|Number=Plur	0	root	_	_
3	énormes	énorme	ADJ	_	Gender=Fem|Number=Plur	2	amod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	qui	qui	PRON	_	PronType=Rel	6	nsubj	_	_
6	font	faire	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	_
7	genre	genre	INTJ	_	_	12	discourse	_	_
8	euh	euh	INTJ	_	_	12	discourse	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	toute	tout	ADJ	_	Gender=Fem|Number=Sing	12	amod	_	_
11	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	12	det	_	SpaceAfter=No
12	assiette	assiette	NOUN	_	Gender=Fem|Number=Sing	6	obj	_	_
13	quoi	quoi	INTJ	_	_	2	discourse	_	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 acl:relcl	color:blue
1	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	y	y	PRON	_	Person=3|PronType=Prs	3	obl:mod	_	_
3	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	5	det	_	_
5	cours	cours	NOUN	_	Gender=Masc|Number=Plur	3	obj	_	_
6	que	que	PRON	_	_	8	obj	_	_
7	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	8	nsubj	_	SpaceAfter=No
8	aime	aimer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	d'	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	11	det	_	SpaceAfter=No
11	autres	autre	PRON	_	Gender=Masc|Number=Plur	5	conj	_	_
12	que	que	PRON	_	_	14	obj	_	_
13	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	14	nsubj	_	SpaceAfter=No
14	aime	aimer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	_
15	moins	moins	ADV	_	_	14	advmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl:relcl	color:blue
1	entre	entre	ADV	_	_	4	advmod	_	_
2	temps	temps	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	_
3	y	y	PRON	_	Person=3|PronType=Prs	4	obl:mod	_	_
4	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
5	Adrien	Adrien	PROPN	_	_	4	obj	_	_
6	qui	qui	PRON	_	_	9	nsubj	_	_
7	nous	le	PRON	_	_	9	obj	_	_
8	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	aux	_	_
9	appelés	appeler	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	5	acl:relcl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


