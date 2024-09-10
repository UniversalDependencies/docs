---
layout: base
title:  'Statistics of compound in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="sv_talbanken-dep-compound-prt.html">compound:prt</a></tt>.

21 nodes (0%) are attached to their parents as `compound`.

21 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0952380952381.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (14; 67% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt> (6; 29% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Nato	Nato	PROPN	PM|NOM	Case=Nom	0	root	0:root	SpaceAfter=No
2	:	:	PUNCT	MID	_	1	punct	1:punct	_
3	North	North	ADJ	JJ	Degree=Pos|Foreign=Yes	4	amod	4:amod	Lang=en
4	Atlantic	Atlantic	PROPN	PM|NOM	Case=Nom	5	compound	5:compound	_
5	Treaty	Treaty	NOUN	NN	_	6	compound	6:compound	_
6	Organization	Organization	NOUN	NN	_	1	appos	1:appos	_
7	(	(	PUNCT	PAD	_	6	punct	6:punct	SpaceAfter=No
8	Atlantpakten	Atlantpakten	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	appos	6:appos	SpaceAfter=No
9	)	)	PUNCT	PAD	_	6	punct	6:punct	SpaceAfter=No
10	.	.	PUNCT	MAD	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Krav	krav	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	0	root	0:root	_
2	på	på	ADP	PP	_	3	case	3:case	_
3	flytväst	flytväst	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	1	nmod	1:nmod:på	_
4	med	med	ADP	PP	_	6	case	6:case	_
5	VDN	VDN	PROPN	PM|NOM	Case=Nom	6	compound	6:compound	_
6	Fakta	faktum	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	3	nmod	3:nmod:med	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Efta	Efta	PROPN	PM|NOM	Case=Nom	0	root	0:root	SpaceAfter=No
2	:	:	PUNCT	MID	_	1	punct	1:punct	_
3	European	European	ADJ	JJ	Degree=Pos|Foreign=Yes	6	amod	6:amod	Lang=en
4	Free	Free	ADJ	JJ	Degree=Pos|Foreign=Yes	5	compound	5:compound	Lang=en
5	Trade	Trade	NOUN	NN	_	6	compound	6:compound	_
6	Association	Association	NOUN	NN	_	1	appos	1:appos	_
7	(	(	PUNCT	PAD	_	6	punct	6:punct	SpaceAfter=No
8	Den	den	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Art	10	det	10:det	_
9	europeiska	europeisk	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos	10	amod	10:amod	_
10	frihandelssammanslutningen	frihandelssammanslutning	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	appos	6:appos	SpaceAfter=No
11	)	)	PUNCT	PAD	_	6	punct	6:punct	_

~~~


