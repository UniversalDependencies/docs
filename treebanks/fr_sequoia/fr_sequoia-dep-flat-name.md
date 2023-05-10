---
layout: base
title:  'Statistics of flat:name in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `flat:name`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_sequoia-dep-flat-foreign.html">flat:foreign</a></tt>.

742 nodes (1%) are attached to their parents as `flat:name`.

742 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.10377358490566.

The following 6 pairs of parts of speech are connected with `flat:name`: <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (703; 95% instances), <tt><a href="fr_sequoia-pos-X.html">X</a></tt>-<tt><a href="fr_sequoia-pos-X.html">X</a></tt> (18; 2% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-X.html">X</a></tt> (14; 2% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-X.html">X</a></tt> (4; 1% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-X.html">X</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	vice-président	vice-président	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	:	:	PUNCT	_	_	3	punct	_	_
3	André	André	PROPN	_	Gender=Masc|Number=Sing	1	nmod	_	_
4	Ménétrez	Ménétrez	PROPN	_	_	3	flat:name	_	_
5	;	;	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	-	-	PUNCT	_	_	3	punct	_	_
2	^	^	PUNCT	_	_	3	punct	_	_
3	The	The	X	_	Foreign=Yes	0	root	_	_
4	Economist	Economist	X	_	_	3	flat:name	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	18	18	NUM	_	NumType=Card	3	nmod	_	_
7	février	février	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
8	1989	1989	NUM	_	NumType=Card	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:name	color:blue
1	EMEA	EMEA	PROPN	_	_	0	root	_	_
2	/	/	SYM	_	_	1	dep	_	_
3	H/C/595	H/C/595	X	_	_	1	flat:name	_	_

~~~


