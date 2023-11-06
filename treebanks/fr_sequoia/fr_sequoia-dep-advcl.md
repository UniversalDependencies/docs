---
layout: base
title:  'Statistics of advcl in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="fr_sequoia-dep-advcl-cleft.html">advcl:cleft</a></tt>.

555 nodes (1%) are attached to their parents as `advcl`.

365 instances of `advcl` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.6018018018018.

The following 12 pairs of parts of speech are connected with `advcl`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (437; 79% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (35; 6% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (34; 6% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (24; 4% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 advcl	color:blue
1	M.	monsieur	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
2	Rousselot	Rousselot	PROPN	_	_	1	nmod	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
4	insisté	insister	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	pour	pour	ADP	_	_	7	mark	_	_
6	me	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	7	obj	_	_
7	garder	garder	VERB	_	VerbForm=Inf	4	advcl	_	Subject=Instantiated
8	et	et	CCONJ	_	_	12	cc	_	_
9	je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
10	l'	lui	PRON	_	Number=Sing|Person=3|PronType=Prs	12	obj	_	SpaceAfter=No
11	en	en	PRON	_	Person=3|PronType=Prs	12	iobj	_	_
12	remercie	remercier	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	conj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 advcl	color:blue
1	S'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	2	expl:pv	_	SpaceAfter=No
2	agissant	agir	VERB	_	Tense=Pres|VerbForm=Part	13	advcl	_	_
3	de	de	ADP	_	_	5	case	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	maladie	maladie	NOUN	_	Gender=Fem|Number=Sing	2	obl:arg	_	_
6	de	de	ADP	_	_	7	case	_	_
7	Paget	Paget	PROPN	_	Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	2	punct	_	_
9	Aclasta	Aclasta	PROPN	_	_	13	nsubj	_	_
10	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux:tense	_	_
11	été	être	AUX	_	Tense=Past|VerbForm=Part	13	cop	_	_
12	plus	plus	ADV	_	_	13	advmod	_	_
13	efficace	efficace	ADJ	_	Number=Sing	0	root	_	_
14	que	que	SCONJ	_	_	16	case	_	_
15	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	risédronate	risédronate	NOUN	_	Gender=Masc|Number=Sing	13	dep	_	SpaceAfter=No
17	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 1 advcl	color:blue
1	Natif	natif	ADJ	_	Gender=Masc|Number=Sing	13	advcl	_	_
2	de	de	ADP	_	_	4	case	_	_
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	Forges	Forges	PROPN	_	Gender=Masc|Number=Plur	1	obl:arg	_	_
5	de	de	ADP	_	_	6	case	_	_
6	Méziré	Méziré	PROPN	_	_	4	nmod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	en	en	ADP	_	_	9	case	_	_
9	1928	1928	NUM	_	NumType=Card	1	obl:mod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	_	_
11	il	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
12	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux:tense	_	_
13	fréquenté	fréquenter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
14	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	15	det	_	SpaceAfter=No
15	école	école	NOUN	_	Gender=Fem|Number=Sing	13	obj	_	_
16	de	de	ADP	_	_	17	case	_	_
17	Morvillars	Morvillars	PROPN	_	Gender=Masc|Number=Sing	15	nmod	_	_
18	jusqu'	jusque	ADP	_	_	21	case	_	SpaceAfter=No
19	à	à	ADP	_	_	21	case	_	_
20	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	CEP	cep	NOUN	_	Gender=Masc|Number=Sing	13	obl:mod	_	SpaceAfter=No
22	.	.	PUNCT	_	_	13	punct	_	_

~~~


