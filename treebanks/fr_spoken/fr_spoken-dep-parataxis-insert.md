---
layout: base
title:  'Statistics of parataxis:insert in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `parataxis:insert`

This relation is a language-specific subtype of <tt><a href="fr_spoken-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="fr_spoken-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

14 nodes (0%) are attached to their parents as `parataxis:insert`.

12 instances of `parataxis:insert` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.92857142857143.

The following 4 pairs of parts of speech are connected with `parataxis:insert`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (7; 50% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (5; 36% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 parataxis:insert	color:blue
1	alors	alors	ADV	_	_	3	advmod	_	_
2	que	que	PRON	_	_	4	obj	_	_
3	va	aller	VERB	ETRE	_	0	root	_	_
4	faire	faire	VERB	_	_	3	xcomp	_	_
5	maintenant	maintenant	ADV	_	_	4	advmod	_	_
6	le	le	DET	_	_	7	det	_	_
7	président	président	NOUN	_	_	4	nsubj	_	_
8	se	se	PRON	_	_	9	dep	_	INMWE=Yes
9	demande	demander	VERB	_	_	4	parataxis:insert	_	EXTPOS=VERB
10	Le	le	DET	_	_	11	det	_	_
11	Progrès	Progrès	PROPN	_	_	9	nsubj	_	_
12	à	à	ADP	_	_	13	case	_	_
13	Lyon	Lyon	PROPN	_	_	9	obl:mod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 parataxis:insert	color:blue
1	c'	ce	PRON	_	_	5	nsubj	_	_
2	est	être	AUX	_	_	5	cop	_	_
3	même	même	ADV	_	_	5	advmod	_	_
4	le	le	DET	_	_	5	det	_	_
5	triomphe	triomphe	NOUN	_	_	0	root	_	_
6	d'	de	ADP	_	_	8	case	_	_
7	un	un	DET	_	_	8	det	_	_
8	revenant	revenant	NOUN	_	_	5	nmod	_	_
9	écrit	écrire	VERB	_	_	5	parataxis:insert	_	_
10	L'	le	DET	_	_	11	det	_	_
11	Alsace	Alsace	PROPN	_	_	9	nsubj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 parataxis:insert	color:blue
1	la	le	DET	_	_	2	det	_	_
2	France	France	PROPN	_	_	4	nsubj	_	_
3	est	être	AUX	_	_	4	cop	_	_
4	rose	rose	ADJ	_	_	0	root	_	_
5	constate	constater	VERB	_	_	4	parataxis:insert	_	_
6	La	le	DET	_	_	7	det	_	_
7	Voix	Voix	PROPN	_	_	5	nsubj	_	_
8	de	de	ADP	_	_	10	case	_	_
9	le	le	DET	_	_	10	det	_	_
10	Nord	Nord	PROPN	_	_	7	nmod	_	_

~~~


