---
layout: base
title:  'Statistics of flat in UD_Portuguese'
udver: '2'
---

## Treebank Statistics: UD_Portuguese: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="pt-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="pt-dep-flat-name.html">flat:name</a></tt>.

14 nodes (0%) are attached to their parents as `flat`.

14 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.42857142857143.

The following 4 pairs of parts of speech are connected with `flat`: <tt><a href="pt-pos-NUM.html">NUM</a></tt>-<tt><a href="pt-pos-NUM.html">NUM</a></tt> (7; 50% instances), <tt><a href="pt-pos-NUM.html">NUM</a></tt>-<tt><a href="pt-pos-CCONJ.html">CCONJ</a></tt> (4; 29% instances), <tt><a href="pt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt-pos-PROPN.html">PROPN</a></tt> (2; 14% instances), <tt><a href="pt-pos-NUM.html">NUM</a></tt>-<tt><a href="pt-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat	color:blue
1	Trinta	trinta	NUM	_	NumType=Card	4	nummod	_	MWE=trinta_e_sete|MWEPOS=NUM
2	e	e	CCONJ	_	_	1	flat	_	_
3	sete	sete	NUM	_	NumType=Card	1	flat	_	_
4	anos	ano	NOUN	<np-def>|N|M|P|@NPHR	Gender=Masc|Number=Plur	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Trinta	trinta	NUM	_	NumType=Card	4	nummod	_	MWE=trinta_e_sete|MWEPOS=NUM
2	e	e	CCONJ	_	_	1	flat	_	_
3	sete	sete	NUM	_	NumType=Card	1	flat	_	_
4	anos	ano	NOUN	<np-def>|N|M|P|@NPHR	Gender=Masc|Number=Plur	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 flat	color:blue
1	TEATRO	TEATRO	PROPN	PROP|M|S|@NPHR	Gender=Masc|Number=Sing	0	root	_	MWE=TEATRO_NACIONAL_DE_D.Maria_II
2	NACIONAL	NACIONAL	PROPN	PROP|@N<	Number=Sing	1	flat:name	_	_
3	DE	DE	PROPN	PROP|@N<	Number=Sing	1	flat:name	_	_
4	D.	D.	PROPN	_	_	1	flat	_	_
5	MARIA	MARIA	PROPN	PROP|@N<	Number=Sing	1	flat:name	_	_
6	II	II	PROPN	PROP	Number=Sing	1	flat:name	_	SpaceAfter=No
7	.	.	PUNCT	PU|@PU	_	1	punct	_	_

~~~


