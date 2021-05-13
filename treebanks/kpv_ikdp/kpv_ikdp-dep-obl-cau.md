---
layout: base
title:  'Statistics of obl:cau in UD_Komi_Zyrian-IKDP'
udver: '2'
---

## Treebank Statistics: UD_Komi_Zyrian-IKDP: Relations: `obl:cau`

This relation is a language-specific subtype of <tt><a href="kpv_ikdp-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="kpv_ikdp-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="kpv_ikdp-dep-obl-lmp.html">obl:lmp</a></tt>, <tt><a href="kpv_ikdp-dep-obl-lto.html">obl:lto</a></tt>, <tt><a href="kpv_ikdp-dep-obl-tmod.html">obl:tmod</a></tt>.

1 nodes (0%) are attached to their parents as `obl:cau`.

1 instances of `obl:cau` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `obl:cau`: <tt><a href="kpv_ikdp-pos-VERB.html">VERB</a></tt>-<tt><a href="kpv_ikdp-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:cau	color:blue
1	И	и	CCONJ	CC	_	3	cc	_	_
2	ме	ме	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	GTtags=Pers,Sg1,Nom
3	кӧсъя	кӧсйыны	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg1
4	сіе	сійӧ	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	obj	_	GTtags=Pers,Sg3,Nom,Err/Dial
5	видлооны	видлавны	VERB	V	VerbForm=Inf	3	xcomp	_	GTtags=Err/Dial,Inf
6	сы	сійӧ	PRON	Pron	Case=Adp|Number=Sing|Person=3|PronType=Prs	3	obl:cau	_	GTtags=Pers,Sg3,Cmpl
7	вӧсна	вӧсна	ADP	Adp	AdpType=Post	6	case	_	GTtags=Po
8	вот	вот	ADV	Adv	_	6	advmod	_	GTtags=Parenthetic|SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


