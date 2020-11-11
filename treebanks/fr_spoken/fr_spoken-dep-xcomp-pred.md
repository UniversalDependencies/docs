---
layout: base
title:  'Statistics of xcomp:pred in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `xcomp:pred`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="fr_spoken-dep-xcomp-obj.html">xcomp:obj</a></tt>, <tt><a href="fr_spoken-dep-xcomp-obl.html">xcomp:obl</a></tt>.

28 nodes (0%) are attached to their parents as `xcomp:pred`.

25 instances of `xcomp:pred` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.17857142857143.

The following 8 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (11; 39% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (7; 25% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (3; 11% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt> (2; 7% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-X.html">X</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp:pred	color:blue
1	parce	parce	SCONJ	_	_	7	mark	_	ExtPos=SCONJ|PhraseType=Idiom
2	que	que	SCONJ	_	_	1	fixed	_	_
3	bon	bon	INTJ	_	_	7	discourse	_	_
4	pff	pff	INTJ	_	_	7	discourse	_	_
5	ç~	ç~	X	_	_	7	nsubj	_	_
6	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	reparandum	_	_
7	devient	devenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	ridicule	ridicule	ADJ	_	Number=Sing	7	xcomp:pred	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 xcomp:pred	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	expl:subj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	pour	pour	ADP	_	_	4	case	_	_
4	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	_
5	que	que	SCONJ	_	_	7	mark	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	nsubj	_	_
7	était	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	advcl:cleft	_	_
8	ouais	ouais	INTJ	_	_	7	discourse	_	_
9	pas	pas	ADV	_	Polarity=Neg	7	advmod	_	_
10	de	de	ADP	_	_	12	det	_	ExtPos=DET|PhraseType=Idiom
11	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	fixed	_	_
12	radio	radio	NOUN	_	Gender=Fem|Number=Sing	7	xcomp:pred	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 xcomp:pred	color:blue
1	mais	mais	CCONJ	_	_	5	cc	_	_
2	beaucoup	beaucoup	PRON	_	_	5	xcomp:pred	_	_
3	de	de	ADP	_	_	4	case	_	_
4	problèmes	problème	NOUN	_	Gender=Masc|Number=Plur	2	dep:comp	_	_
5	viennent	venir	VERB	_	_	0	root	_	_
6	de	de	ADP	_	_	7	case	_	_
7	là	là	ADV	_	_	5	obl:arg	_	_

~~~


