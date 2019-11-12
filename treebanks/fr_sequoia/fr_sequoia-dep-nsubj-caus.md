---
layout: base
title:  'Statistics of nsubj:caus in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fr_sequoia-dep-nsubj-pass.html">nsubj:pass</a></tt>.

16 nodes (0%) are attached to their parents as `nsubj:caus`.

16 instances of `nsubj:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.625.

The following 3 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (12; 75% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (3; 19% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:caus	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	conteur	conteur	NOUN	_	Gender=Masc|Number=Sing	5	nsubj:caus	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
4	fait	faire	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	aux:caus	_	_
5	jouer	jouer	VERB	_	VerbForm=Inf	0	root	_	_
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	_
7	enfants	enfant	NOUN	_	Number=Plur	5	obj:agent	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:caus	color:blue
1	Ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3	5	nsubj:caus	_	_
2	lui	lui	PRON	_	Number=Sing|Person=3	5	iobj:agent	_	_
3	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
4	fait	faire	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	aux:caus	_	_
5	subir	subir	VERB	_	VerbForm=Inf	0	root	_	_
6	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	7	det	_	_
7	chocs	choc	NOUN	_	Gender=Masc|Number=Plur	5	obj	_	_
8	électriques	électrique	ADJ	_	Number=Plur	7	amod	_	_
9	sur	sur	ADP	_	_	11	case	_	_
10	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	11	det	_	_
11	parties	partie	NOUN	_	Gender=Fem|Number=Plur	5	obl:mod	_	_
12	sensibles	sensible	ADJ	_	Number=Plur	11	amod	_	_
13	de	de	ADP	_	_	15	case	_	_
14	son	son	DET	_	Number=Sing|Poss=Yes	15	det	_	_
15	corps	corps	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:caus	color:blue
1	Alfred	Alfred	PROPN	_	Gender=Masc|Number=Sing	4	nsubj:caus	_	_
2	Sirven	Sirven	PROPN	_	_	1	flat:name	_	_
3	fait	faire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:caus	_	_
4	payer	payer	VERB	_	VerbForm=Inf	0	root	_	_
5	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	partie	partie	NOUN	_	Gender=Fem|Number=Sing	4	obj	_	_
7	de	de	ADP	_	_	9	case	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	commission	commission	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	_
10	promise	promettre	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	9	acl	_	_
11	par	par	ADP	_	_	13	case	_	_
12	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	13	det	_	_
13	fonds	fonds	NOUN	_	Gender=Masc|Number=Plur	4	obl:agent	_	_
14	secrets	secret	ADJ	_	Gender=Masc|Number=Plur	13	amod	_	_
15	d'	de	ADP	_	_	16	case	_	SpaceAfter=No
16	Elf	Elf	PROPN	_	_	13	nmod	_	SpaceAfter=No
17	.	.	PUNCT	_	_	4	punct	_	_

~~~


