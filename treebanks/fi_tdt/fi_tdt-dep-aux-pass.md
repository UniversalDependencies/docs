---
layout: base
title:  'Statistics of aux:pass in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="fi_tdt-dep-aux.html">aux</a></tt>.

760 nodes (0%) are attached to their parents as `aux:pass`.

757 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33026315789474.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (758; 100% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Syytä	syy	NOUN	N	Case=Par|Number=Sing	10	obj	10:obj	_
2	sille	se	PRON	Pron	Case=All|Number=Sing|PronType=Dem	1	nmod	1:nmod	SpaceAfter=No
3	,	,	PUNCT	Punct	_	7	punct	7:punct	_
4	miksi	miksi	ADV	Adv	_	7	advmod	7:advmod	_
5	minut	minä	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	7	obj	7:obj	_
6	oli	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	aux:pass	7:aux:pass	_
7	suodatettu	suodattaa	VERB	V	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	2	ccomp	2:ccomp	SpaceAfter=No
8	,	,	PUNCT	Punct	_	7	punct	7:punct	_
9	en	ei	AUX	V	Number=Sing|Person=1|Polarity=Neg|VerbForm=Fin|Voice=Act	10	aux	10:aux	_
10	tiedä	tietää	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	Punct	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Nyt	nyt	ADV	Adv	_	3	advmod	3:advmod	_
2	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	_
3	täällä	täällä	ADV	Adv	_	0	root	0:root	_
4	oltu	olla	AUX	V	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	3	cop	3:cop	_
5	3,5	3,5	NUM	Num	NumType=Card	6	nummod	6:nummod	_
6	kk	kk	NOUN	N	Abbr=Yes|Case=Par|Number=Sing	3	obl	3:obl	_
7	ja	ja	CCONJ	C	_	8	cc	8:cc	_
8	edessä	edessä	ADV	Adv	_	3	conj	3:conj	_
9	enää	enää	ADV	Adv	_	8	advmod	8:advmod	_
10	reilu	reilu	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	11	amod	11:amod	_
11	kuukausi	kuukausi	NOUN	N	Case=Nom|Number=Sing	8	nsubj:cop	8:nsubj:cop	SpaceAfter=No
12	.	.	PUNCT	Punct	_	3	punct	3:punct	_

~~~


