---
layout: base
title:  'Statistics of csubj:cop in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `csubj:cop`

This relation is a language-specific subtype of <tt><a href="et-dep-csubj.html">csubj</a></tt>.

146 nodes (0%) are attached to their parents as `csubj:cop`.

134 instances of `csubj:cop` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.21232876712329.

The following 9 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (101; 69% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (31; 21% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="et-pos-AUX.html">AUX</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 csubj:cop	color:blue
1	b	b	NOUN	Y	Abbr=Yes	5	dep	_	SpaceAfter=No
2	)	)	PUNCT	Z	_	5	punct	_	_
3	Kaarsillal	Kaar_sild	PROPN	S	Case=Ade|Number=Sing	5	obl	_	_
4	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	ohtlik	ohtlik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
6	ronida	ronima	VERB	V	VerbForm=Inf	5	csubj:cop	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj:cop	color:blue
1	"	"	PUNCT	Z	_	3	punct	_	SpaceAfter=No
2	Sinu	sina	PRON	P	Case=Gen|Number=Sing|Person=2|PronType=Prs	3	nmod	_	_
3	asi	asi	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
4	pole	olema	AUX	V	Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
5	minu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	8	obl	_	_
6	üle	üle	ADP	K	AdpType=Post	5	case	_	_
7	kohut	kohus	NOUN	S	Case=Par|Number=Sing	8	obj	_	_
8	mõista	mõistma	VERB	V	VerbForm=Inf	3	csubj:cop	_	SpaceAfter=No
9	!	!	PUNCT	Z	_	3	punct	_	SpaceAfter=No
10	"	"	PUNCT	Z	_	3	punct	_	_
11	ütles	ütlema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis	_	_
12	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
13	manitsevalt	manitsevalt	ADV	D	_	11	advmod	_	SpaceAfter=No
14	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:cop	color:blue
1	Imelik	imelik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	7	punct	_	_
3	kuidas	kuidas	ADV	D	_	7	mark	_	_
4	ahastus	ahastus	NOUN	S	Case=Nom|Number=Sing	7	nsubj:cop	_	_
5	saab	saama	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
6	nii	nii	ADV	D	_	7	advmod	_	_
7	rahulik	rahulik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	1	csubj:cop	_	_
8	olla	olema	AUX	V	VerbForm=Inf	7	cop	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	1	punct	_	_

~~~


