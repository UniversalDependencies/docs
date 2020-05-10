---
layout: base
title:  'Statistics of ccomp in UD_Erzya-JR'
udver: '2'
---

## Treebank Statistics: UD_Erzya-JR: Relations: `ccomp`

This relation is universal.

104 nodes (1%) are attached to their parents as `ccomp`.

102 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.67307692307692.

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (80; 77% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-NOUN.html">NOUN</a></tt> (6; 6% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PRON.html">PRON</a></tt> (5; 5% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-AUX.html">AUX</a></tt> (4; 4% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="myv_jr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-PRON.html">PRON</a></tt>-<tt><a href="myv_jr-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="myv_jr-pos-VERB.html">VERB</a></tt>-<tt><a href="myv_jr-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 ccomp	color:blue
1	―	―	PUNCT	PUNCT	_	4	punct	_	_
2	Конат	кона	PRON	Pron	Case=Nom|Definite=Ind|Number=Plur	4	nsubj	_	GTtags=Pl,Nom,Indef|Gloss=the-ones
3	а	а	AUX	Pcle	Polarity=Neg	4	aux:neg	_	GTtags=Neg|Gloss=not
4	молить	молемс	VERB	V	Mood=Ind|Number[subj]=Plur|Person[subj]=3|Tense=Pres|Valency=1	7	ccomp	_	GTtags=IV,Ind,Prs,ScPl3|Gloss=go
5	мартонзо	марто	ADP	Adp	Number[psor]=Sing|Person[psor]=3	4	obl	_	GTtags=COM,PxSg3|Gloss=with
6	―	―	PUNCT	PUNCT	_	7	punct	_	_
7	ледни	леднемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,ScSg3|Gloss=shoot|SpaceAfter=No
8	,	,	PUNCT	CLB	_	10	punct	_	_
9	ули-парост	ули-паро	NOUN	N	Case=Gen|Number=Plur|Number[psor]=Plur|Person[psor]=3	10	obj	_	GTtags=Pl,Gen,PxPl3|Gloss=wealth
10	сайни	сайнемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=2	7	conj	_	GTtags=TV,Ind,Prs,ScSg3|Gloss=take|SpaceAfter=No
11	.	.	PUNCT	CLB	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 ccomp	color:blue
1	Седеем	седей	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	4	nsubj	_	GTtags=Sg,Nom,PxSg1|Gloss[eng]=heart
2	тень	мон	PRON	Pron	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	4	obl	_	GTtags=Pers,Sg1,Dat,Short|Gloss[eng]=to.me
3	истя	истя	ADV	Adv	AdvType=Man	4	advmod	_	GTtags=Manner|Gloss[eng]=like.that
4	тошкси	тошксемс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=1	0	root	_	GTtags=IV,Ind,Prs,ScSg3|Gloss[eng]=whisper|SpaceAfter=No
5	:	:	PUNCT	CLB	_	4	punct	_	_
6	майстэ	май	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	4	ccomp	_	GTtags=SP,Ela,Indef|Gloss[eng]=May|SpaceAfter=No
7	,	,	PUNCT	CLB	_	8	punct	_	_
8	майстэ	май	NOUN	N	Case=Ela|Definite=Ind|Number=Plur,Sing	6	conj	_	GTtags=SP,Ela,Indef|Gloss[eng]=May|SpaceAfter=No
9	...	...	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 ccomp	color:blue
1	Мейле	мейле	ADV	Adv	AdvType=Tim	3	obl	_	GTtags=Temp
2	рыжойсь	рыжой	ADJ	A	Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	GTtags=Err/Orth,Sg,Nom,Def
3	мери	меремс	VERB	V	Mood=Ind|Number[subj]=Sing|Person[subj]=3|Tense=Pres|Valency=2	0	root	_	GTtags=TV,Ind,Prs,ScSg3
4	«	«	PUNCT	PUNCT	_	6	punct	_	GTtags=LEFT|SpaceAfter=No
5	Тон	тон	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	GTtags=Pers,Sg2,Nom
6	аздасамак	аздамс	VERB	V	Mood=Ind|Number[obj]=Sing|Number[subj]=Sing|Person[obj]=1|Person[subj]=2|Tense=Pres|Valency=2	3	ccomp	_	GTtags=TV,Ind,Prs,ScSg2,OcSg1
7	киян	кие	PRON	Pron	Animacy=Hum|Case=Nom|Number=Sing|Number[subj]=Sing|Person[subj]=1|PronType=Int|Tense=Pres	6	ccomp	_	GTtags=Interr,Hum,Sg,Nom
8	мон	мон	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	GTtags=Pers,Sg1,Nom|SpaceAfter=No
9	?	?	PUNCT	CLB	_	3	punct	_	_

~~~


