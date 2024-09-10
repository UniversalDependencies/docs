---
layout: base
title:  'Statistics of nmod:gobj in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `nmod:gobj`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-nmod.html">nmod</a></tt>.
There are also 4 other language-specific subtypes of `nmod`: <tt><a href="mdf_jr-dep-nmod-bahuv.html">nmod:bahuv</a></tt>, <tt><a href="mdf_jr-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="mdf_jr-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="mdf_jr-dep-nmod-tmod.html">nmod:tmod</a></tt>.

2 nodes (0%) are attached to their parents as `nmod:gobj`.

2 instances of `nmod:gobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `nmod:gobj`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:gobj	color:blue
1	Кинди	ки	NOUN	N	Case=Dat|Definite=Ind|Number=Plur,Sing	4	obl	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=SP,Dat,Indef
2	сединь	сединь	NOUN	_	_	3	nmod:gobj	_	CGdephead=#2-&gt;0|CGdeprel=@X|GTtags=?
3	петема	петема	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	4	ccomp	_	CGdephead=#3-&gt;4|CGdeprel=@&gt;N|GTtags=Sg,Nom,Indef
4	суван	сувамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres	0	root	_	CGdephead=#4-&gt;0|CGdeprel=@SPRED|GTtags=SP,Prl,PxSg1|SpaceAfter=No
5	?	?	PUNCT	CLB	_	4	punct	_	CGdephead=#5-&gt;4|CGdeprel=@X|GTtags=CLB
6	...	...	PUNCT	CLB	_	4	punct	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=CLB

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:gobj	color:blue
1	Лувонтт	лувондомс	VERB	V	Mood=Imp|Number[subj]=Sing|Person[subj]=2	0	root	_	CGdephead=#1-&gt;0|CGdeprel=@FMV|GTtags=Imprt,ScSg2
2	сельмотнень	сельме	NOUN	N	Case=Gen|Definite=Def|Number=Plur	3	nmod:gobj	_	CGdephead=#2-&gt;3|CGdeprel=@-FOBJ&gt;|GTtags=Pl,Gen,Def
3	сярятькстомс	сярятькстомс	VERB	V	VerbForm=Inf	1	advcl:tcl	_	CGdephead=#3-&gt;1|CGdeprel=@IMV|GTtags=Inf|SpaceAfter=No
4	.	.	PUNCT	CLB	_	1	punct	_	CGdephead=#4-&gt;1|CGdeprel=@X|GTtags=CLB

~~~


