---
layout: base
title:  'Statistics of nmod:cmp in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `nmod:cmp`

This relation is a language-specific subtype of <tt><a href="myv_jr-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="myv_jr-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="myv_jr-dep-nmod-gsubj.html">nmod:gsubj</a></tt>, <tt><a href="myv_jr-dep-nmod-poss.html">nmod:poss</a></tt>.

2 nodes (0%) are attached to their parents as `nmod:cmp`.

2 instances of `nmod:cmp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nmod:cmp`: <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:cmp	color:blue
1	Монь	мон	PRON	Pron	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod:poss	_	CGdephead=#1-&gt;2|CGdeprel=@&gt;N|CGdephead=#1-&gt;2|CGdeprel=@&gt;N|GTtags=Pers,Sg1,Gen
2	тетям	тетя	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	nsubj:cop	_	CGdephead=#2-&gt;2|CGdeprel=@OBJ|CGdephead=#2-&gt;2|CGdeprel=@OBJ|GTtags=Sg,Gen,PxSg1
3	тон	тон	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	4	nmod:cmp	_	CGdephead=#3-&gt;3|CGdeprel=@&gt;N|CGdephead=#3-&gt;3|CGdeprel=@&gt;N|GTtags=Pers,Sg2,Gen,Der/sje,Pron,Sg,Abl,Def
4	седенть	сесь	PRON	Pron	Case=Abl|Definite=Def|Number=Sing|PronType=Dem	5	obl:cmp	_	CGdephead=#3-&gt;3|CGdeprel=@&gt;N|CGdephead=#3-&gt;3|CGdeprel=@&gt;N|GTtags=Pers,Sg2,Gen,Der/sje,Pron,Sg,Abl,Def
5	крутой	крутой	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	CGdephead=#4-&gt;0|CGdeprel=@SPRED|CGdephead=#4-&gt;0|CGdeprel=@SPRED|GTtags=Sg,Nom,Indef|SpaceAfter=No
6	.	.	PUNCT	CLB	_	5	punct	_	CGdephead=#5-&gt;4|CGdeprel=@X|CGdephead=#5-&gt;4|CGdeprel=@X|GTtags=CLB

~~~


