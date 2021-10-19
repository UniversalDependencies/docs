---
layout: base
title:  'Statistics of ccomp:pred in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `ccomp:pred`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `ccomp`: <tt><a href="fr_spoken-dep-ccomp-obj.html">ccomp:obj</a></tt>, <tt><a href="fr_spoken-dep-ccomp-obl.html">ccomp:obl</a></tt>.

6 nodes (0%) are attached to their parents as `ccomp:pred`.

6 instances of `ccomp:pred` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.16666666666667.

The following 3 pairs of parts of speech are connected with `ccomp:pred`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (4; 67% instances), <tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 17% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp:pred	color:blue
1	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	1	expl:subj	_	_
3	que	que	SCONJ	_	_	5	mark	_	_
4	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	5	nsubj	_	_
5	pourriez	pouvoir	VERB	_	Number=Plur|Person=2	1	ccomp:pred	_	_
6	décrire	décrire	VERB	_	VerbForm=Inf	5	xcomp:obj	_	_
7	euh	euh	INTJ	_	_	6	discourse	_	_
8	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	déplacements	déplacement	NOUN	_	Gender=Masc|Number=Plur	6	obj	_	_
10	avec	avec	ADP	_	_	11	case	_	_
11	précision	précision	NOUN	_	Gender=Fem|Number=Sing	6	obl:mod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp:pred	color:blue
1	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	_	_	2	dep:comp	_	_
4	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
5	deviennes	devenir	VERB	_	Number=Sing|Person=2	3	ccomp:pred	_	_
6	script	script	NOUN	_	Gender=Masc|Number=Sing	7	compound	_	_
7	girl	girl	NOUN	_	Gender=Fem|Number=Sing	5	obj	_	_
8	par	par	ADP	_	_	9	case	_	_
9	exemple	exemple	NOUN	_	Gender=Masc|Number=Sing	2	obl:mod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp:pred	color:blue
1	et	et	CCONJ	_	_	2	cc	_	_
2	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	expl:subj	_	_
4	que	que	SCONJ	_	_	9	mark	_	_
5	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	expl:subj	_	_
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	avec	avec	ADP	_	_	9	case	_	_
8	ces	ce	DET	_	Number=Plur|Person=3|PronType=Dem	9	det	_	_
9	yeux	yeux	NOUN	_	_	2	ccomp:pred	_	_
10	si	si	SCONJ	_	_	12	mark	_	_
11	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	12	nsubj	_	_
12	voulez	vouloir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	9	discourse	_	_
13	dire	dire	VERB	DISCOURSE	VerbForm=Inf	12	xcomp:obj	_	_
14	que	que	SCONJ	_	_	16	mark	_	_
15	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	16	nsubj	_	_
16	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	advcl:cleft	_	_
17	regarder	regarder	VERB	_	VerbForm=Inf	16	xcomp:obj	_	_

~~~


