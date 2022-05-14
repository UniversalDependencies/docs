---
layout: base
title:  'Statistics of aux:neg in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `aux:neg`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="sms_giellagas-dep-aux-nec.html">aux:nec</a></tt>, <tt><a href="sms_giellagas-dep-aux-tense.html">aux:tense</a></tt>.

41 nodes (2%) are attached to their parents as `aux:neg`.

41 instances of `aux:neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51219512195122.

The following 4 pairs of parts of speech are connected with `aux:neg`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (36; 88% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (2; 5% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (2; 5% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 aux:neg	color:blue
1	Jiõm	ij	AUX	Aux	Mood=Ind|Number=Sing|Person=1|Polarity=Neg	2	aux:neg	_	GTtags=Neg,Ind,Sg1
2	pâsttam	pâʹstted	VERB	Aux	Connegative=Yes|Mood=Ind|Tense=Past|Valency=1	0	root	_	GTtags=Ind,Prt,ConNeg
3	seuʹrrjed	seuʹrrjed	VERB	V	VerbForm=Inf	2	xcomp	_	GTtags=Inf
4	suu	son	PRON	Pron	Case=Gen|Number=Sing|Person=3|PronType=Prs	5	det	_	GTtags=Pers,Sg3,Gen
5	urččmõõžž	urččmõš	NOUN	N	Case=Acc|Number=Sing	3	obj	_	GTtags=Sg,Acc
6	ǥu	ǥu	SCONJ	CS	_	10	mark	_	_
7	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	GTtags=Pers,Sg3,Nom
8	leäi	leeʹd	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Tense=Past|Valency=1	10	cop	_	GTtags=IV,Ind,Prt,Sg3
9	samai	samai	ADV	Adv	_	10	advmod:deg	_	_
10	jåʹttel	jåʹttel	ADJ	A	Case=Nom|Number=Sing	2	advcl	_	GTtags=Sg,Nom|SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux:neg	color:blue
1	–	–	PUNCT	PUNCT	_	7	punct	_	_
2	”	”	PUNCT	PUNCT	_	7	punct	_	GTtags=RIGHT|SpaceAfter=No
3	No	no	INTJ	Interj	_	7	discourse	_	_
4	ij	ij	AUX	V	Mood=Ind|Number=Sing|Person=3|Polarity=Neg	7	aux:neg	_	GTtags=Neg,Ind,Sg3,@+FAUXV
5	kâʹl	kâʹl	ADV	Adv	_	7	advmod	_	_
6	leäkku	leeʹd	AUX	V	Connegative=Yes	7	cop	_	GTtags=ConNeg
7	šurr	šurr	ADJ	A	Case=Nom|Number=Sing	0	root	_	GTtags=Sg,Nom|SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	10	punct	_	_
9	mâʹte	mâʹte	ADV	Adv	_	10	mark	_	_
10	ton	ton	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	7	acl	_	GTtags=Pers,Sg2,Nom|SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	16	punct	_	_
12	tuu	ton	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	14	det	_	GTtags=Pers,Sg2,Gen
13	šoora	šoora	ADJ	A	_	14	amod	_	_
14	ooumaž	ooumaž	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	16	nsubj:cop	_	GTtags=Sem/Hum,Sg,Nom
15	lij	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	16	cop	_	GTtags=Ind,Prs,Sg3
16	nåkkam	nåkkam	PRON	Pron	Case=Nom|Number=Sing	7	conj	_	GTtags=Sg,Nom|SpaceAfter=No
17	.	.	PUNCT	PUNCT	_	7	punct	_	SpaceAfter=No
18	”	”	PUNCT	PUNCT	_	7	punct	_	GTtags=RIGHT

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 aux:neg	color:blue
1	Son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	GTtags=Pers,Sg3,Nom
2	mieʹccest	meäʹcc	NOUN	N	Case=Loc|Number=Sing	3	obl:lmod	_	GTtags=Sg,Loc
3	jåått	jååʹtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	GTtags=Ind,Prs,Sg3
4	de	de	CCONJ	CC	_	6	cc	_	_
5	kooʹddid	kåʹdd	NOUN	N	Case=Acc|Number=Plur	6	obj	_	GTtags=Pl,Acc
6	kådd	kåʹdded	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	conj	_	GTtags=Ind,Prs,Sg3
7	di	di	CCONJ	CC	_	8	cc	_	_
8	ceälkk	ceäʹlǩǩed	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	conj	_	GTtags=Ind,Prs,Sg3
9	što	što	SCONJ	CS	_	13	mark	_	_
10	pärnna	päʹrnn	NOUN	N	Animacy=Hum|Case=Ill|Number=Sing	14	obl:agent	_	GTtags=Kin,Sem/Kin,Sg,Ill
11	tueʹllj	tueʹllj	NOUN	N	Case=Acc|Number=Sing	14	nsubj:pass	_	GTtags=Sg,Acc
12	jiõk	ij	AUX	V	Mood=Ind|Number=Sing|Person=2|Polarity=Neg	13	aux:neg	_	GTtags=Neg,Ind,Sg2
13	õõlǥ	õlggâd	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres	8	ccomp	_	GTtags=Ind,Prs,ConNeg
14	kooǯǯted	kooǯǯted	VERB	V	VerbForm=Inf	13	xcomp	_	GTtags=Inf|SpaceAfter=No
15	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


