---
layout: base
title:  'Statistics of dep:comp in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-dep.html">dep</a></tt>.

1602 nodes (0%) are attached to their parents as `dep:comp`.

1110 instances of `dep:comp` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.63670411985019.

The following 17 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (1109; 69% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (330; 21% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (96; 6% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (18; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (12; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (10; 1% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-DET.html">DET</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 dep:comp	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	wordform=il
2	n'	ne	ADV	_	Polarity=Neg	6	advmod	_	SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	pas	pas	ADV	_	Polarity=Neg	6	advmod	_	_
5	aussi	aussi	ADV	_	_	6	advmod	_	_
6	anxieux	anxieux	ADJ	_	Gender=Masc	0	root	_	_
7	qu'	que	SCONJ	_	_	10	mark	_	SpaceAfter=No
8	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	expl:subj	_	_
9	y	y	PRON	_	Person=3|PronType=Prs	10	dep:comp	_	_
10	paraît	paraître	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 dep:comp	color:blue
1	Plus	plus	ADV	_	_	9	nsubj:pass	_	ExtPos=PRON|wordform=plus
2	de	de	ADP	_	_	4	case	_	_
3	80	80	NUM	_	Number=Plur	4	nummod	_	_
4	sonates	sonate	NOUN	_	Gender=Fem|Number=Plur	1	dep:comp	_	_
5	et	et	CCONJ	_	_	6	cc	_	_
6	trios	trio	NOUN	_	Gender=Masc|Number=Plur	4	conj	_	_
7	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux:tense	_	_
8	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	aux:pass	_	_
9	publiés	publier	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 dep:comp	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	wordform=le
2	simple	simple	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	_
3	fait	fait	NOUN	_	Gender=Masc|Number=Sing	11	nsubj	_	_
4	d'	de	ADP	_	_	5	mark	_	SpaceAfter=No
5	avoir	avoir	VERB	_	VerbForm=Inf	3	acl	_	_
6	recours	recours	NOUN	_	Gender=Masc	5	obj:lvc	_	_
7	à	à	ADP	_	_	9	case	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	photographie	photographie	NOUN	_	Gender=Fem|Number=Sing	6	dep:comp	_	_
10	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	obj	_	_
11	prouve	prouver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


