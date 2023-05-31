---
layout: base
title:  'Statistics of aux:pass in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="fi_pud-dep-aux.html">aux</a></tt>.

43 nodes (0%) are attached to their parents as `aux:pass`.

43 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23255813953488.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (43; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Kaikkiin	kaikki	PRON	_	Case=Ill|Number=Plur|PronType=Ind	2	det	2:det	_
2	kysymyksiin	kysymys	NOUN	_	Case=Ill|Number=Plur	7	obl	7:obl	_
3	ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	7	aux	7:aux	_
4	kuitenkaan	kuitenkaan	ADV	_	_	7	advmod	7:advmod	_
5	vielä	vielä	ADV	_	_	7	advmod	7:advmod	_
6	ole	olla	AUX	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	7	aux:pass	7:aux:pass	_
7	vastattu	vastata	VERB	_	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


