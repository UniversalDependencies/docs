---
layout: base
title:  'Statistics of amod in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `amod`

This relation is universal.

11835 nodes (8%) are attached to their parents as `amod`.

11426 instances of `amod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30080270384453.

The following 10 pairs of parts of speech are connected with `amod`: <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (11513; 97% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (292; 2% instances), <tt><a href="bg_btb-pos-NUM.html">NUM</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="bg_btb-pos-PRON.html">PRON</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="bg_btb-pos-DET.html">DET</a></tt>-<tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Огрените	огрея	ADJ	Vpptcv--p-d	Aspect=Perf|Definite=Def|Degree=Pos|Number=Plur|VerbForm=Part|Voice=Pass	2	amod	2:amod	_
2	скали	скала	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	4	nsubj	4:nsubj	_
3	отсреща	отсреща	ADV	Dl	Degree=Pos	2	advmod	2:advmod	_
4	немееха	немея	VERB	Vpiif-m3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	punct	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Синьото	син	ADJ	Ansd	Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	2	amod	2:amod	_
2	БЗНС	бзнс	PROPN	Npnsi	Definite=Ind|Gender=Neut|Number=Sing	5	nsubj	5:nsubj	_
3	пак	пак	ADV	Dt	Degree=Pos	5	advmod	5:advmod	_
4	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	5	expl	5:expl	_
5	цепи	цепя-(се)	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Останалите	остана	ADJ	Vppicao-p-d	Aspect=Perf|Definite=Def|Degree=Pos|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	2	amod	2:amod	_
2	40	четиридесет	NUM	Mc-pi	Definite=Ind|Number=Plur|NumType=Card	7	nsubj	7:nsubj	_
3	на	на	ADP	R	_	4	case	4:case	_
4	сто	сто	NUM	Mc-pi	Definite=Ind|Number=Plur|NumType=Card	2	nmod	2:nmod:на	_
5	от	от	ADP	R	_	6	case	6:case	_
6	посевите	посев	NOUN	Ncmpd	Definite=Def|Gender=Masc|Number=Plur	2	nmod	2:nmod:от	_
7	били	съм	AUX	Vxitcat-p-i	Aspect=Imp|Definite=Ind|Mood=Ind|Number=Plur|VerbForm=Part|Voice=Act	13	ccomp	13:ccomp	_
8	в	в	ADP	R	_	9	case	9:case	_
9	процес	процес	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	7	iobj	7:iobj	_
10	на	на	ADP	R	_	11	case	11:case	_
11	поникване	поникване	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	9	nmod	9:nmod:на	SpaceAfter=No
12	,	,	PUNCT	punct	_	7	punct	7:punct	_
13	твърдят	твърдя	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
14	от	от	ADP	R	_	15	case	15:case	_
15	института	институт	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	13	obl	13:obl:от	SpaceAfter=No
16	.	.	PUNCT	punct	_	13	punct	13:punct	_

~~~


