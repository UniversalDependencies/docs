---
layout: base
title:  'Statistics of aux:tense in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `aux:tense`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_fqb-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_fqb-dep-aux-pass.html">aux:pass</a></tt>.

503 nodes (2%) are attached to their parents as `aux:tense`.

502 instances of `aux:tense` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83499005964215.

The following 3 pairs of parts of speech are connected with `aux:tense`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-AUX.html">AUX</a></tt> (497; 99% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 aux:tense	color:blue
1	Quand	quand	ADV	_	PronType=Int	10	advmod	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	cardinal	cardinal	NOUN	_	Gender=Masc|Number=Sing	10	nsubj	_	_
4	Juan	Juan	PROPN	_	Gender=Masc|Number=Sing	3	appos	_	_
5	Jesus	Jesus	PROPN	_	Gender=Masc|Number=Sing	4	flat:name	_	_
6	Posadas	Posadas	PROPN	_	_	4	flat:name	_	_
7	Ocampo	Ocampo	PROPN	_	_	4	flat:name	_	_
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	SpaceAfter=No
9	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	10	expl:subj	_	_
10	mort	mourir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
11	?	?	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux:tense	color:blue
1	Qui	qui	PRON	_	PronType=Int	6	nsubj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:tense	_	_
3	été	être	AUX	_	Tense=Past|VerbForm=Part	6	cop	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	troisième	troisième	ADJ	_	Number=Sing|NumType=Ord	6	amod	_	_
6	président	président	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
7	de	de	ADP	_	_	9	case	_	_
8	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	États-Unis	États-Unis	PROPN	_	_	6	nmod	_	_
10	?	?	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux:tense	color:blue
1	Quel	quel	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux:tense	_	_
3	été	être	AUX	_	Tense=Past|VerbForm=Part	1	cop	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	premier	premier	ADJ	_	Gender=Masc|Number=Sing|NumType=Ord	6	amod	_	_
6	film	film	NOUN	_	Gender=Masc|Number=Sing	1	nsubj	_	_
7	qu'	que	PRON	_	PronType=Rel	9	obj	_	SpaceAfter=No
8	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:tense	_	_
9	dirigé	diriger	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	acl:relcl	_	_
10	John	John	PROPN	_	Gender=Masc|Number=Sing	9	nsubj	_	_
11	Milius	Milius	PROPN	_	_	10	flat:name	_	_
12	?	?	PUNCT	_	_	1	punct	_	_

~~~


