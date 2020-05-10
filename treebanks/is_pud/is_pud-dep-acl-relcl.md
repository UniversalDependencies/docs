---
layout: base
title:  'Statistics of acl:relcl in UD_Icelandic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="is_pud-dep-acl.html">acl</a></tt>.

303 nodes (2%) are attached to their parents as `acl:relcl`.

301 instances of `acl:relcl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.06270627062706.

The following 23 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (164; 54% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (29; 10% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (24; 8% instances), <tt><a href="is_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (24; 8% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt> (18; 6% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (8; 3% instances), <tt><a href="is_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="is_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="is_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="is_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl:relcl	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl:relcl	color:blue
1	Fyrsti	fyrstur	ADJ	lkenve	Case=Nom|Definite=Def|Degree=Sup|Gender=Masc|Number=Sing	2	amod	_	_
2	konungur	konungur	NOUN	nken	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	_	_
3	þeirra	hann	PRON	fpkfe	Case=Gen|Gender=Masc|Number=Plur|PronType=Prs	2	nmod:poss	_	_
4	var	vera	AUX	sfg3eþ	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_
5	Mojmír	Mojmír	PROPN	nken-s	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
6	I	i	NUM	ta	_	5	flat:name	_	_
7	(	(	PUNCT	(	_	9	punct	_	SpaceAfter=No
8	sem	sem	SCONJ	ct	_	9	nsubj	_	_
9	ríkti	ríkja	VERB	sfg3eþ	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	_
10	830–846	830–846	NUM	ta	_	9	obl:arg	_	SpaceAfter=No
11	)	)	PUNCT	)	_	9	punct	_	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 acl:relcl	color:blue
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


