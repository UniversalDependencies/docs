---
layout: base
title:  'Statistics of fixed in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `fixed`

This relation is universal.

45 nodes (0%) are attached to their parents as `fixed`.

45 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08888888888889.

The following 15 pairs of parts of speech are connected with `fixed`: <tt><a href="fr_fqb-pos-DET.html">DET</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (15; 33% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-DET.html">DET</a></tt> (7; 16% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (4; 9% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (4; 9% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (2; 4% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-SCONJ.html">SCONJ</a></tt> (2; 4% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="fr_fqb-pos-DET.html">DET</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Quel	quel	DET	_	Gender=Masc|Number=Sing|PronType=Int	2	det	_	_
2	État	état	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	compte	compter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	le	le	DET	_	Definite=Def|ExtPos=PRON|Gender=Masc|Number=Sing|PronType=Art	3	obj	_	_
5	plus	plus	ADV	_	_	4	fixed	_	_
6	d'	de	ADP	_	_	7	case	_	SpaceAfter=No
7	Indiens	indien	NOUN	_	Gender=Fem|Number=Plur	4	obl:arg	_	_
8	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 fixed	color:blue
1	Comment	comment	ADV	_	PronType=Int	2	xcomp	_	_
2	nomme	nommer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	-t-on	il	PRON	_	Number=Sing|Person=3|PronType=Ind	2	nsubj	_	_
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	nuages	nuage	NOUN	_	Gender=Masc|Number=Plur	2	obj	_	_
6	qui	qui	PRON	_	PronType=Rel	7	nsubj	_	_
7	produisent	produire	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
8	de	de	ADP	_	ExtPos=DET	10	det	_	_
9	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	fixed	_	_
10	pluie	pluie	NOUN	_	Gender=Fem|Number=Sing	7	obj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	à	à	ADP	_	ExtPos=ADV	7	advmod	_	_
2	partir	partir	VERB	_	VerbForm=Inf	1	fixed	_	_
3	de	de	ADP	_	_	4	case	_	_
4	quand	quand	ADV	_	PronType=Int	1	obl:arg	_	_
5	puis	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	-je	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
7	bénéficier	bénéficier	VERB	_	VerbForm=Inf	5	xcomp	_	_
8	d'	de	ADP	_	_	10	case	_	SpaceAfter=No
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	aide	aide	NOUN	_	Number=Sing	7	obl:arg	_	_
11	à	à	ADP	_	_	13	case	_	_
12	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	logement	logement	NOUN	_	Gender=Masc|Number=Sing	10	nmod	_	_
14	?	?	PUNCT	_	_	7	punct	_	_

~~~


