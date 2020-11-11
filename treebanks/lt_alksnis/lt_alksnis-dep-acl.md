---
layout: base
title:  'Statistics of acl in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="lt_alksnis-dep-acl-relcl.html">acl:relcl</a></tt>.

1908 nodes (3%) are attached to their parents as `acl`.

1313 instances of `acl` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.60272536687631.

The following 11 pairs of parts of speech are connected with `acl`: <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1818; 95% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (20; 1% instances), <tt><a href="lt_alksnis-pos-X.html">X</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (14; 1% instances), <tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (13; 1% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (10; 1% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (9; 0% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (7; 0% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="lt_alksnis-pos-DET.html">DET</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 acl	color:blue
1	Praėjusią	praeiti	VERB	vksm.dlv.veik.būt-k.mot.vns.G.	Aspect=Perf|Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	2	acl	2:acl	_
2	savaitę	savaitė	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	5	obl	5:obl:acc	_
3	vieną	vienas	PRON	įv.mot.vns.G.	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|PronType=Ind	4	nmod	4:nmod:acc	_
4	dieną	diena	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	5	obl	5:obl:acc	_
5	dirbau	dirbti	VERB	vksm.asm.tiesiog.būt-k.vns.1.	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	0:root	_
6	namuose	namai	NOUN	dkt.vyr.dgs.Vt.	Case=Loc|Gender=Masc|Number=Plur	5	obl	5:obl:loc	SpaceAfter=No
7	.	.	PUNCT	skyr.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl	color:blue
1	2006	2006	NUM	sktv.arab.	Definite=Ind|NumForm=Digit	2	nummod	2:nummod	_
2	m	m.	NOUN	sutr.	Abbr=Yes	4	obl	4:obl	SpaceAfter=No
3	.	.	PUNCT	skyr.	_	2	punct	2:punct	_
4	parengti	parengti	VERB	vksm.dlv.neveik.būt.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	2	2	NUM	sktv.arab.	Definite=Ind|NumForm=Digit	8	nummod	8:nummod	_
6	rekomendacinio	rekomendacinis	ADJ	bdv.nelygin.vyr.vns.K.	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	_
7	pobūdžio	pobūdis	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	8	nmod	8:nmod:gen	_
8	dokumentai	dokumentas	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	4	nsubj:pass	4:nsubj:pass	_
9	vietoje	vietoje	ADP	prl.K.	AdpType=Prep|Case=Gen	10	mark	10:mark	_
10	planuotų	planuoti	VERB	vksm.dlv.neveik.vyr.dgs.K.	Case=Gen|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	4	acl	4:acl:vietoje	_
11	10	10	NUM	sktv.arab.	Definite=Ind|NumForm=Digit	10	dep	10:dep	SpaceAfter=No
12	.	.	PUNCT	skyr.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl	color:blue
1	Tautos	tauta	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	2	nmod	2:nmod:gen	_
2	išrinktaisiais	išrinktasis	NOUN	dkt.vyr.dgs.Įn.	Case=Ins|Gender=Masc|Number=Plur	3	obl:arg	3:obl:arg:ins	_
3	nusivylę	nusivilti	VERB	vksm.dlv.sngr.veik.būt-k.vyr.dgs.V.	Aspect=Perf|Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Reflex=Yes|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
4	buvo	būti	AUX	vksm.asm.tiesiog.būt-k.dgs.3.	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	3	cop	3:cop	_
5	net	net	PART	dll.	_	6	advmod:emph	6:advmod:emph	_
6	80	80	NUM	sktv.arab.	Definite=Ind|NumForm=Digit	3	obl	3:obl	_
7	proc	proc.	X	sutr.	Abbr=Yes	6	nmod	6:nmod	SpaceAfter=No
8	.	.	PUNCT	skyr.	_	7	punct	7:punct	_
9	apklaustųjų	apklausti	VERB	vksm.dlv.neveik.būt.vyr.dgs.K.	Case=Gen|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	7	acl	7:acl	SpaceAfter=No
10	.	.	PUNCT	skyr.	_	3	punct	3:punct	_

~~~


