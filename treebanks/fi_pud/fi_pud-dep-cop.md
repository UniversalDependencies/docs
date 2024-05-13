---
layout: base
title:  'Statistics of cop in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `cop`

This relation is universal.
There are 1 language-specific subtypes of `cop`: <tt><a href="fi_pud-dep-cop-own.html">cop:own</a></tt>.

365 nodes (2%) are attached to their parents as `cop`.

296 instances of `cop` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92328767123288.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (192; 53% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (101; 28% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (26; 7% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (16; 4% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (15; 4% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (10; 3% instances), <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="fi_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cop	color:blue
1	5000	5000	NUM	_	NumType=Card	2	nummod	2:nummod	_
2	dollaria	dollari	NOUN	_	Case=Par|Number=Sing	7	nsubj:cop	7:nsubj:cop	_
3	henkeä	henki	NOUN	_	Case=Par|Number=Sing	2	nmod	2:nmod	_
4	kohden	kohden	ADP	_	AdpType=Post	3	case	3:case	_
5	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	sallittu	sallittu	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	7	amod	7:amod	_
7	maksimimäärä	maksimi#määrä	NOUN	_	Case=Nom|Number=Sing	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	Ehkäpä	ehkäpä	ADV	_	_	5	advmod	5:advmod	_
2	pukukoodi	puku#koodi	NOUN	_	Case=Nom|Number=Sing	5	nsubj:cop	5:nsubj:cop	_
3	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
4	liian	liian	ADV	_	_	5	advmod	5:advmod	_
5	vanhanaikainen	vanhan#aikainen	ADJ	_	Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	Nykyään	nykyään	ADV	_	_	5	advmod	5:advmod	_
2	matkapuhelimemme	matka#puhelin	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Plur|Person[psor]=1	5	nsubj:cop	5:nsubj:cop	_
3	ovat	olla	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
4	paljon	paljon	ADV	_	_	5	advmod	5:advmod	_
5	enemmän	enemmän	ADV	_	_	0	root	0:root	_
6	kuin	kuin	SCONJ	_	_	7	mark	7:mark	_
7	puhelimia	puhelin	NOUN	_	Case=Par|Number=Plur	5	advcl	5:advcl	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


