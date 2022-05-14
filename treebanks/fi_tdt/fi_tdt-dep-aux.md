---
layout: base
title:  'Statistics of aux in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="fi_tdt-dep-aux-pass.html">aux:pass</a></tt>.

5831 nodes (3%) are attached to their parents as `aux`.

5622 instances of `aux` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.78580003429943.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (4879; 84% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (435; 7% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (261; 4% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (129; 2% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (92; 2% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (19; 0% instances), <tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="fi_tdt-pos-ADP.html">ADP</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	Se	se	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	3	det	3:det	_
2	sisäinen	sisäinen	ADJ	A	Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing	3	amod	3:amod	_
3	lapseni	lapsi	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	6:nsubj|7:nsubj	_
4	ei	ei	AUX	V	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
5	vaan	vaan	ADV	Adv	_	6	advmod	6:advmod	_
6	suostu	suostua	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
7	katoamaan	kadota	VERB	V	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	6	xcomp	6:xcomp	SpaceAfter=No
8	.	.	PUNCT	Punct	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 aux	color:blue
1	Halvimmat	halpa	ADJ	A	Case=Nom|Degree=Sup|Number=Plur	9	nsubj:cop	9:nsubj:cop	_
2	mitä	mikä	PRON	Pron	Case=Par|Number=Sing|PronType=Rel	4	obj	4:obj	_
3	olen	olla	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	nähnyt	nähdä	VERB	V	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	1	acl:relcl	1:acl:relcl	_
5	ovat	olla	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	9:aux	_
6	olleet	olla	AUX	V	Case=Nom|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Act	9	cop	9:cop	_
7	yli	yli	ADV	Adv	_	8	advmod	8:advmod	_
8	400	400	NUM	Num	NumType=Card	9	nummod	9:nummod	_
9	euroa	euro	NOUN	N	Case=Par|Number=Sing	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	Punct	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux	color:blue
1	Eivätkö	ei	AUX	V	Clitic=Ko|Number=Plur|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
2	olekin	olla	AUX	V	Clitic=Kin|Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	3:cop	_
3	kivat	kiva	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	0	root	0:root	SpaceAfter=No
4	?	?	PUNCT	Punct	_	3	punct	3:punct	_

~~~


