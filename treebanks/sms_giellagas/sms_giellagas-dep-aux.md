---
layout: base
title:  'Statistics of aux in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="sms_giellagas-dep-aux-neg.html">aux:neg</a></tt>.

26 nodes (2%) are attached to their parents as `aux`.

24 instances of `aux` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30769230769231.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (24; 92% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (1; 4% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux	color:blue
1	Haaʹlääk-a	haaʹleed	AUX	V	Clitic=QstA|Mood=Ind|Number=Sing|Person=2|Tense=Pres	2	aux	_	GTtags=Ind,Prs,Sg2,Qst/a
2	mõõnnâd	mõõnnâd	VERB	V	VerbForm=Inf	0	root	_	GTtags=Inf|SpaceAfter=No
3	?	?	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux	color:blue
1	kõõjji	kõõččâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
2	,	,	PUNCT	CLB	_	5	punct	_	_
3	štõ	što	SCONJ	CS	_	5	mark	_	_
4	leäk-a	leeʹd	AUX	Aux	Clitic=QstA|Mood=Ind|Number=Sing|Person=2|Tense=Pres|Valency=1	5	cop	_	GTtags=IV,Ind,Prs,Sg2,Qst/a
5	tiõrvâs	tiõrvâs	ADJ	A	Case=Nom|Number=Sing	1	ccomp	_	GTtags=Sg,Nom|SpaceAfter=No
6	,	,	PUNCT	CLB	_	9	punct	_	_
7	jiõk	ij	AUX	Aux	Mood=Ind|Number=Sing|Person=2|Polarity=Neg	9	aux:neg	_	GTtags=Neg,Ind,Sg2
8	leäkku	leeʹd	AUX	Aux	Connegative=Yes|Mood=Ind|Tense=Pres|Valency=1	9	aux	_	GTtags=IV,Ind,Prs,ConNeg
9	tiõrvâs	tiõrvâs	ADJ	A	Case=Nom|Number=Sing	5	conj	_	GTtags=Sg,Nom|SpaceAfter=No
10	,	,	PUNCT	CLB	_	12	punct	_	_
11	lij-a	leeʹd	AUX	Aux	Clitic=QstA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=1	12	cop	_	GTtags=IV,Ind,Prs,Sg3,Qst/a
12	piâr	piâr	NOUN	N	Case=Nom|Number=Sing	5	conj	_	GTtags=N,Sg,Nom
13	vai	vai	CCONJ	CC	_	14	cc	_	_
14	iʹlla	iʹlla	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	12	conj	_	GTtags=Neg,Ind,Prs,Sg3|SpaceAfter=No
15	.	.	PUNCT	CLB	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux	color:blue
1	Na	na	INTJ	Interj	_	8	discourse	_	GTtags=Interj
2	teʹl	teʹl	ADV	Adv	_	8	advmod:tmod	_	_
3	âʹtte	âʹtte	ADV	Adv	AdvType=Tim	2	advmod:tmod	_	GTtags=Sem/Time
4	čiččâm	čiččâm	NUM	Num	Case=Nom|Number=Sing	5	nummod	_	GTtags=Sg,Nom
5	eeʹjj	eeʹǩǩ	NOUN	N	Case=Acc|Number=Sing	8	obl:tmod	_	GTtags=Sg,Acc
6	feʹrttji	feʹrttjed	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Tense=Past	8	aux	_	GTtags=Ind,Prt,Sg3
7	leeʹd	leeʹd	AUX	Aux	Valency=1|VerbForm=Inf	8	cop	_	GTtags=IV,Inf
8	säldten	säldten	NOUN	N	Case=Ess	0	root	_	GTtags=Ess
9	ja	ja	CCONJ	CC	_	11	cc	_	_
10	vasta	vasta	ADV	Adv	_	11	advmod:tmod	_	_
11	puätt	pueʹtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	conj	_	GTtags=Ind,Prs,Sg3
12	mååust	mååust	ADV	Adv	_	11	advmod	_	SpaceAfter=No
13	.	.	PUNCT	CLB	_	8	punct	_	_

~~~


