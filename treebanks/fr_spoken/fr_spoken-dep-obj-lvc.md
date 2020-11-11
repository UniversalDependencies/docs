---
layout: base
title:  'Statistics of obj:lvc in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `obj:lvc`

This relation is a language-specific subtype of <tt><a href="fr_spoken-dep-obj.html">obj</a></tt>.

26 nodes (0%) are attached to their parents as `obj:lvc`.

26 instances of `obj:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.76923076923077.

The following 2 pairs of parts of speech are connected with `obj:lvc`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (24; 92% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obj:lvc	color:blue
1	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	étais	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
3	euh	euh	INTJ	_	_	2	discourse	_	_
4	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	avais	avoir	VERB	conj:reform	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	2	reparandum	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	réputation	réputation	NOUN	_	Gender=Fem|Number=Sing	5	obj:lvc	_	_
8	d'	de	ADP	_	_	13	mark	_	_
9	être	être	AUX	_	VerbForm=Inf	13	cop	_	_
10	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
11	très	très	ADV	_	_	12	advmod	_	_
12	bon	bon	ADJ	_	Gender=Masc|Number=Sing	13	amod	_	_
13	élève	élève	NOUN	_	Gender=Masc|Number=Sing	7	xcomp:obl	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obj:lvc	color:blue
1	parce	parce	SCONJ	_	_	7	mark	_	ExtPos=SCONJ|PhraseType=Idiom
2	que	que	SCONJ	_	_	1	fixed	_	_
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	mamans	maman	NOUN	_	_	7	dislocated	_	_
5	africaines	africain	ADJ	_	Gender=Fem|Number=Plur	4	amod	_	_
6	elles	il	PRON	_	Gender=Fem|Number=Plur|Person=3|PronType=Prs	7	nsubj	_	_
7	ont	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	beaucoup	beaucoup	PRON	_	_	7	obj:lvc	_	_
9	de	de	ADP	_	_	10	case	_	_
10	mal	mal	NOUN	_	Gender=Masc|Number=Sing	8	dep:comp	_	_
11	à	à	ADP	_	_	13	mark	_	_
12	se	se	PRON	_	Person=3|PronType=Prs	13	dep:comp	_	_
13	séparer	séparer	VERB	_	VerbForm=Inf	10	ccomp:obl	_	_
14	de	de	ADP	_	_	16	case	_	_
15	leurs	son	DET	_	Number=Plur|PossNumber=Plur|PossPerson=3|PronType=Prs	16	det	_	_
16	petits	petit	NOUN	_	Gender=Masc|Number=Plur	13	obl:arg	_	_

~~~


