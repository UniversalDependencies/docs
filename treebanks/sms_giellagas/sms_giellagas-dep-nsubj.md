---
layout: base
title:  'Statistics of nsubj in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="sms_giellagas-dep-nsubj-cop.html">nsubj:cop</a></tt>, <tt><a href="sms_giellagas-dep-nsubj-pass.html">nsubj:pass</a></tt>.

279 nodes (9%) are attached to their parents as `nsubj`.

251 instances of `nsubj` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76702508960573.

The following 12 pairs of parts of speech are connected with `nsubj`: <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (138; 49% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (115; 41% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (10; 4% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="sms_giellagas-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sms_giellagas-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj	color:blue
1	Vuõššân	vuõššân	ADV	Adv	AdvType=Tim	2	advmod	_	GTtags=Sem/Time
2	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3
3	källsaž	källsaž	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	GTtags=Sg,Nom|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	källsaž	källsaž	NOUN	N	Case=Nom|Number=Sing	6	nsubj	_	GTtags=Sg,Nom
6	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	GTtags=Ind,Prt,Sg3
7	de	de	CCONJ	CC	_	9	cc	_	_
8	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	GTtags=Pers,Sg3,Nom
9	jåått	jååʹtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	GTtags=Ind,Prs,Sg3
10	âʹtte	âʹtte	ADV	Adv	AdvType=Tim	9	advmod:tmod	_	GTtags=Sem/Time
11	mieʹccest	meäʹcc	NOUN	N	Case=Loc|Number=Sing	9	obl:lmod	_	GTtags=Sg,Loc|SpaceAfter=No
12	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nsubj	color:blue
1	Ij	ij	AUX	Aux	Mood=Ind|Number=Sing|Person=3|Polarity=Neg	2	aux:neg	_	GTtags=Neg,Ind,Sg3
2	kuuʹǩǩ	kuʹǩǩ	ADV	Adv	_	4	advmod:tmod	_	GTtags=Sg,Nom
3	leämmaž	leeʹd	AUX	V	Aspect=Perf|VerbForm=Part	4	cop	_	GTtags=IV,Act,PrfPrc
4	mieʹccest	meäʹcc	NOUN	N	Case=Loc|Number=Sing	0	root	_	GTtags=Sg,Loc|SpaceAfter=No
5	,	,	PUNCT	CLB	_	6	punct	_	_
6	iʹttli	iʹttled	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	advcl	_	GTtags=Ind,Prt,Sg3
7	kuʹmpp	kuʹmpp	NOUN	N	Case=Nom|Number=Sing	6	nsubj	_	GTtags=Sg,Nom
8	väʹst	väʹst	ADV	Adv	_	6	advmod	_	_
9	mååust	mååust	ADV	Adv	_	6	advmod:lmod	_	SpaceAfter=No
10	.	.	PUNCT	CLB	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj	color:blue
1	Vuõššân	vuõššân	ADV	Adv	AdvType=Tim	2	advmod	_	GTtags=Sem/Time
2	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	GTtags=Ind,Prt,Sg3
3	källsaž	källsaž	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	GTtags=Sg,Nom|SpaceAfter=No
4	,	,	PUNCT	CLB	_	6	punct	_	_
5	källsaž	källsaž	NOUN	N	Case=Nom|Number=Sing	6	nsubj	_	GTtags=Sg,Nom
6	leäi	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	conj	_	GTtags=Ind,Prt,Sg3
7	de	de	CCONJ	CC	_	9	cc	_	_
8	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	GTtags=Pers,Sg3,Nom
9	jåått	jååʹtted	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	2	conj	_	GTtags=Ind,Prs,Sg3
10	âʹtte	âʹtte	ADV	Adv	AdvType=Tim	9	advmod:tmod	_	GTtags=Sem/Time
11	mieʹccest	meäʹcc	NOUN	N	Case=Loc|Number=Sing	9	obl:lmod	_	GTtags=Sg,Loc|SpaceAfter=No
12	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


