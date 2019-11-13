---
layout: base
title:  'Statistics of conj in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `conj`

This relation is universal.

31 nodes (10%) are attached to their parents as `conj`.

31 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.93548387096774.

The following 10 pairs of parts of speech are connected with `conj`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (17; 55% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (3; 10% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt> (2; 6% instances), <tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	Peter	Peter	PROPN	N	Animacy=Hum|Case=Nom|Number=Sing	4	nsubj	_	GTtags=Prop,Sem/Mal,Sg,Nom
2	da	da	CCONJ	CC	_	3	cc	_	_
3	Mary	Mary	PROPN	N	Animacy=Hum|Case=Nom|Number=Sing	1	conj	_	GTtags=Prop,Sem/Fem,Sg,Nom
4	âskkõʹlle	âskkõõllâd	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Prt	0	root	_	GTtags=Ind,Prt,Pl3
5	da	da	CCONJ	CC	_	6	cc	_	_
6	liõʹhtte	liõhttâd	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Prt	4	conj	_	GTtags=Ind,Prt,Pl3
7	meädda	meädda	ADV	Adv	_	8	advmod	_	_
8	lõõnjâst	lõnnj	NOUN	N	Case=Loc|Number=Sing	6	obl	_	GTtags=Sg,Loc|SpaceAfter=No
9	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 conj	color:blue
1	Son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	GTtags=Pers,Sg3,Nom
2	vueʹsti	vuäʹstted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Prt	0	root	_	GTtags=Ind,Prt,Sg3
3	aaut	autt	NOUN	N	Case=Acc|Number=Sing	2	obj	_	GTtags=Sg,Acc
4	da	da	CCONJ	CC	_	6	cc	_	_
5	väʹst	väʹst	ADV	Adv	_	6	orphan	_	_
6	viʹlljes	villj	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	conj	_	GTtags=Sem/Kin,Sg,Nom,PxSg3
7	pâi	pâi	ADV	Adv	_	6	orphan	_	_
8	tanccâmvuâjan	tanccâmvuâjan	NOUN	N	Case=Acc|Number=Sing	6	orphan	_	GTtags=Sg,Acc|SpaceAfter=No
9	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj	color:blue
1	Lij-a	leeʹd	AUX	V	Clitic=QstA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Valency=1	6	cop	_	GTtags=IV,Ind,Prs,Sg3,Qst/a
2	Iguazu	Iguazu	NOUN	N	Case=Nom|Number=Sing	6	nsubj	_	GTtags=Prop,Sg,Nom
3	jõnn	jõnn	ADJ	A	_	6	amod	_	GTtags=Attr
4	avi	avi	CCONJ	CC	_	5	cc	_	_
5	uʹcc	uʹcc	ADJ	A	_	3	conj	_	GTtags=Attr
6	jânnam	jânnam	NOUN	N	Case=Nom|Number=Sing	0	root	_	GTtags=Sg,Nom|SpaceAfter=No
7	?	?	PUNCT	CLB	_	6	punct	_	_

~~~


