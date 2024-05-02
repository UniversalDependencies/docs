---
layout: base
title:  'Statistics of obj in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `obj`

This relation is universal.

183 nodes (4%) are attached to their parents as `obj`.

131 instances of `obj` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.68306010928962.

The following 6 pairs of parts of speech are connected with `obj`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (156; 85% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (16; 9% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (3; 2% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obj	color:blue
1	Лётчикне	лётчик	NOUN	N	Case=Nom|Definite=Def|Number=Plur	6	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	улема	улема	VERB	V	Mood=Nec|Number[subj]=Sing|Person[subj]=3	6	advcl:eval	_	SpaceAfter=No
4	,	,	PUNCT	CLB	_	3	punct	_	_
5	кядьса	кядь	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	6	obl:inst	_	_
6	токсесазь	токсемс	VERB	V	Mood=Ind|Number[obj]=Plur|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Pres	0	root	_	_
7	коволнятнень	ковол	NOUN	N	Case=Gen|Definite=Def|Degree=Dim|Number=Plur	6	obj	_	SpaceAfter=No
8	.	.	PUNCT	CLB	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obj	color:blue
1	Арьсян	арьсемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Pres	0	root	_	SpaceAfter=No
2	,	,	PUNCT	CLB	_	4	punct	_	_
3	моньге	мон	PRON	Pron	Case=Gen|Clitic=AddGA|Number=Sing|Person=1|PronType=Prs	4	obj	_	_
4	лийфнесамазь-тисамазь	лийфнемс-тиемс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=1|Person[subj]=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
5	и	и	CCONJ	CC	_	6	cc	_	_
6	валхтсамазь	валхтомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=1|Person[subj]=3|Tense=Pres	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	Кундафнень	кундамс	VERB	V	Case=Gen|Definite=Def|Number=Plur|PartForm=Past|VerbForm=Part	2	obj	_	CGdephead=#1-&gt;2|CGdeprel=@-FOBJ&gt;|CGdephead=#1-&gt;2|CGdeprel=@-FOBJ&gt;|GTtags=Der/f,PrfPrc,Pl,Gen,Def
2	вятезь	вятемс	VERB	V	VerbForm=Conv	0	root	_	CGdephead=#2-&gt;0|CGdeprel=@SPRED|CGdephead=#2-&gt;0|CGdeprel=@SPRED|GTtags=Der/Ozj,Ger
3	вели	веле	NOUN	N	Case=Lat|Definite=Ind|Number=Plur,Sing	2	obl:lmod	_	CGdephead=#3-&gt;3|CGdeprel=@&lt;ADVL|CGdephead=#3-&gt;3|CGdeprel=@&lt;ADVL|GTtags=SP,Lat,Indef|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	CGdephead=#4-&gt;2|CGdeprel=@X|CGdephead=#4-&gt;2|CGdeprel=@X|GTtags=CLB

~~~


