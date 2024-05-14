---
layout: base
title:  'Statistics of aux:cnd in UD_Moksha-JR'
udver: '2'
---

## Treebank Statistics: UD_Moksha-JR: Relations: `aux:cnd`

This relation is a language-specific subtype of <tt><a href="mdf_jr-dep-aux.html">aux</a></tt>.
There are also 4 other language-specific subtypes of `aux`: <tt><a href="mdf_jr-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="mdf_jr-dep-aux-neg.html">aux:neg</a></tt>, <tt><a href="mdf_jr-dep-aux-opt.html">aux:opt</a></tt>, <tt><a href="mdf_jr-dep-aux-q.html">aux:q</a></tt>.

4 nodes (0%) are attached to their parents as `aux:cnd`.

3 instances of `aux:cnd` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 3 pairs of parts of speech are connected with `aux:cnd`: <tt><a href="mdf_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (2; 50% instances), <tt><a href="mdf_jr-pos-ADV.html">ADV</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 25% instances), <tt><a href="mdf_jr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mdf_jr-pos-AUX.html">AUX</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux:cnd	color:blue
1	Кда	кда	SCONJ	CS	_	4	mark	_	_
2	ба	ба	AUX	Pcle	Derivation=Cond|Mood=Ind|VerbType=Aux	4	aux:cnd	_	GTtags=Aux,Cond
3	сон	сон	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	GTtags=Pers,Sg3,Nom
4	лоткаль	лоткамс	VERB	V	Mood=Sub|Number[subj]=Sing|Person[subj]=3	7	advcl	_	GTtags=Conj,ScSg3
5	корхтамда	корхтамс	VERB	V	Case=Abl|VerbForm=Inf	4	obl	_	GTtags=Inf,Abl|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	4	punct	_	_
7	ушедолень	ушедомс	VERB	V	Mood=Sub|Number[subj]=Sing|Person[subj]=1	0	root	_	GTtags=Conj,ScSg1
8	ба	ба	AUX	Pcle	Derivation=Cond|Mood=Ind|VerbType=Aux	7	aux:cnd	_	GTtags=Aux,Cond
9	мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	GTtags=Pers,Sg1,Nom
10	...	...	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux:cnd	color:blue
1	Эх	эх	INTJ	Interj	_	3	discourse	_	CGdephead=#1-&gt;0|CGdeprel=@INTERJ|GTtags=|SpaceAfter=No
2	,	,	PUNCT	CLB	_	1	punct	_	CGdephead=#2-&gt;1|CGdeprel=@X|GTtags=CLB
3	тяни	тяни	ADV	Adv	_	0	root	_	CGdephead=#3-&gt;3|CGdeprel=@ADVL&gt;|GTtags=
4	ба	ба	AUX	Pcle	Mood=Sub|VerbType=Aux	3	aux:cnd	_	CGdephead=#4-&gt;4|CGdeprel=@+FMAINV|GTtags=Aux,Conj
5	пси	пси	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	6	amod	_	CGdephead=#5-&gt;6|CGdeprel=@&gt;N|GTtags=Sg,Nom,Indef
6	баняня	баня	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	CGdephead=#6-&gt;6|CGdeprel=@OBJ|GTtags=Pl,Nom,PxSg1,Err/Orth-lowered-final-e-2-ja
7	и	и	CCONJ	CC	_	9	cc	_	CGdephead=#7-&gt;6|CGdeprel=@CNP|GTtags=
8	пси	пси	ADJ	A	Case=Nom|Definite=Ind|Number=Sing	9	amod	_	CGdephead=#8-&gt;9|CGdeprel=@&gt;N|GTtags=Sg,Nom,Indef
9	бозаня	боза	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=1	6	conj	_	CGdephead=#9-&gt;9|CGdeprel=@OBJ|GTtags=Pl,Nom,PxSg1,Err/Orth-lowered-final-e-2-ja|SpaceAfter=No
10	!	!	PUNCT	CLB	_	3	punct	_	CGdephead=#10-&gt;1|CGdeprel=@X|GTtags=CLB

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux:cnd	color:blue
1	Пиземня	пизем	NOUN	N	Case=Tem|Number=Plur,Sing	0	root	_	CGdephead=#1-&gt;1|CGdeprel=@OBJ|GTtags=Pl,Nom,PxSg1,Err/Orth-lowered-final-e-2-ja
2	ба	ба	AUX	Pcle	Mood=Sub|VerbType=Aux	1	aux:cnd	_	CGdephead=#2-&gt;2|CGdeprel=@+FMAINV|GTtags=Aux,Conj|SpaceAfter=No
3	!	!	PUNCT	CLB	_	1	punct	_	CGdephead=#3-&gt;0|CGdeprel=@X|GTtags=CLB

~~~


