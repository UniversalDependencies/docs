---
layout: base
title:  'Statistics of obl:agent in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `obl:agent`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_fqb-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_fqb-dep-obl-mod.html">obl:mod</a></tt>.

30 nodes (0%) are attached to their parents as `obl:agent`.

27 instances of `obl:agent` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.9.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (13; 43% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt> (13; 43% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (4; 13% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	Quelle	quel	DET	_	Gender=Fem|Number=Sing|PronType=Int	2	det	_	_
2	ville	ville	NOUN	_	Gender=Fem|Number=Sing	4	nsubj:pass	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	desservie	desservir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
5	par	par	ADP	_	_	7	case	_	_
6	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	aéroport	aéroport	NOUN	_	Gender=Masc|Number=Sing	4	obl:agent	_	_
8	international	international	ADJ	_	Gender=Masc|Number=Sing	7	amod	_	_
9	Logan	Logan	PROPN	_	Number=Sing	7	nmod	_	_
10	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 obl:agent	color:blue
1	Donner	donner	VERB	_	VerbForm=Inf	0	root	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	titre	titre	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	_
4	d'	de	ADP	_	_	6	case	_	SpaceAfter=No
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	poème	poème	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
7	composé	composer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	acl	_	_
8	par	par	ADP	_	_	9	case	_	_
9	Mussorgsky	Mussorgsky	PROPN	_	_	7	obl:agent	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:agent	color:blue
1	Par	par	ADP	_	_	2	case	_	_
2	qui	qui	PRON	_	PronType=Int	4	obl:agent	_	_
3	fut	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	inventé	inventer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	"	"	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	Silly	Silly	PROPN	_	_	4	nsubj:pass	_	_
8	Putty	Putty	PROPN	_	_	7	flat:name	_	SpaceAfter=No
9	"	"	PUNCT	_	_	7	punct	_	_
10	fut	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	aux:pass	_	_
11	inventé	inventer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	4	ccomp	_	_
12	?	?	PUNCT	_	_	4	punct	_	_

~~~


