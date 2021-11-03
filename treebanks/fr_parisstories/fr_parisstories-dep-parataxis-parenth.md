---
layout: base
title:  'Statistics of parataxis:parenth in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `parataxis:parenth`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-parataxis.html">parataxis</a></tt>.

13 nodes (0%) are attached to their parents as `parataxis:parenth`.

7 instances of `parataxis:parenth` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 7 pairs of parts of speech are connected with `parataxis:parenth`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (4; 31% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (4; 31% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 parataxis:parenth	color:blue
1	et	et	CCONJ	_	_	15	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	15	punct	_	_
3	euh	euh	INTJ	_	_	15	discourse	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	jour	jour	NOUN	_	Gender=Masc|Number=Sing	15	obl:mod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	9	nsubj	_	_
9	sait	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	parataxis:parenth	_	_
10	pas	pas	ADV	_	_	9	advmod	_	_
11	pourquoi	pourquoi	ADV	_	_	9	obj	_	SpaceAfter=No
12	,	,	PUNCT	_	_	6	punct	_	_
13	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
14	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	_
15	commencé	commencer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
16	à	à	ADP	_	_	17	mark	_	_
17	péter	péter	VERB	_	VerbForm=Inf	15	xcomp	_	_
18	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	câble	câble	NOUN	_	Gender=Masc|Number=Sing	17	obj	_	SpaceAfter=No
20	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 11 parataxis:parenth	color:blue
1	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	2	nsubj	_	_
2	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
4	impression	impression	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	_
5	qu'	qu'	SCONJ	_	_	6	case	_	SpaceAfter=No
6	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	obj	_	Scrap=Yes|SpaceAfter=No
7	,	,	PUNCT	_	_	15	punct	_	_
8	enfin	enfin	ADV	_	_	15	discourse	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
11	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	15	parataxis:parenth	_	_
12	pas	pas	ADV	_	_	11	advmod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	11	punct	_	_
14	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
15	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
16	sûrement	sûrement	ADV	_	_	15	advmod	_	_
17	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	problème	problème	NOUN	_	Gender=Masc|Number=Sing	15	obj	_	SpaceAfter=No
19	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 17 parataxis:parenth	color:blue
1	donc	donc	ADV	_	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	_
4	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
5	tellement	tellement	ADV	_	_	4	advmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	12	punct	_	_
7	euh	euh	INTJ	_	_	12	discourse	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	12	nsubj	_	_
10	s'	se	PRON	_	Person=3|PronType=Prs	12	dep:comp	_	SpaceAfter=No
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	dit	dire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	reparandum	_	SpaceAfter=No
13	,	,	PUNCT	_	_	20	punct	_	_
14	mais	mais	CCONJ	_	_	20	cc	_	_
15	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	17	nsubj	_	_
16	se	se	PRON	_	Person=3|PronType=Prs	17	dep:comp	_	_
17	trouve	trouver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	parataxis:parenth	_	_
18	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	20	nsubj	_	SpaceAfter=No
19	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	Reported=Yes
20	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	12	ccomp	_	SpaceAfter=No
21	,	,	PUNCT	_	_	22	punct	_	_
22	quoi	quoi	INTJ	_	_	20	discourse	_	SpaceAfter=No
23	.	.	PUNCT	_	_	4	punct	_	_

~~~


