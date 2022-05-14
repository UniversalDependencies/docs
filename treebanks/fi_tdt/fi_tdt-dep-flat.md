---
layout: base
title:  'Statistics of flat in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="fi_tdt-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="fi_tdt-dep-flat-name.html">flat:name</a></tt>.

896 nodes (0%) are attached to their parents as `flat`.

896 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.78794642857143.

The following 9 pairs of parts of speech are connected with `flat`: <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (254; 28% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (242; 27% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (192; 21% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (131; 15% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (35; 4% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (21; 2% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (15; 2% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Tehty	tehdä	VERB	V	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
2	Brysselissä	Bryssel	PROPN	N	Case=Ine|Number=Sing	1	obl	1:obl	_
3	17	17	NUM	Num	NumType=Card	1	obl	1:obl	_
4	päivänä	päivä	NOUN	N	Case=Ess|Number=Sing	3	flat	3:flat	_
5	joulukuuta	joulukuu	NOUN	N	Case=Par|Number=Sing	3	flat	3:flat	_
6	1996	1996	NUM	Num	NumType=Card	3	flat	3:flat	SpaceAfter=No
7	.	.	PUNCT	Punct	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Tilaisuus	tilaisuus	NOUN	N	Case=Nom|Derivation=Inen,Vs|Number=Sing	4	nsubj:cop	4:nsubj:cop	_
2	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
3	Saksan	Saksa	PROPN	N	Case=Gen|Number=Sing	4	nmod:poss	4:nmod:poss	_
4	Kölnissä	Köln	PROPN	N	Case=Ine|Number=Sing	0	root	0:root	_
5	17.	17.	ADJ	Num	NumType=Ord	4	nmod	4:nmod	_
6	elokuuta	elokuu	NOUN	N	Case=Par|Number=Sing	5	flat	5:flat	SpaceAfter=No
7	.	.	PUNCT	Punct	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 flat	color:blue
1	Elokuvan	elo#kuva	NOUN	N	Case=Gen|Number=Sing	2	nmod:poss	2:nmod:poss	_
2	ensi-ilta	ensi-ilta	NOUN	N	Case=Nom|Number=Sing	4	nsubj:cop	4:nsubj:cop	_
3	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	30.	30.	ADJ	Num	NumType=Ord	0	root	0:root	_
5	marraskuuta	marraskuu	NOUN	N	Case=Par|Number=Sing	4	flat	4:flat	_
6	2009	2009	NUM	Num	NumType=Card	4	flat	4:flat	SpaceAfter=No
7	.	.	PUNCT	Punct	_	4	punct	4:punct	_

~~~


