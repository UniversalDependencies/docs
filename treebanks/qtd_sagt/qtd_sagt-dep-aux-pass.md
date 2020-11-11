---
layout: base
title:  'Statistics of aux:pass in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="qtd_sagt-dep-aux.html">aux</a></tt>.
There are also 1 other language-specific subtypes of `aux`: <tt><a href="qtd_sagt-dep-aux-q.html">aux:q</a></tt>.

9 nodes (0%) are attached to their parents as `aux:pass`.

5 instances of `aux:pass` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55555555555556.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (9; 100% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 aux:pass	color:blue
1	Und	und	CCONJ	_	_	3	cc	_	LangID=DE
2	die	der	PRON	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Dem	3	nsubj	_	LangID=DE
3	schreiben	schreiben	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	LangID=DE
4	selber	selber	ADV	_	_	3	advmod	_	LangID=DE
5	so	so	ADV	_	_	3	advmod	_	LangID=DE|SpaceAfter=No
6	:	:	PUNCT	_	_	8	punct	_	LangID=OTHER
7	"	"	PUNCT	_	_	8	punct	_	LangID=OTHER|SpaceAfter=No
8	ifşalandık	ifşalan	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=1|Tense=Past	3	parataxis	_	LangID=TR|SpaceAfter=No
9	"	"	PUNCT	_	_	8	punct	_	LangID=OTHER|SpaceAfter=No
10	,	,	PUNCT	_	_	14	punct	_	LangID=OTHER
11	so	so	ADV	_	_	14	advmod	_	LangID=DE
12	wir	wir	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	14	nsubj	_	LangID=DE
13	werden	werden	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	14	aux:pass	_	LangID=DE
14	geoutet	outen	VERB	_	VerbForm=Part	8	parataxis:trans	_	LangID=DE
15	ne	ne	INTJ	_	_	14	discourse	_	LangID=DE|SpaceAfter=No
16	.	.	PUNCT	_	_	3	punct	_	LangID=OTHER

~~~


