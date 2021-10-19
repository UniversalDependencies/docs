---
layout: base
title:  'Statistics of ccomp:obl in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `ccomp:obl`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `ccomp`: <tt><a href="fr_spoken-dep-ccomp-obj.html">ccomp:obj</a></tt>, <tt><a href="fr_spoken-dep-ccomp-pred.html">ccomp:pred</a></tt>.

26 nodes (0%) are attached to their parents as `ccomp:obl`.

26 instances of `ccomp:obl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.80769230769231.

The following 10 pairs of parts of speech are connected with `ccomp:obl`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (7; 27% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (5; 19% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (4; 15% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (2; 8% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (1; 4% instances), <tt><a href="fr_spoken-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp:obl	color:blue
1	par	par	ADP	_	_	4	dislocated	_	ExtPos=ADV|PhraseType=Idiom
2	ailleurs	ailleurs	ADV	_	_	1	fixed	_	_
3	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
4	demande	demander	VERB	_	_	0	root	_	_
5	également	également	ADV	_	_	4	advmod	_	_
6	d'	de	ADP	_	_	7	mark	_	_
7	être	être	VERB	_	VerbForm=Inf	4	ccomp:obl	_	_
8	à	à	ADP	_	_	10	case	_	_
9	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	10	det	_	_
10	écoute	écoute	NOUN	_	Gender=Fem|Number=Sing	7	obl:arg	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 ccomp:obl	color:blue
1	mais	mais	CCONJ	_	_	4	cc	_	_
2	moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	4	dislocated	_	_
3	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	ai	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	impression	impression	NOUN	_	Gender=Fem|Number=Sing	4	obj:lvc	_	_
7	ici	ici	ADV	_	_	4	advmod	_	_
8	qu'	que	SCONJ	_	_	10	mark	_	_
9	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	10	nsubj	_	_
10	devient	devenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	ccomp:obl	_	_
11	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	advmod	_	ExtPos=ADV|PhraseType=Idiom
12	peu	peu	NOUN	_	_	11	fixed	_	_
13	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	quartier	quartier	NOUN	_	Gender=Masc|Number=Sing	10	obj	_	_
15	dortoir	dortoir	NOUN	_	_	14	compound	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 ccomp:obl	color:blue
1	et	et	CCONJ	_	_	5	cc	_	_
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	expl:subj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	en	en	ADP	_	_	5	case	_	_
5	cela	cela	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	_
6	que	que	SCONJ	_	_	13	mark	_	_
7	peut-être	peut-être	ADV	_	_	13	advmod	_	_
8	ma	son	DET	_	Gender=Fem|Number=Sing|Person=3|PossNumber=Sing|PossPerson=1|PronType=Prs	9	det	_	_
9	situation	situation	NOUN	_	Gender=Fem|Number=Sing	13	nsubj	_	_
10	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
11	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	advmod	_	ExtPos=ADV|PhraseType=Idiom
12	peu	peu	NOUN	_	_	11	fixed	_	_
13	difficile	difficile	ADJ	_	Number=Sing	5	advcl:cleft	_	_
14	à	à	ADP	_	_	15	mark	_	_
15	repérer	repérer	VERB	_	VerbForm=Inf	13	ccomp:obl	_	_

~~~


