---
layout: base
title:  'Statistics of conj in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `conj`

This relation is universal.

142 nodes (13%) are attached to their parents as `conj`.

142 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.45070422535211.

The following 11 pairs of parts of speech are connected with `conj`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (119; 84% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (7; 5% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	Peter	Peter	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	4	nsubj	_	GTtags=Prop,Sem/Mal,Sg,Nom
2	da	da	CCONJ	CC	_	3	cc	_	_
3	Mary	Mary	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	1	conj	_	GTtags=Prop,Sem/Fem,Sg,Nom
4	âskkõʹlle	âskkõõllâd	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Pl3
5	da	da	CCONJ	CC	_	6	cc	_	_
6	liõʹhtte	liõhttâd	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past	4	conj	_	GTtags=Ind,Prt,Pl3
7	meädda	meädda	ADV	Adv	_	8	advmod:lmod	_	_
8	lõõnjâst	lõnnj	NOUN	N	Case=Loc|Number=Sing	6	obl:lmod	_	GTtags=Sg,Loc|SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 conj	color:blue
1	Son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	ǩiččlõõddi	ǩiččlõddâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3
3	looppted	looppted	VERB	V	VerbForm=Inf	2	xcomp	_	GTtags=Inf
4	tääbbaǩ	tääbbaǩ	NOUN	N	Case=Gen|Number=Sing	5	obj	_	GTtags=Sg,Gen
5	puälddmõõžž	pueʹldded	VERB	V	Case=Acc|Derivation=Vnoun|Number=Sing	3	obj	_	GTtags=Sg,Acc
6	da	da	CCONJ	CC	_	8	cc	_	_
7	veeiʹn	veiʹnn	NOUN	N	Case=Gen|Number=Sing	8	obj	_	GTtags=Sg,Gen
8	juukkmõõžž	juukkmõš	NOUN	N	Case=Acc|Number=Sing	5	conj	_	GTtags=Sg,Acc|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 conj	color:blue
1	Son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj:cop	_	GTtags=Pers,Sg3,Nom
2	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	3	cop	_	GTtags=Ind,Prt,Sg3
3	mieʹccest	meäʹcc	NOUN	N	Case=Loc|Number=Sing	0	root	_	GTtags=Sg,Loc
4	pieʹʒʒ	pieʹcc	NOUN	N	Case=Acc|Number=Sing	5	obj	_	GTtags=Sg,Acc
5	vueʹtǩǩmen	vueʹtǩǩed	VERB	V	Case=Ess|Derivation=Vnoun	3	conj	_	GTtags=Actio,Ess|SpaceAfter=No
6	,	,	PUNCT	CLB	_	8	punct	_	_
7	ooumaž	ooumaž	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	8	nsubj	_	GTtags=Sem/Hum,Sg,Nom
8	puõʹđi	pueʹtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	3	conj	_	GTtags=Ind,Prt,Sg3
9	suu	son	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	8	obl:lmod	_	GTtags=Pers,Sg3,Gen
10	luzz	luzz	ADP	Po	Case=Ill	9	case	_	GTtags=Ill|SpaceAfter=No
11	,	,	PUNCT	CLB	_	12	punct	_	_
12	säärntõlškuõʹđi	säärntõõllâd	VERB	V	Derivation=InchL|Mood=Ind|Number=Sing|Person=3|Tense=Prt	8	conj	_	GTtags=Der/InchL,Ind,Prt,Sg3|SpaceAfter=No
13	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


