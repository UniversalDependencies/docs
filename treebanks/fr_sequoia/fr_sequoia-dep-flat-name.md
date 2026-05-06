---
layout: base
title:  'Statistics of flat:name in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="fr_sequoia-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_sequoia-dep-flat-foreign.html">flat:foreign</a></tt>.

807 nodes (1%) are attached to their parents as `flat:name`.

807 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07434944237918.

The following 5 pairs of parts of speech are connected with `flat:name`: <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (696; 86% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (86; 11% instances), <tt><a href="fr_sequoia-pos-X.html">X</a></tt>-<tt><a href="fr_sequoia-pos-X.html">X</a></tt> (20; 2% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-X.html">X</a></tt> (4; 0% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	vice-président	vice-président	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Inherent
2	:	:	PUNCT	_	_	3	punct	_	_
3	André	André	PROPN	_	Gender=Masc|Number=Sing	1	nmod	_	Exponence[Gender]=Inherent
4	Ménétrez	Ménétrez	PROPN	_	_	3	flat:name	_	_
5	;	;	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	M.	monsieur	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	Exponence[Gender]=Inherent
2	Hosneld	Hosneld	PROPN	_	_	1	flat:name	_	_
3	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	44	44	NUM	_	Number=Plur|NumType=Card	5	nummod	_	Exponence[Number]=Inherent
5	ans	an	NOUN	_	Gender=Masc|Number=Plur	3	obj	_	Exponence[Gender]=Inherent|SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	^	^	PUNCT	_	_	3	punct	_	_
3	The	The	X	_	Foreign=Yes	0	root	_	Lang=en
4	Economist	Economist	X	_	Foreign=Yes	3	flat:name	_	Lang=en|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	18	18	NUM	_	Number=Sing|NumType=Card	3	nmod	_	Exponence[Number]=Inherent
7	février	février	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	Exponence[Gender]=Inherent
8	1989	1989	NUM	_	Number=Sing|NumType=Card	7	nmod	_	Exponence[Number]=Inherent|SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


