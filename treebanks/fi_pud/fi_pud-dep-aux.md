---
layout: base
title:  'Statistics of aux in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="fi_pud-dep-aux-pass.html">aux:pass</a></tt>.

362 nodes (2%) are attached to their parents as `aux`.

347 instances of `aux` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.61878453038674.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (305; 84% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (28; 8% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (15; 4% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (6; 2% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (6; 2% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	Aiemmin	aiemmin	ADV	_	_	5	advmod	5:advmod	_
2	ainoastaan	ainoastaan	ADV	_	_	3	advmod	3:advmod	_
3	bloggaajat	bloggaaja	NOUN	_	Case=Nom|Derivation=Ja|Number=Plur	5	nsubj	5:nsubj	_
4	olivat	olla	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
5	nähneet	nähdä	VERB	_	Case=Nom|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
6	suihkukoneet	suihku#kone	NOUN	_	Case=Nom|Number=Plur	5	obj	5:obj	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux	color:blue
1	Ranskalla	ranska	NOUN	_	Case=Ade|Number=Sing	0	root	0:root	_
2	ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	1	aux	1:aux	_
3	ole	olla	AUX	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	1	cop:own	1:cop:own	_
4	hyvä	hyvä	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	5	amod	5:amod	_
5	maine	maine	NOUN	_	Case=Nom|Number=Sing	1	nsubj:cop	1:nsubj:cop	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 aux	color:blue
1	Ehkäpä	ehkäpä	ADV	_	_	4	advmod	4:advmod	_
2	se	se	PRON	_	Case=Nom|Number=Sing|PronType=Dem	4	nsubj	4:nsubj	_
3	ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	haittaa	haitata	VERB	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	_	_	10	punct	10:punct	_
6	koska	koska	SCONJ	_	_	10	mark	10:mark	_
7	en	ei	AUX	_	Number=Sing|Person=1|Polarity=Neg|VerbForm=Fin|Voice=Act	10	aux	10:aux	_
8	ole	olla	AUX	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
9	kauaa	kauaa	ADV	_	_	10	advmod	10:advmod	_
10	levoton	levoton	ADJ	_	Case=Nom|Degree=Pos|Derivation=Ton|Number=Sing	4	advcl	4:advcl	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


