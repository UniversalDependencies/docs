---
layout: base
title:  'Statistics of acl in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_spoken-dep-acl-relcl.html">acl:relcl</a></tt>.

172 nodes (0%) are attached to their parents as `acl`.

168 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.84883720930233.

The following 9 pairs of parts of speech are connected with `acl`: <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (160; 93% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 acl	color:blue
1	donc	donc	ADV	_	_	14	advmod	_	_
2	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
3	la	le	DET	conj:reform	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	reparandum	_	_
4	rencontre	rencontre	NOUN	_	Gender=Fem|Number=Sing	14	dislocated	_	_
5	de	de	ADP	de	_	6	dep:comp	_	_
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	dep	_	_
7	de	de	ADP	conj:reform	_	9	case	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	difficulté	difficulté	NOUN	_	Gender=Fem|Number=Sing	6	reparandum	_	_
10	à	à	ADP	_	_	11	mark	_	_
11	vivre	vivre	VERB	_	VerbForm=Inf	9	acl	_	_
12	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	_
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
14	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	0	root	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 acl	color:blue
1	oui	oui	INTJ	_	_	5	discourse	_	_
2	mais	mais	CCONJ	_	_	5	cc	_	_
3	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	_
4	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
5	déguise	déguiser	VERB	_	_	0	root	_	_
6	pas	pas	ADV	_	Polarity=Neg	5	advmod	_	_
7	de	de	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	fait	fait	NOUN	_	Gender=Masc|Number=Sing	5	obl:mod	_	_
10	que	que	SCONJ	_	_	14	mark	_	_
11	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	_
12	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
13	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	fauteuil	fauteuil	NOUN	_	Gender=Masc|Number=Sing	9	acl	_	_
15	qui	qui	PRON	_	_	16	nsubj	_	_
16	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	acl:relcl	_	_
17	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	époque	époque	NOUN	_	Gender=Fem|Number=Sing	16	obj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl	color:blue
1	ensuite	ensuite	ADV	_	_	12	advmod	_	_
2	euh	euh	INTJ	_	_	1	discourse	_	_
3	disons	dire	VERB	_	Mood=Imp|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis:parenth	_	_
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	mots	mots	NOUN	_	_	3	obj	_	_
6	comme	comme	SCONJ	_	_	8	mark	_	_
7	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	8	nsubj	_	_
8	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	_
9	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	12	nsubj:pass	_	_
10	avez	avoir	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	12	aux	_	_
11	été	être	AUX	DoubleAux	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	12	aux:pass	_	_
12	ruinée	ruiner	VERB	DoubleAux	_	0	root	_	_

~~~


