---
layout: base
title:  'Statistics of flat:foreign in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `flat:foreign`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_sequoia-dep-flat-name.html">flat:name</a></tt>.

143 nodes (0%) are attached to their parents as `flat:foreign`.

143 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.7972027972028.

The following 10 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="fr_sequoia-pos-X.html">X</a></tt>-<tt><a href="fr_sequoia-pos-X.html">X</a></tt> (85; 59% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-X.html">X</a></tt> (41; 29% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (5; 3% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="fr_sequoia-pos-X.html">X</a></tt>-<tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="fr_sequoia-pos-X.html">X</a></tt>-<tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	Drinking	Drinking	X	_	Foreign=Yes	0	root	_	Lang=en
2	From	From	X	_	Foreign=Yes	1	flat:foreign	_	Lang=en
3	Home	Home	X	_	Foreign=Yes	1	flat:foreign	_	Lang=en|SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:foreign	color:blue
1	-	-	PUNCT	_	_	4	punct	_	_
2	^	^	PUNCT	_	_	4	punct	_	_
3	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	Reuters	Reuters	PROPN	_	_	0	root	_	_
5	admits	admits	X	_	Foreign=Yes	4	flat:foreign	_	Lang=en
6	altering	altering	X	_	Foreign=Yes	4	flat:foreign	_	Lang=en
7	Beirut	Beirut	PROPN	_	_	4	flat:foreign	_	_
8	photo	photo	X	_	_	4	flat:foreign	_	SpaceAfter=No
9	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 flat:foreign	color:blue
1	-	-	PUNCT	_	_	4	punct	_	_
2	^	^	PUNCT	_	_	4	punct	_	_
3	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	Reuters	Reuters	PROPN	_	_	0	root	_	_
5	drops	drops	X	_	Foreign=Yes	4	flat:foreign	_	Lang=en
6	freelance	freelance	X	_	Foreign=Yes	4	flat:foreign	_	Lang=en
7	Lebanese	Lebanese	X	_	Foreign=Yes	4	flat:foreign	_	Lang=en
8	photographer	photographer	X	_	Foreign=Yes	4	flat:foreign	_	Lang=en
9	over	over	X	_	Foreign=Yes	4	flat:foreign	_	Lang=en
10	image	image	NOUN	_	_	4	flat:foreign	_	SpaceAfter=No
11	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	Reuters	Reuters	PROPN	_	_	4	parataxis	_	SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	August	August	NOUN	_	Gender=Masc|Number=Sing	13	parataxis	_	_
16	6	6	NUM	_	NumType=Card	15	flat:foreign	_	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	_	_
18	2006	2006	NUM	_	NumType=Card	15	parataxis	_	SpaceAfter=No
19	.	.	PUNCT	_	_	4	punct	_	_

~~~


