---
layout: base
title:  'Statistics of aux:pass in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="sv_pud-dep-aux.html">aux</a></tt>.

8 nodes (0%) are attached to their parents as `aux:pass`.

8 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (7; 88% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Människor	människa	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	nsubj	3:nsubj	_
2	blev	bli	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	_
3	dödade	dödad	ADJ	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur|Tense=Past|VerbForm=Part	0	root	0:root	_
4	där	där	ADV	AB	_	3	advmod	3:advmod	SpaceAfter=No
5	.	.	PUNCT	MAD	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux:pass	color:blue
1	Tidigare	tidigt	ADV	AB|KOM	Degree=Cmp	5	advmod	5:advmod	_
2	hade	ha	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	aux:pass	5:aux:pass	_
3	jetplanen	jetplan	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	5	nsubj:pass	5:nsubj:pass	_
4	bara	bara	ADV	AB	_	5	advmod	5:advmod	_
5	setts	se	VERB	VB|SUP|SFO	VerbForm=Sup|Voice=Pass	0	root	0:root	_
6	av	av	ADP	PP	_	7	case	7:case	_
7	bloggare	bloggare	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	obl:agent	5:obl:agent	SpaceAfter=No
8	.	.	PUNCT	MAD	_	5	punct	5:punct	_

~~~


