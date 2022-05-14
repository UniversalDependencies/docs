---
layout: base
title:  'Statistics of det in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `det`

This relation is universal.

245 nodes (2%) are attached to their parents as `det`.

243 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35510204081633.

The following 6 pairs of parts of speech are connected with `det`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (230; 94% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Kaikkiin	kaikki	PRON	_	Case=Ill|Number=Plur|PronType=Ind	2	det	2:det	_
2	kysymyksiin	kysymys	NOUN	_	Case=Ill|Number=Plur	7	obl	7:obl	_
3	ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	7	aux	7:aux	_
4	kuitenkaan	kuitenkaan	ADV	_	_	7	advmod	7:advmod	_
5	vielä	vielä	ADV	_	_	7	advmod	7:advmod	_
6	ole	olla	AUX	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	7	aux:pass	7:aux:pass	_
7	vastattu	vastata	VERB	_	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 det	color:blue
1	Tästä	tämä	PRON	_	Case=Ela|Number=Sing|PronType=Dem	5	obl	5:obl	_
2	huolimatta	huolimatta	ADP	_	AdpType=Post	1	case	1:case	_
3	he	hän	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	5:nsubj	_
4	molemmat	molemmat	PRON	_	Case=Nom|Number=Plur|PronType=Ind	3	det	3:det	_
5	vaikuttavat	vaikuttaa	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	hallinneen	hallita	VERB	_	Case=Gen|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	5	xcomp	5:xcomp	_
7	ainakin	ainakin	ADV	_	_	6	advmod	6:advmod	_
8	osia	osa	NOUN	_	Case=Par|Number=Plur	6	obj	6:obj	_
9	Ala-Egyptistä	Ala-Egypti	NOUN	_	Case=Ela|Number=Sing	8	nmod	8:nmod	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Sano	sanoa	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	jotain	jokin	PRON	_	Case=Par|Number=Sing|PronType=Ind	3	det	3:det	_
3	ratkaisevaa	ratkaiseva	ADJ	_	Case=Par|Degree=Pos|Number=Sing	1	obj	1:obj	SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


