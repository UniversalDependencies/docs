---
layout: base
title:  'Statistics of xcomp in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `xcomp`

This relation is universal.

242 nodes (1%) are attached to their parents as `xcomp`.

206 instances of `xcomp` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.01652892561983.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (152; 63% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (34; 14% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (34; 14% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (12; 5% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-X.html">X</a></tt> (5; 2% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Puis	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	-je	il	PRON	_	Number=Sing|Person=1	1	nsubj	_	_
3	avoir	avoir	VERB	_	VerbForm=Inf	1	xcomp	_	_
4	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	aide	aide	NOUN	_	Number=Sing	3	obj	_	_
6	à	à	ADP	_	_	8	case	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	logement	logement	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
9	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	Comment	comment	ADV	_	PronType=Int	2	xcomp	_	_
2	nomme	nommer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	-t	t	PART	_	_	4	dep	_	SpaceAfter=No|wordform=t
4	-on	il	PRON	_	Number=Sing|Person=3	2	nsubj	_	wordform=on
5	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	nuages	nuage	NOUN	_	Gender=Masc|Number=Plur	2	obj	_	_
7	qui	qui	PRON	_	PronType=Rel	8	nsubj	_	_
8	produisent	produire	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	_
9	de	du	ADP	_	Gender=Fem|Number=Sing	11	det	_	ExtPos=DET
10	la	_	DET	_	_	9	fixed	_	_
11	pluie	pluie	NOUN	_	Gender=Fem|Number=Sing	8	obj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1	2	nsubj	_	_
2	vais	aller	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	devenir	devenir	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	salarié	salarié	NOUN	_	Gender=Masc|Number=Sing	3	xcomp	_	_
5	et	et	CCONJ	_	_	7	cc	_	_
6	je	il	PRON	_	Number=Sing|Person=1	7	nsubj	_	_
7	garde	garder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
9	même	même	ADJ	_	Number=Sing	10	amod	_	_
10	logement	logement	NOUN	_	Gender=Masc|Number=Sing	7	obj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


