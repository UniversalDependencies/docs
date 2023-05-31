---
layout: base
title:  'Statistics of cop:own in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `cop:own`

This relation is a language-specific subtype of <tt><a href="fi_tdt-dep-cop.html">cop</a></tt>.

344 nodes (0%) are attached to their parents as `cop:own`.

326 instances of `cop:own` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.46802325581395.

The following 5 pairs of parts of speech are connected with `cop:own`: <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (223; 65% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (84; 24% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (30; 9% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop:own	color:blue
1	Lapsina	lapsi	NOUN	N	Case=Ess|Number=Plur	2	obl	2:obl	_
2	meillä	minä	PRON	Pron	Case=Ade|Number=Plur|Person=1|PronType=Prs	0	root	0:root	_
3	oli	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	cop:own	2:cop:own	_
4	maalla	maa	NOUN	N	Case=Ade|Number=Sing	2	obl	2:obl	_
5	satumetsä	satu#metsä	NOUN	N	Case=Nom|Number=Sing	2	nsubj:cop	2:nsubj:cop	SpaceAfter=No
6	.	.	PUNCT	Punct	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 cop:own	color:blue
1	Kielenopiskelijoilla	kielen#opiskelija	NOUN	N	Case=Ade|Derivation=Ja|Number=Plur	0	root	0:root	_
2	taas	taas	ADV	Adv	_	1	advmod	1:advmod	_
3	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop:own	1:cop:own	_
4	kaksi	kaksi	NUM	Num	Case=Nom|Number=Sing|NumType=Card	6	nummod	6:nummod	_
5	erillistä	erillinen	ADJ	A	Case=Par|Degree=Pos|Derivation=Llinen|Number=Sing	6	amod	6:amod	_
6	järjestelmää	järjestelmä	NOUN	N	Case=Par|Number=Sing	1	nsubj:cop	1:nsubj:cop	SpaceAfter=No
7	.	.	PUNCT	Punct	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop:own	color:blue
1	Herra	herra	NOUN	N	Case=Nom|Number=Sing	2	compound:nn	2:compound:nn	_
2	Rübigillä	Rübig	PROPN	N	Case=Ade|Number=Sing	0	root	0:root	_
3	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop:own	2:cop:own	_
4	puheenvuoro	puheen#vuoro	NOUN	N	Case=Nom|Number=Sing	2	nsubj:cop	2:nsubj:cop	_
5	eiliseen	eilinen	ADJ	A	Case=Ill|Degree=Pos|Derivation=Inen|Number=Sing	6	amod	6:amod	_
6	pöytäkirjaan	pöytä#kirja	NOUN	N	Case=Ill|Number=Sing	7	obl	7:obl	_
7	liittyen	liittyä	VERB	V	Case=Ins|InfForm=2|Number=Sing|VerbForm=Inf|Voice=Act	2	advcl	2:advcl	SpaceAfter=No
8	.	.	PUNCT	Punct	_	2	punct	2:punct	_

~~~


