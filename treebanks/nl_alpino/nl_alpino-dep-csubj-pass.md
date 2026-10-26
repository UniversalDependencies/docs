---
layout: base
title:  'Statistics of csubj:pass in UD_Dutch-Alpino'
udver: '2'
---

## Treebank Statistics: UD_Dutch-Alpino: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="nl_alpino-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="nl_alpino-dep-csubj-outer.html">csubj:outer</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_alpino-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 csubj:pass	color:blue
1	De	de	DET	LID|bep|stan|rest	Definite=Def|PronType=Art	2	det	2:det	_
2	regels	regel	NOUN	N|soort|mv|basis	Number=Plur	4	nsubj	4:nsubj	_
3	zijn	zijn	AUX	WW|pv|tgw|mv	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
4	zo	zo	ADV	BW	_	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	LET	_	11	punct	11:punct	_
6	dat	dat	SCONJ	VG|onder	_	11	mark	11:mark	_
7	wie	wie	PRON	VNW|vb|pron|stan|vol|3p|getal	Person=3|PronType=Int	9	nsubj	9:nsubj	_
8	niet	niet	ADV	BW	_	9	advmod	9:advmod	_
9	komt	komen	VERB	WW|pv|tgw|met-t	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	11	csubj:pass	11:csubj:pass	SpaceAfter=No
10	,	,	PUNCT	LET	_	9	punct	9:punct	_
11	geacht	achten	VERB	WW|vd|vrij|zonder	VerbForm=Part	4	advcl	4:advcl:dat	_
12	wordt	worden	AUX	WW|pv|tgw|met-t	Mood=Ind|Number=Sing|Tense=Pres|VerbForm=Fin	11	aux:pass	11:aux:pass	_
13	te	te	ADP	VZ|init	_	16	mark	16:mark	_
14	hebben	hebben	AUX	WW|inf|vrij|zonder	VerbForm=Inf	16	aux	16:aux	_
15	vóór	voor	ADP	VZ|fin	_	16	compound:prt	16:compound:prt	_
16	gestemd	voor_stemmen	VERB	WW|vd|vrij|zonder	VerbForm=Part	11	xcomp	11:xcomp	SpaceAfter=No
17	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


