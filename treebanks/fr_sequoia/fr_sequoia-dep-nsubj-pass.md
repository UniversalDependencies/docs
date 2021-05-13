---
layout: base
title:  'Statistics of nsubj:pass in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fr_sequoia-dep-nsubj-caus.html">nsubj:caus</a></tt>.

595 nodes (1%) are attached to their parents as `nsubj:pass`.

585 instances of `nsubj:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.09579831932773.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (374; 63% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (138; 23% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (81; 14% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	Une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	commission	commission	NOUN	_	Gender=Fem|Number=Sing	5	nsubj:pass	_	_
3	parlementaire	parlementaire	ADJ	_	Number=Sing	2	amod	_	_
4	fut	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
5	constituée	constituer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	2	2	NUM	_	NumType=Card	5	obl:mod	_	_
8	juillet	juillet	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
9	1953	1953	NUM	_	NumType=Card	8	nmod	_	_
10	;	;	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3	3	nsubj:pass	_	_
2	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	3	aux:pass	_	_
3	annulée	annuler	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
4	en	en	ADP	_	_	5	case	_	_
5	octobre	octobre	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	_
6	2000	2000	NUM	_	NumType=Card	5	nmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	Comment	comment	ADV	_	PronType=Int	5	advmod	_	_
2	Angiox	Angiox	PROPN	_	_	5	nsubj:pass	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	SpaceAfter=No
4	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	5	expl:subj	_	_
5	utilisé	utiliser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


