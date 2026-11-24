---
layout: base
title:  'Statistics of nmod in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="sms_giellagas-dep-nmod-poss.html">nmod:poss</a></tt>.

19 nodes (1%) are attached to their parents as `nmod`.

17 instances of `nmod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31578947368421.

The following 3 pairs of parts of speech are connected with `nmod`: <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (15; 79% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (3; 16% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod	color:blue
1	Siõm	siõmm	NOUN	N	Animacy=Hum|Case=Gen|Number=Sing	3	nmod	_	GTtags=Sem/Hum,Sg,Gen
2	heäppaž	heävaš	NOUN	N	Case=Gen|Number=Sing	3	nmod:poss	_	GTtags=Sg,Gen
3	ââlǥaž	ââlǥaž	NOUN	N	Case=Nom|Number=Sing	4	nsubj	_	GTtags=Sem/Ani,Sg,Nom
4	ǩiʹcsti	ǩiʹcsted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	GTtags=Ind,Prt,Sg3
5	suu	son	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	4	obl	_	GTtags=Pers,Sg3,Gen
6	ool	ool	ADP	Po	AdpType=Post	5	case	_	GTtags=<gen>|SpaceAfter=No
7	,	,	PUNCT	CLB	_	12	punct	_	_
8	tõn	tõt	PRON	Pron	Case=Acc|Number=Sing|PronType=Dem	12	obj	_	GTtags=Dem,Sg,Acc,@OBJ>
9	vaaʹldi	väʹldded	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	reparandum	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
10	...	...	PUNCT	PUNCT	_	12	punct	_	_
11	ij	ij	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	12	aux	_	GTtags=Neg,Ind,Sg3,@+FAUXV
12	välddam	väʹldded	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin	4	conj	_	GTtags=Ind,Prt,ConNeg|SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod	color:blue
1	Mâŋŋa	mâŋŋa	ADV	Adv	AdvType=Tim	3	advmod	_	GTtags=Sem/Time
2	dââʹst	dât	PRON	Pron	Case=Loc|Number=Sing|PronType=Dem	1	nmod	_	GTtags=Sg,Loc
3	šõõddi	šõddâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	GTtags=Ind,Prt,Sg3
4	...	...	PUNCT	CLB	_	8	punct	_	_
5	vitmlo	vitmlo	NUM	Num	Case=Nom|Number=Sing|NumType=Card	6	nummod	_	_
6	ekksaž	ekksaž	ADJ	A	_	7	amod	_	GTtags=Attr
7	päʹrnn	päʹrnn	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	8	nsubj	_	GTtags=Kin,Sem/Kin,Sg,Nom
8	šõõddi	šõddâd	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	conj	_	GTtags=Ind,Prt,Sg3|SpaceAfter=No
9	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nmod	color:blue
1	Tuâj	tuâjj	NOUN	N+Pl+Nom	Case=Nom|Number=Plur	9	obj	_	AltReadings=3|Gloss[en]=work
2	Säʹmmlai	säʹmmlaž	NOUN	N+Pl+Gen	Case=Gen|Number=Plur	3	nmod	_	AltReadings=3|Gloss[en]=Sámi
3	tuõttvuõtt-	tuõttvuõtt	NOUN	N+Cmp/SgNom+Cmp/SplitR	_	6	obl	_	Gloss[en]=truth
4	da	da	CCONJ	CC	_	5	cc	_	Gloss[en]=and
5	suåvâdvuõttkomissio	suåvâdvuõttkomissio	NOUN	N+Pl+Nom	Case=Nom|Number=Plur	3	conj	_	AltReadings=5|Gloss[en]=reconcilitation-commission
6	altteem	altteed	VERB	V+Actio	Case=Gen|Number=Sing|VerbForm=Vnoun	9	obl	_	AltReadings=2|Gloss[en]=found
7	diõtt	diõtt	ADP	Adp+Po+<gen>	AdpType=Post	6	case	_	AltReadings=3|Gloss[en]=because-of
8	lij	leeʹd	AUX	V+IV+Ind+Prs+Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	Gloss[en]=be
9	juâtkkum	juäʹtǩǩed	VERB	V+Pss+PrfPrc	Typo=Yes	0	root	_	CorrectForm=juåtkkum|Gloss[en]=continue
10	Sanna	Sanna	PROPN	N+Prop+Sem/Fem+Pl+Nom	Case=Nom|Number=Plur	12	nmod	_	AltReadings=5
11	Marin	Marin	PROPN	N+Prop+Err/Orth+Sg+Gen	Case=Gen|Number=Sing|Typo=Yes	10	flat	_	AltReadings=18
12	halltõsprograamm	halltõsprogramm	NOUN	N+Sg+Gen	Case=Gen|Number=Sing	9	obl	_	AltReadings=3|Gloss[en]=cabinet-program
13	meâldlânji	meâldlânji	ADP	Po	AdpType=Post	12	case	_	Gloss[en]=according-to|SpaceAfter=No
14	.	.	PUNCT	CLB	_	9	punct	_	_

~~~


