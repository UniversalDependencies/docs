---
layout: base
title:  'Statistics of aux in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="fi_ood-dep-aux-pass.html">aux:pass</a></tt>.

543 nodes (3%) are attached to their parents as `aux`.

512 instances of `aux` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88397790055249.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (428; 79% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (49; 9% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (26; 5% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (15; 3% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (13; 2% instances), <tt><a href="fi_ood-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="fi_ood-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ood-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux	color:blue
1	Jouduttu	joutua	AUX	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	2	aux	_	_
2	intuboimaan	intuboida	VERB	_	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	0	root	_	_
3	potilas	potilas	NOUN	_	Case=Nom|Number=Sing	2	obj	_	SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux	color:blue
1	Raajoissa	raaja	NOUN	_	Case=Ine|Number=Plur	0	root	_	_
2	ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	1	aux	_	_
3	juurikaan	juuri	ADV	_	Clitic=Kaan	1	advmod	_	_
4	liikettä	liike	NOUN	_	Case=Par|Number=Sing	1	nsubj:cop	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	torakaalinen	torakaalinen	ADJ	_	Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing	7	amod	_	Gen_desc=rintakehään_liittyvä
7	ryhti	ryhti	NOUN	_	Case=Nom|Number=Sing	8	nsubj:cop	_	_
8	huono	huono	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	1	parataxis	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux	color:blue
1	Ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	_	_
2	ole	olla	AUX	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	limainen	limainen	ADJ	_	Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


