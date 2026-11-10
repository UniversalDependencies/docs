---
layout: base
title:  'Statistics of aux in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `aux`

This relation is universal.
There are 2 language-specific subtypes of `aux`: <tt><a href="mdf_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="mdf_jr-dep-aux-opt.html">aux:opt</a></tt>.

29 nodes (1%) are attached to their parents as `aux`.

24 instances of `aux` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24137931034483.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (22; 76% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (3; 10% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (2; 7% instances), <tt><a href="mdf_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="mdf_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	―	―	PUNCT	PUNCT	_	5	punct	_	_
2	А	а	CCONJ	CC	_	5	cc	_	_
3	мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
4	ашень	аш	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Polarity=Neg|Tense=Past|VerbForm=Fin	5	aux	_	_
5	абонда	абондомс	VERB	V	Connegative=Yes	0	root	_	SpaceAfter=No
6	,	,	PUNCT	CLB	_	7	punct	_	_
7	мярьгонь	мярьгомс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=1|Tense=Past|VerbForm=Fin	5	orphan	_	SpaceAfter=No
8	:	:	PUNCT	CLB	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Школьнай	школьнай	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	3	amod	_	GTtags=Sg,Nom,Indef
2	фкя	фкя	NUM	Num	Case=Nom|Definite=Ind|Number=Sing|NumType=Card	3	nummod	_	GTtags=Card,Sg,Nom,Indef
3	комнатаса	комната	NOUN	N	Case=Ine|Definite=Ind|Number=Plur,Sing	0	root	_	GTtags=SP,Ine,Indef
4	ульсь	улемс	AUX	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Past|VerbForm=Fin	3	aux	_	GTtags=IV,Ind,Prt1,ScSg3
5	эчке	эчке	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	6	amod	_	GTtags=Sg,Nom,Indef
6	доскаста	доска	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	7	obl	_	GTtags=SP,Ela,Indef
7	шавф	шавомс	VERB	V	Derivation=F|VerbForm=Part	8	advcl	_	GTtags=TV,PrfPrc
8	верстак	верстак	NOUN	N	Case=Nom|Definite=Ind|Number=Sing	3	nsubj	_	GTtags=Sg,Nom,Indef|SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Эх	эх	INTJ	Interj	_	3	discourse	_	CGdephead=#1-&gt;0|CGdeprel=@INTERJ|GTtags=|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	CGdephead=#2-&gt;1|CGdeprel=@X|GTtags=CLB
3	тяни	тяни	ADV	Adv	_	0	root	_	CGdephead=#3-&gt;3|CGdeprel=@ADVL&gt;|GTtags=
4	ба	ба	AUX	Pcle	Mood=Cnd|VerbType=Aux	3	aux	_	CGdephead=#4-&gt;4|CGdeprel=@+FMAINV|GTtags=Aux,Conj
5	пси	пси	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	6	amod	_	CGdephead=#5-&gt;6|CGdeprel=@&gt;N|GTtags=Sg,Nom,Indef
6	баняня	баня	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	CGdephead=#6-&gt;6|CGdeprel=@OBJ|GTtags=Pl,Nom,PxSg1,Err/Orth-lowered-final-e-2-ja
7	и	и	CCONJ	CC	_	9	cc	_	CGdephead=#7-&gt;6|CGdeprel=@CNP|GTtags=
8	пси	пси	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	9	amod	_	CGdephead=#8-&gt;9|CGdeprel=@&gt;N|GTtags=Sg,Nom,Indef
9	бозаня	боза	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=1	6	conj	_	CGdephead=#9-&gt;9|CGdeprel=@OBJ|GTtags=Pl,Nom,PxSg1,Err/Orth-lowered-final-e-2-ja|SpaceAfter=No
10	!	!	PUNCT	CLB	_	3	punct	_	CGdephead=#10-&gt;1|CGdeprel=@X|GTtags=CLB

~~~


