---
layout: base
title:  'Statistics of aux:cnd in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `aux:cnd`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-aux.html">aux</a></tt>.
There are also 4 other language-specific subtypes of `aux`: <tt><a href="mdf_jr-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="mdf_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="mdf_jr-dep-aux-opt.html">aux:opt</a></tt>, <tt><a href="mdf_jr-dep-aux-q.html">aux:q</a></tt>.

2 nodes (0%) are attached to their parents as `aux:cnd`.

1 instances of `aux:cnd` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 1 pairs of parts of speech are connected with `aux:cnd`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux:cnd	color:blue
1	Кда	кда	SCONJ	CS	_	4	mark	_	_
2	ба	ба	AUX	Pcle	Mood=Cnd|VerbType=Aux	4	aux:cnd	_	GTtags=Aux,Cond
3	сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Nom
4	лоткаль	лоткамс	VERB	V	Mood=Sub|Number[subj]=Sing|Person[subj]=3	7	advcl	_	GTtags=Conj,ScSg3
5	корхтамда	корхтамс	VERB	V	Case=Abl|VerbForm=Inf	4	obl	_	GTtags=Inf,Abl|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	4	punct	_	_
7	ушедолень	ушедомс	VERB	V	Mood=Sub|Number[subj]=Sing|Person[subj]=1	0	root	_	GTtags=Conj,ScSg1
8	ба	ба	AUX	Pcle	Mood=Cnd|VerbType=Aux	7	aux:cnd	_	GTtags=Aux,Cond
9	мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	GTtags=Pers,Sg1,Nom
10	...	...	PUNCT	PUNCT	_	7	punct	_	_

~~~


