---
layout: base
title:  'Statistics of compound in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="sv_talbanken-dep-compound-prt.html">compound:prt</a></tt>.

17 nodes (0%) are attached to their parents as `compound`.

17 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11764705882353.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (14; 82% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt> (2; 12% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Nato	Nato	PROPN	PM|NOM	Case=Nom	0	root	0:root	SpaceAfter=No
2	:	:	PUNCT	MID	_	1	punct	1:punct	_
3	North	North	ADJ	JJ	_	4	amod	4:amod	_
4	Atlantic	Atlantic	PROPN	PM|NOM	Case=Nom	5	compound	5:compound	_
5	Treaty	Treaty	NOUN	NN	_	6	compound	6:compound	_
6	Organization	Organization	NOUN	NN	_	1	appos	1:appos	_
7	(	(	PUNCT	PAD	_	6	punct	6:punct	SpaceAfter=No
8	Atlantpakten	Atlantpakten	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	appos	6:appos	SpaceAfter=No
9	)	)	PUNCT	PAD	_	6	punct	6:punct	SpaceAfter=No
10	.	.	PUNCT	MAD	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Nato	Nato	PROPN	PM|NOM	Case=Nom	0	root	0:root	SpaceAfter=No
2	:	:	PUNCT	MID	_	1	punct	1:punct	_
3	North	North	ADJ	JJ	_	4	amod	4:amod	_
4	Atlantic	Atlantic	PROPN	PM|NOM	Case=Nom	5	compound	5:compound	_
5	Treaty	Treaty	NOUN	NN	_	6	compound	6:compound	_
6	Organization	Organization	NOUN	NN	_	1	appos	1:appos	_
7	(	(	PUNCT	PAD	_	6	punct	6:punct	SpaceAfter=No
8	Atlantpakten	Atlantpakten	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	appos	6:appos	SpaceAfter=No
9	)	)	PUNCT	PAD	_	6	punct	6:punct	SpaceAfter=No
10	.	.	PUNCT	MAD	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Efta	Efta	PROPN	PM|NOM	Case=Nom	0	root	0:root	SpaceAfter=No
2	:	:	PUNCT	MID	_	1	punct	1:punct	_
3	European	European	ADJ	JJ	_	6	amod	6:amod	_
4	Free	Free	ADJ	JJ	_	5	compound	5:compound	_
5	Trade	Trade	NOUN	NN	_	6	compound	6:compound	_
6	Association	Association	NOUN	NN	_	1	appos	1:appos	_
7	(	(	PUNCT	PAD	_	6	punct	6:punct	SpaceAfter=No
8	Den	en	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Art	10	det	10:det	_
9	europeiska	europeisk	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	10	amod	10:amod	_
10	frihandelssammanslutningen	frihandelssammanslutning	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	appos	6:appos	SpaceAfter=No
11	)	)	PUNCT	PAD	_	6	punct	6:punct	_

~~~


