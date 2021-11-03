---
layout: base
title:  'Statistics of parataxis:parenth in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `parataxis:parenth`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="fr_rhapsodie-dep-parataxis-insert.html">parataxis:insert</a></tt>.

39 nodes (0%) are attached to their parents as `parataxis:parenth`.

30 instances of `parataxis:parenth` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.46153846153846.

The following 16 pairs of parts of speech are connected with `parataxis:parenth`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (10; 26% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (7; 18% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (5; 13% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (3; 8% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 parataxis:parenth	color:blue
1	et	et	CCONJ	_	_	6	cc	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	SpaceAfter=No
3	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	expl:subj	_	_
4	qu'	que	SCONJ	_	_	6	mark	_	SpaceAfter=No
5	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
6	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	que	que	SCONJ	_	_	9	mark	_	_
8	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	SpaceAfter=No
9	aie	avoir	VERB	_	Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	ccomp	_	SpaceAfter=No
10	,	,	PUNCT	_	_	14	punct	_	_
11	parce	parce	SCONJ	_	_	14	mark	_	ExtPos=SCONJ|Idiom=Yes
12	que	que	SCONJ	_	_	11	fixed	_	InIdiom=Yes
13	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	14	nsubj	_	SpaceAfter=No
14	aime	aimer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	parataxis:parenth	_	_
15	pas	pas	ADV	_	Polarity=Neg	16	advmod	_	_
16	trop	trop	ADV	_	_	14	advmod	_	SpaceAfter=No
17	,	,	PUNCT	_	_	19	punct	_	_
18	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	frange	frange	NOUN	_	Gender=Fem|Number=Sing	9	obj	_	_
20	tout	tout	ADV	_	_	21	advmod	_	_
21	autour	autour	ADV	_	_	19	advmod	_	_
22	encore	encore	ADV	_	_	9	advmod	_	_
23	?	?	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 12 parataxis:parenth	color:blue
1	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	tendance	tendance	NOUN	_	Gender=Fem|Number=Sing	6	nsubj	_	_
3	dans	dans	ADP	_	_	5	case	_	_
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	médias	média	NOUN	_	Gender=Masc|Number=Plur	2	nmod	_	_
6	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	plutôt	plutôt	ADV	_	_	16	advmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	12	nsubj	_	_
10	l'	le	PRON	_	Number=Sing|Person=3|PronType=Prs	12	obj	_	SpaceAfter=No
11	avez	avoir	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	vu	voir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	16	parataxis:parenth	_	SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	de	de	ADP	_	_	16	case	_	_
15	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	côté	côté	NOUN	_	Gender=Masc|Number=Sing	6	obl:arg	_	_
17	d'	de	ADP	_	_	20	case	_	SpaceAfter=No
18	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
19	léger	léger	ADJ	_	Gender=Masc|Number=Sing	20	amod	_	_
20	assoupissement	assoupissement	NOUN	_	Gender=Masc|Number=Sing	16	nmod	_	SpaceAfter=No
21	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis:parenth	color:blue
1	ensuite	ensuite	ADV	_	_	15	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	_
3	euh	euh	INTJ	_	_	1	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	disons	dire	VERB	_	Mood=Imp|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis:parenth	_	_
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	mots	mot	NOUN	_	Gender=Masc|Number=Plur	5	obj	_	_
8	comme	comme	SCONJ	_	_	10	mark	_	_
9	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	_
10	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	acl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	1	punct	_	_
12	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	15	nsubj:pass	_	_
13	avez	avoir	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	15	aux	_	_
14	été	être	AUX	DoubleAux	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	15	aux:pass	_	_
15	ruinée	ruiner	VERB	DoubleAux	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
16	.	.	PUNCT	_	_	15	punct	_	_

~~~


