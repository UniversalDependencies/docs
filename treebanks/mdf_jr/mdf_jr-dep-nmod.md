---
layout: base
title:  'Statistics of nmod in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `nmod`

This relation is universal.
There are 3 language-specific subtypes of `nmod`: <tt><a href="mdf_jr-dep-nmod-bahuv.html">nmod:bahuv</a></tt>, <tt><a href="mdf_jr-dep-nmod-part.html">nmod:part</a></tt>, <tt><a href="mdf_jr-dep-nmod-poss.html">nmod:poss</a></tt>.

51 nodes (4%) are attached to their parents as `nmod`.

40 instances of `nmod` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45098039215686.

The following 10 pairs of parts of speech are connected with `nmod`: <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (29; 57% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (9; 18% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (4; 8% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nmod	color:blue
1	Рамаль	рамамс	VERB	V	Mood=Cnj|Number[subj]=Sing|Person[subj]=3|Valency=1	0	root	_	_
2	хуш	хуш	ADV	Adv	_	5	advmod	_	_
3	тядязень	тядя	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	nmod	_	_
4	муськома	муськомс	VERB	V	Case=Nom|Definite=Ind|Number=Sing|Valency=2|VerbForm=Vnoun	5	nmod	_	_
5	очконц	очка	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	obj	_	_
6	эшка	эшка	ADP	Adp	AdpType=Post|Case=Comp	5	case	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod	color:blue
1	Семён	Семён	PROPN	N	Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	nsubj:cop	_	GTtags=Prop,Sg,Nom,Indef
2	жаднай	жаднай	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef
3	ярмакненди	ярмак	NOUN	N	Case=Dat|Definite=Def|Number=Plur	2	nmod	_	GTtags=Pl,Dat,Def|SpaceAfter=No
4	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	Алязе	аля	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	4	nsubj	_	GTtags=Sg,Nom,PxSg1
2	тонь	тон	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	3	nmod	_	GTtags=Pers,Sg2,Gen
3	алядот	аля	NOUN	N	Case=Abl|Number=Plur,Sing|Number[psor]=Sing|Person[psor]=2	4	obl	_	GTtags=SP,Abl,PxSg2
4	крутой	крутой	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	0	root	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
5	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


