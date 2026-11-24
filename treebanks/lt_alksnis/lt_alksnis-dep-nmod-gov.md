---
layout: base
title:  'Statistics of nmod:gov in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `nmod:gov`

This relation is a language-specific subtype of <tt><a href="lt_alksnis-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="lt_alksnis-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="lt_alksnis-dep-nmod-obl.html">nmod:obl</a></tt>.

250 nodes (0%) are attached to their parents as `nmod:gov`.

240 instances of `nmod:gov` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.912.

The following 14 pairs of parts of speech are connected with `nmod:gov`: <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (102; 41% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (92; 37% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (16; 6% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (15; 6% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (6; 2% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:gov	color:blue
1	Daugelis	daugelis	NOUN	dkt.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
2	vyrų	vyras	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	1	nmod:gov	_	_
3	savo	savęs	PRON	įv.savyb.K.	Case=Gen|Poss=Yes|PronType=Prs	4	nmod	_	_
4	automobilius	automobilis	NOUN	dkt.vyr.dgs.G.	Case=Acc|Gender=Masc|Number=Plur	5	obj	_	_
5	myli	mylėti	VERB	vksm.asm.tiesiog.es.3.	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	labiau	labai	ADV	prv.aukšt.	Degree=Cmp	5	advmod	_	_
7	negu	negu	SCONJ	jng.	_	9	mark	_	_
8	savo	savęs	PRON	įv.savyb.K.	Case=Gen|Poss=Yes|PronType=Prs	9	nmod	_	_
9	žmonas	žmona	NOUN	dkt.mot.dgs.G.	Case=Acc|Gender=Fem|Number=Plur	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	skyr.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nmod:gov	color:blue
1	Į	į	ADP	prl.G.	Case=Acc	2	case	_	_
2	aplinką	aplinka	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	6	obl:arg	_	_
3	tokiu	toks	DET	įv.vyr.vns.Įn.	Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	atveju	atvejis	NOUN	dkt.vyr.vns.Įn.	Case=Ins|Gender=Masc|Number=Sing	6	obl	_	_
5	būtų	būti	AUX	vksm.asm.tar.3.	Mood=Cnd|Person=3|VerbForm=Fin	6	aux:pass	_	_
6	išskiriama	išskirti	VERB	vksm.dlv.neveik.es.bev.	Gender=Neut|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	_
7	4	4	NUM	sktv.arab.	NumForm=Digit	8	nummod	_	_
8	kg	kg	NOUN	sutr.	Abbr=Yes	9	obl	_	_
9	mažiau	mažai	ADV	prv.aukšt.	Degree=Cmp	6	nsubj:pass	_	_
10	teršalų	teršalas	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	9	nmod:gov	_	SpaceAfter=No
11	.	.	PUNCT	skyr.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod:gov	color:blue
1	Kyla	kilti	VERB	vksm.asm.tiesiog.es.3.	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	ir	ir	PART	dll.	_	4	advmod:emph	_	_
3	dar	dar	PART	dll.	_	4	advmod:emph	_	_
4	keletas	keletas	PRON	įv.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	1	nsubj	_	_
5	bendro	bendras	ADJ	bdv.nelygin.vyr.vns.K.	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
6	pobūdžio	pobūdis	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	_
7	klausimų	klausimas	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	4	nmod:gov	_	SpaceAfter=No
8	.	.	PUNCT	skyr.	_	1	punct	_	_

~~~


