---
layout: base
title:  'Statistics of ccomp in UD_Danish'
udver: '2'
---

## Treebank Statistics: UD_Danish: Relations: `ccomp`

This relation is universal.

597 nodes (1%) are attached to their parents as `ccomp`.

327 instances of `ccomp` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.5226130653266.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="da-pos-VERB.html">VERB</a></tt>-<tt><a href="da-pos-VERB.html">VERB</a></tt> (542; 91% instances), <tt><a href="da-pos-VERB.html">VERB</a></tt>-<tt><a href="da-pos-NOUN.html">NOUN</a></tt> (37; 6% instances), <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="da-pos-VERB.html">VERB</a></tt>-<tt><a href="da-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="da-pos-VERB.html">VERB</a></tt>-<tt><a href="da-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="da-pos-VERB.html">VERB</a></tt>-<tt><a href="da-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 ccomp	color:blue
1	Kelds	Keld	PROPN	_	Case=Gen	2	nmod:poss	_	_
2	oplæg	oplæg	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	nsubj	_	_
3	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
4	fulgt	følge	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	9	ccomp	_	_
5	100	100	NUM	_	NumType=Card	6	nummod	_	_
6	procent	procent	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	4	obl	_	_
7	,	,	PUNCT	_	_	4	punct	_	_
8	"	"	PUNCT	_	_	4	punct	_	_
9	pointerer	pointere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	Susan	Susan	PROPN	_	_	9	nsubj	_	_
11	Mackensie	Mackensie	PROPN	_	_	10	flat	_	_
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 ccomp	color:blue
1	Hun	hun	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	lod	lade	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	mig	jeg	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=1|PronType=Prs	2	obj	_	_
4	tro	tro	VERB	_	VerbForm=Inf|Voice=Act	2	xcomp	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	at	at	SCONJ	_	_	10	mark	_	_
7	du	du	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=2|PronType=Prs	10	nsubj	_	_
8	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	10	cop	_	_
9	min	min	DET	_	Gender=Com|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	10	det	_	_
10	far	far	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	4	ccomp	_	_
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	Computermanden	computermand	NOUN	_	Definite=Def|Gender=Com|Number=Sing	0	root	_	_
2	:	:	PUNCT	_	_	1	punct	_	_
3	"	"	PUNCT	_	_	5	punct	_	_
4	Hvorfor	hvorfor	ADV	_	_	5	advmod	_	_
5	skulle	skulle	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	1	ccomp	_	_
6	den	den	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
7	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
8	?	?	PUNCT	_	_	1	punct	_	_

~~~


