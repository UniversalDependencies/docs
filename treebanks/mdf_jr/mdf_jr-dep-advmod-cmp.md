---
layout: base
title:  'Statistics of advmod:cmp in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `advmod:cmp`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-advmod.html">advmod</a></tt>.
There are also 8 other language-specific subtypes of `advmod`: <tt><a href="mdf_jr-dep-advmod-cau.html">advmod:cau</a></tt>, <tt><a href="mdf_jr-dep-advmod-deg.html">advmod:deg</a></tt>, <tt><a href="mdf_jr-dep-advmod-eval.html">advmod:eval</a></tt>, <tt><a href="mdf_jr-dep-advmod-foc.html">advmod:foc</a></tt>, <tt><a href="mdf_jr-dep-advmod-freq.html">advmod:freq</a></tt>, <tt><a href="mdf_jr-dep-advmod-lmod.html">advmod:lmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-mmod.html">advmod:mmod</a></tt>, <tt><a href="mdf_jr-dep-advmod-tmod.html">advmod:tmod</a></tt>.

2 nodes (0%) are attached to their parents as `advmod:cmp`.

2 instances of `advmod:cmp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `advmod:cmp`: <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 50% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod:cmp	color:blue
1	Сембода	сембода	ADV	Pcle	Degree=Sup	2	advmod:cmp	_	CGdephead=#1-&gt;0|CGdeprel=@X|GTtags=Superl
2	пяк	пяк	ADV	Adv	AdvType=Deg	3	advmod:deg	_	CGdephead=#2-&gt;3|CGdeprel=@ADVL&gt;|GTtags=Deg
3	кайгсь	кайгомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past	0	root	_	CGdephead=#3-&gt;0|CGdeprel=@FMV|GTtags=IV,Ind,Prt1,ScSg3
4	эчке	эчке	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	6	amod	_	CGdephead=#4-&gt;6|CGdeprel=@&gt;N|GTtags=Sg,Nom,Indef
5	казяма	казяма	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	6	amod	_	CGdephead=#5-&gt;6|CGdeprel=@&gt;N|GTtags=Sg,Nom,Indef
6	вайгяль	вайгяль	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	nsubj	_	CGdephead=#6-&gt;3|CGdeprel=@&lt;SUBJ|GTtags=Sg,Nom,Indef|SpaceAfter=No
7	...	...	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 advmod:cmp	color:blue
1	Сяс	сяс	ADV	Adv	_	4	advmod	_	CGdephead=#1-&gt;4|CGdeprel=@ADVL&gt;|GTtags=
2	тячи	тячи	ADV	Adv	_	4	advmod:tmod	_	CGdephead=#2-&gt;4|CGdeprel=@ADVL&gt;|GTtags=
3	эряви	эрявомс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres	4	aux:nec	_	CGdephead=#3-&gt;3|CGdeprel=@-FAUXV&gt;|GTtags=IV,Ind,Prs,ScSg3
4	пеетькшнемс	пеетькшнемс	VERB	V	VerbForm=Inf	0	root	_	CGdephead=#4-&gt;3|CGdeprel=@IMV|GTtags=IV,Inf|SpaceAfter=No
5	:	:	PUNCT	CLB	_	8	punct	_	CGdephead=#5-&gt;5|CGdeprel=@CLB|GTtags=CLB
6	сяда	сяда	ADV	Adv	AdvType=Deg	8	advmod:cmp	_	CGdephead=#6-&gt;8|CGdeprel=@ADVL&gt;|GTtags=Deg
7	аф	аф	AUX	V	Polarity=Neg|VerbType=Aux	8	aux:neg	_	CGdephead=#7-&gt;7|CGdeprel=@-FAUXV&gt;|GTtags=Aux,Neg
8	макстама	максомс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=1|Tense=Pres	4	conj	_	CGdephead=#8-&gt;4|CGdeprel=@FMV|GTtags=IV,Ind,Prs,ScPl1
9	пря	пря	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	10	nmod	_	CGdephead=#9-&gt;10|CGdeprel=@&gt;N|GTtags=Sg,Nom,Indef
10	ризфти	ризф	NOUN	N	Case=Dat|Definite=Def|Number=Sing	8	obl	_	CGdephead=#10-&gt;8|CGdeprel=@&lt;ADVL|GTtags=Sg,Dat,Def|SpaceAfter=No
11	...	...	PUNCT	CLB	_	4	punct	_	CGdephead=#11-&gt;11|CGdeprel=@CLB|GTtags=CLB

~~~


