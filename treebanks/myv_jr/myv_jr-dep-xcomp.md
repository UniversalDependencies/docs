---
layout: base
title:  'Statistics of xcomp in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="myv_jr-dep-xcomp-ds.html">xcomp:ds</a></tt>.

235 nodes (1%) are attached to their parents as `xcomp`.

200 instances of `xcomp` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.00425531914894.

The following 14 pairs of parts of speech are connected with `xcomp`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (192; 82% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (20; 9% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), <tt><a href="myv_jr-pos-AUX.html">AUX</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	―	―	PUNCT	PUNCT	_	3	punct	_	_
2	Сынст	сон	PRON	Pron	Case=Gen|Number=Plur|Person=3|PronType=Prs	4	obj	_	GTtags=Pers,Pl3,Gen
3	карми	кармамс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg3
4	ускомаст	ускомс	VERB	V	Case=Loc|Number[psor]=Plur|Person[psor]=3|Valency=2|VerbForm=Inf	3	xcomp	_	GTtags=Err/Orth,TV,Inf,Loc,PxPl3
5	тия	тия	ADV	Adv	Case=Prl	4	advmod:lmod	_	GTtags=Prl|SpaceAfter=No
6	...	...	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 xcomp	color:blue
1	Якстере	якстере	ADJ	A	_	8	amod	_	GTtags=|Gloss=red|SpaceAfter=No
2	,	,	PUNCT	CLB	_	3	punct	_	_
3	ожо	ожо	ADJ	A	_	8	amod	_	GTtags=|Gloss=yellow|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	сэнь	сэнь	ADJ	A	_	8	amod	_	GTtags=|Gloss=blue|SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	ашо	ашо	ADJ	A	_	8	amod	_	GTtags=|Gloss=white
8	цецятне	цеця	NOUN	N	Case=Nom|Definite=Def|Number=Plur	10	nsubj	_	GTtags=Sem/Inanim_Cnt,Pl,Nom,Def|Gloss=flower
9	кумбокс	кумбо	NOUN	N	Case=Tra|Definite=Ind|Number=Plur,Sing	10	xcomp	_	GTtags=Sem/Inanim_Cnt,SP,Tra,Indef|Gloss=rug
10	мазылгавтызь	мазылгавтомс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Plur|Person[obj]=3|Person[subj]=3|Tense=Past|Valency=2	0	root	_	GTtags=TV,Ind,Prt1,ScPl3,OcSg3|Gloss=beautify
11	моданть	мода	NOUN	N	Case=Gen|Definite=Def|Number=Sing	10	obj	_	GTtags=Sem/Inanim_Cnt,Sg,Gen,Def|Gloss=ground|SpaceAfter=No
12	.	.	PUNCT	CLB	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Окойники	окойники	ADV	Adv	AdvType=Tim	4	advmod:tmod	_	GTtags=Sem/Time|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	_
3	сёвонесь	сёвонь	NOUN	N	Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	GTtags=Sem/Inanim_NCnt,Sg,Nom,Def
4	марявсь	марявомс	VERB	V	Derivation=OvtOms|Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|Valency=1	0	root	_	GTtags=Der/ОвОмс,IV,Ind,Prt1,ScSg3
5	тензэ	сон	PRON	Pron	Case=Dat|Number=Sing|Person=3|PronType=Prs|Variant=Short	4	obl	_	GTtags=Pers,Sg3,Dat,Short
6	анок	анок	ADJ	A	_	4	xcomp	_	GTtags=|SpaceAfter=No
7	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


