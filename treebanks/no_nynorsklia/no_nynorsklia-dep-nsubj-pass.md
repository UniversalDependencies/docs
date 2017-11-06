---
layout: base
title:  'Statistics of nsubj:pass in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="no_nynorsklia-dep-nsubj.html">nsubj</a></tt>.

11 nodes (0%) are attached to their parents as `nsubj:pass`.

10 instances of `nsubj:pass` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36363636363636.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (10; 91% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	blei	bli	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
2	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj:pass	_	_
3	kontrollert	kontrollere	VERB	_	VerbForm=Part	0	root	_	_
4	?	$?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nsubj:pass	color:blue
1	men	men	CCONJ	_	_	6	cc	_	_
2	så	så	ADV	_	_	6	advmod	_	_
3	blei	bli	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
4	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
5	jo	jo	ADV	_	_	6	advmod	_	_
6	bygd	bygge	VERB	_	VerbForm=Part	0	root	_	_
7	Bøndenes	Bøndenes	PROPN	_	_	6	nsubj:pass	_	_
8	hus	hus	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	7	flat:name	_	_
9	her	her	ADV	_	_	6	advmod	_	_
10	oppe	oppe	ADP	_	_	6	compound:prt	_	_
11	da	da	ADV	_	_	6	advmod	_	_
12	.	$.	PUNCT	_	_	6	punct	_	_

~~~


