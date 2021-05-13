---
layout: base
title:  'Statistics of parataxis:insert in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `parataxis:insert`

This relation is a language-specific subtype of <tt><a href="fr_spoken-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="fr_spoken-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

15 nodes (0%) are attached to their parents as `parataxis:insert`.

12 instances of `parataxis:insert` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.6.

The following 4 pairs of parts of speech are connected with `parataxis:insert`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (8; 53% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (5; 33% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 parataxis:insert	color:blue
1	sois	être	AUX	CCOMP	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	purifié	purifier	VERB	_	_	3	parataxis:insert	_	_
3	entend	entendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	-on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	3	nsubj	_	_
5	dans	dans	ADP	_	_	7	case	_	_
6	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	7	det	_	_
7	évangile	évangile	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 parataxis:insert	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	même	même	ADV	_	_	5	advmod	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	triomphe	triomphe	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
6	d'	de	ADP	_	_	8	case	_	_
7	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	revenant	revenant	NOUN	_	_	5	nmod	_	_
9	écrit	écrire	VERB	_	_	5	parataxis:insert	_	_
10	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	11	det	_	_
11	Alsace	Alsace	PROPN	_	_	9	nsubj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 parataxis:insert	color:blue
1	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	France	France	PROPN	_	_	4	nsubj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	rose	rose	ADJ	_	Number=Sing	0	root	_	_
5	constate	constater	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis:insert	_	_
6	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	Voix	Voix	PROPN	_	Gender=Fem|Number=Sing	5	nsubj	_	ExtPOS=PROPN
8	de	de	ADP	_	_	10	case	_	_
9	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Nord	Nord	PROPN	_	_	7	nmod	_	_

~~~


