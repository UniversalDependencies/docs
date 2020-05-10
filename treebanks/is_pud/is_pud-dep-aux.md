---
layout: base
title:  'Statistics of aux in UD_Icelandic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-PUD: Relations: `aux`

This relation is universal.

500 nodes (3%) are attached to their parents as `aux`.

470 instances of `aux` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (453; 91% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (22; 4% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (22; 4% instances), <tt><a href="is_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="is_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="is_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 aux	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Enn	enn	ADV	aa	_	5	cc	_	_
2	er	vera	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
3	þó	þó	ADV	aa	_	5	advmod	_	_
4	spurningum	spurning	NOUN	nvfþ	Case=Dat|Definite=Ind|Gender=Fem|Number=Plur	5	nsubj	_	_
5	ósvarað	ósvaraður	ADJ	lhensf	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 aux	color:blue
1	Efnahagur	efnahagur	NOUN	nken	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	7	nsubj	_	_
2	borgarinnar	borg	NOUN	nveeg	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	nmod:poss	_	_
3	hefur	hafa	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
4	verið	vera	AUX	ssg	VerbForm=Sup|Voice=Act	7	cop	_	_
5	á	á	ADP	aþ	_	7	case	_	_
6	hraðri	hraður	ADJ	lveþsf	Case=Dat|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_
7	niðurleið	niðurleið	NOUN	nveþ	Case=Dat|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
8	frá	frá	ADP	aþ	_	10	case	_	_
9	7.	7.	NUM	ta	_	10	nummod	_	_
10	áratugnum	áratugur	NOUN	nkeþg	Case=Dat|Definite=Def|Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	_	_

~~~


