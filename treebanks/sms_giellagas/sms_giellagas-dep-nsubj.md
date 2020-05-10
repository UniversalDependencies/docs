---
layout: base
title:  'Statistics of nsubj in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="sms_giellagas-dep-nsubj-cop.html">nsubj:cop</a></tt>.

102 nodes (9%) are attached to their parents as `nsubj`.

92 instances of `nsubj` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.73529411764706.

The following 8 pairs of parts of speech are connected with `nsubj`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (49; 48% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (43; 42% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	Tõt	tõt	DET	Det	Case=Nom|Number=Sing|PronType=Dem	2	det	_	GTtags=Dem,Sg,Nom
2	nijdd	nijdd	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	3	nsubj	_	GTtags=Sem/Kin,Sg,Nom
3	ǩeeʹrjti	ǩeeʹrjted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3
4	ǩeeʹrj	ǩeʹrjj	NOUN	N	Case=Acc|Number=Sing	3	obj	_	GTtags=Sg,Acc
5	taaurõššʼses	taaurõš	NOUN	N	Case=Ill|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	obl	_	GTtags=Sg,Ill,PxSg3|SpaceAfter=No
6	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Mary	Mary	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	2	nsubj	_	GTtags=Prop,Sem/Fem,Sg,Nom
2	vuäǯǯai	vuäǯǯad	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3
3	proons	pronss	NOUN	N	Case=Acc|Number=Sing	2	obj	_	GTtags=Sg,Acc|SpaceAfter=No
4	,	,	PUNCT	CLB	_	5	punct	_	_
5	Peter	Peter	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	2	conj	_	GTtags=Prop,Sem/Mal,Sg,Nom
6	siilb	silbb	NOUN	N	Case=Acc|Number=Sing	5	orphan	_	GTtags=Sg,Acc
7	da	da	CCONJ	CC	_	8	cc	_	_
8	Jane	Jane	PROPN	N	Animacy=Hum|Case=Nom|NameType=Giv|Number=Sing	2	conj	_	GTtags=Prop,Sem/Fem,Sg,Nom
9	kååʹll	kåʹll	NOUN	N	Case=Acc|Number=Sing	8	orphan	_	GTtags=Sg,Acc|SpaceAfter=No
10	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


