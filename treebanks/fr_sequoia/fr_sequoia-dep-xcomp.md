---
layout: base
title:  'Statistics of xcomp in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `xcomp`

This relation is universal.

1025 nodes (1%) are attached to their parents as `xcomp`.

1023 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.4019512195122.

The following 9 pairs of parts of speech are connected with `xcomp`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (840; 82% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (75; 7% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (68; 7% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (25; 2% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 xcomp	color:blue
1	De	de	ADP	_	_	11	advmod	_	ExtPos=ADV
2	plus	plus	ADV	_	_	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	_	_	11	punct	_	_
4	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	mise	mise	NOUN	_	Gender=Fem|Number=Sing	11	nsubj	_	_
6	à	à	ADP	_	_	7	case	_	_
7	jour	jour	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
8	de	de	ADP	_	_	10	case	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	PGR	PGR	NOUN	_	Number=Sing	5	nmod	_	_
11	devra	devoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
12	être	être	AUX	_	VerbForm=Inf	13	aux:pass	_	_
13	soumise	soumettre	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	11	xcomp	_	_
14	:	:	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3	3	nsubj	_	_
2	se	se	PRON	_	Person=3|Reflex=Yes	3	expl:comp	_	_
3	veut	vouloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	aussi	aussi	ADV	_	_	3	advmod	_	_
5	message	message	NOUN	_	Gender=Masc|Number=Sing	3	xcomp	_	_
6	d'	de	ADP	_	_	7	case	_	SpaceAfter=No
7	espoir	espoir	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
8	en	en	ADP	_	_	10	case	_	_
9	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	avenir	avenir	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
11	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1	2	nsubj	_	_
2	dois	devoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	toutefois	toutefois	ADV	_	_	2	advmod	_	_
4	être	être	AUX	_	VerbForm=Inf	5	cop	_	_
5	honnête	honnête	ADJ	_	Number=Sing	2	xcomp	_	_
6	et	et	CCONJ	_	_	7	cc	_	_
7	dire	dire	VERB	_	VerbForm=Inf	5	conj	_	_
8	que	que	SCONJ	_	_	12	mark	_	_
9	personne	personne	PRON	_	Number=Sing	12	nsubj	_	_
10	ne	ne	ADV	_	Polarity=Neg	12	advmod	_	_
11	les	le	PRON	_	Number=Plur|Person=3	12	obj	_	_
12	aide	aider	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


