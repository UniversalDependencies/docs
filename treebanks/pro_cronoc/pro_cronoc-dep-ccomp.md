---
layout: base
title:  'Statistics of ccomp in UD_Old_Occitan-CronOc'
udver: '2'
---

## Treebank Statistics: UD_Old_Occitan-CronOc: Relations: `ccomp`

This relation is universal.

417 nodes (1%) are attached to their parents as `ccomp`.

408 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.58992805755396.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="pro_cronoc-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_cronoc-pos-VERB.html">VERB</a></tt> (375; 90% instances), <tt><a href="pro_cronoc-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_cronoc-pos-NOUN.html">NOUN</a></tt> (17; 4% instances), <tt><a href="pro_cronoc-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_cronoc-pos-ADJ.html">ADJ</a></tt> (11; 3% instances), <tt><a href="pro_cronoc-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_cronoc-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="pro_cronoc-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_cronoc-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="pro_cronoc-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_cronoc-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="pro_cronoc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pro_cronoc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pro_cronoc-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_cronoc-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 ccomp	color:blue
1	E	e	CCONJ	_	_	8	cc	_	_
2	Karles	_	PROPN	_	_	8	nsubj	_	_
3	,	,	PUNCT	_	_	8	punct	_	_
4	can	can	SCONJ	_	_	6	mark	_	_
5	los	el	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	6	obj	_	_
6	vi	vezer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	advcl	_	_
7	,	,	PUNCT	_	_	8	punct	_	_
8	demandec	demandar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	lor	el	PRON	_	Number=Plur|Person=3|PronType=Prs	8	iobj	_	_
10	que	que	PRON	_	PronType=Int	12	obj	_	_
11	avian	aver	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	12	aux	_	_
12	fait	faire	VERB	_	Tense=Past|VerbForm=Part	8	ccomp	_	_
13	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	yeu	eu	PRON	_	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Reported=Yes
2	sey	saber	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Reported=Yes
3	que	que	SCONJ	_	_	8	mark	_	Reported=Yes
4	vos	vos	PRON	_	Number=Plur|Person=2|PronType=Prs	8	nsubj	_	Reported=Yes
5	estz	eser	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	cop	_	Reported=Yes
6	le	lo	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	Reported=Yes
7	milhor	melhor	ADJ	_	_	8	amod	_	Reported=Yes
8	cavaier	cavalier	NOUN	_	_	2	ccomp	_	Reported=Yes
9	de	de	ADP	_	_	11	case	_	Reported=Yes
10	tota	tot	DET	_	Gender=Fem|Number=Sing|PronType=Ind	11	det	_	Reported=Yes
11	crestiantat	crestiandat	NOUN	_	_	8	nmod	_	Reported=Yes
12	.	.	PUNCT	_	_	2	punct	_	Reported=Yes

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	"	"	PUNCT	_	_	3	punct	_	Reported=Yes
2	Ara	ar	ADV	_	_	3	advmod	_	Reported=Yes
3	conosc	conoiser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Reported=Yes
4	que	que	SCONJ	_	_	6	mark	_	Reported=Yes
5	yest	eser	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	cop	_	Reported=Yes
6	pros	pro	ADJ	_	_	3	ccomp	_	Reported=Yes
7	e	e	CCONJ	_	_	10	cc	_	Reported=Yes
8	de	de	ADP	_	_	10	case	_	Reported=Yes
9	bon	bon	ADJ	_	_	10	amod	_	Reported=Yes
10	linhage	linhatge	NOUN	_	_	6	conj	_	Reported=Yes
11	,	,	PUNCT	_	_	3	punct	_	Reported=Yes

~~~


