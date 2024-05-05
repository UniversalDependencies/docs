---
layout: base
title:  'Statistics of nsubj:cop in UD_Skolt_Sami-Giellagas'
udver: '2'
---

## Treebank Statistics: UD_Skolt_Sami-Giellagas: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="sms_giellagas-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="sms_giellagas-dep-nsubj-pass.html">nsubj:pass</a></tt>.

23 nodes (1%) are attached to their parents as `nsubj:cop`.

19 instances of `nsubj:cop` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.82608695652174.

The following 8 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (6; 26% instances), <tt><a href="sms_giellagas-pos-ADV.html">ADV</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (3; 13% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (3; 13% instances), <tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (3; 13% instances), <tt><a href="sms_giellagas-pos-VERB.html">VERB</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (3; 13% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sms_giellagas-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="sms_giellagas-pos-AUX.html">AUX</a></tt>-<tt><a href="sms_giellagas-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:cop	color:blue
1	”	”	PUNCT	PUNCT	_	3	punct	_	GTtags=RIGHT|SpaceAfter=No
2	Mii	mii	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	3	nsubj:cop	_	GTtags=Rel,Sg,Nom
3	oummust	ooumaž	NOUN	N	Animacy=Hum|Case=Loc|Number=Sing	0	root	_	GTtags=Sem/Hum,Sg,Loc
4	lij	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	GTtags=Ind,Prs,Sg3
5	jieʹtt	jieʹtt	NOUN	N	Case=Nom|Number=Sing	3	xcomp	_	GTtags=Sg,Nom|SpaceAfter=No
6	”	”	PUNCT	PUNCT	_	3	punct	_	GTtags=RIGHT|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:cop	color:blue
1	Čeäkkleemaainâs	čeäkkleemaainâs	NOUN	N	Case=Nom|Number=Sing	3	nsubj:cop	_	GTtags=Sg,Nom
2	lij	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	GTtags=Ind,Prs,Sg3,@+FMAINV
3	nuʹt	nuʹtt	ADV	Adv	_	0	root	_	GTtags=Err/Orth,@<ADVL
4	što	što	SCONJ	CS	_	3	ccomp	_	GTtags=@CVP
5	...	...	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:cop	color:blue
1	Õhtt	õhtt	NUM	Num	Case=Nom|Number=Sing|NumType=Card	2	nummod	_	GTtags=Sg,Nom
2	vuäʹbb	vuäʹbb	NOUN	N	Animacy=Hum|Case=Nom|Number=Sing	4	nsubj:cop	_	GTtags=Sem/Kin,Sg,Nom
3	lij	leeʹd	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	GTtags=Ind,Prs,Sg3
4	seeʹst	son	PRON	Pron	Case=Loc|Number=Plur|Person=3|PronType=Prs	0	root	_	GTtags=Pers,Pl3,Loc|SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


