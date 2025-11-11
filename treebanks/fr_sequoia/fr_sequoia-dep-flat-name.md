---
layout: base
title:  'Statistics of flat:name in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `flat:name`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_sequoia-dep-flat-foreign.html">flat:foreign</a></tt>.

807 nodes (1%) are attached to their parents as `flat:name`.

807 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07434944237918.

The following 5 pairs of parts of speech are connected with `flat:name`: <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (696; 86% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (86; 11% instances), <tt><a href="fr_sequoia-pos-X.html">X</a></tt>-<tt><a href="fr_sequoia-pos-X.html">X</a></tt> (17; 2% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-X.html">X</a></tt> (7; 1% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	vice-président	vice-président	NOUN	_	Number=Sing	0	root	_	Gender[lex]=Masc
2	:	:	PUNCT	_	_	3	punct	_	_
3	André	André	PROPN	_	Gender=Masc|Number=Sing	1	nmod	_	_
4	Ménétrez	Ménétrez	PROPN	_	_	3	flat:name	_	Gender[lex]=Unknown
5	;	;	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	M.	monsieur	NOUN	_	Number=Sing	3	nsubj	_	Gender[lex]=Masc
2	Hosneld	Hosneld	PROPN	_	_	1	flat:name	_	Gender[lex]=Unknown
3	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	44	44	NUM	_	NumType=Card	5	nummod	_	Number[lex]=Plur
5	ans	an	NOUN	_	Number=Plur	3	obj	_	Gender[lex]=Masc|SpaceAfter=No
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
6	18	18	NUM	_	NumType=Card	3	nmod	_	Number[lex]=Sing
7	février	février	NOUN	_	Number=Sing	6	nmod	_	Gender[lex]=Masc
8	1989	1989	NUM	_	NumType=Card	7	nmod	_	Number[lex]=Sing|SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


