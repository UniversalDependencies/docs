---
layout: base
title:  'Statistics of expl:subj in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `expl:subj`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `expl`: <tt><a href="fr_sequoia-dep-expl-comp.html">expl:comp</a></tt>, <tt><a href="fr_sequoia-dep-expl-pass.html">expl:pass</a></tt>.

241 nodes (0%) are attached to their parents as `expl:subj`.

224 instances of `expl:subj` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.12033195020747.

The following 6 pairs of parts of speech are connected with `expl:subj`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (159; 66% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (42; 17% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (29; 12% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (7; 3% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl:subj	color:blue
1	Comment	comment	ADV	_	PronType=Int	5	advmod	_	_
2	Angiox	Angiox	PROPN	_	_	5	nsubj:pass	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	SpaceAfter=No
4	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	5	expl:subj	_	_
5	utilisé	utiliser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl:subj	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	3	expl:subj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	nécessaire	nécessaire	ADJ	_	Number=Sing	0	root	_	_
4	d'	de	ADP	_	_	5	mark	_	SpaceAfter=No
5	augmenter	augmenter	VERB	_	VerbForm=Inf	3	csubj	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	dotation	dotation	NOUN	_	Gender=Fem|Number=Sing	5	obj	_	_
8	et	et	CCONJ	_	_	10	cc	_	_
9	de	de	ADP	_	_	10	mark	_	_
10	créer	créer	VERB	_	VerbForm=Inf	5	conj	_	_
11	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	poste	poste	NOUN	_	Gender=Masc|Number=Sing	10	obj	_	_
13	budgétaire	budgétaire	ADJ	_	Number=Sing	12	amod	_	_
14	;	;	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 expl:subj	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3	5	expl:subj	_	_
2	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	cop	_	_
3	alors	alors	ADV	_	_	5	advmod	_	_
4	20	20	NUM	_	NumType=Card	5	nummod	_	SpaceAfter=No
5	h	h	NOUN	_	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


