---
layout: base
title:  'Statistics of nsubj:pass in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="fr_sequoia-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="fr_sequoia-dep-nsubj-outer.html">nsubj:outer</a></tt>.

620 nodes (1%) are attached to their parents as `nsubj:pass`.

609 instances of `nsubj:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.10645161290323.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (404; 65% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (120; 19% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (80; 13% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-SYM.html">SYM</a></tt> (4; 1% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	Une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	commission	commission	NOUN	_	Gender=Fem|Number=Sing	5	nsubj:pass	_	Exponence[Gender]=Inherent
3	parlementaire	parlementaire	ADJ	_	Gender=Fem|Number=Sing	2	amod	_	Exponence[Gender]=Absent
4	fut	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
5	constituée	constituer	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Tense[denom]=Past
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	2	2	NUM	_	Number=Sing|NumType=Card	5	obl:mod	_	Exponence[Number]=Inherent
8	juillet	juillet	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	Exponence[Gender]=Inherent
9	1953	1953	NUM	_	Number=Sing|NumType=Card	8	nmod	_	Exponence[Number]=Inherent
10	;	;	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Elle	lui	PRON	_	Case=Nom|Emph=No|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj:pass	_	_
2	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	3	aux:pass	_	_
3	annulée	annuler	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Tense[denom]=Past
4	en	en	ADP	_	_	5	case	_	_
5	octobre	octobre	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	Exponence[Gender]=Inherent
6	2000	2000	NUM	_	Number=Sing|NumType=Card	5	nmod	_	Exponence[Number]=Inherent|SpaceAfter=No
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
4	-il	lui	PRON	_	Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	expl:subj	_	_
5	utilisé	utiliser	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Tense[denom]=Past
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


