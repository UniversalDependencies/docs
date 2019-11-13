---
layout: base
title:  'Statistics of advcl in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="fr_sequoia-dep-advcl-cleft.html">advcl:cleft</a></tt>.

592 nodes (1%) are attached to their parents as `advcl`.

423 instances of `advcl` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.714527027027.

The following 10 pairs of parts of speech are connected with `advcl`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (487; 82% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (39; 7% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (18; 3% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (17; 3% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (12; 2% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (11; 2% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 advcl	color:blue
1	M.	monsieur	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
2	Rousselot	Rousselot	PROPN	_	_	1	flat:name	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
4	insisté	insister	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	pour	pour	ADP	_	_	7	mark	_	_
6	me	le	PRON	_	Number=Sing|Person=1	7	obj	_	_
7	garder	garder	VERB	_	VerbForm=Inf	4	advcl	_	_
8	et	et	CCONJ	_	_	12	cc	_	_
9	je	il	PRON	_	Number=Sing|Person=1	12	nsubj	_	_
10	l'	le	PRON	_	Number=Sing|Person=3	12	obj	_	SpaceAfter=No
11	en	en	PRON	_	Person=3	12	iobj	_	_
12	remercie	remercier	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	conj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 advcl	color:blue
1	S'	se	PRON	_	Person=3|Reflex=Yes	2	expl:comp	_	SpaceAfter=No
2	agissant	agir	VERB	_	Tense=Pres|VerbForm=Part	13	advcl	_	_
3	de	de	ADP	_	_	5	case	_	_
4	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	maladie	maladie	NOUN	_	Gender=Fem|Number=Sing	2	obl:arg	_	_
6	de	de	ADP	_	_	7	case	_	_
7	Paget	Paget	PROPN	_	Gender=Fem|Number=Sing	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	13	punct	_	_
9	Aclasta	Aclasta	PROPN	_	_	13	nsubj	_	_
10	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux:tense	_	_
11	été	être	AUX	_	Tense=Past|VerbForm=Part	13	cop	_	_
12	plus	plus	ADV	_	_	13	advmod	_	_
13	efficace	efficace	ADJ	_	Number=Sing	0	root	_	_
14	que	que	SCONJ	_	_	16	mark	_	_
15	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	risédronate	risédronate	NOUN	_	Gender=Masc|Number=Sing	13	dep	_	SpaceAfter=No
17	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 advcl	color:blue
1	Girard	Girard	PROPN	_	_	5	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	marié	marié	ADJ	_	Gender=Masc|Number=Sing	1	amod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
6	aussi	aussi	ADV	_	_	5	advmod	_	_
7	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	enfant	enfant	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	5	punct	_	_
10	seul	seul	ADJ	_	Gender=Masc|Number=Sing	11	amod	_	_
11	Lechat	Lechat	PROPN	_	_	13	nsubj	_	_
12	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	13	cop	_	_
13	célibataire	célibataire	ADJ	_	Number=Sing	5	advcl	_	SpaceAfter=No
14	.	.	PUNCT	_	_	5	punct	_	_

~~~


