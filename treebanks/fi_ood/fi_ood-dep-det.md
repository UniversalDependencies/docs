---
layout: base
title:  'Statistics of det in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `det`

This relation is universal.

285 nodes (1%) are attached to their parents as `det`.

274 instances of `det` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31228070175439.

The following 7 pairs of parts of speech are connected with `det`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (249; 87% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (13; 5% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (8; 3% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="fi_ood-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	joinakin	jokin	PRON	_	Case=Ess|Number=Plur|PronType=Ind	2	det	_	_
2	tunteina	tunti	NOUN	_	Case=Ess|Number=Plur	3	obl	_	_
3	tullut	tulla	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	pieniä	pieni	ADJ	_	Case=Par|Degree=Pos|Number=Plur	5	amod	_	_
5	määriä	määrä	NOUN	_	Case=Par|Number=Plur	3	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Mitään	mikään	PRON	_	Case=Par|Number=Sing|PronType=Ind	2	det	_	_
2	suolaista	suolainen	ADJ	_	Case=Par|Degree=Pos|Number=Sing	6	obj	_	_
3	ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	5	aux	_	_
4	ole	olla	AUX	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	suostunut	suostua	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	syömään	syödä	VERB	_	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	5	xcomp	_	SENSE=0|SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 det	color:blue
1	1.	1.	ADJ	_	NumType=Ord	5	obl	_	_
2	Näin	näin	ADV	_	_	5	advmod	_	_
3	se	se	PRON	_	Case=Nom|Number=Sing|PronType=Dem	5	nsubj	_	_
4	kaikki	kaikki	PRON	_	Case=Nom|Number=Sing|PronType=Ind	3	det	_	_
5	alkoi	alkaa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


