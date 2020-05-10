---
layout: base
title:  'Statistics of cop in UD_Icelandic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-PUD: Relations: `cop`

This relation is universal.

469 nodes (2%) are attached to their parents as `cop`.

442 instances of `cop` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.14285714285714.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (250; 53% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (144; 31% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (19; 4% instances), <tt><a href="is_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (18; 4% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (15; 3% instances), <tt><a href="is_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (11; 2% instances), <tt><a href="is_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (8; 2% instances), <tt><a href="is_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="is_pud-pos-INTJ.html">INTJ</a></tt>-<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cop	color:blue
1	5.000	5.000	NUM	ta	_	2	nummod	_	_
2	Bandaríkjadalir	bandaríkjadöl	NOUN	nvfn	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	0	root	_	_
3	á	á	ADP	ao	_	4	case	_	_
4	mann	maður	NOUN	nkeo	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	2	punct	_	_
6	sem	sem	SCONJ	ct	_	8	nsubj	_	_
7	er	vera	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	hámarkið	hámark	NOUN	nheng	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	2	acl:relcl	_	_
9	sem	sem	SCONJ	ct	_	10	nsubj	_	_
10	leyft	leyfa	VERB	sþghen	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	8	acl:relcl	_	_
11	er	vera	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 cop	color:blue
1	Kannski	kannski	ADV	aa	_	7	advmod	_	_
2	voru	vera	AUX	sfg3fþ	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
3	kröfur	krafa	NOUN	nvfn	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	7	nsubj	_	_
4	um	um	ADP	ao	_	5	case	_	_
5	klæðaburð	klæðaburð	NOUN	nveo	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	3	nmod	_	_
6	of	of	ADV	aa	_	7	advmod	_	_
7	strangar	strangur	ADJ	lvfnsf	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	Smellurinn	smellur	NOUN	nkeng	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	_
2	er	vera	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	„	„	PUNCT	„	PunctSide=Ini	4	punct	_	SpaceAfter=No
4	Geronimo	Geronimo	PROPN	e	_	0	root	_	SpaceAfter=No
5	“	“	PUNCT	“	PunctSide=Fin	4	punct	_	_
6	með	með	ADP	ao	_	7	case	_	_
7	Sheppard	Sheppard	PROPN	nheo-s	Case=Acc|Gender=Neut|Number=Sing	4	nmod	_	SpaceAfter=No
8	.	.	PUNCT	.	_	4	punct	_	_

~~~


