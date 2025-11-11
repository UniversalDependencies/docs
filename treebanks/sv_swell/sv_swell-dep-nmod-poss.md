---
layout: base
title:  'Statistics of nmod:poss in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="sv_swell-dep-nmod.html">nmod</a></tt>.

173 nodes (2%) are attached to their parents as `nmod:poss`.

173 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17919075144509.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (140; 81% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (26; 15% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (7; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:poss	color:blue
1	Mitt	jag	PRON	_	Definite=Def|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	3	nmod:poss	_	CorrectionLabels=M-Gend
2	favoritt	favoritt	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing|Typo=Yes	3	amod	_	CorrectionLabels=O;O-Comp
3	plats	plats	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	0	root	_	CorrectionLabels=O:2;O-Comp:2
4	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Pengarnas	pengar	NOUN	_	Case=Gen|Definite=Def|Gender=Com|Number=Plur	2	nmod:poss	_	_
2	betydelse	betydelse	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
3	i	i	ADP	_	_	4	case	_	_
4	livet	liv	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	2	nmod	_	_
5	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Göteborgs	Göteborg	PROPN	_	Case=Gen	2	nmod:poss	_	_
2	universitet	universitet	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
3	,	,	PUNCT	_	_	4	punct	_	_
4	1-12	1-12	NUM	_	Case=Nom|NumType=Card	2	dep	_	_
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


