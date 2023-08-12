---
layout: base
title:  'Statistics of parataxis:insert in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `parataxis:insert`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-parataxis.html">parataxis</a></tt>.

183 nodes (0%) are attached to their parents as `parataxis:insert`.

169 instances of `parataxis:insert` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 17.2349726775956.

The following 7 pairs of parts of speech are connected with `parataxis:insert`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (134; 73% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (23; 13% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (22; 12% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 parataxis:insert	color:blue
1	Il	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	expl:subj	_	wordform=il
2	faudra	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
3	encore	encore	ADV	_	_	2	advmod	_	_
4	du	du	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	temps	temps	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	_
6	»	»	PUNCT	_	_	10	punct	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	avait	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	aux:tense	_	SpaceAfter=No
9	-il	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	wordform=il
10	déclaré	déclarer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	2	parataxis:insert	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 parataxis:insert	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	génocide	génocide	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
5	silencieux	silencieux	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	_
6	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	SpaceAfter=No
9	-t-elle	lui	PRON	_	Emph=No|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	wordform=elle
10	soutenu	soutenir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	4	parataxis:insert	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis:insert	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	wordform=la
2	route	route	NOUN	_	Gender=Fem|Number=Sing	4	nsubj	_	_
3	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	cop	_	_
4	longue	long	ADJ	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	prévient	prévenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis:insert	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	représentant	représentant	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
9	de	de	ADP	_	_	11	case	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	pape	pape	NOUN	_	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


